"use strict";
(globalThis["webpackChunkminimal_map"] = globalThis["webpackChunkminimal_map"] || []).push([["map-runtime"],{

/***/ "./src/components/TagBadge/index.tsx"
/*!*******************************************!*\
  !*** ./src/components/TagBadge/index.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagBadge)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/TagBadge/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TagBadge({
  tag,
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
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

/***/ "./src/lib/styles/themeEngine.ts"
/*!***************************************!*\
  !*** ./src/lib/styles/themeEngine.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POSITRON_THEME_MANIFEST: () => (/* binding */ POSITRON_THEME_MANIFEST),
/* harmony export */   applyStyleTheme: () => (/* binding */ applyStyleTheme)
/* harmony export */ });
const POSITRON_THEME_MANIFEST = {
  background: [{
    layerId: 'background',
    property: 'background-color'
  }, {
    layerId: 'road_area_pier',
    property: 'fill-color'
  }, {
    layerId: 'road_pier',
    property: 'line-color'
  }],
  park: [{
    layerId: 'park',
    property: 'fill-color'
  }],
  residential: [{
    layerId: 'landuse_residential',
    property: 'fill-color'
  }],
  forest: [{
    layerId: 'landcover_wood',
    property: 'fill-color'
  }],
  ice: [{
    layerId: 'landcover_ice_shelf',
    property: 'fill-color'
  }, {
    layerId: 'landcover_glacier',
    property: 'fill-color'
  }],
  water: [{
    layerId: 'water',
    property: 'fill-color'
  }],
  waterway: [{
    layerId: 'waterway',
    property: 'line-color'
  }],
  building: [{
    layerId: 'building',
    property: 'fill-color'
  }],
  buildingOutline: [{
    layerId: 'building',
    property: 'fill-outline-color'
  }],
  path: [{
    layerId: 'highway_path',
    property: 'line-color'
  }],
  roadMinor: [{
    layerId: 'highway_minor',
    property: 'line-color'
  }],
  roadMajorCasing: [{
    layerId: 'highway_major_casing',
    property: 'line-color'
  }, {
    layerId: 'tunnel_motorway_casing',
    property: 'line-color'
  }],
  roadMajorFill: [{
    layerId: 'highway_major_inner',
    property: 'line-color'
  }, {
    layerId: 'tunnel_motorway_inner',
    property: 'line-color'
  }],
  motorwayCasing: [{
    layerId: 'highway_motorway_casing',
    property: 'line-color'
  }, {
    layerId: 'highway_motorway_bridge_casing',
    property: 'line-color'
  }],
  motorwayFill: [{
    layerId: 'highway_motorway_inner',
    property: 'line-color'
  }, {
    layerId: 'highway_motorway_bridge_inner',
    property: 'line-color'
  }],
  rail: [{
    layerId: 'railway',
    property: 'line-color'
  }, {
    layerId: 'railway_transit',
    property: 'line-color'
  }, {
    layerId: 'railway_service',
    property: 'line-color'
  }],
  railDash: [{
    layerId: 'railway_dashline',
    property: 'line-color'
  }, {
    layerId: 'railway_transit_dashline',
    property: 'line-color'
  }, {
    layerId: 'railway_service_dashline',
    property: 'line-color'
  }],
  boundary: [{
    layerId: 'boundary_2',
    property: 'line-color'
  }, {
    layerId: 'boundary_3',
    property: 'line-color'
  }, {
    layerId: 'boundary_disputed',
    property: 'line-color'
  }],
  aerowayLine: [{
    layerId: 'aeroway-runway',
    property: 'line-color'
  }, {
    layerId: 'aeroway-runway-casing',
    property: 'line-color'
  }, {
    layerId: 'aeroway-taxiway',
    property: 'line-color'
  }],
  aerowayArea: [{
    layerId: 'aeroway-area',
    property: 'fill-color'
  }],
  waterLabel: [{
    layerId: 'water_name_line_label',
    property: 'text-color'
  }, {
    layerId: 'water_name_point_label',
    property: 'text-color'
  }, {
    layerId: 'waterway_line_label',
    property: 'text-color'
  }],
  waterLabelHalo: [{
    layerId: 'water_name_line_label',
    property: 'text-halo-color'
  }, {
    layerId: 'water_name_point_label',
    property: 'text-halo-color'
  }, {
    layerId: 'waterway_line_label',
    property: 'text-halo-color'
  }],
  roadLabel: [{
    layerId: 'highway-name-path',
    property: 'text-color'
  }, {
    layerId: 'highway-name-minor',
    property: 'text-color'
  }, {
    layerId: 'highway-name-major',
    property: 'text-color'
  }, {
    layerId: 'airport',
    property: 'text-color'
  }],
  roadLabelHalo: [{
    layerId: 'highway-name-path',
    property: 'text-halo-color'
  }, {
    layerId: 'highway-name-minor',
    property: 'text-halo-color'
  }, {
    layerId: 'highway-name-major',
    property: 'text-halo-color'
  }, {
    layerId: 'airport',
    property: 'text-halo-color'
  }],
  placeLabel: [{
    layerId: 'label_city',
    property: 'text-color'
  }, {
    layerId: 'label_city_capital',
    property: 'text-color'
  }, {
    layerId: 'label_town',
    property: 'text-color'
  }, {
    layerId: 'label_village',
    property: 'text-color'
  }, {
    layerId: 'label_state',
    property: 'text-color'
  }, {
    layerId: 'label_country_1',
    property: 'text-color'
  }, {
    layerId: 'label_country_2',
    property: 'text-color'
  }, {
    layerId: 'label_country_3',
    property: 'text-color'
  }, {
    layerId: 'label_other',
    property: 'text-color'
  }],
  placeLabelHalo: [{
    layerId: 'label_city',
    property: 'text-halo-color'
  }, {
    layerId: 'label_city_capital',
    property: 'text-halo-color'
  }, {
    layerId: 'label_town',
    property: 'text-halo-color'
  }, {
    layerId: 'label_village',
    property: 'text-halo-color'
  }, {
    layerId: 'label_state',
    property: 'text-halo-color'
  }, {
    layerId: 'label_country_1',
    property: 'text-halo-color'
  }, {
    layerId: 'label_country_2',
    property: 'text-halo-color'
  }, {
    layerId: 'label_country_3',
    property: 'text-halo-color'
  }, {
    layerId: 'label_other',
    property: 'text-halo-color'
  }]
};
function applyStyleTheme(map, themeColors, basePreset = 'positron') {
  if (basePreset !== 'positron' || !map.isStyleLoaded()) {
    return;
  }
  Object.entries(themeColors).forEach(([slot, color]) => {
    const manifestEntries = POSITRON_THEME_MANIFEST[slot];
    if (!manifestEntries) {
      return;
    }
    manifestEntries.forEach(({
      layerId,
      property
    }) => {
      try {
        if (map.getLayer(layerId)) {
          map.setPaintProperty(layerId, property, color);
        }
      } catch (e) {
        // Silently fail if property is not applicable to the current layer type
        // or if style is still in a transitional state.
      }
    });
  });
}

/***/ },

/***/ "./src/map/SearchControl.tsx"
/*!***********************************!*\
  !*** ./src/map/SearchControl.tsx ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWordPressSearchControl: () => (/* binding */ createWordPressSearchControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/globe.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/phone.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _components_TagBadge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TagBadge */ "./src/components/TagBadge/index.tsx");
/* harmony import */ var _search_panel_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-panel-layout */ "./src/map/search-panel-layout.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);







const formatDisplayUrl = url => {
  if (!url) return "";
  return url.replace(/^(https?:\/\/)/, "").replace(/^www\./, "").replace(/\/$/, "");
};
const SearchResultLogo = ({
  logo
}) => {
  const isSvgMarkup = logo.content.trim().startsWith("<svg");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    className: "minimal-map-search__result-logo",
    "aria-hidden": "true",
    children: isSvgMarkup ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "minimal-map-search__result-logo-svg",
      dangerouslySetInnerHTML: {
        __html: logo.content
      }
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
      className: "minimal-map-search__result-logo-image",
      src: logo.content,
      alt: ""
    })
  });
};
const MapSearchControl = ({
  locations,
  onSelect,
  selectedId: selectedIdProp
}) => {
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isFocused, setIsFocused] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedId, setSelectedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedIdProp);
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpen = isFocused || !!selectedId;

  // Sync local state with prop updates (e.g. from marker clicks)
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSelectedId(selectedIdProp);
  }, [selectedIdProp]);
  const filteredLocations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!isOpen) return [];
    const term = searchTerm.toLowerCase().trim();
    if (!term) return locations;
    return locations.filter(loc => {
      const searchableValues = [loc.title, loc.city, loc.street, loc.house_number, loc.postal_code, loc.state, loc.country, loc.telephone, loc.email, loc.website, ...(Array.isArray(loc.tags) ? loc.tags.map(tag => tag.name) : [])];
      return searchableValues.some(value => value?.toLowerCase().includes(term));
    });
  }, [locations, searchTerm, isOpen]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = event => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll selected item into view when it changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedId) {
      const element = document.getElementById(`minimal-map-result-${selectedId}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    }
  }, [selectedId]);
  const handleSelect = loc => {
    setSelectedId(loc.id);
    onSelect(loc);
  };
  const handleClear = () => {
    setSearchTerm("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "minimal-map-search-backdrop",
      onClick: () => setIsFocused(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      ref: containerRef,
      className: `minimal-map-search ${isOpen ? "is-focused" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "minimal-map-search__input-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "minimal-map-search__icon-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
            size: 18
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
          type: "text",
          className: "minimal-map-search__input",
          value: searchTerm,
          onChange: e => setSearchTerm(e.target.value),
          onFocus: () => setIsFocused(true),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search locations...", "minimal-map"),
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search locations", "minimal-map")
        }), searchTerm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
          type: "button",
          className: "minimal-map-search__clear",
          onClick: handleClear,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clear search", "minimal-map"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
            size: 16
          })
        })]
      }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "minimal-map-search__results-container",
        children: filteredLocations.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "minimal-map-search__results",
          children: filteredLocations.map(loc => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
            id: `minimal-map-result-${loc.id}`,
            type: "button",
            className: `minimal-map-search__result-item ${selectedId === loc.id ? "is-selected" : ""}`,
            onClick: () => handleSelect(loc),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "minimal-map-search__result-layout",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "minimal-map-search__result-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "minimal-map-search__result-title",
                  children: loc.title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "minimal-map-search__result-address",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    size: 12
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
                    children: [[loc.street, loc.house_number].filter(Boolean).join(" "), loc.city ? `, ${loc.city}` : ""]
                  })]
                }), (loc.telephone || loc.email || loc.website) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "minimal-map-search__result-meta",
                  children: [loc.telephone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "minimal-map-search__meta-item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                      size: 10
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                      children: loc.telephone
                    })]
                  }), loc.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "minimal-map-search__meta-item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      size: 10
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                      children: loc.email
                    })]
                  }), loc.website && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "minimal-map-search__meta-item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
                      size: 10
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                      children: formatDisplayUrl(loc.website)
                    })]
                  })]
                }), Array.isArray(loc.tags) && loc.tags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "minimal-map-search__result-tags",
                  children: loc.tags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_TagBadge__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    tag: tag
                  }, tag.id))
                })]
              }), loc.logo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "minimal-map-search__result-logo-column",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SearchResultLogo, {
                  logo: loc.logo
                })
              }) : null]
            })
          }, loc.id))
        }) : searchTerm.trim() !== "" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "minimal-map-search__no-results",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No locations found", "minimal-map")
        })
      })]
    })]
  });
};
function createWordPressSearchControl(host, map, initialConfig, initialSelectedId, onLocationSelect) {
  const container = document.createElement("div");
  container.className = "minimal-map-search-host";
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.right = "0";
  container.style.bottom = "0";
  container.style.zIndex = "10";
  container.style.pointerEvents = "none";
  host.appendChild(container);
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
  let currentConfig = initialConfig;
  const onSelect = location => {
    onLocationSelect?.(location);
    const isMobile = window.innerWidth <= 600;
    map.easeTo({
      center: [location.lng, location.lat],
      zoom: Math.max(map.getZoom(), 15),
      padding: {
        left: !isMobile ? (0,_search_panel_layout__WEBPACK_IMPORTED_MODULE_9__.getSearchPanelDesktopPadding)(currentConfig, container) : 0,
        top: isMobile ? 80 : 0,
        right: 0,
        bottom: 0
      },
      essential: true
    }, {
      isMinimalMapInternal: true
    });
  };
  const render = (cfg, selId) => {
    currentConfig = cfg;
    (0,_search_panel_layout__WEBPACK_IMPORTED_MODULE_9__.applySearchPanelCssVariables)(container, cfg);
    root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(MapSearchControl, {
      locations: cfg.locations,
      onSelect: onSelect,
      selectedId: selId
    }));
  };
  render(initialConfig, initialSelectedId);
  return {
    destroy() {
      root.unmount();
      container.remove();
    },
    update(cfg, selId) {
      render(cfg, selId);
    }
  };
}

/***/ },

/***/ "./src/map/attribution-pill.ts"
/*!*************************************!*\
  !*** ./src/map/attribution-pill.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAttributionPill: () => (/* binding */ createAttributionPill)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

function createAttributionLink(href, label) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer noopener";
  link.textContent = label;
  return link;
}
function createAttributionPill(host, config) {
  const root = document.createElement("div");
  const content = document.createElement("span");
  const tilesLink = createAttributionLink("https://openfreemap.org/", "OpenFreeMap");
  const separator = document.createElement("span");
  const dataPrefix = document.createElement("span");
  const dataLink = createAttributionLink("https://www.openstreetmap.org/copyright", "OpenStreetMap");
  root.className = "minimal-map-attribution";
  root.setAttribute("role", "note");
  root.setAttribute("aria-label", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Map credits", "minimal-map"));
  root.style.setProperty("--minimal-map-attribution-padding-top", config.creditsPadding.top);
  root.style.setProperty("--minimal-map-attribution-padding-right", config.creditsPadding.right);
  root.style.setProperty("--minimal-map-attribution-padding-bottom", config.creditsPadding.bottom);
  root.style.setProperty("--minimal-map-attribution-padding-left", config.creditsPadding.left);
  root.style.setProperty("--minimal-map-attribution-margin-top", config.creditsOuterMargin.top);
  root.style.setProperty("--minimal-map-attribution-margin-right", config.creditsOuterMargin.right);
  root.style.setProperty("--minimal-map-attribution-margin-bottom", config.creditsOuterMargin.bottom);
  root.style.setProperty("--minimal-map-attribution-margin-left", config.creditsOuterMargin.left);
  root.style.setProperty("--minimal-map-attribution-background", config.creditsBackgroundColor);
  root.style.setProperty("--minimal-map-attribution-color", config.creditsForegroundColor);
  root.style.setProperty("--minimal-map-attribution-border-radius", config.creditsBorderRadius);
  content.className = "minimal-map-attribution__content";
  separator.className = "minimal-map-attribution__separator";
  separator.textContent = " | ";
  dataPrefix.textContent = "";
  content.append(tilesLink, separator, dataPrefix, dataLink);
  root.appendChild(content);
  host.appendChild(root);
  return {
    destroy() {
      root.remove();
    }
  };
}

/***/ },

/***/ "./src/map/defaults.ts"
/*!*****************************!*\
  !*** ./src/map/defaults.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HEIGHT_UNITS: () => (/* binding */ HEIGHT_UNITS),
/* harmony export */   normalizeHeightUnit: () => (/* binding */ normalizeHeightUnit),
/* harmony export */   normalizeMapConfig: () => (/* binding */ normalizeMapConfig)
/* harmony export */ });
/* harmony import */ var _style_presets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-presets */ "./src/map/style-presets.ts");
/* harmony import */ var _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zoom-control-options */ "./src/map/zoom-control-options.ts");


const FALLBACK_MESSAGE = 'Map preview unavailable because this browser does not support WebGL.';
const HEIGHT_UNITS = ['px', 'em', 'rem', '%', 'vh', 'vw'];
const DEFAULT_MAP_DEFAULTS = {
  centerLat: 52.517,
  centerLng: 13.388,
  zoom: 9.5,
  collectionId: 0,
  height: 420,
  heightUnit: 'px',
  stylePreset: 'liberty',
  styleThemeSlug: 'default',
  showZoomControls: true,
  allowSearch: true,
  scrollZoom: false,
  mobileTwoFingerZoom: true,
  zoomControlsPosition: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_POSITION,
  zoomControlsPadding: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_PADDING,
  zoomControlsOuterMargin: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_OUTER_MARGIN,
  zoomControlsBackgroundColor: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_BACKGROUND_COLOR,
  zoomControlsIconColor: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_ICON_COLOR,
  zoomControlsBorderRadius: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_BORDER_RADIUS,
  zoomControlsBorderColor: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_BORDER_COLOR,
  zoomControlsBorderWidth: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_BORDER_WIDTH,
  zoomControlsPlusIcon: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_PLUS_ICON,
  zoomControlsMinusIcon: _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM_CONTROLS_MINUS_ICON,
  searchPanelBackgroundPrimary: '#ffffff',
  searchPanelBackgroundSecondary: '#f0f0f1',
  searchPanelBackgroundHover: '#f8f8f8',
  searchPanelForegroundPrimary: '#1e1e1e',
  searchPanelForegroundSecondary: '#1e1e1e',
  searchPanelOuterMargin: {
    top: '24px',
    right: '24px',
    bottom: '24px',
    left: '24px'
  },
  searchPanelBorderRadiusInput: '10px',
  searchPanelBorderRadiusCard: '2px',
  searchPanelCardGap: '12px',
  searchPanelWidth: '320px',
  creditsPadding: {
    top: '4px',
    right: '8px',
    bottom: '4px',
    left: '8px'
  },
  creditsOuterMargin: {
    top: '16px',
    right: '16px',
    bottom: '16px',
    left: '16px'
  },
  creditsBackgroundColor: '#ffffff',
  creditsForegroundColor: '#1e1e1e',
  creditsBorderRadius: '999px',
  _isPreview: false
};
function normalizeHeightUnit(unit) {
  return HEIGHT_UNITS.includes(unit) ? unit : 'px';
}
function normalizeBoxValue(value, fallback) {
  return {
    top: normalizeCssLength(value?.top, fallback.top),
    right: normalizeCssLength(value?.right, fallback.right),
    bottom: normalizeCssLength(value?.bottom, fallback.bottom),
    left: normalizeCssLength(value?.left, fallback.left)
  };
}
function normalizeCssLength(value, fallback) {
  if (typeof value !== 'string') {
    return fallback;
  }
  const trimmed = value.trim();
  if (!trimmed || !/^((\d*\.?\d+)(px|em|rem|%|vh|vw)?|0)$/i.test(trimmed)) {
    return fallback;
  }
  return trimmed === '0' ? '0px' : trimmed;
}
function normalizeColor(value, fallback) {
  if (typeof value !== 'string') {
    return fallback;
  }
  const trimmed = value.trim();
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(trimmed)) {
    return fallback;
  }
  return trimmed;
}
function normalizeZoomControlsPosition(value, fallback) {
  return ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(`${value}`) ? value : fallback;
}
function normalizeZoomControlIcon(value, fallback) {
  return ['plus', 'plus-circle', 'plus-circle-filled', 'line-solid', 'separator', 'close-small'].includes(`${value}`) ? value : fallback;
}
function normalizeBorderRadiusValue(value, fallback) {
  if (!value) {
    return fallback;
  }
  if (typeof value === 'string') {
    const parts = value.trim().split(/\s+/).filter(Boolean);
    if (parts.length < 1 || parts.length > 4) {
      return fallback;
    }
    const normalizedParts = parts.map(part => normalizeCssLength(part, ''));
    if (normalizedParts.some(part => !part)) {
      return fallback;
    }
    return normalizedParts.join(' ');
  }
  const topLeft = normalizeCssLength(value.top, fallback);
  const topRight = normalizeCssLength(value.right, fallback);
  const bottomRight = normalizeCssLength(value.bottom, fallback);
  const bottomLeft = normalizeCssLength(value.left, fallback);
  return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
}
function getDefaults(runtimeConfig) {
  return {
    ...DEFAULT_MAP_DEFAULTS,
    ...runtimeConfig.defaults,
    heightUnit: normalizeHeightUnit(runtimeConfig.defaults?.heightUnit),
    stylePreset: `${runtimeConfig.defaults?.stylePreset ?? DEFAULT_MAP_DEFAULTS.stylePreset}`,
    showZoomControls: runtimeConfig.defaults?.showZoomControls ?? DEFAULT_MAP_DEFAULTS.showZoomControls,
    allowSearch: runtimeConfig.defaults?.allowSearch ?? DEFAULT_MAP_DEFAULTS.allowSearch,
    scrollZoom: runtimeConfig.defaults?.scrollZoom ?? DEFAULT_MAP_DEFAULTS.scrollZoom,
    mobileTwoFingerZoom: runtimeConfig.defaults?.mobileTwoFingerZoom ?? DEFAULT_MAP_DEFAULTS.mobileTwoFingerZoom,
    zoomControlsPosition: normalizeZoomControlsPosition(runtimeConfig.defaults?.zoomControlsPosition, DEFAULT_MAP_DEFAULTS.zoomControlsPosition),
    zoomControlsPadding: normalizeBoxValue(runtimeConfig.defaults?.zoomControlsPadding, DEFAULT_MAP_DEFAULTS.zoomControlsPadding),
    zoomControlsOuterMargin: normalizeBoxValue(runtimeConfig.defaults?.zoomControlsOuterMargin, DEFAULT_MAP_DEFAULTS.zoomControlsOuterMargin),
    zoomControlsBackgroundColor: normalizeColor(runtimeConfig.defaults?.zoomControlsBackgroundColor, DEFAULT_MAP_DEFAULTS.zoomControlsBackgroundColor),
    zoomControlsIconColor: normalizeColor(runtimeConfig.defaults?.zoomControlsIconColor, DEFAULT_MAP_DEFAULTS.zoomControlsIconColor),
    zoomControlsBorderRadius: normalizeBorderRadiusValue(runtimeConfig.defaults?.zoomControlsBorderRadius, DEFAULT_MAP_DEFAULTS.zoomControlsBorderRadius),
    zoomControlsBorderColor: normalizeColor(runtimeConfig.defaults?.zoomControlsBorderColor, DEFAULT_MAP_DEFAULTS.zoomControlsBorderColor),
    zoomControlsBorderWidth: normalizeCssLength(runtimeConfig.defaults?.zoomControlsBorderWidth, DEFAULT_MAP_DEFAULTS.zoomControlsBorderWidth),
    zoomControlsPlusIcon: normalizeZoomControlIcon(runtimeConfig.defaults?.zoomControlsPlusIcon, DEFAULT_MAP_DEFAULTS.zoomControlsPlusIcon),
    zoomControlsMinusIcon: normalizeZoomControlIcon(runtimeConfig.defaults?.zoomControlsMinusIcon, DEFAULT_MAP_DEFAULTS.zoomControlsMinusIcon),
    searchPanelBackgroundPrimary: normalizeColor(runtimeConfig.defaults?.searchPanelBackgroundPrimary, DEFAULT_MAP_DEFAULTS.searchPanelBackgroundPrimary),
    searchPanelBackgroundSecondary: normalizeColor(runtimeConfig.defaults?.searchPanelBackgroundSecondary, DEFAULT_MAP_DEFAULTS.searchPanelBackgroundSecondary),
    searchPanelBackgroundHover: normalizeColor(runtimeConfig.defaults?.searchPanelBackgroundHover, DEFAULT_MAP_DEFAULTS.searchPanelBackgroundHover),
    searchPanelForegroundPrimary: normalizeColor(runtimeConfig.defaults?.searchPanelForegroundPrimary, DEFAULT_MAP_DEFAULTS.searchPanelForegroundPrimary),
    searchPanelForegroundSecondary: normalizeColor(runtimeConfig.defaults?.searchPanelForegroundSecondary, DEFAULT_MAP_DEFAULTS.searchPanelForegroundSecondary),
    searchPanelOuterMargin: normalizeBoxValue(runtimeConfig.defaults?.searchPanelOuterMargin, DEFAULT_MAP_DEFAULTS.searchPanelOuterMargin),
    searchPanelBorderRadiusInput: normalizeBorderRadiusValue(runtimeConfig.defaults?.searchPanelBorderRadiusInput, DEFAULT_MAP_DEFAULTS.searchPanelBorderRadiusInput),
    searchPanelBorderRadiusCard: normalizeBorderRadiusValue(runtimeConfig.defaults?.searchPanelBorderRadiusCard, DEFAULT_MAP_DEFAULTS.searchPanelBorderRadiusCard),
    searchPanelCardGap: normalizeCssLength(runtimeConfig.defaults?.searchPanelCardGap, DEFAULT_MAP_DEFAULTS.searchPanelCardGap),
    searchPanelWidth: normalizeCssLength(runtimeConfig.defaults?.searchPanelWidth, DEFAULT_MAP_DEFAULTS.searchPanelWidth),
    creditsPadding: normalizeBoxValue(runtimeConfig.defaults?.creditsPadding, DEFAULT_MAP_DEFAULTS.creditsPadding),
    creditsOuterMargin: normalizeBoxValue(runtimeConfig.defaults?.creditsOuterMargin, DEFAULT_MAP_DEFAULTS.creditsOuterMargin),
    creditsBackgroundColor: normalizeColor(runtimeConfig.defaults?.creditsBackgroundColor, DEFAULT_MAP_DEFAULTS.creditsBackgroundColor),
    creditsForegroundColor: normalizeColor(runtimeConfig.defaults?.creditsForegroundColor, DEFAULT_MAP_DEFAULTS.creditsForegroundColor),
    creditsBorderRadius: normalizeBorderRadiusValue(runtimeConfig.defaults?.creditsBorderRadius, DEFAULT_MAP_DEFAULTS.creditsBorderRadius)
  };
}
function getFallbackPreset(stylePresets) {
  if (stylePresets.liberty) {
    return 'liberty';
  }
  return Object.keys(stylePresets)[0] ?? DEFAULT_MAP_DEFAULTS.stylePreset;
}
function normalizeMapConfig(rawConfig = {}, runtimeConfig = {}) {
  const defaults = getDefaults(runtimeConfig);
  const stylePresets = (0,_style_presets__WEBPACK_IMPORTED_MODULE_0__.getStylePresets)(runtimeConfig.stylePresets);
  const fallbackPreset = getFallbackPreset(stylePresets);
  const defaultStylePreset = stylePresets[defaults.stylePreset] ? defaults.stylePreset : fallbackPreset;
  const requestedPreset = `${rawConfig.stylePreset ?? defaultStylePreset}`;
  const stylePreset = stylePresets[requestedPreset] ? requestedPreset : defaultStylePreset;
  const styleUrl = rawConfig.styleUrl || stylePresets[stylePreset]?.style_url || stylePresets[fallbackPreset]?.style_url || stylePresets[defaults.stylePreset]?.style_url || 'https://tiles.openfreemap.org/styles/liberty';
  const styleThemeSlug = `${rawConfig.styleThemeSlug ?? defaults.styleThemeSlug}`;
  const centerLat = clampNumber(rawConfig.centerLat ?? defaults.centerLat, -90, 90);
  const centerLng = clampNumber(rawConfig.centerLng ?? defaults.centerLng, -180, 180);
  const zoom = clampNumber(rawConfig.zoom ?? defaults.zoom, 0, 22);
  const collectionId = Math.max(0, Number(rawConfig.collectionId ?? defaults.collectionId) || 0);
  const height = Math.max(1, Number(rawConfig.height ?? defaults.height));
  const heightUnit = normalizeHeightUnit(rawConfig.heightUnit ?? defaults.heightUnit);
  const zoomControlsPosition = normalizeZoomControlsPosition(rawConfig.zoomControlsPosition ?? defaults.zoomControlsPosition, defaults.zoomControlsPosition);
  const zoomControlsPadding = normalizeBoxValue(rawConfig.zoomControlsPadding ?? defaults.zoomControlsPadding, defaults.zoomControlsPadding);
  const zoomControlsOuterMargin = normalizeBoxValue(rawConfig.zoomControlsOuterMargin ?? defaults.zoomControlsOuterMargin, defaults.zoomControlsOuterMargin);
  const zoomControlsBackgroundColor = normalizeColor(rawConfig.zoomControlsBackgroundColor ?? defaults.zoomControlsBackgroundColor, defaults.zoomControlsBackgroundColor);
  const zoomControlsIconColor = normalizeColor(rawConfig.zoomControlsIconColor ?? defaults.zoomControlsIconColor, defaults.zoomControlsIconColor);
  const zoomControlsBorderRadius = normalizeBorderRadiusValue(rawConfig.zoomControlsBorderRadius ?? defaults.zoomControlsBorderRadius, defaults.zoomControlsBorderRadius);
  const zoomControlsBorderColor = normalizeColor(rawConfig.zoomControlsBorderColor ?? defaults.zoomControlsBorderColor, defaults.zoomControlsBorderColor);
  const zoomControlsBorderWidth = normalizeCssLength(rawConfig.zoomControlsBorderWidth ?? defaults.zoomControlsBorderWidth, defaults.zoomControlsBorderWidth);
  const zoomControlsPlusIcon = normalizeZoomControlIcon(rawConfig.zoomControlsPlusIcon ?? defaults.zoomControlsPlusIcon, defaults.zoomControlsPlusIcon);
  const zoomControlsMinusIcon = normalizeZoomControlIcon(rawConfig.zoomControlsMinusIcon ?? defaults.zoomControlsMinusIcon, defaults.zoomControlsMinusIcon);
  const searchPanelBackgroundPrimary = normalizeColor(rawConfig.searchPanelBackgroundPrimary ?? defaults.searchPanelBackgroundPrimary, defaults.searchPanelBackgroundPrimary);
  const searchPanelBackgroundSecondary = normalizeColor(rawConfig.searchPanelBackgroundSecondary ?? defaults.searchPanelBackgroundSecondary, defaults.searchPanelBackgroundSecondary);
  const searchPanelBackgroundHover = normalizeColor(rawConfig.searchPanelBackgroundHover ?? defaults.searchPanelBackgroundHover, defaults.searchPanelBackgroundHover);
  const searchPanelForegroundPrimary = normalizeColor(rawConfig.searchPanelForegroundPrimary ?? defaults.searchPanelForegroundPrimary, defaults.searchPanelForegroundPrimary);
  const searchPanelForegroundSecondary = normalizeColor(rawConfig.searchPanelForegroundSecondary ?? defaults.searchPanelForegroundSecondary, defaults.searchPanelForegroundSecondary);
  const searchPanelOuterMargin = normalizeBoxValue(rawConfig.searchPanelOuterMargin ?? defaults.searchPanelOuterMargin, defaults.searchPanelOuterMargin);
  const searchPanelBorderRadiusInput = normalizeBorderRadiusValue(rawConfig.searchPanelBorderRadiusInput ?? defaults.searchPanelBorderRadiusInput, defaults.searchPanelBorderRadiusInput);
  const searchPanelBorderRadiusCard = normalizeBorderRadiusValue(rawConfig.searchPanelBorderRadiusCard ?? defaults.searchPanelBorderRadiusCard, defaults.searchPanelBorderRadiusCard);
  const searchPanelCardGap = normalizeCssLength(rawConfig.searchPanelCardGap ?? defaults.searchPanelCardGap, defaults.searchPanelCardGap);
  const searchPanelWidth = normalizeCssLength(rawConfig.searchPanelWidth ?? defaults.searchPanelWidth, defaults.searchPanelWidth);
  const creditsPadding = normalizeBoxValue(rawConfig.creditsPadding ?? defaults.creditsPadding, defaults.creditsPadding);
  const creditsOuterMargin = normalizeBoxValue(rawConfig.creditsOuterMargin ?? defaults.creditsOuterMargin, defaults.creditsOuterMargin);
  const creditsBackgroundColor = normalizeColor(rawConfig.creditsBackgroundColor ?? defaults.creditsBackgroundColor, defaults.creditsBackgroundColor);
  const creditsForegroundColor = normalizeColor(rawConfig.creditsForegroundColor ?? defaults.creditsForegroundColor, defaults.creditsForegroundColor);
  const creditsBorderRadius = normalizeBorderRadiusValue(rawConfig.creditsBorderRadius ?? defaults.creditsBorderRadius, defaults.creditsBorderRadius);
  const markerLat = normalizeOptionalCoordinate(rawConfig.markerLat, -90, 90);
  const markerLng = normalizeOptionalCoordinate(rawConfig.markerLng, -180, 180);
  const markerContent = typeof rawConfig.markerContent === 'string' ? rawConfig.markerContent : null;
  const markerClassName = typeof rawConfig.markerClassName === 'string' ? rawConfig.markerClassName.trim() : '';
  const markerOffsetY = Number.isFinite(Number(rawConfig.markerOffsetY)) ? Number(rawConfig.markerOffsetY) : 0;
  const centerOffsetY = Number.isFinite(Number(rawConfig.centerOffsetY)) ? Number(rawConfig.centerOffsetY) : 0;
  const locations = normalizeLocations(rawConfig.locations ?? runtimeConfig.locations);
  let styleTheme = rawConfig.styleTheme || {};

  // If no explicit theme colors but we have a slug, try to resolve from runtime config (editor context)
  if (Object.keys(styleTheme).length === 0 && stylePreset === 'positron' && runtimeConfig.styleThemes) {
    const theme = runtimeConfig.styleThemes.find(t => t.slug === styleThemeSlug) || runtimeConfig.styleThemes.find(t => t.slug === 'default');
    if (theme) {
      styleTheme = theme.colors;
    }
  }
  return {
    centerLat,
    centerLng,
    zoom,
    collectionId,
    height,
    heightUnit,
    heightCssValue: `${trimNumber(height)}${heightUnit}`,
    stylePreset,
    styleUrl,
    styleTheme,
    styleThemeSlug,
    showZoomControls: Boolean(rawConfig.showZoomControls ?? defaults.showZoomControls),
    allowSearch: Boolean(rawConfig.allowSearch ?? defaults.allowSearch),
    scrollZoom: Boolean(rawConfig.scrollZoom ?? defaults.scrollZoom),
    mobileTwoFingerZoom: Boolean(rawConfig.mobileTwoFingerZoom ?? defaults.mobileTwoFingerZoom),
    zoomControlsPosition,
    zoomControlsPadding,
    zoomControlsOuterMargin,
    zoomControlsBackgroundColor,
    zoomControlsIconColor,
    zoomControlsBorderRadius,
    zoomControlsBorderColor,
    zoomControlsBorderWidth,
    zoomControlsPlusIcon,
    zoomControlsMinusIcon,
    searchPanelBackgroundPrimary,
    searchPanelBackgroundSecondary,
    searchPanelBackgroundHover,
    searchPanelForegroundPrimary,
    searchPanelForegroundSecondary,
    searchPanelOuterMargin,
    searchPanelBorderRadiusInput,
    searchPanelBorderRadiusCard,
    searchPanelCardGap,
    searchPanelWidth,
    creditsPadding,
    creditsOuterMargin,
    creditsBackgroundColor,
    creditsForegroundColor,
    creditsBorderRadius,
    _isPreview: Boolean(rawConfig._isPreview ?? defaults._isPreview),
    fallbackMessage: rawConfig.fallbackMessage || runtimeConfig.messages?.fallback || FALLBACK_MESSAGE,
    markerLat,
    markerLng,
    markerContent,
    markerClassName,
    markerOffsetY,
    centerOffsetY,
    locations,
    interactive: rawConfig.interactive ?? true,
    showAttribution: rawConfig.showAttribution ?? true
  };
}
function trimNumber(value) {
  const rounded = Number(value.toFixed(4));
  return `${rounded}`;
}
function clampNumber(value, minimum, maximum) {
  const numericValue = Number(value);
  if (Number.isNaN(numericValue)) {
    return minimum;
  }
  return Math.max(minimum, Math.min(maximum, numericValue));
}
function normalizeOptionalCoordinate(value, minimum, maximum) {
  if (value === null || typeof value === 'undefined' || value === '') {
    return null;
  }
  const numericValue = Number(value);
  if (Number.isNaN(numericValue)) {
    return null;
  }
  return Math.max(minimum, Math.min(maximum, numericValue));
}
function normalizeLocationPoint(value) {
  if (!value) {
    return null;
  }
  const lat = normalizeOptionalCoordinate(value.lat, -90, 90);
  const lng = normalizeOptionalCoordinate(value.lng, -180, 180);
  if (lat === null || lng === null) {
    return null;
  }
  return {
    ...value,
    lat,
    lng
  };
}
function normalizeLocations(locations) {
  if (!Array.isArray(locations)) {
    return [];
  }
  return locations.map(location => normalizeLocationPoint(location)).filter(point => point !== null);
}

/***/ },

/***/ "./src/map/interactions.ts"
/*!*********************************!*\
  !*** ./src/map/interactions.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   syncTouchZoomInteraction: () => (/* binding */ syncTouchZoomInteraction)
/* harmony export */ });
function syncTouchZoomInteraction(map, config) {
  if (!config.interactive || !config.mobileTwoFingerZoom) {
    map.touchZoomRotate.disable();
    return;
  }
  map.touchZoomRotate.enable();
  map.touchZoomRotate.disableRotation();
}

/***/ },

/***/ "./src/map/runtime.ts"
/*!****************************!*\
  !*** ./src/map/runtime.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrapFrontendMaps: () => (/* binding */ bootstrapFrontendMaps),
/* harmony export */   createMinimalMap: () => (/* binding */ createMinimalMap)
/* harmony export */ });
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maplibre-gl */ "./node_modules/maplibre-gl/dist/maplibre-gl.js");
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var maplibre_gl_dist_maplibre_gl_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maplibre-gl/dist/maplibre-gl.css */ "./node_modules/maplibre-gl/dist/maplibre-gl.css");
/* harmony import */ var _attribution_pill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribution-pill */ "./src/map/attribution-pill.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaults */ "./src/map/defaults.ts");
/* harmony import */ var _interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactions */ "./src/map/interactions.ts");
/* harmony import */ var _lib_styles_themeEngine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/styles/themeEngine */ "./src/lib/styles/themeEngine.ts");
/* harmony import */ var _wp_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wp-controls */ "./src/map/wp-controls.ts");
/* harmony import */ var _SearchControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchControl */ "./src/map/SearchControl.tsx");
/* harmony import */ var _search_panel_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-panel-layout */ "./src/map/search-panel-layout.ts");









function canCreateWebGLContext() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }
  const canvas = document.createElement('canvas');
  return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
}
function createFallback(host, message) {
  host.innerHTML = '';
  const notice = document.createElement('div');
  const content = document.createElement('div');
  const paragraph = document.createElement('p');
  notice.className = 'components-notice is-warning minimal-map-fallback';
  content.className = 'components-notice__content';
  paragraph.textContent = message;
  content.appendChild(paragraph);
  notice.appendChild(content);
  host.appendChild(notice);
}
function createShell(host, config) {
  host.innerHTML = '';
  host.classList.add('minimal-map-runtime');
  host.style.height = config.heightCssValue;
  const viewport = document.createElement('div');
  viewport.className = 'minimal-map-runtime__viewport';
  host.appendChild(viewport);
  return viewport;
}
function getMarkerContent(config, point) {
  if (typeof point.markerContent === 'string' && point.markerContent.trim() !== '') {
    return point.markerContent;
  }
  return config.markerContent;
}
function createMarker(config, point, onClick) {
  const options = {
    offset: [0, config.markerOffsetY],
    anchor: 'center'
  };
  const markerContent = getMarkerContent(config, point);
  if (markerContent) {
    const el = document.createElement('div');
    el.className = 'minimal-map-custom-marker';

    // Create inner wrapper for transform-based centering
    const inner = document.createElement('div');
    inner.innerHTML = markerContent;
    el.appendChild(inner);

    // Ensure MapLibre sees zero size for absolute coordinate alignment
    el.style.width = '0';
    el.style.height = '0';
    options.element = el;
  }
  const marker = new (maplibre_gl__WEBPACK_IMPORTED_MODULE_0___default().Marker)(options).setLngLat([point.lng, point.lat]);
  if (config.markerClassName) {
    marker.getElement().classList.add(...config.markerClassName.split(/\s+/).filter(Boolean));
  }
  if (point.id && onClick) {
    marker.getElement().style.cursor = 'pointer';
    marker.getElement().addEventListener('click', () => onClick(point.id));
  }
  return marker;
}
function didZoomControlsStyleChange(previousConfig, nextConfig) {
  if (!previousConfig) {
    return true;
  }
  return previousConfig.zoomControlsPosition !== nextConfig.zoomControlsPosition || previousConfig.zoomControlsBackgroundColor !== nextConfig.zoomControlsBackgroundColor || previousConfig.zoomControlsIconColor !== nextConfig.zoomControlsIconColor || previousConfig.zoomControlsBorderRadius !== nextConfig.zoomControlsBorderRadius || previousConfig.zoomControlsBorderColor !== nextConfig.zoomControlsBorderColor || previousConfig.zoomControlsBorderWidth !== nextConfig.zoomControlsBorderWidth || previousConfig.zoomControlsPlusIcon !== nextConfig.zoomControlsPlusIcon || previousConfig.zoomControlsMinusIcon !== nextConfig.zoomControlsMinusIcon || previousConfig.zoomControlsPadding.top !== nextConfig.zoomControlsPadding.top || previousConfig.zoomControlsPadding.right !== nextConfig.zoomControlsPadding.right || previousConfig.zoomControlsPadding.bottom !== nextConfig.zoomControlsPadding.bottom || previousConfig.zoomControlsPadding.left !== nextConfig.zoomControlsPadding.left || previousConfig.zoomControlsOuterMargin.top !== nextConfig.zoomControlsOuterMargin.top || previousConfig.zoomControlsOuterMargin.right !== nextConfig.zoomControlsOuterMargin.right || previousConfig.zoomControlsOuterMargin.bottom !== nextConfig.zoomControlsOuterMargin.bottom || previousConfig.zoomControlsOuterMargin.left !== nextConfig.zoomControlsOuterMargin.left;
}
function didCreditsStyleChange(previousConfig, nextConfig) {
  if (!previousConfig) {
    return true;
  }
  return previousConfig.creditsBackgroundColor !== nextConfig.creditsBackgroundColor || previousConfig.creditsForegroundColor !== nextConfig.creditsForegroundColor || previousConfig.creditsBorderRadius !== nextConfig.creditsBorderRadius || previousConfig.creditsPadding.top !== nextConfig.creditsPadding.top || previousConfig.creditsPadding.right !== nextConfig.creditsPadding.right || previousConfig.creditsPadding.bottom !== nextConfig.creditsPadding.bottom || previousConfig.creditsPadding.left !== nextConfig.creditsPadding.left || previousConfig.creditsOuterMargin.top !== nextConfig.creditsOuterMargin.top || previousConfig.creditsOuterMargin.right !== nextConfig.creditsOuterMargin.right || previousConfig.creditsOuterMargin.bottom !== nextConfig.creditsOuterMargin.bottom || previousConfig.creditsOuterMargin.left !== nextConfig.creditsOuterMargin.left;
}
function syncCenter(map, config, zoomChanged = false) {
  const target = {
    center: [config.centerLng, config.centerLat],
    offset: [0, config.centerOffsetY]
  };
  if (zoomChanged) {
    map.easeTo({
      ...target,
      duration: 180,
      essential: true,
      zoom: config.zoom
    }, {
      isMinimalMapInternal: true
    });
    return;
  }
  map.jumpTo(target, {
    isMinimalMapInternal: true
  });
}
function getRenderedPoints(config) {
  if (config.locations.length > 0) {
    return config.locations;
  }
  if (config.markerLat === null || config.markerLng === null) {
    return [];
  }
  return [{
    lat: config.markerLat,
    lng: config.markerLng
  }];
}
function didRenderedPointsChange(previousConfig, nextConfig) {
  const previousPoints = previousConfig ? getRenderedPoints(previousConfig) : [];
  const nextPoints = getRenderedPoints(nextConfig);
  if (previousPoints.length !== nextPoints.length) {
    return true;
  }
  return previousPoints.some((point, index) => {
    const nextPoint = nextPoints[index];
    return point.lat !== nextPoint.lat || point.lng !== nextPoint.lng;
  });
}
function didRenderedMarkerContentChange(previousConfig, nextConfig) {
  if (!previousConfig) {
    return true;
  }
  const previousPoints = getRenderedPoints(previousConfig);
  const nextPoints = getRenderedPoints(nextConfig);
  if (previousPoints.length !== nextPoints.length) {
    return true;
  }
  if (previousConfig.markerContent !== nextConfig.markerContent) {
    return true;
  }
  return previousPoints.some((point, index) => {
    const nextPoint = nextPoints[index];
    return getMarkerContent(previousConfig, point) !== getMarkerContent(nextConfig, nextPoint);
  });
}
function syncViewport(map, config, zoomChanged = false) {
  const points = getRenderedPoints(config);
  if (points.length === 0) {
    syncCenter(map, config, zoomChanged);
    return;
  }
  if (points.length === 1) {
    const [point] = points;
    map.easeTo({
      center: [point.lng, point.lat],
      duration: 180,
      essential: true,
      offset: [0, config.centerOffsetY],
      zoom: config.zoom
    }, {
      isMinimalMapInternal: true
    });
    return;
  }
  const bounds = points.reduce((currentBounds, point) => currentBounds.extend([point.lng, point.lat]), new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.LngLatBounds([points[0].lng, points[0].lat], [points[0].lng, points[0].lat]));
  map.fitBounds(bounds, {
    duration: 180,
    essential: true,
    padding: 48
  }, {
    isMinimalMapInternal: true
  });
}
function createMinimalMap(host, initialConfig = {}, runtimeConfig = {}) {
  const state = {
    attribution: null,
    config: null,
    controls: null,
    searchControl: null,
    selectedLocationId: null,
    map: null,
    markers: [],
    observer: null
  };
  function syncMarkers(config, forceRecreate = false) {
    if (!state.map) {
      return;
    }
    const points = getRenderedPoints(config);
    if (forceRecreate || points.length === 0) {
      state.markers.forEach(marker => marker.remove());
      state.markers = [];
    }
    if (points.length === 0) {
      return;
    }
    const onMarkerClick = id => {
      const point = points.find(p => p.id === id);
      if (point && state.map) {
        const activeConfig = state.config ?? config;
        state.selectedLocationId = id;
        state.map.easeTo({
          center: [point.lng, point.lat],
          zoom: Math.max(state.map.getZoom(), 15),
          padding: {
            left: (0,_search_panel_layout__WEBPACK_IMPORTED_MODULE_8__.getSearchPanelDesktopPadding)(activeConfig, state.searchControl ? host.querySelector('.minimal-map-search-host') : null),
            top: 0,
            right: 0,
            bottom: 0
          },
          essential: true
        }, {
          isMinimalMapInternal: true
        });
        if (state.searchControl) {
          state.searchControl.update(activeConfig, id);
        }
      }
    };
    state.markers = points.map(point => createMarker(config, point, onMarkerClick).addTo(state.map));
  }
  function setupUserInteractionListeners(map) {
    const clearSelection = event => {
      if (event.isMinimalMapInternal) {
        return;
      }
      if (state.selectedLocationId) {
        state.selectedLocationId = null;
        if (state.config) {
          state.searchControl?.update(state.config, undefined);
        }
      }
    };
    map.on('movestart', clearSelection);
    map.on('zoomstart', clearSelection);
  }
  function syncControls(config) {
    state.controls?.destroy();
    state.controls = null;
    if (config.showZoomControls && state.map) {
      state.controls = (0,_wp_controls__WEBPACK_IMPORTED_MODULE_6__.createWordPressZoomControls)(host, state.map, config);
    }
  }
  function syncSearch(config) {
    if (config.allowSearch && config.locations.length > 0 && state.map) {
      if (!state.searchControl) {
        state.searchControl = (0,_SearchControl__WEBPACK_IMPORTED_MODULE_7__.createWordPressSearchControl)(host, state.map, config, state.selectedLocationId ?? undefined, location => {
          if (location.id) {
            state.selectedLocationId = location.id;
          }
        });
      } else {
        state.searchControl.update(config, state.selectedLocationId ?? undefined);
      }
    } else {
      state.searchControl?.destroy();
      state.searchControl = null;
    }
  }
  function syncAttribution(config) {
    state.attribution?.destroy();
    state.attribution = null;
    if (config.showAttribution) {
      state.attribution = (0,_attribution_pill__WEBPACK_IMPORTED_MODULE_2__.createAttributionPill)(host, config);
    }
  }
  function build(rawConfig) {
    const config = (0,_defaults__WEBPACK_IMPORTED_MODULE_3__.normalizeMapConfig)(rawConfig, runtimeConfig);
    state.config = config;
    const viewport = createShell(host, config);
    if (!canCreateWebGLContext()) {
      createFallback(host, config.fallbackMessage);
      return;
    }
    try {
      state.map = new (maplibre_gl__WEBPACK_IMPORTED_MODULE_0___default().Map)({
        attributionControl: false,
        boxZoom: config.interactive,
        center: [config.centerLng, config.centerLat],
        container: viewport,
        doubleClickZoom: config.interactive,
        dragPan: config.interactive,
        dragRotate: config.interactive,
        keyboard: config.interactive,
        scrollZoom: config.scrollZoom,
        style: config.styleUrl,
        touchZoomRotate: config.interactive && config.mobileTwoFingerZoom,
        zoom: config.zoom
      });
    } catch {
      createFallback(host, config.fallbackMessage);
      return;
    }
    const map = state.map;
    if (!config.interactive) {
      map.boxZoom.disable();
      map.doubleClickZoom.disable();
      map.dragPan.disable();
      map.dragRotate.disable();
      map.keyboard.disable();
      map.touchZoomRotate.disable();
    }
    (0,_interactions__WEBPACK_IMPORTED_MODULE_4__.syncTouchZoomInteraction)(map, config);
    map.on('load', () => {
      syncViewport(map, config);
      map.resize();
      if (config.styleTheme) {
        try {
          (0,_lib_styles_themeEngine__WEBPACK_IMPORTED_MODULE_5__.applyStyleTheme)(map, config.styleTheme, config.stylePreset);
        } catch (e) {
          console.warn('Initial theme application failed', e);
        }
      }
    });
    map.on('style.load', () => {
      if (config.styleTheme) {
        try {
          (0,_lib_styles_themeEngine__WEBPACK_IMPORTED_MODULE_5__.applyStyleTheme)(map, config.styleTheme, config.stylePreset);
        } catch (e) {
          console.warn('Style theme re-application failed', e);
        }
      }
    });
    map.on('click', event => {
      if (!config.interactive) {
        return;
      }
      const coordinates = {
        lat: event.lngLat.lat,
        lng: event.lngLat.lng
      };
      runtimeConfig.onMapClick?.(coordinates);
    });
    map.on('error', () => {
      if (map.loaded()) {
        return;
      }
      createFallback(host, config.fallbackMessage);
    });
    if (typeof window.ResizeObserver === 'function') {
      state.observer = new window.ResizeObserver(() => {
        state.map?.resize();
      });
      state.observer.observe(host);
    }
    syncMarkers(config, true);
    syncControls(config);
    syncSearch(config);
    syncAttribution(config);
    setupUserInteractionListeners(map);
  }
  function destroy() {
    state.attribution?.destroy();
    state.attribution = null;
    state.controls?.destroy();
    state.controls = null;
    state.searchControl?.destroy();
    state.searchControl = null;
    state.observer?.disconnect();
    state.observer = null;
    state.map?.remove();
    state.map = null;
    state.markers = [];
    host.innerHTML = '';
  }
  function update(rawConfig = {}) {
    const nextConfig = (0,_defaults__WEBPACK_IMPORTED_MODULE_3__.normalizeMapConfig)(rawConfig, runtimeConfig);
    const previousConfig = state.config;
    if (!state.map) {
      destroy();
      build(nextConfig);
      return;
    }
    host.style.height = nextConfig.heightCssValue;
    if (!previousConfig || previousConfig.styleUrl !== nextConfig.styleUrl) {
      state.map.setStyle(nextConfig.styleUrl);
    }
    if (JSON.stringify(previousConfig?.styleTheme) !== JSON.stringify(nextConfig.styleTheme)) {
      try {
        (0,_lib_styles_themeEngine__WEBPACK_IMPORTED_MODULE_5__.applyStyleTheme)(state.map, nextConfig.styleTheme, nextConfig.stylePreset);
      } catch (e) {
        console.warn('Live theme update failed', e);
      }
    }
    const centerChanged = !previousConfig || previousConfig.centerLat !== nextConfig.centerLat || previousConfig.centerLng !== nextConfig.centerLng || previousConfig.centerOffsetY !== nextConfig.centerOffsetY;
    const zoomChanged = !previousConfig || previousConfig.zoom !== nextConfig.zoom;
    if (centerChanged || zoomChanged || didRenderedPointsChange(previousConfig, nextConfig)) {
      syncViewport(state.map, nextConfig, zoomChanged);
    }
    if (!previousConfig || previousConfig.showZoomControls !== nextConfig.showZoomControls || didZoomControlsStyleChange(previousConfig, nextConfig)) {
      syncControls(nextConfig);
    }
    syncSearch(nextConfig);
    if (!previousConfig || previousConfig.showAttribution !== nextConfig.showAttribution || didCreditsStyleChange(previousConfig, nextConfig)) {
      syncAttribution(nextConfig);
    }
    if (previousConfig?.scrollZoom !== nextConfig.scrollZoom) {
      if (nextConfig.scrollZoom) {
        state.map.scrollZoom.enable();
      } else {
        state.map.scrollZoom.disable();
      }
    }
    if (previousConfig?.interactive !== nextConfig.interactive || previousConfig?.mobileTwoFingerZoom !== nextConfig.mobileTwoFingerZoom) {
      (0,_interactions__WEBPACK_IMPORTED_MODULE_4__.syncTouchZoomInteraction)(state.map, nextConfig);
    }
    if (!previousConfig || previousConfig.markerContent !== nextConfig.markerContent || previousConfig.markerClassName !== nextConfig.markerClassName || previousConfig.markerOffsetY !== nextConfig.markerOffsetY || didRenderedPointsChange(previousConfig, nextConfig) || didRenderedMarkerContentChange(previousConfig, nextConfig)) {
      syncMarkers(nextConfig, !previousConfig || previousConfig.markerContent !== nextConfig.markerContent || previousConfig.markerClassName !== nextConfig.markerClassName || previousConfig.markerOffsetY !== nextConfig.markerOffsetY || didRenderedPointsChange(previousConfig, nextConfig) || didRenderedMarkerContentChange(previousConfig, nextConfig));
    }
    state.config = nextConfig;
    state.map.resize();
  }
  build(initialConfig);
  return {
    destroy,
    update
  };
}
function parseNodeConfig(node) {
  try {
    return JSON.parse(node.dataset.minimalMapConfig ?? '{}');
  } catch {
    return {};
  }
}
function bootstrapFrontendMaps(runtimeConfig = window.MinimalMapFrontConfig ?? {}) {
  document.querySelectorAll('[data-minimal-map-config]').forEach(node => {
    createMinimalMap(node, parseNodeConfig(node), runtimeConfig);
  });
}

/***/ },

/***/ "./src/map/search-panel-layout.ts"
/*!****************************************!*\
  !*** ./src/map/search-panel-layout.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SEARCH_PANEL_WIDTH: () => (/* binding */ DEFAULT_SEARCH_PANEL_WIDTH),
/* harmony export */   applySearchPanelCssVariables: () => (/* binding */ applySearchPanelCssVariables),
/* harmony export */   getSearchPanelDesktopPadding: () => (/* binding */ getSearchPanelDesktopPadding)
/* harmony export */ });
const DEFAULT_SEARCH_PANEL_WIDTH = '320px';
const MOBILE_BREAKPOINT = 600;
function parsePixelValue(value) {
  const match = value.trim().match(/^(-?\d*\.?\d+)px$/i);
  return match ? Number(match[1]) : 0;
}
function applySearchPanelCssVariables(target, config) {
  target.style.setProperty('--minimal-map-search-width', config.searchPanelWidth);
  target.style.setProperty('--minimal-map-search-background-primary', config.searchPanelBackgroundPrimary);
  target.style.setProperty('--minimal-map-search-background-secondary', config.searchPanelBackgroundSecondary);
  target.style.setProperty('--minimal-map-search-background-hover', config.searchPanelBackgroundHover);
  target.style.setProperty('--minimal-map-search-foreground-primary', config.searchPanelForegroundPrimary);
  target.style.setProperty('--minimal-map-search-foreground-secondary', config.searchPanelForegroundSecondary);
  target.style.setProperty('--minimal-map-search-margin-top', config.searchPanelOuterMargin.top);
  target.style.setProperty('--minimal-map-search-margin-right', config.searchPanelOuterMargin.right);
  target.style.setProperty('--minimal-map-search-margin-bottom', config.searchPanelOuterMargin.bottom);
  target.style.setProperty('--minimal-map-search-margin-left', config.searchPanelOuterMargin.left);
  target.style.setProperty('--minimal-map-search-gap', config.searchPanelOuterMargin.top);
  target.style.setProperty('--minimal-map-search-input-radius', config.searchPanelBorderRadiusInput);
  target.style.setProperty('--minimal-map-search-card-radius', config.searchPanelBorderRadiusCard);
  target.style.setProperty('--minimal-map-search-card-gap', config.searchPanelCardGap);
}
function getSearchPanelDesktopPadding(config, searchHost) {
  if (!config.allowSearch || typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT) {
    return 0;
  }
  if (searchHost && typeof document !== 'undefined') {
    const measure = document.createElement('div');
    measure.style.position = 'absolute';
    measure.style.top = '0';
    measure.style.left = '0';
    measure.style.width = 'calc(var(--minimal-map-search-width) + var(--minimal-map-search-margin-left) + var(--minimal-map-search-margin-right))';
    measure.style.height = '0';
    measure.style.visibility = 'hidden';
    measure.style.pointerEvents = 'none';
    measure.setAttribute('aria-hidden', 'true');
    searchHost.appendChild(measure);
    const width = Math.ceil(measure.getBoundingClientRect().width);
    measure.remove();
    if (width > 0) {
      return width;
    }
  }
  return parsePixelValue(config.searchPanelWidth || DEFAULT_SEARCH_PANEL_WIDTH) + parsePixelValue(config.searchPanelOuterMargin.left) + parsePixelValue(config.searchPanelOuterMargin.right);
}

/***/ },

/***/ "./src/map/style-presets.ts"
/*!**********************************!*\
  !*** ./src/map/style-presets.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_STYLE_PRESETS: () => (/* binding */ DEFAULT_STYLE_PRESETS),
/* harmony export */   getStyleOptions: () => (/* binding */ getStyleOptions),
/* harmony export */   getStylePresets: () => (/* binding */ getStylePresets)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_STYLE_PRESETS = {
  liberty: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Liberty', 'minimal-map'),
    style_url: 'https://tiles.openfreemap.org/styles/liberty'
  },
  bright: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bright', 'minimal-map'),
    style_url: 'https://tiles.openfreemap.org/styles/bright'
  },
  positron: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Positron', 'minimal-map'),
    style_url: 'https://tiles.openfreemap.org/styles/positron'
  }
};
function getStylePresets(runtimePresets = {}) {
  if (Object.keys(runtimePresets).length > 0) {
    return runtimePresets;
  }
  return DEFAULT_STYLE_PRESETS;
}
function getStyleOptions(runtimePresets = {}) {
  const presets = getStylePresets(runtimePresets);
  return Object.entries(presets).map(([value, preset]) => ({
    label: preset.label,
    value
  }));
}

/***/ },

/***/ "./src/map/wp-controls.ts"
/*!********************************!*\
  !*** ./src/map/wp-controls.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWordPressZoomControls: () => (/* binding */ createWordPressZoomControls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _zoom_control_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zoom-control-options */ "./src/map/zoom-control-options.ts");


function applyControlStyles(controls, config) {
  controls.dataset.position = config.zoomControlsPosition;
  controls.style.setProperty('--minimal-map-controls-margin-top', config.zoomControlsOuterMargin.top);
  controls.style.setProperty('--minimal-map-controls-margin-right', config.zoomControlsOuterMargin.right);
  controls.style.setProperty('--minimal-map-controls-margin-bottom', config.zoomControlsOuterMargin.bottom);
  controls.style.setProperty('--minimal-map-controls-margin-left', config.zoomControlsOuterMargin.left);
  controls.style.setProperty('--minimal-map-controls-button-padding-top', config.zoomControlsPadding.top);
  controls.style.setProperty('--minimal-map-controls-button-padding-right', config.zoomControlsPadding.right);
  controls.style.setProperty('--minimal-map-controls-button-padding-bottom', config.zoomControlsPadding.bottom);
  controls.style.setProperty('--minimal-map-controls-button-padding-left', config.zoomControlsPadding.left);
  controls.style.setProperty('--minimal-map-controls-button-background', config.zoomControlsBackgroundColor);
  controls.style.setProperty('--minimal-map-controls-button-color', config.zoomControlsIconColor);
  controls.style.setProperty('--minimal-map-controls-button-border-radius', config.zoomControlsBorderRadius);
  controls.style.setProperty('--minimal-map-controls-button-border-color', config.zoomControlsBorderColor);
  controls.style.setProperty('--minimal-map-controls-button-border-width', config.zoomControlsBorderWidth);
}
function createControlButton(label, icon, onClick) {
  const button = document.createElement('button');
  const iconWrap = document.createElement('span');
  button.type = 'button';
  button.className = 'minimal-map-controls__button';
  button.setAttribute('aria-label', label);
  button.addEventListener('click', onClick);
  iconWrap.className = 'minimal-map-controls__icon';
  iconWrap.innerHTML = icon;
  button.appendChild(iconWrap);
  return button;
}
function createWordPressZoomControls(host, map, config) {
  const controls = document.createElement('div');
  controls.className = 'minimal-map-controls';
  applyControlStyles(controls, config);
  const zoomInButton = createControlButton((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zoom in', 'minimal-map'), (0,_zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.getZoomControlRuntimeIconSvg)(config.zoomControlsPlusIcon), () => map.zoomIn());
  const zoomOutButton = createControlButton((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zoom out', 'minimal-map'), (0,_zoom_control_options__WEBPACK_IMPORTED_MODULE_1__.getZoomControlRuntimeIconSvg)(config.zoomControlsMinusIcon), () => map.zoomOut());
  controls.append(zoomInButton, zoomOutButton);
  host.appendChild(controls);
  return {
    destroy() {
      controls.remove();
    }
  };
}

/***/ },

/***/ "./src/map/zoom-control-options.ts"
/*!*****************************************!*\
  !*** ./src/map/zoom-control-options.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ZOOM_CONTROLS_BACKGROUND_COLOR: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_BACKGROUND_COLOR),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_BORDER_COLOR: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_BORDER_COLOR),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_BORDER_RADIUS: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_BORDER_RADIUS),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_BORDER_WIDTH: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_BORDER_WIDTH),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_ICON_COLOR: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_ICON_COLOR),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_MINUS_ICON: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_MINUS_ICON),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_OUTER_MARGIN: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_OUTER_MARGIN),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_PADDING: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_PADDING),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_PLUS_ICON: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_PLUS_ICON),
/* harmony export */   DEFAULT_ZOOM_CONTROLS_POSITION: () => (/* binding */ DEFAULT_ZOOM_CONTROLS_POSITION),
/* harmony export */   ZOOM_CONTROLS_MINUS_ICON_OPTIONS: () => (/* binding */ ZOOM_CONTROLS_MINUS_ICON_OPTIONS),
/* harmony export */   ZOOM_CONTROLS_PLUS_ICON_OPTIONS: () => (/* binding */ ZOOM_CONTROLS_PLUS_ICON_OPTIONS),
/* harmony export */   ZOOM_CONTROLS_POSITION_OPTIONS: () => (/* binding */ ZOOM_CONTROLS_POSITION_OPTIONS),
/* harmony export */   getZoomControlRuntimeIconSvg: () => (/* binding */ getZoomControlRuntimeIconSvg)
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-down-left.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-down-right.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-up-left.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-up-right.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/line-solid.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus-circle-filled.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus-circle.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/separator.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);


const DEFAULT_ZOOM_CONTROLS_PADDING = {
  top: '8px',
  right: '8px',
  bottom: '8px',
  left: '8px'
};
const DEFAULT_ZOOM_CONTROLS_OUTER_MARGIN = {
  top: '16px',
  right: '16px',
  bottom: '16px',
  left: '16px'
};
const DEFAULT_ZOOM_CONTROLS_BORDER_RADIUS = '2px';
const DEFAULT_ZOOM_CONTROLS_BORDER_WIDTH = '1px';
const DEFAULT_ZOOM_CONTROLS_BACKGROUND_COLOR = '#ffffff';
const DEFAULT_ZOOM_CONTROLS_ICON_COLOR = '#1e1e1e';
const DEFAULT_ZOOM_CONTROLS_BORDER_COLOR = '#dcdcde';
const DEFAULT_ZOOM_CONTROLS_POSITION = 'top-right';
const DEFAULT_ZOOM_CONTROLS_PLUS_ICON = 'plus';
const DEFAULT_ZOOM_CONTROLS_MINUS_ICON = 'line-solid';
const ZOOM_CONTROLS_POSITION_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Top left', 'minimal-map'),
  value: 'top-left',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Top right', 'minimal-map'),
  value: 'top-right',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Bottom left', 'minimal-map'),
  value: 'bottom-left',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Bottom right', 'minimal-map'),
  value: 'bottom-right',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
const ZOOM_CONTROLS_PLUS_ICON_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Plus', 'minimal-map'),
  value: 'plus',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
  svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Plus circle', 'minimal-map'),
  value: 'plus-circle',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
  svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 8v8M8 12h8"/></svg>'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Filled plus circle', 'minimal-map'),
  value: 'plus-circle-filled',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
  svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="currentColor" stroke="none"/><path d="M12 8v8M8 12h8" stroke="var(--minimal-map-controls-button-background, #fff)"/></svg>'
}];
const ZOOM_CONTROLS_MINUS_ICON_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Line', 'minimal-map'),
  value: 'line-solid',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
  svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12"/></svg>'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Separator', 'minimal-map'),
  value: 'separator',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
  svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12"/><path d="M12 7v10" opacity="0.2"/></svg>'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Close small', 'minimal-map'),
  value: 'close-small',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12h8"/></svg>'
}];
const ZOOM_CONTROLS_ICON_OPTIONS = [...ZOOM_CONTROLS_PLUS_ICON_OPTIONS, ...ZOOM_CONTROLS_MINUS_ICON_OPTIONS];
function getZoomControlRuntimeIconSvg(icon) {
  return ZOOM_CONTROLS_ICON_OPTIONS.find(option => option.value === icon)?.svg ?? ZOOM_CONTROLS_PLUS_ICON_OPTIONS[0].svg;
}

/***/ },

/***/ "./src/components/TagBadge/style.scss"
/*!********************************************!*\
  !*** ./src/components/TagBadge/style.scss ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

}]);
//# sourceMappingURL=map-runtime.js.map