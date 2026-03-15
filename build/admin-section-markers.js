"use strict";
(globalThis["webpackChunkminimal_map"] = globalThis["webpackChunkminimal_map"] || []).push([["admin-section-markers"],{

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

/***/ "./src/admin/markers/MarkersEmptyState.tsx"
/*!*************************************************!*\
  !*** ./src/admin/markers/MarkersEmptyState.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkersEmptyState)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/file-up.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/EmptyState */ "./src/components/EmptyState/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




function MarkersEmptyState({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No markers found', 'minimal-map'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload your custom SVG markers to personalize your maps. Simply drag and drop your files here or use the button below.', 'minimal-map'),
    action: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload', 'minimal-map'),
      onClick: () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.svg';
        input.multiple = true;
        input.onchange = e => {
          const files = e.target.files;
          if (files) {
            void controller.onUploadMarkers(files);
          }
        };
        input.click();
      },
      disabled: controller.isUploading,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    }
  });
}

/***/ },

/***/ "./src/admin/markers/MarkersGrid.tsx"
/*!*******************************************!*\
  !*** ./src/admin/markers/MarkersGrid.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkersGrid)
/* harmony export */ });
/* harmony import */ var _wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dataviews/wp */ "./node_modules/@wordpress/dataviews/build-wp/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/download.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _components_MarkerMiniMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MarkerMiniMap */ "./src/components/MarkerMiniMap.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






function MarkersGrid({
  controller
}) {
  const fields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{
    id: 'title',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    enableGlobalSearch: true
  }, {
    id: 'map_preview',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preview', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_MarkerMiniMap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      marker: item,
      theme: controller.activeTheme
    })
  }], [controller.activeTheme]);
  const actions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{
    id: 'download',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Download', 'minimal-map'),
    isPrimary: true,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 18
    }),
    callback: items => {
      if (items.length === 1) {
        controller.onDownloadMarker(items[0]);
      }
    }
  }, {
    id: 'delete',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete', 'minimal-map'),
    isPrimary: false,
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: 18
    }),
    callback: items => {
      if (items.length === 1) {
        void controller.onDeleteMarker(items[0]);
      }
    },
    isEligible: () => !controller.isRowActionPending
  }], [controller]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "minimal-map-admin__collections-grid-wrap minimal-map-admin__markers-grid-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews, {
      actions: actions,
      data: controller.paginatedMarkers,
      fields: fields,
      getItemId: item => `${item.id}`,
      paginationInfo: {
        totalItems: controller.markers.length,
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

/***/ "./src/admin/markers/UploadMarkerButton.tsx"
/*!**************************************************!*\
  !*** ./src/admin/markers/UploadMarkerButton.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadMarkerButton: () => (/* binding */ UploadMarkerButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/upload.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function UploadMarkerButton({
  onUpload,
  isUploading
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 18
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Markers', 'minimal-map'),
    onClick: () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/svg+xml';
      input.multiple = true;
      input.onchange = e => {
        const files = e.target.files;
        if (files && files.length > 0) {
          onUpload(files);
        }
      };
      input.click();
    },
    variant: "tertiary",
    __next40pxDefaultSize: true,
    isBusy: isUploading,
    disabled: isUploading
  });
}

/***/ },

/***/ "./src/admin/markers/controller.tsx"
/*!******************************************!*\
  !*** ./src/admin/markers/controller.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMarkersController: () => (/* binding */ useMarkersController)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_locations_configureApiFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/locations/configureApiFetch */ "./src/lib/locations/configureApiFetch.ts");
/* harmony import */ var _lib_markers_fetchAllMarkers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/markers/fetchAllMarkers */ "./src/lib/markers/fetchAllMarkers.ts");
/* harmony import */ var _UploadMarkerButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UploadMarkerButton */ "./src/admin/markers/UploadMarkerButton.tsx");
/* harmony import */ var _styles_ThemeSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ThemeSelector */ "./src/admin/styles/ThemeSelector.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const DEFAULT_GRID_VIEW = {
  type: 'grid',
  page: 1,
  perPage: 12,
  titleField: 'title',
  mediaField: 'map_preview',
  fields: [],
  showMedia: true,
  showTitle: true,
  showDescription: false,
  layout: {
    previewSize: 200,
    badgeFields: []
  }
};
function useMarkersController(config, enabled, themeData) {
  const [actionNotice, setActionNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [markers, setMarkers] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [isLoading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(enabled);
  const [isRowActionPending, setRowActionPending] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isUploading, setUploading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [loadError, setLoadError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [view, setView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_GRID_VIEW);
  const loadMarkers = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!enabled) {
      return;
    }
    setLoading(true);
    setLoadError(null);
    try {
      setMarkers(await (0,_lib_markers_fetchAllMarkers__WEBPACK_IMPORTED_MODULE_4__.fetchAllMarkers)(config));
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Markers could not be loaded.', 'minimal-map'));
    } finally {
      setLoading(false);
    }
  }, [config.restPath, enabled]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_locations_configureApiFetch__WEBPACK_IMPORTED_MODULE_3__.configureApiFetch)(config.nonce);
    if (!enabled) {
      return;
    }
    void loadMarkers();
  }, [config.nonce, enabled, loadMarkers]);
  const dismissActionNotice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setActionNotice(null);
  }, []);
  const onDeleteMarker = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async marker => {
    setRowActionPending(true);
    setActionNotice(null);
    try {
      await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: `${config.restPath}/${marker.id}`,
        method: 'DELETE'
      });
      await loadMarkers();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Marker deleted.', 'minimal-map')
      });
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Marker could not be deleted.', 'minimal-map')
      });
      throw error;
    } finally {
      setRowActionPending(false);
    }
  }, [config.restPath, loadMarkers]);
  const onDownloadMarker = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(marker => {
    const blob = new Blob([marker.content], {
      type: 'image/svg+xml'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = marker.title.endsWith('.svg') ? marker.title : `${marker.title}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);
  const onUploadMarkers = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async files => {
    const fileList = Array.from(files).filter(file => file.type === 'image/svg+xml' || file.name.endsWith('.svg'));
    if (fileList.length === 0) {
      return;
    }
    setUploading(true);
    setActionNotice(null);
    try {
      await Promise.all(fileList.map(async file => {
        const content = await file.text();
        // Basic SVG validation (very simple)
        if (!content.includes('<svg')) {
          throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Invalid SVG file.', 'minimal-map'));
        }
        return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: config.restPath,
          method: 'POST',
          data: {
            title: file.name,
            content: content,
            status: 'publish'
          }
        });
      }));
      await loadMarkers();
      setActionNotice({
        status: 'success',
        message: fileList.length === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Marker uploaded.', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._n)('%d marker uploaded.', '%d markers uploaded.', fileList.length, 'minimal-map'), fileList.length)
      });
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Markers could not be uploaded.', 'minimal-map')
      });
    } finally {
      setUploading(false);
    }
  }, [config.restPath, loadMarkers]);
  const {
    paginatedMarkers,
    totalPages
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const search = view.search?.toLowerCase() || '';
    const filtered = search ? markers.filter(m => m.title.toLowerCase().includes(search)) : markers;
    const page = view.page ?? 1;
    const perPage = view.perPage ?? 12;
    const pages = Math.max(1, Math.ceil(filtered.length / perPage));
    const startIndex = (page - 1) * perPage;
    return {
      paginatedMarkers: filtered.slice(startIndex, startIndex + perPage),
      totalPages: pages
    };
  }, [markers, view]);
  return {
    actionNotice,
    activeTheme: themeData.activeTheme,
    dismissActionNotice,
    headerAction: enabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "minimal-map-admin__header-actions-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styles_ThemeSelector__WEBPACK_IMPORTED_MODULE_6__.ThemeSelector, {
        activeTheme: themeData.activeTheme,
        themes: themeData.themes,
        onSwitch: themeData.onSwitchTheme
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UploadMarkerButton__WEBPACK_IMPORTED_MODULE_5__.UploadMarkerButton, {
        onUpload: onUploadMarkers,
        isUploading: isUploading
      })]
    }) : null,
    isLoading,
    isRowActionPending,
    isUploading,
    loadError,
    markers,
    onDeleteMarker,
    onDownloadMarker,
    onUploadMarkers,
    onChangeView: nextView => setView(nextView),
    paginatedMarkers,
    totalPages,
    view
  };
}

/***/ },

/***/ "./src/admin/markers/index.tsx"
/*!*************************************!*\
  !*** ./src/admin/markers/index.tsx ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkersView),
/* harmony export */   useMarkersController: () => (/* reexport safe */ _controller__WEBPACK_IMPORTED_MODULE_5__.useMarkersController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MarkersEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkersEmptyState */ "./src/admin/markers/MarkersEmptyState.tsx");
/* harmony import */ var _MarkersGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkersGrid */ "./src/admin/markers/MarkersGrid.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller */ "./src/admin/markers/controller.tsx");






function MarkersView({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "minimal-map-admin__markers-view",
    children: [controller.actionNotice ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__locations-notice",
      status: controller.actionNotice.status,
      onRemove: controller.dismissActionNotice,
      children: controller.actionNotice.message
    }) : null, controller.loadError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__locations-notice",
      status: "error",
      isDismissible: false,
      children: controller.loadError
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "minimal-map-admin__markers-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.DropZone, {
        onFilesDrop: files => {
          void controller.onUploadMarkers(files);
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Drop SVG files here to upload', 'minimal-map')
      }), controller.isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "minimal-map-admin__locations-state minimal-map-admin__locations-state--loading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, {})
      }) : controller.markers.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MarkersEmptyState__WEBPACK_IMPORTED_MODULE_2__["default"], {
        controller: controller
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MarkersGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        controller: controller
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/sections/MarkersSection.tsx"
/*!***********************************************!*\
  !*** ./src/admin/sections/MarkersSection.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkersSection)
/* harmony export */ });
/* harmony import */ var _ContentHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContentHeader */ "./src/admin/ContentHeader.tsx");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../markers */ "./src/admin/markers/index.tsx");
/* harmony import */ var _styles_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/controller */ "./src/admin/styles/controller.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function MarkersSection({
  activeSection,
  appConfig
}) {
  const stylesController = (0,_styles_controller__WEBPACK_IMPORTED_MODULE_2__.useStylesController)(appConfig.stylesConfig, true);
  const controller = (0,_markers__WEBPACK_IMPORTED_MODULE_1__.useMarkersController)(appConfig.markersConfig, true, {
    activeTheme: stylesController.activeTheme,
    themes: stylesController.themes,
    onSwitchTheme: stylesController.switchTheme
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ContentHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: activeSection.title,
      description: activeSection.description,
      actions: controller.headerAction
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "minimal-map-admin__content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_markers__WEBPACK_IMPORTED_MODULE_1__["default"], {
        controller: controller
      })
    })]
  });
}

/***/ },

/***/ "./src/admin/styles/CreateThemeButton.tsx"
/*!************************************************!*\
  !*** ./src/admin/styles/CreateThemeButton.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateThemeButton: () => (/* binding */ CreateThemeButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function CreateThemeButton({
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 18
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Create New Theme', 'minimal-map'),
    onClick: onClick,
    variant: "tertiary",
    __next40pxDefaultSize: true
  });
}

/***/ },

/***/ "./src/admin/styles/DeleteThemeButton.tsx"
/*!************************************************!*\
  !*** ./src/admin/styles/DeleteThemeButton.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteThemeButton: () => (/* binding */ DeleteThemeButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function DeleteThemeButton({
  slug,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 18
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete Current Theme', 'minimal-map'),
    onClick: onClick,
    disabled: slug === 'default',
    variant: "tertiary",
    __next40pxDefaultSize: true
  });
}

/***/ },

/***/ "./src/admin/styles/ExportThemeButton.tsx"
/*!************************************************!*\
  !*** ./src/admin/styles/ExportThemeButton.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportThemeButton: () => (/* binding */ ExportThemeButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/download.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ExportThemeButton({
  onExport
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 18
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Download Theme Config', 'minimal-map'),
    onClick: onExport,
    variant: "tertiary",
    __next40pxDefaultSize: true
  });
}

/***/ },

/***/ "./src/admin/styles/ImportThemeButton.tsx"
/*!************************************************!*\
  !*** ./src/admin/styles/ImportThemeButton.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportThemeButton: () => (/* binding */ ImportThemeButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/upload.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ImportThemeButton({
  onImport
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 18
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Theme File', 'minimal-map'),
    onClick: () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = e => {
        const files = e.target.files;
        if (files) {
          onImport(files);
        }
      };
      input.click();
    },
    variant: "tertiary",
    __next40pxDefaultSize: true
  });
}

/***/ },

/***/ "./src/admin/styles/ThemeSelector.tsx"
/*!********************************************!*\
  !*** ./src/admin/styles/ThemeSelector.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSelector: () => (/* binding */ ThemeSelector)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




function ThemeSelector({
  activeTheme,
  themes,
  onSwitch
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
    popoverProps: {
      placement: 'bottom-start'
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      onClick: onToggle,
      "aria-expanded": isOpen,
      variant: "tertiary",
      __next40pxDefaultSize: true,
      className: "minimal-map-styles__theme-selector-toggle",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "minimal-map-styles__theme-selector-label",
        children: activeTheme?.label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select theme', 'minimal-map')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 16,
        style: {
          flexShrink: 0
        }
      })]
    }),
    renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuGroup, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Switch Theme', 'minimal-map'),
      children: themes.map(theme => {
        const isSelected = theme.slug === activeTheme?.slug;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
          onClick: () => onSwitch(theme.slug),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
            justify: "space-between",
            style: {
              width: '100%'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: theme.label
            }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              size: 16,
              style: {
                flexShrink: 0,
                color: 'var(--wp-admin-theme-color, #3858e8)'
              }
            })]
          })
        }, theme.slug);
      })
    })
  });
}

/***/ },

/***/ "./src/admin/styles/constants.ts"
/*!***************************************!*\
  !*** ./src/admin/styles/constants.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_GROUPS: () => (/* binding */ COLOR_GROUPS),
/* harmony export */   SLOT_LABELS: () => (/* binding */ SLOT_LABELS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const SLOT_LABELS = {
  background: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background', 'minimal-map'),
  park: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Parks', 'minimal-map'),
  residential: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Residential Areas', 'minimal-map'),
  forest: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Forests', 'minimal-map'),
  ice: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ice & Glaciers', 'minimal-map'),
  water: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Water Surfaces', 'minimal-map'),
  waterway: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rivers & Canals', 'minimal-map'),
  building: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Buildings', 'minimal-map'),
  buildingOutline: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Building Outlines', 'minimal-map'),
  path: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pedestrian Paths', 'minimal-map'),
  roadMinor: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minor Roads', 'minimal-map'),
  roadMajorCasing: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Major Road Casing', 'minimal-map'),
  roadMajorFill: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Major Road Fill', 'minimal-map'),
  motorwayCasing: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Motorway Casing', 'minimal-map'),
  motorwayFill: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Motorway Fill', 'minimal-map'),
  rail: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Railway Lines', 'minimal-map'),
  railDash: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Railway Patterns', 'minimal-map'),
  boundary: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Administrative Boundaries', 'minimal-map'),
  aerowayLine: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Runway Lines', 'minimal-map'),
  aerowayArea: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Airport Grounds', 'minimal-map'),
  waterLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Water Labels', 'minimal-map'),
  waterLabelHalo: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Water Label Halo', 'minimal-map'),
  roadLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Road Labels', 'minimal-map'),
  roadLabelHalo: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Road Label Halo', 'minimal-map'),
  placeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Place Labels', 'minimal-map'),
  placeLabelHalo: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Place Label Halo', 'minimal-map')
};
const COLOR_GROUPS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Base Surfaces', 'minimal-map'),
  slots: ['background', 'park', 'residential', 'forest', 'ice', 'water', 'waterway']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Structures', 'minimal-map'),
  slots: ['building', 'buildingOutline']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Roads & Transport', 'minimal-map'),
  slots: ['path', 'roadMinor', 'roadMajorCasing', 'roadMajorFill', 'motorwayCasing', 'motorwayFill', 'rail', 'railDash']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Other Features', 'minimal-map'),
  slots: ['boundary', 'aerowayLine', 'aerowayArea']
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography', 'minimal-map'),
  slots: ['waterLabel', 'waterLabelHalo', 'roadLabel', 'roadLabelHalo', 'placeLabel', 'placeLabelHalo']
}];

/***/ },

/***/ "./src/admin/styles/controller.tsx"
/*!*****************************************!*\
  !*** ./src/admin/styles/controller.tsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStylesController: () => (/* binding */ useStylesController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeSelector */ "./src/admin/styles/ThemeSelector.tsx");
/* harmony import */ var _CreateThemeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateThemeButton */ "./src/admin/styles/CreateThemeButton.tsx");
/* harmony import */ var _DeleteThemeButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteThemeButton */ "./src/admin/styles/DeleteThemeButton.tsx");
/* harmony import */ var _ExportThemeButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExportThemeButton */ "./src/admin/styles/ExportThemeButton.tsx");
/* harmony import */ var _ImportThemeButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImportThemeButton */ "./src/admin/styles/ImportThemeButton.tsx");
/* harmony import */ var _lib_styles_importStyleTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/styles/importStyleTheme */ "./src/lib/styles/importStyleTheme.ts");
/* harmony import */ var _lib_styles_defaultThemeColors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/styles/defaultThemeColors */ "./src/lib/styles/defaultThemeColors.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/admin/styles/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);













function useStylesController(config, active = false) {
  const [themes, setThemes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [activeThemeSlug, setActiveThemeSlug] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('default');
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const [isSaving, setIsSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [draftColors, setDraftColors] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [actionNotice, setActionNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const activeTheme = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return themes.find(t => t.slug === activeThemeSlug) || themes[0] || null;
  }, [themes, activeThemeSlug]);
  const fetchThemes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    setIsLoading(true);
    try {
      const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: config.restPath
      });
      setThemes(data);
      if (data.length > 0) {
        const nextTheme = data.find(t => t.slug === activeThemeSlug) || data[0];
        setActiveThemeSlug(nextTheme.slug);
        setDraftColors(nextTheme.colors);
      }
    } catch (error) {
      console.error('Failed to fetch themes', error);
    } finally {
      setIsLoading(false);
    }
  }, [config.restPath, activeThemeSlug]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (active) {
      fetchThemes();
    }
  }, [active]);
  const switchTheme = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(slug => {
    const theme = themes.find(t => t.slug === slug);
    if (theme) {
      setActiveThemeSlug(slug);
      setDraftColors(theme.colors);
    }
  }, [themes]);
  const setDraftColor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((slot, color) => {
    setDraftColors(prev => {
      if (!prev) return null;
      return {
        ...prev,
        [slot]: color
      };
    });
  }, []);
  const saveTheme = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!activeTheme || !draftColors) return;
    setIsSaving(true);
    try {
      const updatedTheme = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `${config.restPath}/${activeTheme.slug}`,
        method: 'PUT',
        data: {
          colors: draftColors
        }
      });
      setThemes(prev => prev.map(theme => theme.slug === updatedTheme.slug ? updatedTheme : theme));
    } catch (error) {
      console.error('Failed to save theme', error);
    } finally {
      setIsSaving(false);
    }
  }, [activeTheme, config.restPath, draftColors]);
  const createTheme = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async label => {
    setIsLoading(true);
    try {
      setActionNotice(null);
      const newTheme = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: config.restPath,
        method: 'POST',
        data: {
          label
        }
      });
      setThemes(prev => [...prev, newTheme]);
      setActiveThemeSlug(newTheme.slug);
      setDraftColors(newTheme.colors);
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create theme', error);
    } finally {
      setIsLoading(false);
    }
  }, [config.restPath]);
  const deleteTheme = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async slug => {
    if (slug === 'default') return;
    setIsLoading(true);
    try {
      setActionNotice(null);
      await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `${config.restPath}/${slug}`,
        method: 'DELETE'
      });
      setThemes(prev => prev.filter(t => t.slug !== slug));
      setActiveThemeSlug('default');
      const defaultTheme = themes.find(t => t.slug === 'default');
      if (defaultTheme) {
        setDraftColors(defaultTheme.colors);
      }
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Failed to delete theme', error);
    } finally {
      setIsLoading(false);
    }
  }, [config.restPath, themes]);
  const exportTheme = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (!activeTheme || !draftColors) return;
    const configToExport = {
      ...activeTheme,
      colors: draftColors
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(configToExport, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `minimal-map-theme-${activeTheme.slug}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }, [activeTheme, draftColors]);
  const importTheme = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async themeImport => {
    setIsLoading(true);
    try {
      setActionNotice(null);
      const newTheme = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: config.restPath,
        method: 'POST',
        data: {
          label: themeImport.label
        }
      });
      const updatedTheme = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `${config.restPath}/${newTheme.slug}`,
        method: 'PUT',
        data: {
          colors: themeImport.colors
        }
      });
      setThemes(prev => [...prev, updatedTheme]);
      setActiveThemeSlug(updatedTheme.slug);
      setDraftColors(updatedTheme.colors);
      if (themeImport.warningSlots.length > 0) {
        const warningLabels = themeImport.warningSlots.map(slot => _constants__WEBPACK_IMPORTED_MODULE_11__.SLOT_LABELS[slot] || slot).join(', ');
        setActionNotice({
          status: 'warning',
          message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Imported theme with fallback default colors for: %s', 'minimal-map'), warningLabels)
        });
      }
    } catch (error) {
      console.error('Failed to import theme', error);
      setActionNotice({
        status: 'error',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Failed to import theme.', 'minimal-map')
      });
    } finally {
      setIsLoading(false);
    }
  }, [config.restPath]);
  const onImportFiles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async files => {
    const file = files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async readerEvent => {
      try {
        const content = JSON.parse(readerEvent.target?.result);
        const defaultColors = themes.find(theme => theme.slug === 'default')?.colors ?? _lib_styles_defaultThemeColors__WEBPACK_IMPORTED_MODULE_10__.DEFAULT_POSITRON_THEME_COLORS;
        const themeImport = (0,_lib_styles_importStyleTheme__WEBPACK_IMPORTED_MODULE_9__.parseThemeImport)(content, {
          defaultColors,
          fileName: file.name
        });
        await importTheme(themeImport);
      } catch (err) {
        setActionNotice({
          status: 'error',
          message: err instanceof Error ? err.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Invalid JSON file.', 'minimal-map')
        });
      }
    };
    reader.onerror = () => {
      setActionNotice({
        status: 'error',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Failed to read the selected file.', 'minimal-map')
      });
    };
    reader.readAsText(file);
  }, [importTheme, themes]);
  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const headerAction = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!active) return null;
    const hasChanges = activeTheme && JSON.stringify(activeTheme.colors) !== JSON.stringify(draftColors);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "minimal-map-styles__header-actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "minimal-map-styles__theme-controls",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_CreateThemeButton__WEBPACK_IMPORTED_MODULE_5__.CreateThemeButton, {
          onClick: openCreateModal
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_DeleteThemeButton__WEBPACK_IMPORTED_MODULE_6__.DeleteThemeButton, {
          slug: activeThemeSlug,
          onClick: openDeleteModal
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ExportThemeButton__WEBPACK_IMPORTED_MODULE_7__.ExportThemeButton, {
          onExport: exportTheme
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ImportThemeButton__WEBPACK_IMPORTED_MODULE_8__.ImportThemeButton, {
          onImport: onImportFiles
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ThemeSelector__WEBPACK_IMPORTED_MODULE_4__.ThemeSelector, {
        activeTheme: activeTheme,
        themes: themes,
        onSwitch: switchTheme
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        onClick: saveTheme,
        isBusy: isSaving,
        disabled: isSaving || !hasChanges,
        __next40pxDefaultSize: true,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save Theme', 'minimal-map')
      })]
    });
  }, [active, activeTheme, activeThemeSlug, themes, draftColors, isSaving, saveTheme, exportTheme, onImportFiles, switchTheme]);
  return {
    themes,
    activeTheme,
    isLoading,
    isSaving,
    draftColors,
    actionNotice,
    setDraftColor,
    saveTheme,
    createTheme,
    deleteTheme,
    switchTheme,
    onImportFiles,
    exportTheme,
    headerAction,
    dismissActionNotice: () => setActionNotice(null),
    isCreateModalOpen,
    isDeleteModalOpen,
    openCreateModal,
    closeCreateModal,
    openDeleteModal,
    closeDeleteModal
  };
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

/***/ "./src/components/MarkerMiniMap.tsx"
/*!******************************************!*\
  !*** ./src/components/MarkerMiniMap.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkerMiniMap)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/bootstrap */ "./src/map/bootstrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function MarkerMiniMap({
  marker,
  theme
}) {
  const mapRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const instanceRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Create map once
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mapRef.current) {
      return;
    }

    // Use a deterministic location based on marker ID
    const lat = 52.5 + marker.id % 100 / 1000;
    const lng = 13.4 + marker.id % 100 / 1000;
    instanceRef.current = (0,_map_bootstrap__WEBPACK_IMPORTED_MODULE_1__.createMinimalMap)(mapRef.current, {
      centerLat: lat,
      centerLng: lng,
      markerLat: lat,
      markerLng: lng,
      markerContent: marker.content,
      zoom: 12,
      interactive: false,
      showZoomControls: false,
      allowSearch: false,
      showAttribution: false,
      height: 100,
      heightUnit: '%',
      markerScale: 1.25,
      styleTheme: theme?.colors,
      stylePreset: theme?.basePreset
    });
    return () => {
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, [marker.id]);

  // Update map on changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!instanceRef.current) {
      return;
    }

    // Re-calculate deterministic location
    const lat = 52.5 + marker.id % 100 / 1000;
    const lng = 13.4 + marker.id % 100 / 1000;
    instanceRef.current.update({
      centerLat: lat,
      centerLng: lng,
      markerLat: lat,
      markerLng: lng,
      markerContent: marker.content,
      zoom: 12,
      interactive: false,
      showZoomControls: false,
      allowSearch: false,
      showAttribution: false,
      height: 100,
      heightUnit: '%',
      markerScale: 1.25,
      styleTheme: theme?.colors,
      stylePreset: theme?.basePreset
    });
  }, [marker.id, marker.content, theme]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "minimal-map-admin__marker-mini-map-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ref: mapRef,
      className: "minimal-map-admin__marker-mini-map"
    })
  });
}

/***/ },

/***/ "./src/lib/locations/configureApiFetch.ts"
/*!************************************************!*\
  !*** ./src/lib/locations/configureApiFetch.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configureApiFetch: () => (/* binding */ configureApiFetch)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

let hasApiFetchNonce = false;
function configureApiFetch(nonce) {
  if (!nonce || hasApiFetchNonce) {
    return;
  }
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default().createNonceMiddleware(nonce));
  hasApiFetchNonce = true;
}

/***/ },

/***/ "./src/lib/markers/fetchAllMarkers.ts"
/*!********************************************!*\
  !*** ./src/lib/markers/fetchAllMarkers.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllMarkers: () => (/* binding */ fetchAllMarkers)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


async function fetchAllMarkers(config) {
  try {
    const records = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `${config.restPath}?context=edit&per_page=100`
    });
    return records.map(record => ({
      id: record.id,
      title: typeof record.title === 'object' ? record.title.raw : record.title,
      content: typeof record.content === 'object' ? record.content.raw : record.content
    }));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Markers could not be loaded.', 'minimal-map'));
  }
}

/***/ },

/***/ "./src/lib/styles/defaultThemeColors.ts"
/*!**********************************************!*\
  !*** ./src/lib/styles/defaultThemeColors.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_POSITRON_THEME_COLORS: () => (/* binding */ DEFAULT_POSITRON_THEME_COLORS)
/* harmony export */ });
const DEFAULT_POSITRON_THEME_COLORS = {
  background: '#f2f3f0',
  park: '#d2e8d4',
  residential: '#e4e4e4',
  forest: '#d2e8d4',
  ice: '#e8f4f4',
  water: '#cad2d3',
  waterway: '#cad2d3',
  building: '#d9dad8',
  buildingOutline: '#d9dad8',
  path: '#ffffff',
  roadMinor: '#ffffff',
  roadMajorCasing: '#e5e5e5',
  roadMajorFill: '#ffffff',
  motorwayCasing: '#e5e5e5',
  motorwayFill: '#ffffff',
  rail: '#dcdcdc',
  railDash: '#ffffff',
  boundary: '#c3c3c3',
  aerowayLine: '#e0e0e0',
  aerowayArea: '#d1d1d1',
  waterLabel: '#7a7a7a',
  waterLabelHalo: '#ffffff',
  roadLabel: '#666666',
  roadLabelHalo: '#ffffff',
  placeLabel: '#333333',
  placeLabelHalo: '#ffffff'
};

/***/ },

/***/ "./src/lib/styles/importStyleTheme.ts"
/*!********************************************!*\
  !*** ./src/lib/styles/importStyleTheme.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseThemeImport: () => (/* binding */ parseThemeImport)
/* harmony export */ });
/* harmony import */ var _themeEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themeEngine */ "./src/lib/styles/themeEngine.ts");

const CORE_REQUIRED_SLOTS = ['background', 'water', 'building', 'roadMinor', 'placeLabel'];
function isRecord(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
function createLayerContext(layer) {
  const id = typeof layer.id === 'string' ? layer.id.toLowerCase() : '';
  const type = typeof layer.type === 'string' ? layer.type.toLowerCase() : '';
  const source = typeof layer.source === 'string' ? layer.source.toLowerCase() : '';
  const sourceLayer = typeof layer['source-layer'] === 'string' ? layer['source-layer'].toLowerCase() : '';
  const filter = layer.filter ? JSON.stringify(layer.filter).toLowerCase() : '';
  const metadata = layer.metadata ? JSON.stringify(layer.metadata).toLowerCase() : '';
  const haystack = [id, type, source, sourceLayer, filter, metadata].filter(Boolean).join(' ');
  return {
    layer,
    id,
    type,
    source,
    sourceLayer,
    haystack
  };
}
function getFileBaseName(fileName) {
  const trimmed = fileName.trim();
  const withoutExtension = trimmed.replace(/\.[^.]+$/, '');
  return withoutExtension || 'Imported';
}
function getImportedLabel(label) {
  return `${label} (Imported)`;
}
function hasAny(context, patterns) {
  return patterns.some(pattern => context.haystack.includes(pattern));
}
function isFill(context) {
  return context.type === 'fill';
}
function isLine(context) {
  return context.type === 'line';
}
function isSymbol(context) {
  return context.type === 'symbol';
}
function isBackground(context) {
  return context.type === 'background';
}
const SLOT_FALLBACKS = {
  background: [{
    property: 'background-color',
    matches: context => isBackground(context) || context.id === 'background'
  }],
  park: [{
    property: 'fill-color',
    matches: context => isFill(context) && (hasAny(context, ['park', 'recreation', 'grass', 'garden']) || context.sourceLayer === 'park')
  }],
  residential: [{
    property: 'fill-color',
    matches: context => isFill(context) && (hasAny(context, ['landuse_residential', 'residential', 'neighbourhood', 'neighborhood', 'suburb']) || context.sourceLayer === 'landuse')
  }],
  forest: [{
    property: 'fill-color',
    matches: context => isFill(context) && hasAny(context, ['forest', 'wood', 'wooded', 'tree', 'landcover_wood'])
  }],
  ice: [{
    property: 'fill-color',
    matches: context => isFill(context) && hasAny(context, ['ice', 'glacier'])
  }],
  water: [{
    property: 'fill-color',
    matches: context => isFill(context) && (context.sourceLayer === 'water' || hasAny(context, ['water', 'ocean', 'lake', 'riverbank']))
  }],
  waterway: [{
    property: 'line-color',
    matches: context => isLine(context) && (context.sourceLayer === 'waterway' || hasAny(context, ['waterway', 'river', 'stream', 'canal']))
  }],
  building: [{
    property: 'fill-color',
    matches: context => isFill(context) && (context.sourceLayer === 'building' || hasAny(context, ['building']))
  }],
  buildingOutline: [{
    property: 'fill-outline-color',
    matches: context => isFill(context) && (context.sourceLayer === 'building' || hasAny(context, ['building']))
  }, {
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['building_outline', 'building-outline', 'building outline'])
  }],
  path: [{
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['path', 'footway', 'pedestrian', 'trail', 'cycleway', 'steps'])
  }],
  roadMinor: [{
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['highway_minor', 'minor', 'street', 'service', 'residential', 'tertiary', 'living_street'])
  }],
  roadMajorCasing: [{
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['major']) && hasAny(context, ['casing', 'case', 'outline'])
  }, {
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['primary', 'secondary', 'trunk']) && hasAny(context, ['casing', 'case', 'outline'])
  }],
  roadMajorFill: [{
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['highway_major', 'major_inner', 'major']) && !hasAny(context, ['casing', 'case', 'outline'])
  }, {
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['primary', 'secondary', 'trunk']) && !hasAny(context, ['casing', 'case', 'outline', 'motorway'])
  }],
  motorwayCasing: [{
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['motorway', 'freeway']) && hasAny(context, ['casing', 'case', 'outline'])
  }],
  motorwayFill: [{
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['motorway', 'freeway']) && !hasAny(context, ['casing', 'case', 'outline'])
  }],
  rail: [{
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['railway', 'transit', 'train', 'tram', 'subway']) && !hasAny(context, ['dash', 'pattern'])
  }],
  railDash: [{
    property: 'line-color',
    matches: context => isLine(context) && hasAny(context, ['railway', 'transit']) && hasAny(context, ['dash', 'pattern'])
  }],
  boundary: [{
    property: 'line-color',
    matches: context => isLine(context) && (context.sourceLayer === 'boundary' || hasAny(context, ['boundary', 'admin', 'disputed']))
  }],
  aerowayLine: [{
    property: 'line-color',
    matches: context => isLine(context) && (context.sourceLayer === 'aeroway' || hasAny(context, ['aeroway', 'runway', 'taxiway']))
  }],
  aerowayArea: [{
    property: 'fill-color',
    matches: context => isFill(context) && (context.sourceLayer === 'aeroway' || hasAny(context, ['aeroway', 'airport', 'runway', 'apron', 'taxiway']))
  }],
  waterLabel: [{
    property: 'text-color',
    matches: context => isSymbol(context) && (context.sourceLayer === 'water_name' || hasAny(context, ['water_name', 'waterway', 'marine', 'ocean', 'lake', 'river']))
  }],
  waterLabelHalo: [{
    property: 'text-halo-color',
    matches: context => isSymbol(context) && (context.sourceLayer === 'water_name' || hasAny(context, ['water_name', 'waterway', 'marine', 'ocean', 'lake', 'river']))
  }],
  roadLabel: [{
    property: 'text-color',
    matches: context => isSymbol(context) && (context.sourceLayer === 'transportation_name' || hasAny(context, ['road', 'street', 'highway', 'airport', 'transportation_name']))
  }],
  roadLabelHalo: [{
    property: 'text-halo-color',
    matches: context => isSymbol(context) && (context.sourceLayer === 'transportation_name' || hasAny(context, ['road', 'street', 'highway', 'airport', 'transportation_name']))
  }],
  placeLabel: [{
    property: 'text-color',
    matches: context => isSymbol(context) && (context.sourceLayer === 'place' || hasAny(context, ['place', 'city', 'town', 'village', 'country', 'state', 'settlement']))
  }],
  placeLabelHalo: [{
    property: 'text-halo-color',
    matches: context => isSymbol(context) && (context.sourceLayer === 'place' || hasAny(context, ['place', 'city', 'town', 'village', 'country', 'state', 'settlement']))
  }]
};
function findExactLayerColor(layers, manifestEntries) {
  for (const entry of manifestEntries) {
    const layer = layers.find(candidate => candidate.id === entry.layerId.toLowerCase());
    if (!layer) {
      continue;
    }
    const color = readPaintColor(layer.layer, entry.property);
    if (color) {
      return color;
    }
  }
  return null;
}
function findSemanticLayerColor(layers, candidates) {
  for (const candidate of candidates) {
    for (const layer of layers) {
      if (!candidate.matches(layer)) {
        continue;
      }
      const color = readPaintColor(layer.layer, candidate.property);
      if (color) {
        return color;
      }
    }
  }
  return null;
}
function readPaintColor(layer, property) {
  if (!isRecord(layer.paint)) {
    return null;
  }
  return normalizeColorValue(layer.paint[property]);
}
function normalizeColorValue(value) {
  if (typeof value === 'string') {
    return parseColorString(value);
  }
  if (Array.isArray(value)) {
    return parseExpressionColor(value);
  }
  if (isRecord(value) && Array.isArray(value.stops)) {
    return parseStopsColor(value.stops);
  }
  return null;
}
function parseExpressionColor(expression) {
  if (expression.length === 0 || typeof expression[0] !== 'string') {
    return findFirstNestedColor(expression);
  }
  if (expression[0] === 'interpolate') {
    const stops = [];
    for (let index = 3; index < expression.length; index += 2) {
      const stop = expression[index];
      const output = expression[index + 1];
      if (typeof stop !== 'number') {
        continue;
      }
      const color = normalizeColorValue(output);
      if (color) {
        stops.push([stop, color]);
      }
    }
    return chooseZoomStopColor(stops);
  }
  if (expression[0] === 'step') {
    const stops = [];
    for (let index = 3; index < expression.length; index += 2) {
      const stop = expression[index];
      const output = expression[index + 1];
      if (typeof stop !== 'number') {
        continue;
      }
      const color = normalizeColorValue(output);
      if (color) {
        stops.push([stop, color]);
      }
    }
    return chooseZoomStopColor(stops) || normalizeColorValue(expression[2]);
  }
  return findFirstNestedColor(expression.slice(1));
}
function parseStopsColor(stops) {
  const normalizedStops = [];
  for (const stopEntry of stops) {
    if (!Array.isArray(stopEntry) || stopEntry.length < 2 || typeof stopEntry[0] !== 'number') {
      continue;
    }
    const color = normalizeColorValue(stopEntry[1]);
    if (color) {
      normalizedStops.push([stopEntry[0], color]);
    }
  }
  return chooseZoomStopColor(normalizedStops);
}
function chooseZoomStopColor(stops) {
  if (stops.length === 0) {
    return null;
  }
  const matchingStops = stops.filter(([stop]) => stop <= 12);
  if (matchingStops.length > 0) {
    return matchingStops[matchingStops.length - 1][1];
  }
  return stops[0][1];
}
function findFirstNestedColor(values) {
  for (const value of values) {
    const color = normalizeColorValue(value);
    if (color) {
      return color;
    }
  }
  return null;
}
function parseColorString(input) {
  const value = input.trim();
  if (!value) {
    return null;
  }
  const hexMatch = value.match(/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (hexMatch) {
    return normalizeHexColor(hexMatch[1]);
  }
  const functionalMatch = value.match(/^([a-z]+)\((.*)\)$/i);
  if (!functionalMatch) {
    return null;
  }
  const fnName = functionalMatch[1].toLowerCase();
  const rawArgs = functionalMatch[2].trim();
  if (fnName === 'rgb' || fnName === 'rgba') {
    return normalizeRgbColor(rawArgs);
  }
  if (fnName === 'hsl' || fnName === 'hsla') {
    return normalizeHslColor(rawArgs);
  }
  return null;
}
function normalizeHexColor(hexValue) {
  const hex = hexValue.toLowerCase();
  if (hex.length === 3) {
    return `#${hex.split('').map(char => `${char}${char}`).join('')}`;
  }
  if (hex.length === 4) {
    const [r, g, b, a] = hex.split('').map(char => parseInt(`${char}${char}`, 16));
    return rgbToHex(compositeOnWhite(r, g, b, a / 255));
  }
  if (hex.length === 6) {
    return `#${hex}`;
  }
  if (hex.length === 8) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const a = parseInt(hex.slice(6, 8), 16) / 255;
    return rgbToHex(compositeOnWhite(r, g, b, a));
  }
  return null;
}
function normalizeRgbColor(rawArgs) {
  const alphaSplit = rawArgs.replace(/\s*\/\s*/g, ',').split(',').map(part => part.trim()).filter(Boolean);
  const spaceSplit = rawArgs.trim().split(/\s+/).filter(Boolean);
  const parts = alphaSplit.length >= 3 ? alphaSplit : spaceSplit;
  if (parts.length < 3) {
    return null;
  }
  const red = parseRgbChannel(parts[0]);
  const green = parseRgbChannel(parts[1]);
  const blue = parseRgbChannel(parts[2]);
  const alpha = parts[3] !== undefined ? parseAlphaChannel(parts[3]) : 1;
  if ([red, green, blue, alpha].some(part => part === null)) {
    return null;
  }
  return rgbToHex(compositeOnWhite(red, green, blue, alpha));
}
function normalizeHslColor(rawArgs) {
  const alphaSplit = rawArgs.replace(/\s*\/\s*/g, ',').split(',').map(part => part.trim()).filter(Boolean);
  const spaceSplit = rawArgs.trim().split(/\s+/).filter(Boolean);
  const parts = alphaSplit.length >= 3 ? alphaSplit : spaceSplit;
  if (parts.length < 3) {
    return null;
  }
  const hue = parseFloat(parts[0]);
  const saturation = parsePercentage(parts[1]);
  const lightness = parsePercentage(parts[2]);
  const alpha = parts[3] !== undefined ? parseAlphaChannel(parts[3]) : 1;
  if ([hue, saturation, lightness].some(part => Number.isNaN(part)) || alpha === null) {
    return null;
  }
  const rgb = hslToRgb(hue, saturation, lightness);
  return rgbToHex(compositeOnWhite(rgb[0], rgb[1], rgb[2], alpha));
}
function parseRgbChannel(value) {
  if (value.endsWith('%')) {
    const percentage = parseFloat(value.slice(0, -1));
    if (Number.isNaN(percentage)) {
      return null;
    }
    return clamp(Math.round(percentage / 100 * 255), 0, 255);
  }
  const channel = parseFloat(value);
  if (Number.isNaN(channel)) {
    return null;
  }
  return clamp(Math.round(channel), 0, 255);
}
function parsePercentage(value) {
  return clamp(parseFloat(value.replace('%', '')), 0, 100) / 100;
}
function parseAlphaChannel(value) {
  if (value.endsWith('%')) {
    const percentage = parseFloat(value.slice(0, -1));
    if (Number.isNaN(percentage)) {
      return null;
    }
    return clamp(percentage / 100, 0, 1);
  }
  const alpha = parseFloat(value);
  if (Number.isNaN(alpha)) {
    return null;
  }
  return clamp(alpha, 0, 1);
}
function hslToRgb(hue, saturation, lightness) {
  const normalizedHue = (hue % 360 + 360) % 360;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const huePrime = normalizedHue / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  let red = 0;
  let green = 0;
  let blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = x;
  } else if (huePrime < 2) {
    red = x;
    green = chroma;
  } else if (huePrime < 3) {
    green = chroma;
    blue = x;
  } else if (huePrime < 4) {
    green = x;
    blue = chroma;
  } else if (huePrime < 5) {
    red = x;
    blue = chroma;
  } else {
    red = chroma;
    blue = x;
  }
  const match = lightness - chroma / 2;
  return [Math.round((red + match) * 255), Math.round((green + match) * 255), Math.round((blue + match) * 255)];
}
function compositeOnWhite(red, green, blue, alpha) {
  return [Math.round(alpha * red + (1 - alpha) * 255), Math.round(alpha * green + (1 - alpha) * 255), Math.round(alpha * blue + (1 - alpha) * 255)];
}
function rgbToHex([red, green, blue]) {
  return `#${[red, green, blue].map(value => clamp(value, 0, 255).toString(16).padStart(2, '0')).join('')}`;
}
function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}
function normalizeImportedColors(rawColors, defaultColors) {
  const entries = Object.keys(defaultColors).map(slot => {
    const normalized = normalizeColorValue(rawColors[slot]);
    return [slot, normalized || defaultColors[slot]];
  });
  return Object.fromEntries(entries);
}
function isInternalThemeImport(value) {
  return isRecord(value) && isRecord(value.colors);
}
function isMapLibreStyleImport(value) {
  return isRecord(value) && value.version === 8 && Array.isArray(value.layers);
}
function resolveMapLibreColors(layers, defaultColors) {
  const contexts = layers.map(createLayerContext);
  const entries = Object.keys(defaultColors).map(slot => {
    const manifestColor = findExactLayerColor(contexts, _themeEngine__WEBPACK_IMPORTED_MODULE_0__.POSITRON_THEME_MANIFEST[slot] || []);
    const semanticColor = manifestColor ? null : findSemanticLayerColor(contexts, SLOT_FALLBACKS[slot] || []);
    const resolvedColor = manifestColor || semanticColor || defaultColors[slot];
    const fromDefault = !manifestColor && !semanticColor;
    return {
      slot: slot,
      color: resolvedColor,
      fromDefault
    };
  });
  const missingCoreSlot = entries.find(entry => entry.fromDefault && CORE_REQUIRED_SLOTS.includes(entry.slot));
  if (missingCoreSlot) {
    throw new Error('This MapLibre style file is not compatible with Minimal Map.');
  }
  return {
    colors: Object.fromEntries(entries.map(entry => [entry.slot, entry.color])),
    warningSlots: entries.filter(entry => entry.fromDefault).map(entry => entry.slot)
  };
}
function parseThemeImport(input, options) {
  const baseLabel = getFileBaseName(options.fileName);
  if (isInternalThemeImport(input)) {
    return {
      label: getImportedLabel(typeof input.label === 'string' && input.label.trim() ? input.label.trim() : baseLabel),
      colors: normalizeImportedColors(input.colors, options.defaultColors),
      format: 'internal',
      warningSlots: []
    };
  }
  if (isMapLibreStyleImport(input)) {
    const styleLabel = typeof input.name === 'string' && input.name.trim() ? input.name.trim() : baseLabel;
    const {
      colors,
      warningSlots
    } = resolveMapLibreColors(input.layers, options.defaultColors);
    return {
      label: getImportedLabel(styleLabel),
      colors,
      format: 'maplibre',
      warningSlots
    };
  }
  throw new Error('Unsupported theme file. Upload a Minimal Map theme JSON or a MapLibre style JSON v8 file.');
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

/***/ },

/***/ "./src/components/EmptyState/style.scss"
/*!**********************************************!*\
  !*** ./src/components/EmptyState/style.scss ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

}]);
//# sourceMappingURL=admin-section-markers.js.map