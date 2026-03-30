import { afterEach, beforeAll, describe, expect, mock, test } from "bun:test";
import { JSDOM } from "jsdom";
import { createElement, createRoot, useState } from "@wordpress/element";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type {
  MapRuntimeConfig,
  StyleThemeColors,
  StyleThemeRecord,
  StyleThemeSlot,
} from "../../src/types";
import type { StylesController } from "../../src/admin/styles/types";

const originalGlobals = {
  document: globalThis.document,
  Element: globalThis.Element,
  getComputedStyle: globalThis.getComputedStyle,
  HTMLElement: globalThis.HTMLElement,
  HTMLIFrameElement: globalThis.HTMLIFrameElement,
  Node: globalThis.Node,
  navigator: globalThis.navigator,
  requestAnimationFrame: globalThis.requestAnimationFrame,
  cancelAnimationFrame: globalThis.cancelAnimationFrame,
  ResizeObserver: globalThis.ResizeObserver,
  window: globalThis.window,
};

const defaultColors: StyleThemeColors = {
  background: "#f2f3f0",
  park: "#d2e8d4",
  residential: "#e4e4e4",
  forest: "#d2e8d4",
  ice: "#e8f4f4",
  water: "#cad2d3",
  waterway: "#cad2d3",
  building: "#d9dad8",
  buildingOutline: "#d9dad8",
  path: "#ffffff",
  roadMinor: "#ffffff",
  roadMajorCasing: "#e5e5e5",
  roadMajorFill: "#ffffff",
  motorwayCasing: "#e5e5e5",
  motorwayFill: "#ffffff",
  rail: "#dcdcdc",
  railDash: "#ffffff",
  boundary: "#c3c3c3",
  aerowayLine: "#e0e0e0",
  aerowayArea: "#d1d1d1",
  waterLabel: "#7a7a7a",
  waterLabelHalo: "#ffffff",
  roadLabel: "#666666",
  roadLabelHalo: "#ffffff",
  airportIcon: "#666666",
  placeLabel: "#333333",
  placeLabelHalo: "#ffffff",
  placeIcon: "#000000",
};

const alternateColors: StyleThemeColors = {
  ...defaultColors,
  background: "#111111",
  park: "#222222",
  water: "#333333",
};

const defaultTheme: StyleThemeRecord = {
  slug: "default",
  label: "Default Theme",
  basePreset: "positron",
  colors: defaultColors,
};

const alternateTheme: StyleThemeRecord = {
  slug: "alt",
  label: "Alternate Theme",
  basePreset: "positron",
  colors: alternateColors,
};

beforeAll(() => {
  mock.module("@wordpress/components", () => ({
    Card: ({
      children,
      className,
    }: {
      children: ReactNode;
      className?: string;
    }) => createElement("div", { className }, children),
    CardBody: ({ children }: { children: ReactNode }) =>
      createElement("div", { className: "components-card__body" }, children),
    CheckboxControl: ({
      label,
      hideLabelFromVision,
      checked,
      onChange,
    }: {
      label: string;
      hideLabelFromVision?: boolean;
      checked?: boolean;
      onChange: (checked: boolean) => void;
    }) =>
      createElement(
        "label",
        null,
        createElement("input", {
          "aria-label": label,
          checked: Boolean(checked),
          onChange: (event: Event) =>
            onChange((event.currentTarget as HTMLInputElement).checked),
          type: "checkbox",
        }),
        hideLabelFromVision ? null : label,
      ),
    ColorIndicator: ({ colorValue }: { colorValue: string }) =>
      createElement("span", {
        className: "components-color-indicator",
        "data-color-value": colorValue,
      }),
    ColorPicker: ({
      color,
      onChange,
    }: {
      color: string;
      onChange: (color: string) => void;
    }) =>
      createElement("input", {
        "aria-label": "Color picker",
        onChange: (event: Event) =>
          onChange((event.currentTarget as HTMLInputElement).value),
        onInput: (event: Event) =>
          onChange((event.currentTarget as HTMLInputElement).value),
        type: "color",
        value: color,
      }),
    DropZone: () => null,
    Dropdown: ({
      renderToggle,
      renderContent,
    }: {
      renderToggle: (args: {
        isOpen: boolean;
        onToggle: () => void;
      }) => ReactNode;
      renderContent: () => ReactNode;
    }) => {
      const [isOpen, setIsOpen] = useState(false);

      return createElement(
        "div",
        null,
        renderToggle({
          isOpen,
          onToggle: () => setIsOpen(true),
        }),
        isOpen ? renderContent() : null,
      );
    },
    Notice: ({ children }: { children: ReactNode }) =>
      createElement("div", null, children),
    Spinner: () => createElement("div", null, "Loading"),
  }));

  mock.module("../../src/admin/styles/CreateThemeModal", () => ({
    CreateThemeModal: () => null,
  }));

  mock.module("../../src/admin/styles/DeleteThemeModal", () => ({
    DeleteThemeModal: () => null,
  }));

  mock.module("../../src/map/bootstrap", () => ({
    createMinimalMap: () => ({
      destroy() {},
      update() {},
    }),
  }));
});

function setGlobalDom(dom: JSDOM): void {
  globalThis.window = dom.window as never;
  globalThis.document = dom.window.document as never;
  globalThis.Element = dom.window.Element as never;
  globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
  globalThis.navigator = dom.window.navigator as never;
  globalThis.HTMLElement = dom.window.HTMLElement as never;
  globalThis.HTMLIFrameElement = dom.window.HTMLIFrameElement as never;
  globalThis.Node = dom.window.Node as never;
  globalThis.ResizeObserver =
    globalThis.ResizeObserver ??
    (class {
      disconnect() {}
      observe() {}
      unobserve() {}
    } as never);
  globalThis.window.matchMedia =
    globalThis.window.matchMedia ??
    (() =>
      ({
        addEventListener() {},
        addListener() {},
        dispatchEvent() {
          return false;
        },
        matches: false,
        media: "",
        onchange: null,
        removeEventListener() {},
        removeListener() {},
      }) as MediaQueryList);
  globalThis.window.requestAnimationFrame =
    globalThis.window.requestAnimationFrame ??
    ((callback: FrameRequestCallback) => globalThis.window.setTimeout(callback, 0));
  globalThis.window.cancelAnimationFrame =
    globalThis.window.cancelAnimationFrame ??
    ((handle: number) => globalThis.window.clearTimeout(handle));
  globalThis.requestAnimationFrame =
    globalThis.requestAnimationFrame ??
    globalThis.window.requestAnimationFrame.bind(globalThis.window);
  globalThis.cancelAnimationFrame =
    globalThis.cancelAnimationFrame ??
    globalThis.window.cancelAnimationFrame.bind(globalThis.window);
}

async function flushRender(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 0));
}

function getCheckbox(container: HTMLElement, label: string): HTMLInputElement {
  const checkbox = container.querySelector(
    `input[type="checkbox"][aria-label="${label}"]`,
  ) as HTMLInputElement | null;

  if (!checkbox) {
    throw new Error(`Checkbox "${label}" not found`);
  }

  return checkbox;
}

function getColorButton(container: HTMLElement, label: string): HTMLButtonElement {
  const button = Array.from(container.querySelectorAll("button")).find(
    (candidate) =>
      candidate.getAttribute("aria-label") === `Select ${label} color`,
  ) as HTMLButtonElement | undefined;

  if (!button) {
    throw new Error(`Color button "${label}" not found`);
  }

  return button;
}

function setOpenColorPickerValue(
  container: HTMLElement,
  dom: JSDOM,
  value: string,
): void {
  const input = container.querySelector(
    'input[type="color"][aria-label="Color picker"]',
  ) as HTMLInputElement | null;

  if (!input) {
    throw new Error("Open color picker not found");
  }

  input.value = value;
  input.dispatchEvent(new dom.window.Event("input", { bubbles: true }));
  input.dispatchEvent(new dom.window.Event("change", { bubbles: true }));
}

function ColorState({ draftColors }: { draftColors: StyleThemeColors }) {
  return createElement(
    "div",
    null,
    createElement("div", { "data-slot": "background" }, draftColors.background),
    createElement("div", { "data-slot": "park" }, draftColors.park),
    createElement("div", { "data-slot": "water" }, draftColors.water),
  );
}

function createController(
  draftColors: StyleThemeColors,
  setDraftColors: Dispatch<SetStateAction<StyleThemeColors>>,
  activeTheme: StyleThemeRecord,
  setActiveTheme: Dispatch<SetStateAction<StyleThemeRecord>>,
): StylesController {
  return {
    themes: [defaultTheme, alternateTheme],
    activeTheme,
    paletteTemplates: [],
    isLoading: false,
    isSaving: false,
    isApplyingPaletteTemplate: false,
    draftColors,
    actionNotice: null,
    setDraftColor: (slot: string, color: string) => {
      setDraftColors((currentColors) => ({
        ...currentColors,
        [slot as StyleThemeSlot]: color,
      }));
    },
    saveTheme: async () => {},
    createTheme: async () => {},
    deleteTheme: async () => {},
    applyPaletteTemplate: async () => {},
    switchTheme: (slug: string) => {
      const nextTheme = slug === "alt" ? alternateTheme : defaultTheme;
      setActiveTheme(nextTheme);
      setDraftColors({ ...nextTheme.colors });
    },
    onImportFiles: async () => {},
    exportTheme: () => {},
    headerAction: null,
    dismissActionNotice: () => {},
    isCreateModalOpen: false,
    isDeleteModalOpen: false,
    openCreateModal: () => {},
    closeCreateModal: () => {},
    openDeleteModal: () => {},
    closeDeleteModal: () => {},
  };
}

afterEach(() => {
  globalThis.window = originalGlobals.window;
  globalThis.document = originalGlobals.document;
  globalThis.Element = originalGlobals.Element;
  globalThis.getComputedStyle = originalGlobals.getComputedStyle;
  globalThis.navigator = originalGlobals.navigator;
  globalThis.HTMLElement = originalGlobals.HTMLElement;
  globalThis.HTMLIFrameElement = originalGlobals.HTMLIFrameElement;
  globalThis.Node = originalGlobals.Node;
  globalThis.requestAnimationFrame = originalGlobals.requestAnimationFrame;
  globalThis.cancelAnimationFrame = originalGlobals.cancelAnimationFrame;
  globalThis.ResizeObserver = originalGlobals.ResizeObserver;
});

describe("styles view multi edit", () => {
  test("supports select-all, mixed state, synchronized multi-edit, and reset on reload", async () => {
    const dom = new JSDOM("<!doctype html><div id=\"host\"></div>");
    setGlobalDom(dom);
    const host = dom.window.document.getElementById("host") as HTMLDivElement;
    const root = createRoot(host);
    const runtimeConfig: MapRuntimeConfig = {};
    const { default: StylesView } = await import("../../src/admin/styles");

    function Harness() {
      const [draftColors, setDraftColors] = useState<StyleThemeColors>({
        ...defaultColors,
      });
      const [activeTheme, setActiveTheme] = useState<StyleThemeRecord>(
        defaultTheme,
      );
      const controller = createController(
        draftColors,
        setDraftColors,
        activeTheme,
        setActiveTheme,
      );

      return createElement(
        "div",
        null,
        createElement(
          "button",
          {
            id: "reload-draft",
            onClick: () => setDraftColors({ ...activeTheme.colors }),
            type: "button",
          },
          "Reload draft",
        ),
        createElement(
          "button",
          {
            id: "switch-theme",
            onClick: () => controller.switchTheme("alt"),
            type: "button",
          },
          "Switch theme",
        ),
        createElement(StylesView, {
          controller,
          runtimeConfig,
        }),
        createElement(ColorState, { draftColors }),
      );
    }

    try {
      root.render(createElement(Harness));
      await flushRender();
      await flushRender();

      const firstCard = host.querySelector(
        ".minimal-map-styles__controls .minimal-map-styles__group-card",
      ) as HTMLElement | null;
      expect(firstCard?.textContent).toContain("Select all colors");

      const multiEditButton = getColorButton(host, "Select all colors");
      expect(multiEditButton.disabled).toBe(true);

      const backgroundCheckbox = getCheckbox(host, "Background");
      backgroundCheckbox.click();
      await flushRender();

      const selectAllCheckbox = getCheckbox(host, "Select all colors");
      expect(selectAllCheckbox.indeterminate).toBe(true);
      expect(getColorButton(host, "Select all colors").disabled).toBe(false);

      getColorButton(host, "Background").click();
      await flushRender();
      setOpenColorPickerValue(host, dom, "#111111");
      await flushRender();

      expect(host.querySelector('[data-slot="background"]')?.textContent).toBe(
        "#111111",
      );
      expect(host.querySelector('[data-slot="park"]')?.textContent).toBe(
        defaultColors.park,
      );

      const parksCheckbox = getCheckbox(host, "Parks");
      parksCheckbox.click();
      await flushRender();

      expect(getColorButton(host, "Select all colors").textContent).toContain(
        "Mixed",
      );
      const mixedIndicator = host.querySelector(
        ".minimal-map-styles__color-indicator--mixed",
      ) as HTMLElement | null;
      expect(mixedIndicator).not.toBeNull();
      expect(mixedIndicator?.getAttribute("data-mixed-gradient")).toContain(
        "#111111",
      );
      expect(mixedIndicator?.getAttribute("data-mixed-gradient")).toContain(
        defaultColors.park,
      );

      getColorButton(host, "Background").click();
      await flushRender();
      setOpenColorPickerValue(host, dom, "#222222");
      await flushRender();

      expect(host.querySelector('[data-slot="background"]')?.textContent).toBe(
        "#222222",
      );
      expect(host.querySelector('[data-slot="park"]')?.textContent).toBe(
        "#222222",
      );

      getColorButton(host, "Select all colors").click();
      await flushRender();
      setOpenColorPickerValue(host, dom, "#333333");
      await flushRender();

      expect(host.querySelector('[data-slot="background"]')?.textContent).toBe(
        "#333333",
      );
      expect(host.querySelector('[data-slot="park"]')?.textContent).toBe(
        "#333333",
      );

      selectAllCheckbox.click();
      await flushRender();

      expect(getCheckbox(host, "Water Surfaces").checked).toBe(true);
      expect(getCheckbox(host, "Select all colors").checked).toBe(true);

      (
        host.querySelector("#reload-draft") as HTMLButtonElement | null
      )?.click();
      await flushRender();

      expect(getCheckbox(host, "Background").checked).toBe(false);
      expect(getCheckbox(host, "Select all colors").checked).toBe(false);
      expect(getColorButton(host, "Select all colors").disabled).toBe(true);

      (
        host.querySelector("#switch-theme") as HTMLButtonElement | null
      )?.click();
      await flushRender();

      expect(host.querySelector('[data-slot="background"]')?.textContent).toBe(
        alternateColors.background,
      );
      expect(getCheckbox(host, "Select all colors").checked).toBe(false);
      expect(getColorButton(host, "Select all colors").disabled).toBe(true);
    } finally {
      root.unmount();
    }
  });
});
