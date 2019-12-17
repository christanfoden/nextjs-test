webpackHotUpdate("static/development/pages/home.js",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-promise */ "./node_modules/redux-promise/lib/index.js");
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");





var store = function store() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_promise__WEBPACK_IMPORTED_MODULE_2___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
}; // import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// const initialState = {
//   lastUpdate: 0,
//   light: false,
//   count: 0
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "TICK":
//       return {
//         ...state,
//         lastUpdate: action.lastUpdate,
//         light: !!action.light
//       };
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + 1
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         count: state.count - 1
//       };
//     case "RESET":
//       return {
//         ...state,
//         count: initialState.count
//       };
//     default:
//       return state;
//   }
// };
// export const store = (preloadedState = initialState) => {
//   return createStore(
//     reducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   );
// };

/***/ })

})
//# sourceMappingURL=home.js.307c418935b5f42bf0ee.hot-update.js.map