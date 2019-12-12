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

  var emailSubject = "\"hometeam coding challenge: <Your Name>\"";
  return __jsx("div", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Coding Challenge"), __jsx("link", {
    rel: "image",
    href: "/production.png",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2877626288" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2877626288" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2877626288" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Hometeam coding challenge"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Below is your challenge!"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Please write your code as if it were going into a production application. Once you're finished, please email your code to ", __jsx("a", {
    href: "",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "brad@hometeamcare.com"), " with the subject ", emailSubject), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "There are inputs at the bottom to help you test your code before submitting."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Here are some online code editors that you may find useful. \xA0", __jsx("a", {
    href: "https://code.sololearn.com/cVRUy2BwauK8#java",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Java"), "\xA0\xA0", __jsx("a", {
    href: "https://jsbin.com/?html,output",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Javascript"), "\xA0\xA0", __jsx("a", {
    href: "https://www.katacoda.com/courses/python/playground",
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Python")), __jsx("h2", {
    className: "jsx-2877626288" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Description:"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling your program what to do."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Below is a list of all possible opcodes:"), __jsx("div", {
    className: "jsx-2877626288" + " " + "opcodes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "99 - The program is finished and should immediately halt"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "1 - Adds together numbers read from two positions and stores the result in a third position."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "The three integers immediately after the opcode in the array tell you these three positions."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "The first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "2 - Works exactly like opcode 1, except it multiplies the two inputs instead of adding them.")), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("h2", {
    className: "jsx-2877626288" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Part I:"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Run your computer on the Intcode program below and enter the result.  The result should be stored at index 0."), __jsx("div", {
    className: "jsx-2877626288" + " " + "code-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("code", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39, 1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75, 2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0, 99,2,14,0,0]")), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
      lineNumber: 75
    },
    __self: this
  }), partOneValue !== undefined && (partOneValue === "3895705" ? __jsx("p", {
    className: "jsx-2877626288" + " " + "correct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Correct!") : __jsx("p", {
    className: "jsx-2877626288" + " " + "incorrect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Incorrect!")), __jsx("h2", {
    className: "jsx-2877626288" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Part II:"), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output 19690720? Both values will be between 0 and 99."), __jsx("p", {
    className: "jsx-2877626288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
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
      lineNumber: 85
    },
    __self: this
  }), partTwoValue !== undefined && (partTwoValue === "6417" ? __jsx("p", {
    className: "jsx-2877626288" + " " + "correct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Correct!") : __jsx("p", {
    className: "jsx-2877626288" + " " + "incorrect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Incorrect!")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2877626288",
    __self: this
  }, ".correct.jsx-2877626288{color:#71a310;}.incorrect.jsx-2877626288{color:#e42e00;}.page.jsx-2877626288{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}.container.jsx-2877626288{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.h1.jsx-2877626288{color:#053075;}.h2.jsx-2877626288{color:#053075;}.row.jsx-2877626288{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.code-block.jsx-2877626288{width:90%;padding:5px;background-color:#eeeeee;}.number-input.jsx-2877626288{width:200px;}.opcodes.jsx-2877626288{padding-left:40px;padding-right:40px;}.card.jsx-2877626288{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-2877626288:hover{border-color:#067df7;}.card.jsx-2877626288 h3.jsx-2877626288{margin:0;color:#067df7;font-size:18px;}.card.jsx-2877626288 p.jsx-2877626288{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGa0IsQUFHeUIsQUFHQSxBQUdELEFBUVksQUFRNUIsQUFHQSxBQUVtQixBQU9OLEFBS0UsQUFHTSxBQUlLLEFBUUYsQUFHWixBQUtBLFNBSkssQUFLRyxDQTVCTCxFQUtkLEVBdkNBLEFBR0EsQUFrQkEsQUFHQSxFQUd3QixFQWVILEdBWXJCLENBbkIyQixDQVdiLEFBWUcsRUE1Q0YsQ0FpREUsU0FoQkMsRUFKbEIsQ0FmZSxBQStCZixHQUthLE1BNUJiLElBWXVCLENBaUJ2QixzQkEzRHlCLHlCQVNiLEVBa0NJLFFBakNRLEdBYUgsR0FxQk0seUJBQzNCLGlDQTVDMkIsUUF1QkksTUFiaEIsV0FURixFQVViLFNBVGMsWUFDcUIsZ0NBQ25DLG1EQW9CQSIsImZpbGUiOiIvVXNlcnMvcm9iZXJ0YmF4dGVyL0Rlc2t0b3AvSG9tZXRlYW1Qcm9qZWN0cy9jb2RlLWNoYWxsZW5nZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbcGFydE9uZVZhbHVlLCBzZXRQYXJ0T25lVmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3BhcnRUd29WYWx1ZSwgc2V0UGFydFR3b1ZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGVtYWlsU3ViamVjdCA9IGBcImhvbWV0ZWFtIGNvZGluZyBjaGFsbGVuZ2U6IDxZb3VyIE5hbWU+XCJgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db2RpbmcgQ2hhbGxlbmdlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaW1hZ2VcIiBocmVmPVwiL3Byb2R1Y3Rpb24ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+SG9tZXRlYW0gY29kaW5nIGNoYWxsZW5nZTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBCZWxvdyBpcyB5b3VyIGNoYWxsZW5nZSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBQbGVhc2Ugd3JpdGUgeW91ciBjb2RlIGFzIGlmIGl0IHdlcmUgZ29pbmcgaW50byBhIHByb2R1Y3Rpb24gYXBwbGljYXRpb24uIE9uY2UgeW91J3JlIGZpbmlzaGVkLCBwbGVhc2UgZW1haWwgeW91ciBjb2RlIHRvIDxhIGhyZWY9XCJcIj5icmFkQGhvbWV0ZWFtY2FyZS5jb208L2E+IHdpdGggdGhlIHN1YmplY3Qge2VtYWlsU3ViamVjdH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGVyZSBhcmUgaW5wdXRzIGF0IHRoZSBib3R0b20gdG8gaGVscCB5b3UgdGVzdCB5b3VyIGNvZGUgYmVmb3JlIHN1Ym1pdHRpbmcuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSGVyZSBhcmUgc29tZSBvbmxpbmUgY29kZSBlZGl0b3JzIHRoYXQgeW91IG1heSBmaW5kIHVzZWZ1bC5cbiAgICAgICAgICAgICZuYnNwOzxhIGhyZWY9XCJodHRwczovL2NvZGUuc29sb2xlYXJuLmNvbS9jVlJVeTJCd2F1SzgjamF2YVwiPkphdmE8L2E+XG4gICAgICAgICAgICAmbmJzcDsmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9qc2Jpbi5jb20vP2h0bWwsb3V0cHV0XCI+SmF2YXNjcmlwdDwvYT5cbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5rYXRhY29kYS5jb20vY291cnNlcy9weXRob24vcGxheWdyb3VuZFwiPlB5dGhvbjwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+RGVzY3JpcHRpb246PC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEFuIEludGNvZGUgcHJvZ3JhbSBpcyBhIGxpc3Qgb2YgaW50ZWdlcnMgc2VwYXJhdGVkIGJ5IGNvbW1hcyAobGlrZSBbMSwwLDAsMyw5OV0pLiBUbyBydW4gb25lLCBzdGFydCBieSBsb29raW5nIGF0IHRoZSBmaXJzdCBpbnRlZ2VyLiBIZXJlLCB5b3Ugd2lsbCBmaW5kIGFuIG9wY29kZSAtIGVpdGhlciAxLCAyLCBvciA5OS4gRWFjaCBvcGNvZGUgaXMgYW4gaW5zdHJ1Y3Rpb24gdGVsbGluZyB5b3VyIHByb2dyYW0gd2hhdCB0byBkby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBCZWxvdyBpcyBhIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIG9wY29kZXM6XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3Bjb2Rlc1wiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDk5IC0gVGhlIHByb2dyYW0gaXMgZmluaXNoZWQgYW5kIHNob3VsZCBpbW1lZGlhdGVseSBoYWx0XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgMSAtIEFkZHMgdG9nZXRoZXIgbnVtYmVycyByZWFkIGZyb20gdHdvIHBvc2l0aW9ucyBhbmQgc3RvcmVzIHRoZSByZXN1bHQgaW4gYSB0aGlyZCBwb3NpdGlvbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgdGhyZWUgaW50ZWdlcnMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIG9wY29kZSBpbiB0aGUgYXJyYXkgdGVsbCB5b3UgdGhlc2UgdGhyZWUgcG9zaXRpb25zLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSBmaXJzdCB0d28gaW5kaWNhdGUgdGhlIHBvc2l0aW9ucyBmcm9tIHdoaWNoIHlvdSBzaG91bGQgcmVhZCB0aGUgaW5wdXQgdmFsdWVzLCBhbmQgdGhlIHRoaXJkIGluZGljYXRlcyB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdGhlIG91dHB1dCBzaG91bGQgYmUgc3RvcmVkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+Rm9yIGV4YW1wbGUsIGlmIHlvdXIgSW50Y29kZSBjb21wdXRlciBlbmNvdW50ZXJzIDEsMTAsMjAsMzAsIGl0IHNob3VsZCByZWFkIHRoZSB2YWx1ZXMgYXQgcG9zaXRpb25zIDEwIGFuZCAyMCwgYWRkIHRob3NlIHZhbHVlcywgYW5kIHRoZW4gb3ZlcndyaXRlIHRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAzMCB3aXRoIHRoZWlyIHN1bS48L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgMiAtIFdvcmtzIGV4YWN0bHkgbGlrZSBvcGNvZGUgMSwgZXhjZXB0IGl0IG11bHRpcGxpZXMgdGhlIHR3byBpbnB1dHMgaW5zdGVhZCBvZiBhZGRpbmcgdGhlbS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE9uY2UgeW91J3JlIGRvbmUgcHJvY2Vzc2luZyBhbiBvcGNvZGUsIG1vdmUgdG8gdGhlIG5leHQgb25lIGJ5IHN0ZXBwaW5nIGZvcndhcmQgNCBwb3NpdGlvbnMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMVwiPlBhcnQgSTo8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUnVuIHlvdXIgY29tcHV0ZXIgb24gdGhlIEludGNvZGUgcHJvZ3JhbSBiZWxvdyBhbmQgZW50ZXIgdGhlIHJlc3VsdC4gIFRoZSByZXN1bHQgc2hvdWxkIGJlIHN0b3JlZCBhdCBpbmRleCAwLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGUtYmxvY2tcIj5cbiAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICBbMSwwLDAsMywxLDEsMiwzLDEsMyw0LDMsMSw1LDAsMywyLDEsOSwxOSwxLDE5LDUsMjMsMiwyMywxMywyNywxLDEwLDI3LDMxLDIsMzEsNiwzNSwxLDUsMzUsMzksXG4gICAgICAgICAgICAgIDEsMzksMTAsNDMsMiw5LDQzLDQ3LDEsNDcsNSw1MSwyLDUxLDksNTUsMSwxMyw1NSw1OSwxLDEzLDU5LDYzLDEsNiw2Myw2NywyLDEzLDY3LDcxLDEsMTAsNzEsNzUsXG4gICAgICAgICAgICAgIDIsMTMsNzUsNzksMSw1LDc5LDgzLDIsODMsOSw4NywyLDg3LDEzLDkxLDEsOTEsNSw5NSwyLDksOTUsOTksMSw5OSw1LDEwMywxLDIsMTAzLDEwNywxLDEwLDEwNywwLFxuICAgICAgICAgICAgICA5OSwyLDE0LDAsMF1cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5FbnRlciB5b3VyIHJlc3VsdDo8L3A+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm51bWJlci1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cGFydE9uZVZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFBhcnRPbmVWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX0vPlxuICAgICAgICAgIHtwYXJ0T25lVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAocGFydE9uZVZhbHVlID09PSBcIjM4OTU3MDVcIiA/IDxwIGNsYXNzTmFtZT1cImNvcnJlY3RcIj5Db3JyZWN0ITwvcD4gOiA8cCBjbGFzc05hbWU9XCJpbmNvcnJlY3RcIj5JbmNvcnJlY3QhPC9wPil9XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+UGFydCBJSTo8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQXNzdW1pbmcgaW5kZXggMSBhbmQgMiBpbiB0aGUgcHJvdmlkZWQgYXJyYXkgYXJlIGlucHV0cy4gIFdoaWNoIHR3byBpbnB1dHMgd2lsbCBwcm9kdWNlIHRoZSBvdXRwdXQgMTk2OTA3MjA/XG4gICAgICAgICAgICBCb3RoIHZhbHVlcyB3aWxsIGJlIGJldHdlZW4gMCBhbmQgOTkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPkVudGVyIDEwMCAqIGlucHV0MSArIGlucHV0Mjo8L3A+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm51bWJlci1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cGFydFR3b1ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFBhcnRUd29WYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX0vPlxuICAgICAgICAgIHtwYXJ0VHdvVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAocGFydFR3b1ZhbHVlID09PSBcIjY0MTdcIiA/IDxwIGNsYXNzTmFtZT1cImNvcnJlY3RcIj5Db3JyZWN0ITwvcD4gOiA8cCBjbGFzc05hbWU9XCJpbmNvcnJlY3RcIj5JbmNvcnJlY3QhPC9wPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvcnJlY3Qge1xuICAgICAgICAgIGNvbG9yOiAjNzFhMzEwO1xuICAgICAgICB9XG4gICAgICAgIC5pbmNvcnJlY3Qge1xuICAgICAgICAgIGNvbG9yOiAjZTQyZTAwO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmgxIHtcbiAgICAgICAgICBjb2xvcjogIzA1MzA3NVxuICAgICAgICB9XG4gICAgICAgIC5oMiB7XG4gICAgICAgICAgY29sb3I6ICMwNTMwNzVcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIC5jb2RlLWJsb2NrIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXItaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAub3Bjb2RlcyB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7ff4b8761180922a0390.hot-update.js.map