/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kimhyojin/\\u1111\\u1173\\u1105\\u1169\\u1100\\u1173\\u1105\\u1162\\u1106\\u1175\\u11BC/GitHub/next-project/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar ProfileLink = function ProfileLink(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/p/[profile]\",\n      as: \"/p/\".concat(props.profile),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: [\"Go to \", props.profile, \"'s profile\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ProfileLink;\n\nvar Index = function Index(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Friends List \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileLink, {\n      profile: \"hyojin\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileLink, {\n      profile: \"sangjo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileLink, {\n      profile: \"chunsik\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileLink, {\n      profile: \"ryan\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, _this);\n}; // Index.getInitialProps = async function () {\n//   var xhr = new XMLHttpRequest();\n//   var url =\n//     \"http://openapi.jbfood.go.kr:8080/openapi/service/JeonbukFoodService/getJeonbukFood\"; /*URL*/\n//   var queryParams =\n//     \"?\" + encodeURIComponent(\"ServiceKey\") + \"=\" + \"서비스키\"; /*Service Key*/\n//   queryParams +=\n//     \"&\" + encodeURIComponent(\"Area\") + \"=\" + encodeURIComponent(\"01\"); /**/\n//   xhr.open(\"GET\", url + queryParams);\n//   xhr.onreadystatechange = function () {\n//     if (this.readyState == 4) {\n//       alert(\n//         \"Status: \" +\n//           this.status +\n//           \"nHeaders: \" +\n//           JSON.stringify(this.getAllResponseHeaders()) +\n//           \"nBody: \" +\n//           this.responseText\n//       );\n//     }\n//   };\n//   xhr.send(\"\");\n//   const res = await fetch(url);\n//   const data = await res.json();\n//   return {\n//     profiles: data.map((profile) => profile.name),\n//   };\n// };\n\n\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProfileLink\");\n$RefreshReg$(_c2, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJQcm9maWxlTGluayIsInByb3BzIiwicHJvZmlsZSIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsc0JBQ2xCO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLGdCQUFWO0FBQTRCLFFBQUUsZUFBUUEsS0FBSyxDQUFDQyxPQUFkLENBQTlCO0FBQUEsNkJBQ0U7QUFBQSw2QkFBVUQsS0FBSyxDQUFDQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQXBCOztLQUFNRixXOztBQVFOLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNGLEtBQUQ7QUFBQSxzQkFDWiw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRSw4REFBQyxXQUFEO0FBQWEsYUFBTyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FLDhEQUFDLFdBQUQ7QUFBYSxhQUFPLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUUsOERBQUMsV0FBRDtBQUFhLGFBQU8sRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFTRSw4REFBQyxXQUFEO0FBQWEsYUFBTyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQsQyxDQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7TUE1Q01FLEs7QUE4Q04sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBQcm9maWxlTGluayA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxMaW5rIGhyZWY9e2AvcC9bcHJvZmlsZV1gfSBhcz17YC9wLyR7cHJvcHMucHJvZmlsZX1gfT5cbiAgICAgIDxhPkdvIHRvIHtwcm9wcy5wcm9maWxlfSdzIHByb2ZpbGU8L2E+XG4gICAgPC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkZyaWVuZHMgTGlzdCA8L2gxPlxuICAgIHsvKiB7cHJvcHMucHJvZmlsZXMubWFwKChwcm9maWxlLCBpbmRleCkgPT4gKFxuICAgICAgPFByb2ZpbGVMaW5rIGtleT17aW5kZXh9IHByb2ZpbGU9e3Byb2ZpbGV9IC8+XG4gICAgKSl9ICovfVxuXG4gICAgPFByb2ZpbGVMaW5rIHByb2ZpbGU9XCJoeW9qaW5cIiAvPlxuICAgIDxQcm9maWxlTGluayBwcm9maWxlPVwic2FuZ2pvXCIgLz5cbiAgICA8UHJvZmlsZUxpbmsgcHJvZmlsZT1cImNodW5zaWtcIiAvPlxuICAgIDxQcm9maWxlTGluayBwcm9maWxlPVwicnlhblwiIC8+XG4gIDwvTGF5b3V0PlxuKTtcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuLy8gICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4vLyAgIHZhciB1cmwgPVxuLy8gICAgIFwiaHR0cDovL29wZW5hcGkuamJmb29kLmdvLmtyOjgwODAvb3BlbmFwaS9zZXJ2aWNlL0plb25idWtGb29kU2VydmljZS9nZXRKZW9uYnVrRm9vZFwiOyAvKlVSTCovXG4vLyAgIHZhciBxdWVyeVBhcmFtcyA9XG4vLyAgICAgXCI/XCIgKyBlbmNvZGVVUklDb21wb25lbnQoXCJTZXJ2aWNlS2V5XCIpICsgXCI9XCIgKyBcIuyEnOu5hOyKpO2CpFwiOyAvKlNlcnZpY2UgS2V5Ki9cbi8vICAgcXVlcnlQYXJhbXMgKz1cbi8vICAgICBcIiZcIiArIGVuY29kZVVSSUNvbXBvbmVudChcIkFyZWFcIikgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChcIjAxXCIpOyAvKiovXG4vLyAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCArIHF1ZXJ5UGFyYW1zKTtcbi8vICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbi8vICAgICAgIGFsZXJ0KFxuLy8gICAgICAgICBcIlN0YXR1czogXCIgK1xuLy8gICAgICAgICAgIHRoaXMuc3RhdHVzICtcbi8vICAgICAgICAgICBcIm5IZWFkZXJzOiBcIiArXG4vLyAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgK1xuLy8gICAgICAgICAgIFwibkJvZHk6IFwiICtcbi8vICAgICAgICAgICB0aGlzLnJlc3BvbnNlVGV4dFxuLy8gICAgICAgKTtcbi8vICAgICB9XG4vLyAgIH07XG5cbi8vICAgeGhyLnNlbmQoXCJcIik7XG5cbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9maWxlczogZGF0YS5tYXAoKHByb2ZpbGUpID0+IHByb2ZpbGUubmFtZSksXG4vLyAgIH07XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});