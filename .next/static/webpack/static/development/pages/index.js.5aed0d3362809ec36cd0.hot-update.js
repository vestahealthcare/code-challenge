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
    className: "jsx-2978858153",
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
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Coding Challenge"), __jsx("link", {
    rel: "image",
    href: "/production.png",
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2978858153" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2978858153" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2978858153" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hometeam coding challenge"), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Below you will find a coding challenge.  Please write your code as if it were going into production.  There are inputs that will help you validate your answer before submitting.  Once you're finished, please email your solution to brad@bradbrad"), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Here are some online code editors that you may find useful. \xA0", __jsx("a", {
    href: "https://code.sololearn.com/cVRUy2BwauK8#java",
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Java"), "\xA0\xA0", __jsx("a", {
    href: "https://jsbin.com/?html,output",
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Javascript"), "\xA0\xA0", __jsx("a", {
    href: "https://www.katacoda.com/courses/python/playground",
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Python")), __jsx("h2", {
    className: "jsx-2978858153" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Description:"), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling your program what to do."), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Below is a list of all possible opcodes:"), __jsx("div", {
    className: "jsx-2978858153" + " " + "opcodes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "99 - The program is finished and should immediately halt"), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "1 - Adds together numbers read from two positions and stores the result in a third position."), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored. For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "2 - works exactly like opcode 1, except it multiplies the two inputs instead of adding them.")), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("h2", {
    className: "jsx-2978858153" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Part I:"), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Run your computer on the given input and enter the result.  The result should be stored at index 0."), __jsx("code", {
    className: "jsx-2978858153" + " " + "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39,1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75,2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0,99,2,14,0,0]"), __jsx("h2", {
    className: "jsx-2978858153" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Part II:"), __jsx("p", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output ", __jsx("code", {
    className: "jsx-2978858153",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "19690720"), "? Both values will be between 0 and 99."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2978858153",
    __self: this
  }, ".page.jsx-2978858153{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}.container.jsx-2978858153{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.h1.jsx-2978858153{color:#053075;}.h2.jsx-2978858153{color:#053075;}.row.jsx-2978858153{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.code.jsx-2978858153{display:block;}.opcodes.jsx-2978858153{padding-left:40px;padding-right:40px;}.card.jsx-2978858153{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-2978858153:hover{border-color:#067df7;}.card.jsx-2978858153 h3.jsx-2978858153{margin:0;color:#067df7;font-size:18px;}.card.jsx-2978858153 p.jsx-2978858153{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREZ0IsQUFHc0IsQUFRWSxBQVE1QixBQUdBLEFBRW1CLEFBT0YsQUFHSSxBQUlLLEFBUUYsQUFHWixBQUtBLFNBSkssQUFLRyxLQXBDbkIsQUFHQSxBQVVBLEVBUHdCLEVBVUgsR0FZckIsRUFSYyxBQVlHLEVBdkNGLENBNENFLFNBaEJDLEVBSmxCLENBVmUsQUEwQmYsR0FLYSxVQWhCVSxDQWlCdkIsc0JBdER5Qix5QkFTYixFQTZCSSxRQTVCUSxHQWFILEdBZ0JNLHlCQUMzQixpQ0F2QzJCLFFBdUJJLE1BYmhCLFdBVEYsRUFVYixTQVRjLFlBQ3FCLGdDQUNuQyxtREFvQkEiLCJmaWxlIjoiL1VzZXJzL3JvYmVydGJheHRlci9EZXNrdG9wL0hvbWV0ZWFtUHJvamVjdHMvY29kZS1jaGFsbGVuZ2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q29kaW5nIENoYWxsZW5nZTwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpbWFnZVwiIGhyZWY9XCIvcHJvZHVjdGlvbi5wbmdcIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+SG9tZXRlYW0gY29kaW5nIGNoYWxsZW5nZTwvaDE+XG4gICAgICAgIDxwPkJlbG93IHlvdSB3aWxsIGZpbmQgYSBjb2RpbmcgY2hhbGxlbmdlLiAgUGxlYXNlIHdyaXRlIHlvdXIgY29kZSBhcyBpZiBpdCB3ZXJlIGdvaW5nIGludG8gcHJvZHVjdGlvbi4gIFRoZXJlIGFyZSBpbnB1dHMgdGhhdCB3aWxsIGhlbHAgeW91IHZhbGlkYXRlIHlvdXIgYW5zd2VyIGJlZm9yZSBzdWJtaXR0aW5nLiAgT25jZSB5b3UncmUgZmluaXNoZWQsIHBsZWFzZSBlbWFpbCB5b3VyIHNvbHV0aW9uIHRvIGJyYWRAYnJhZGJyYWQ8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEhlcmUgYXJlIHNvbWUgb25saW5lIGNvZGUgZWRpdG9ycyB0aGF0IHlvdSBtYXkgZmluZCB1c2VmdWwuXG4gICAgICAgICAgJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vY29kZS5zb2xvbGVhcm4uY29tL2NWUlV5MkJ3YXVLOCNqYXZhXCI+SmF2YTwvYT5cbiAgICAgICAgICAmbmJzcDsmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9qc2Jpbi5jb20vP2h0bWwsb3V0cHV0XCI+SmF2YXNjcmlwdDwvYT5cbiAgICAgICAgICAmbmJzcDsmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly93d3cua2F0YWNvZGEuY29tL2NvdXJzZXMvcHl0aG9uL3BsYXlncm91bmRcIj5QeXRob248L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+RGVzY3JpcHRpb246PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQW4gSW50Y29kZSBwcm9ncmFtIGlzIGEgbGlzdCBvZiBpbnRlZ2VycyBzZXBhcmF0ZWQgYnkgY29tbWFzIChsaWtlIFsxLDAsMCwzLDk5XSkuIFRvIHJ1biBvbmUsIHN0YXJ0IGJ5IGxvb2tpbmcgYXQgdGhlIGZpcnN0IGludGVnZXIuIEhlcmUsIHlvdSB3aWxsIGZpbmQgYW4gb3Bjb2RlIC0gZWl0aGVyIDEsIDIsIG9yIDk5LiBFYWNoIG9wY29kZSBpcyBhbiBpbnN0cnVjdGlvbiB0ZWxsaW5nIHlvdXIgcHJvZ3JhbSB3aGF0IHRvIGRvLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEJlbG93IGlzIGEgbGlzdCBvZiBhbGwgcG9zc2libGUgb3Bjb2RlczpcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wY29kZXNcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDk5IC0gVGhlIHByb2dyYW0gaXMgZmluaXNoZWQgYW5kIHNob3VsZCBpbW1lZGlhdGVseSBoYWx0XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgMSAtIEFkZHMgdG9nZXRoZXIgbnVtYmVycyByZWFkIGZyb20gdHdvIHBvc2l0aW9ucyBhbmQgc3RvcmVzIHRoZSByZXN1bHQgaW4gYSB0aGlyZCBwb3NpdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIHRocmVlIGludGVnZXJzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBvcGNvZGUgdGVsbCB5b3UgdGhlc2UgdGhyZWUgcG9zaXRpb25zIC0gdGhlIGZpcnN0IHR3byBpbmRpY2F0ZSB0aGUgcG9zaXRpb25zIGZyb20gd2hpY2ggeW91IHNob3VsZCByZWFkIHRoZSBpbnB1dCB2YWx1ZXMsIGFuZCB0aGUgdGhpcmQgaW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgb3V0cHV0IHNob3VsZCBiZSBzdG9yZWQuXG4gICAgICAgICAgICAgIEZvciBleGFtcGxlLCBpZiB5b3VyIEludGNvZGUgY29tcHV0ZXIgZW5jb3VudGVycyAxLDEwLDIwLDMwLCBpdCBzaG91bGQgcmVhZCB0aGUgdmFsdWVzIGF0IHBvc2l0aW9ucyAxMCBhbmQgMjAsIGFkZCB0aG9zZSB2YWx1ZXMsIGFuZCB0aGVuIG92ZXJ3cml0ZSB0aGUgdmFsdWUgYXQgcG9zaXRpb24gMzAgd2l0aCB0aGVpciBzdW0uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgMiAtIHdvcmtzIGV4YWN0bHkgbGlrZSBvcGNvZGUgMSwgZXhjZXB0IGl0IG11bHRpcGxpZXMgdGhlIHR3byBpbnB1dHMgaW5zdGVhZCBvZiBhZGRpbmcgdGhlbS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBPbmNlIHlvdSdyZSBkb25lIHByb2Nlc3NpbmcgYW4gb3Bjb2RlLCBtb3ZlIHRvIHRoZSBuZXh0IG9uZSBieSBzdGVwcGluZyBmb3J3YXJkIDQgcG9zaXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMVwiPlBhcnQgSTo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBSdW4geW91ciBjb21wdXRlciBvbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIGVudGVyIHRoZSByZXN1bHQuICBUaGUgcmVzdWx0IHNob3VsZCBiZSBzdG9yZWQgYXQgaW5kZXggMC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJjb2RlXCI+XG4gICAgICAgICAgICBbMSwwLDAsMywxLDEsMiwzLDEsMyw0LDMsMSw1LDAsMywyLDEsOSwxOSwxLDE5LDUsMjMsMiwyMywxMywyNywxLDEwLDI3LDMxLDIsMzEsNiwzNSwxLDUsMzUsMzksMSwzOSwxMCw0MywyLDksNDMsNDcsMSw0Nyw1LDUxLDIsNTEsOSw1NSwxLDEzLDU1LDU5LDEsMTMsNTksNjMsMSw2LDYzLDY3LDIsMTMsNjcsNzEsMSwxMCw3MSw3NSwyLDEzLDc1LDc5LDEsNSw3OSw4MywyLDgzLDksODcsMiw4NywxMyw5MSwxLDkxLDUsOTUsMiw5LDk1LDk5LDEsOTksNSwxMDMsMSwyLDEwMywxMDcsMSwxMCwxMDcsMCw5OSwyLDE0LDAsMF1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMVwiPlBhcnQgSUk6PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQXNzdW1pbmcgaW5kZXggMSBhbmQgMiBpbiB0aGUgcHJvdmlkZWQgYXJyYXkgYXJlIGlucHV0cy4gIFdoaWNoIHR3byBpbnB1dHMgd2lsbCBwcm9kdWNlIHRoZSBvdXRwdXQgPGNvZGU+MTk2OTA3MjA8L2NvZGU+P1xuICAgICAgICAgIEJvdGggdmFsdWVzIHdpbGwgYmUgYmV0d2VlbiAwIGFuZCA5OS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgIH1cbiAgICAgIC5oMSB7XG4gICAgICAgIGNvbG9yOiAjMDUzMDc1XG4gICAgICB9XG4gICAgICAuaDIge1xuICAgICAgICBjb2xvcjogIzA1MzA3NVxuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmNvZGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIC5vcGNvZGVzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgfVxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICB9XG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5aed0d3362809ec36cd0.hot-update.js.map