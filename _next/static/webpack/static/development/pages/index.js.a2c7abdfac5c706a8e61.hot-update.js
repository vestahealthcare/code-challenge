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
var _jsxFileName = "/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      partOneValue = _useState[0],
      setPartOneValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      partTwoValue = _useState2[0],
      setPartTwoValue = _useState2[1];

  var emailSubject = "\"vesta coding challenge: <Your Name>\"";
  var contactEmail = 'brad@vestahealthcare.com';
  return __jsx("div", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1239445214" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1239445214" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1239445214" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Vesta Coding Challenge"), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Below is your challenge!"), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Please write your code as if it were going into a production application. Once you're finished, please email your code to ", __jsx("a", {
    href: "",
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, contactEmail), " with the subject ", emailSubject), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "There are inputs at the bottom to help you test your code before submitting."), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Here are some online code editors that you may find useful. \xA0", __jsx("a", {
    href: "https://code.sololearn.com/cVRUy2BwauK8#java",
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Java"), "\xA0\xA0", __jsx("a", {
    href: "https://jsbin.com/?html,output",
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Javascript"), "\xA0\xA0", __jsx("a", {
    href: "https://www.katacoda.com/courses/python/playground",
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Python")), __jsx("h2", {
    className: "jsx-1239445214" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Description:"), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling your program what to do."), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Below is a list of what each opcode means:"), __jsx("div", {
    className: "jsx-1239445214" + " " + "opcodes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "99 - The program is finished and should immediately halt")), __jsx("li", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "1 - Adds together numbers read from two positions and stores the result in a third position."), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "The three integers immediately after the opcode in the array tell you these three positions."), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "The first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored."), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum.")), __jsx("li", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "2 - Works exactly like opcode 1, except it multiplies the two inputs instead of adding them.")))), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("h2", {
    className: "jsx-1239445214" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Part I:"), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Run your computer on the Intcode program below and enter the result.  The result should be stored at index 0."), __jsx("div", {
    className: "jsx-1239445214" + " " + "code-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("code", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "[1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39, 1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75, 2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0, 99,2,14,0,0]")), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Enter your result:"), __jsx("input", {
    type: "number",
    value: partOneValue,
    onChange: function onChange(e) {
      setPartOneValue(e.target.value);
    },
    className: "jsx-1239445214" + " " + "number-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), partOneValue !== undefined && (partOneValue === "3895705" ? __jsx("p", {
    className: "jsx-1239445214" + " " + "correct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Correct!") : __jsx("p", {
    className: "jsx-1239445214" + " " + "incorrect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Incorrect!")), __jsx("h2", {
    className: "jsx-1239445214" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Part II:"), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output 19690720? Both values will be between 0 and 99."), __jsx("p", {
    className: "jsx-1239445214",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Enter 100 * input1 + input2:"), __jsx("input", {
    type: "number",
    value: partTwoValue,
    onChange: function onChange(e) {
      setPartTwoValue(e.target.value);
    },
    className: "jsx-1239445214" + " " + "number-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), partTwoValue !== undefined && (partTwoValue === "6417" ? __jsx("p", {
    className: "jsx-1239445214" + " " + "correct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Correct!") : __jsx("p", {
    className: "jsx-1239445214" + " " + "incorrect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Incorrect!")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1239445214",
    __self: this
  }, ".correct.jsx-1239445214{color:#71a310;}.incorrect.jsx-1239445214{color:#e42e00;}.page.jsx-1239445214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}.container.jsx-1239445214{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.h1.jsx-1239445214{color:#164c30;}.h2.jsx-1239445214{color:#053075;}.row.jsx-1239445214{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.code-block.jsx-1239445214{width:90%;padding:5px;background-color:#eeeeee;}.number-input.jsx-1239445214{width:200px;}.opcodes.jsx-1239445214{padding-left:40px;padding-right:40px;}.card.jsx-1239445214{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-1239445214:hover{border-color:#067df7;}.card.jsx-1239445214 h3.jsx-1239445214{margin:0;color:#067df7;font-size:18px;}.card.jsx-1239445214 p.jsx-1239445214{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHa0IsQUFHeUIsQUFHQSxBQUdELEFBUVksQUFRNUIsQUFHQSxBQUVtQixBQU9OLEFBS0UsQUFHTSxBQUlLLEFBUUYsQUFHWixBQUtBLFNBSkssQUFLRyxDQTVCTCxFQUtkLEVBdkNBLEFBR0EsQUFrQkEsQUFHQSxFQUd3QixFQWVILEdBWXJCLENBbkIyQixDQVdiLEFBWUcsRUE1Q0YsQ0FpREUsU0FoQkMsRUFKbEIsQ0FmZSxBQStCZixHQUthLE1BNUJiLElBWXVCLENBaUJ2QixzQkEzRHlCLHlCQVNiLEVBa0NJLFFBakNRLEdBYUgsR0FxQk0seUJBQzNCLGlDQTVDMkIsUUF1QkksTUFiaEIsV0FURixFQVViLFNBVGMsWUFDcUIsZ0NBQ25DLG1EQW9CQSIsImZpbGUiOiIvVXNlcnMvcm9iZXJ0YmF4dGVyL0Rlc2t0b3AvSG9tZXRlYW1Qcm9qZWN0cy9jb2RlLWNoYWxsZW5nZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtwYXJ0T25lVmFsdWUsIHNldFBhcnRPbmVWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcGFydFR3b1ZhbHVlLCBzZXRQYXJ0VHdvVmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgZW1haWxTdWJqZWN0ID0gYFwidmVzdGEgY29kaW5nIGNoYWxsZW5nZTogPFlvdXIgTmFtZT5cImA7XG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9ICdicmFkQHZlc3RhaGVhbHRoY2FyZS5jb20nO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMVwiPlZlc3RhIENvZGluZyBDaGFsbGVuZ2U8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQmVsb3cgaXMgeW91ciBjaGFsbGVuZ2UhXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUGxlYXNlIHdyaXRlIHlvdXIgY29kZSBhcyBpZiBpdCB3ZXJlIGdvaW5nIGludG8gYSBwcm9kdWN0aW9uIGFwcGxpY2F0aW9uLiBPbmNlIHlvdSdyZSBmaW5pc2hlZCwgcGxlYXNlIGVtYWlsIHlvdXIgY29kZSB0byA8YSBocmVmPVwiXCI+e2NvbnRhY3RFbWFpbH08L2E+IHdpdGggdGhlIHN1YmplY3Qge2VtYWlsU3ViamVjdH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGVyZSBhcmUgaW5wdXRzIGF0IHRoZSBib3R0b20gdG8gaGVscCB5b3UgdGVzdCB5b3VyIGNvZGUgYmVmb3JlIHN1Ym1pdHRpbmcuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSGVyZSBhcmUgc29tZSBvbmxpbmUgY29kZSBlZGl0b3JzIHRoYXQgeW91IG1heSBmaW5kIHVzZWZ1bC5cbiAgICAgICAgICAgICZuYnNwOzxhIGhyZWY9XCJodHRwczovL2NvZGUuc29sb2xlYXJuLmNvbS9jVlJVeTJCd2F1SzgjamF2YVwiPkphdmE8L2E+XG4gICAgICAgICAgICAmbmJzcDsmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9qc2Jpbi5jb20vP2h0bWwsb3V0cHV0XCI+SmF2YXNjcmlwdDwvYT5cbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5rYXRhY29kYS5jb20vY291cnNlcy9weXRob24vcGxheWdyb3VuZFwiPlB5dGhvbjwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+RGVzY3JpcHRpb246PC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEFuIEludGNvZGUgcHJvZ3JhbSBpcyBhIGxpc3Qgb2YgaW50ZWdlcnMgc2VwYXJhdGVkIGJ5IGNvbW1hcyAobGlrZSBbMSwwLDAsMyw5OV0pLiBUbyBydW4gb25lLCBzdGFydCBieSBsb29raW5nIGF0IHRoZSBmaXJzdCBpbnRlZ2VyLiBIZXJlLCB5b3Ugd2lsbCBmaW5kIGFuIG9wY29kZSAtIGVpdGhlciAxLCAyLCBvciA5OS4gRWFjaCBvcGNvZGUgaXMgYW4gaW5zdHJ1Y3Rpb24gdGVsbGluZyB5b3VyIHByb2dyYW0gd2hhdCB0byBkby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBCZWxvdyBpcyBhIGxpc3Qgb2Ygd2hhdCBlYWNoIG9wY29kZSBtZWFuczpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGNvZGVzXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDk5IC0gVGhlIHByb2dyYW0gaXMgZmluaXNoZWQgYW5kIHNob3VsZCBpbW1lZGlhdGVseSBoYWx0XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAxIC0gQWRkcyB0b2dldGhlciBudW1iZXJzIHJlYWQgZnJvbSB0d28gcG9zaXRpb25zIGFuZCBzdG9yZXMgdGhlIHJlc3VsdCBpbiBhIHRoaXJkIHBvc2l0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgVGhlIHRocmVlIGludGVnZXJzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBvcGNvZGUgaW4gdGhlIGFycmF5IHRlbGwgeW91IHRoZXNlIHRocmVlIHBvc2l0aW9ucy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBUaGUgZmlyc3QgdHdvIGluZGljYXRlIHRoZSBwb3NpdGlvbnMgZnJvbSB3aGljaCB5b3Ugc2hvdWxkIHJlYWQgdGhlIGlucHV0IHZhbHVlcywgYW5kIHRoZSB0aGlyZCBpbmRpY2F0ZXMgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBvdXRwdXQgc2hvdWxkIGJlIHN0b3JlZC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgaWYgeW91ciBJbnRjb2RlIGNvbXB1dGVyIGVuY291bnRlcnMgMSwxMCwyMCwzMCwgaXQgc2hvdWxkIHJlYWQgdGhlIHZhbHVlcyBhdCBwb3NpdGlvbnMgMTAgYW5kIDIwLCBhZGQgdGhvc2UgdmFsdWVzLCBhbmQgdGhlbiBvdmVyd3JpdGUgdGhlIHZhbHVlIGF0IHBvc2l0aW9uIDMwIHdpdGggdGhlaXIgc3VtLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAyIC0gV29ya3MgZXhhY3RseSBsaWtlIG9wY29kZSAxLCBleGNlcHQgaXQgbXVsdGlwbGllcyB0aGUgdHdvIGlucHV0cyBpbnN0ZWFkIG9mIGFkZGluZyB0aGVtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBPbmNlIHlvdSdyZSBkb25lIHByb2Nlc3NpbmcgYW4gb3Bjb2RlLCBtb3ZlIHRvIHRoZSBuZXh0IG9uZSBieSBzdGVwcGluZyBmb3J3YXJkIDQgcG9zaXRpb25zLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDFcIj5QYXJ0IEk6PC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFJ1biB5b3VyIGNvbXB1dGVyIG9uIHRoZSBJbnRjb2RlIHByb2dyYW0gYmVsb3cgYW5kIGVudGVyIHRoZSByZXN1bHQuICBUaGUgcmVzdWx0IHNob3VsZCBiZSBzdG9yZWQgYXQgaW5kZXggMC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWJsb2NrXCI+XG4gICAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgWzEsMTIsMiwzLDEsMSwyLDMsMSwzLDQsMywxLDUsMCwzLDIsMSw5LDE5LDEsMTksNSwyMywyLDIzLDEzLDI3LDEsMTAsMjcsMzEsMiwzMSw2LDM1LDEsNSwzNSwzOSxcbiAgICAgICAgICAgICAgMSwzOSwxMCw0MywyLDksNDMsNDcsMSw0Nyw1LDUxLDIsNTEsOSw1NSwxLDEzLDU1LDU5LDEsMTMsNTksNjMsMSw2LDYzLDY3LDIsMTMsNjcsNzEsMSwxMCw3MSw3NSxcbiAgICAgICAgICAgICAgMiwxMyw3NSw3OSwxLDUsNzksODMsMiw4Myw5LDg3LDIsODcsMTMsOTEsMSw5MSw1LDk1LDIsOSw5NSw5OSwxLDk5LDUsMTAzLDEsMiwxMDMsMTA3LDEsMTAsMTA3LDAsXG4gICAgICAgICAgICAgIDk5LDIsMTQsMCwwXVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPkVudGVyIHlvdXIgcmVzdWx0OjwvcD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibnVtYmVyLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwYXJ0T25lVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0UGFydE9uZVZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fSAvPlxuICAgICAgICAgIHtwYXJ0T25lVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAocGFydE9uZVZhbHVlID09PSBcIjM4OTU3MDVcIiA/IDxwIGNsYXNzTmFtZT1cImNvcnJlY3RcIj5Db3JyZWN0ITwvcD4gOiA8cCBjbGFzc05hbWU9XCJpbmNvcnJlY3RcIj5JbmNvcnJlY3QhPC9wPil9XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+UGFydCBJSTo8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQXNzdW1pbmcgaW5kZXggMSBhbmQgMiBpbiB0aGUgcHJvdmlkZWQgYXJyYXkgYXJlIGlucHV0cy4gIFdoaWNoIHR3byBpbnB1dHMgd2lsbCBwcm9kdWNlIHRoZSBvdXRwdXQgMTk2OTA3MjA/XG4gICAgICAgICAgICBCb3RoIHZhbHVlcyB3aWxsIGJlIGJldHdlZW4gMCBhbmQgOTkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPkVudGVyIDEwMCAqIGlucHV0MSArIGlucHV0Mjo8L3A+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm51bWJlci1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cGFydFR3b1ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFBhcnRUd29WYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgICB7cGFydFR3b1ZhbHVlICE9PSB1bmRlZmluZWQgJiYgKHBhcnRUd29WYWx1ZSA9PT0gXCI2NDE3XCIgPyA8cCBjbGFzc05hbWU9XCJjb3JyZWN0XCI+Q29ycmVjdCE8L3A+IDogPHAgY2xhc3NOYW1lPVwiaW5jb3JyZWN0XCI+SW5jb3JyZWN0ITwvcD4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb3JyZWN0IHtcbiAgICAgICAgICBjb2xvcjogIzcxYTMxMDtcbiAgICAgICAgfVxuICAgICAgICAuaW5jb3JyZWN0IHtcbiAgICAgICAgICBjb2xvcjogI2U0MmUwMDtcbiAgICAgICAgfVxuICAgICAgICAucGFnZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oMSB7XG4gICAgICAgICAgY29sb3I6ICMxNjRjMzBcbiAgICAgICAgfVxuICAgICAgICAuaDIge1xuICAgICAgICAgIGNvbG9yOiAjMDUzMDc1XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuICAgICAgICAuY29kZS1ibG9jayB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICAgICAgfVxuICAgICAgICAubnVtYmVyLWlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm9wY29kZXMge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.a2c7abdfac5c706a8e61.hot-update.js.map