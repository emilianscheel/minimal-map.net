"use strict";
(globalThis["webpackChunkminimal_map"] = globalThis["webpackChunkminimal_map"] || []).push([["admin-section-logos"],{

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

/***/ "./src/admin/logos/DeleteLogoModal.tsx"
/*!*********************************************!*\
  !*** ./src/admin/logos/DeleteLogoModal.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteLogoModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function DeleteLogoModal({
  controller
}) {
  if (!controller.isDeleteModalOpen || !controller.selectedLogo) {
    return null;
  }
  const handleKeyDown = event => {
    if (controller.isRowActionPending || event.key !== 'Enter' || event.shiftKey) {
      return;
    }
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]')) {
      return;
    }
    event.preventDefault();
    void controller.onConfirmDeleteLogo();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete Logo', 'minimal-map'),
    onRequestClose: controller.onCloseDeleteModal,
    shouldCloseOnClickOutside: !controller.isRowActionPending,
    shouldCloseOnEsc: !controller.isRowActionPending,
    onKeyDown: handleKeyDown,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "minimal-map-admin__collection-delete-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "minimal-map-admin__collection-delete-dialog-copy",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete this logo and clear it from every assigned location? This action cannot be undone.', 'minimal-map')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "minimal-map-admin__collection-delete-dialog-title",
        children: controller.selectedLogo.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "minimal-map-admin__collection-delete-dialog-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "tertiary",
          onClick: controller.onCloseDeleteModal,
          disabled: controller.isRowActionPending,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "primary",
          isDestructive: true,
          onClick: () => void controller.onConfirmDeleteLogo(),
          isBusy: controller.isRowActionPending,
          disabled: controller.isRowActionPending,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete Logo', 'minimal-map')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_2__["default"], {
              variant: "red",
              children: "Enter"
            })]
          })
        })]
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/logos/LogosEmptyState.tsx"
/*!*********************************************!*\
  !*** ./src/admin/logos/LogosEmptyState.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogosEmptyState)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/file-up.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/image.js");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/EmptyState */ "./src/components/EmptyState/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




function LogosEmptyState({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No logos found', 'minimal-map'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload SVG or PNG logos to reuse the same brand asset across multiple locations. Drag and drop files here or use the upload button.', 'minimal-map'),
    action: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload', 'minimal-map'),
      onClick: () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.svg,.png,image/svg+xml,image/png';
        input.multiple = true;
        input.onchange = event => {
          const files = event.target.files;
          if (files) {
            void controller.onUploadLogos(files);
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

/***/ "./src/admin/logos/LogosGrid.tsx"
/*!***************************************!*\
  !*** ./src/admin/logos/LogosGrid.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogosGrid)
/* harmony export */ });
/* harmony import */ var _wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dataviews/wp */ "./node_modules/@wordpress/dataviews/build-wp/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _components_LogoPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/LogoPreview */ "./src/components/LogoPreview.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function LogosGrid({
  controller
}) {
  const fields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{
    id: 'title',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filename', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    enableGlobalSearch: true
  }, {
    id: 'logo_preview',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preview', 'minimal-map'),
    type: 'media',
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "minimal-map-admin__logo-preview-surface",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_LogoPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
        logo: item
      })
    })
  }], []);
  const actions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{
    id: 'delete',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 18
    }),
    isPrimary: false,
    isDestructive: true,
    callback: items => {
      if (items.length === 1) {
        controller.onOpenDeleteModal(items[0]);
      }
    },
    isEligible: () => !controller.isRowActionPending
  }], [controller]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "minimal-map-admin__collections-grid-wrap minimal-map-admin__logos-grid-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews, {
      actions: actions,
      data: controller.paginatedLogos,
      fields: fields,
      getItemId: item => `${item.id}`,
      paginationInfo: {
        totalItems: controller.logos.length,
        totalPages: controller.totalPages
      },
      defaultLayouts: {
        grid: {}
      },
      view: controller.view,
      onChangeView: nextView => controller.onChangeView(nextView),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "minimal-map-admin__collections-dataviews-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Search, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Layout, {
        className: "minimal-map-admin__collections-grid-layout"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Footer, {})]
    })
  });
}

/***/ },

/***/ "./src/admin/logos/UploadLogoButton.tsx"
/*!**********************************************!*\
  !*** ./src/admin/logos/UploadLogoButton.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadLogoButton: () => (/* binding */ UploadLogoButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/upload.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function UploadLogoButton({
  onUpload,
  isUploading
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 18
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Logos', 'minimal-map'),
    onClick: () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/svg+xml,image/png,.svg,.png';
      input.multiple = true;
      input.onchange = event => {
        const files = event.target.files;
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

/***/ "./src/admin/logos/controller.tsx"
/*!****************************************!*\
  !*** ./src/admin/logos/controller.tsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLogosController: () => (/* binding */ useLogosController)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_locations_configureApiFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/locations/configureApiFetch */ "./src/lib/locations/configureApiFetch.ts");
/* harmony import */ var _lib_locations_createLocationFormStateFromRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/locations/createLocationFormStateFromRecord */ "./src/lib/locations/createLocationFormStateFromRecord.ts");
/* harmony import */ var _lib_locations_fetchAllLocations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/locations/fetchAllLocations */ "./src/lib/locations/fetchAllLocations.ts");
/* harmony import */ var _lib_locations_updateLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/locations/updateLocation */ "./src/lib/locations/updateLocation.ts");
/* harmony import */ var _lib_logos_fetchAllLogos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/logos/fetchAllLogos */ "./src/lib/logos/fetchAllLogos.ts");
/* harmony import */ var _UploadLogoButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UploadLogoButton */ "./src/admin/logos/UploadLogoButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










async function readLogoFile(file) {
  if (file.type === 'image/png' || file.name.toLowerCase().endsWith('.png')) {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
          return;
        }
        reject(new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invalid PNG file.', 'minimal-map')));
      };
      reader.onerror = () => {
        reject(new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PNG file could not be read.', 'minimal-map')));
      };
      reader.readAsDataURL(file);
    });
  }
  const content = await file.text();
  if (!content.includes('<svg')) {
    throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Invalid SVG file.', 'minimal-map'));
  }
  return content;
}
const DEFAULT_GRID_VIEW = {
  type: 'grid',
  page: 1,
  perPage: 12,
  titleField: 'title',
  mediaField: 'logo_preview',
  fields: [],
  showMedia: true,
  showTitle: true,
  showDescription: false,
  layout: {
    previewSize: 240,
    badgeFields: []
  }
};
function useLogosController(config, locationsConfig, enabled) {
  const [actionNotice, setActionNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isLoading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(enabled);
  const [isRowActionPending, setRowActionPending] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isUploading, setUploading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [loadError, setLoadError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [logos, setLogos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [selectedLogo, setSelectedLogo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [view, setView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(DEFAULT_GRID_VIEW);
  const loadLogos = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!enabled) {
      return;
    }
    setLoading(true);
    setLoadError(null);
    try {
      const records = await (0,_lib_logos_fetchAllLogos__WEBPACK_IMPORTED_MODULE_7__.fetchAllLogos)(config);
      setLogos(records);
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logos could not be loaded.', 'minimal-map'));
    } finally {
      setLoading(false);
    }
  }, [config, enabled]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_locations_configureApiFetch__WEBPACK_IMPORTED_MODULE_3__.configureApiFetch)(config.nonce || locationsConfig.nonce);
    if (!enabled) {
      return;
    }
    void loadLogos();
  }, [config.nonce, enabled, loadLogos, locationsConfig.nonce]);
  const dismissActionNotice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setActionNotice(null);
  }, []);
  const onCloseDeleteModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isRowActionPending) {
      return;
    }
    setDeleteModalOpen(false);
    setSelectedLogo(null);
  }, [isRowActionPending]);
  const onOpenDeleteModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(logo => {
    setSelectedLogo(logo);
    setDeleteModalOpen(true);
  }, []);
  const onConfirmDeleteLogo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!selectedLogo) {
      return;
    }
    setRowActionPending(true);
    setActionNotice(null);
    try {
      const locations = await (0,_lib_locations_fetchAllLocations__WEBPACK_IMPORTED_MODULE_5__.fetchAllLocations)(locationsConfig);
      const assignedLocations = locations.filter(location => location.logo_id === selectedLogo.id);
      await Promise.all(assignedLocations.map(location => (0,_lib_locations_updateLocation__WEBPACK_IMPORTED_MODULE_6__.updateLocation)(locationsConfig, location.id, {
        ...(0,_lib_locations_createLocationFormStateFromRecord__WEBPACK_IMPORTED_MODULE_4__.createLocationFormStateFromRecord)(location),
        logo_id: 0
      })));
      await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: `${config.restPath}/${selectedLogo.id}`,
        method: 'DELETE'
      });
      await loadLogos();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo deleted.', 'minimal-map')
      });
      setDeleteModalOpen(false);
      setSelectedLogo(null);
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo could not be deleted.', 'minimal-map')
      });
    } finally {
      setRowActionPending(false);
    }
  }, [config.restPath, loadLogos, locationsConfig, selectedLogo]);
  const onUploadLogos = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async files => {
    const fileList = Array.from(files).filter(file => file.type === 'image/svg+xml' || file.type === 'image/png' || file.name.toLowerCase().endsWith('.svg') || file.name.toLowerCase().endsWith('.png'));
    if (fileList.length === 0) {
      return;
    }
    setUploading(true);
    setActionNotice(null);
    try {
      await Promise.all(fileList.map(async file => {
        const content = await readLogoFile(file);
        return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
          path: config.restPath,
          method: 'POST',
          data: {
            title: file.name,
            content,
            status: 'publish'
          }
        });
      }));
      await loadLogos();
      setActionNotice({
        status: 'success',
        message: fileList.length === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo uploaded.', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d logo uploaded.', '%d logos uploaded.', fileList.length, 'minimal-map'), fileList.length)
      });
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logos could not be uploaded.', 'minimal-map')
      });
    } finally {
      setUploading(false);
    }
  }, [config.restPath, loadLogos]);
  const {
    paginatedLogos,
    totalPages
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const search = view.search?.toLowerCase() || '';
    const filtered = search ? logos.filter(logo => logo.title.toLowerCase().includes(search)) : logos;
    const page = view.page ?? 1;
    const perPage = view.perPage ?? 12;
    const pages = Math.max(1, Math.ceil(filtered.length / perPage));
    const startIndex = (page - 1) * perPage;
    return {
      paginatedLogos: filtered.slice(startIndex, startIndex + perPage),
      totalPages: pages
    };
  }, [logos, view]);
  return {
    actionNotice,
    dismissActionNotice,
    headerAction: enabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "minimal-map-admin__header-actions-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UploadLogoButton__WEBPACK_IMPORTED_MODULE_8__.UploadLogoButton, {
        onUpload: files => void onUploadLogos(files),
        isUploading: isUploading
      })
    }) : null,
    isDeleteModalOpen,
    isLoading,
    isRowActionPending,
    isUploading,
    loadError,
    logos,
    onChangeView: nextView => setView(nextView),
    onCloseDeleteModal,
    onConfirmDeleteLogo,
    onOpenDeleteModal,
    onUploadLogos,
    paginatedLogos,
    selectedLogo,
    totalPages,
    view
  };
}

/***/ },

/***/ "./src/admin/logos/index.tsx"
/*!***********************************!*\
  !*** ./src/admin/logos/index.tsx ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogosView),
/* harmony export */   useLogosController: () => (/* reexport safe */ _controller__WEBPACK_IMPORTED_MODULE_6__.useLogosController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeleteLogoModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteLogoModal */ "./src/admin/logos/DeleteLogoModal.tsx");
/* harmony import */ var _LogosEmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogosEmptyState */ "./src/admin/logos/LogosEmptyState.tsx");
/* harmony import */ var _LogosGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogosGrid */ "./src/admin/logos/LogosGrid.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controller */ "./src/admin/logos/controller.tsx");







function LogosView({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "minimal-map-admin__markers-view minimal-map-admin__logos-view",
    children: [controller.actionNotice ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__locations-notice",
      status: controller.actionNotice.status,
      onRemove: controller.dismissActionNotice,
      children: controller.actionNotice.message
    }) : null, controller.loadError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__locations-notice",
      status: "error",
      isDismissible: false,
      children: controller.loadError
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "minimal-map-admin__markers-content minimal-map-admin__logos-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.DropZone, {
        onFilesDrop: files => {
          void controller.onUploadLogos(files);
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Drop SVG or PNG files here to upload', 'minimal-map')
      }), controller.isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "minimal-map-admin__locations-state minimal-map-admin__locations-state--loading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, {})
      }) : controller.logos.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_LogosEmptyState__WEBPACK_IMPORTED_MODULE_3__["default"], {
        controller: controller
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_LogosGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
        controller: controller
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DeleteLogoModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      controller: controller
    })]
  });
}

/***/ },

/***/ "./src/admin/sections/LogosSection.tsx"
/*!*********************************************!*\
  !*** ./src/admin/sections/LogosSection.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogosSection)
/* harmony export */ });
/* harmony import */ var _ContentHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContentHeader */ "./src/admin/ContentHeader.tsx");
/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logos */ "./src/admin/logos/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function LogosSection({
  activeSection,
  appConfig
}) {
  const controller = (0,_logos__WEBPACK_IMPORTED_MODULE_1__.useLogosController)(appConfig.logosConfig, appConfig.locationsConfig, true);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ContentHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: activeSection.title,
      description: activeSection.description,
      actions: controller.headerAction
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "minimal-map-admin__content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_logos__WEBPACK_IMPORTED_MODULE_1__["default"], {
        controller: controller
      })
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

/***/ "./src/components/LogoPreview.tsx"
/*!****************************************!*\
  !*** ./src/components/LogoPreview.tsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogoPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function LogoPreview({
  logo,
  className = ''
}) {
  const isSvgMarkup = logo.content.trim().startsWith('<svg');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: ['minimal-map-admin__logo-preview', className].filter(Boolean).join(' '),
    "aria-label": logo.title,
    role: "img",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "minimal-map-admin__logo-preview-svg",
      children: isSvgMarkup ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: logo.content
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: logo.content,
        alt: logo.title
      })
    })
  });
}

/***/ },

/***/ "./src/lib/locations/buildLocationMeta.ts"
/*!************************************************!*\
  !*** ./src/lib/locations/buildLocationMeta.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocationMeta: () => (/* binding */ buildLocationMeta)
/* harmony export */ });
/* harmony import */ var _normalizeWebsiteValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeWebsiteValue */ "./src/lib/locations/normalizeWebsiteValue.ts");

function buildLocationMeta(form) {
  return {
    telephone: form.telephone.trim(),
    email: form.email.trim(),
    website: (0,_normalizeWebsiteValue__WEBPACK_IMPORTED_MODULE_0__.normalizeWebsiteValue)(form.website),
    street: form.street.trim(),
    house_number: form.house_number.trim(),
    postal_code: form.postal_code.trim(),
    city: form.city.trim(),
    state: form.state.trim(),
    country: form.country.trim(),
    latitude: form.latitude.trim(),
    longitude: form.longitude.trim(),
    logo_id: Number.isFinite(form.logo_id) ? Math.max(0, form.logo_id) : 0,
    marker_id: Number.isFinite(form.marker_id) ? Math.max(0, form.marker_id) : 0
  };
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

/***/ "./src/lib/locations/createLocationFormStateFromRecord.ts"
/*!****************************************************************!*\
  !*** ./src/lib/locations/createLocationFormStateFromRecord.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLocationFormStateFromRecord: () => (/* binding */ createLocationFormStateFromRecord)
/* harmony export */ });
function createLocationFormStateFromRecord(location) {
  return {
    title: location.title,
    telephone: location.telephone,
    email: location.email,
    website: location.website,
    street: location.street,
    house_number: location.house_number,
    postal_code: location.postal_code,
    city: location.city,
    state: location.state,
    country: location.country,
    latitude: location.latitude,
    longitude: location.longitude,
    logo_id: location.logo_id,
    marker_id: location.marker_id,
    tag_ids: location.tag_ids
  };
}

/***/ },

/***/ "./src/lib/locations/fetchAllLocations.ts"
/*!************************************************!*\
  !*** ./src/lib/locations/fetchAllLocations.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllLocations: () => (/* binding */ fetchAllLocations)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalizeLocationRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeLocationRecord */ "./src/lib/locations/normalizeLocationRecord.ts");


async function fetchAllLocations(config) {
  const perPage = 100;
  let page = 1;
  let totalPages = 1;
  const locations = [];
  const runtimeLocations = window.MinimalMapAdminConfig?.mapConfig?.locations ?? [];
  const markerContentByLocationId = new Map(runtimeLocations.filter(location => typeof location.id === 'number').map(location => [location.id, location.markerContent ?? undefined]));
  while (page <= totalPages) {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'GET',
      parse: false,
      path: `${config.restPath}?context=edit&page=${page}&per_page=${perPage}&_fields=id,title,meta,minimal_map_tag`
    });
    const records = await response.json();
    locations.push(...records.map(record => {
      const location = (0,_normalizeLocationRecord__WEBPACK_IMPORTED_MODULE_1__.normalizeLocationRecord)(record);
      const markerContent = markerContentByLocationId.get(location.id);
      return markerContent ? {
        ...location,
        markerContent
      } : location;
    }));
    totalPages = Number(response.headers.get('X-WP-TotalPages') || '1');
    page += 1;
  }
  return locations;
}

/***/ },

/***/ "./src/lib/locations/normalizeLocationRecord.ts"
/*!******************************************************!*\
  !*** ./src/lib/locations/normalizeLocationRecord.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeLocationRecord: () => (/* binding */ normalizeLocationRecord)
/* harmony export */ });
function normalizeLocationRecord(record) {
  const meta = record.meta ?? {};
  const result = {
    id: record.id,
    title: record.title?.raw || record.title?.rendered || '',
    telephone: meta.telephone ?? '',
    email: meta.email ?? '',
    website: meta.website ?? '',
    street: meta.street ?? '',
    house_number: meta.house_number ?? '',
    postal_code: meta.postal_code ?? '',
    city: meta.city ?? '',
    state: meta.state ?? '',
    country: meta.country ?? '',
    latitude: meta.latitude ?? '',
    longitude: meta.longitude ?? '',
    logo_id: Number(meta.logo_id ?? 0) || 0,
    marker_id: Number(meta.marker_id ?? 0) || 0,
    tag_ids: record.minimal_map_tag ?? []
  };
  return result;
}

/***/ },

/***/ "./src/lib/locations/normalizeWebsiteValue.ts"
/*!****************************************************!*\
  !*** ./src/lib/locations/normalizeWebsiteValue.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeWebsiteValue: () => (/* binding */ normalizeWebsiteValue)
/* harmony export */ });
function normalizeWebsiteValue(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }
  const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    return new URL(normalized).toString();
  } catch {
    return trimmed;
  }
}

/***/ },

/***/ "./src/lib/locations/updateLocation.ts"
/*!*********************************************!*\
  !*** ./src/lib/locations/updateLocation.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateLocation: () => (/* binding */ updateLocation)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buildLocationMeta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildLocationMeta */ "./src/lib/locations/buildLocationMeta.ts");


async function updateLocation(config, locationId, form) {
  const data = {
    title: form.title.trim(),
    meta: (0,_buildLocationMeta__WEBPACK_IMPORTED_MODULE_1__.buildLocationMeta)(form),
    minimal_map_tag: form.tag_ids
  };
  console.log('Updating location via REST API:', data);
  await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${config.restPath}/${locationId}`,
    method: 'POST',
    data
  });
}

/***/ },

/***/ "./src/lib/logos/fetchAllLogos.ts"
/*!****************************************!*\
  !*** ./src/lib/logos/fetchAllLogos.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllLogos: () => (/* binding */ fetchAllLogos)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalizeLogoRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeLogoRecord */ "./src/lib/logos/normalizeLogoRecord.ts");


async function fetchAllLogos(config) {
  const logos = [];
  let page = 1;
  let totalPages = 1;
  while (page <= totalPages) {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'GET',
      parse: false,
      path: `${config.restPath}?context=edit&page=${page}&per_page=100&_fields=id,title,content`
    });
    const records = await response.json();
    logos.push(...records.map(_normalizeLogoRecord__WEBPACK_IMPORTED_MODULE_1__.normalizeLogoRecord));
    totalPages = Number(response.headers.get('X-WP-TotalPages') || '1');
    page += 1;
  }
  return logos;
}

/***/ },

/***/ "./src/lib/logos/normalizeLogoRecord.ts"
/*!**********************************************!*\
  !*** ./src/lib/logos/normalizeLogoRecord.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeLogoRecord: () => (/* binding */ normalizeLogoRecord)
/* harmony export */ });
function normalizeLogoRecord(record) {
  return {
    id: record.id,
    title: record.title?.raw || record.title?.rendered || '',
    content: record.content?.raw || record.content?.rendered || ''
  };
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
//# sourceMappingURL=admin-section-logos.js.map