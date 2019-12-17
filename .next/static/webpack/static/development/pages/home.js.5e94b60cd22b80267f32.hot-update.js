webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/redux */ "./redux/redux.js");
var _jsxFileName = "/Volumes/Foden/Apps/next-test/pages/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Home = function Home() {
  var data = useSelector(function (state) {
    return state.testReducer.test;
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Hello Redux World");
};

Home.getInitialProps = function (_ref) {
  var reduxStore = _ref.reduxStore;
  // Tick the time once, so we'll have a
  // valid time before first render
  var dispatch = reduxStore.dispatch;
  dispatch({
    type: "TEST",
    payload: 5
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_redux__WEBPACK_IMPORTED_MODULE_1__["withRedux"])(Home));

/***/ })

})
//# sourceMappingURL=home.js.5e94b60cd22b80267f32.hot-update.js.map