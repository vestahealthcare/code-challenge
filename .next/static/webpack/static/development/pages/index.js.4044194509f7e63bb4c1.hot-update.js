webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Home = function Home() {
  return __jsx("div", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Coding Challenge"), __jsx("link", {
    rel: "image",
    href: "/production.png",
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2491632237" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2491632237" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2491632237" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hometeam coding challenge"), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99."), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "The opcode indicates what to do:"), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "99: the program is finished and should immediately halt"), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "1: add together numbers read from two positions and stores the result in a third position. The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored. For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "2: works exactly like opcode 1, except it multiplies the two inputs instead of adding them."), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Run your computer on the given input to find what the final answer is (answer will be stored at position 0)"), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("code", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "[ // input goes here ]")), __jsx("p", {
    className: "jsx-2491632237",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Part II: assuming values at index 1 and 2 are inputs.  Which two inputs (between 0 and 99) will produce the output 19690720?"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2491632237",
    __self: this
  }, ".page.jsx-2491632237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;}.container.jsx-2491632237{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.title.jsx-2491632237{-webkit-letter-spacing:1.4px;-moz-letter-spacing:1.4px;-ms-letter-spacing:1.4px;letter-spacing:1.4px;line-height:26px;font-size:18px;color:#053075;}.row.jsx-2491632237{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-2491632237{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-2491632237:hover{border-color:#067df7;}.card.jsx-2491632237 h3.jsx-2491632237{margin:0;color:#067df7;font-size:18px;}.card.jsx-2491632237 p.jsx-2491632237{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDZ0IsQUFHc0IsQUFPWSxBQU9KLEFBTUwsQUFPTyxBQVFGLEFBR1osQUFLQSxTQUpLLEFBS0csT0F2QkssS0FleEIsRUFSYyxBQVlHLEVBaENGLENBcUNFLFNBaEJDLEdBUEgsQUFtQmYsR0FLYSxVQWhCVSxDQWlCdkIsc0JBOUN5Qix5QkFRYixFQU1PLEFBZ0JILFFBckJRLEdBYUgsR0FTTSxHQWhCVixlQUVsQixPQWVDLE9BZkEsMEJBaEIyQixRQXNCSSxNQWJoQixXQVJGLEVBU2IsU0FSYyxZQUNkLG1GQW9CQSIsImZpbGUiOiIvVXNlcnMvcm9iZXJ0YmF4dGVyL0Rlc2t0b3AvSG9tZXRlYW1Qcm9qZWN0cy9jb2RlLWNoYWxsZW5nZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Db2RpbmcgQ2hhbGxlbmdlPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImltYWdlXCIgaHJlZj1cIi9wcm9kdWN0aW9uLnBuZ1wiIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Ib21ldGVhbSBjb2RpbmcgY2hhbGxlbmdlPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQW4gSW50Y29kZSBwcm9ncmFtIGlzIGEgbGlzdCBvZiBpbnRlZ2VycyBzZXBhcmF0ZWQgYnkgY29tbWFzIChsaWtlIFsxLDAsMCwzLDk5XSkuIFRvIHJ1biBvbmUsIHN0YXJ0IGJ5IGxvb2tpbmcgYXQgdGhlIGZpcnN0IGludGVnZXIuIEhlcmUsIHlvdSB3aWxsIGZpbmQgYW4gb3Bjb2RlIC0gZWl0aGVyIDEsIDIsIG9yIDk5LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBvcGNvZGUgaW5kaWNhdGVzIHdoYXQgdG8gZG86XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgOTk6IHRoZSBwcm9ncmFtIGlzIGZpbmlzaGVkIGFuZCBzaG91bGQgaW1tZWRpYXRlbHkgaGFsdFxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDE6IGFkZCB0b2dldGhlciBudW1iZXJzIHJlYWQgZnJvbSB0d28gcG9zaXRpb25zIGFuZCBzdG9yZXMgdGhlIHJlc3VsdCBpbiBhIHRoaXJkIHBvc2l0aW9uLiBUaGUgdGhyZWUgaW50ZWdlcnMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIG9wY29kZSB0ZWxsIHlvdSB0aGVzZSB0aHJlZSBwb3NpdGlvbnMgLSB0aGUgZmlyc3QgdHdvIGluZGljYXRlIHRoZSBwb3NpdGlvbnMgZnJvbSB3aGljaCB5b3Ugc2hvdWxkIHJlYWQgdGhlIGlucHV0IHZhbHVlcywgYW5kIHRoZSB0aGlyZCBpbmRpY2F0ZXMgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBvdXRwdXQgc2hvdWxkIGJlIHN0b3JlZC5cbiAgICAgICAgICAgIEZvciBleGFtcGxlLCBpZiB5b3VyIEludGNvZGUgY29tcHV0ZXIgZW5jb3VudGVycyAxLDEwLDIwLDMwLCBpdCBzaG91bGQgcmVhZCB0aGUgdmFsdWVzIGF0IHBvc2l0aW9ucyAxMCBhbmQgMjAsIGFkZCB0aG9zZSB2YWx1ZXMsIGFuZCB0aGVuIG92ZXJ3cml0ZSB0aGUgdmFsdWUgYXQgcG9zaXRpb24gMzAgd2l0aCB0aGVpciBzdW0uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgMjogd29ya3MgZXhhY3RseSBsaWtlIG9wY29kZSAxLCBleGNlcHQgaXQgbXVsdGlwbGllcyB0aGUgdHdvIGlucHV0cyBpbnN0ZWFkIG9mIGFkZGluZyB0aGVtLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE9uY2UgeW91J3JlIGRvbmUgcHJvY2Vzc2luZyBhbiBvcGNvZGUsIG1vdmUgdG8gdGhlIG5leHQgb25lIGJ5IHN0ZXBwaW5nIGZvcndhcmQgNCBwb3NpdGlvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgUnVuIHlvdXIgY29tcHV0ZXIgb24gdGhlIGdpdmVuIGlucHV0IHRvIGZpbmQgd2hhdCB0aGUgZmluYWwgYW5zd2VyIGlzIChhbnN3ZXIgd2lsbCBiZSBzdG9yZWQgYXQgcG9zaXRpb24gMClcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIFsgLy8gaW5wdXQgZ29lcyBoZXJlIF1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgUGFydCBJSTogYXNzdW1pbmcgdmFsdWVzIGF0IGluZGV4IDEgYW5kIDIgYXJlIGlucHV0cy4gIFdoaWNoIHR3byBpbnB1dHMgKGJldHdlZW4gMCBhbmQgOTkpIHdpbGwgcHJvZHVjZSB0aGUgb3V0cHV0IDE5NjkwNzIwP1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5wYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICMwNTMwNzVcbiAgICAgIH1cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgIH1cbiAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgfVxuICAgICAgLmNhcmQgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICAuY2FyZCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4044194509f7e63bb4c1.hot-update.js.map