"use strict";
(globalThis["webpackChunkminimal_map"] = globalThis["webpackChunkminimal_map"] || []).push([["admin-section-collections"],{

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

/***/ "./src/admin/collections/CollectionAssignmentModal.tsx"
/*!*************************************************************!*\
  !*** ./src/admin/collections/CollectionAssignmentModal.tsx ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollectionAssignmentModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dataviews/wp */ "./node_modules/@wordpress/dataviews/build-wp/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_locations_formatLocationAddressLines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/locations/formatLocationAddressLines */ "./src/lib/locations/formatLocationAddressLines.ts");
/* harmony import */ var _lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/locations/shouldHandleDialogEnter */ "./src/lib/locations/shouldHandleDialogEnter.ts");
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function useLocationFields() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [{
    id: 'title',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false
  }, {
    id: 'address',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Address', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => (0,_lib_locations_formatLocationAddressLines__WEBPACK_IMPORTED_MODULE_4__.formatLocationAddressLines)(item).join(', ')
  }], []);
}
function CollectionAssignmentModal({
  controller
}) {
  const fields = useLocationFields();
  if (!controller.isAssignmentModalOpen || !controller.selectedAssignmentCollection) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__collection-assignment-modal",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Assign locations', 'minimal-map'),
    focusOnMount: "firstInputElement",
    onKeyDown: event => {
      const target = event.target;
      const isHTMLElement = target instanceof HTMLElement;
      if (controller.isAssignmentSaving || isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]') || !(0,_lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_5__.shouldHandleDialogEnter)(event)) {
        return;
      }
      event.preventDefault();
      void controller.onSaveAssignments();
    },
    onRequestClose: controller.onCloseAssignmentModal,
    shouldCloseOnClickOutside: !controller.isAssignmentSaving,
    shouldCloseOnEsc: !controller.isAssignmentSaving,
    title: controller.selectedAssignmentCollection.title,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "minimal-map-admin__collection-assignment-dialog",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SearchControl, {
        __nextHasNoMarginBottom: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search locations', 'minimal-map'),
        value: controller.assignmentSearch,
        onChange: controller.onChangeAssignmentSearch
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViewsPicker, {
        data: controller.assignmentLocations,
        defaultLayouts: {
          pickerTable: {}
        },
        fields: fields,
        getItemId: item => `${item.id}`,
        itemListLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Locations', 'minimal-map'),
        paginationInfo: {
          totalItems: controller.filteredAssignmentLocationsCount,
          totalPages: Math.max(1, Math.ceil(controller.filteredAssignmentLocationsCount / (controller.assignmentLocationsView.perPage ?? 5)))
        },
        search: false,
        selection: controller.selectedLocationIds.map(locationId => `${locationId}`),
        view: controller.assignmentLocationsView,
        onChangeSelection: controller.onChangeAssignmentLocationsSelection,
        onChangeView: nextView => controller.onChangeAssignmentLocationsView(nextView),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViewsPicker.Layout, {
          className: "minimal-map-admin__collections-assignment-table"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViewsPicker.BulkActionToolbar, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "minimal-map-admin__collection-assignment-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: controller.onCloseAssignmentModal,
          disabled: controller.isAssignmentSaving,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          onClick: () => void controller.onSaveAssignments(),
          isBusy: controller.isAssignmentSaving,
          disabled: controller.isAssignmentSaving,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save locations', 'minimal-map')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ "./src/admin/collections/CollectionDialog.tsx"
/*!****************************************************!*\
  !*** ./src/admin/collections/CollectionDialog.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollectionDialog)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/locations/shouldHandleDialogEnter */ "./src/lib/locations/shouldHandleDialogEnter.ts");
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CollectionDialog({
  controller
}) {
  if (!controller.isDialogOpen) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__collection-modal",
    contentLabel: controller.modalTitle,
    focusOnMount: "firstInputElement",
    onKeyDown: event => {
      const target = event.target;
      const isHTMLElement = target instanceof HTMLElement;
      if (controller.isSubmitting || isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]') || !(0,_lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_2__.shouldHandleDialogEnter)(event)) {
        return;
      }
      event.preventDefault();
      void controller.onConfirm();
    },
    onRequestClose: controller.onCancel,
    shouldCloseOnClickOutside: !controller.isSubmitting,
    shouldCloseOnEsc: !controller.isSubmitting,
    title: controller.modalTitle,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "minimal-map-admin__collection-dialog",
      children: [controller.submitError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "error",
        isDismissible: false,
        children: controller.submitError
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        __next40pxDefaultSize: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'minimal-map'),
        value: controller.form.title,
        onChange: value => controller.onChangeFormValue('title', value)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "minimal-map-admin__collection-dialog-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: controller.onCancel,
          disabled: controller.isSubmitting,
          "data-minimal-map-dialog-ignore-enter": "true",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          onClick: () => void controller.onConfirm(),
          disabled: controller.isSubmitting,
          isBusy: controller.isSubmitting,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "minimal-map-admin__location-dialog-button-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: controller.submitLabel
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

/***/ "./src/admin/collections/CollectionsEmptyState.tsx"
/*!*********************************************************!*\
  !*** ./src/admin/collections/CollectionsEmptyState.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollectionsEmptyState)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/layers.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/EmptyState */ "./src/components/EmptyState/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




function CollectionsEmptyState({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No collections found', 'minimal-map'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Create collections to organize your locations into groups. This makes it easier to manage and display sets of locations on your maps.', 'minimal-map'),
    action: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add collection', 'minimal-map'),
      onClick: controller.onAddCollection,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    }
  });
}

/***/ },

/***/ "./src/admin/collections/CollectionsGrid.tsx"
/*!***************************************************!*\
  !*** ./src/admin/collections/CollectionsGrid.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollectionsGrid)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dataviews/wp */ "./node_modules/@wordpress/dataviews/build-wp/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pencil.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _components_CollectionMiniMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CollectionMiniMap */ "./src/components/CollectionMiniMap.tsx");
/* harmony import */ var _DeleteCollectionActionModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteCollectionActionModal */ "./src/admin/collections/DeleteCollectionActionModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);








function useCollectionFields(locations, onOpenAssignmentModal, activeTheme) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [{
    id: "map_preview",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Map preview", "minimal-map"),
    type: "media",
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_CollectionMiniMap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      collection: item,
      locations: locations,
      theme: activeTheme
    })
  }, {
    id: "title",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Title", "minimal-map"),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    enableGlobalSearch: true
  }, {
    id: "add_locations",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Locations", "minimal-map"),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      variant: "secondary",
      className: "minimal-map-admin__collection-grid-button",
      onClick: event => {
        event.preventDefault();
        event.stopPropagation();
        onOpenAssignmentModal(item);
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Add locations", "minimal-map")
    })
  }], [locations, onOpenAssignmentModal, activeTheme]);
}
function useCollectionActions(isRowActionPending, onEditCollection, onDeleteCollection) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [{
    id: "edit-collection",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Edit", "minimal-map"),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: "single",
    disabled: isRowActionPending,
    supportsBulk: false,
    callback: items => {
      if (!items[0]) {
        return;
      }
      onEditCollection(items[0]);
    }
  }, {
    id: "delete-collection",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Delete", "minimal-map"),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 16,
      strokeWidth: 2
    }),
    context: "single",
    disabled: isRowActionPending,
    supportsBulk: false,
    modalHeader: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Delete collection", "minimal-map"),
    RenderModal: ({
      items,
      closeModal,
      onActionPerformed
    }) => {
      if (!items[0]) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {});
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DeleteCollectionActionModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        collection: items[0],
        onDelete: onDeleteCollection,
        closeModal: closeModal,
        onActionPerformed: onActionPerformed
      });
    }
  }], [isRowActionPending, onDeleteCollection, onEditCollection]);
}
function CollectionsGrid({
  controller
}) {
  const actions = useCollectionActions(controller.isRowActionPending, controller.onEditCollection, controller.onDeleteCollection);
  const fields = useCollectionFields(controller.locations, controller.onOpenAssignmentModal, controller.activeTheme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "minimal-map-admin__collections-grid-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViews, {
      actions: actions,
      data: controller.paginatedCollections,
      defaultLayouts: {
        grid: {}
      },
      fields: fields,
      getItemId: item => `${item.id}`,
      paginationInfo: {
        totalItems: controller.collections.length,
        totalPages: controller.totalPages
      },
      view: controller.view,
      onChangeView: nextView => controller.onChangeView(nextView),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "minimal-map-admin__collections-dataviews-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViews.Search, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViews.Layout, {
        className: "minimal-map-admin__collections-grid-layout"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViews.Footer, {})]
    })
  });
}

/***/ },

/***/ "./src/admin/collections/DeleteCollectionActionModal.tsx"
/*!***************************************************************!*\
  !*** ./src/admin/collections/DeleteCollectionActionModal.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteCollectionActionModal)
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






function DeleteCollectionActionModal({
  closeModal,
  collection,
  onActionPerformed,
  onDelete
}) {
  const [errorMessage, setErrorMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [isDeleting, setDeleting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    containerRef.current?.focus();
  }, []);
  const handleDelete = async () => {
    setDeleting(true);
    setErrorMessage(null);
    try {
      await onDelete(collection);
      onActionPerformed?.([collection]);
      closeModal?.();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection could not be deleted.", "minimal-map"));
    } finally {
      setDeleting(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ref: containerRef,
    className: "minimal-map-admin__collection-delete-dialog",
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
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete this collection and remove its saved location assignments?", "minimal-map")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "minimal-map-admin__collection-delete-dialog-title",
      children: collection.title
    }), errorMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "minimal-map-admin__collection-delete-dialog-error",
      children: errorMessage
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "minimal-map-admin__collection-delete-dialog-actions",
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
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete collection", "minimal-map")
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

/***/ "./src/admin/collections/MergeCollectionsModal.tsx"
/*!*********************************************************!*\
  !*** ./src/admin/collections/MergeCollectionsModal.tsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MergeCollectionsModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dataviews/wp */ "./node_modules/@wordpress/dataviews/build-wp/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-left.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/locations/shouldHandleDialogEnter */ "./src/lib/locations/shouldHandleDialogEnter.ts");
/* harmony import */ var _components_Kbd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Kbd */ "./src/components/Kbd/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function useCollectionFields() {
  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => [{
    id: 'title',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false
  }, {
    id: 'location_count',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Locations', 'minimal-map'),
    enableHiding: false,
    enableSorting: false,
    filterBy: false,
    render: ({
      item
    }) => item.location_ids.length
  }], []);
}
function MergeCollectionsModal({
  controller
}) {
  const fields = useCollectionFields();
  if (!controller.isMergeModalOpen) {
    return null;
  }
  const modalTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Merge collections', 'minimal-map');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    className: "minimal-map-admin__collection-modal",
    contentLabel: modalTitle,
    focusOnMount: "firstInputElement",
    onRequestClose: controller.onCloseMergeModal,
    shouldCloseOnClickOutside: !controller.isMerging,
    shouldCloseOnEsc: !controller.isMerging,
    title: modalTitle,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "minimal-map-admin__collection-dialog",
      onKeyDown: event => {
        const target = event.target;
        const isHTMLElement = target instanceof HTMLElement;
        if (controller.isMerging || isHTMLElement && target.closest('[data-minimal-map-dialog-ignore-enter="true"]') || !(0,_lib_locations_shouldHandleDialogEnter__WEBPACK_IMPORTED_MODULE_5__.shouldHandleDialogEnter)(event)) {
          return;
        }
        event.preventDefault();
        void controller.onMergeConfirm();
      },
      children: [controller.submitError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
        status: "error",
        isDismissible: false,
        children: controller.submitError
      }), controller.mergeStep === 'selection' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "minimal-map-admin__assign-to-collection-dialog",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "minimal-map-admin__assign-to-collection-copy",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select at least two collections to merge into a new one.', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViewsPicker, {
          data: controller.collections,
          defaultLayouts: {
            pickerTable: {}
          },
          fields: fields,
          getItemId: item => `${item.id}`,
          itemListLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Collections', 'minimal-map'),
          paginationInfo: {
            totalItems: controller.collections.length,
            totalPages: 1
          },
          search: false,
          selection: controller.selectedMergeCollectionIds.map(id => `${id}`),
          view: controller.mergeSelectionView,
          onChangeSelection: controller.onChangeMergeSelection,
          onChangeView: nextView => controller.onChangeMergeView(nextView),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViewsPicker.Layout, {
            className: "minimal-map-admin__collections-assignment-table"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_dataviews_wp__WEBPACK_IMPORTED_MODULE_1__.DataViewsPicker.BulkActionToolbar, {})]
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "minimal-map-admin__location-dialog-fields",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          __nextHasNoMarginBottom: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('New collection title', 'minimal-map'),
          value: controller.mergeTitle,
          onChange: controller.onChangeMergeTitle,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter a name for the merged collection...', 'minimal-map')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
          __nextHasNoMarginBottom: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete original collections after merge', 'minimal-map'),
          checked: controller.shouldDeleteAfterMerge,
          onChange: controller.onToggleDeleteAfterMerge
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "minimal-map-admin__location-dialog-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "minimal-map-admin__location-dialog-footer-start",
          children: controller.mergeStep === 'details' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: controller.onMergeBack,
            disabled: controller.isMerging,
            "data-minimal-map-dialog-ignore-enter": "true",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              size: 18,
              strokeWidth: 2
            }),
            iconPosition: "left",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'minimal-map')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "minimal-map-admin__location-dialog-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: controller.onCloseMergeModal,
            disabled: controller.isMerging,
            "data-minimal-map-dialog-ignore-enter": "true",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cancel', 'minimal-map')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "primary",
            onClick: () => {
              void controller.onMergeConfirm();
            },
            disabled: controller.isMerging || controller.selectedMergeCollectionIds.length < 2,
            isBusy: controller.isMerging,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
              className: "minimal-map-admin__location-dialog-button-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: controller.mergeStep === 'selection' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Next', 'minimal-map') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Finish', 'minimal-map')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Kbd__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ "./src/admin/collections/constants.ts"
/*!********************************************!*\
  !*** ./src/admin/collections/constants.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ASSIGNMENT_VIEW: () => (/* binding */ DEFAULT_ASSIGNMENT_VIEW),
/* harmony export */   DEFAULT_FORM_STATE: () => (/* binding */ DEFAULT_FORM_STATE),
/* harmony export */   DEFAULT_GRID_VIEW: () => (/* binding */ DEFAULT_GRID_VIEW)
/* harmony export */ });
const DEFAULT_FORM_STATE = {
  title: ''
};
const DEFAULT_GRID_VIEW = {
  type: 'grid',
  page: 1,
  perPage: 9,
  titleField: 'title',
  mediaField: 'map_preview',
  fields: ['add_locations'],
  showMedia: true,
  showTitle: true,
  showDescription: false,
  layout: {
    previewSize: 280,
    badgeFields: []
  }
};
const DEFAULT_ASSIGNMENT_VIEW = {
  type: 'pickerTable',
  page: 1,
  perPage: 5,
  fields: ['title', 'address'],
  layout: {
    enableMoving: false
  }
};

/***/ },

/***/ "./src/admin/collections/controller.tsx"
/*!**********************************************!*\
  !*** ./src/admin/collections/controller.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCollectionsController: () => (/* binding */ useCollectionsController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/merge.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/admin/collections/constants.ts");
/* harmony import */ var _lib_locations_configureApiFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/locations/configureApiFetch */ "./src/lib/locations/configureApiFetch.ts");
/* harmony import */ var _lib_locations_fetchAllLocations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/locations/fetchAllLocations */ "./src/lib/locations/fetchAllLocations.ts");
/* harmony import */ var _lib_locations_paginateLocations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/locations/paginateLocations */ "./src/lib/locations/paginateLocations.ts");
/* harmony import */ var _lib_collections_createCollection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/collections/createCollection */ "./src/lib/collections/createCollection.ts");
/* harmony import */ var _lib_collections_deleteCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/collections/deleteCollection */ "./src/lib/collections/deleteCollection.ts");
/* harmony import */ var _lib_collections_fetchAllCollections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/collections/fetchAllCollections */ "./src/lib/collections/fetchAllCollections.ts");
/* harmony import */ var _lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/locations/importLocations */ "./src/lib/locations/importLocations.ts");
/* harmony import */ var _lib_collections_filterLocationsForAssignment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/collections/filterLocationsForAssignment */ "./src/lib/collections/filterLocationsForAssignment.ts");
/* harmony import */ var _lib_collections_paginateCollections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/collections/paginateCollections */ "./src/lib/collections/paginateCollections.ts");
/* harmony import */ var _lib_collections_updateCollection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/collections/updateCollection */ "./src/lib/collections/updateCollection.ts");
/* harmony import */ var _locations_ImportLocationsButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../locations/ImportLocationsButton */ "./src/admin/locations/ImportLocationsButton.tsx");
/* harmony import */ var _styles_ThemeSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/ThemeSelector */ "./src/admin/styles/ThemeSelector.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);


















function useCollectionsController(collectionsConfig, locationsConfig, enabled, themeData) {
  const [actionNotice, setActionNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [assignmentSearch, setAssignmentSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [assignmentLocationsView, setAssignmentLocationsView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ASSIGNMENT_VIEW);
  const [collections, setCollections] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [editingCollection, setEditingCollection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [form, setForm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_FORM_STATE);
  const [formMode, setFormMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("create");
  const [isAssignmentModalOpen, setAssignmentModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isAssignmentSaving, setAssignmentSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isDialogOpen, setDialogOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isLoading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(enabled);
  const [isRowActionPending, setRowActionPending] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isSubmitting, setSubmitting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isMergeModalOpen, setMergeModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isMerging, setMerging] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [mergeStep, setMergeStep] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("selection");
  const [selectedMergeCollectionIds, setSelectedMergeCollectionIds] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [mergeTitle, setMergeTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [shouldDeleteAfterMerge, setShouldDeleteAfterMerge] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [mergeSelectionView, setMergeSelectionView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)({
    type: "pickerTable",
    page: 1,
    perPage: 100,
    fields: ["title", "location_count"],
    layout: {
      enableMoving: false
    }
  });
  const [loadError, setLoadError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [locations, setLocations] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [selectedAssignmentCollection, setSelectedAssignmentCollection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [selectedLocationIds, setSelectedLocationIds] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [submitError, setSubmitError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [view, setView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_GRID_VIEW);
  const [isImporting, setIsImporting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  // The lock prevents DataViewsPicker from clearing selection during unmount transition
  const isMergeSelectionLocked = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  const loadCollections = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    const records = await (0,_lib_collections_fetchAllCollections__WEBPACK_IMPORTED_MODULE_11__.fetchAllCollections)(collectionsConfig);
    setCollections(records);
  }, [collectionsConfig]);
  const loadLocations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    const records = await (0,_lib_locations_fetchAllLocations__WEBPACK_IMPORTED_MODULE_7__.fetchAllLocations)(locationsConfig);
    setLocations(records);
  }, [locationsConfig]);
  const loadData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!enabled) {
      return;
    }
    setLoading(true);
    setLoadError(null);
    try {
      await Promise.all([loadCollections(), loadLocations()]);
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collections could not be loaded.", "minimal-map"));
    } finally {
      setLoading(false);
    }
  }, [enabled, loadCollections, loadLocations]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_lib_locations_configureApiFetch__WEBPACK_IMPORTED_MODULE_6__.configureApiFetch)(collectionsConfig.nonce || locationsConfig.nonce);
    if (!enabled) {
      return;
    }
    void loadData();
  }, [collectionsConfig.nonce, enabled, loadData, locationsConfig.nonce]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setView(currentView => ({
      ...currentView,
      page: 1
    }));
  }, [collections.length, view.search]);
  const locationsById = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => new Map(locations.map(location => [location.id, location])), [locations]);
  const assignmentLocationsFiltered = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_lib_collections_filterLocationsForAssignment__WEBPACK_IMPORTED_MODULE_13__.filterLocationsForAssignment)(locations, assignmentSearch), [assignmentSearch, locations]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setAssignmentLocationsView(currentView => ({
      ...currentView,
      page: 1
    }));
  }, [assignmentSearch]);
  const {
    collections: paginatedCollections,
    totalPages
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_lib_collections_paginateCollections__WEBPACK_IMPORTED_MODULE_14__.paginateCollections)(collections, view), [collections, view]);
  const {
    locations: paginatedAssignmentLocations
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_lib_locations_paginateLocations__WEBPACK_IMPORTED_MODULE_8__.paginateLocations)(assignmentLocationsFiltered, assignmentLocationsView), [assignmentLocationsFiltered, assignmentLocationsView]);
  const resetDialogState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setEditingCollection(null);
    setForm(_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_FORM_STATE);
    setFormMode("create");
    setSubmitError(null);
  }, []);
  const dismissActionNotice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setActionNotice(null);
  }, []);
  const openDialog = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    resetDialogState();
    setDialogOpen(true);
  }, [resetDialogState]);
  const onEditCollection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(collection => {
    resetDialogState();
    setEditingCollection(collection);
    setFormMode("edit");
    setForm({
      title: collection.title
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
    if (!form.title.trim()) {
      setSubmitError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection title is required.", "minimal-map"));
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    setActionNotice(null);
    try {
      if (formMode === "edit" && editingCollection) {
        await (0,_lib_collections_updateCollection__WEBPACK_IMPORTED_MODULE_15__.updateCollection)(collectionsConfig, editingCollection.id, form.title, editingCollection.location_ids);
      } else {
        await (0,_lib_collections_createCollection__WEBPACK_IMPORTED_MODULE_9__.createCollection)(collectionsConfig, form.title);
      }
      await loadCollections();
      setDialogOpen(false);
      resetDialogState();
      setActionNotice({
        status: "success",
        message: formMode === "edit" ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection updated.", "minimal-map") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection created.", "minimal-map")
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : formMode === "edit" ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection could not be updated.", "minimal-map") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection could not be created.", "minimal-map"));
    } finally {
      setSubmitting(false);
    }
  }, [form, formMode, editingCollection, collectionsConfig, loadCollections, resetDialogState]);
  const onDeleteCollection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async collection => {
    setRowActionPending(true);
    setActionNotice(null);
    try {
      await (0,_lib_collections_deleteCollection__WEBPACK_IMPORTED_MODULE_10__.deleteCollection)(collectionsConfig, collection.id);
      await loadCollections();
      setActionNotice({
        status: "success",
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection deleted.", "minimal-map")
      });
    } catch (error) {
      setActionNotice({
        status: "error",
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection could not be deleted.", "minimal-map")
      });
      throw error;
    } finally {
      setRowActionPending(false);
    }
  }, [collectionsConfig, loadCollections]);
  const onOpenAssignmentModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(collection => {
    setSelectedAssignmentCollection(collection);
    setSelectedLocationIds(collection.location_ids);
    setAssignmentSearch("");
    setAssignmentLocationsView(_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ASSIGNMENT_VIEW);
    setAssignmentModalOpen(true);
  }, []);
  const onCloseAssignmentModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (isAssignmentSaving) {
      return;
    }
    setAssignmentModalOpen(false);
    setSelectedAssignmentCollection(null);
    setSelectedLocationIds([]);
    setAssignmentSearch("");
  }, [isAssignmentSaving]);
  const onChangeAssignmentLocationsSelection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(nextSelection => {
    const nextLocationIds = nextSelection.map(locationId => Number.parseInt(locationId, 10)).filter(locationId => Number.isInteger(locationId) && locationsById.has(locationId));
    setSelectedLocationIds(nextLocationIds);
  }, [locationsById]);
  const onSaveAssignments = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (!selectedAssignmentCollection) {
      return;
    }
    setAssignmentSaving(true);
    setActionNotice(null);
    try {
      await (0,_lib_collections_updateCollection__WEBPACK_IMPORTED_MODULE_15__.updateCollection)(collectionsConfig, selectedAssignmentCollection.id, selectedAssignmentCollection.title, selectedLocationIds);
      await loadCollections();
      setAssignmentModalOpen(false);
      setSelectedAssignmentCollection(null);
      setSelectedLocationIds([]);
      setActionNotice({
        status: "success",
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection locations saved.", "minimal-map")
      });
    } catch (error) {
      setActionNotice({
        status: "error",
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection locations could not be saved.", "minimal-map")
      });
    } finally {
      setAssignmentSaving(false);
    }
  }, [selectedAssignmentCollection, selectedLocationIds, collectionsConfig, loadCollections]);
  const onOpenMergeModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    isMergeSelectionLocked.current = false;
    setMergeStep("selection");
    setSelectedMergeCollectionIds([]);
    setMergeTitle("");
    setShouldDeleteAfterMerge(false);
    setSubmitError(null);
    setMergeModalOpen(true);
  }, []);
  const onCloseMergeModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (isMerging) {
      return;
    }
    setMergeModalOpen(false);
  }, [isMerging]);
  const onMergeConfirm = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (mergeStep === "selection") {
      if (selectedMergeCollectionIds.length < 2) {
        setSubmitError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select at least two collections to merge.", "minimal-map"));
        return;
      }
      setSubmitError(null);
      // Lock selection immediately to prevent unmount-triggered changes
      isMergeSelectionLocked.current = true;
      setMergeStep("details");
      return;
    }
    if (!mergeTitle.trim()) {
      setSubmitError((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collection title is required.", "minimal-map"));
      return;
    }
    setMerging(true);
    setSubmitError(null);
    setActionNotice(null);
    try {
      // 1. Gather all unique location IDs
      const allLocationIds = new Set();
      console.log('Final merge started. IDs:', selectedMergeCollectionIds);
      collections.forEach(collection => {
        if (selectedMergeCollectionIds.includes(collection.id)) {
          console.log(`Adding locations from collection ${collection.id}:`, collection.location_ids);
          collection.location_ids.forEach(id => allLocationIds.add(id));
        }
      });

      // 2. Create new collection
      console.log('Creating new merged collection with locations:', Array.from(allLocationIds));
      await (0,_lib_collections_createCollection__WEBPACK_IMPORTED_MODULE_9__.createCollection)(collectionsConfig, mergeTitle, Array.from(allLocationIds));

      // 3. Delete old collections if requested
      if (shouldDeleteAfterMerge) {
        const idsToDelete = [...selectedMergeCollectionIds];
        console.log('Deleting original collections:', idsToDelete);
        for (const id of idsToDelete) {
          console.log(`Deleting collection ${id}...`);
          await (0,_lib_collections_deleteCollection__WEBPACK_IMPORTED_MODULE_10__.deleteCollection)(collectionsConfig, id);
          console.log(`Deleted collection ${id}.`);
        }
      }
      console.log('Merge complete. Reloading...');
      await loadCollections();
      setMergeModalOpen(false);
      setActionNotice({
        status: "success",
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collections merged successfully.", "minimal-map")
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Collections could not be merged.", "minimal-map"));
    } finally {
      setMerging(false);
    }
  }, [mergeStep, selectedMergeCollectionIds, mergeTitle, collections, collectionsConfig, shouldDeleteAfterMerge, loadCollections]);
  const onMergeBack = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (isMerging) {
      return;
    }
    isMergeSelectionLocked.current = false;
    setMergeStep("selection");
  }, [isMerging]);
  const onChangeMergeSelection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(nextSelection => {
    // Ignore updates if locked (transitioning) or not in selection step
    if (isMergeSelectionLocked.current || mergeStep !== "selection") {
      console.log('onChangeMergeSelection ignored (locked or wrong step)');
      return;
    }
    console.log('onChangeMergeSelection updated:', nextSelection);
    const nextIds = nextSelection.map(id => Number.parseInt(id, 10)).filter(id => !Number.isNaN(id));
    setSelectedMergeCollectionIds(nextIds);
    setSubmitError(null);
  }, [mergeStep]);
  const onChangeMergeTitle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(value => {
    setMergeTitle(value);
    setSubmitError(null);
  }, []);
  const onToggleDeleteAfterMerge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setShouldDeleteAfterMerge(current => !current);
  }, []);
  const onImportLocations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async file => {
    setIsImporting(true);
    setActionNotice(null);
    try {
      const count = await (0,_lib_locations_importLocations__WEBPACK_IMPORTED_MODULE_12__.importLocations)(file, locationsConfig, collectionsConfig);
      await loadCollections();
      setActionNotice({
        status: "success",
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d location imported and assigned to a new collection.", "%d locations imported and assigned to a new collection.", count, "minimal-map"), count)
      });
    } catch (error) {
      setActionNotice({
        status: "error",
        message: error instanceof Error ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Failed to import locations.", "minimal-map")
      });
    } finally {
      setIsImporting(false);
    }
  }, [locationsConfig, collectionsConfig, loadCollections]);
  return {
    actionNotice,
    activeTheme: themeData.activeTheme,
    assignmentLocations: paginatedAssignmentLocations,
    assignmentSearch,
    assignmentLocationsView,
    collections,
    filteredAssignmentLocationsCount: assignmentLocationsFiltered.length,
    form,
    formMode,
    headerAction: enabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: "minimal-map-admin__header-actions-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_locations_ImportLocationsButton__WEBPACK_IMPORTED_MODULE_16__.ImportLocationsButton, {
        onImport: onImportLocations,
        isImporting: isImporting
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_styles_ThemeSelector__WEBPACK_IMPORTED_MODULE_17__.ThemeSelector, {
        activeTheme: themeData.activeTheme,
        themes: themeData.themes,
        onSwitch: themeData.onSwitchTheme
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        __next40pxDefaultSize: true,
        variant: "secondary",
        onClick: onOpenMergeModal,
        disabled: isRowActionPending,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: 14,
          strokeWidth: 2
        }),
        iconPosition: "left",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Merge collections", "minimal-map")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        __next40pxDefaultSize: true,
        variant: "primary",
        onClick: openDialog,
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          size: 18,
          strokeWidth: 2
        }),
        iconPosition: "left",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add collection", "minimal-map")
      })]
    }) : null,
    isAssignmentModalOpen,
    isAssignmentSaving,
    isDialogOpen,
    isLoading,
    isRowActionPending,
    isSubmitting,
    isMergeModalOpen,
    isMerging,
    isImporting,
    mergeStep,
    mergeSelectionView,
    selectedMergeCollectionIds,
    mergeTitle,
    shouldDeleteAfterMerge,
    loadError,
    locations,
    modalTitle: formMode === "edit" ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit collection", "minimal-map") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add collection", "minimal-map"),
    selectedAssignmentCollection,
    selectedLocationIds,
    submitError,
    submitLabel: formMode === "edit" ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Save changes", "minimal-map") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add collection", "minimal-map"),
    view,
    dismissActionNotice,
    onCancel,
    onChangeAssignmentSearch: setAssignmentSearch,
    onChangeAssignmentLocationsSelection,
    onChangeAssignmentLocationsView: nextView => setAssignmentLocationsView(nextView),
    onChangeFormValue,
    onChangeView: nextView => setView(nextView),
    onCloseAssignmentModal,
    onConfirm,
    onDeleteCollection,
    onEditCollection,
    onOpenAssignmentModal,
    onSaveAssignments,
    onImportLocations,
    onOpenMergeModal,
    onCloseMergeModal,
    onMergeConfirm,
    onMergeBack,
    onChangeMergeSelection,
    onChangeMergeView: nextView => setMergeSelectionView(nextView),
    onChangeMergeTitle,
    onToggleDeleteAfterMerge,
    onAddCollection: openDialog,
    paginatedCollections,
    totalPages: totalPages
  };
}

/***/ },

/***/ "./src/admin/collections/index.tsx"
/*!*****************************************!*\
  !*** ./src/admin/collections/index.tsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollectionsView),
/* harmony export */   useCollectionsController: () => (/* reexport safe */ _controller__WEBPACK_IMPORTED_MODULE_8__.useCollectionsController)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CollectionAssignmentModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionAssignmentModal */ "./src/admin/collections/CollectionAssignmentModal.tsx");
/* harmony import */ var _MergeCollectionsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MergeCollectionsModal */ "./src/admin/collections/MergeCollectionsModal.tsx");
/* harmony import */ var _CollectionDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollectionDialog */ "./src/admin/collections/CollectionDialog.tsx");
/* harmony import */ var _CollectionsEmptyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CollectionsEmptyState */ "./src/admin/collections/CollectionsEmptyState.tsx");
/* harmony import */ var _CollectionsGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CollectionsGrid */ "./src/admin/collections/CollectionsGrid.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller */ "./src/admin/collections/controller.tsx");









function CollectionsView({
  controller
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "minimal-map-admin__collections-view",
    children: [controller.actionNotice ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__collections-notice",
      status: controller.actionNotice.status,
      onRemove: controller.dismissActionNotice,
      children: controller.actionNotice.message
    }) : null, controller.loadError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
      className: "minimal-map-admin__collections-notice",
      status: "error",
      isDismissible: false,
      children: controller.loadError
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "minimal-map-admin__collections-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.DropZone, {
        onFilesDrop: files => {
          const file = files[0];
          if (file) {
            void controller.onImportLocations(file);
          }
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Drop CSV file here to import locations', 'minimal-map')
      }), controller.isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "minimal-map-admin__collections-state minimal-map-admin__collections-state--loading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Spinner, {})
      }) : controller.collections.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CollectionsEmptyState__WEBPACK_IMPORTED_MODULE_5__["default"], {
        controller: controller
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CollectionsGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        controller: controller
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CollectionDialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CollectionAssignmentModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      controller: controller
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_MergeCollectionsModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      controller: controller
    })]
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

/***/ "./src/admin/sections/CollectionsSection.tsx"
/*!***************************************************!*\
  !*** ./src/admin/sections/CollectionsSection.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollectionsSection)
/* harmony export */ });
/* harmony import */ var _ContentHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContentHeader */ "./src/admin/ContentHeader.tsx");
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collections */ "./src/admin/collections/index.tsx");
/* harmony import */ var _styles_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/controller */ "./src/admin/styles/controller.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function CollectionsSection({
  activeSection,
  appConfig
}) {
  const stylesController = (0,_styles_controller__WEBPACK_IMPORTED_MODULE_2__.useStylesController)(appConfig.stylesConfig, true);
  const controller = (0,_collections__WEBPACK_IMPORTED_MODULE_1__.useCollectionsController)(appConfig.collectionsConfig, appConfig.locationsConfig, true, {
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_collections__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ "./src/components/CollectionMiniMap.tsx"
/*!**********************************************!*\
  !*** ./src/components/CollectionMiniMap.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/bootstrap */ "./src/map/bootstrap.ts");
/* harmony import */ var _lib_collections_getCollectionPreviewLocations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/collections/getCollectionPreviewLocations */ "./src/lib/collections/getCollectionPreviewLocations.ts");
/* harmony import */ var _lib_collections_collectionMiniMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/collections/collectionMiniMap */ "./src/lib/collections/collectionMiniMap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CollectionMiniMap({
  collection,
  locations,
  theme
}) {
  const hostRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const mapRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const assignedLocationIdsKey = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => collection.location_ids.join(','), [collection.location_ids]);
  const previewLocations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_lib_collections_getCollectionPreviewLocations__WEBPACK_IMPORTED_MODULE_2__.getCollectionPreviewLocations)(collection, locations), [collection.id, assignedLocationIdsKey, locations]);
  const mapConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    centerLat: 52.517,
    centerLng: 13.388,
    zoom: previewLocations.length > 1 ? 7.5 : 11,
    height: 100,
    heightUnit: '%',
    stylePreset: theme?.basePreset || 'positron',
    styleTheme: theme?.colors,
    showZoomControls: false,
    allowSearch: false,
    markerClassName: 'minimal-map-admin__collection-mini-map-marker',
    markerOffsetY: 0,
    centerOffsetY: 0,
    locations: previewLocations,
    interactive: false,
    showAttribution: false
  }), [previewLocations, theme]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!hostRef.current) {
      return undefined;
    }
    mapRef.current = (0,_map_bootstrap__WEBPACK_IMPORTED_MODULE_1__.createMinimalMap)(hostRef.current, mapConfig, window.MinimalMapAdminConfig?.mapConfig ?? {});
    return () => {
      mapRef.current?.destroy();
      mapRef.current = null;
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mapRef.current?.update(mapConfig);
  }, [mapConfig]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    ref: hostRef,
    className: "minimal-map-admin__collection-mini-map",
    "aria-hidden": "true"
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.memo)(CollectionMiniMap, _lib_collections_collectionMiniMap__WEBPACK_IMPORTED_MODULE_3__.areCollectionMiniMapPropsEqual));

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

/***/ "./src/lib/collections/collectionMiniMap.ts"
/*!**************************************************!*\
  !*** ./src/lib/collections/collectionMiniMap.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areCollectionMiniMapPropsEqual: () => (/* binding */ areCollectionMiniMapPropsEqual),
/* harmony export */   haveSameCollectionLocationIds: () => (/* binding */ haveSameCollectionLocationIds)
/* harmony export */ });
function haveSameCollectionLocationIds(previousLocationIds, nextLocationIds) {
  if (previousLocationIds.length !== nextLocationIds.length) {
    return false;
  }
  for (let index = 0; index < previousLocationIds.length; index += 1) {
    if (previousLocationIds[index] !== nextLocationIds[index]) {
      return false;
    }
  }
  return true;
}
function areCollectionMiniMapPropsEqual(previousProps, nextProps) {
  if (previousProps.collection.id !== nextProps.collection.id) {
    return false;
  }
  if (!haveSameCollectionLocationIds(previousProps.collection.location_ids, nextProps.collection.location_ids)) {
    return false;
  }
  if (previousProps.theme !== nextProps.theme) {
    return false;
  }
  return previousProps.locations === nextProps.locations;
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

/***/ "./src/lib/collections/deleteCollection.ts"
/*!*************************************************!*\
  !*** ./src/lib/collections/deleteCollection.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteCollection: () => (/* binding */ deleteCollection)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

async function deleteCollection(config, collectionId) {
  await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${config.restPath}/${collectionId}?force=true`,
    method: 'DELETE'
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

/***/ "./src/lib/collections/filterLocationsForAssignment.ts"
/*!*************************************************************!*\
  !*** ./src/lib/collections/filterLocationsForAssignment.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterLocationsForAssignment: () => (/* binding */ filterLocationsForAssignment)
/* harmony export */ });
/* harmony import */ var _locations_formatLocationAddressLines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locations/formatLocationAddressLines */ "./src/lib/locations/formatLocationAddressLines.ts");

function filterLocationsForAssignment(locations, searchTerm) {
  const query = searchTerm.trim().toLowerCase();
  if (!query) {
    return locations;
  }
  return locations.filter(location => {
    const address = (0,_locations_formatLocationAddressLines__WEBPACK_IMPORTED_MODULE_0__.formatLocationAddressLines)(location).join(' ');
    const haystack = `${location.title} ${address}`.trim().toLowerCase();
    return haystack.includes(query);
  });
}

/***/ },

/***/ "./src/lib/collections/getCollectionPreviewLocations.ts"
/*!**************************************************************!*\
  !*** ./src/lib/collections/getCollectionPreviewLocations.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCollectionPreviewLocations: () => (/* binding */ getCollectionPreviewLocations)
/* harmony export */ });
const DEFAULT_PREVIEW_SAMPLE_SIZE = 3;
function normalizePoint(location) {
  const lat = Number(location.latitude);
  const lng = Number(location.longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return null;
  }
  return {
    lat,
    lng,
    markerContent: location.markerContent
  };
}
function createSeed(input) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index) >>> 0;
  }
  return hash || 1;
}
function nextSeed(seed) {
  return seed * 1664525 + 1013904223 >>> 0;
}
function getCollectionPreviewLocations(collection, locations, sampleSize = DEFAULT_PREVIEW_SAMPLE_SIZE) {
  const locationsById = new Map(locations.map(location => [location.id, location]));
  const assignedPoints = collection.location_ids.map(locationId => locationsById.get(locationId)).filter(location => Boolean(location)).map(normalizePoint).filter(point => point !== null);
  if (assignedPoints.length > 0) {
    return assignedPoints;
  }
  const availableLocations = locations.filter(location => normalizePoint(location) !== null);
  if (availableLocations.length <= sampleSize) {
    return availableLocations.map(normalizePoint).filter(point => point !== null);
  }
  const sampledPoints = [];
  const chosenIndices = new Set();
  let seed = createSeed(`${collection.id}:${collection.title}`);
  while (sampledPoints.length < sampleSize && chosenIndices.size < availableLocations.length) {
    seed = nextSeed(seed);
    const index = seed % availableLocations.length;
    if (chosenIndices.has(index)) {
      continue;
    }
    chosenIndices.add(index);
    const point = normalizePoint(availableLocations[index]);
    if (point) {
      sampledPoints.push(point);
    }
  }
  return sampledPoints;
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

/***/ "./src/lib/collections/paginateCollections.ts"
/*!****************************************************!*\
  !*** ./src/lib/collections/paginateCollections.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paginateCollections: () => (/* binding */ paginateCollections)
/* harmony export */ });
function paginateCollections(collections, view) {
  const search = view.search?.toLowerCase() || '';
  const filteredCollections = search ? collections.filter(collection => {
    return collection.title.toLowerCase().includes(search);
  }) : collections;
  const page = view.page ?? 1;
  const perPage = view.perPage ?? 10;
  const totalPages = Math.max(1, Math.ceil(filteredCollections.length / perPage));
  const startIndex = (page - 1) * perPage;
  return {
    collections: filteredCollections.slice(startIndex, startIndex + perPage),
    totalPages
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

/***/ "./node_modules/lucide-react/dist/esm/icons/merge.js"
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/merge.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Merge)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
  ["path", { d: "m20 22-5-5", key: "1m27yz" }]
];
const Merge = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("merge", __iconNode);


//# sourceMappingURL=merge.js.map


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
//# sourceMappingURL=admin-section-collections.js.map