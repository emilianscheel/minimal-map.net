"use strict";
(globalThis["webpackChunkminimal_map"] = globalThis["webpackChunkminimal_map"] || []).push([["admin-section-styles"],{

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

/***/ "./src/admin/sections/StylesSection.tsx"
/*!**********************************************!*\
  !*** ./src/admin/sections/StylesSection.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StylesSection)
/* harmony export */ });
/* harmony import */ var _ContentHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContentHeader */ "./src/admin/ContentHeader.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./src/admin/styles/index.tsx");
/* harmony import */ var _styles_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/controller */ "./src/admin/styles/controller.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function StylesSection({
  activeSection,
  appConfig
}) {
  const controller = (0,_styles_controller__WEBPACK_IMPORTED_MODULE_2__.useStylesController)(appConfig.stylesConfig, true);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ContentHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: activeSection.title,
      description: activeSection.description,
      actions: controller.headerAction
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "minimal-map-admin__content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        controller: controller,
        runtimeConfig: appConfig.mapConfig ?? {}
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

/***/ "./src/admin/styles/CreateThemeModal.tsx"
/*!***********************************************!*\
  !*** ./src/admin/styles/CreateThemeModal.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateThemeModal: () => (/* binding */ CreateThemeModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CreateThemeModal({
  isOpen,
  onRequestClose,
  onCreate
}) {
  const [name, setName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [isCreating, setIsCreating] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  if (!isOpen) return null;
  const handleCreate = async () => {
    if (!name || isCreating) return;
    setIsCreating(true);
    try {
      await onCreate(name);
      setName('');
    } finally {
      setIsCreating(false);
    }
  };
  const handleKeyDown = event => {
    if (event.key === 'Enter' && name && !isCreating) {
      event.preventDefault();
      void handleCreate();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Create New Theme', 'minimal-map'),
    onRequestClose: onRequestClose,
    overlayClassName: "minimal-map-admin__modal-overlay",
    onKeyDown: handleKeyDown,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "minimal-map-admin__location-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme Name', 'minimal-map'),
        value: name,
        onChange: setName,
        autoFocus: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "minimal-map-admin__location-dialog-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "tertiary",
          onClick: onRequestClose,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "primary",
          onClick: () => void handleCreate(),
          isBusy: isCreating,
          disabled: !name || isCreating,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Create Theme', 'minimal-map')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ "./src/admin/styles/DeleteThemeModal.tsx"
/*!***********************************************!*\
  !*** ./src/admin/styles/DeleteThemeModal.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteThemeModal: () => (/* binding */ DeleteThemeModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function DeleteThemeModal({
  isOpen,
  onRequestClose,
  onDelete,
  theme
}) {
  const [isDeleting, setIsDeleting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  if (!isOpen || !theme) return null;
  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await onDelete(theme.slug);
    } finally {
      setIsDeleting(false);
    }
  };
  const handleKeyDown = event => {
    if (event.key === 'Enter' && !isDeleting) {
      event.preventDefault();
      void handleDelete();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete Theme', 'minimal-map'),
    onRequestClose: onRequestClose,
    overlayClassName: "minimal-map-admin__modal-overlay",
    onKeyDown: handleKeyDown,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "minimal-map-admin__location-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Are you sure you want to delete the theme:', 'minimal-map'), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
          children: theme.label
        }), "?"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "minimal-map-admin__location-dialog-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "tertiary",
          onClick: onRequestClose,
          disabled: isDeleting,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "primary",
          isDestructive: true,
          onClick: () => void handleDelete(),
          isBusy: isDeleting,
          disabled: isDeleting,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete Theme', 'minimal-map')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ "./src/admin/styles/index.tsx"
/*!************************************!*\
  !*** ./src/admin/styles/index.tsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StylesView)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ColorControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorControl */ "./src/admin/styles/ColorControl.tsx");
/* harmony import */ var _CreateThemeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateThemeModal */ "./src/admin/styles/CreateThemeModal.tsx");
/* harmony import */ var _DeleteThemeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteThemeModal */ "./src/admin/styles/DeleteThemeModal.tsx");
/* harmony import */ var _map_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../map/bootstrap */ "./src/map/bootstrap.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/admin/styles/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









function StylesView({
  controller,
  runtimeConfig
}) {
  const {
    isLoading,
    draftColors,
    setDraftColor,
    activeTheme,
    actionNotice,
    isCreateModalOpen,
    isDeleteModalOpen,
    closeCreateModal,
    closeDeleteModal,
    createTheme,
    deleteTheme
  } = controller;
  const mapHostRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const mapInstanceRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const mapConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => ({
    centerLat: 52.517,
    centerLng: 13.388,
    zoom: 12,
    height: 100,
    heightUnit: '%',
    stylePreset: activeTheme?.basePreset || 'positron',
    styleTheme: draftColors || {},
    interactive: true,
    scrollZoom: true,
    showAttribution: true
  }), [activeTheme?.basePreset, draftColors]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!mapHostRef.current || !activeTheme) {
      return undefined;
    }
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = (0,_map_bootstrap__WEBPACK_IMPORTED_MODULE_6__.createMinimalMap)(mapHostRef.current, mapConfig, runtimeConfig);
    } else {
      mapInstanceRef.current.update(mapConfig);
    }
    return () => {
      // We don't destroy on every re-render to keep it live
    };
  }, [activeTheme, mapConfig, runtimeConfig]);

  // Cleanup on unmount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "minimal-map-styles__loading",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, {})
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "minimal-map-styles",
    style: {
      position: 'relative'
    },
    children: [actionNotice ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      status: actionNotice.status,
      onRemove: controller.dismissActionNotice,
      children: actionNotice.message
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.DropZone, {
      onFilesDrop: files => {
        void controller.onImportFiles(files);
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Drop Minimal Map or MapLibre JSON theme files here to upload', 'minimal-map')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "minimal-map-styles__layout",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "minimal-map-styles__controls",
        children: _constants__WEBPACK_IMPORTED_MODULE_7__.COLOR_GROUPS.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
          className: "minimal-map-styles__group-card",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              className: "minimal-map-styles__group-title",
              children: group.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "minimal-map-styles__group-grid",
              children: group.slots.map(slot => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ColorControl__WEBPACK_IMPORTED_MODULE_3__.ColorControl, {
                label: _constants__WEBPACK_IMPORTED_MODULE_7__.SLOT_LABELS[slot],
                color: draftColors?.[slot] || '#000000',
                onChange: color => setDraftColor(slot, color)
              }, slot))
            })]
          })
        }, group.label))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "minimal-map-styles__preview",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "minimal-map-styles__preview-sticky",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Card, {
            className: "minimal-map-styles__preview-card",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CardBody, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                ref: mapHostRef,
                className: "minimal-map-styles__preview-surface"
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_CreateThemeModal__WEBPACK_IMPORTED_MODULE_4__.CreateThemeModal, {
      isOpen: isCreateModalOpen,
      onRequestClose: closeCreateModal,
      onCreate: createTheme
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DeleteThemeModal__WEBPACK_IMPORTED_MODULE_5__.DeleteThemeModal, {
      isOpen: isDeleteModalOpen,
      onRequestClose: closeDeleteModal,
      onDelete: deleteTheme,
      theme: activeTheme
    })]
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

/***/ "./src/components/Kbd/style.scss"
/*!***************************************!*\
  !*** ./src/components/Kbd/style.scss ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

}]);
//# sourceMappingURL=admin-section-styles.js.map