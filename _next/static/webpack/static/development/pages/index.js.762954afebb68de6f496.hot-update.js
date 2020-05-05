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
  }, ".correct.jsx-1239445214{color:#71a310;}.incorrect.jsx-1239445214{color:#e42e00;}.page.jsx-1239445214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}.container.jsx-1239445214{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.h1.jsx-1239445214{color:#164c30;}.h2.jsx-1239445214{color:#053075;}.row.jsx-1239445214{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.code-block.jsx-1239445214{width:90%;padding:5px;background-color:#eeeeee;}.number-input.jsx-1239445214{width:200px;}.opcodes.jsx-1239445214{padding-left:40px;padding-right:40px;}.card.jsx-1239445214{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-1239445214:hover{border-color:#067df7;}.card.jsx-1239445214 h3.jsx-1239445214{margin:0;color:#067df7;font-size:18px;}.card.jsx-1239445214 p.jsx-1239445214{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHa0IsQUFHeUIsQUFHQSxBQUdELEFBUVksQUFRNUIsQUFHQSxBQUVtQixBQU9OLEFBS0UsQUFHTSxBQUlLLEFBUUYsQUFHWixBQUtBLFNBSkssQUFLRyxDQTVCTCxFQUtkLEVBdkNBLEFBR0EsQUFrQkEsQUFHQSxFQUd3QixFQWVILEdBWXJCLENBbkIyQixDQVdiLEFBWUcsRUE1Q0YsQ0FpREUsU0FoQkMsRUFKbEIsQ0FmZSxBQStCZixHQUthLE1BNUJiLElBWXVCLENBaUJ2QixzQkEzRHlCLHlCQVNiLEVBa0NJLFFBakNRLEdBYUgsR0FxQk0seUJBQzNCLGlDQTVDMkIsUUF1QkksTUFiaEIsV0FURixFQVViLFNBVGMsWUFDcUIsZ0NBQ25DLG1EQW9CQSIsImZpbGUiOiIvVXNlcnMvcm9iZXJ0YmF4dGVyL0Rlc2t0b3AvSG9tZXRlYW1Qcm9qZWN0cy9jb2RlLWNoYWxsZW5nZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtwYXJ0T25lVmFsdWUsIHNldFBhcnRPbmVWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcGFydFR3b1ZhbHVlLCBzZXRQYXJ0VHdvVmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgZW1haWxTdWJqZWN0ID0gYFwidmVzdGEgY29kaW5nIGNoYWxsZW5nZTogPFlvdXIgTmFtZT5cImA7XG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9ICdicmFkQHZlc3RhaGVhbHRoY2FyZS5jb20nO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMVwiPlZlc3RhIENvZGluZyBDaGFsbGVuZ2U8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQmVsb3cgaXMgeW91ciBjaGFsbGVuZ2UhXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUGxlYXNlIHdyaXRlIHlvdXIgY29kZSBhcyBpZiBpdCB3ZXJlIGdvaW5nIGludG8gYSBwcm9kdWN0aW9uIGFwcGxpY2F0aW9uLiBPbmNlIHlvdSdyZSBmaW5pc2hlZCwgcGxlYXNlIGVtYWlsIHlvdXIgY29kZSB0byA8YSBocmVmPVwiXCI+e2NvbnRhY3RFbWFpbH08L2E+IHdpdGggdGhlIHN1YmplY3Qge2VtYWlsU3ViamVjdH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGVyZSBhcmUgaW5wdXRzIGF0IHRoZSBib3R0b20gdG8gaGVscCB5b3UgdGVzdCB5b3VyIGNvZGUgYmVmb3JlIHN1Ym1pdHRpbmcuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSGVyZSBhcmUgc29tZSBvbmxpbmUgY29kZSBlZGl0b3JzIHRoYXQgeW91IG1heSBmaW5kIHVzZWZ1bC5cbiAgICAgICAgICAgICZuYnNwOzxhIGhyZWY9XCJodHRwczovL2NvZGUuc29sb2xlYXJuLmNvbS9jVlJVeTJCd2F1SzgjamF2YVwiPkphdmE8L2E+XG4gICAgICAgICAgICAmbmJzcDsmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9qc2Jpbi5jb20vP2h0bWwsb3V0cHV0XCI+SmF2YXNjcmlwdDwvYT5cbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5rYXRhY29kYS5jb20vY291cnNlcy9weXRob24vcGxheWdyb3VuZFwiPlB5dGhvbjwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+RGVzY3JpcHRpb246PC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEFuIEludGNvZGUgcHJvZ3JhbSBpcyBhIGxpc3Qgb2YgaW50ZWdlcnMgc2VwYXJhdGVkIGJ5IGNvbW1hcyAobGlrZSBbMSwwLDAsMyw5OV0pLiBUbyBydW4gb25lLCBzdGFydCBieSBsb29raW5nIGF0IHRoZSBmaXJzdCBpbnRlZ2VyLiBIZXJlLCB5b3Ugd2lsbCBmaW5kIGFuIG9wY29kZSAtIGVpdGhlciAxLCAyLCBvciA5OS4gRWFjaCBvcGNvZGUgaXMgYW4gaW5zdHJ1Y3Rpb24gdGVsbGluZyB5b3VyIHByb2dyYW0gd2hhdCB0byBkby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBCZWxvdyBpcyBhIGxpc3Qgb2Ygd2hhdCBlYWNoIG9wY29kZSBtZWFuczpcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGNvZGVzXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDk5IC0gVGhlIHByb2dyYW0gaXMgZmluaXNoZWQgYW5kIHNob3VsZCBpbW1lZGlhdGVseSBoYWx0XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAxIC0gQWRkcyB0b2dldGhlciBudW1iZXJzIHJlYWQgZnJvbSB0d28gcG9zaXRpb25zIGFuZCBzdG9yZXMgdGhlIHJlc3VsdCBpbiBhIHRoaXJkIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFRoZSB0aHJlZSBpbnRlZ2VycyBpbW1lZGlhdGVseSBhZnRlciB0aGUgb3Bjb2RlIGluIHRoZSBhcnJheSB0ZWxsIHlvdSB0aGVzZSB0aHJlZSBwb3NpdGlvbnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgVGhlIGZpcnN0IHR3byBpbmRpY2F0ZSB0aGUgcG9zaXRpb25zIGZyb20gd2hpY2ggeW91IHNob3VsZCByZWFkIHRoZSBpbnB1dCB2YWx1ZXMsIGFuZCB0aGUgdGhpcmQgaW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgb3V0cHV0IHNob3VsZCBiZSBzdG9yZWQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIGlmIHlvdXIgSW50Y29kZSBjb21wdXRlciBlbmNvdW50ZXJzIDEsMTAsMjAsMzAsIGl0IHNob3VsZCByZWFkIHRoZSB2YWx1ZXMgYXQgcG9zaXRpb25zIDEwIGFuZCAyMCwgYWRkIHRob3NlIHZhbHVlcywgYW5kIHRoZW4gb3ZlcndyaXRlIHRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAzMCB3aXRoIHRoZWlyIHN1bS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgMiAtIFdvcmtzIGV4YWN0bHkgbGlrZSBvcGNvZGUgMSwgZXhjZXB0IGl0IG11bHRpcGxpZXMgdGhlIHR3byBpbnB1dHMgaW5zdGVhZCBvZiBhZGRpbmcgdGhlbS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgT25jZSB5b3UncmUgZG9uZSBwcm9jZXNzaW5nIGFuIG9wY29kZSwgbW92ZSB0byB0aGUgbmV4dCBvbmUgYnkgc3RlcHBpbmcgZm9yd2FyZCA0IHBvc2l0aW9ucy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+UGFydCBJOjwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBSdW4geW91ciBjb21wdXRlciBvbiB0aGUgSW50Y29kZSBwcm9ncmFtIGJlbG93IGFuZCBlbnRlciB0aGUgcmVzdWx0LiAgVGhlIHJlc3VsdCBzaG91bGQgYmUgc3RvcmVkIGF0IGluZGV4IDAuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1ibG9ja1wiPlxuICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgIFsxLDEyLDIsMywxLDEsMiwzLDEsMyw0LDMsMSw1LDAsMywyLDEsOSwxOSwxLDE5LDUsMjMsMiwyMywxMywyNywxLDEwLDI3LDMxLDIsMzEsNiwzNSwxLDUsMzUsMzksXG4gICAgICAgICAgICAgIDEsMzksMTAsNDMsMiw5LDQzLDQ3LDEsNDcsNSw1MSwyLDUxLDksNTUsMSwxMyw1NSw1OSwxLDEzLDU5LDYzLDEsNiw2Myw2NywyLDEzLDY3LDcxLDEsMTAsNzEsNzUsXG4gICAgICAgICAgICAgIDIsMTMsNzUsNzksMSw1LDc5LDgzLDIsODMsOSw4NywyLDg3LDEzLDkxLDEsOTEsNSw5NSwyLDksOTUsOTksMSw5OSw1LDEwMywxLDIsMTAzLDEwNywxLDEwLDEwNywwLFxuICAgICAgICAgICAgICA5OSwyLDE0LDAsMF1cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5FbnRlciB5b3VyIHJlc3VsdDo8L3A+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm51bWJlci1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cGFydE9uZVZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFBhcnRPbmVWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgICB7cGFydE9uZVZhbHVlICE9PSB1bmRlZmluZWQgJiYgKHBhcnRPbmVWYWx1ZSA9PT0gXCIzODk1NzA1XCIgPyA8cCBjbGFzc05hbWU9XCJjb3JyZWN0XCI+Q29ycmVjdCE8L3A+IDogPHAgY2xhc3NOYW1lPVwiaW5jb3JyZWN0XCI+SW5jb3JyZWN0ITwvcD4pfVxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMVwiPlBhcnQgSUk6PC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEFzc3VtaW5nIGluZGV4IDEgYW5kIDIgaW4gdGhlIHByb3ZpZGVkIGFycmF5IGFyZSBpbnB1dHMuICBXaGljaCB0d28gaW5wdXRzIHdpbGwgcHJvZHVjZSB0aGUgb3V0cHV0IDE5NjkwNzIwP1xuICAgICAgICAgICAgQm90aCB2YWx1ZXMgd2lsbCBiZSBiZXR3ZWVuIDAgYW5kIDk5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5FbnRlciAxMDAgKiBpbnB1dDEgKyBpbnB1dDI6PC9wPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJudW1iZXItaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3BhcnRUd29WYWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRQYXJ0VHdvVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19IC8+XG4gICAgICAgICAge3BhcnRUd29WYWx1ZSAhPT0gdW5kZWZpbmVkICYmIChwYXJ0VHdvVmFsdWUgPT09IFwiNjQxN1wiID8gPHAgY2xhc3NOYW1lPVwiY29ycmVjdFwiPkNvcnJlY3QhPC9wPiA6IDxwIGNsYXNzTmFtZT1cImluY29ycmVjdFwiPkluY29ycmVjdCE8L3A+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29ycmVjdCB7XG4gICAgICAgICAgY29sb3I6ICM3MWEzMTA7XG4gICAgICAgIH1cbiAgICAgICAgLmluY29ycmVjdCB7XG4gICAgICAgICAgY29sb3I6ICNlNDJlMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaDEge1xuICAgICAgICAgIGNvbG9yOiAjMTY0YzMwXG4gICAgICAgIH1cbiAgICAgICAgLmgyIHtcbiAgICAgICAgICBjb2xvcjogIzA1MzA3NVxuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvZGUtYmxvY2sge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgIH1cbiAgICAgICAgLm51bWJlci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vcGNvZGVzIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.762954afebb68de6f496.hot-update.js.map