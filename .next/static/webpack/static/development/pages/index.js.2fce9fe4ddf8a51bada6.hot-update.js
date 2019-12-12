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
    className: "jsx-2683060931",
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
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Coding Challenge"), __jsx("link", {
    rel: "image",
    href: "/production.png",
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2683060931" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2683060931" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2683060931" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hometeam coding challenge"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Below you will find a coding challenge.  Please write your code as if it were going into production.  There are inputs that will help you validate your answer before submitting.  Once you're finished, please email your solution to brad@bradbrad"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Here are some online code editors that you can use, but feel free to use whatever you'd like."), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Java: https://code.sololearn.com/cVRUy2BwauK8#java"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Javascript: https://jsbin.com/?html,output"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Python: https://www.katacoda.com/courses/python/playground"), __jsx("h2", {
    className: "jsx-2683060931" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Part I:"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99."), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "The opcode indicates what to do:"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "99: the program is finished and should immediately halt"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "1: add together numbers read from two positions and stores the result in a third position. The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored. For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "2: works exactly like opcode 1, except it multiplies the two inputs instead of adding them."), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Run your computer on the given input to find what the final answer is (answer will be stored at position 0)"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("code", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "[ // input goes here ]")), __jsx("h2", {
    className: "jsx-2683060931" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Part II:"), __jsx("p", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output ", __jsx("code", {
    className: "jsx-2683060931",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "19690720"), "? Both values will be between 0 and 99."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2683060931",
    __self: this
  }, ".page.jsx-2683060931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}.container.jsx-2683060931{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.h1.jsx-2683060931{color:#053075;}.h2.jsx-2683060931{color:#053075;}.row.jsx-2683060931{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-2683060931{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-2683060931:hover{border-color:#067df7;}.card.jsx-2683060931 h3.jsx-2683060931{margin:0;color:#067df7;font-size:18px;}.card.jsx-2683060931 p.jsx-2683060931{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEZ0IsQUFHc0IsQUFRWSxBQVE1QixBQUdBLEFBRW1CLEFBT08sQUFRRixBQUdaLEFBS0EsU0FKSyxBQUtHLEtBN0JuQixBQUdBLEVBR3dCLEtBZXhCLEVBUmMsQUFZRyxFQWhDRixDQXFDRSxTQWhCQyxHQVBILEFBbUJmLEdBS2EsVUFoQlUsQ0FpQnZCLHNCQS9DeUIseUJBU2IsRUFzQkksUUFyQlEsR0FhSCxHQVNNLHlCQUMzQixpQ0FoQzJCLFFBdUJJLE1BYmhCLFdBVEYsRUFVYixTQVRjLFlBQ3FCLGdDQUNuQyxtREFvQkEiLCJmaWxlIjoiL1VzZXJzL3JvYmVydGJheHRlci9EZXNrdG9wL0hvbWV0ZWFtUHJvamVjdHMvY29kZS1jaGFsbGVuZ2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q29kaW5nIENoYWxsZW5nZTwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpbWFnZVwiIGhyZWY9XCIvcHJvZHVjdGlvbi5wbmdcIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+SG9tZXRlYW0gY29kaW5nIGNoYWxsZW5nZTwvaDE+XG4gICAgICAgIDxwPkJlbG93IHlvdSB3aWxsIGZpbmQgYSBjb2RpbmcgY2hhbGxlbmdlLiAgUGxlYXNlIHdyaXRlIHlvdXIgY29kZSBhcyBpZiBpdCB3ZXJlIGdvaW5nIGludG8gcHJvZHVjdGlvbi4gIFRoZXJlIGFyZSBpbnB1dHMgdGhhdCB3aWxsIGhlbHAgeW91IHZhbGlkYXRlIHlvdXIgYW5zd2VyIGJlZm9yZSBzdWJtaXR0aW5nLiAgT25jZSB5b3UncmUgZmluaXNoZWQsIHBsZWFzZSBlbWFpbCB5b3VyIHNvbHV0aW9uIHRvIGJyYWRAYnJhZGJyYWQ8L3A+XG4gICAgICAgIDxwPkhlcmUgYXJlIHNvbWUgb25saW5lIGNvZGUgZWRpdG9ycyB0aGF0IHlvdSBjYW4gdXNlLCBidXQgZmVlbCBmcmVlIHRvIHVzZSB3aGF0ZXZlciB5b3UnZCBsaWtlLjwvcD5cbiAgICAgICAgPHA+SmF2YTogaHR0cHM6Ly9jb2RlLnNvbG9sZWFybi5jb20vY1ZSVXkyQndhdUs4I2phdmE8L3A+XG4gICAgICAgIDxwPkphdmFzY3JpcHQ6IGh0dHBzOi8vanNiaW4uY29tLz9odG1sLG91dHB1dDwvcD5cbiAgICAgICAgPHA+UHl0aG9uOiBodHRwczovL3d3dy5rYXRhY29kYS5jb20vY291cnNlcy9weXRob24vcGxheWdyb3VuZDwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+UGFydCBJOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFuIEludGNvZGUgcHJvZ3JhbSBpcyBhIGxpc3Qgb2YgaW50ZWdlcnMgc2VwYXJhdGVkIGJ5IGNvbW1hcyAobGlrZSBbMSwwLDAsMyw5OV0pLiBUbyBydW4gb25lLCBzdGFydCBieSBsb29raW5nIGF0IHRoZSBmaXJzdCBpbnRlZ2VyLiBIZXJlLCB5b3Ugd2lsbCBmaW5kIGFuIG9wY29kZSAtIGVpdGhlciAxLCAyLCBvciA5OS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgb3Bjb2RlIGluZGljYXRlcyB3aGF0IHRvIGRvOlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDk5OiB0aGUgcHJvZ3JhbSBpcyBmaW5pc2hlZCBhbmQgc2hvdWxkIGltbWVkaWF0ZWx5IGhhbHRcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAxOiBhZGQgdG9nZXRoZXIgbnVtYmVycyByZWFkIGZyb20gdHdvIHBvc2l0aW9ucyBhbmQgc3RvcmVzIHRoZSByZXN1bHQgaW4gYSB0aGlyZCBwb3NpdGlvbi4gVGhlIHRocmVlIGludGVnZXJzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBvcGNvZGUgdGVsbCB5b3UgdGhlc2UgdGhyZWUgcG9zaXRpb25zIC0gdGhlIGZpcnN0IHR3byBpbmRpY2F0ZSB0aGUgcG9zaXRpb25zIGZyb20gd2hpY2ggeW91IHNob3VsZCByZWFkIHRoZSBpbnB1dCB2YWx1ZXMsIGFuZCB0aGUgdGhpcmQgaW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgb3V0cHV0IHNob3VsZCBiZSBzdG9yZWQuXG4gICAgICAgICAgICBGb3IgZXhhbXBsZSwgaWYgeW91ciBJbnRjb2RlIGNvbXB1dGVyIGVuY291bnRlcnMgMSwxMCwyMCwzMCwgaXQgc2hvdWxkIHJlYWQgdGhlIHZhbHVlcyBhdCBwb3NpdGlvbnMgMTAgYW5kIDIwLCBhZGQgdGhvc2UgdmFsdWVzLCBhbmQgdGhlbiBvdmVyd3JpdGUgdGhlIHZhbHVlIGF0IHBvc2l0aW9uIDMwIHdpdGggdGhlaXIgc3VtLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDI6IHdvcmtzIGV4YWN0bHkgbGlrZSBvcGNvZGUgMSwgZXhjZXB0IGl0IG11bHRpcGxpZXMgdGhlIHR3byBpbnB1dHMgaW5zdGVhZCBvZiBhZGRpbmcgdGhlbS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBPbmNlIHlvdSdyZSBkb25lIHByb2Nlc3NpbmcgYW4gb3Bjb2RlLCBtb3ZlIHRvIHRoZSBuZXh0IG9uZSBieSBzdGVwcGluZyBmb3J3YXJkIDQgcG9zaXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFJ1biB5b3VyIGNvbXB1dGVyIG9uIHRoZSBnaXZlbiBpbnB1dCB0byBmaW5kIHdoYXQgdGhlIGZpbmFsIGFuc3dlciBpcyAoYW5zd2VyIHdpbGwgYmUgc3RvcmVkIGF0IHBvc2l0aW9uIDApXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICBbIC8vIGlucHV0IGdvZXMgaGVyZSBdXG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMVwiPlBhcnQgSUk6PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQXNzdW1pbmcgaW5kZXggMSBhbmQgMiBpbiB0aGUgcHJvdmlkZWQgYXJyYXkgYXJlIGlucHV0cy4gIFdoaWNoIHR3byBpbnB1dHMgd2lsbCBwcm9kdWNlIHRoZSBvdXRwdXQgPGNvZGU+MTk2OTA3MjA8L2NvZGU+P1xuICAgICAgICAgIEJvdGggdmFsdWVzIHdpbGwgYmUgYmV0d2VlbiAwIGFuZCA5OS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgIH1cbiAgICAgIC5oMSB7XG4gICAgICAgIGNvbG9yOiAjMDUzMDc1XG4gICAgICB9XG4gICAgICAuaDIge1xuICAgICAgICBjb2xvcjogIzA1MzA3NVxuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgfVxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICB9XG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2fce9fe4ddf8a51bada6.hot-update.js.map