webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/form/ContactForm.js":
/*!****************************************!*\
  !*** ./components/form/ContactForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/form */ "./actions/form.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Navyaa Sharma\\Documents\\MyProjects\\seo blog\\frontend\\components\\form\\ContactForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ContactForm = function ContactForm(_ref) {
  _s();

  var authorEmail = _ref.authorEmail;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    message: '',
    name: '',
    email: '',
    sent: false,
    buttonText: 'Send Message',
    success: false,
    error: false
  }),
      values = _useState[0],
      setValues = _useState[1];

  var message = values.message,
      name = values.name,
      email = values.email,
      sent = values.sent,
      buttonText = values.buttonText,
      success = values.success,
      error = values.error;

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      buttonText: 'Sending...'
    }));
    Object(_actions_form__WEBPACK_IMPORTED_MODULE_3__["emailContactForm"])({
      authorEmail: authorEmail,
      name: name,
      email: email,
      message: message
    }).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          sent: true,
          name: '',
          email: '',
          message: '',
          buttonText: 'Sent',
          success: data.success
        }));
      }
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "error", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "success", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "buttonText", 'Send Message'), _objectSpread2)));
    };
  };

  var showSuccessMessage = function showSuccessMessage() {
    return success && __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 49
      }
    }, "Thank you for contacting us.");
  };

  var showErrorMessage = function showErrorMessage() {
    return __jsx("div", {
      className: "alert alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, error);
  };

  var contactForm = function contactForm() {
    return __jsx("form", {
      onSubmit: clickSubmit,
      className: "pb-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, "Message"), __jsx("textarea", {
      onChange: handleChange('message'),
      type: "text",
      className: "form-control",
      value: message,
      required: true,
      rows: "5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, "Name"), __jsx("input", {
      type: "text",
      onChange: handleChange('name'),
      className: "form-control",
      value: name,
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, "Email"), __jsx("input", {
      type: "email",
      onChange: handleChange('email'),
      className: "form-control",
      value: email,
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-primary btn-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, buttonText)));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, showSuccessMessage(), showErrorMessage(), contactForm());
};

_s(ContactForm, "1p5sGj7V7FjOP/evEMVHhF+emGg=");

_c = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c;

$RefreshReg$(_c, "ContactForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJhdXRob3JFbWFpbCIsInVzZVN0YXRlIiwibWVzc2FnZSIsIm5hbWUiLCJlbWFpbCIsInNlbnQiLCJidXR0b25UZXh0Iiwic3VjY2VzcyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiY2xpY2tTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbENvbnRhY3RGb3JtIiwidGhlbiIsImRhdGEiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3dTdWNjZXNzTWVzc2FnZSIsInNob3dFcnJvck1lc3NhZ2UiLCJkaXNwbGF5IiwiY29udGFjdEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUM7QUFDakNDLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxTQUFLLEVBQUUsRUFIMEI7QUFJakNDLFFBQUksRUFBRSxLQUoyQjtBQUtqQ0MsY0FBVSxFQUFFLGNBTHFCO0FBTWpDQyxXQUFPLEVBQUUsS0FOd0I7QUFPakNDLFNBQUssRUFBRTtBQVAwQixHQUFELENBREM7QUFBQSxNQUM5QkMsTUFEOEI7QUFBQSxNQUN0QkMsU0FEc0I7O0FBQUEsTUFXN0JSLE9BWDZCLEdBVzhCTyxNQVg5QixDQVc3QlAsT0FYNkI7QUFBQSxNQVdwQkMsSUFYb0IsR0FXOEJNLE1BWDlCLENBV3BCTixJQVhvQjtBQUFBLE1BV2RDLEtBWGMsR0FXOEJLLE1BWDlCLENBV2RMLEtBWGM7QUFBQSxNQVdQQyxJQVhPLEdBVzhCSSxNQVg5QixDQVdQSixJQVhP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QUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBRWUsWUFBWSxDQUFDLE1BQUQsQ0FBekM7QUFBbUQsZUFBUyxFQUFDLGNBQTdEO0FBQTRFLFdBQUssRUFBRWQsSUFBbkY7QUFBeUYsY0FBUSxNQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FiSixFQWtCSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFPLGVBQVMsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUNJLFVBQUksRUFBQyxPQURUO0FBRUksY0FBUSxFQUFFYyxZQUFZLENBQUMsT0FBRCxDQUYxQjtBQUdJLGVBQVMsRUFBQyxjQUhkO0FBSUksV0FBSyxFQUFFYixLQUpYO0FBS0ksY0FBUSxNQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQWxCSixFQTZCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBUSxlQUFTLEVBQUMsMkJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0NFLFVBQS9DLENBREosQ0E3QkosQ0FESjtBQW1DSCxHQXBDRDs7QUFzQ0EsU0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tjLGtCQUFrQixFQUR2QixFQUVLQyxnQkFBZ0IsRUFGckIsRUFHS0UsV0FBVyxFQUhoQixDQURKO0FBT0gsQ0ExRkQ7O0dBQU14QixXOztLQUFBQSxXO0FBNEZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29udGFjdC5qcy5mNDEyYTJkNjQzNWYyYTQ3M2I4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGVtYWlsQ29udGFjdEZvcm0gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Zvcm0nO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoeyBhdXRob3JFbWFpbCB9KSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzZW50OiBmYWxzZSxcclxuICAgICAgICBidXR0b25UZXh0OiAnU2VuZCBNZXNzYWdlJyxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgbmFtZSwgZW1haWwsIHNlbnQsIGJ1dHRvblRleHQsIHN1Y2Nlc3MsIGVycm9yIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3QgY2xpY2tTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBidXR0b25UZXh0OiAnU2VuZGluZy4uLicgfSk7XHJcbiAgICAgICAgZW1haWxDb250YWN0Rm9ybSh7IGF1dGhvckVtYWlsLCBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdTZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhLnN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlLCBidXR0b25UZXh0OiAnU2VuZCBNZXNzYWdlJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3NNZXNzYWdlID0gKCkgPT4gc3VjY2VzcyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj5UaGFuayB5b3UgZm9yIGNvbnRhY3RpbmcgdXMuPC9kaXY+O1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvck1lc3NhZ2UgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtjbGlja1N1Ym1pdH0gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlYWRcIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25hbWV9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVhZFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPntidXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge3Nob3dTdWNjZXNzTWVzc2FnZSgpfVxyXG4gICAgICAgICAgICB7c2hvd0Vycm9yTWVzc2FnZSgpfVxyXG4gICAgICAgICAgICB7Y29udGFjdEZvcm0oKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=