parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"a4f9":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function e(i,o,s,a){t(this,e),this.nombre=i,this.imagen=o,this.voice=s,this.rate=a.rate,this.lang=a.lang,this.pitch=a.pitch,this.color=a.color,this.volume=a.volume};exports.default=e;
},{}],"o3cf":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function t(n){e(this,t),this.chat=n}return n(t,[{key:"addMessage",value:function(e){var t=this;e.map(function(e){var n=new SpeechSynthesisUtterance;n.text=e.text,n.voice=e.author.voice,n.pitch=e.author.pitch,n.rate=e.author.rate,n.volume=e.author.volume,n.color=e.author.color,n.imagen=e.author.imagen,n.nombre=e.author.nombre,n.onstart=function(){t.chat.innerHTML+='\n                <div class="texto" style="color: '.concat(n.color,'; background-color:black; display: flex; align-items: center"> \n                <img src="').concat(n.imagen,'" width="150px" height="150px"> &nbsp; \n                ').concat(n.nombre,": \n                ").concat(n.text," \n                </div>")},speechSynthesis.speak(n),window.navigator.vibrate(200)})}}]),t}();exports.default=o;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e,t,o,a=r(require("./Profile.js")),n=r(require("./Conversation.js"));function r(e){return e&&e.__esModule?e:{default:e}}var s="https://www.alfabetajuega.com/wp-content/uploads/2019/12/pokemon-ash-pokeball-770x433.jpg",u="https://i.imgur.com/pmI53WO.png",i="https://image.freepik.com/vector-gratis/kawaii-cute-breakfast-rebanada-pan-icono_24877-12893.jpg";speechSynthesis.onvoiceschanged=function(){speechSynthesis.getVoices().forEach(function(a){"Google español de Estados Unidos"===a.name&&(e=a),"Google italiano"===a.name&&(t=a),"Google Bahasa Indonesia"===a.name&&(o=a)});var r=new a.default("Ayrton",s,e,{lang:"es",rate:1,pitch:.5,color:"#74ff2e",volume:1}),c=new a.default("Robot",u,t,{lang:"es",rate:1,pitch:.5,color:"#f8ff13",volume:1}),l=new a.default("Breadman",i,o,{lang:"es",rate:1,pitch:.5,color:"#e800ff",volume:1}),h=new n.default(document.querySelector("#chat"));$(document.querySelector("button")).on("touchstart click",function(){document.querySelector("#chat").style.visibility="visible",h.addMessage([{author:r,text:"¡Hola a todos! ¿Qué tal están?"},{author:c,text:"Muy bien, ¡gracias!"},{author:l,text:"Yo también muy bien"},{author:r,text:"El robot habla con un acento un tanto raro..."},{author:c,text:"Es que soy del norte"}])})};
},{"./Profile.js":"a4f9","./Conversation.js":"o3cf"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.3b526566.js.map