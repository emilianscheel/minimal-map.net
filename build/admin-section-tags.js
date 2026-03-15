"use strict";
(globalThis["webpackChunkminimal_map"] = globalThis["webpackChunkminimal_map"] || []).push([["admin-section-tags"],{

/***/ "./src/admin/ContentHeader.tsx"
/*!*************************************!*\
  !*** ./src/admin/ContentHeader.tsx ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ContentHeader({
  actions,
  description,
  title
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
    className: "minimal-map-admin__header",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "minimal-map-admin__header-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "minimal-map-admin__header-copy",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
          className: "minimal-map-admin__header-title",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          className: "minimal-map-admin__header-description",
          children: description
        })]
      }), actions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "minimal-map-admin__header-actions",
        children: actions
      }) : null]
    })
  });
}

/***/ },

/***/ "./src/admin/sections/TagsSection.tsx"
/*!********************************************!*\
  !*** ./src/admin/sections/TagsSection.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var _ContentHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContentHeader */ "./src/admin/ContentHeader.tsx");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tags */ "./src/admin/tags/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function TagsSection({
  activeSection,
  appConfig
}) {
  const controller = (0,_tags__WEBPACK_IMPORTED_MODULE_1__.useTagsController)(appConfig.tagsConfig, true, {
    activeTheme: null,
    themes: [],
    onSwitchTheme: () => undefined
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ContentHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: activeSection.title,
      description: activeSection.description,
      actions: controller.headerAction
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "minimal-map-admin__content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tags__WEBPACK_IMPORTED_MODULE_1__["default"], {
        controller: controller
      })
    })]
  });
}

/***/ },

/***/ "./src/admin/styles/ColorControl.tsx"
/*!*******************************************!*\
  !*** ./src/admin/styles/ColorControl.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorControl: () => (/* binding */ ColorControl)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ColorControl({
  label,
  color,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "minimal-map-styles__color-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "minimal-map-styles__color-label",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
      renderToggle: ({
        isOpen,
        onToggle
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
        type: "button",
        className: "minimal-map-styles__color-toggle",
        onClick: onToggle,
        "aria-expanded": isOpen,
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select color', 'minimal-map'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorIndicator, {
          colorValue: color
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "minimal-map-styles__color-value",
          children: color
        })]
      }),
      renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "minimal-map-styles__color-picker-popover",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
          color: color,
          onChange: onChange,
          enableAlpha: false,
          copyFormat: "hex"
        })
      })
    })]
  });
}

/***/ },

/***/ "./src/admin/tags/TagDialog.tsx"
/*!**************************************!*\
  !*** ./src/admin/tags/TagDialog.tsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagDialog)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/locations/shouldHandleDialogEnter */ "./src/lib/locations/shouldHandleDialogEnter.ts");
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var _styles_ColorControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ColorControl */ "./src/admin/styles/ColorControl.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function TagDialog({
  controller
}) {
  if (!controller.isDialogOpen) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__collection-modal",
    title: controller.modalTitle,
    onRequestClose: controller.onCancel,
    shouldCloseOnClickOutside: !controller.isSubmitting,
    shouldCloseOnEsc: !controller.isSubmitting,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "minimal-map-admin__collection-dialog",
      onKeyDown: event => {
        if (controller.isSubmitting || !(0,_lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_2__.shouldHandleDialogEnter)(event)) {
          return;
        }
        event.preventDefault();
        void controller.onConfirm();
      },
      children: [controller.submitError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "error",
        isDismissible: false,
        children: controller.submitError
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "minimal-map-admin__location-dialog-fields",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name', 'minimal-map'),
          value: controller.form.name,
          onChange: value => controller.onChangeFormValue('name', value),
          autoFocus: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_ColorControl__WEBPACK_IMPORTED_MODULE_4__.ColorControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'minimal-map'),
          color: controller.form.background_color,
          onChange: value => controller.onChangeFormValue('background_color', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_ColorControl__WEBPACK_IMPORTED_MODULE_4__.ColorControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Foreground Color', 'minimal-map'),
          color: controller.form.foreground_color,
          onChange: value => controller.onChangeFormValue('foreground_color', value)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "minimal-map-admin__collection-dialog-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: controller.onCancel,
          disabled: controller.isSubmitting,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          onClick: () => void controller.onConfirm(),
          isBusy: controller.isSubmitting,
          disabled: controller.isSubmitting,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: controller.submitLabel
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_3__["default"], {
              variant: "blue",
              children: "Enter"
            })]
          })
        })]
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/tags/TagsEmptyState.tsx"
/*!*******************************************!*\
  !*** ./src/admin/tags/TagsEmptyState.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagsEmptyState)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/tags.js");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/EmptyState */ "./src/components/EmptyState/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




function TagsEmptyState({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No tags found', 'minimal-map'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Create tags to apply lightweight labels to your locations. This helps you keep your map content organized and easy to search.', 'minimal-map'),
    action: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add tag', 'minimal-map'),
      onClick: controller.onAddTag,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    }
  });
}

/***/ },

/***/ "./src/admin/tags/TagsGrid.tsx"
/*!*************************************!*\
  !*** ./src/admin/tags/TagsGrid.tsx ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagsGrid)
/* harmony export */ });
/* harmony import */ var _wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dataviews/wp */ "./node_modules/@wordpress/dataviews/build-wp/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pencil.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _components_TagBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TagBadge */ "./src/components/TagBadge/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






function TagsGrid({
  controller
}) {
  const fields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{
    id: 'name',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    enableGlobalSearch: true
  }, {
    id: 'map_preview',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preview', 'minimal-map'),
    type: 'media',
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "minimal-map-admin__tag-grid-preview-surface",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "minimal-map-admin__tag-grid-preview",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_TagBadge__WEBPACK_IMPORTED_MODULE_5__["default"], {
          tag: item
        })
      })
    })
  }], []);
  const actions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{
    id: 'edit',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit', 'minimal-map'),
    isPrimary: true,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 18
    }),
    callback: items => {
      if (items.length === 1) {
        controller.onEditTag(items[0]);
      }
    }
  }, {
    id: 'delete',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete', 'minimal-map'),
    isPrimary: false,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: 18
    }),
    isDestructive: true,
    callback: items => {
      if (items.length === 1) {
        void controller.onDeleteTag(items[0]);
      }
    },
    isEligible: () => !controller.isRowActionPending
  }], [controller]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "minimal-map-admin__collections-grid-wrap minimal-map-admin__tags-grid-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews, {
      actions: actions,
      data: controller.paginatedTags,
      fields: fields,
      getItemId: item => `${item.id}`,
      paginationInfo: {
        totalItems: controller.tags.length,
        totalPages: controller.totalPages
      },
      defaultLayouts: {
        grid: {}
      },
      view: controller.view,
      onChangeView: nextView => controller.onChangeView(nextView),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "minimal-map-admin__collections-dataviews-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Search, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Layout, {
        className: "minimal-map-admin__collections-grid-layout"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Footer, {})]
    })
  });
}

/***/ },

/***/ "./src/admin/tags/constants.ts"
/*!*************************************!*\
  !*** ./src/admin/tags/constants.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_FORM_STATE: () => (/* binding */ DEFAULT_FORM_STATE),
/* harmony export */   DEFAULT_GRID_VIEW: () => (/* binding */ DEFAULT_GRID_VIEW)
/* harmony export */ });
const DEFAULT_FORM_STATE = {
  name: '',
  background_color: '#000000',
  foreground_color: '#ffffff'
};
const DEFAULT_GRID_VIEW = {
  type: 'grid',
  page: 1,
  perPage: 20,
  titleField: 'name',
  mediaField: 'map_preview',
  fields: [],
  showMedia: true,
  showTitle: true,
  showDescription: false,
  layout: {
    previewSize: 280,
    badgeFields: []
  }
};

/***/ },

/***/ "./src/admin/tags/controller.tsx"
/*!***************************************!*\
  !*** ./src/admin/tags/controller.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTagsController: () => (/* binding */ useTagsController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/admin/tags/constants.ts");
/* harmony import */ var _lib_tags_fetchAllTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/tags/fetchAllTags */ "./src/lib/tags/fetchAllTags.ts");
/* harmony import */ var _lib_tags_createTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/tags/createTag */ "./src/lib/tags/createTag.ts");
/* harmony import */ var _lib_tags_updateTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/tags/updateTag */ "./src/lib/tags/updateTag.ts");
/* harmony import */ var _lib_tags_deleteTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/tags/deleteTag */ "./src/lib/tags/deleteTag.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










function useTagsController(config, enabled, themeData) {
  const [actionNotice, setActionNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [tags, setTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [editingTag, setEditingTag] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [form, setForm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_FORM_STATE);
  const [formMode, setFormMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('create');
  const [isDialogOpen, setDialogOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isLoading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(enabled);
  const [isRowActionPending, setRowActionPending] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isSubmitting, setSubmitting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [loadError, setLoadError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [submitError, setSubmitError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [view, setView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GRID_VIEW);
  const loadTags = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!enabled) {
      return;
    }
    setLoading(true);
    setLoadError(null);
    try {
      const records = await (0,_lib_tags_fetchAllTags__WEBPACK_IMPORTED_MODULE_5__.fetchAllTags)(config);
      setTags(records);
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tags could not be loaded.', 'minimal-map'));
    } finally {
      setLoading(false);
    }
  }, [config, enabled]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    void loadTags();
  }, [loadTags]);
  const resetDialogState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setEditingTag(null);
    setForm(_constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_FORM_STATE);
    setFormMode('create');
    setSubmitError(null);
  }, []);
  const onAddTag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    resetDialogState();
    setDialogOpen(true);
  }, [resetDialogState]);
  const onEditTag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(tag => {
    resetDialogState();
    setEditingTag(tag);
    setFormMode('edit');
    setForm({
      name: tag.name,
      background_color: tag.background_color,
      foreground_color: tag.foreground_color
    });
    setDialogOpen(true);
  }, [resetDialogState]);
  const onCancel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (isSubmitting) {
      return;
    }
    setDialogOpen(false);
  }, [isSubmitting]);
  const onChangeFormValue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((key, value) => {
    setForm(currentForm => ({
      ...currentForm,
      [key]: value
    }));
    setSubmitError(null);
  }, []);
  const onConfirm = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!form.name.trim()) {
      setSubmitError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tag name is required.', 'minimal-map'));
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    setActionNotice(null);
    try {
      if (formMode === 'edit' && editingTag) {
        await (0,_lib_tags_updateTag__WEBPACK_IMPORTED_MODULE_7__.updateTag)(config, editingTag.id, form);
      } else {
        await (0,_lib_tags_createTag__WEBPACK_IMPORTED_MODULE_6__.createTag)(config, form);
      }
      await loadTags();
      setDialogOpen(false);
      resetDialogState();
      setActionNotice({
        status: 'success',
        message: formMode === 'edit' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tag updated.', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tag created.', 'minimal-map')
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : formMode === 'edit' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tag could not be updated.', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tag could not be created.', 'minimal-map'));
    } finally {
      setSubmitting(false);
    }
  }, [config, editingTag, form, formMode, loadTags, resetDialogState]);
  const onDeleteTag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async tag => {
    setRowActionPending(true);
    setActionNotice(null);
    try {
      await (0,_lib_tags_deleteTag__WEBPACK_IMPORTED_MODULE_8__.deleteTag)(config, tag.id);
      await loadTags();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tag deleted.', 'minimal-map')
      });
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tag could not be deleted.', 'minimal-map')
      });
      throw error;
    } finally {
      setRowActionPending(false);
    }
  }, [config, loadTags]);
  const paginatedTags = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const filtered = tags.filter(tag => {
      if (!view.search) {
        return true;
      }
      return tag.name.toLowerCase().includes(view.search.toLowerCase());
    });
    const page = view.page ?? 1;
    const perPage = view.perPage ?? 20;
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [tags, view]);
  const totalPages = Math.max(1, Math.ceil(tags.length / (view.perPage ?? 20)));
  return {
    actionNotice,
    activeTheme: themeData.activeTheme,
    dismissActionNotice: () => setActionNotice(null),
    headerAction: enabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "minimal-map-admin__header-actions-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        __next40pxDefaultSize: true,
        variant: "primary",
        onClick: onAddTag,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: 18,
          strokeWidth: 2
        }),
        iconPosition: "left",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add tag', 'minimal-map')
      })
    }) : null,
    isLoading,
    isRowActionPending,
    isSubmitting,
    isDialogOpen,
    loadError,
    tags,
    form,
    formMode,
    modalTitle: formMode === 'edit' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit tag', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add tag', 'minimal-map'),
    submitLabel: formMode === 'edit' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save changes', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add tag', 'minimal-map'),
    submitError,
    onAddTag,
    onDeleteTag,
    onEditTag,
    onConfirm,
    onCancel,
    onChangeFormValue,
    onChangeView: nextView => setView(nextView),
    paginatedTags,
    totalPages,
    view
  };
}

/***/ },

/***/ "./src/admin/tags/index.tsx"
/*!**********************************!*\
  !*** ./src/admin/tags/index.tsx ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagsView),
/* harmony export */   useTagsController: () => (/* reexport safe */ _controller__WEBPACK_IMPORTED_MODULE_5__.useTagsController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TagsEmptyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagsEmptyState */ "./src/admin/tags/TagsEmptyState.tsx");
/* harmony import */ var _TagsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagsGrid */ "./src/admin/tags/TagsGrid.tsx");
/* harmony import */ var _TagDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TagDialog */ "./src/admin/tags/TagDialog.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller */ "./src/admin/tags/controller.tsx");





function TagsView({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "minimal-map-admin__tags-view",
    children: [controller.actionNotice ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__locations-notice",
      status: controller.actionNotice.status,
      onDismiss: controller.dismissActionNotice,
      children: controller.actionNotice.message
    }) : null, controller.loadError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__locations-notice",
      status: "error",
      isDismissible: false,
      children: controller.loadError
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "minimal-map-admin__tags-content",
      children: controller.isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "minimal-map-admin__locations-state minimal-map-admin__locations-state--loading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, {})
      }) : controller.tags.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TagsEmptyState__WEBPACK_IMPORTED_MODULE_1__["default"], {
        controller: controller
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TagsGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        controller: controller
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TagDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
      controller: controller
    })]
  });
}


/***/ },

/***/ "./src/components/EmptyState/index.tsx"
/*!*********************************************!*\
  !*** ./src/components/EmptyState/index.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyState)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/EmptyState/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function EmptyState({
  icon,
  title,
  description,
  action,
  className = ''
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: `minimal-map-admin__empty-state-container ${className}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "minimal-map-admin__empty-state-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "minimal-map-admin__empty-state-icon",
        children: icon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: "minimal-map-admin__empty-state-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "minimal-map-admin__empty-state-description",
        children: description
      }), action && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        onClick: action.onClick,
        disabled: action.disabled,
        __next40pxDefaultSize: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "minimal-map-admin__empty-state-button-content",
          children: [action.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: action.label
          })]
        })
      })]
    })
  });
}

/***/ },

/***/ "./src/components/Kbd/index.tsx"
/*!**************************************!*\
  !*** ./src/components/Kbd/index.tsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Kbd)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/Kbd/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Kbd({
  children,
  variant = 'neutral'
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("kbd", {
    className: `minimal-map-kbd minimal-map-kbd--${variant}`,
    children: children
  });
}

/***/ },

/***/ "./src/components/TagBadge/index.tsx"
/*!*******************************************!*\
  !*** ./src/components/TagBadge/index.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TagBadge({
  tag,
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    className: `minimal-map-tag-badge ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "var(--minimal-map-tag-badge-padding, 5px 8px)",
      borderRadius: "var(--minimal-map-tag-badge-border-radius, 18px)",
      fontSize: "var(--minimal-map-tag-badge-font-size, 11px)",
      fontWeight: "var(--minimal-map-tag-badge-font-weight, 600)",
      whiteSpace: "nowrap",
      backgroundColor: tag.background_color || "#000000",
      color: tag.foreground_color || "#ffffff"
    },
    children: tag.name
  });
}

/***/ },

/***/ "./src/lib/locations/shouldHandleDialogEnter.ts"
/*!******************************************************!*\
  !*** ./src/lib/locations/shouldHandleDialogEnter.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shouldHandleDialogEnter: () => (/* binding */ shouldHandleDialogEnter)
/* harmony export */ });
function shouldHandleDialogEnter(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  const tagName = target.tagName.toLowerCase();
  if (tagName === 'button' || tagName === 'textarea') {
    return false;
  }
  if (target.getAttribute('role') === 'button') {
    return false;
  }
  return event.key === 'Enter' && !event.shiftKey;
}

/***/ },

/***/ "./src/lib/tags/createTag.ts"
/*!***********************************!*\
  !*** ./src/lib/tags/createTag.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTag: () => (/* binding */ createTag)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalizeTagRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeTagRecord */ "./src/lib/tags/normalizeTagRecord.ts");


async function createTag(config, form) {
  const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: config.restPath,
    method: 'POST',
    data: {
      name: form.name.trim(),
      meta: {
        background_color: form.background_color,
        foreground_color: form.foreground_color
      }
    }
  });
  return (0,_normalizeTagRecord__WEBPACK_IMPORTED_MODULE_1__.normalizeTagRecord)(response);
}

/***/ },

/***/ "./src/lib/tags/deleteTag.ts"
/*!***********************************!*\
  !*** ./src/lib/tags/deleteTag.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTag: () => (/* binding */ deleteTag)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

async function deleteTag(config, tagId) {
  await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${config.restPath}/${tagId}?force=true`,
    method: 'DELETE'
  });
}

/***/ },

/***/ "./src/lib/tags/fetchAllTags.ts"
/*!**************************************!*\
  !*** ./src/lib/tags/fetchAllTags.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllTags: () => (/* binding */ fetchAllTags)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalizeTagRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeTagRecord */ "./src/lib/tags/normalizeTagRecord.ts");


async function fetchAllTags(config) {
  const tags = [];
  let page = 1;
  let totalPages = 1;
  while (page <= totalPages) {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `${config.restPath}?page=${page}&per_page=100&context=edit`,
      parse: false
    });
    const records = await response.json();
    tags.push(...records.map(_normalizeTagRecord__WEBPACK_IMPORTED_MODULE_1__.normalizeTagRecord));
    totalPages = Number(response.headers.get('X-WP-TotalPages') || '1');
    page += 1;
  }
  return tags;
}

/***/ },

/***/ "./src/lib/tags/normalizeTagRecord.ts"
/*!********************************************!*\
  !*** ./src/lib/tags/normalizeTagRecord.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeTagRecord: () => (/* binding */ normalizeTagRecord)
/* harmony export */ });
function normalizeTagRecord(record) {
  return {
    id: record.id,
    name: record.name || '',
    count: record.count || 0,
    background_color: record.meta?.background_color || '#000000',
    foreground_color: record.meta?.foreground_color || '#ffffff'
  };
}

/***/ },

/***/ "./src/lib/tags/updateTag.ts"
/*!***********************************!*\
  !*** ./src/lib/tags/updateTag.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateTag: () => (/* binding */ updateTag)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalizeTagRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeTagRecord */ "./src/lib/tags/normalizeTagRecord.ts");


async function updateTag(config, tagId, form) {
  const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${config.restPath}/${tagId}`,
    method: 'POST',
    data: {
      name: form.name.trim(),
      meta: {
        background_color: form.background_color,
        foreground_color: form.foreground_color
      }
    }
  });
  return (0,_normalizeTagRecord__WEBPACK_IMPORTED_MODULE_1__.normalizeTagRecord)(response);
}

/***/ },

/***/ "./src/components/EmptyState/style.scss"
/*!**********************************************!*\
  !*** ./src/components/EmptyState/style.scss ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/components/Kbd/style.scss"
/*!***************************************!*\
  !*** ./src/components/Kbd/style.scss ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

}]);
//# sourceMappingURL=admin-section-tags.js.map