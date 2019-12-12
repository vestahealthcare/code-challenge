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
    className: "jsx-1079488610",
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
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Coding Challenge"), __jsx("link", {
    rel: "image",
    href: "/production.png",
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1079488610" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1079488610" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1079488610" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hometeam coding challenge"), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Below you will find a coding challenge.  Please write your code as if it were going into production.  There are inputs that will help you validate your answer before submitting.  Once you're finished, please email your solution to brad@bradbrad"), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Here are some online code editors that you may find useful. \xA0", __jsx("a", {
    href: "https://code.sololearn.com/cVRUy2BwauK8#java",
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Java"), "\xA0\xA0", __jsx("a", {
    href: "https://jsbin.com/?html,output",
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Javascript"), "\xA0\xA0", __jsx("a", {
    href: "https://www.katacoda.com/courses/python/playground",
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Python")), __jsx("h2", {
    className: "jsx-1079488610" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Description:"), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling your program what to do."), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Below is a list of all possible opcodes:"), __jsx("div", {
    className: "jsx-1079488610" + " " + "opcodes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "99 - The program is finished and should immediately halt"), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "1 - Adds together numbers read from two positions and stores the result in a third position."), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "The three integers immediately after the opcode in the array tell you these three positions."), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "The first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored."), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "2 - works exactly like opcode 1, except it multiplies the two inputs instead of adding them.")), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("h2", {
    className: "jsx-1079488610" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Part I:"), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Run your computer on the Intcode program below and enter the result.  The result should be stored at index 0."), __jsx("div", {
    className: "jsx-1079488610" + " " + "code-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("code", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39, 1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75, 2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0, 99,2,14,0,0]")), __jsx("h2", {
    className: "jsx-1079488610" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Part II:"), __jsx("p", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output ", __jsx("code", {
    className: "jsx-1079488610",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "19690720"), "? Both values will be between 0 and 99."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1079488610",
    __self: this
  }, ".page.jsx-1079488610{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}.container.jsx-1079488610{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.h1.jsx-1079488610{color:#053075;}.h2.jsx-1079488610{color:#053075;}.row.jsx-1079488610{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.code.jsx-1079488610{padding:5px;background-color:#eeeeee;}.opcodes.jsx-1079488610{padding-left:40px;padding-right:40px;}.card.jsx-1079488610{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-1079488610:hover{border-color:#067df7;}.card.jsx-1079488610 h3.jsx-1079488610{margin:0;color:#067df7;font-size:18px;}.card.jsx-1079488610 p.jsx-1079488610{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FZ0IsQUFHc0IsQUFRWSxBQVE1QixBQUdBLEFBRW1CLEFBT0osQUFJTSxBQUlLLEFBUUYsQUFHWixBQUtBLFNBSkssQUFLRyxHQXhCUSxFQWIzQixBQUdBLEVBR3dCLEVBV0gsR0FZckIsRUFSYyxBQVlHLEVBeENGLENBNkNFLFNBaEJDLEVBUmxCLEFBSUEsQ0FYZSxBQTJCZixHQUthLFVBaEJVLENBaUJ2QixzQkF2RHlCLHlCQVNiLEVBOEJJLFFBN0JRLEdBYUgsR0FpQk0seUJBQzNCLGlDQXhDMkIsUUF1QkksTUFiaEIsV0FURixFQVViLFNBVGMsWUFDcUIsZ0NBQ25DLG1EQW9CQSIsImZpbGUiOiIvVXNlcnMvcm9iZXJ0YmF4dGVyL0Rlc2t0b3AvSG9tZXRlYW1Qcm9qZWN0cy9jb2RlLWNoYWxsZW5nZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Db2RpbmcgQ2hhbGxlbmdlPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImltYWdlXCIgaHJlZj1cIi9wcm9kdWN0aW9uLnBuZ1wiIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIj5Ib21ldGVhbSBjb2RpbmcgY2hhbGxlbmdlPC9oMT5cbiAgICAgICAgPHA+QmVsb3cgeW91IHdpbGwgZmluZCBhIGNvZGluZyBjaGFsbGVuZ2UuICBQbGVhc2Ugd3JpdGUgeW91ciBjb2RlIGFzIGlmIGl0IHdlcmUgZ29pbmcgaW50byBwcm9kdWN0aW9uLiAgVGhlcmUgYXJlIGlucHV0cyB0aGF0IHdpbGwgaGVscCB5b3UgdmFsaWRhdGUgeW91ciBhbnN3ZXIgYmVmb3JlIHN1Ym1pdHRpbmcuICBPbmNlIHlvdSdyZSBmaW5pc2hlZCwgcGxlYXNlIGVtYWlsIHlvdXIgc29sdXRpb24gdG8gYnJhZEBicmFkYnJhZDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSGVyZSBhcmUgc29tZSBvbmxpbmUgY29kZSBlZGl0b3JzIHRoYXQgeW91IG1heSBmaW5kIHVzZWZ1bC5cbiAgICAgICAgICAmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9jb2RlLnNvbG9sZWFybi5jb20vY1ZSVXkyQndhdUs4I2phdmFcIj5KYXZhPC9hPlxuICAgICAgICAgICZuYnNwOyZuYnNwOzxhIGhyZWY9XCJodHRwczovL2pzYmluLmNvbS8/aHRtbCxvdXRwdXRcIj5KYXZhc2NyaXB0PC9hPlxuICAgICAgICAgICZuYnNwOyZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5rYXRhY29kYS5jb20vY291cnNlcy9weXRob24vcGxheWdyb3VuZFwiPlB5dGhvbjwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDFcIj5EZXNjcmlwdGlvbjo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbiBJbnRjb2RlIHByb2dyYW0gaXMgYSBsaXN0IG9mIGludGVnZXJzIHNlcGFyYXRlZCBieSBjb21tYXMgKGxpa2UgWzEsMCwwLDMsOTldKS4gVG8gcnVuIG9uZSwgc3RhcnQgYnkgbG9va2luZyBhdCB0aGUgZmlyc3QgaW50ZWdlci4gSGVyZSwgeW91IHdpbGwgZmluZCBhbiBvcGNvZGUgLSBlaXRoZXIgMSwgMiwgb3IgOTkuIEVhY2ggb3Bjb2RlIGlzIGFuIGluc3RydWN0aW9uIHRlbGxpbmcgeW91ciBwcm9ncmFtIHdoYXQgdG8gZG8uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQmVsb3cgaXMgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBvcGNvZGVzOlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3Bjb2Rlc1wiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgOTkgLSBUaGUgcHJvZ3JhbSBpcyBmaW5pc2hlZCBhbmQgc2hvdWxkIGltbWVkaWF0ZWx5IGhhbHRcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICAxIC0gQWRkcyB0b2dldGhlciBudW1iZXJzIHJlYWQgZnJvbSB0d28gcG9zaXRpb25zIGFuZCBzdG9yZXMgdGhlIHJlc3VsdCBpbiBhIHRoaXJkIHBvc2l0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSB0aHJlZSBpbnRlZ2VycyBpbW1lZGlhdGVseSBhZnRlciB0aGUgb3Bjb2RlIGluIHRoZSBhcnJheSB0ZWxsIHlvdSB0aGVzZSB0aHJlZSBwb3NpdGlvbnMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIGZpcnN0IHR3byBpbmRpY2F0ZSB0aGUgcG9zaXRpb25zIGZyb20gd2hpY2ggeW91IHNob3VsZCByZWFkIHRoZSBpbnB1dCB2YWx1ZXMsIGFuZCB0aGUgdGhpcmQgaW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgb3V0cHV0IHNob3VsZCBiZSBzdG9yZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPkZvciBleGFtcGxlLCBpZiB5b3VyIEludGNvZGUgY29tcHV0ZXIgZW5jb3VudGVycyAxLDEwLDIwLDMwLCBpdCBzaG91bGQgcmVhZCB0aGUgdmFsdWVzIGF0IHBvc2l0aW9ucyAxMCBhbmQgMjAsIGFkZCB0aG9zZSB2YWx1ZXMsIGFuZCB0aGVuIG92ZXJ3cml0ZSB0aGUgdmFsdWUgYXQgcG9zaXRpb24gMzAgd2l0aCB0aGVpciBzdW0uPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgMiAtIHdvcmtzIGV4YWN0bHkgbGlrZSBvcGNvZGUgMSwgZXhjZXB0IGl0IG11bHRpcGxpZXMgdGhlIHR3byBpbnB1dHMgaW5zdGVhZCBvZiBhZGRpbmcgdGhlbS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBPbmNlIHlvdSdyZSBkb25lIHByb2Nlc3NpbmcgYW4gb3Bjb2RlLCBtb3ZlIHRvIHRoZSBuZXh0IG9uZSBieSBzdGVwcGluZyBmb3J3YXJkIDQgcG9zaXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMVwiPlBhcnQgSTo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBSdW4geW91ciBjb21wdXRlciBvbiB0aGUgSW50Y29kZSBwcm9ncmFtIGJlbG93IGFuZCBlbnRlciB0aGUgcmVzdWx0LiAgVGhlIHJlc3VsdCBzaG91bGQgYmUgc3RvcmVkIGF0IGluZGV4IDAuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWJsb2NrXCI+XG4gICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICBbMSwwLDAsMywxLDEsMiwzLDEsMyw0LDMsMSw1LDAsMywyLDEsOSwxOSwxLDE5LDUsMjMsMiwyMywxMywyNywxLDEwLDI3LDMxLDIsMzEsNiwzNSwxLDUsMzUsMzksXG4gICAgICAgICAgICAxLDM5LDEwLDQzLDIsOSw0Myw0NywxLDQ3LDUsNTEsMiw1MSw5LDU1LDEsMTMsNTUsNTksMSwxMyw1OSw2MywxLDYsNjMsNjcsMiwxMyw2Nyw3MSwxLDEwLDcxLDc1LFxuICAgICAgICAgICAgMiwxMyw3NSw3OSwxLDUsNzksODMsMiw4Myw5LDg3LDIsODcsMTMsOTEsMSw5MSw1LDk1LDIsOSw5NSw5OSwxLDk5LDUsMTAzLDEsMiwxMDMsMTA3LDEsMTAsMTA3LDAsXG4gICAgICAgICAgICA5OSwyLDE0LDAsMF1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDFcIj5QYXJ0IElJOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFzc3VtaW5nIGluZGV4IDEgYW5kIDIgaW4gdGhlIHByb3ZpZGVkIGFycmF5IGFyZSBpbnB1dHMuICBXaGljaCB0d28gaW5wdXRzIHdpbGwgcHJvZHVjZSB0aGUgb3V0cHV0IDxjb2RlPjE5NjkwNzIwPC9jb2RlPj9cbiAgICAgICAgICBCb3RoIHZhbHVlcyB3aWxsIGJlIGJldHdlZW4gMCBhbmQgOTkuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICB9XG4gICAgICAuaDEge1xuICAgICAgICBjb2xvcjogIzA1MzA3NVxuICAgICAgfVxuICAgICAgLmgyIHtcbiAgICAgICAgY29sb3I6ICMwNTMwNzVcbiAgICAgIH1cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICAgIC5jb2RlIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICAgICAgfVxuICAgICAgLm9wY29kZXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgICAuY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICB9XG4gICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.cc339fb0dd0adeee73be.hot-update.js.map