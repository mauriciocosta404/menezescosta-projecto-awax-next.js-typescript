"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/price/price.tsx":
/*!****************************************!*\
  !*** ./src/components/price/price.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mock_priceMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/priceMock */ \"./src/components/mock/priceMock.ts\");\n/* harmony import */ var _priceCards_priceCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../priceCards/priceCards */ \"./src/components/priceCards/priceCards.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/components/price/style.ts\");\nvar _this = undefined;\n\n\n\n\nvar Price = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.MainContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mauricio404\\\\Desktop\\\\awax\\\\client\\\\src\\\\components\\\\price\\\\price.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                children: _mock_priceMock__WEBPACK_IMPORTED_MODULE_1__.priceMock.map(function(item, key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_priceCards_priceCards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: item.name,\n                        price: item.price\n                    }, key, false, {\n                        fileName: \"C:\\\\Users\\\\Mauricio404\\\\Desktop\\\\awax\\\\client\\\\src\\\\components\\\\price\\\\price.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mauricio404\\\\Desktop\\\\awax\\\\client\\\\src\\\\components\\\\price\\\\price.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mauricio404\\\\Desktop\\\\awax\\\\client\\\\src\\\\components\\\\price\\\\price.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_c = Price;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Price);\nvar _c;\n$RefreshReg$(_c, \"Price\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcmljZS9wcmljZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQThDO0FBQ0k7QUFDckI7QUFFN0IsSUFBTUcsS0FBSyxHQUFDLFdBQUk7O0lBQ1oscUJBQ0ksOERBQUNELGlEQUFlOzswQkFDWiw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFDLE9BQU87Ozs7O3FCQUVoQjswQkFDTiw4REFBQ0osNkNBQVc7MEJBQ1BGLDBEQUFhLENBQUMsU0FBQ1MsSUFBSSxFQUFDQyxHQUFHO3lDQUNwQiw4REFBQ1QsOERBQVU7d0JBQVdVLElBQUksRUFBRUYsSUFBSSxDQUFDRSxJQUFJO3dCQUFFQyxLQUFLLEVBQUVILElBQUksQ0FBQ0csS0FBSzt1QkFBdkNGLEdBQUc7Ozs7OEJBQW1EO2lCQUMxRSxDQUFDOzs7OztxQkFDUTs7Ozs7O2FBQ0EsQ0FDckI7Q0FDSjtBQWJLUCxLQUFBQSxLQUFLO0FBY1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcmljZS9wcmljZS50c3g/NzBiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmljZU1vY2sgfSBmcm9tICcuLi9tb2NrL3ByaWNlTW9jayc7XHJcbmltcG9ydCBQcmljZUNhcmRzIGZyb20gJy4uL3ByaWNlQ2FyZHMvcHJpY2VDYXJkcyc7XHJcbmltcG9ydCAqIGFzIEMgZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5jb25zdCBQcmljZT0oKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDLk1haW5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEMuQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge3ByaWNlTW9jay5tYXAoKGl0ZW0sa2V5KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZUNhcmRzIGtleT17a2V5fSBuYW1lPXtpdGVtLm5hbWV9IHByaWNlPXtpdGVtLnByaWNlfT48L1ByaWNlQ2FyZHM+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9DLkNvbnRhaW5lcj5cclxuICAgICAgICA8L0MuTWFpbkNvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcmljZTsiXSwibmFtZXMiOlsicHJpY2VNb2NrIiwiUHJpY2VDYXJkcyIsIkMiLCJQcmljZSIsIk1haW5Db250YWluZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJtYXAiLCJpdGVtIiwia2V5IiwibmFtZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/price/price.tsx\n");

/***/ })

});