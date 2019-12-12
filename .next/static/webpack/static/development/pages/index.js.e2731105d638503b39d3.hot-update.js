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
    className: "jsx-269558770",
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
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Coding Challenge"), __jsx("link", {
    rel: "image",
    href: "/production.png",
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-269558770" + " " + "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-269558770" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-269558770" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hometeam coding challenge"), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Below you will find a coding challenge.  Please write your code as if it were going into production.  There are inputs that will help you validate your answer before submitting.  Once you're finished, please email your solution to brad@bradbrad"), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Here are some online code editors that you may find useful. \xA0", __jsx("a", {
    href: "https://code.sololearn.com/cVRUy2BwauK8#java",
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Java"), "\xA0\xA0", __jsx("a", {
    href: "https://jsbin.com/?html,output",
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Javascript"), "\xA0\xA0", __jsx("a", {
    href: "https://www.katacoda.com/courses/python/playground",
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Python")), __jsx("h2", {
    className: "jsx-269558770" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Description:"), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling what your program should do."), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "99: the program is finished and should immediately halt"), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "1: add together numbers read from two positions and stores the result in a third position. The three integers immediately after the opcode tell you these three positions - the first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored. For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "2: works exactly like opcode 1, except it multiplies the two inputs instead of adding them."), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Once you're done processing an opcode, move to the next one by stepping forward 4 positions."), __jsx("h2", {
    className: "jsx-269558770" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Part I:"), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Run your computer on the given input and enter the result.  The result should be stored at index 0."), __jsx("code", {
    className: "jsx-269558770" + " " + "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "[1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39,1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75,2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0,99,2,14,0,0]"), __jsx("h2", {
    className: "jsx-269558770" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Part II:"), __jsx("p", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output ", __jsx("code", {
    className: "jsx-269558770",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "19690720"), "? Both values will be between 0 and 99."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "269558770",
    __self: this
  }, ".page.jsx-269558770{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}.container.jsx-269558770{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}.h1.jsx-269558770{color:#053075;}.h2.jsx-269558770{color:#053075;}.row.jsx-269558770{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.code.jsx-269558770{display:block;}.card.jsx-269558770{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-269558770:hover{border-color:#067df7;}.card.jsx-269558770 h3.jsx-269558770{margin:0;color:#067df7;font-size:18px;}.card.jsx-269558770 p.jsx-269558770{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JlcnRiYXh0ZXIvRGVza3RvcC9Ib21ldGVhbVByb2plY3RzL2NvZGUtY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEZ0IsQUFHc0IsQUFRWSxBQVE1QixBQUdBLEFBRW1CLEFBT0YsQUFHUyxBQVFGLEFBR1osQUFLQSxTQUpLLEFBS0csS0FoQ25CLEFBR0EsQUFVQSxFQVB3QixLQWtCeEIsRUFSYyxBQVlHLEVBbkNGLENBd0NFLFNBaEJDLEdBVkgsQUFzQmYsR0FLYSxVQWhCVSxDQWlCdkIsc0JBbER5Qix5QkFTYixFQXlCSSxRQXhCUSxHQWFILEdBWU0seUJBQzNCLGlDQW5DMkIsUUF1QkksTUFiaEIsV0FURixFQVViLFNBVGMsWUFDcUIsZ0NBQ25DLG1EQW9CQSIsImZpbGUiOiIvVXNlcnMvcm9iZXJ0YmF4dGVyL0Rlc2t0b3AvSG9tZXRlYW1Qcm9qZWN0cy9jb2RlLWNoYWxsZW5nZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Db2RpbmcgQ2hhbGxlbmdlPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImltYWdlXCIgaHJlZj1cIi9wcm9kdWN0aW9uLnBuZ1wiIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIj5Ib21ldGVhbSBjb2RpbmcgY2hhbGxlbmdlPC9oMT5cbiAgICAgICAgPHA+QmVsb3cgeW91IHdpbGwgZmluZCBhIGNvZGluZyBjaGFsbGVuZ2UuICBQbGVhc2Ugd3JpdGUgeW91ciBjb2RlIGFzIGlmIGl0IHdlcmUgZ29pbmcgaW50byBwcm9kdWN0aW9uLiAgVGhlcmUgYXJlIGlucHV0cyB0aGF0IHdpbGwgaGVscCB5b3UgdmFsaWRhdGUgeW91ciBhbnN3ZXIgYmVmb3JlIHN1Ym1pdHRpbmcuICBPbmNlIHlvdSdyZSBmaW5pc2hlZCwgcGxlYXNlIGVtYWlsIHlvdXIgc29sdXRpb24gdG8gYnJhZEBicmFkYnJhZDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSGVyZSBhcmUgc29tZSBvbmxpbmUgY29kZSBlZGl0b3JzIHRoYXQgeW91IG1heSBmaW5kIHVzZWZ1bC5cbiAgICAgICAgICAmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9jb2RlLnNvbG9sZWFybi5jb20vY1ZSVXkyQndhdUs4I2phdmFcIj5KYXZhPC9hPlxuICAgICAgICAgICZuYnNwOyZuYnNwOzxhIGhyZWY9XCJodHRwczovL2pzYmluLmNvbS8/aHRtbCxvdXRwdXRcIj5KYXZhc2NyaXB0PC9hPlxuICAgICAgICAgICZuYnNwOyZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5rYXRhY29kYS5jb20vY291cnNlcy9weXRob24vcGxheWdyb3VuZFwiPlB5dGhvbjwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDFcIj5EZXNjcmlwdGlvbjo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbiBJbnRjb2RlIHByb2dyYW0gaXMgYSBsaXN0IG9mIGludGVnZXJzIHNlcGFyYXRlZCBieSBjb21tYXMgKGxpa2UgWzEsMCwwLDMsOTldKS4gVG8gcnVuIG9uZSwgc3RhcnQgYnkgbG9va2luZyBhdCB0aGUgZmlyc3QgaW50ZWdlci4gSGVyZSwgeW91IHdpbGwgZmluZCBhbiBvcGNvZGUgLSBlaXRoZXIgMSwgMiwgb3IgOTkuIEVhY2ggb3Bjb2RlIGlzIGFuIGluc3RydWN0aW9uIHRlbGxpbmcgd2hhdCB5b3VyIHByb2dyYW0gc2hvdWxkIGRvLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgOTk6IHRoZSBwcm9ncmFtIGlzIGZpbmlzaGVkIGFuZCBzaG91bGQgaW1tZWRpYXRlbHkgaGFsdFxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDE6IGFkZCB0b2dldGhlciBudW1iZXJzIHJlYWQgZnJvbSB0d28gcG9zaXRpb25zIGFuZCBzdG9yZXMgdGhlIHJlc3VsdCBpbiBhIHRoaXJkIHBvc2l0aW9uLiBUaGUgdGhyZWUgaW50ZWdlcnMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIG9wY29kZSB0ZWxsIHlvdSB0aGVzZSB0aHJlZSBwb3NpdGlvbnMgLSB0aGUgZmlyc3QgdHdvIGluZGljYXRlIHRoZSBwb3NpdGlvbnMgZnJvbSB3aGljaCB5b3Ugc2hvdWxkIHJlYWQgdGhlIGlucHV0IHZhbHVlcywgYW5kIHRoZSB0aGlyZCBpbmRpY2F0ZXMgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBvdXRwdXQgc2hvdWxkIGJlIHN0b3JlZC5cbiAgICAgICAgICAgIEZvciBleGFtcGxlLCBpZiB5b3VyIEludGNvZGUgY29tcHV0ZXIgZW5jb3VudGVycyAxLDEwLDIwLDMwLCBpdCBzaG91bGQgcmVhZCB0aGUgdmFsdWVzIGF0IHBvc2l0aW9ucyAxMCBhbmQgMjAsIGFkZCB0aG9zZSB2YWx1ZXMsIGFuZCB0aGVuIG92ZXJ3cml0ZSB0aGUgdmFsdWUgYXQgcG9zaXRpb24gMzAgd2l0aCB0aGVpciBzdW0uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgMjogd29ya3MgZXhhY3RseSBsaWtlIG9wY29kZSAxLCBleGNlcHQgaXQgbXVsdGlwbGllcyB0aGUgdHdvIGlucHV0cyBpbnN0ZWFkIG9mIGFkZGluZyB0aGVtLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE9uY2UgeW91J3JlIGRvbmUgcHJvY2Vzc2luZyBhbiBvcGNvZGUsIG1vdmUgdG8gdGhlIG5leHQgb25lIGJ5IHN0ZXBwaW5nIGZvcndhcmQgNCBwb3NpdGlvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+UGFydCBJOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFJ1biB5b3VyIGNvbXB1dGVyIG9uIHRoZSBnaXZlbiBpbnB1dCBhbmQgZW50ZXIgdGhlIHJlc3VsdC4gIFRoZSByZXN1bHQgc2hvdWxkIGJlIHN0b3JlZCBhdCBpbmRleCAwLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImNvZGVcIj5cbiAgICAgICAgICAgIFsxLDAsMCwzLDEsMSwyLDMsMSwzLDQsMywxLDUsMCwzLDIsMSw5LDE5LDEsMTksNSwyMywyLDIzLDEzLDI3LDEsMTAsMjcsMzEsMiwzMSw2LDM1LDEsNSwzNSwzOSwxLDM5LDEwLDQzLDIsOSw0Myw0NywxLDQ3LDUsNTEsMiw1MSw5LDU1LDEsMTMsNTUsNTksMSwxMyw1OSw2MywxLDYsNjMsNjcsMiwxMyw2Nyw3MSwxLDEwLDcxLDc1LDIsMTMsNzUsNzksMSw1LDc5LDgzLDIsODMsOSw4NywyLDg3LDEzLDkxLDEsOTEsNSw5NSwyLDksOTUsOTksMSw5OSw1LDEwMywxLDIsMTAzLDEwNywxLDEwLDEwNywwLDk5LDIsMTQsMCwwXVxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgxXCI+UGFydCBJSTo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBc3N1bWluZyBpbmRleCAxIGFuZCAyIGluIHRoZSBwcm92aWRlZCBhcnJheSBhcmUgaW5wdXRzLiAgV2hpY2ggdHdvIGlucHV0cyB3aWxsIHByb2R1Y2UgdGhlIG91dHB1dCA8Y29kZT4xOTY5MDcyMDwvY29kZT4/XG4gICAgICAgICAgQm90aCB2YWx1ZXMgd2lsbCBiZSBiZXR3ZWVuIDAgYW5kIDk5LlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5wYWdlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgfVxuICAgICAgLmgxIHtcbiAgICAgICAgY29sb3I6ICMwNTMwNzVcbiAgICAgIH1cbiAgICAgIC5oMiB7XG4gICAgICAgIGNvbG9yOiAjMDUzMDc1XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAuY29kZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgfVxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICB9XG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/robertbaxter/Desktop/HometeamProjects/code-challenge/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.e2731105d638503b39d3.hot-update.js.map