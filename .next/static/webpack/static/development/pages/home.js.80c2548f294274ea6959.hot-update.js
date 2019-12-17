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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Volumes/Foden/Apps/next-test/pages/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Home = function Home(props) {
  var data = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.testReducer.test;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var addTestNumber = function addTestNumber() {
    console.log(data);
    dispatch({
      type: "TEST",
      payload: +5
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hello Redux World", __jsx("button", {
    onClick: addTestNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Add"));
};

Home.getInitialProps = function (_ref) {
  var reduxStore = _ref.reduxStore;
  // Tick the time once, so we'll have a
  // valid time before first render
  var dispatch = reduxStore.dispatch,
      getState = reduxStore.getState;
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_redux__WEBPACK_IMPORTED_MODULE_1__["withRedux"])(Home));

/***/ })

})
//# sourceMappingURL=home.js.80c2548f294274ea6959.hot-update.js.map