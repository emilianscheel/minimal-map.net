"use strict";
(globalThis["webpackChunkminimal_map"] = globalThis["webpackChunkminimal_map"] || []).push([["admin-section-dashboard"],{

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

/***/ "./src/admin/sections/DashboardSection.tsx"
/*!*************************************************!*\
  !*** ./src/admin/sections/DashboardSection.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardSection)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContentHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContentHeader */ "./src/admin/ContentHeader.tsx");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-config */ "./src/admin/app-config.ts");
/* harmony import */ var _AdminSectionIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AdminSectionIcon */ "./src/admin/AdminSectionIcon.tsx");
/* harmony import */ var _map_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../map/bootstrap */ "./src/map/bootstrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const CARD_COPY = {
  locations: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Manage every place you want to render on your maps and prepare it for future block integrations.', 'minimal-map'),
  collections: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Build reusable groups of locations and curate map-ready sets without changing the location editor flow.', 'minimal-map'),
  logos: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Upload reusable SVG logos and assign them across multiple locations without duplicating assets.', 'minimal-map'),
  markers: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Create marker variants and keep your map pin system consistent across locations and styles.', 'minimal-map'),
  tags: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add lightweight labels that make large map datasets easier to sort, search, and evolve.', 'minimal-map')
};
const CTA_COPY = {
  locations: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open locations', 'minimal-map'),
  collections: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open collections', 'minimal-map'),
  logos: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open logos', 'minimal-map'),
  markers: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open markers', 'minimal-map'),
  tags: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open tags', 'minimal-map')
};
const COUNT_KEYS = {
  locations: 'locations',
  collections: 'collections',
  logos: 'logos',
  markers: 'markers',
  tags: 'tags'
};
function DashboardCard({
  appConfig,
  view,
  title,
  url
}) {
  const countKey = COUNT_KEYS[view];
  const count = typeof appConfig.stats[countKey] === 'number' ? appConfig.stats[countKey] : 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
    className: "minimal-map-admin__feature-card",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "minimal-map-admin__feature-meta",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "minimal-map-admin__feature-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AdminSectionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            view: view
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "minimal-map-admin__feature-count",
          children: count
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
        className: "minimal-map-admin__feature-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "minimal-map-admin__feature-description",
        children: CARD_COPY[view]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        href: url,
        variant: "link",
        className: "minimal-map-admin__feature-link",
        children: CTA_COPY[view]
      })]
    })
  });
}
function DashboardSection({
  activeSection,
  appConfig,
  sectionMap
}) {
  const mapHostRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const mapInstanceRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const mapConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    centerLat: 52.517,
    centerLng: 13.388,
    zoom: 9.5,
    height: 100,
    heightUnit: '%',
    stylePreset: 'positron',
    showZoomControls: true,
    scrollZoom: true
  }), []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!mapHostRef.current) {
      return undefined;
    }
    mapInstanceRef.current = (0,_map_bootstrap__WEBPACK_IMPORTED_MODULE_6__.createMinimalMap)(mapHostRef.current, mapConfig, appConfig.mapConfig ?? {});
    return () => {
      mapInstanceRef.current?.destroy();
      mapInstanceRef.current = null;
    };
  }, [appConfig.mapConfig, mapConfig]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ContentHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: activeSection.title,
      description: activeSection.description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "minimal-map-admin__content minimal-map-admin__content--dashboard",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "minimal-map-admin__dashboard",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "minimal-map-admin__dashboard-grid",
          children: _app_config__WEBPACK_IMPORTED_MODULE_4__.CARD_VIEWS.map(view => {
            const section = sectionMap[view];
            return section ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DashboardCard, {
              appConfig: appConfig,
              view: view,
              title: section.title,
              url: section.url
            }, view) : null;
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "minimal-map-admin__dashboard-map",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            ref: mapHostRef,
            className: "minimal-map-admin__dashboard-map-surface"
          })
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/map/bootstrap.ts"
/*!******************************!*\
  !*** ./src/map/bootstrap.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrapFrontendMaps: () => (/* binding */ bootstrapFrontendMaps),
/* harmony export */   createMinimalMap: () => (/* binding */ createMinimalMap),
/* harmony export */   loadMapRuntime: () => (/* binding */ loadMapRuntime)
/* harmony export */ });
let mapRuntimePromise = null;
function loadMapRuntime() {
  if (!mapRuntimePromise) {
    mapRuntimePromise = Promise.all(/*! import() | map-runtime */[__webpack_require__.e("map-runtime-vendor"), __webpack_require__.e("map-runtime")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runtime */ "./src/map/runtime.ts"));
  }
  return mapRuntimePromise;
}
function createMinimalMap(host, initialConfig = {}, runtimeConfig = {}) {
  let latestConfig = initialConfig;
  let runtimeInstance = null;
  let isDestroyed = false;
  const runtimeReady = loadMapRuntime().then(runtime => {
    if (isDestroyed) {
      return null;
    }
    runtimeInstance = runtime.createMinimalMap(host, latestConfig, runtimeConfig);
    return runtimeInstance;
  }).catch(error => {
    console.error('Failed to load the Minimal Map runtime.', error);
    return null;
  });
  return {
    destroy: () => {
      isDestroyed = true;
      if (runtimeInstance) {
        runtimeInstance.destroy();
        runtimeInstance = null;
        return;
      }
      void runtimeReady.then(instance => {
        instance?.destroy();
      });
    },
    update: (nextConfig = {}) => {
      if (isDestroyed) {
        return;
      }
      latestConfig = nextConfig;
      runtimeInstance?.update(nextConfig);
    }
  };
}
function bootstrapFrontendMaps(runtimeConfig = window.MinimalMapFrontConfig ?? {}) {
  const nodes = document.querySelectorAll('[data-minimal-map-config]');
  if (nodes.length === 0) {
    return;
  }
  void loadMapRuntime().then(runtime => {
    runtime.bootstrapFrontendMaps(runtimeConfig);
  }).catch(error => {
    console.error('Failed to bootstrap Minimal Map frontend maps.', error);
  });
}

/***/ }

}]);
//# sourceMappingURL=admin-section-dashboard.js.map