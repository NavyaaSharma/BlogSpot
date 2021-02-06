webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/css/style.css */ "./static/css/style.css");
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blog_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/Search */ "./components/blog/Search.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Navyaa Sharma\\Documents\\MyProjects\\seo blog\\frontend\\components\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
    className: "mainNav",
    expand: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    className: "font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, _config__WEBPACK_IMPORTED_MODULE_1__["APP_NAME"])), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blogs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    className: "itemNav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Blogs"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "Contact")))), !Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 27
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Signup"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Signin")))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])().role == 0 && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])().name, "'s Dashboard"))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])().role == 1 && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])().name, "'s Dashboard"))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["signout"])(function () {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/signin');
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, "Signout")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 14
    }
  }, __jsx("a", {
    href: "/user/crud/blog",
    className: "btn btn-primary text-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Write a blog"))))));
};

_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSIsImN1cnNvciIsIkFQUF9OQU1FIiwiaXNBdXRoIiwicm9sZSIsIm5hbWUiLCJzaWdub3V0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWVBQSxrREFBTSxDQUFDQyxrQkFBUCxHQUEwQixVQUFBQyxHQUFHO0FBQUEsU0FBRUMsZ0RBQVMsQ0FBQ0MsS0FBVixFQUFGO0FBQUEsQ0FBN0I7O0FBQ0FKLGtEQUFNLENBQUNLLHFCQUFQLEdBQTZCLFVBQUFILEdBQUc7QUFBQSxTQUFFQyxnREFBUyxDQUFDRyxJQUFWLEVBQUY7QUFBQSxDQUFoQzs7QUFDQU4sa0RBQU0sQ0FBQ08sa0JBQVAsR0FBMEIsVUFBQUwsR0FBRztBQUFBLFNBQUVDLGdEQUFTLENBQUNHLElBQVYsRUFBRjtBQUFBLENBQTdCOztBQUVBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxLQUFELENBRGpCO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBR25CLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTUQsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLEdBQWY7O0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFRLGFBQVMs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ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9ncy5qcy5mY2QyNzkyZDUyM2Q1ODkzZmZhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FQUF9OQU1FfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7c2lnbm91dCxpc0F1dGh9IGZyb20gJy4uL2FjdGlvbnMvYXV0aCdcclxuaW1wb3J0ICcuLi9zdGF0aWMvY3NzL3N0eWxlLmNzcydcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2Jsb2cvU2VhcmNoJztcclxuaW1wb3J0IHtcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgTmF2YmFyVGV4dFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydD11cmw9Pk5Qcm9ncmVzcy5zdGFydCgpXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGU9dXJsPT5OUHJvZ3Jlc3MuZG9uZSgpXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3I9dXJsPT5OUHJvZ3Jlc3MuZG9uZSgpXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJtYWluTmF2XCIgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8TmF2TGluayBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e0FQUF9OQU1FfTwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyID5cclxuXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQgPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nc1wiID5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gY2xhc3NOYW1lPVwiaXRlbU5hdlwiPkJsb2dzPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluaz5Db250YWN0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHshaXNBdXRoKCkgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319ID5TaWdudXA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gPlNpZ25pbjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50Pn1cclxuXHJcbiAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlPT0wICYmIChcclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT57aXNBdXRoKCkubmFtZX0ncyBEYXNoYm9hcmQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2lzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGU9PTEgJiYgKFxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT57aXNBdXRoKCkubmFtZX0ncyBEYXNoYm9hcmQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2lzQXV0aCgpICYmIChcclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBvbkNsaWNrPXsoKT0+c2lnbm91dCgoKT0+e1JvdXRlci5yZXBsYWNlKCcvc2lnbmluJyl9KX0+U2lnbm91dDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdXNlci9jcnVkL2Jsb2dcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgdGV4dC1saWdodFwiPldyaXRlIGEgYmxvZzwvYT5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9