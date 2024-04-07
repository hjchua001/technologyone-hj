"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_TextBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TextBox */ \"(app-pages-browser)/./src/components/TextBox.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = ()=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [convertedValue, setConvertedValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleChange = (event)=>{\n        setValue(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (value.trim() !== \"\") {\n            fetch(\"https://localhost:7244/api/Utility/ConvertInputNumberToWords?input=\".concat(value)).then((response)=>{\n                // console.log('Response:', response);\n                if (!response.ok) {\n                    setIsError(true);\n                } else {\n                    setIsError(false);\n                }\n                return response.text();\n            }).then((data)=>setConvertedValue(data)).catch((error)=>{\n                setConvertedValue(\"\");\n                console.error(\"Error fetching data:\", error);\n            });\n        } else {\n            setConvertedValue(\"\");\n        }\n    }, [\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"p-24\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full lg:flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"https://www.technologyonecorp.com/__data/assets/file/0020/236900/T1_2023_W-and-Y_no_tagline.svg\",\n                        alt: \"technology one\",\n                        width: 220,\n                        height: 35\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto bg-gray-900 p-6 rounded-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4 text-2xl font-bold text-gray-300\",\n                            children: \"Convert number to words\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"block text-gray-300\",\n                                    children: \"Input:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    id: \"input\",\n                                    value: value,\n                                    onChange: handleChange,\n                                    placeholder: \"Enter number here\",\n                                    className: \"px-4 py-4 mt-1 w-full bg-gray-800 text-gray-300 border-gray-700 rounded-md\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"block text-gray-300\",\n                                    children: \"Output:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"output\",\n                                    className: \"px-4 py-4 mt-1 w-full bg-gray-900 \".concat(isError ? \"text-red-300\" : \"text-gray-300\"),\n                                    children: convertedValue\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\technologyone\\\\nextjs-webpage-technologyone-hj\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Page, \"+hLevdhaqOuVRCYg84u9yKetTzk=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFK0I7QUFDb0I7QUFDUDtBQUU1QyxNQUFNSyxPQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFVO0lBRWhELE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJOLFNBQVNNLE1BQU1DLE1BQU0sQ0FBQ1IsS0FBSztJQUM3QjtJQUVBSCxnREFBU0EsQ0FBQztRQUNSLElBQUlHLE1BQU1TLElBQUksT0FBTyxJQUFJO1lBQ3ZCQyxNQUFNLHNFQUE0RSxPQUFOVixRQUN6RVcsSUFBSSxDQUFDQyxDQUFBQTtnQkFDSixzQ0FBc0M7Z0JBQ3RDLElBQUksQ0FBQ0EsU0FBU0MsRUFBRSxFQUFFO29CQUNoQlIsV0FBVztnQkFDYixPQUFPO29CQUNMQSxXQUFXO2dCQUNiO2dCQUNBLE9BQU9PLFNBQVNFLElBQUk7WUFDdEIsR0FDQ0gsSUFBSSxDQUFDSSxDQUFBQSxPQUFRWixrQkFBa0JZLE9BQy9CQyxLQUFLLENBQUNDLENBQUFBO2dCQUNMZCxrQkFBa0I7Z0JBQ2xCZSxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNKLE9BQU87WUFDTGQsa0JBQWtCO1FBQ3BCO0lBQ0YsR0FBRztRQUFDSDtLQUFNO0lBRVYscUJBQ0U7a0JBQ0EsNEVBQUNtQjtZQUFLQyxXQUFVOzs4QkFDZCw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1QsNEVBQUMxQixrREFBS0E7d0JBQ0o0QixLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUNDOzs7Ozs4QkFDRCw4REFBQ0w7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTtzQ0FBd0M7Ozs7OztzQ0FHdkQsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ087b0NBQUtQLFdBQVU7OENBQXNCOzs7Ozs7OENBQ3RDLDhEQUFDdEIsMkRBQU9BO29DQUNOOEIsSUFBRztvQ0FDSDVCLE9BQU9BO29DQUNQNkIsVUFBVXZCO29DQUNWd0IsYUFBWTtvQ0FDWlYsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNPO29DQUFLUCxXQUFVOzhDQUFzQjs7Ozs7OzhDQUN0Qyw4REFBQ0M7b0NBQUlPLElBQUc7b0NBQVNSLFdBQVcscUNBQWdGLE9BQTNDaEIsVUFBVSxpQkFBaUI7OENBQW9CRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xSDtHQWpFTUg7S0FBQUE7QUFtRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRleHRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0Qm94JztcclxuXHJcbmNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW2NvbnZlcnRlZFZhbHVlLCBzZXRDb252ZXJ0ZWRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9sb2NhbGhvc3Q6NzI0NC9hcGkvVXRpbGl0eS9Db252ZXJ0SW5wdXROdW1iZXJUb1dvcmRzP2lucHV0PSR7dmFsdWV9YClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRDb252ZXJ0ZWRWYWx1ZShkYXRhKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgc2V0Q29udmVydGVkVmFsdWUoJycpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDb252ZXJ0ZWRWYWx1ZSgnJyk7XHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicC0yNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzpmbGV4XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnRlY2hub2xvZ3lvbmVjb3JwLmNvbS9fX2RhdGEvYXNzZXRzL2ZpbGUvMDAyMC8yMzY5MDAvVDFfMjAyM19XLWFuZC1ZX25vX3RhZ2xpbmUuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJ0ZWNobm9sb2d5IG9uZVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezIyMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBiZy1ncmF5LTkwMCBwLTYgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgQ29udmVydCBudW1iZXIgdG8gd29yZHNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS0zMDBcIj5JbnB1dDo8L3NwYW4+XHJcbiAgICAgICAgICA8VGV4dEJveFxyXG4gICAgICAgICAgICBpZD1cImlucHV0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG51bWJlciBoZXJlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS00IG10LTEgdy1mdWxsIGJnLWdyYXktODAwIHRleHQtZ3JheS0zMDAgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS0zMDBcIj5PdXRwdXQ6PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm91dHB1dFwiIGNsYXNzTmFtZT17YHB4LTQgcHktNCBtdC0xIHctZnVsbCBiZy1ncmF5LTkwMCAke2lzRXJyb3IgPyAndGV4dC1yZWQtMzAwJyA6ICd0ZXh0LWdyYXktMzAwJ31gfT57Y29udmVydGVkVmFsdWV9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvbWFpbj5cclxuICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXh0Qm94IiwiUGFnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJjb252ZXJ0ZWRWYWx1ZSIsInNldENvbnZlcnRlZFZhbHVlIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInRyaW0iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwidGV4dCIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJyIiwic3BhbiIsImlkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});