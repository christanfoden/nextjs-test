webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/redux */ "./redux/redux.js");


var Home = function Home() {
  return "Home";
};

Home.getInitialProps = function (_ref) {
  var reduxStore = _ref.reduxStore;
  // Tick the time once, so we'll have a
  // valid time before first render
  var dispatch = reduxStore.dispatch;
  console.log(reduxStore);
  dispatch({
    type: "TEST",
    payload: 5
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_redux__WEBPACK_IMPORTED_MODULE_0__["withRedux"])(Home));

/***/ })

})
//# sourceMappingURL=home.js.30b64036f71f5848d4eb.hot-update.js.map