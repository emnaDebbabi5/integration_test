__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useLocale; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStorage */ "./hooks/useStorage.ts");
/* harmony import */ var _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang/en-US.json */ "./lang/en-US.json");
/* harmony import */ var _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang/fr-FR.json */ "./lang/fr-FR.json");
var _s = $RefreshSig$();





var messages = {
  'en-US': _lang_en_US_json__WEBPACK_IMPORTED_MODULE_2__,
  'fr-FR': _lang_fr_FR_json__WEBPACK_IMPORTED_MODULE_3__
};
var validateLocale = ['en-US', 'fr-FR'];
function useLocale() {
  _s();

  var _useStorage = (0,_useStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      getItem = _useStorage.getItem,
      setItem = _useStorage.setItem;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      locale = _useState[0],
      setlocale = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (getItem('storylink.locale', 'local') && validateLocale.includes(getItem('storylink.locale', 'local'))) {
      var local = getItem('storylink.locale', 'local');
      setlocale(local);
    } else {
      setlocale('en-US');
    }
  }, []);

  var saveLocale = function saveLocale(newLocale) {
    setlocale(newLocale);
    setItem('storylink.locale', newLocale, 'local');
    window.location.reload();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [locale]);
  return {
    locale: locale,
    messages: messages,
    saveLocale: saveLocale
  };
}

_s(useLocale, "GAEeImA9r2gsdT4/cdsDN4TExok=", false, function () {
  return [_useStorage__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMb2NhbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLElBQU1LLFFBQXNCLEdBQUc7RUFDN0IsU0FBU0YsNkNBRG9CO0VBRTdCLFNBQVNDLDZDQUFJQTtBQUZnQixDQUEvQjtBQUtBLElBQU1FLGNBQWMsR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQXZCO0FBRWUsU0FBU0MsU0FBVCxHQUFxQjtFQUFBOztFQUNsQyxrQkFBNkJMLHVEQUFVLEVBQXZDO0VBQUEsSUFBUU0sT0FBUixlQUFRQSxPQUFSO0VBQUEsSUFBaUJDLE9BQWpCLGVBQWlCQSxPQUFqQjs7RUFDQSxnQkFBNEJSLCtDQUFRLEVBQXBDO0VBQUEsSUFBT1MsTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBRUFYLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQ0VRLE9BQU8sQ0FBQyxrQkFBRCxFQUFxQixPQUFyQixDQUFQLElBQ0FGLGNBQWMsQ0FBQ00sUUFBZixDQUF3QkosT0FBTyxDQUFDLGtCQUFELEVBQXFCLE9BQXJCLENBQS9CLENBRkYsRUFHRTtNQUNBLElBQU1LLEtBQUssR0FBR0wsT0FBTyxDQUFDLGtCQUFELEVBQXFCLE9BQXJCLENBQXJCO01BQ0FHLFNBQVMsQ0FBQ0UsS0FBRCxDQUFUO0lBQ0QsQ0FORCxNQU1PO01BQ0xGLFNBQVMsQ0FBQyxPQUFELENBQVQ7SUFDRDtFQUNGLENBVlEsRUFVTixFQVZNLENBQVQ7O0VBWUEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsU0FBRCxFQUF1QjtJQUN4Q0osU0FBUyxDQUFDSSxTQUFELENBQVQ7SUFDQU4sT0FBTyxDQUFDLGtCQUFELEVBQXFCTSxTQUFyQixFQUFnQyxPQUFoQyxDQUFQO0lBQ0FDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7RUFDRCxDQUpEOztFQU1BbEIsZ0RBQVMsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLENBQUNVLE1BQUQsQ0FBWCxDQUFUO0VBRUEsT0FBTztJQUNMQSxNQUFNLEVBQU5BLE1BREs7SUFFTEwsUUFBUSxFQUFSQSxRQUZLO0lBR0xTLFVBQVUsRUFBVkE7RUFISyxDQUFQO0FBS0Q7O0dBN0J1QlA7VUFDT0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlTG9jYWxlLnRzPzhmYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTdG9yYWdlIGZyb20gJy4vdXNlU3RvcmFnZSc7XG5pbXBvcnQgZW5VUyBmcm9tICcuLi9sYW5nL2VuLVVTLmpzb24nO1xuaW1wb3J0IGZyRlIgZnJvbSAnLi4vbGFuZy9mci1GUi5qc29uJztcblxudHlwZSB0cGxvdE9wdGlvbnMgPSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbmNvbnN0IG1lc3NhZ2VzOiB0cGxvdE9wdGlvbnMgPSB7XG4gICdlbi1VUyc6IGVuVVMsXG4gICdmci1GUic6IGZyRlIsXG59O1xuXG5jb25zdCB2YWxpZGF0ZUxvY2FsZSA9IFsnZW4tVVMnLCAnZnItRlInXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTG9jYWxlKCkge1xuICBjb25zdCB7IGdldEl0ZW0sIHNldEl0ZW0gfSA9IHVzZVN0b3JhZ2UoKTtcbiAgY29uc3QgW2xvY2FsZSwgc2V0bG9jYWxlXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGdldEl0ZW0oJ3N0b3J5bGluay5sb2NhbGUnLCAnbG9jYWwnKSAmJlxuICAgICAgdmFsaWRhdGVMb2NhbGUuaW5jbHVkZXMoZ2V0SXRlbSgnc3RvcnlsaW5rLmxvY2FsZScsICdsb2NhbCcpKVxuICAgICkge1xuICAgICAgY29uc3QgbG9jYWwgPSBnZXRJdGVtKCdzdG9yeWxpbmsubG9jYWxlJywgJ2xvY2FsJyk7XG4gICAgICBzZXRsb2NhbGUobG9jYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRsb2NhbGUoJ2VuLVVTJyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2F2ZUxvY2FsZSA9IChuZXdMb2NhbGU6IHN0cmluZykgPT4ge1xuICAgIHNldGxvY2FsZShuZXdMb2NhbGUpO1xuICAgIHNldEl0ZW0oJ3N0b3J5bGluay5sb2NhbGUnLCBuZXdMb2NhbGUsICdsb2NhbCcpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtsb2NhbGVdKTtcblxuICByZXR1cm4ge1xuICAgIGxvY2FsZSxcbiAgICBtZXNzYWdlcyxcbiAgICBzYXZlTG9jYWxlLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU3RvcmFnZSIsImVuVVMiLCJmckZSIiwibWVzc2FnZXMiLCJ2YWxpZGF0ZUxvY2FsZSIsInVzZUxvY2FsZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwibG9jYWxlIiwic2V0bG9jYWxlIiwiaW5jbHVkZXMiLCJsb2NhbCIsInNhdmVMb2NhbGUiLCJuZXdMb2NhbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///./hooks/useLocale.ts
