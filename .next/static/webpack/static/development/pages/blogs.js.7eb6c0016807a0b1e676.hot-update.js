webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _components_blog_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/blog/Card */ "./components/blog/Card.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/css/style.css */ "./static/css/style.css");
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_blog_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/blog/Search */ "./components/blog/Search.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Navyaa Sharma\\Documents\\MyProjects\\seo blog\\frontend\\pages\\blogs\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var Blogs = function Blogs(_ref) {
  _s();

  var blogs = _ref.blogs,
      categories = _ref.categories,
      tags = _ref.tags,
      totalBlogs = _ref.totalBlogs,
      blogsLimit = _ref.blogsLimit,
      blogSkip = _ref.blogSkip,
      router = _ref.router;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, "Blogs | ", _config__WEBPACK_IMPORTED_MODULE_10__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_10__["DOMAIN"]).concat(router.pathname),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "Latest web developoment tutorials | ".concat(_config__WEBPACK_IMPORTED_MODULE_10__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "webiste",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_10__["DOMAIN"]).concat(router.pathname),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_10__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_10__["DOMAIN"], "/static/images/seoblog.jpg"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      ccontent: "".concat(_config__WEBPACK_IMPORTED_MODULE_10__["DOMAIN"], "/static/images/seoblog.jpg"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "fb:app_id",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_10__["FB_APP_ID"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }));
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(blogsLimit),
      limit = _useState[0],
      setLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(totalBlogs),
      size = _useState3[0],
      setSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      loadedBlogs = _useState4[0],
      setLoadedBlogs = _useState4[1];

  var loadMore = function loadMore() {
    var toSkip = skip + limit;
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_8__["listBlogsWithCategoriesAndTags"])(toSkip, limit).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(loadedBlogs), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(data.payload.blogs)));
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  var loadMoreButton = function loadMoreButton() {
    return size > 0 && size >= limit && __jsx("button", {
      onClick: loadMore,
      className: "btn btn-outline-primary btn-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, "Load More");
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      // ()
      return __jsx("article", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        blog: blog,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }
      }), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }));
    });
  };

  var showAllCategories = function showAllCategories() {
    return categories.map(function (c, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/categories/".concat(c.slug),
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      }, c.name));
    });
  };

  var showAllTags = function showAllTags() {
    return tags.map(function (t, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/tags/".concat(t.slug),
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }, t.name));
    });
  };

  var showLoadedBlogs = function showLoadedBlogs() {
    return loadedBlogs.map(function (blog, i) {
      return __jsx("article", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        blog: blog,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, head(), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }), __jsx(_components_blog_Search__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 12
    }
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-12 pt-3 pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "display-4 font-weight-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, "Start exploring blogs of your interest!")), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "pb-5 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, showAllCategories(), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }), showAllTags())))), __jsx("div", {
    className: "container-fluid pl-5 pr-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, showAllBlogs()), __jsx("div", {
    className: "container-fluid pl-5 pr-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, showLoadedBlogs()), __jsx("div", {
    className: "text-center pt-5 pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, loadMoreButton()))));
};

_s(Blogs, "Xk61i/WMQ7FElqvkkoA1Qs5MN40=");

_c = Blogs;
Blogs.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var skip, limit, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          skip = 0;
          limit = 2;
          _context.next = 4;
          return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_8__["listBlogsWithCategoriesAndTags"])(skip, limit);

        case 4:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", {
            blogs: data.payload.blogs,
            categories: data.categories,
            tags: data.tags,
            totalBlogs: data.size,
            blogsLimit: limit,
            blogSkip: skip
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Blogs));

var _c, _c2;

$RefreshReg$(_c, "Blogs");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9ncy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCbG9ncyIsImJsb2dzIiwiY2F0ZWdvcmllcyIsInRhZ3MiLCJ0b3RhbEJsb2dzIiwiYmxvZ3NMaW1pdCIsImJsb2dTa2lwIiwicm91dGVyIiwiaGVhZCIsIkFQUF9OQU1FIiwiRE9NQUlOIiwicGF0aG5hbWUiLCJGQl9BUFBfSUQiLCJ1c2VTdGF0ZSIsImxpbWl0Iiwic2V0TGltaXQiLCJza2lwIiwic2V0U2tpcCIsInNpemUiLCJzZXRTaXplIiwibG9hZGVkQmxvZ3MiLCJzZXRMb2FkZWRCbG9ncyIsImxvYWRNb3JlIiwidG9Ta2lwIiwibGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwibG9hZE1vcmVCdXR0b24iLCJzaG93QWxsQmxvZ3MiLCJtYXAiLCJibG9nIiwiaSIsInNob3dBbGxDYXRlZ29yaWVzIiwiYyIsInNsdWciLCJuYW1lIiwic2hvd0FsbFRhZ3MiLCJ0Iiwic2hvd0xvYWRlZEJsb2dzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTJFO0FBQUE7O0FBQUEsTUFBeEVDLEtBQXdFLFFBQXhFQSxLQUF3RTtBQUFBLE1BQWpFQyxVQUFpRSxRQUFqRUEsVUFBaUU7QUFBQSxNQUFyREMsSUFBcUQsUUFBckRBLElBQXFEO0FBQUEsTUFBL0NDLFVBQStDLFFBQS9DQSxVQUErQztBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUNyRixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFdBQ1QsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZ0JDLGlEQUFoQixDQURKLEVBRUk7QUFDSSxVQUFJLEVBQUMsYUFEVDtBQUVJLGFBQU8sRUFBQyx5RkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFNSTtBQUFNLFNBQUcsRUFBQyxXQUFWO0FBQXNCLFVBQUksWUFBS0MsK0NBQUwsU0FBY0gsTUFBTSxDQUFDSSxRQUFyQixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkosRUFPSTtBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sZ0RBQXlDRixpREFBekMsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBKLEVBUUk7QUFDSSxjQUFRLEVBQUMsZ0JBRGI7QUFFSSxhQUFPLEVBQUMseUZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJKLEVBWUk7QUFBTSxjQUFRLEVBQUMsU0FBZjtBQUF5QixhQUFPLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVpKLEVBYUk7QUFBTSxjQUFRLEVBQUMsUUFBZjtBQUF3QixhQUFPLFlBQUtDLCtDQUFMLFNBQWNILE1BQU0sQ0FBQ0ksUUFBckIsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJKLEVBY0k7QUFBTSxjQUFRLEVBQUMsY0FBZjtBQUE4QixhQUFPLFlBQUtGLGlEQUFMLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFkSixFQWdCSTtBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sWUFBS0MsK0NBQUwsK0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFoQkosRUFpQkk7QUFBTSxjQUFRLEVBQUMscUJBQWY7QUFBcUMsY0FBUSxZQUFLQSwrQ0FBTCwrQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWpCSixFQWtCSTtBQUFNLGNBQVEsRUFBQyxlQUFmO0FBQStCLGFBQU8sRUFBQyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEJKLEVBbUJJO0FBQU0sY0FBUSxFQUFDLFdBQWY7QUFBMkIsYUFBTyxZQUFLRSxrREFBTCxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbkJKLENBRFM7QUFBQSxHQUFiOztBQURxRixrQkF5QjNEQyxzREFBUSxDQUFDUixVQUFELENBekJtRDtBQUFBLE1BeUI5RVMsS0F6QjhFO0FBQUEsTUF5QnZFQyxRQXpCdUU7O0FBQUEsbUJBMEI3REYsc0RBQVEsQ0FBQyxDQUFELENBMUJxRDtBQUFBLE1BMEI5RUcsSUExQjhFO0FBQUEsTUEwQnhFQyxPQTFCd0U7O0FBQUEsbUJBMkI3REosc0RBQVEsQ0FBQ1QsVUFBRCxDQTNCcUQ7QUFBQSxNQTJCOUVjLElBM0I4RTtBQUFBLE1BMkJ4RUMsT0EzQndFOztBQUFBLG1CQTRCL0NOLHNEQUFRLENBQUMsRUFBRCxDQTVCdUM7QUFBQSxNQTRCOUVPLFdBNUI4RTtBQUFBLE1BNEJqRUMsY0E1QmlFOztBQThCckYsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFJQyxNQUFNLEdBQUdQLElBQUksR0FBR0YsS0FBcEI7QUFDQVUsd0ZBQThCLENBQUNELE1BQUQsRUFBU1QsS0FBVCxDQUE5QixDQUE4Q1csSUFBOUMsQ0FBbUQsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZELFVBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxLQUFqQjtBQUNILE9BRkQsTUFFTztBQUNITixzQkFBYyx3R0FBS0QsV0FBTCxnR0FBcUJNLElBQUksQ0FBQ0ksT0FBTCxDQUFhN0IsS0FBbEMsR0FBZDtBQUNBa0IsZUFBTyxDQUFDTyxJQUFJLENBQUNSLElBQU4sQ0FBUDtBQUNBRCxlQUFPLENBQUNNLE1BQUQsQ0FBUDtBQUNIO0FBQ0osS0FSRDtBQVNILEdBWEQ7O0FBYUEsTUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLFdBQ0liLElBQUksR0FBRyxDQUFQLElBQ0FBLElBQUksSUFBSUosS0FEUixJQUVJO0FBQVEsYUFBTyxFQUFFUSxRQUFqQjtBQUEyQixlQUFTLEVBQUMsZ0NBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSFI7QUFRSCxHQVREOztBQVdBLE1BQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsV0FBTy9CLEtBQUssQ0FBQ2dDLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUMxQjtBQUNELGFBQ1M7QUFBUyxXQUFHLEVBQUVBLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsNkRBQUQ7QUFBTSxZQUFJLEVBQUVELElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBRFQ7QUFPRixLQVRNLENBQVA7QUFVSCxHQVhEOztBQWFBLE1BQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QixXQUFPbEMsVUFBVSxDQUFDK0IsR0FBWCxDQUFlLFVBQUNJLENBQUQsRUFBSUYsQ0FBSjtBQUFBLGFBQ2xCLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLHdCQUFpQkUsQ0FBQyxDQUFDQyxJQUFuQixDQUFWO0FBQXFDLFdBQUcsRUFBRUgsQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxnQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStDRSxDQUFDLENBQUNFLElBQWpELENBREosQ0FEa0I7QUFBQSxLQUFmLENBQVA7QUFLSCxHQU5EOztBQVFBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsV0FBT3JDLElBQUksQ0FBQzhCLEdBQUwsQ0FBUyxVQUFDUSxDQUFELEVBQUlOLENBQUo7QUFBQSxhQUNaLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLGtCQUFXTSxDQUFDLENBQUNILElBQWIsQ0FBVjtBQUErQixXQUFHLEVBQUVILENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsd0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF1RE0sQ0FBQyxDQUFDRixJQUF6RCxDQURKLENBRFk7QUFBQSxLQUFULENBQVA7QUFLSCxHQU5EOztBQVFBLE1BQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQixXQUFPdEIsV0FBVyxDQUFDYSxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGFBQ25CO0FBQVMsV0FBRyxFQUFFQSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDZEQUFEO0FBQU0sWUFBSSxFQUFFRCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURtQjtBQUFBLEtBQWhCLENBQVA7QUFLSCxHQU5EOztBQVFBLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLMUIsSUFBSSxFQURULEVBRUk7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHRyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISCxFQUlJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQURKLENBREosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLNEIsaUJBQWlCLEVBRHRCLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tJLFdBQVcsRUFIaEIsQ0FESixDQU5KLENBREosQ0FESixFQWtCSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDUixZQUFZLEVBQXpELENBbEJKLEVBbUJJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENVLGVBQWUsRUFBM0QsQ0FuQkosRUFvQkk7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q1gsY0FBYyxFQUF0RCxDQXBCSixDQURKLENBSkosQ0FESjtBQStCSCxDQTFIRDs7R0FBTS9CLEs7O0tBQUFBLEs7QUE0SE5BLEtBQUssQ0FBQzJDLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQjNCLGNBRGdCLEdBQ1QsQ0FEUztBQUVoQkYsZUFGZ0IsR0FFUixDQUZRO0FBQUE7QUFBQSxpQkFHSlUsb0ZBQThCLENBQUNSLElBQUQsRUFBT0YsS0FBUCxDQUgxQjs7QUFBQTtBQUdoQlksY0FIZ0I7QUFJcEJFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUpvQiwyQ0FLZDtBQUNGekIsaUJBQUssRUFBRXlCLElBQUksQ0FBQ0ksT0FBTCxDQUFhN0IsS0FEbEI7QUFFRkMsc0JBQVUsRUFBRXdCLElBQUksQ0FBQ3hCLFVBRmY7QUFHRkMsZ0JBQUksRUFBRXVCLElBQUksQ0FBQ3ZCLElBSFQ7QUFJRkMsc0JBQVUsRUFBRXNCLElBQUksQ0FBQ1IsSUFKZjtBQUtGYixzQkFBVSxFQUFFUyxLQUxWO0FBTUZSLG9CQUFRLEVBQUVVO0FBTlIsV0FMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQWVlLHFFQUFBNEIsOERBQVUsQ0FBQzVDLEtBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2dzLmpzLjdlYjZjMDAxNjgwN2EwYjFlNjc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmxvZy9DYXJkJztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FLCBGQl9BUFBfSUQgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgJy4uLy4uL3N0YXRpYy9jc3Mvc3R5bGUuY3NzJ1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmxvZy9TZWFyY2gnO1xyXG5cclxuY29uc3QgQmxvZ3MgPSAoeyBibG9ncywgY2F0ZWdvcmllcywgdGFncywgdG90YWxCbG9ncywgYmxvZ3NMaW1pdCwgYmxvZ1NraXAsIHJvdXRlciB9KSA9PiB7XHJcbiAgICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+QmxvZ3MgfCB7QVBQX05BTUV9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUHJvZ3JhbW1pbmcgYmxvZ3MgYW5kIHR1dG9yaWFscyBvbiByZWFjdCBub2RlIG5leHQgdnVlIHBocCBsYXJhdmVsIGFuZCB3ZWIgZGV2ZWxvcG9tZW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7RE9NQUlOfSR7cm91dGVyLnBhdGhuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgTGF0ZXN0IHdlYiBkZXZlbG9wb21lbnQgdHV0b3JpYWxzIHwgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUHJvZ3JhbW1pbmcgYmxvZ3MgYW5kIHR1dG9yaWFscyBvbiByZWFjdCBub2RlIG5leHQgdnVlIHBocCBsYXJhdmVsIGFuZCB3ZWIgZGV2ZWxvcG9tZW50XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYmlzdGVcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Ake0RPTUFJTn0ke3JvdXRlci5wYXRobmFtZX1gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nlb2Jsb2cuanBnYH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgY2NvbnRlbnQ9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zZW9ibG9nLmpwZ2B9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGNvbnRlbnQ9XCJpbWFnZS9qcGdcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZShibG9nc0xpbWl0KTtcclxuICAgIGNvbnN0IFtza2lwLCBzZXRTa2lwXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUodG90YWxCbG9ncyk7XHJcbiAgICBjb25zdCBbbG9hZGVkQmxvZ3MsIHNldExvYWRlZEJsb2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdG9Ta2lwID0gc2tpcCArIGxpbWl0O1xyXG4gICAgICAgIGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyh0b1NraXAsIGxpbWl0KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkZWRCbG9ncyhbLi4ubG9hZGVkQmxvZ3MsIC4uLmRhdGEucGF5bG9hZC5ibG9nc10pO1xyXG4gICAgICAgICAgICAgICAgc2V0U2l6ZShkYXRhLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2tpcCh0b1NraXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHNpemUgPiAwICYmXHJcbiAgICAgICAgICAgIHNpemUgPj0gbGltaXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2FkTW9yZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZCBNb3JlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dBbGxCbG9ncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvZ3MubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICgpXHJcbiAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBibG9nPXtibG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcmllcy8ke2Muc2x1Z31gfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zXCI+e2MubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdGFncy8ke3Quc2x1Z31gfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj57dC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9hZGVkQmxvZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxvYWRlZEJsb2dzLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgYmxvZz17YmxvZ30gLz5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2hlYWQoKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgPFNlYXJjaC8+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBmb250LXdlaWdodC1ib2xkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IGV4cGxvcmluZyBibG9ncyBvZiB5b3VyIGludGVyZXN0IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0FsbENhdGVnb3JpZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QWxsVGFncygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcGwtNSBwci01XCIgPntzaG93QWxsQmxvZ3MoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwbC01IHByLTVcIj57c2hvd0xvYWRlZEJsb2dzKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC01IHBiLTVcIj57bG9hZE1vcmVCdXR0b24oKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn07XHJcbiAgICBcclxuQmxvZ3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoKSA9PiB7XHJcbiAgICBsZXQgc2tpcCA9IDA7XHJcbiAgICBsZXQgbGltaXQgPSAyO1xyXG4gICAgdmFyIGRhdGE9IGF3YWl0IGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyhza2lwLCBsaW1pdClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgYmxvZ3M6IGRhdGEucGF5bG9hZC5ibG9ncyxcclxuICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgIHRvdGFsQmxvZ3M6IGRhdGEuc2l6ZSxcclxuICAgICAgICBibG9nc0xpbWl0OiBsaW1pdCxcclxuICAgICAgICBibG9nU2tpcDogc2tpcFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJsb2dzKTsiXSwic291cmNlUm9vdCI6IiJ9