"use strict";
(globalThis["webpackChunkminimal_map"] = globalThis["webpackChunkminimal_map"] || []).push([["admin-section-locations"],{

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

/***/ "./src/admin/locations/AssignLogoModal.tsx"
/*!*************************************************!*\
  !*** ./src/admin/locations/AssignLogoModal.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssignLogoModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LogoPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LogoPreview */ "./src/components/LogoPreview.tsx");
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function AssignLogoModal({
  controller
}) {
  if (!controller.isAssignLogoModalOpen || !controller.selectedLogoLocation) {
    return null;
  }
  const assignedLogo = controller.getLogoForLocation(controller.selectedLogoLocation.id);
  const options = controller.logos.map(logo => ({
    label: logo.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Untitled logo', 'minimal-map'),
    value: `${logo.id}`
  }));
  const handleKeyDown = event => {
    const target = event.target;
    const isHTMLElement = target instanceof HTMLElement;
    const isComboboxExpanded = isHTMLElement && target.getAttribute('role') === 'combobox' ? target.getAttribute('aria-expanded') === 'true' : false;
    if (controller.isAssignmentSaving || !controller.assignmentLogoId || event.key !== 'Enter' || event.shiftKey || isComboboxExpanded || isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]')) {
      return;
    }
    event.preventDefault();
    void controller.onAssignLogoToLocation();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__collection-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Assign Logo', 'minimal-map'),
    onRequestClose: controller.onCloseAssignLogoModal,
    shouldCloseOnClickOutside: !controller.isAssignmentSaving,
    shouldCloseOnEsc: !controller.isAssignmentSaving,
    onKeyDown: handleKeyDown,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "minimal-map-admin__assign-to-collection-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "minimal-map-admin__assign-to-collection-copy",
        children: assignedLogo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "minimal-map-admin__assigned-logo-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "minimal-map-admin__assigned-logo-surface",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_LogoPreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
              logo: assignedLogo,
              className: "minimal-map-admin__assigned-logo-preview"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
            className: "minimal-map-admin__logo-filename",
            children: assignedLogo.title
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "minimal-map-admin__assign-to-collection-empty",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No logo assigned yet.', 'minimal-map')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ComboboxControl, {
        __next40pxDefaultSize: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Logo', 'minimal-map'),
        value: controller.assignmentLogoId,
        options: options,
        onChange: value => controller.onSelectAssignmentLogo(value ?? ''),
        help: options.length === 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload a logo first to assign one to this location.', 'minimal-map') : undefined
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "minimal-map-admin__assign-to-collection-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: controller.onCloseAssignLogoModal,
          disabled: controller.isAssignmentSaving,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          onClick: () => void controller.onAssignLogoToLocation(),
          isBusy: controller.isAssignmentSaving,
          disabled: controller.isAssignmentSaving || !controller.assignmentLogoId,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Logo', 'minimal-map')
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

/***/ "./src/admin/locations/AssignMarkerModal.tsx"
/*!***************************************************!*\
  !*** ./src/admin/locations/AssignMarkerModal.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssignMarkerModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MarkerMiniMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MarkerMiniMap */ "./src/components/MarkerMiniMap.tsx");
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function AssignMarkerModal({
  controller
}) {
  if (!controller.isAssignMarkerModalOpen || !controller.selectedMarkerLocation) {
    return null;
  }
  const assignedMarker = controller.getMarkerForLocation(controller.selectedMarkerLocation.id);
  const options = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default marker', 'minimal-map'),
    value: ''
  }, ...controller.markers.map(marker => ({
    label: marker.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Untitled marker', 'minimal-map'),
    value: `${marker.id}`
  }))];
  const handleKeyDown = event => {
    const target = event.target;
    const isHTMLElement = target instanceof HTMLElement;
    const isComboboxExpanded = isHTMLElement && target.getAttribute('role') === 'combobox' ? target.getAttribute('aria-expanded') === 'true' : false;
    if (controller.isAssignmentSaving || event.key !== 'Enter' || event.shiftKey || isComboboxExpanded || isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]')) {
      return;
    }
    event.preventDefault();
    void controller.onAssignMarkerToLocation();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__collection-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Assign Marker', 'minimal-map'),
    onRequestClose: controller.onCloseAssignMarkerModal,
    shouldCloseOnClickOutside: !controller.isAssignmentSaving,
    shouldCloseOnEsc: !controller.isAssignmentSaving,
    onKeyDown: handleKeyDown,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "minimal-map-admin__assign-to-collection-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "minimal-map-admin__assign-to-collection-copy",
        children: assignedMarker ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "minimal-map-admin__assigned-logo-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_MarkerMiniMap__WEBPACK_IMPORTED_MODULE_2__["default"], {
            marker: assignedMarker,
            theme: controller.activeTheme
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
            className: "minimal-map-admin__logo-filename",
            children: assignedMarker.title
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "minimal-map-admin__assign-to-collection-empty",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No custom marker assigned yet.', 'minimal-map')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ComboboxControl, {
        __next40pxDefaultSize: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Marker', 'minimal-map'),
        value: controller.assignmentMarkerId,
        options: options,
        onChange: value => controller.onSelectAssignmentMarker(value ?? ''),
        help: controller.markers.length === 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload a marker first to assign one to this location.', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose a custom SVG marker or switch back to the default marker.', 'minimal-map')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "minimal-map-admin__assign-to-collection-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: controller.onCloseAssignMarkerModal,
          disabled: controller.isAssignmentSaving,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          onClick: () => void controller.onAssignMarkerToLocation(),
          isBusy: controller.isAssignmentSaving,
          disabled: controller.isAssignmentSaving,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Marker', 'minimal-map')
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

/***/ "./src/admin/locations/AssignTagsModal.tsx"
/*!*************************************************!*\
  !*** ./src/admin/locations/AssignTagsModal.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssignTagsModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var _components_TagBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TagBadge */ "./src/components/TagBadge/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function AssignTagsModal({
  controller
}) {
  if (!controller.isAssignTagsModalOpen || !controller.selectedTagsLocation) {
    return null;
  }
  const assignedTags = controller.getTagsForLocation(controller.selectedTagsLocation.id);
  const tagSuggestions = controller.tags.map(tag => tag.name);
  const currentTagNames = controller.assignmentTagIds.map(id => controller.tags.find(t => t.id === id)?.name).filter(name => !!name);
  const handleKeyDown = event => {
    const target = event.target;
    const isHTMLElement = target instanceof HTMLElement;
    if (controller.isAssignmentSaving || event.key !== 'Enter' || event.shiftKey || isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]')) {
      return;
    }

    // Don't submit if we're just adding a token
    if (isHTMLElement && target.classList.contains('components-form-token-field__input')) {
      return;
    }
    event.preventDefault();
    void controller.onAssignTagsToLocation();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__collection-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Assign Tags', 'minimal-map'),
    onRequestClose: controller.onCloseAssignTagsModal,
    shouldCloseOnClickOutside: !controller.isAssignmentSaving,
    shouldCloseOnEsc: !controller.isAssignmentSaving,
    onKeyDown: handleKeyDown,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "minimal-map-admin__assign-to-collection-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "minimal-map-admin__assign-to-collection-copy",
        children: assignedTags.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "minimal-map-admin__location-collections",
          children: assignedTags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_TagBadge__WEBPACK_IMPORTED_MODULE_3__["default"], {
            tag: tag
          }, tag.id))
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "minimal-map-admin__assign-to-collection-empty",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No tags assigned yet.', 'minimal-map')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FormTokenField, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tags', 'minimal-map'),
        value: currentTagNames,
        suggestions: tagSuggestions,
        onChange: tokenNames => {
          const nextTagIds = tokenNames.map(name => controller.tags.find(t => t.name === name)?.id).filter(id => id !== undefined);
          controller.onSelectAssignmentTags(nextTagIds);
        },
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "minimal-map-admin__assign-to-collection-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: controller.onCloseAssignTagsModal,
          disabled: controller.isAssignmentSaving,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          onClick: () => void controller.onAssignTagsToLocation(),
          isBusy: controller.isAssignmentSaving,
          disabled: controller.isAssignmentSaving,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Tags', 'minimal-map')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./src/admin/locations/AssignToCollectionModal.tsx"
/*!*********************************************************!*\
  !*** ./src/admin/locations/AssignToCollectionModal.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssignToCollectionModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function CollectionBadge({
  label
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    className: "components-badge is-default",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "components-badge__flex-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "components-badge__content",
        children: label
      })
    })
  });
}
function AssignToCollectionModal({
  controller
}) {
  if (!controller.isAssignToCollectionModalOpen || !controller.selectedAssignmentLocation) {
    return null;
  }
  const assignedCollections = controller.getCollectionsForLocation(controller.selectedAssignmentLocation.id);
  const options = controller.collections.map(collection => ({
    label: collection.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Untitled collection", "minimal-map"),
    value: `${collection.id}`
  }));
  const handleKeyDown = event => {
    const target = event.target;
    const isHTMLElement = target instanceof HTMLElement;
    const isComboboxExpanded = isHTMLElement && target.getAttribute("role") === "combobox" ? target.getAttribute("aria-expanded") === "true" : false;
    if (controller.isAssignmentSaving || !controller.assignmentCollectionId || event.key !== "Enter" || event.shiftKey || isComboboxExpanded || isHTMLElement && target.closest("[data-minimal-map-dialog-ignore-enter='true']")) {
      return;
    }
    event.preventDefault();
    void controller.onAssignLocationToCollection();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__assign-to-collection-modal",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Assign to collection", "minimal-map"),
    focusOnMount: "firstInputElement",
    onKeyDown: handleKeyDown,
    onRequestClose: controller.onCloseAssignToCollectionModal,
    shouldCloseOnClickOutside: !controller.isAssignmentSaving,
    shouldCloseOnEsc: !controller.isAssignmentSaving,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Assign to Collection", "minimal-map"),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "minimal-map-admin__assign-to-collection-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "minimal-map-admin__assign-to-collection-copy",
        children: assignedCollections.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "minimal-map-admin__location-collections",
          children: assignedCollections.map(collection => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CollectionBadge, {
            label: collection.title
          }, collection.id))
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "minimal-map-admin__assign-to-collection-empty",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not assigned to any collection yet.", "minimal-map")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ComboboxControl, {
        __next40pxDefaultSize: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection", "minimal-map"),
        value: controller.assignmentCollectionId,
        options: options,
        onChange: value => controller.onSelectAssignmentCollection(value ?? ""),
        help: options.length === 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Create a collection first to assign this location.", "minimal-map") : undefined
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "minimal-map-admin__assign-to-collection-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: controller.onCloseAssignToCollectionModal,
          disabled: controller.isAssignmentSaving,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cancel", "minimal-map")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          onClick: () => void controller.onAssignLocationToCollection(),
          isBusy: controller.isAssignmentSaving,
          disabled: controller.isAssignmentSaving || !controller.assignmentCollectionId,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Assign", "minimal-map")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./src/admin/locations/CustomCsvImportModal.tsx"
/*!******************************************************!*\
  !*** ./src/admin/locations/CustomCsvImportModal.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomCsvImportModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var _lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/locations/importLocations */ "./src/lib/locations/importLocations.ts");
/* harmony import */ var _lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/locations/shouldHandleDialogEnter */ "./src/lib/locations/shouldHandleDialogEnter.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function CustomCsvImportModal({
  controller
}) {
  if (!controller.isCustomCsvImportModalOpen) {
    return null;
  }
  const modalTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import custom CSV', 'minimal-map');
  const columnOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'minimal-map'),
    value: ''
  }, ...controller.csvImportHeaders.map((header, index) => ({
    label: (() => {
      const baseLabel = header || `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column', 'minimal-map')} ${index + 1}`;
      const exampleValue = controller.csvImportRows.map(row => row[index]?.trim() ?? '').find(value => value.length > 0);
      return exampleValue ? `${baseLabel} (${exampleValue})` : baseLabel;
    })(),
    value: `${index}`
  }))];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__custom-csv-import-modal",
    contentLabel: modalTitle,
    focusOnMount: "firstInputElement",
    onRequestClose: controller.onCloseCustomCsvImportModal,
    shouldCloseOnClickOutside: !controller.isImporting,
    shouldCloseOnEsc: !controller.isImporting,
    title: modalTitle,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "minimal-map-admin__location-dialog minimal-map-admin__custom-csv-import-dialog",
      onKeyDown: event => {
        if (controller.csvImportStep !== 'mapping' || controller.isImporting) {
          return;
        }
        const target = event.target;
        const isHTMLElement = target instanceof HTMLElement;
        if (isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]') || !(0,_lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_4__.shouldHandleDialogEnter)(event)) {
          return;
        }
        event.preventDefault();
        void controller.onStartCustomCsvImport();
      },
      children: controller.csvImportStep === 'mapping' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "minimal-map-admin__custom-csv-import-grid",
          children: _lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_CSV_MAPPING_FIELDS.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "minimal-map-admin__custom-csv-import-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true,
              hideLabelFromVision: true,
              label: field.label,
              value: field.key,
              options: [{
                label: field.label,
                value: field.key
              }],
              disabled: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
              __next40pxDefaultSize: true,
              __nextHasNoMarginBottom: true,
              hideLabelFromVision: true,
              label: field.label,
              value: controller.csvImportMapping[field.key] === null ? '' : `${controller.csvImportMapping[field.key]}`,
              options: columnOptions,
              onChange: value => controller.onChangeCsvImportMapping(field.key, value)
            })]
          }, field.key))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "minimal-map-admin__location-dialog-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "minimal-map-admin__location-dialog-footer-start"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "minimal-map-admin__location-dialog-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
              __next40pxDefaultSize: true,
              variant: "tertiary",
              onClick: controller.onCloseCustomCsvImportModal,
              disabled: controller.isImporting,
              "data-minimal-map-dialog-ignore-enter": "true",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
              __next40pxDefaultSize: true,
              variant: "primary",
              onClick: () => {
                void controller.onStartCustomCsvImport();
              },
              isBusy: controller.isImporting,
              disabled: controller.isImporting,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "minimal-map-admin__location-dialog-button-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next', 'minimal-map')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  variant: "blue",
                  children: "Enter"
                })]
              })
            })]
          })]
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "minimal-map-admin__custom-csv-import-progress",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("progress", {
          className: "minimal-map-admin__custom-csv-import-progress-bar",
          max: Math.max(controller.csvImportProgressTotal, 1),
          value: controller.csvImportProgressTotal === 0 ? 1 : controller.csvImportProgressCompleted
        })
      })
    })
  });
}

/***/ },

/***/ "./src/admin/locations/DeleteLocationActionModal.tsx"
/*!***********************************************************!*\
  !*** ./src/admin/locations/DeleteLocationActionModal.tsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteLocationActionModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var _lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/locations/shouldHandleDialogEnter */ "./src/lib/locations/shouldHandleDialogEnter.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function DeleteLocationActionModal({
  items,
  onDelete,
  onDeleteBulk,
  closeModal,
  onActionPerformed
}) {
  const [isDeleting, setDeleting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    containerRef.current?.focus();
  }, []);
  const handleDelete = async () => {
    setDeleting(true);
    setError(null);
    try {
      if (items.length > 1 && onDeleteBulk) {
        await onDeleteBulk(items);
      } else if (items[0]) {
        await onDelete(items[0]);
      }
      onActionPerformed?.(items);
      closeModal?.();
    } catch (actionError) {
      setError(actionError instanceof Error ? actionError.message : items.length > 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Locations could not be deleted.", "minimal-map") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Location could not be deleted.", "minimal-map"));
    } finally {
      setDeleting(false);
    }
  };
  const isBulk = items.length > 1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ref: containerRef,
    className: "minimal-map-admin__location-delete-dialog",
    tabIndex: 0,
    style: {
      outline: "none"
    },
    onKeyDown: event => {
      const target = event.target;
      const isHTMLElement = target instanceof HTMLElement;
      if (isDeleting || isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]') || !(0,_lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_4__.shouldHandleDialogEnter)(event)) {
        return;
      }
      event.preventDefault();
      void handleDelete();
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "minimal-map-admin__collection-delete-dialog-copy",
      children: isBulk ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("Are you sure you want to delete %d location? This action cannot be undone.", "Are you sure you want to delete %d locations? This action cannot be undone.", items.length, "minimal-map"), items.length) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete this location and remove its saved collection assignments?", "minimal-map")
    }), !isBulk && items[0] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "minimal-map-admin__collection-delete-dialog-title",
      children: items[0].title
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "minimal-map-admin__location-delete-dialog-error",
      children: error
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "minimal-map-admin__location-delete-dialog-actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "tertiary",
        onClick: closeModal,
        disabled: isDeleting,
        "data-minimal-map-dialog-ignore-enter": "true",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cancel", "minimal-map")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        isDestructive: true,
        onClick: () => void handleDelete(),
        isBusy: isDeleting,
        disabled: isDeleting,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "minimal-map-admin__location-dialog-button-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete", "minimal-map")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_3__["default"], {
            variant: "red",
            children: "Enter"
          })]
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/locations/DeleteLogoConfirmationModal.tsx"
/*!*************************************************************!*\
  !*** ./src/admin/locations/DeleteLogoConfirmationModal.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteLogoConfirmationModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LogoPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LogoPreview */ "./src/components/LogoPreview.tsx");
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function DeleteLogoConfirmationModal({
  controller
}) {
  if (!controller.isDeleteLogoConfirmationModalOpen || !controller.selectedLogoRemovalLocation) {
    return null;
  }
  const logo = controller.getLogoForLocation(controller.selectedLogoRemovalLocation.id);
  if (!logo) {
    return null;
  }
  const handleKeyDown = event => {
    const target = event.target;
    if (controller.isAssignmentSaving || event.key !== 'Enter' || event.shiftKey || target instanceof HTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]')) {
      return;
    }
    event.preventDefault();
    void controller.onClearLogoFromLocation();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Logo', 'minimal-map'),
    onRequestClose: controller.onCloseDeleteLogoConfirmationModal,
    shouldCloseOnClickOutside: !controller.isAssignmentSaving,
    shouldCloseOnEsc: !controller.isAssignmentSaving,
    onKeyDown: handleKeyDown,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "minimal-map-admin__collection-delete-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "minimal-map-admin__collection-delete-dialog-copy",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove this logo from the selected location?', 'minimal-map')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "minimal-map-admin__assigned-logo-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "minimal-map-admin__assigned-logo-surface",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_LogoPreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
            logo: logo,
            className: "minimal-map-admin__assigned-logo-preview"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
          className: "minimal-map-admin__logo-filename",
          children: logo.title
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "minimal-map-admin__collection-delete-dialog-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "tertiary",
          onClick: controller.onCloseDeleteLogoConfirmationModal,
          disabled: controller.isAssignmentSaving,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "primary",
          isDestructive: true,
          onClick: () => void controller.onClearLogoFromLocation(),
          isBusy: controller.isAssignmentSaving,
          disabled: controller.isAssignmentSaving,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Logo', 'minimal-map')
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

/***/ "./src/admin/locations/ExportLocationsDropdown.tsx"
/*!*********************************************************!*\
  !*** ./src/admin/locations/ExportLocationsDropdown.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportLocationsDropdown: () => (/* binding */ ExportLocationsDropdown)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/download.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);




function ExportLocationsDropdown({
  onExport,
  onExportExample
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
    popoverProps: {
      placement: 'bottom-end'
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      onClick: onToggle,
      "aria-expanded": isOpen,
      variant: "tertiary",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 18
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Export locations', 'minimal-map'),
      __next40pxDefaultSize: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16
      })
    }),
    renderContent: ({
      onClose
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuGroup, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Export Options', 'minimal-map'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        onClick: () => {
          onExport();
          onClose();
        },
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          size: 16
        }),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Download as CSV', 'minimal-map')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
        onClick: () => {
          onExportExample();
          onClose();
        },
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          size: 16
        }),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Download example CSV', 'minimal-map')
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/locations/ImportLocationsButton.tsx"
/*!*******************************************************!*\
  !*** ./src/admin/locations/ImportLocationsButton.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportLocationsButton: () => (/* binding */ ImportLocationsButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/upload.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ImportLocationsButton({
  onImport,
  isImporting
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 18
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Import locations from CSV', 'minimal-map'),
    onClick: () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.csv';
      input.onchange = e => {
        const file = e.target.files?.[0];
        if (file) {
          onImport(file);
        }
      };
      input.click();
    },
    variant: "tertiary",
    isBusy: isImporting,
    disabled: isImporting,
    __next40pxDefaultSize: true
  });
}

/***/ },

/***/ "./src/admin/locations/LocationDialog.tsx"
/*!************************************************!*\
  !*** ./src/admin/locations/LocationDialog.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationDialog)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-left.js");
/* harmony import */ var _lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/locations/shouldHandleDialogEnter */ "./src/lib/locations/shouldHandleDialogEnter.ts");
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var _MapStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapStep */ "./src/admin/locations/MapStep.tsx");
/* harmony import */ var _LocationDialogFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LocationDialogFields */ "./src/admin/locations/LocationDialogFields.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function LocationDialog({
  controller
}) {
  if (!controller.isDialogOpen) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__location-modal",
    contentLabel: controller.modalTitle,
    focusOnMount: "firstInputElement",
    onRequestClose: controller.onCancel,
    shouldCloseOnClickOutside: !controller.isSubmitting,
    shouldCloseOnEsc: !controller.isSubmitting,
    title: controller.modalTitle,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "minimal-map-admin__location-dialog",
      onKeyDown: event => {
        const target = event.target;
        const isHTMLElement = target instanceof HTMLElement;
        if (controller.step === 'map' && !controller.selectedCoordinates || controller.isSubmitting || controller.isGeocoding) {
          return;
        }
        if (controller.step === 'map') {
          if (event.key !== 'Enter' || event.shiftKey || isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]')) {
            return;
          }
          event.preventDefault();
          void controller.onConfirm();
          return;
        }
        if (!(0,_lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_3__.shouldHandleDialogEnter)(event)) {
          return;
        }
        event.preventDefault();
        void controller.onConfirm();
      },
      children: [controller.submitError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "error",
        isDismissible: false,
        children: controller.submitError
      }), controller.step === 'map' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_MapStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        controller: controller
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LocationDialogFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fieldErrors: controller.fieldErrors,
        form: controller.form,
        onChange: controller.onChangeFormValue,
        step: controller.step,
        tags: controller.tags
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "minimal-map-admin__location-dialog-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "minimal-map-admin__location-dialog-footer-start",
          children: controller.step !== 'details' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: controller.onBack,
            disabled: controller.isSubmitting,
            "data-minimal-map-dialog-ignore-enter": "true",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              size: 18,
              strokeWidth: 2
            }),
            iconPosition: "left",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Back', 'minimal-map')
          }) : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "minimal-map-admin__location-dialog-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: controller.onCancel,
            disabled: controller.isSubmitting || controller.isGeocoding,
            "data-minimal-map-dialog-ignore-enter": "true",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "primary",
            onClick: () => {
              void controller.onConfirm();
            },
            disabled: controller.isSubmitting || controller.isGeocoding || controller.step === 'map' && !controller.selectedCoordinates,
            isBusy: controller.isSubmitting || controller.isGeocoding,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
              className: "minimal-map-admin__location-dialog-button-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: controller.step === 'map' ? controller.submitLabel : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next', 'minimal-map')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_4__["default"], {
                variant: "blue",
                children: "Enter"
              })]
            })
          })]
        })]
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/locations/LocationDialogFields.tsx"
/*!******************************************************!*\
  !*** ./src/admin/locations/LocationDialogFields.tsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationDialogFields)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function OptionalLabel({
  label
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
    className: "minimal-map-admin__field-label-with-hint",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "minimal-map-admin__field-optional-hint",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optional', 'minimal-map')
    })]
  });
}
function LocationDialogFields({
  fieldErrors,
  form,
  onChange,
  step,
  tags
}) {
  if (step === 'details') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "minimal-map-admin__location-dialog-fields",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        autoFocus: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'minimal-map'),
        value: form.title,
        onChange: value => onChange('title', value),
        help: fieldErrors.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionalLabel, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Telephone', 'minimal-map')
        }),
        type: "tel",
        value: form.telephone,
        onChange: value => onChange('telephone', value)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionalLabel, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email address', 'minimal-map')
        }),
        type: "email",
        value: form.email,
        onChange: value => onChange('email', value),
        help: fieldErrors.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionalLabel, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Website', 'minimal-map')
        }),
        type: "url",
        value: form.website,
        onChange: value => onChange('website', value),
        help: fieldErrors.website
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FormTokenField, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tags (optional)', 'minimal-map'),
        value: form.tag_ids.map(id => tags.find(t => t.id === id)?.name).filter(name => !!name),
        suggestions: tags.map(t => t.name),
        onChange: tokenNames => {
          const nextTagIds = tokenNames.map(name => tags.find(t => t.name === name)?.id).filter(id => id !== undefined);
          onChange('tag_ids', nextTagIds);
        },
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "minimal-map-admin__location-dialog-fields minimal-map-admin__location-dialog-fields--address",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "minimal-map-admin__location-dialog-grid minimal-map-admin__location-dialog-grid--row-one",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        autoFocus: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Street', 'minimal-map'),
        value: form.street,
        onChange: value => onChange('street', value),
        help: fieldErrors.street
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('House number', 'minimal-map'),
        value: form.house_number,
        onChange: value => onChange('house_number', value),
        help: fieldErrors.house_number
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "minimal-map-admin__location-dialog-grid minimal-map-admin__location-dialog-grid--row-two",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Postal code', 'minimal-map'),
        value: form.postal_code,
        onChange: value => onChange('postal_code', value),
        help: fieldErrors.postal_code
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('City', 'minimal-map'),
        value: form.city,
        onChange: value => onChange('city', value),
        help: fieldErrors.city
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "minimal-map-admin__location-dialog-grid minimal-map-admin__location-dialog-grid--row-three",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('State', 'minimal-map'),
        value: form.state,
        onChange: value => onChange('state', value)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Country', 'minimal-map'),
        value: form.country,
        onChange: value => onChange('country', value),
        help: fieldErrors.country
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/locations/LocationsEmptyState.tsx"
/*!*****************************************************!*\
  !*** ./src/admin/locations/LocationsEmptyState.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationsEmptyState)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/EmptyState */ "./src/components/EmptyState/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




function LocationsEmptyState({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No locations found', 'minimal-map'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start adding locations to your maps. You can add them manually or import them from a file.', 'minimal-map'),
    action: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add location', 'minimal-map'),
      onClick: controller.onAddLocation,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    }
  });
}

/***/ },

/***/ "./src/admin/locations/LocationsTable.tsx"
/*!************************************************!*\
  !*** ./src/admin/locations/LocationsTable.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationsTable)
/* harmony export */ });
/* harmony import */ var _wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dataviews/wp */ "./node_modules/@wordpress/dataviews/build-wp/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/layers.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/copy.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/image.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/locate-fixed.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pencil.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/tags.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _components_LocationMiniMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/LocationMiniMap */ "./src/components/LocationMiniMap.tsx");
/* harmony import */ var _components_LogoPreview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LogoPreview */ "./src/components/LogoPreview.tsx");
/* harmony import */ var _components_TagBadge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/TagBadge */ "./src/components/TagBadge/index.tsx");
/* harmony import */ var _lib_locations_formatLocationAddressLines__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/locations/formatLocationAddressLines */ "./src/lib/locations/formatLocationAddressLines.ts");
/* harmony import */ var _DeleteLocationActionModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DeleteLocationActionModal */ "./src/admin/locations/DeleteLocationActionModal.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./constants */ "./src/admin/locations/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);











function CollectionBadge({
  label
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
    className: "components-badge is-default",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
      className: "components-badge__flex-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
        className: "components-badge__content",
        children: label
      })
    })
  });
}
function useLocationFields(controller) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [{
    id: 'map_preview',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Map preview', 'minimal-map'),
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
      className: "minimal-map-admin__location-mini-map-header",
      "aria-hidden": "true"
    }),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_LocationMiniMap__WEBPACK_IMPORTED_MODULE_11__["default"], {
      location: item,
      theme: controller.activeTheme,
      markerContent: controller.getMarkerForLocation(item.id)?.content ?? null
    })
  }, {
    id: 'logo',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Logo', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => {
      const logo = controller.getLogoForLocation(item.id);
      if (!logo) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
          className: "minimal-map-admin__location-logo-empty",
          children: "\u2014"
        });
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "minimal-map-admin__location-logo-cell",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
          type: "button",
          className: "minimal-map-admin__location-logo-button",
          onClick: () => controller.onOpenDeleteLogoConfirmationModal(item),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_LogoPreview__WEBPACK_IMPORTED_MODULE_12__["default"], {
            logo: logo,
            className: "minimal-map-admin__location-logo-preview"
          })
        })
      });
    }
  }, {
    id: 'title',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    enableGlobalSearch: true
  }, {
    id: 'contact',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Contact', 'minimal-map'),
    enableHiding: true,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "minimal-map-admin__location-contact",
        children: [item.telephone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
          className: "minimal-map-admin__location-contact-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
            href: `tel:${item.telephone}`,
            children: item.telephone
          })
        }), item.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
          className: "minimal-map-admin__location-contact-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
            href: `mailto:${item.email}`,
            children: item.email
          })
        }), item.website && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
          className: "minimal-map-admin__location-contact-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
            href: item.website,
            rel: "noreferrer",
            target: "_blank",
            children: item.website.replace(/^https?:\/\/(www\.)?/, '')
          })
        })]
      });
    }
  }, {
    id: 'address',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Address', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => {
      const lines = (0,_lib_locations_formatLocationAddressLines__WEBPACK_IMPORTED_MODULE_14__.formatLocationAddressLines)(item);
      if (lines.length === 0) {
        return null;
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "minimal-map-admin__location-address",
        children: lines.map(line => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
          className: "minimal-map-admin__location-address-line",
          children: line
        }, line))
      });
    }
  }, {
    id: 'collections',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Collections', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => {
      const collections = controller.getCollectionsForLocation(item.id);
      if (collections.length === 0) {
        return null;
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "minimal-map-admin__location-collections",
        children: collections.map(collection => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
          type: "button",
          className: "minimal-map-admin__location-collection-trigger",
          onClick: () => controller.onOpenRemoveCollectionAssignmentModal(item, collection),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(CollectionBadge, {
            label: collection.title
          })
        }, collection.id))
      });
    }
  }, {
    id: 'tags',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tags', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => {
      const tags = controller.getTagsForLocation(item.id);
      if (tags.length === 0) {
        return null;
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "minimal-map-admin__location-collections",
        children: tags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
          type: "button",
          className: "minimal-map-admin__location-collection-trigger",
          onClick: () => controller.onOpenAssignTagsModal(item),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_TagBadge__WEBPACK_IMPORTED_MODULE_13__["default"], {
            tag: tag
          })
        }, tag.id))
      });
    }
  }], [controller]);
}
function useLocationActions(controller) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [{
    id: 'duplicate-location',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Duplicate', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: 'single',
    disabled: controller.isRowActionPending,
    supportsBulk: false,
    callback: items => {
      if (!items[0]) {
        return;
      }
      void controller.onDuplicateLocation(items[0]).catch(() => {});
    }
  }, {
    id: 'edit-location',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: 'single',
    disabled: controller.isRowActionPending,
    supportsBulk: false,
    callback: items => {
      if (!items[0]) {
        return;
      }
      controller.onEditLocation(items[0]);
    }
  }, {
    id: 'retrieve-location',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Retrieve location', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: 'single',
    disabled: controller.isRowActionPending,
    supportsBulk: false,
    callback: items => {
      if (!items[0]) {
        return;
      }
      void controller.onRetrieveLocation(items[0]).catch(() => {});
    }
  }, {
    id: 'assign-location-to-collection',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Assign to Collection', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: 'single',
    disabled: controller.isRowActionPending || controller.isAssignmentSaving,
    supportsBulk: false,
    callback: items => {
      if (!items[0]) {
        return;
      }
      controller.onOpenAssignToCollectionModal(items[0]);
    }
  }, {
    id: 'assign-logo',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Assign Logo', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: 'single',
    disabled: controller.isRowActionPending || controller.isAssignmentSaving,
    supportsBulk: false,
    callback: items => {
      if (!items[0]) {
        return;
      }
      controller.onOpenAssignLogoModal(items[0]);
    }
  }, {
    id: 'assign-marker',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Assign Marker', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: 'single',
    disabled: controller.isRowActionPending || controller.isAssignmentSaving,
    supportsBulk: false,
    callback: items => {
      if (!items[0]) {
        return;
      }
      controller.onOpenAssignMarkerModal(items[0]);
    }
  }, {
    id: 'assign-tags',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Assign Tags', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: 'single',
    disabled: controller.isRowActionPending || controller.isAssignmentSaving,
    supportsBulk: false,
    callback: items => {
      if (!items[0]) {
        return;
      }
      controller.onOpenAssignTagsModal(items[0]);
    }
  }, {
    id: 'delete-location',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete', 'minimal-map'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    isDestructive: true,
    disabled: controller.isRowActionPending,
    supportsBulk: true,
    modalHeader: items => items.length === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete location', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('Delete %d location', 'Delete %d locations', items.length, 'minimal-map'), items.length),
    RenderModal: ({
      items,
      closeModal,
      onActionPerformed
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_DeleteLocationActionModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        items: items,
        onDelete: controller.onDeleteLocation,
        onDeleteBulk: controller.onDeleteLocations,
        closeModal: closeModal,
        onActionPerformed: onActionPerformed
      });
    }
  }], [controller]);
}
function LocationsTable({
  controller
}) {
  const fields = useLocationFields(controller);
  const actions = useLocationActions(controller);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
    className: "minimal-map-admin__locations-table-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews, {
      actions: actions,
      config: {
        perPageSizes: [_constants__WEBPACK_IMPORTED_MODULE_16__.LOCATIONS_TABLE_PER_PAGE]
      },
      data: controller.paginatedLocations,
      defaultLayouts: {
        table: {}
      },
      fields: fields,
      getItemId: item => `${item.id}`,
      paginationInfo: {
        totalItems: controller.locations.length,
        totalPages: controller.totalPages
      },
      selection: controller.selection,
      view: controller.view,
      onChangeSelection: controller.onChangeSelection,
      onChangeView: nextView => controller.onChangeView(nextView),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "minimal-map-admin__locations-dataviews-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Search, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Layout, {
        className: "minimal-map-admin__locations-dataviews-layout"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_0__.DataViews.Footer, {})]
    })
  });
}

/***/ },

/***/ "./src/admin/locations/MapStep.tsx"
/*!*****************************************!*\
  !*** ./src/admin/locations/MapStep.tsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapStep)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map/bootstrap */ "./src/map/bootstrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function MapStep({
  controller
}) {
  const hostRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const mapRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const runtimeConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    ...(window.MinimalMapAdminConfig?.mapConfig ?? {}),
    onMapClick: controller.onMapLocationSelect
  }), [controller.onMapLocationSelect]);
  const mapConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    centerLat: controller.selectedCoordinates?.lat ?? controller.mapCenter?.lat ?? 52.517,
    centerLng: controller.selectedCoordinates?.lng ?? controller.mapCenter?.lng ?? 13.388,
    zoom: controller.selectedCoordinates || controller.mapCenter ? 15 : 11,
    height: 400,
    heightUnit: "px",
    stylePreset: "positron",
    showZoomControls: false,
    allowSearch: false,
    locations: [],
    markerLat: controller.selectedCoordinates?.lat ?? null,
    markerLng: controller.selectedCoordinates?.lng ?? null
  }), [controller.mapCenter, controller.selectedCoordinates]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!hostRef.current) {
      return undefined;
    }
    mapRef.current = (0,_map_bootstrap__WEBPACK_IMPORTED_MODULE_3__.createMinimalMap)(hostRef.current, mapConfig, runtimeConfig);
    return () => {
      mapRef.current?.destroy();
      mapRef.current = null;
    };
  }, [runtimeConfig]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    mapRef.current?.update(mapConfig);
  }, [mapConfig]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "minimal-map-admin__location-map-step",
    children: [controller.geocodeError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      status: "warning",
      isDismissible: false,
      children: controller.geocodeError
    }) : controller.geocodeNotice ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      status: "info",
      isDismissible: false,
      children: controller.geocodeNotice
    }) : null, !controller.selectedCoordinates && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: "minimal-map-admin__location-map-hint",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Click on the map to place the location marker.", "minimal-map")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ref: hostRef,
      className: "minimal-map-admin__location-map-surface"
    })]
  });
}

/***/ },

/***/ "./src/admin/locations/RemoveCollectionAssignmentModal.tsx"
/*!*****************************************************************!*\
  !*** ./src/admin/locations/RemoveCollectionAssignmentModal.tsx ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveCollectionAssignmentModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function RemoveCollectionAssignmentModal({
  controller
}) {
  if (!controller.isRemoveCollectionAssignmentModalOpen || !controller.selectedRemovalLocation || !controller.selectedRemovalCollection) {
    return null;
  }
  const handleKeyDown = event => {
    const target = event.target;
    const isHTMLElement = target instanceof HTMLElement;
    if (controller.isRemovingCollectionAssignment || event.key !== "Enter" || event.shiftKey || isHTMLElement && target.closest("[data-minimal-map-dialog-ignore-enter='true']")) {
      return;
    }
    event.preventDefault();
    void controller.onRemoveCollectionAssignment();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__remove-collection-assignment-modal",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove collection", "minimal-map"),
    focusOnMount: true,
    onKeyDown: handleKeyDown,
    onRequestClose: controller.onCloseRemoveCollectionAssignmentModal,
    shouldCloseOnClickOutside: !controller.isRemovingCollectionAssignment,
    shouldCloseOnEsc: !controller.isRemovingCollectionAssignment,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove collection", "minimal-map"),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "minimal-map-admin__remove-collection-assignment-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "minimal-map-admin__remove-collection-assignment-copy",
        children: controller.selectedRemovalCollection.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "minimal-map-admin__remove-collection-assignment-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: controller.onCloseRemoveCollectionAssignmentModal,
          disabled: controller.isRemovingCollectionAssignment,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cancel", "minimal-map")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          isDestructive: true,
          onClick: () => void controller.onRemoveCollectionAssignment(),
          disabled: controller.isRemovingCollectionAssignment,
          isBusy: controller.isRemovingCollectionAssignment,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Confirm", "minimal-map")
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

/***/ "./src/admin/locations/constants.ts"
/*!******************************************!*\
  !*** ./src/admin/locations/constants.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_FORM_STATE: () => (/* binding */ DEFAULT_FORM_STATE),
/* harmony export */   DEFAULT_VIEW: () => (/* binding */ DEFAULT_VIEW),
/* harmony export */   LOCATIONS_TABLE_PER_PAGE: () => (/* binding */ LOCATIONS_TABLE_PER_PAGE)
/* harmony export */ });
const LOCATIONS_TABLE_PER_PAGE = 9;
const DEFAULT_FORM_STATE = {
  title: "",
  telephone: "",
  email: "",
  website: "",
  street: "",
  house_number: "",
  postal_code: "",
  city: "",
  state: "",
  country: "",
  latitude: "",
  longitude: "",
  logo_id: 0,
  marker_id: 0,
  tag_ids: []
};
const DEFAULT_VIEW = {
  type: "table",
  page: 1,
  perPage: LOCATIONS_TABLE_PER_PAGE,
  titleField: "title",
  mediaField: "map_preview",
  fields: ["logo", "contact", "address", "collections", "tags"],
  layout: {
    enableMoving: false
  }
};

/***/ },

/***/ "./src/admin/locations/controller.tsx"
/*!********************************************!*\
  !*** ./src/admin/locations/controller.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocationsController: () => (/* binding */ useLocationsController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var _ExportLocationsDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExportLocationsDropdown */ "./src/admin/locations/ExportLocationsDropdown.tsx");
/* harmony import */ var _ImportLocationsButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImportLocationsButton */ "./src/admin/locations/ImportLocationsButton.tsx");
/* harmony import */ var _lib_collections_fetchAllCollections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/collections/fetchAllCollections */ "./src/lib/collections/fetchAllCollections.ts");
/* harmony import */ var _lib_logos_fetchAllLogos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/logos/fetchAllLogos */ "./src/lib/logos/fetchAllLogos.ts");
/* harmony import */ var _lib_markers_fetchAllMarkers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/markers/fetchAllMarkers */ "./src/lib/markers/fetchAllMarkers.ts");
/* harmony import */ var _lib_tags_fetchAllTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/tags/fetchAllTags */ "./src/lib/tags/fetchAllTags.ts");
/* harmony import */ var _lib_collections_updateCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/collections/updateCollection */ "./src/lib/collections/updateCollection.ts");
/* harmony import */ var _lib_locations_configureApiFetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/locations/configureApiFetch */ "./src/lib/locations/configureApiFetch.ts");
/* harmony import */ var _lib_locations_createEmptyFieldErrors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/locations/createEmptyFieldErrors */ "./src/lib/locations/createEmptyFieldErrors.ts");
/* harmony import */ var _lib_locations_createLocationFormStateFromRecord__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/locations/createLocationFormStateFromRecord */ "./src/lib/locations/createLocationFormStateFromRecord.ts");
/* harmony import */ var _lib_locations_createLocation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/locations/createLocation */ "./src/lib/locations/createLocation.ts");
/* harmony import */ var _lib_locations_deleteLocation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/locations/deleteLocation */ "./src/lib/locations/deleteLocation.ts");
/* harmony import */ var _lib_locations_duplicateLocation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../lib/locations/duplicateLocation */ "./src/lib/locations/duplicateLocation.ts");
/* harmony import */ var _lib_locations_fetchAllLocations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../lib/locations/fetchAllLocations */ "./src/lib/locations/fetchAllLocations.ts");
/* harmony import */ var _lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../lib/locations/importLocations */ "./src/lib/locations/importLocations.ts");
/* harmony import */ var _lib_locations_geocodeAddress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../lib/locations/geocodeAddress */ "./src/lib/locations/geocodeAddress.ts");
/* harmony import */ var _lib_locations_hasFieldErrors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../lib/locations/hasFieldErrors */ "./src/lib/locations/hasFieldErrors.ts");
/* harmony import */ var _lib_locations_hasLocationAddressChanged__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../lib/locations/hasLocationAddressChanged */ "./src/lib/locations/hasLocationAddressChanged.ts");
/* harmony import */ var _lib_locations_paginateLocations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../lib/locations/paginateLocations */ "./src/lib/locations/paginateLocations.ts");
/* harmony import */ var _lib_locations_updateLocationCoordinates__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../lib/locations/updateLocationCoordinates */ "./src/lib/locations/updateLocationCoordinates.ts");
/* harmony import */ var _lib_locations_updateLocation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../lib/locations/updateLocation */ "./src/lib/locations/updateLocation.ts");
/* harmony import */ var _lib_locations_validateAddressStep__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../lib/locations/validateAddressStep */ "./src/lib/locations/validateAddressStep.ts");
/* harmony import */ var _lib_locations_validateDetailsStep__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../lib/locations/validateDetailsStep */ "./src/lib/locations/validateDetailsStep.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./constants */ "./src/admin/locations/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__);





























const DEFAULT_MAP_CENTER = {
  lat: 52.517,
  lng: 13.388
};
function useLocationsController(config, collectionsConfig, logosConfig, markersConfig, tagsConfig, enabled, themeData) {
  const [form, setForm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_27__.DEFAULT_FORM_STATE);
  const [formMode, setFormMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('create');
  const [editingLocation, setEditingLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [originalForm, setOriginalForm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [fieldErrors, setFieldErrors] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_lib_locations_createEmptyFieldErrors__WEBPACK_IMPORTED_MODULE_12__.createEmptyFieldErrors)());
  const [isDialogOpen, setDialogOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isSubmitting, setSubmitting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isGeocoding, setGeocoding] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isLoading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(enabled);
  const [isRowActionPending, setRowActionPending] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [loadError, setLoadError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [submitError, setSubmitError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [actionNotice, setActionNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [geocodeError, setGeocodeError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [geocodeNotice, setGeocodeNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [locations, setLocations] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [collections, setCollections] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [logos, setLogos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [markers, setMarkers] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [tags, setTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [step, setStep] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('details');
  const [view, setView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_27__.DEFAULT_VIEW);
  const [mapCenter, setMapCenter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [selectedCoordinates, setSelectedCoordinates] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isAssignToCollectionModalOpen, setAssignToCollectionModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedAssignmentLocation, setSelectedAssignmentLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [assignmentCollectionId, setAssignmentCollectionId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isAssignLogoModalOpen, setAssignLogoModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedLogoLocation, setSelectedLogoLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [assignmentLogoId, setAssignmentLogoId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isAssignMarkerModalOpen, setAssignMarkerModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedMarkerLocation, setSelectedMarkerLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [assignmentMarkerId, setAssignmentMarkerId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isAssignTagsModalOpen, setAssignTagsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedTagsLocation, setSelectedTagsLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [assignmentTagIds, setAssignmentTagIds] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [isAssignmentSaving, setAssignmentSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isDeleteLogoConfirmationModalOpen, setDeleteLogoConfirmationModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedLogoRemovalLocation, setSelectedLogoRemovalLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isRemoveCollectionAssignmentModalOpen, setRemoveCollectionAssignmentModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedRemovalLocation, setSelectedRemovalLocation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [selectedRemovalCollection, setSelectedRemovalCollection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isRemovingCollectionAssignment, setRemovingCollectionAssignment] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isImporting, setIsImporting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isExporting, setIsExporting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isCustomCsvImportModalOpen, setCustomCsvImportModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [customCsvImportStep, setCustomCsvImportStep] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('mapping');
  const [pendingCsvImport, setPendingCsvImport] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [csvImportMapping, setCsvImportMapping] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_18__.createEmptyCsvImportMapping)());
  const [csvImportProgressCompleted, setCsvImportProgressCompleted] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [csvImportProgressTotal, setCsvImportProgressTotal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [selection, setSelection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const loadLocations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!enabled) {
      return;
    }
    setLoading(true);
    setLoadError(null);
    try {
      const [locationRecords, collectionRecords, logoRecords, markerRecords, tagRecords] = await Promise.all([(0,_lib_locations_fetchAllLocations__WEBPACK_IMPORTED_MODULE_17__.fetchAllLocations)(config), (0,_lib_collections_fetchAllCollections__WEBPACK_IMPORTED_MODULE_6__.fetchAllCollections)(collectionsConfig), (0,_lib_logos_fetchAllLogos__WEBPACK_IMPORTED_MODULE_7__.fetchAllLogos)(logosConfig), (0,_lib_markers_fetchAllMarkers__WEBPACK_IMPORTED_MODULE_8__.fetchAllMarkers)(markersConfig), (0,_lib_tags_fetchAllTags__WEBPACK_IMPORTED_MODULE_9__.fetchAllTags)(tagsConfig)]);
      setLocations(locationRecords);
      setCollections(collectionRecords);
      setLogos(logoRecords);
      setMarkers(markerRecords);
      setTags(tagRecords);
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Locations and collections could not be loaded.', 'minimal-map'));
    } finally {
      setLoading(false);
    }
  }, [collectionsConfig, config, enabled, logosConfig, markersConfig, tagsConfig]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_locations_configureApiFetch__WEBPACK_IMPORTED_MODULE_11__.configureApiFetch)(collectionsConfig.nonce || config.nonce);
    if (!enabled) {
      return;
    }
    void loadLocations();
  }, [collectionsConfig.nonce, config.nonce, enabled, loadLocations]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setView(currentView => ({
      ...currentView,
      page: 1
    }));
  }, [locations.length, view.search]);
  const {
    locations: paginatedLocations,
    totalPages
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_lib_locations_paginateLocations__WEBPACK_IMPORTED_MODULE_22__.paginateLocations)(locations, view), [locations, view]);
  const collectionsByLocationId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const lookup = new Map();
    collections.forEach(collection => {
      collection.location_ids.forEach(locationId => {
        const assignedCollections = lookup.get(locationId) ?? [];
        assignedCollections.push(collection);
        lookup.set(locationId, assignedCollections);
      });
    });
    lookup.forEach((assignedCollections, locationId) => {
      lookup.set(locationId, [...assignedCollections].sort((left, right) => left.title.localeCompare(right.title)));
    });
    return lookup;
  }, [collections]);
  const tagsById = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new Map(tags.map(tag => [tag.id, tag])), [tags]);
  const logosById = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new Map(logos.map(logo => [logo.id, logo])), [logos]);
  const markersById = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new Map(markers.map(marker => [marker.id, marker])), [markers]);
  const getTagsForLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(locationId => {
    const location = locations.find(loc => loc.id === locationId);
    if (!location) {
      return [];
    }
    return location.tag_ids.map(tagId => tagsById.get(tagId)).filter(tag => !!tag);
  }, [locations, tagsById]);
  const getLogoForLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(locationId => {
    const location = locations.find(loc => loc.id === locationId);
    if (!location || location.logo_id <= 0) {
      return null;
    }
    return logosById.get(location.logo_id) ?? null;
  }, [locations, logosById]);
  const getMarkerForLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(locationId => {
    const location = locations.find(loc => loc.id === locationId);
    if (!location || location.marker_id <= 0) {
      return null;
    }
    return markersById.get(location.marker_id) ?? null;
  }, [locations, markersById]);
  const resetDialogState = () => {
    setFormMode('create');
    setEditingLocation(null);
    setOriginalForm(null);
    setForm(_constants__WEBPACK_IMPORTED_MODULE_27__.DEFAULT_FORM_STATE);
    setFieldErrors((0,_lib_locations_createEmptyFieldErrors__WEBPACK_IMPORTED_MODULE_12__.createEmptyFieldErrors)());
    setSubmitError(null);
    setGeocodeError(null);
    setGeocodeNotice(null);
    setMapCenter(null);
    setSelectedCoordinates(null);
    setStep('details');
  };
  const resetCustomCsvImportState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setCustomCsvImportModalOpen(false);
    setCustomCsvImportStep('mapping');
    setPendingCsvImport(null);
    setCsvImportMapping((0,_lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_18__.createEmptyCsvImportMapping)());
    setCsvImportProgressCompleted(0);
    setCsvImportProgressTotal(0);
  }, []);
  const resetAssignToCollectionState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setAssignToCollectionModalOpen(false);
    setSelectedAssignmentLocation(null);
    setAssignmentCollectionId('');
  }, []);
  const resetAssignLogoState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setAssignLogoModalOpen(false);
    setSelectedLogoLocation(null);
    setAssignmentLogoId('');
  }, []);
  const resetAssignMarkerState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setAssignMarkerModalOpen(false);
    setSelectedMarkerLocation(null);
    setAssignmentMarkerId('');
  }, []);
  const resetAssignTagsState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setAssignTagsModalOpen(false);
    setSelectedTagsLocation(null);
    setAssignmentTagIds([]);
  }, []);
  const closeAssignToCollectionModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isAssignmentSaving) {
      return;
    }
    resetAssignToCollectionState();
  }, [isAssignmentSaving, resetAssignToCollectionState]);
  const closeAssignLogoModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isAssignmentSaving) {
      return;
    }
    resetAssignLogoState();
  }, [isAssignmentSaving, resetAssignLogoState]);
  const closeAssignMarkerModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isAssignmentSaving) {
      return;
    }
    resetAssignMarkerState();
  }, [isAssignmentSaving, resetAssignMarkerState]);
  const closeAssignTagsModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isAssignmentSaving) {
      return;
    }
    resetAssignTagsState();
  }, [isAssignmentSaving, resetAssignTagsState]);
  const resetDeleteLogoConfirmationState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setDeleteLogoConfirmationModalOpen(false);
    setSelectedLogoRemovalLocation(null);
  }, []);
  const closeDeleteLogoConfirmationModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isAssignmentSaving) {
      return;
    }
    resetDeleteLogoConfirmationState();
  }, [isAssignmentSaving, resetDeleteLogoConfirmationState]);
  const resetRemoveCollectionAssignmentState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setRemoveCollectionAssignmentModalOpen(false);
    setSelectedRemovalLocation(null);
    setSelectedRemovalCollection(null);
  }, []);
  const closeCustomCsvImportModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isImporting) {
      return;
    }
    resetCustomCsvImportState();
  }, [isImporting, resetCustomCsvImportState]);
  const closeRemoveCollectionAssignmentModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (isRemovingCollectionAssignment) {
      return;
    }
    resetRemoveCollectionAssignmentState();
  }, [isRemovingCollectionAssignment, resetRemoveCollectionAssignmentState]);
  const openDialog = () => {
    resetDialogState();
    setDialogOpen(true);
  };
  const onEditLocation = location => {
    const nextForm = (0,_lib_locations_createLocationFormStateFromRecord__WEBPACK_IMPORTED_MODULE_13__.createLocationFormStateFromRecord)(location);
    const latitude = Number(location.latitude);
    const longitude = Number(location.longitude);
    const hasCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude);
    const coordinates = hasCoordinates ? {
      lat: latitude,
      lng: longitude
    } : null;
    resetDialogState();
    setFormMode('edit');
    setEditingLocation(location);
    setOriginalForm(nextForm);
    setForm(nextForm);
    setMapCenter(coordinates);
    setSelectedCoordinates(coordinates);
    setDialogOpen(true);
  };
  const onCancel = () => {
    if (isSubmitting || isGeocoding) {
      return;
    }
    setDialogOpen(false);
  };
  const onBack = () => {
    if (isSubmitting || isGeocoding) {
      return;
    }
    if (step === 'map') {
      setStep('address');
      return;
    }
    setStep('details');
  };
  const onChangeFormValue = (key, value) => {
    setForm(currentForm => ({
      ...currentForm,
      [key]: value
    }));
    setFieldErrors(currentErrors => ({
      ...currentErrors,
      [key]: undefined
    }));
    if (key === 'street' || key === 'house_number' || key === 'postal_code' || key === 'city' || key === 'state' || key === 'country') {
      setGeocodeError(null);
      setGeocodeNotice(null);
    }
  };
  const dismissActionNotice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setActionNotice(null);
  }, []);
  const onOpenAssignToCollectionModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(location => {
    setSelectedAssignmentLocation(location);
    setAssignmentCollectionId('');
    setAssignToCollectionModalOpen(true);
  }, []);
  const onOpenAssignLogoModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(location => {
    setSelectedLogoLocation(location);
    setAssignmentLogoId(location.logo_id > 0 ? `${location.logo_id}` : '');
    setAssignLogoModalOpen(true);
  }, []);
  const onOpenAssignMarkerModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(location => {
    setSelectedMarkerLocation(location);
    setAssignmentMarkerId(location.marker_id > 0 ? `${location.marker_id}` : '');
    setAssignMarkerModalOpen(true);
  }, []);
  const onOpenAssignTagsModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(location => {
    setSelectedTagsLocation(location);
    setAssignmentTagIds(location.tag_ids);
    setAssignTagsModalOpen(true);
  }, []);
  const onOpenDeleteLogoConfirmationModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(location => {
    if (location.logo_id <= 0) {
      return;
    }
    setSelectedLogoRemovalLocation(location);
    setDeleteLogoConfirmationModalOpen(true);
  }, []);
  const onAssignLogoToLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!selectedLogoLocation || !assignmentLogoId) {
      return;
    }
    setAssignmentSaving(true);
    setActionNotice(null);
    try {
      await (0,_lib_locations_updateLocation__WEBPACK_IMPORTED_MODULE_24__.updateLocation)(config, selectedLogoLocation.id, {
        ...(0,_lib_locations_createLocationFormStateFromRecord__WEBPACK_IMPORTED_MODULE_13__.createLocationFormStateFromRecord)(selectedLogoLocation),
        logo_id: Number(assignmentLogoId)
      });
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location logo updated.', 'minimal-map')
      });
      resetAssignLogoState();
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location logo could not be updated.', 'minimal-map')
      });
    } finally {
      setAssignmentSaving(false);
    }
  }, [assignmentLogoId, config, loadLocations, resetAssignLogoState, selectedLogoLocation]);
  const onAssignMarkerToLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!selectedMarkerLocation) {
      return;
    }
    setAssignmentSaving(true);
    setActionNotice(null);
    try {
      await (0,_lib_locations_updateLocation__WEBPACK_IMPORTED_MODULE_24__.updateLocation)(config, selectedMarkerLocation.id, {
        ...(0,_lib_locations_createLocationFormStateFromRecord__WEBPACK_IMPORTED_MODULE_13__.createLocationFormStateFromRecord)(selectedMarkerLocation),
        marker_id: Number(assignmentMarkerId) || 0
      });
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location marker updated.', 'minimal-map')
      });
      resetAssignMarkerState();
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location marker could not be updated.', 'minimal-map')
      });
    } finally {
      setAssignmentSaving(false);
    }
  }, [assignmentMarkerId, config, loadLocations, resetAssignMarkerState, selectedMarkerLocation]);
  const onAssignTagsToLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!selectedTagsLocation) {
      return;
    }
    setAssignmentSaving(true);
    setActionNotice(null);
    try {
      await (0,_lib_locations_updateLocation__WEBPACK_IMPORTED_MODULE_24__.updateLocation)(config, selectedTagsLocation.id, {
        ...(0,_lib_locations_createLocationFormStateFromRecord__WEBPACK_IMPORTED_MODULE_13__.createLocationFormStateFromRecord)(selectedTagsLocation),
        tag_ids: assignmentTagIds
      });
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location tags updated.', 'minimal-map')
      });
      resetAssignTagsState();
    } catch (error) {
      console.error('Failed to update tags:', error);
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location tags could not be updated.', 'minimal-map')
      });
    } finally {
      setAssignmentSaving(false);
    }
  }, [assignmentTagIds, config, loadLocations, resetAssignTagsState, selectedTagsLocation]);
  const onClearLogoFromLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!selectedLogoRemovalLocation) {
      return;
    }
    setAssignmentSaving(true);
    setActionNotice(null);
    try {
      await (0,_lib_locations_updateLocation__WEBPACK_IMPORTED_MODULE_24__.updateLocation)(config, selectedLogoRemovalLocation.id, {
        ...(0,_lib_locations_createLocationFormStateFromRecord__WEBPACK_IMPORTED_MODULE_13__.createLocationFormStateFromRecord)(selectedLogoRemovalLocation),
        logo_id: 0
      });
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo removed from location.', 'minimal-map')
      });
      resetDeleteLogoConfirmationState();
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Logo could not be removed from the location.', 'minimal-map')
      });
    } finally {
      setAssignmentSaving(false);
    }
  }, [config, loadLocations, resetDeleteLogoConfirmationState, selectedLogoRemovalLocation]);
  const onOpenRemoveCollectionAssignmentModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((location, collection) => {
    setSelectedRemovalLocation(location);
    setSelectedRemovalCollection(collection);
    setRemoveCollectionAssignmentModalOpen(true);
  }, []);
  const getCollectionsForLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(locationId => collectionsByLocationId.get(locationId) ?? [], [collectionsByLocationId]);
  const onDuplicateLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async location => {
    setRowActionPending(true);
    setActionNotice(null);
    try {
      await (0,_lib_locations_duplicateLocation__WEBPACK_IMPORTED_MODULE_16__.duplicateLocation)(config, location, locations.map(item => item.title));
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location duplicated.', 'minimal-map')
      });
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location could not be duplicated.', 'minimal-map')
      });
      throw error;
    } finally {
      setRowActionPending(false);
    }
  }, [config, loadLocations, locations]);
  const onRetrieveLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async location => {
    const errors = (0,_lib_locations_validateAddressStep__WEBPACK_IMPORTED_MODULE_25__.validateAddressStep)(location);
    const validationMessage = Object.values(errors).find(Boolean);
    if (validationMessage) {
      const error = new Error(validationMessage);
      setActionNotice({
        status: 'error',
        message: validationMessage
      });
      throw error;
    }
    setRowActionPending(true);
    setActionNotice(null);
    try {
      const result = await (0,_lib_locations_geocodeAddress__WEBPACK_IMPORTED_MODULE_19__.geocodeAddress)(config, location);
      if (!result.success) {
        const error = new Error(result.message);
        setActionNotice({
          status: 'error',
          message: result.message
        });
        throw error;
      }
      await (0,_lib_locations_updateLocationCoordinates__WEBPACK_IMPORTED_MODULE_23__.updateLocationCoordinates)(config, location.id, {
        lat: result.lat,
        lng: result.lng
      });
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location coordinates updated.', 'minimal-map')
      });
    } catch (error) {
      if (!(error instanceof Error && error.message === validationMessage)) {
        setActionNotice({
          status: 'error',
          message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location could not be retrieved.', 'minimal-map')
        });
      }
      throw error;
    } finally {
      setRowActionPending(false);
    }
  }, [config, loadLocations]);
  const onDeleteLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async location => {
    setRowActionPending(true);
    setActionNotice(null);
    try {
      await (0,_lib_locations_deleteLocation__WEBPACK_IMPORTED_MODULE_15__.deleteLocation)(config, location.id);
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location deleted.', 'minimal-map')
      });
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location could not be deleted.', 'minimal-map')
      });
      throw error;
    } finally {
      setRowActionPending(false);
    }
  }, [config, loadLocations]);
  const onDeleteLocations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async items => {
    setRowActionPending(true);
    setActionNotice(null);
    try {
      for (const item of items) {
        await (0,_lib_locations_deleteLocation__WEBPACK_IMPORTED_MODULE_15__.deleteLocation)(config, item.id);
      }
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: items.length === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location deleted.', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d location deleted.', '%d locations deleted.', items.length, 'minimal-map'), items.length)
      });
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Locations could not be deleted.', 'minimal-map')
      });
      throw error;
    } finally {
      setRowActionPending(false);
    }
  }, [config, loadLocations]);
  const onAssignLocationToCollection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!selectedAssignmentLocation || !assignmentCollectionId) {
      return;
    }
    const collectionId = Number(assignmentCollectionId);
    const selectedCollection = collections.find(collection => collection.id === collectionId);
    if (!selectedCollection) {
      setActionNotice({
        status: 'error',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected collection could not be found.', 'minimal-map')
      });
      return;
    }
    if (selectedCollection.location_ids.includes(selectedAssignmentLocation.id)) {
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location is already assigned to that collection.', 'minimal-map')
      });
      resetAssignToCollectionState();
      return;
    }
    setAssignmentSaving(true);
    setActionNotice(null);
    try {
      await (0,_lib_collections_updateCollection__WEBPACK_IMPORTED_MODULE_10__.updateCollection)(collectionsConfig, selectedCollection.id, selectedCollection.title, Array.from(new Set([...selectedCollection.location_ids, selectedAssignmentLocation.id])));
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location assigned to collection.', 'minimal-map')
      });
      resetAssignToCollectionState();
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location could not be assigned to the collection.', 'minimal-map')
      });
    } finally {
      setAssignmentSaving(false);
    }
  }, [assignmentCollectionId, collections, collectionsConfig, loadLocations, resetAssignToCollectionState, selectedAssignmentLocation]);
  const onRemoveCollectionAssignment = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!selectedRemovalLocation || !selectedRemovalCollection) {
      return;
    }
    setRemovingCollectionAssignment(true);
    setActionNotice(null);
    try {
      await (0,_lib_collections_updateCollection__WEBPACK_IMPORTED_MODULE_10__.updateCollection)(collectionsConfig, selectedRemovalCollection.id, selectedRemovalCollection.title, selectedRemovalCollection.location_ids.filter(locationId => locationId !== selectedRemovalLocation.id));
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Collection removed from location.', 'minimal-map')
      });
      resetRemoveCollectionAssignmentState();
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Collection could not be removed from the location.', 'minimal-map')
      });
    } finally {
      setRemovingCollectionAssignment(false);
    }
  }, [collectionsConfig, loadLocations, resetRemoveCollectionAssignmentState, selectedRemovalCollection, selectedRemovalLocation]);
  const onMapLocationSelect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(coordinates => {
    setSelectedCoordinates(coordinates);
    setMapCenter(coordinates);
    setForm(currentForm => ({
      ...currentForm,
      latitude: `${coordinates.lat}`,
      longitude: `${coordinates.lng}`
    }));
    setSubmitError(null);
    setGeocodeError(null);
  }, []);
  const onConfirm = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (step === 'details') {
      const errors = (0,_lib_locations_validateDetailsStep__WEBPACK_IMPORTED_MODULE_26__.validateDetailsStep)(form);
      setFieldErrors(errors);
      if ((0,_lib_locations_hasFieldErrors__WEBPACK_IMPORTED_MODULE_20__.hasFieldErrors)(errors)) {
        return;
      }
      setSubmitError(null);
      setStep('address');
      return;
    }
    if (step === 'address') {
      const errors = {
        ...(0,_lib_locations_validateDetailsStep__WEBPACK_IMPORTED_MODULE_26__.validateDetailsStep)(form),
        ...(0,_lib_locations_validateAddressStep__WEBPACK_IMPORTED_MODULE_25__.validateAddressStep)(form)
      };
      setFieldErrors(errors);
      if ((0,_lib_locations_hasFieldErrors__WEBPACK_IMPORTED_MODULE_20__.hasFieldErrors)(errors)) {
        return;
      }
      if (formMode === 'edit' && !(0,_lib_locations_hasLocationAddressChanged__WEBPACK_IMPORTED_MODULE_21__.hasLocationAddressChanged)(form, originalForm)) {
        const latitude = Number(originalForm?.latitude ?? '');
        const longitude = Number(originalForm?.longitude ?? '');
        const hasCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude);
        const coordinates = hasCoordinates ? {
          lat: latitude,
          lng: longitude
        } : null;
        setSubmitError(null);
        setGeocodeError(null);
        setGeocodeNotice(null);
        setMapCenter(coordinates ?? DEFAULT_MAP_CENTER);
        setSelectedCoordinates(coordinates);
        setForm(currentForm => ({
          ...currentForm,
          latitude: coordinates ? `${coordinates.lat}` : '',
          longitude: coordinates ? `${coordinates.lng}` : ''
        }));
        setStep('map');
        return;
      }
      setGeocoding(true);
      setSubmitError(null);
      setGeocodeError(null);
      setGeocodeNotice(null);
      try {
        const result = await (0,_lib_locations_geocodeAddress__WEBPACK_IMPORTED_MODULE_19__.geocodeAddress)(config, form);
        if (result.success) {
          const coordinates = {
            lat: result.lat,
            lng: result.lng
          };
          setMapCenter(coordinates);
          setSelectedCoordinates(coordinates);
          setForm(currentForm => ({
            ...currentForm,
            latitude: `${result.lat}`,
            longitude: `${result.lng}`
          }));
          if (result.label) {
            setGeocodeNotice(result.label);
          }
        } else {
          setMapCenter(DEFAULT_MAP_CENTER);
          setSelectedCoordinates(null);
          setForm(currentForm => ({
            ...currentForm,
            latitude: '',
            longitude: ''
          }));
          setGeocodeError(result.message);
        }
      } catch (error) {
        setMapCenter(DEFAULT_MAP_CENTER);
        setSelectedCoordinates(null);
        setForm(currentForm => ({
          ...currentForm,
          latitude: '',
          longitude: ''
        }));
        setGeocodeError(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The address could not be geocoded right now. Select the location manually on the map.', 'minimal-map'));
      } finally {
        setGeocoding(false);
        setStep('map');
      }
      return;
    }
    if (!selectedCoordinates) {
      setSubmitError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select a location on the map before finishing.', 'minimal-map'));
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const nextForm = {
        ...form,
        latitude: `${selectedCoordinates.lat}`,
        longitude: `${selectedCoordinates.lng}`
      };
      if (formMode === 'edit' && editingLocation) {
        await (0,_lib_locations_updateLocation__WEBPACK_IMPORTED_MODULE_24__.updateLocation)(config, editingLocation.id, nextForm);
      } else {
        await (0,_lib_locations_createLocation__WEBPACK_IMPORTED_MODULE_14__.createLocation)(config, nextForm);
      }
      await loadLocations();
      setDialogOpen(false);
      resetDialogState();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : formMode === 'edit' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location could not be updated.', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location could not be created.', 'minimal-map'));
    } finally {
      setSubmitting(false);
    }
  }, [step, form, formMode, originalForm, config, loadLocations, editingLocation, selectedCoordinates]);
  const onChangeCsvImportMapping = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((field, columnIndex) => {
    setCsvImportMapping(currentMapping => ({
      ...currentMapping,
      [field]: columnIndex === '' ? null : Number(columnIndex)
    }));
  }, []);
  const onImportLocations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async file => {
    setActionNotice(null);
    try {
      const parsedCsv = await (0,_lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_18__.parseCsvFile)(file);
      if ((0,_lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_18__.isCommonCsvFormat)(parsedCsv)) {
        setIsImporting(true);
        try {
          const result = await (0,_lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_18__.runCommonCsvImport)(parsedCsv, config, collectionsConfig);
          await loadLocations();
          setActionNotice({
            status: 'success',
            message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d location imported and assigned to a new collection.', '%d locations imported and assigned to a new collection.', result.importedCount, 'minimal-map'), result.importedCount)
          });
        } finally {
          setIsImporting(false);
        }
        return;
      }
      resetCustomCsvImportState();
      setPendingCsvImport(parsedCsv);
      setCustomCsvImportStep('mapping');
      setCustomCsvImportModalOpen(true);
    } catch (error) {
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Failed to import locations.', 'minimal-map')
      });
    }
  }, [collectionsConfig, config, loadLocations, resetCustomCsvImportState]);
  const onStartCustomCsvImport = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!pendingCsvImport) {
      return;
    }
    const totalGeocodeRequests = (0,_lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_18__.countMappedCsvGeocodeRequests)(pendingCsvImport, csvImportMapping);
    setActionNotice(null);
    setCustomCsvImportStep('progress');
    setCsvImportProgressCompleted(0);
    setCsvImportProgressTotal(totalGeocodeRequests);
    setIsImporting(true);
    try {
      const result = await (0,_lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_18__.runMappedCsvImport)(pendingCsvImport, csvImportMapping, config, collectionsConfig, {
        onGeocodeProgress: (completed, total) => {
          setCsvImportProgressCompleted(completed);
          setCsvImportProgressTotal(total);
        }
      });
      await loadLocations();
      setActionNotice({
        status: 'success',
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d location imported and assigned to a new collection.', '%d locations imported and assigned to a new collection.', result.importedCount, 'minimal-map'), result.importedCount)
      });
      resetCustomCsvImportState();
    } catch (error) {
      resetCustomCsvImportState();
      setActionNotice({
        status: 'error',
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Failed to import locations.', 'minimal-map')
      });
    } finally {
      setIsImporting(false);
    }
  }, [collectionsConfig, config, csvImportMapping, loadLocations, pendingCsvImport, resetCustomCsvImportState]);
  const onExportLocations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (locations.length === 0) return;
    const headers = ['title', 'street', 'house_number', 'postal_code', 'city', 'state', 'country', 'telephone', 'email', 'website', 'latitude', 'longitude'];
    const csvRows = [headers.join(',')];
    for (const loc of locations) {
      const values = headers.map(header => {
        const val = loc[header] || '';
        return `"${val.toString().replace(/"/g, '""')}"`;
      });
      csvRows.push(values.join(','));
    }
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'minimal-map-locations.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [locations]);
  const onExportExample = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const headers = ['title', 'street', 'house_number', 'postal_code', 'city', 'state', 'country', 'telephone', 'email', 'website', 'latitude', 'longitude'];
    const exampleData = ['Brandenburg Gate,Pariser Platz,,10117,Berlin,Berlin,Germany,,,52.5162,13.3777', 'Eiffel Tower,Champ de Mars,5 Avenue Anatole France,75007,Paris,,France,,,48.8584,2.2945'];
    const csvContent = [headers.join(','), ...exampleData].join('\n');
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'minimal-map-example.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  return {
    actionNotice,
    activeTheme: themeData.activeTheme,
    assignmentCollectionId,
    assignmentLogoId,
    assignmentMarkerId,
    assignmentTagIds,
    csvImportHeaders: pendingCsvImport?.headers ?? [],
    csvImportRows: pendingCsvImport?.rows ?? [],
    csvImportMapping,
    csvImportProgressCompleted,
    csvImportProgressTotal,
    csvImportStep: customCsvImportStep,
    collections,
    logos,
    markers,
    tags,
    dismissActionNotice,
    fieldErrors,
    form,
    formMode,
    getCollectionsForLocation,
    getLogoForLocation,
    getMarkerForLocation,
    getTagsForLocation,
    geocodeError,
    geocodeNotice,
    headerAction: enabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
      className: "minimal-map-styles__header-actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
        className: "minimal-map-styles__theme-controls",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_ImportLocationsButton__WEBPACK_IMPORTED_MODULE_5__.ImportLocationsButton, {
          onImport: onImportLocations,
          isImporting: isImporting
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_ExportLocationsDropdown__WEBPACK_IMPORTED_MODULE_4__.ExportLocationsDropdown, {
          onExport: onExportLocations,
          onExportExample: onExportExample
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        onClick: openDialog,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: 18,
          strokeWidth: 2
        }),
        iconPosition: "left",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add location', 'minimal-map')
      })]
    }) : null,
    isAssignToCollectionModalOpen,
    isAssignLogoModalOpen,
    isAssignMarkerModalOpen,
    isAssignTagsModalOpen,
    isAssignmentSaving,
    isDeleteLogoConfirmationModalOpen,
    isDialogOpen,
    isCustomCsvImportModalOpen,
    isGeocoding,
    isLoading,
    isRemoveCollectionAssignmentModalOpen,
    isRemovingCollectionAssignment,
    isRowActionPending,
    isSubmitting,
    isImporting,
    isExporting,
    loadError,
    locations,
    mapCenter,
    modalTitle: formMode === 'edit' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit location', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add location', 'minimal-map'),
    onBack,
    onAssignLocationToCollection,
    onAssignLogoToLocation,
    onAssignMarkerToLocation,
    onAssignTagsToLocation,
    onCancel,
    onChangeCsvImportMapping,
    onChangeFormValue,
    onCloseAssignToCollectionModal: closeAssignToCollectionModal,
    onCloseCustomCsvImportModal: closeCustomCsvImportModal,
    onCloseAssignLogoModal: closeAssignLogoModal,
    onCloseAssignMarkerModal: closeAssignMarkerModal,
    onCloseAssignTagsModal: closeAssignTagsModal,
    onCloseDeleteLogoConfirmationModal: closeDeleteLogoConfirmationModal,
    onCloseRemoveCollectionAssignmentModal: closeRemoveCollectionAssignmentModal,
    onOpenAssignToCollectionModal,
    onOpenAssignLogoModal,
    onOpenAssignMarkerModal,
    onOpenAssignTagsModal,
    onOpenDeleteLogoConfirmationModal,
    onOpenRemoveCollectionAssignmentModal,
    onChangeView: nextView => {
      setView({
        ...nextView,
        perPage: _constants__WEBPACK_IMPORTED_MODULE_27__.LOCATIONS_TABLE_PER_PAGE
      });
      setSelection([]);
    },
    onChangeSelection: nextSelection => setSelection(nextSelection),
    onConfirm,
    onDeleteLocation,
    onDeleteLocations,
    onDuplicateLocation,
    onEditLocation,
    onImportLocations,
    onStartCustomCsvImport,
    onExportLocations,
    onExportExample,
    onMapLocationSelect,
    onClearLogoFromLocation,
    onRemoveCollectionAssignment,
    onRetrieveLocation,
    onSelectAssignmentCollection: setAssignmentCollectionId,
    onSelectAssignmentLogo: setAssignmentLogoId,
    onSelectAssignmentMarker: setAssignmentMarkerId,
    onSelectAssignmentTags: setAssignmentTagIds,
    onAddLocation: openDialog,
    paginatedLocations,
    selection,
    selectedAssignmentLocation,
    selectedMarkerLocation,
    selectedLogoLocation,
    selectedLogoRemovalLocation,
    selectedTagsLocation,
    selectedCoordinates,
    selectedRemovalCollection,
    selectedRemovalLocation,
    submitLabel: formMode === 'edit' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Save changes', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Finish', 'minimal-map'),
    submitError,
    step,
    totalPages,
    view
  };
}

/***/ },

/***/ "./src/admin/locations/index.tsx"
/*!***************************************!*\
  !*** ./src/admin/locations/index.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationsView),
/* harmony export */   useLocationsController: () => (/* reexport safe */ _controller__WEBPACK_IMPORTED_MODULE_13__.useLocationsController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AssignLogoModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AssignLogoModal */ "./src/admin/locations/AssignLogoModal.tsx");
/* harmony import */ var _AssignMarkerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssignMarkerModal */ "./src/admin/locations/AssignMarkerModal.tsx");
/* harmony import */ var _AssignToCollectionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssignToCollectionModal */ "./src/admin/locations/AssignToCollectionModal.tsx");
/* harmony import */ var _AssignTagsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AssignTagsModal */ "./src/admin/locations/AssignTagsModal.tsx");
/* harmony import */ var _CustomCsvImportModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomCsvImportModal */ "./src/admin/locations/CustomCsvImportModal.tsx");
/* harmony import */ var _DeleteLogoConfirmationModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteLogoConfirmationModal */ "./src/admin/locations/DeleteLogoConfirmationModal.tsx");
/* harmony import */ var _LocationDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LocationDialog */ "./src/admin/locations/LocationDialog.tsx");
/* harmony import */ var _LocationsEmptyState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LocationsEmptyState */ "./src/admin/locations/LocationsEmptyState.tsx");
/* harmony import */ var _LocationsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LocationsTable */ "./src/admin/locations/LocationsTable.tsx");
/* harmony import */ var _RemoveCollectionAssignmentModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RemoveCollectionAssignmentModal */ "./src/admin/locations/RemoveCollectionAssignmentModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controller */ "./src/admin/locations/controller.tsx");














function LocationsView({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "minimal-map-admin__locations-view",
    children: [controller.actionNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__locations-notice",
      status: controller.actionNotice.status,
      onRemove: controller.dismissActionNotice,
      children: controller.actionNotice.message
    }), controller.loadError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__locations-notice",
      status: "error",
      isDismissible: false,
      children: controller.loadError
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "minimal-map-admin__locations-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.DropZone, {
        onFilesDrop: files => {
          const file = files[0];
          if (file) {
            void controller.onImportLocations(file);
          }
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Drop CSV file here to import locations', 'minimal-map')
      }), controller.isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "minimal-map-admin__locations-state minimal-map-admin__locations-state--loading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, {})
      }) : controller.locations.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_LocationsEmptyState__WEBPACK_IMPORTED_MODULE_9__["default"], {
        controller: controller
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_LocationsTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
        controller: controller
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_LocationDialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AssignToCollectionModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AssignLogoModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AssignMarkerModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AssignTagsModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_CustomCsvImportModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_DeleteLogoConfirmationModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_RemoveCollectionAssignmentModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      controller: controller
    })]
  });
}

/***/ },

/***/ "./src/admin/sections/LocationsSection.tsx"
/*!*************************************************!*\
  !*** ./src/admin/sections/LocationsSection.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationsSection)
/* harmony export */ });
/* harmony import */ var _ContentHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContentHeader */ "./src/admin/ContentHeader.tsx");
/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locations */ "./src/admin/locations/index.tsx");
/* harmony import */ var _styles_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/controller */ "./src/admin/styles/controller.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function LocationsSection({
  activeSection,
  appConfig
}) {
  const stylesController = (0,_styles_controller__WEBPACK_IMPORTED_MODULE_2__.useStylesController)(appConfig.stylesConfig, true);
  const controller = (0,_locations__WEBPACK_IMPORTED_MODULE_1__.useLocationsController)(appConfig.locationsConfig, appConfig.collectionsConfig, appConfig.logosConfig, appConfig.markersConfig, appConfig.tagsConfig, true, {
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_locations__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ "./src/components/LocationMiniMap.tsx"
/*!********************************************!*\
  !*** ./src/components/LocationMiniMap.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationMiniMap)
/* harmony export */ });
/* harmony import */ var _lib_styles_defaultThemeColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/styles/defaultThemeColors */ "./src/lib/styles/defaultThemeColors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const DEFAULT_STATIC_MARKER_CONTENT = `
<svg viewBox="0 0 27 41" aria-hidden="true" focusable="false">
	<defs>
		<filter id="minimal-map-mini-marker-shadow" x="-40%" y="-20%" width="180%" height="180%">
			<feOffset dy="1" in="SourceAlpha" result="offset" />
			<feGaussianBlur in="offset" stdDeviation="1.25" result="blur" />
			<feColorMatrix
				in="blur"
				type="matrix"
				values="0 0 0 0 0
								0 0 0 0 0
								0 0 0 0 0
								0 0 0 0.28 0"
				result="shadow"
			/>
			<feMerge>
				<feMergeNode in="shadow" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
	</defs>
	<path
		fill="#3fb1ce"
		stroke="#2b7f94"
		stroke-width="1.5"
		filter="url(#minimal-map-mini-marker-shadow)"
		d="M13.5 1.5C6.873 1.5 1.5 6.873 1.5 13.5c0 9.137 10.308 19.954 11.487 21.17a.75.75 0 0 0 1.026 0C15.192 33.454 25.5 22.637 25.5 13.5 25.5 6.873 20.127 1.5 13.5 1.5Z"
	/>
	<circle cx="13.5" cy="13" r="5.5" fill="#fff" />
</svg>
`;
function LocationMiniMap({
  location,
  theme,
  markerContent
}) {
  const colors = theme?.colors ?? _lib_styles_defaultThemeColors__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_POSITRON_THEME_COLORS;
  const previewStyle = {
    '--minimal-map-mini-map-background': colors.background,
    '--minimal-map-mini-map-water': colors.water,
    '--minimal-map-mini-map-park': colors.park,
    '--minimal-map-mini-map-road-casing': colors.roadMajorCasing,
    '--minimal-map-mini-map-road-fill': colors.roadMajorFill
  };
  const previewMarkerContent = markerContent ?? location.markerContent ?? DEFAULT_STATIC_MARKER_CONTENT;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "minimal-map-admin__location-mini-map minimal-map-admin__location-mini-map--static",
    "aria-hidden": "true",
    style: previewStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "minimal-map-admin__location-mini-map-surface",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "minimal-map-admin__location-mini-map-water"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "minimal-map-admin__location-mini-map-park"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "minimal-map-admin__location-mini-map-road minimal-map-admin__location-mini-map-road--primary"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "minimal-map-admin__location-mini-map-road minimal-map-admin__location-mini-map-road--secondary"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "minimal-map-admin__location-mini-map-preview-marker",
      dangerouslySetInnerHTML: {
        __html: previewMarkerContent
      }
    })]
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

/***/ "./src/lib/collections/createCollection.ts"
/*!*************************************************!*\
  !*** ./src/lib/collections/createCollection.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCollection: () => (/* binding */ createCollection)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

async function createCollection(config, title, locationIds = []) {
  await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: config.restPath,
    method: 'POST',
    data: {
      title: title.trim(),
      status: 'publish',
      meta: {
        location_ids: locationIds
      }
    }
  });
}

/***/ },

/***/ "./src/lib/collections/fetchAllCollections.ts"
/*!****************************************************!*\
  !*** ./src/lib/collections/fetchAllCollections.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllCollections: () => (/* binding */ fetchAllCollections)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalizeCollectionRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeCollectionRecord */ "./src/lib/collections/normalizeCollectionRecord.ts");


async function fetchAllCollections(config) {
  const perPage = 100;
  let page = 1;
  let totalPages = 1;
  const collections = [];
  while (page <= totalPages) {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      method: 'GET',
      parse: false,
      path: `${config.restPath}?context=edit&page=${page}&per_page=${perPage}&_fields=id,title,meta`
    });
    const records = await response.json();
    collections.push(...records.map(_normalizeCollectionRecord__WEBPACK_IMPORTED_MODULE_1__.normalizeCollectionRecord));
    totalPages = Number(response.headers.get('X-WP-TotalPages') || '1');
    page += 1;
  }
  return collections;
}

/***/ },

/***/ "./src/lib/collections/normalizeCollectionRecord.ts"
/*!**********************************************************!*\
  !*** ./src/lib/collections/normalizeCollectionRecord.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeCollectionRecord: () => (/* binding */ normalizeCollectionRecord)
/* harmony export */ });
function normalizeLocationIds(locationIds) {
  if (!Array.isArray(locationIds)) {
    return [];
  }
  const normalizedIds = locationIds.map(value => Number(value)).filter(value => Number.isInteger(value) && value > 0);
  return Array.from(new Set(normalizedIds));
}
function normalizeCollectionRecord(record) {
  const meta = record.meta ?? {};
  return {
    id: record.id,
    title: record.title?.raw || record.title?.rendered || '',
    location_ids: normalizeLocationIds(meta.location_ids)
  };
}

/***/ },

/***/ "./src/lib/collections/updateCollection.ts"
/*!*************************************************!*\
  !*** ./src/lib/collections/updateCollection.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateCollection: () => (/* binding */ updateCollection)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

async function updateCollection(config, collectionId, title, locationIds) {
  await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${config.restPath}/${collectionId}`,
    method: 'POST',
    data: {
      title: title.trim(),
      meta: {
        location_ids: locationIds
      }
    }
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

/***/ "./src/lib/locations/createEmptyFieldErrors.ts"
/*!*****************************************************!*\
  !*** ./src/lib/locations/createEmptyFieldErrors.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmptyFieldErrors: () => (/* binding */ createEmptyFieldErrors)
/* harmony export */ });
function createEmptyFieldErrors() {
  return {};
}

/***/ },

/***/ "./src/lib/locations/createLocation.ts"
/*!*********************************************!*\
  !*** ./src/lib/locations/createLocation.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLocation: () => (/* binding */ createLocation)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buildLocationMeta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildLocationMeta */ "./src/lib/locations/buildLocationMeta.ts");


async function createLocation(config, form) {
  return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: config.restPath,
    method: 'POST',
    data: {
      title: form.title.trim(),
      status: 'publish',
      meta: (0,_buildLocationMeta__WEBPACK_IMPORTED_MODULE_1__.buildLocationMeta)(form),
      minimal_map_tag: form.tag_ids
    }
  });
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

/***/ "./src/lib/locations/deleteLocation.ts"
/*!*********************************************!*\
  !*** ./src/lib/locations/deleteLocation.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteLocation: () => (/* binding */ deleteLocation)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

async function deleteLocation(config, locationId) {
  await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${config.restPath}/${locationId}?force=true`,
    method: 'DELETE'
  });
}

/***/ },

/***/ "./src/lib/locations/duplicateLocation.ts"
/*!************************************************!*\
  !*** ./src/lib/locations/duplicateLocation.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   duplicateLocation: () => (/* binding */ duplicateLocation)
/* harmony export */ });
/* harmony import */ var _createLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLocation */ "./src/lib/locations/createLocation.ts");

async function duplicateLocation(config, location, existingTitles) {
  const normalizedTitles = new Set(existingTitles.map(title => title.trim().toLowerCase()));
  const baseTitle = location.title.trim();
  let duplicateTitle = `${baseTitle} (Copy)`;
  let index = 2;
  while (normalizedTitles.has(duplicateTitle.toLowerCase())) {
    duplicateTitle = `${baseTitle} (Copy ${index})`;
    index += 1;
  }
  const {
    id: _id,
    ...form
  } = location;
  await (0,_createLocation__WEBPACK_IMPORTED_MODULE_0__.createLocation)(config, {
    ...form,
    title: duplicateTitle
  });
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

/***/ "./src/lib/locations/formatLocationAddressLines.ts"
/*!*********************************************************!*\
  !*** ./src/lib/locations/formatLocationAddressLines.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLocationAddressLines: () => (/* binding */ formatLocationAddressLines)
/* harmony export */ });
function formatLocationAddressLines(location) {
  const lineOne = [location.street.trim(), location.house_number.trim()].filter(Boolean).join(' ');
  const lineTwo = [location.postal_code.trim(), location.city.trim()].filter(Boolean).join(' ');
  const lineThree = [location.state.trim(), location.country.trim()].filter(Boolean).join(' ');
  return [lineOne, lineTwo, lineThree].filter(Boolean);
}

/***/ },

/***/ "./src/lib/locations/geocodeAddress.ts"
/*!*********************************************!*\
  !*** ./src/lib/locations/geocodeAddress.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   geocodeAddress: () => (/* binding */ geocodeAddress)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

async function geocodeAddress(config, form) {
  return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: config.geocodePath,
    method: 'POST',
    data: {
      street: form.street.trim(),
      house_number: form.house_number.trim(),
      postal_code: form.postal_code.trim(),
      city: form.city.trim(),
      state: form.state.trim(),
      country: form.country.trim()
    }
  });
}

/***/ },

/***/ "./src/lib/locations/hasFieldErrors.ts"
/*!*********************************************!*\
  !*** ./src/lib/locations/hasFieldErrors.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasFieldErrors: () => (/* binding */ hasFieldErrors)
/* harmony export */ });
function hasFieldErrors(errors) {
  return Object.values(errors).some(Boolean);
}

/***/ },

/***/ "./src/lib/locations/hasLocationAddressChanged.ts"
/*!********************************************************!*\
  !*** ./src/lib/locations/hasLocationAddressChanged.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLocationAddressChanged: () => (/* binding */ hasLocationAddressChanged)
/* harmony export */ });
function hasLocationAddressChanged(currentForm, originalForm) {
  if (!originalForm) {
    return true;
  }
  return currentForm.street.trim() !== originalForm.street.trim() || currentForm.house_number.trim() !== originalForm.house_number.trim() || currentForm.postal_code.trim() !== originalForm.postal_code.trim() || currentForm.city.trim() !== originalForm.city.trim() || currentForm.state.trim() !== originalForm.state.trim() || currentForm.country.trim() !== originalForm.country.trim();
}

/***/ },

/***/ "./src/lib/locations/importLocations.ts"
/*!**********************************************!*\
  !*** ./src/lib/locations/importLocations.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMON_CSV_HEADERS: () => (/* binding */ COMMON_CSV_HEADERS),
/* harmony export */   CUSTOM_CSV_MAPPING_FIELDS: () => (/* binding */ CUSTOM_CSV_MAPPING_FIELDS),
/* harmony export */   buildMappedLocationForm: () => (/* binding */ buildMappedLocationForm),
/* harmony export */   countMappedCsvGeocodeRequests: () => (/* binding */ countMappedCsvGeocodeRequests),
/* harmony export */   createEmptyCsvImportMapping: () => (/* binding */ createEmptyCsvImportMapping),
/* harmony export */   detectCsvDelimiter: () => (/* binding */ detectCsvDelimiter),
/* harmony export */   importLocations: () => (/* binding */ importLocations),
/* harmony export */   isCommonCsvFormat: () => (/* binding */ isCommonCsvFormat),
/* harmony export */   parseCsvFile: () => (/* binding */ parseCsvFile),
/* harmony export */   parseCsvRows: () => (/* binding */ parseCsvRows),
/* harmony export */   parseCsvText: () => (/* binding */ parseCsvText),
/* harmony export */   runCommonCsvImport: () => (/* binding */ runCommonCsvImport),
/* harmony export */   runMappedCsvImport: () => (/* binding */ runMappedCsvImport)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _collections_createCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collections/createCollection */ "./src/lib/collections/createCollection.ts");
/* harmony import */ var _createLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createLocation */ "./src/lib/locations/createLocation.ts");
/* harmony import */ var _geocodeAddress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geocodeAddress */ "./src/lib/locations/geocodeAddress.ts");




const COMMON_CSV_HEADERS = ['title', 'street', 'house_number', 'postal_code', 'city', 'state', 'country', 'telephone', 'email', 'website', 'latitude', 'longitude'];
const CUSTOM_CSV_MAPPING_FIELDS = [{
  key: 'title',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'minimal-map')
}, {
  key: 'email',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'minimal-map')
}, {
  key: 'telephone',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Phone', 'minimal-map')
}, {
  key: 'website',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Website', 'minimal-map')
}, {
  key: 'street',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Street', 'minimal-map')
}, {
  key: 'house_number',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('House number', 'minimal-map')
}, {
  key: 'city',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('City', 'minimal-map')
}, {
  key: 'postal_code',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zip code', 'minimal-map')
}, {
  key: 'country',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Country', 'minimal-map')
}];
function sleep(ms) {
  return new Promise(resolve => {
    globalThis.setTimeout(resolve, ms);
  });
}
function normalizeHeader(header) {
  return header.replace(/^\uFEFF/, '').trim().toLowerCase();
}
function sanitizeCellValue(value) {
  return value.trim();
}
function countDelimiterOccurrences(line, delimiter) {
  let count = 0;
  let inQuotes = false;
  for (let index = 0; index < line.length; index++) {
    const character = line[index];
    if (character === '"') {
      if (inQuotes && line[index + 1] === '"') {
        index++;
        continue;
      }
      inQuotes = !inQuotes;
      continue;
    }
    if (!inQuotes && character === delimiter) {
      count++;
    }
  }
  return count;
}
function detectCsvDelimiter(text) {
  const firstContentLine = text.split(/\r?\n/).map(line => line.trim()).find(line => line.length > 0);
  if (!firstContentLine) {
    return ',';
  }
  return countDelimiterOccurrences(firstContentLine, ';') > countDelimiterOccurrences(firstContentLine, ',') ? ';' : ',';
}
function parseCsvRows(text, delimiter) {
  const rows = [];
  let row = [];
  let current = '';
  let inQuotes = false;
  for (let index = 0; index < text.length; index++) {
    const character = text[index];
    if (character === '"') {
      if (inQuotes && text[index + 1] === '"') {
        current += '"';
        index++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (!inQuotes && character === delimiter) {
      row.push(sanitizeCellValue(current));
      current = '';
      continue;
    }
    if (!inQuotes && (character === '\n' || character === '\r')) {
      if (character === '\r' && text[index + 1] === '\n') {
        index++;
      }
      row.push(sanitizeCellValue(current));
      current = '';
      if (row.some(cell => cell.length > 0)) {
        rows.push(row);
      }
      row = [];
      continue;
    }
    current += character;
  }
  row.push(sanitizeCellValue(current));
  if (row.some(cell => cell.length > 0)) {
    rows.push(row);
  }
  return rows;
}
function parseCsvText(text) {
  const delimiter = detectCsvDelimiter(text);
  const parsedRows = parseCsvRows(text, delimiter);
  if (parsedRows.length < 2) {
    throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('CSV file is empty or missing headers.', 'minimal-map'));
  }
  const headers = parsedRows[0].map(header => header.replace(/^\uFEFF/, '').trim());
  const normalizedHeaders = headers.map(normalizeHeader);
  const rows = parsedRows.slice(1);
  return {
    delimiter,
    headers,
    normalizedHeaders,
    rows
  };
}
async function parseCsvFile(file) {
  return parseCsvText(await file.text());
}
function createEmptyCsvImportMapping() {
  return CUSTOM_CSV_MAPPING_FIELDS.reduce((mapping, field) => {
    mapping[field.key] = null;
    return mapping;
  }, {});
}
function isCommonCsvFormat(parsedCsv) {
  if (parsedCsv.normalizedHeaders.length !== COMMON_CSV_HEADERS.length) {
    return false;
  }
  const sortedHeaders = [...parsedCsv.normalizedHeaders].sort();
  const sortedCommonHeaders = [...COMMON_CSV_HEADERS].sort();
  return sortedHeaders.every((header, index) => header === sortedCommonHeaders[index]);
}
function createImportCollectionTitle(now) {
  const date = now();
  const timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  return `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Import on', 'minimal-map')} ${timestamp}`;
}
function getImportedLocationFallbackTitle() {
  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Imported Location', 'minimal-map');
}
function createBaseImportForm() {
  return {
    title: '',
    telephone: '',
    email: '',
    website: '',
    street: '',
    house_number: '',
    postal_code: '',
    city: '',
    state: '',
    country: '',
    latitude: '',
    longitude: '',
    logo_id: 0,
    marker_id: 0,
    tag_ids: []
  };
}
function getMappedValue(row, columnIndex) {
  if (columnIndex === null || columnIndex < 0 || columnIndex >= row.length) {
    return '';
  }
  return sanitizeCellValue(row[columnIndex] ?? '');
}
function buildMappedLocationForm(row, mapping) {
  const form = createBaseImportForm();
  CUSTOM_CSV_MAPPING_FIELDS.forEach(field => {
    form[field.key] = getMappedValue(row, mapping[field.key]);
  });
  form.title = form.title || getImportedLocationFallbackTitle();
  return form;
}
function buildCommonLocationForm(rowRecord) {
  return {
    ...createBaseImportForm(),
    title: rowRecord.title || getImportedLocationFallbackTitle(),
    street: rowRecord.street || '',
    house_number: rowRecord.house_number || '',
    postal_code: rowRecord.postal_code || '',
    city: rowRecord.city || '',
    state: rowRecord.state || '',
    country: rowRecord.country || '',
    telephone: rowRecord.telephone || '',
    email: rowRecord.email || '',
    website: rowRecord.website || '',
    latitude: rowRecord.latitude || '',
    longitude: rowRecord.longitude || ''
  };
}
function createRowRecord(parsedCsv, row) {
  const record = {};
  parsedCsv.normalizedHeaders.forEach((header, index) => {
    record[header] = sanitizeCellValue(row[index] ?? '');
  });
  return record;
}
function hasRequiredGeocodeFields(form) {
  return form.street.trim().length > 0 && form.house_number.trim().length > 0 && form.postal_code.trim().length > 0 && form.city.trim().length > 0 && form.country.trim().length > 0;
}
function countMappedCsvGeocodeRequests(parsedCsv, mapping) {
  return parsedCsv.rows.reduce((count, row) => {
    return count + (hasRequiredGeocodeFields(buildMappedLocationForm(row, mapping)) ? 1 : 0);
  }, 0);
}
async function maybeCreateImportCollection(config, locationIds, createCollectionFn, now) {
  if (locationIds.length === 0) {
    return;
  }
  await createCollectionFn(config, createImportCollectionTitle(now), locationIds);
}
async function runCommonCsvImport(parsedCsv, locationsConfig, collectionsConfig, dependencies = {}) {
  const createCollectionFn = dependencies.createCollectionFn ?? _collections_createCollection__WEBPACK_IMPORTED_MODULE_1__.createCollection;
  const createLocationFn = dependencies.createLocationFn ?? _createLocation__WEBPACK_IMPORTED_MODULE_2__.createLocation;
  const now = dependencies.now ?? (() => new Date());
  const importedLocationIds = [];
  if (!isCommonCsvFormat(parsedCsv)) {
    throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('CSV file does not match the supported import format.', 'minimal-map'));
  }
  for (const row of parsedCsv.rows) {
    const record = createRowRecord(parsedCsv, row);
    const createdLocation = await createLocationFn(locationsConfig, buildCommonLocationForm(record));
    importedLocationIds.push(createdLocation.id);
  }
  await maybeCreateImportCollection(collectionsConfig, importedLocationIds, createCollectionFn, now);
  return {
    importedCount: importedLocationIds.length,
    importedLocationIds,
    totalGeocodeRequests: 0,
    completedGeocodeRequests: 0
  };
}
async function runMappedCsvImport(parsedCsv, mapping, locationsConfig, collectionsConfig, dependencies = {}) {
  const createCollectionFn = dependencies.createCollectionFn ?? _collections_createCollection__WEBPACK_IMPORTED_MODULE_1__.createCollection;
  const createLocationFn = dependencies.createLocationFn ?? _createLocation__WEBPACK_IMPORTED_MODULE_2__.createLocation;
  const geocodeAddressFn = dependencies.geocodeAddressFn ?? _geocodeAddress__WEBPACK_IMPORTED_MODULE_3__.geocodeAddress;
  const now = dependencies.now ?? (() => new Date());
  const sleepFn = dependencies.sleep ?? sleep;
  const totalGeocodeRequests = countMappedCsvGeocodeRequests(parsedCsv, mapping);
  const importedLocationIds = [];
  let completedGeocodeRequests = 0;
  dependencies.onGeocodeProgress?.(completedGeocodeRequests, totalGeocodeRequests);
  for (const row of parsedCsv.rows) {
    const form = buildMappedLocationForm(row, mapping);
    if (hasRequiredGeocodeFields(form)) {
      try {
        const geocodeResult = await geocodeAddressFn(locationsConfig, form);
        if (geocodeResult.success) {
          form.latitude = `${geocodeResult.lat}`;
          form.longitude = `${geocodeResult.lng}`;
        }
      } catch {
        // Import continues without coordinates when geocoding fails.
      }
      completedGeocodeRequests += 1;
      dependencies.onGeocodeProgress?.(completedGeocodeRequests, totalGeocodeRequests);
      if (completedGeocodeRequests < totalGeocodeRequests) {
        await sleepFn(1000);
      }
    }
    const createdLocation = await createLocationFn(locationsConfig, form);
    importedLocationIds.push(createdLocation.id);
  }
  await maybeCreateImportCollection(collectionsConfig, importedLocationIds, createCollectionFn, now);
  return {
    importedCount: importedLocationIds.length,
    importedLocationIds,
    totalGeocodeRequests,
    completedGeocodeRequests
  };
}
async function importLocations(file, locationsConfig, collectionsConfig) {
  const parsedCsv = await parseCsvFile(file);
  const result = await runCommonCsvImport(parsedCsv, locationsConfig, collectionsConfig);
  return result.importedCount;
}

/***/ },

/***/ "./src/lib/locations/isValidEmail.ts"
/*!*******************************************!*\
  !*** ./src/lib/locations/isValidEmail.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidEmail: () => (/* binding */ isValidEmail)
/* harmony export */ });
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/***/ },

/***/ "./src/lib/locations/isValidWebsite.ts"
/*!*********************************************!*\
  !*** ./src/lib/locations/isValidWebsite.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidWebsite: () => (/* binding */ isValidWebsite)
/* harmony export */ });
/* harmony import */ var _normalizeWebsiteValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeWebsiteValue */ "./src/lib/locations/normalizeWebsiteValue.ts");

function isValidWebsite(website) {
  try {
    new URL((0,_normalizeWebsiteValue__WEBPACK_IMPORTED_MODULE_0__.normalizeWebsiteValue)(website));
    return true;
  } catch {
    return false;
  }
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

/***/ "./src/lib/locations/paginateLocations.ts"
/*!************************************************!*\
  !*** ./src/lib/locations/paginateLocations.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paginateLocations: () => (/* binding */ paginateLocations)
/* harmony export */ });
const DEFAULT_LOCATIONS_PER_PAGE = 5;
function paginateLocations(locations, view) {
  const search = view.search?.toLowerCase() || '';
  const filteredLocations = search ? locations.filter(location => {
    return location.title.toLowerCase().includes(search) || location.street.toLowerCase().includes(search) || location.city.toLowerCase().includes(search) || location.email.toLowerCase().includes(search);
  }) : locations;
  const page = view.page ?? 1;
  const perPage = view.perPage ?? DEFAULT_LOCATIONS_PER_PAGE;
  const totalPages = Math.max(1, Math.ceil(filteredLocations.length / perPage));
  const startIndex = (page - 1) * perPage;
  return {
    locations: filteredLocations.slice(startIndex, startIndex + perPage),
    totalPages
  };
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

/***/ "./src/lib/locations/updateLocationCoordinates.ts"
/*!********************************************************!*\
  !*** ./src/lib/locations/updateLocationCoordinates.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateLocationCoordinates: () => (/* binding */ updateLocationCoordinates)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

async function updateLocationCoordinates(config, locationId, coordinates) {
  await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${config.restPath}/${locationId}`,
    method: 'POST',
    data: {
      meta: {
        latitude: `${coordinates.lat}`,
        longitude: `${coordinates.lng}`
      }
    }
  });
}

/***/ },

/***/ "./src/lib/locations/validateAddressStep.ts"
/*!**************************************************!*\
  !*** ./src/lib/locations/validateAddressStep.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateAddressStep: () => (/* binding */ validateAddressStep)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createEmptyFieldErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEmptyFieldErrors */ "./src/lib/locations/createEmptyFieldErrors.ts");


function validateAddressStep(form) {
  const errors = (0,_createEmptyFieldErrors__WEBPACK_IMPORTED_MODULE_1__.createEmptyFieldErrors)();
  if (!form.street.trim()) {
    errors.street = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Street is required to geocode the address.', 'minimal-map');
  }
  if (!form.house_number.trim()) {
    errors.house_number = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('House number is required to geocode the address.', 'minimal-map');
  }
  if (!form.postal_code.trim()) {
    errors.postal_code = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Postal code is required to geocode the address.', 'minimal-map');
  }
  if (!form.city.trim()) {
    errors.city = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('City is required to geocode the address.', 'minimal-map');
  }
  if (!form.country.trim()) {
    errors.country = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Country is required to geocode the address.', 'minimal-map');
  }
  return errors;
}

/***/ },

/***/ "./src/lib/locations/validateDetailsStep.ts"
/*!**************************************************!*\
  !*** ./src/lib/locations/validateDetailsStep.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateDetailsStep: () => (/* binding */ validateDetailsStep)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createEmptyFieldErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEmptyFieldErrors */ "./src/lib/locations/createEmptyFieldErrors.ts");
/* harmony import */ var _isValidEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isValidEmail */ "./src/lib/locations/isValidEmail.ts");
/* harmony import */ var _isValidWebsite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValidWebsite */ "./src/lib/locations/isValidWebsite.ts");




function validateDetailsStep(form) {
  const errors = (0,_createEmptyFieldErrors__WEBPACK_IMPORTED_MODULE_1__.createEmptyFieldErrors)();
  if (!form.title.trim()) {
    errors.title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A title is required.', 'minimal-map');
  }
  if (form.email.trim() && !(0,_isValidEmail__WEBPACK_IMPORTED_MODULE_2__.isValidEmail)(form.email.trim())) {
    errors.email = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a valid email address.', 'minimal-map');
  }
  if (form.website.trim() && !(0,_isValidWebsite__WEBPACK_IMPORTED_MODULE_3__.isValidWebsite)(form.website.trim())) {
    errors.website = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter a valid website URL.', 'minimal-map');
  }
  return errors;
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

/***/ "./node_modules/lucide-react/dist/esm/icons/copy.js"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/copy.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Copy)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("copy", __iconNode);


//# sourceMappingURL=copy.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js"
/*!**********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ FileSpreadsheet)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
];
const FileSpreadsheet = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("file-spreadsheet", __iconNode);


//# sourceMappingURL=file-spreadsheet.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/locate-fixed.js"
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/locate-fixed.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ LocateFixed)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const LocateFixed = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("locate-fixed", __iconNode);


//# sourceMappingURL=locate-fixed.js.map


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
//# sourceMappingURL=admin-section-locations.js.map