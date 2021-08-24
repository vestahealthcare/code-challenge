(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(e,t,s){"use strict";s.r(t);var r=s(5893),i=s(5988),n=s(7294);t.default=function(){var e=(0,n.useState)(),t=e[0],s=e[1],o=(0,n.useState)(),c=o[0],a=o[1];return(0,r.jsxs)("div",{className:"jsx-1239445214",children:[(0,r.jsx)("div",{className:"jsx-1239445214 page",children:(0,r.jsxs)("div",{className:"jsx-1239445214 container",children:[(0,r.jsx)("h1",{className:"jsx-1239445214 h1",children:"Vesta Coding Challenge"}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"Below is your challenge!"}),(0,r.jsxs)("p",{className:"jsx-1239445214",children:["Please write your code as if it were going into a production application. Once you're finished, please email your code to ",(0,r.jsx)("a",{href:"",className:"jsx-1239445214",children:"eng-interviews@vestahealthcare.com"})," with the subject ",'"vesta coding challenge: <Your Name>"']}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"There are inputs at the bottom to help you test your code before submitting."}),(0,r.jsxs)("p",{className:"jsx-1239445214",children:["Here are some online code editors that you may find useful. \xa0",(0,r.jsx)("a",{href:"https://code.sololearn.com/cVRUy2BwauK8#java",className:"jsx-1239445214",children:"Java"}),"\xa0\xa0",(0,r.jsx)("a",{href:"https://jsbin.com/?html,output",className:"jsx-1239445214",children:"Javascript"}),"\xa0\xa0",(0,r.jsx)("a",{href:"https://www.katacoda.com/courses/python/playground",className:"jsx-1239445214",children:"Python"})]}),(0,r.jsx)("h2",{className:"jsx-1239445214 h1",children:"Description:"}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"An Intcode program is a list of integers separated by commas (like [1,0,0,3,99]). To run one, start by looking at the first integer. Here, you will find an opcode - either 1, 2, or 99. Each opcode is an instruction telling your program what to do."}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"Below is a list of what each opcode means:"}),(0,r.jsx)("div",{className:"jsx-1239445214 opcodes",children:(0,r.jsxs)("ul",{className:"jsx-1239445214",children:[(0,r.jsx)("li",{className:"jsx-1239445214",children:(0,r.jsx)("p",{className:"jsx-1239445214",children:"99 - The program is finished and should immediately halt"})}),(0,r.jsxs)("li",{className:"jsx-1239445214",children:[(0,r.jsx)("p",{className:"jsx-1239445214",children:"1 - Adds together numbers read from two positions and stores the result in a third position."}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"The three integers immediately after the opcode in the array tell you these three positions."}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"The first two indicate the positions from which you should read the input values, and the third indicates the position at which the output should be stored."}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum."})]}),(0,r.jsx)("li",{className:"jsx-1239445214",children:(0,r.jsx)("p",{className:"jsx-1239445214",children:"2 - Works exactly like opcode 1, except it multiplies the two inputs instead of adding them."})})]})}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"Once you're done processing an opcode, move to the next one by stepping forward 4 positions."}),(0,r.jsx)("h2",{className:"jsx-1239445214 h1",children:"Part I:"}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"Run your computer on the Intcode program below and enter the result.  The result should be stored at index 0."}),(0,r.jsx)("div",{className:"jsx-1239445214 code-block",children:(0,r.jsx)("code",{className:"jsx-1239445214",children:"[1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39, 1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75, 2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0, 99,2,14,0,0]"})}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"Enter your result:"}),(0,r.jsx)("input",{type:"number",value:t,onChange:function(e){s(e.target.value)},className:"jsx-1239445214 number-input"}),void 0!==t&&("3895705"===t?(0,r.jsx)("p",{className:"jsx-1239445214 correct",children:"Correct!"}):(0,r.jsx)("p",{className:"jsx-1239445214 incorrect",children:"Incorrect!"})),(0,r.jsx)("h2",{className:"jsx-1239445214 h1",children:"Part II:"}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"Assuming index 1 and 2 in the provided array are inputs.  Which two inputs will produce the output 19690720? Both values will be between 0 and 99."}),(0,r.jsx)("p",{className:"jsx-1239445214",children:"Enter 100 * input1 + input2:"}),(0,r.jsx)("input",{type:"number",value:c,onChange:function(e){a(e.target.value)},className:"jsx-1239445214 number-input"}),void 0!==c&&("6417"===c?(0,r.jsx)("p",{className:"jsx-1239445214 correct",children:"Correct!"}):(0,r.jsx)("p",{className:"jsx-1239445214 incorrect",children:"Incorrect!"}))]})}),(0,r.jsx)(i.default,{id:"1239445214",children:[".correct.jsx-1239445214{color:#71a310;}",".incorrect.jsx-1239445214{color:#e42e00;}",".page.jsx-1239445214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fbfbfb;width:100%;height:100%;font-family:'Roboto',sans-serif;}",".container.jsx-1239445214{background-color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:50px;}",".h1.jsx-1239445214{color:#164c30;}",".h2.jsx-1239445214{color:#053075;}",".row.jsx-1239445214{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".code-block.jsx-1239445214{width:90%;padding:5px;background-color:#eeeeee;}",".number-input.jsx-1239445214{width:200px;}",".opcodes.jsx-1239445214{padding-left:40px;padding-right:40px;}",".card.jsx-1239445214{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}",".card.jsx-1239445214:hover{border-color:#067df7;}",".card.jsx-1239445214 h3.jsx-1239445214{margin:0;color:#067df7;font-size:18px;}",".card.jsx-1239445214 p.jsx-1239445214{margin:0;padding:12px 0 0;font-size:13px;color:#333;}"]})]})}},8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6124)}])},4155:function(e){var t,s,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(s){try{return t.call(null,e,0)}catch(s){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{s="function"===typeof clearTimeout?clearTimeout:n}catch(e){s=n}}();var c,a=[],l=!1,u=-1;function h(){l&&c&&(l=!1,c.length?a=c.concat(a):u=-1,a.length&&d())}function d(){if(!l){var e=o(h);l=!0;for(var t=a.length;t;){for(c=a,a=[];++u<t;)c&&c[u].run();u=-1,t=a.length}c=null,l=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===n||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];a.push(new p(e,t)),1!==a.length||l||o(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},4287:function(e,t,s){"use strict";var r=s(4155);function i(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof r&&r.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,s=t.name,r=void 0===s?"stylesheet":s,i=t.optimizeForSpeed,c=void 0===i?n:i,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;a(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",a("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,s,r,c=e.prototype;return c.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(i){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];a(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,s){t&&a(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return s?i.insertBefore(r,s):i.appendChild(r),r},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,s),r&&i(t,r),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=c},7884:function(e,t,s){"use strict";t.default=o;var r,i=s(7294);var n=new(((r=s(8122))&&r.__esModule?r:{default:r}).default);function o(e){return"undefined"===typeof window?(n.add(e),null):((0,i.useLayoutEffect)((function(){return n.add(e),function(){n.remove(e)}}),[e.id,String(e.dynamic)]),null)}o.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return n.computeId(t,s)})).join(" ")}},8122:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var r=n(s(9887)),i=n(s(4287));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,r=void 0===s?null:s,n=t.optimizeForSpeed,o=void 0!==n&&n,c=t.isBrowser,a=void 0===c?"undefined"!==typeof window:c;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),r=s.styleId,i=s.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var n=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=n,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var r=this._fromServer&&this._fromServer[s];r?(r.parentNode.removeChild(r),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var i=String(s),n=t+i;return e[n]||(e[n]="jsx-"+(0,r.default)(t+"-"+i)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=s+r;return t[i]||(t[i]=r.replace(e,s)),t[i]}},t.getIdAndRules=function(e){var t=this,s=e.children,r=e.dynamic,i=e.id;if(r){var n=this.computeId(i,r);return{styleId:n,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(n,e)})):[this.computeSelector(n,s)]}}return{styleId:this.computeId(i),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},5988:function(e,t,s){e.exports=s(7884)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);