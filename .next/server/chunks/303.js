exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 6281:
/***/ ((module) => {

// Exports
module.exports = {
	"starRating": "StarRating_starRating__UuQhc"
};


/***/ }),

/***/ 6463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StarRating_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6281);
/* harmony import */ var _StarRating_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_StarRating_module_css__WEBPACK_IMPORTED_MODULE_1__);


const RATINGS = [
    1,
    2,
    3,
    4,
    5
];
function StarRating({ value =1  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (_StarRating_module_css__WEBPACK_IMPORTED_MODULE_1___default().starRating),
        children: RATINGS.map((rating)=>value >= rating ? "★" : "✩")
    });
}
6;


/***/ }),

/***/ 7072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://learn.codeit.kr/api/watchit"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;