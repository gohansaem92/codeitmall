exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 1634:
/***/ ((module) => {

// Exports
module.exports = {
	"movieList": "MovieList_movieList__tXKtX",
	"poster": "MovieList_poster__UwTsp",
	"info": "MovieList_info__dZjTp",
	"title": "MovieList_title__ARalU",
	"date": "MovieList_date__8WYIu",
	"starRatingContainer": "MovieList_starRatingContainer__XjEj8",
	"starRating": "MovieList_starRating__HfaLB"
};


/***/ }),

/***/ 9770:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "SearchForm_input__z7e9T",
	"button": "SearchForm_button__jDjwu"
};


/***/ }),

/***/ 6946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MovieList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MovieList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1634);
/* harmony import */ var _MovieList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MovieList_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6463);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





function MovieList({ className ="" , movies  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: `${(_MovieList_module_css__WEBPACK_IMPORTED_MODULE_4___default().movieList)} ${className}`,
        children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/films/${movie.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_MovieList_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                fill: true,
                                src: movie.posterUrl,
                                alt: movie.title
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_MovieList_module_css__WEBPACK_IMPORTED_MODULE_4___default().info),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_MovieList_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                                children: movie.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_MovieList_module_css__WEBPACK_IMPORTED_MODULE_4___default().date),
                                children: [
                                    movie.date,
                                    " ・ ",
                                    movie.country
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_MovieList_module_css__WEBPACK_IMPORTED_MODULE_4___default().starRatingContainer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StarRating__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        value: movie.starRating
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_MovieList_module_css__WEBPACK_IMPORTED_MODULE_4___default().starRating),
                                        children: movie.starRating
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, movie.id))
    });
}


/***/ }),

/***/ 6425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9770);
/* harmony import */ var _SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3__);




function SearchForm({ initialValue =""  }) {
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialValue);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    function handleChange(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!value) {
            return router.push("/");
        }
        return router.push(`/search?q=${value}`);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                name: "q",
                value: value,
                placeholder: "영화를 검색해보세요.",
                onChange: handleChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_SearchForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                children: "검색"
            })
        ]
    });
}


/***/ })

};
;