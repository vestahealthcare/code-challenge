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
    className: "jsx-1132050816",
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
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Coding Challenge"), __jsx("link", {
    rel: "image",
    href: "/production.png",
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1132050816" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1132050816" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1132050816" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hometeam coding challenge"), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "To get started, edit ", __jsx("code", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "pages/index.js"), " and save to reload."), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99."), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "The opcode indicates what to do:"), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "99: the program is finished and should immediately halt"), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "1: add together numbers read from two positions and stores the result in a third position. The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored. For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "2: works exactly like opcode 1, except it multiplies the two inputs instead of adding them."), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Run your computer on the given input to find what the final answer is (answer will be stored at position 0)"), __jsx("p", {
    className: "jsx-1132050816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Part II: assuming values at index 1 and 2 are inputs.  Which two inputs (between 0 and 99) will produce the output 19690720?"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1132050816",
    __self: this
  }, ".page.jsx-1132050816{color:#fbfbfb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.container.jsx-1132050816{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:50%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.title.jsx-1132050816{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;text-align:center;}.row.jsx-1132050816{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-1132050816{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-1132050816:hover{border-color:#067df7;}.card.jsx-1132050816 h3.jsx-1132050816{margin:0;color:#067df7;font-size:18px;}.card.jsx-1132050816 p.jsx-1132050816{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDZ0IsQUFHdUIsQUFLVyxBQU9oQixBQVFPLEFBT08sQUFRRixBQUdaLEFBS0EsU0E5QkUsQUEwQkcsQUFLRyxLQTNDSixFQW9CUyxJQVBMLENBc0JuQixFQVJjLEFBWUcsRUFsQ0YsQ0F1Q0UsU0FoQkMsRUFkQyxDQU9KLEFBbUJmLEdBS2EsVUFoQlUsQ0FpQnZCLEVBL0JpQixlQUNHLGtCQUNwQixDQWhCeUIsV0FLYixFQXdCSSxRQXZCUSxHQWVILEdBU00seUJBQzNCLHlDQVQrQixNQXJCL0IsQUFPQSxxSEFlQSIsImZpbGUiOiIvVXNlcnMvcm9iZXJ0YmF4dGVyL0Rlc2t0b3AvSG9tZXRlYW1Qcm9qZWN0cy9jb2RlLWNoYWxsZW5nZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Db2RpbmcgQ2hhbGxlbmdlPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImltYWdlXCIgaHJlZj1cIi9wcm9kdWN0aW9uLnBuZ1wiIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Ib21ldGVhbSBjb2RpbmcgY2hhbGxlbmdlPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVG8gZ2V0IHN0YXJ0ZWQsIGVkaXQgPGNvZGU+cGFnZXMvaW5kZXguanM8L2NvZGU+IGFuZCBzYXZlIHRvIHJlbG9hZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbiBJbnRjb2RlIHByb2dyYW0gaXMgYSBsaXN0IG9mIGludGVnZXJzIHNlcGFyYXRlZCBieSBjb21tYXMgKGxpa2UgWzEsMCwwLDMsOTldKS4gVG8gcnVuIG9uZSwgc3RhcnQgYnkgbG9va2luZyBhdCB0aGUgZmlyc3QgaW50ZWdlci4gSGVyZSwgeW91IHdpbGwgZmluZCBhbiBvcGNvZGUgLSBlaXRoZXIgMSwgMiwgb3IgOTkuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG9wY29kZSBpbmRpY2F0ZXMgd2hhdCB0byBkbzpcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA5OTogdGhlIHByb2dyYW0gaXMgZmluaXNoZWQgYW5kIHNob3VsZCBpbW1lZGlhdGVseSBoYWx0XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgMTogYWRkIHRvZ2V0aGVyIG51bWJlcnMgcmVhZCBmcm9tIHR3byBwb3NpdGlvbnMgYW5kIHN0b3JlcyB0aGUgcmVzdWx0IGluIGEgdGhpcmQgcG9zaXRpb24uIFRoZSB0aHJlZSBpbnRlZ2VycyBpbW1lZGlhdGVseSBhZnRlciB0aGUgb3Bjb2RlIHRlbGwgeW91IHRoZXNlIHRocmVlIHBvc2l0aW9ucyAtIHRoZSBmaXJzdCB0d28gaW5kaWNhdGUgdGhlIHBvc2l0aW9ucyBmcm9tIHdoaWNoIHlvdSBzaG91bGQgcmVhZCB0aGUgaW5wdXQgdmFsdWVzLCBhbmQgdGhlIHRoaXJkIGluZGljYXRlcyB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdGhlIG91dHB1dCBzaG91bGQgYmUgc3RvcmVkLlxuICAgICAgICAgICAgRm9yIGV4YW1wbGUsIGlmIHlvdXIgSW50Y29kZSBjb21wdXRlciBlbmNvdW50ZXJzIDEsMTAsMjAsMzAsIGl0IHNob3VsZCByZWFkIHRoZSB2YWx1ZXMgYXQgcG9zaXRpb25zIDEwIGFuZCAyMCwgYWRkIHRob3NlIHZhbHVlcywgYW5kIHRoZW4gb3ZlcndyaXRlIHRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAzMCB3aXRoIHRoZWlyIHN1bS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAyOiB3b3JrcyBleGFjdGx5IGxpa2Ugb3Bjb2RlIDEsIGV4Y2VwdCBpdCBtdWx0aXBsaWVzIHRoZSB0d28gaW5wdXRzIGluc3RlYWQgb2YgYWRkaW5nIHRoZW0uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT25jZSB5b3UncmUgZG9uZSBwcm9jZXNzaW5nIGFuIG9wY29kZSwgbW92ZSB0byB0aGUgbmV4dCBvbmUgYnkgc3RlcHBpbmcgZm9yd2FyZCA0IHBvc2l0aW9ucy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBSdW4geW91ciBjb21wdXRlciBvbiB0aGUgZ2l2ZW4gaW5wdXQgdG8gZmluZCB3aGF0IHRoZSBmaW5hbCBhbnN3ZXIgaXMgKGFuc3dlciB3aWxsIGJlIHN0b3JlZCBhdCBwb3NpdGlvbiAwKVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFBhcnQgSUk6IGFzc3VtaW5nIHZhbHVlcyBhdCBpbmRleCAxIGFuZCAyIGFyZSBpbnB1dHMuICBXaGljaCB0d28gaW5wdXRzIChiZXR3ZWVuIDAgYW5kIDk5KSB3aWxsIHByb2R1Y2UgdGhlIG91dHB1dCAxOTY5MDcyMD9cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucGFnZSB7XG4gICAgICAgIGNvbG9yOiAjZmJmYmZiO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgfVxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICB9XG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6ac84125314b699ab3fb.hot-update.js.map