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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      partOneValue = _useState[0],
      setPartOneValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      partTwoValue = _useState2[0],
      setPartTwoValue = _useState2[1];

  return __jsx("div", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Coding Challenge"), __jsx("link", {
    rel: "image",
    href: "/production.png",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2877626288" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2877626288" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2877626288" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Hometeam coding challenge"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Below is your challenge!  Please write your code as if it were going into a production application.  There are inputs that will help you validate your answer before submitting.  Once you're finished, please email your code to ", __jsx("a", {
    href: "",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "brad@hometeamcare.com")), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Here are some online code editors that you may find useful. \xA0", __jsx("a", {
    href: "https://code.sololearn.com/cVRUy2BwauK8#java",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Java"), "\xA0\xA0", __jsx("a", {
    href: "https://jsbin.com/?html,output",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Javascript"), "\xA0\xA0", __jsx("a", {
    href: "https://www.katacoda.com/courses/python/playground",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Python")), __jsx("h2", {
    className: "jsx-2877626288" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Description:"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling your program what to do."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Below is a list of all possible opcodes:"), __jsx("div", {
    className: "jsx-2877626288" + " " + "opcodes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "99 - The program is finished and should immediately halt"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "1 - Adds together numbers read from two positions and stores the result in a third position."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "The three integers immediately after the opcode in the array tell you these three positions."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "The first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "2 - Works exactly like opcode 1, except it multiplies the two inputs instead of adding them.")), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("h2", {
    className: "jsx-2877626288" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Part I:"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Run your computer on the Intcode program below and enter the result.  The result should be stored at index 0."), __jsx("div", {
    className: "jsx-2877626288" + " " + "code-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("code", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39, 1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75, 2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0, 99,2,14,0,0]")), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Enter your result:"), __jsx("input", {
    type: "number",
    value: partOneValue,
    onChange: function onChange(e) {
      setPartOneValue(e.target.value);
    },
    className: "jsx-2877626288" + " " + "number-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), partOneValue !== undefined && (partOneValue === "3895705" ? __jsx("p", {
    className: "jsx-2877626288" + " " + "correct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Correct!") : __jsx("p", {
    className: "jsx-2877626288" + " " + "incorrect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Incorrect!")), __jsx("h2", {
    className: "jsx-2877626288" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Part II:"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output 19690720? Both values will be between 0 and 99."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Enter 100 * input1 + input2:"), __jsx("input", {
    type: "number",
    value: partTwoValue,
    onChange: function onChange(e) {
      setPartTwoValue(e.target.value);
    },
    className: "jsx-2877626288" + " " + "number-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), partTwoValue !== undefined && (partTwoValue === "6417" ? __jsx("p", {
    className: "jsx-2877626288" + " " + "correct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Correct!") : __jsx("p", {
    className: "jsx-2877626288" + " " + "incorrect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Incorrect!")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2877626288",
    __self: this
  }, ".correct.jsx-2877626288{color:#71a310;}.incorrect.jsx-2877626288{color:#e42e00;}.page.jsx-2877626288{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}.container.jsx-2877626288{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.h1.jsx-2877626288{color:#053075;}.h2.jsx-2877626288{color:#053075;}.row.jsx-2877626288{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.code-block.jsx-2877626288{width:90%;padding:5px;background-color:#eeeeee;}.number-input.jsx-2877626288{width:200px;}.opcodes.jsx-2877626288{padding-left:40px;padding-right:40px;}.card.jsx-2877626288{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-2877626288:hover{border-color:#067df7;}.card.jsx-2877626288 h3.jsx-2877626288{margin:0;color:#067df7;font-size:18px;}.card.jsx-2877626288 p.jsx-2877626288{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ga0IsQUFHeUIsQUFHQSxBQUdELEFBUVksQUFRNUIsQUFHQSxBQUVtQixBQU9OLEFBS0UsQUFHTSxBQUlLLEFBUUYsQUFHWixBQUtBLFNBSkssQUFLRyxDQTVCTCxFQUtkLEVBdkNBLEFBR0EsQUFrQkEsQUFHQSxFQUd3QixFQWVILEdBWXJCLENBbkIyQixDQVdiLEFBWUcsRUE1Q0YsQ0FpREUsU0FoQkMsRUFKbEIsQ0FmZSxBQStCZixHQUthLE1BNUJiLElBWXVCLENBaUJ2QixzQkEzRHlCLHlCQVNiLEVBa0NJLFFBakNRLEdBYUgsR0FxQk0seUJBQzNCLGlDQTVDMkIsUUF1QkksTUFiaEIsV0FURixFQVViLFNBVGMsWUFDcUIsZ0NBQ25DLG1EQW9CQSIsImZpbGUiOiIvVXNlcnMvcm9iZXJ0YmF4dGVyL0Rlc2t0b3AvSG9tZXRlYW1Qcm9qZWN0cy9jb2RlLWNoYWxsZW5nZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbcGFydE9uZVZhbHVlLCBzZXRQYXJ0T25lVmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3BhcnRUd29WYWx1ZSwgc2V0UGFydFR3b1ZhbHVlXSA9IHVzZVN0YXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db2RpbmcgQ2hhbGxlbmdlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaW1hZ2VcIiBocmVmPVwiL3Byb2R1Y3Rpb24ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+SG9tZXRlYW0gY29kaW5nIGNoYWxsZW5nZTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBCZWxvdyBpcyB5b3VyIGNoYWxsZW5nZSEgIFBsZWFzZSB3cml0ZSB5b3VyIGNvZGUgYXMgaWYgaXQgd2VyZSBnb2luZyBpbnRvIGEgcHJvZHVjdGlvbiBhcHBsaWNhdGlvbi4gIFRoZXJlIGFyZSBpbnB1dHMgdGhhdCB3aWxsIGhlbHAgeW91IHZhbGlkYXRlIHlvdXIgYW5zd2VyIGJlZm9yZSBzdWJtaXR0aW5nLiAgT25jZSB5b3UncmUgZmluaXNoZWQsIHBsZWFzZSBlbWFpbCB5b3VyIGNvZGUgdG8gPGEgaHJlZj1cIlwiPmJyYWRAaG9tZXRlYW1jYXJlLmNvbTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBIZXJlIGFyZSBzb21lIG9ubGluZSBjb2RlIGVkaXRvcnMgdGhhdCB5b3UgbWF5IGZpbmQgdXNlZnVsLlxuICAgICAgICAgICAgJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vY29kZS5zb2xvbGVhcm4uY29tL2NWUlV5MkJ3YXVLOCNqYXZhXCI+SmF2YTwvYT5cbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxhIGhyZWY9XCJodHRwczovL2pzYmluLmNvbS8/aHRtbCxvdXRwdXRcIj5KYXZhc2NyaXB0PC9hPlxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmthdGFjb2RhLmNvbS9jb3Vyc2VzL3B5dGhvbi9wbGF5Z3JvdW5kXCI+UHl0aG9uPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDFcIj5EZXNjcmlwdGlvbjo8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQW4gSW50Y29kZSBwcm9ncmFtIGlzIGEgbGlzdCBvZiBpbnRlZ2VycyBzZXBhcmF0ZWQgYnkgY29tbWFzIChsaWtlIFsxLDAsMCwzLDk5XSkuIFRvIHJ1biBvbmUsIHN0YXJ0IGJ5IGxvb2tpbmcgYXQgdGhlIGZpcnN0IGludGVnZXIuIEhlcmUsIHlvdSB3aWxsIGZpbmQgYW4gb3Bjb2RlIC0gZWl0aGVyIDEsIDIsIG9yIDk5LiBFYWNoIG9wY29kZSBpcyBhbiBpbnN0cnVjdGlvbiB0ZWxsaW5nIHlvdXIgcHJvZ3JhbSB3aGF0IHRvIGRvLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEJlbG93IGlzIGEgbGlzdCBvZiBhbGwgcG9zc2libGUgb3Bjb2RlczpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGNvZGVzXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgOTkgLSBUaGUgcHJvZ3JhbSBpcyBmaW5pc2hlZCBhbmQgc2hvdWxkIGltbWVkaWF0ZWx5IGhhbHRcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAxIC0gQWRkcyB0b2dldGhlciBudW1iZXJzIHJlYWQgZnJvbSB0d28gcG9zaXRpb25zIGFuZCBzdG9yZXMgdGhlIHJlc3VsdCBpbiBhIHRoaXJkIHBvc2l0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSB0aHJlZSBpbnRlZ2VycyBpbW1lZGlhdGVseSBhZnRlciB0aGUgb3Bjb2RlIGluIHRoZSBhcnJheSB0ZWxsIHlvdSB0aGVzZSB0aHJlZSBwb3NpdGlvbnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhlIGZpcnN0IHR3byBpbmRpY2F0ZSB0aGUgcG9zaXRpb25zIGZyb20gd2hpY2ggeW91IHNob3VsZCByZWFkIHRoZSBpbnB1dCB2YWx1ZXMsIGFuZCB0aGUgdGhpcmQgaW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgb3V0cHV0IHNob3VsZCBiZSBzdG9yZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5Gb3IgZXhhbXBsZSwgaWYgeW91ciBJbnRjb2RlIGNvbXB1dGVyIGVuY291bnRlcnMgMSwxMCwyMCwzMCwgaXQgc2hvdWxkIHJlYWQgdGhlIHZhbHVlcyBhdCBwb3NpdGlvbnMgMTAgYW5kIDIwLCBhZGQgdGhvc2UgdmFsdWVzLCBhbmQgdGhlbiBvdmVyd3JpdGUgdGhlIHZhbHVlIGF0IHBvc2l0aW9uIDMwIHdpdGggdGhlaXIgc3VtLjwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAyIC0gV29ya3MgZXhhY3RseSBsaWtlIG9wY29kZSAxLCBleGNlcHQgaXQgbXVsdGlwbGllcyB0aGUgdHdvIGlucHV0cyBpbnN0ZWFkIG9mIGFkZGluZyB0aGVtLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgT25jZSB5b3UncmUgZG9uZSBwcm9jZXNzaW5nIGFuIG9wY29kZSwgbW92ZSB0byB0aGUgbmV4dCBvbmUgYnkgc3RlcHBpbmcgZm9yd2FyZCA0IHBvc2l0aW9ucy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+UGFydCBJOjwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSdW4geW91ciBjb21wdXRlciBvbiB0aGUgSW50Y29kZSBwcm9ncmFtIGJlbG93IGFuZCBlbnRlciB0aGUgcmVzdWx0LiAgVGhlIHJlc3VsdCBzaG91bGQgYmUgc3RvcmVkIGF0IGluZGV4IDAuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1ibG9ja1wiPlxuICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgIFsxLDAsMCwzLDEsMSwyLDMsMSwzLDQsMywxLDUsMCwzLDIsMSw5LDE5LDEsMTksNSwyMywyLDIzLDEzLDI3LDEsMTAsMjcsMzEsMiwzMSw2LDM1LDEsNSwzNSwzOSxcbiAgICAgICAgICAgICAgMSwzOSwxMCw0MywyLDksNDMsNDcsMSw0Nyw1LDUxLDIsNTEsOSw1NSwxLDEzLDU1LDU5LDEsMTMsNTksNjMsMSw2LDYzLDY3LDIsMTMsNjcsNzEsMSwxMCw3MSw3NSxcbiAgICAgICAgICAgICAgMiwxMyw3NSw3OSwxLDUsNzksODMsMiw4Myw5LDg3LDIsODcsMTMsOTEsMSw5MSw1LDk1LDIsOSw5NSw5OSwxLDk5LDUsMTAzLDEsMiwxMDMsMTA3LDEsMTAsMTA3LDAsXG4gICAgICAgICAgICAgIDk5LDIsMTQsMCwwXVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPkVudGVyIHlvdXIgcmVzdWx0OjwvcD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibnVtYmVyLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwYXJ0T25lVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0UGFydE9uZVZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fS8+XG4gICAgICAgICAge3BhcnRPbmVWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIChwYXJ0T25lVmFsdWUgPT09IFwiMzg5NTcwNVwiID8gPHAgY2xhc3NOYW1lPVwiY29ycmVjdFwiPkNvcnJlY3QhPC9wPiA6IDxwIGNsYXNzTmFtZT1cImluY29ycmVjdFwiPkluY29ycmVjdCE8L3A+KX1cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDFcIj5QYXJ0IElJOjwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBc3N1bWluZyBpbmRleCAxIGFuZCAyIGluIHRoZSBwcm92aWRlZCBhcnJheSBhcmUgaW5wdXRzLiAgV2hpY2ggdHdvIGlucHV0cyB3aWxsIHByb2R1Y2UgdGhlIG91dHB1dCAxOTY5MDcyMD9cbiAgICAgICAgICAgIEJvdGggdmFsdWVzIHdpbGwgYmUgYmV0d2VlbiAwIGFuZCA5OS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+RW50ZXIgMTAwICogaW5wdXQxICsgaW5wdXQyOjwvcD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibnVtYmVyLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwYXJ0VHdvVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0UGFydFR3b1ZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fS8+XG4gICAgICAgICAge3BhcnRUd29WYWx1ZSAhPT0gdW5kZWZpbmVkICYmIChwYXJ0VHdvVmFsdWUgPT09IFwiNjQxN1wiID8gPHAgY2xhc3NOYW1lPVwiY29ycmVjdFwiPkNvcnJlY3QhPC9wPiA6IDxwIGNsYXNzTmFtZT1cImluY29ycmVjdFwiPkluY29ycmVjdCE8L3A+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29ycmVjdCB7XG4gICAgICAgICAgY29sb3I6ICM3MWEzMTA7XG4gICAgICAgIH1cbiAgICAgICAgLmluY29ycmVjdCB7XG4gICAgICAgICAgY29sb3I6ICNlNDJlMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaDEge1xuICAgICAgICAgIGNvbG9yOiAjMDUzMDc1XG4gICAgICAgIH1cbiAgICAgICAgLmgyIHtcbiAgICAgICAgICBjb2xvcjogIzA1MzA3NVxuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvZGUtYmxvY2sge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgIH1cbiAgICAgICAgLm51bWJlci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vcGNvZGVzIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d219bff551a0a29b4b49.hot-update.js.map