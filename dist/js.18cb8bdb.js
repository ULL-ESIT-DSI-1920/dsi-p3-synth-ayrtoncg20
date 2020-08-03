// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"a4f9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Creamos la clase profile y le pasamos por el constructor el nombre del personaje, la imagen, la voz y las propiedades. 
var Profile = function Profile(nombre, imagen, voice, propiedades) {
  _classCallCheck(this, Profile);

  //
  this.nombre = nombre; //El nombre de este perfil es el nombre que le paso por parametro cuando creo el objeto en index.js

  this.imagen = imagen; //La imagen de este perfil es la imagen que le paso por parametro cuando creo el objeto en index.js

  this.voice = voice; //La voz de este perdil es la voz que le paso por parametro cuando creo el objeto en index.js

  this.rate = propiedades.rate;
  this.lang = propiedades.lang;
  this.pitch = propiedades.pitch;
  this.color = propiedades.color;
  this.volume = propiedades.volume;
};

exports.default = Profile;
},{}],"o3cf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Una clase Conversation para trabajar y controlar las conversaciones de todos los personajes. 
//Una conversación se podría definir como un array de objetos, donde cada uno contiene la frase y el personaje que la pronuncia.
var Conversation = /*#__PURE__*/function () {
  //Creamos la clase conversacion 
  function Conversation(chat) {
    _classCallCheck(this, Conversation);

    //Le pasamos un chat por el constructor 
    this.chat = chat;
  }

  _createClass(Conversation, [{
    key: "addMessage",
    value: function addMessage(conversacion) {
      var _this = this;

      conversacion.map(function (texto) {
        //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
        var msg = new SpeechSynthesisUtterance();
        msg.text = texto.text;
        msg.voice = texto.author.voice;
        msg.pitch = texto.author.pitch;
        msg.rate = texto.author.rate;
        msg.volume = texto.author.volume;
        msg.color = texto.author.color;
        msg.imagen = texto.author.imagen;
        msg.nombre = texto.author.nombre;

        msg.onstart = function () {
          _this.chat.innerHTML += "\n                <div class=\"texto\" style=\"color: ".concat(msg.color, "; background-color:black; display: flex; align-items: center\"> \n                <img src=\"").concat(msg.imagen, "\" width=\"150px\" height=\"150px\"> &nbsp; \n                ").concat(msg.nombre, ": \n                ").concat(msg.text, " \n                </div>");
        };

        speechSynthesis.speak(msg);
      });
    }
  }]);

  return Conversation;
}();

exports.default = Conversation;
},{}],"QvaY":[function(require,module,exports) {
"use strict";

var _Profile = _interopRequireDefault(require("./Profile.js"));

var _Conversation = _interopRequireDefault(require("./Conversation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Declaramos las variables para las voces de los personajes
var Ayrton_voice;
var Robot_voice;
var Breadman_voice; //Declaramos las imagenes que va a tener cada personaje

var Ayrton_image = "https://www.alfabetajuega.com/wp-content/uploads/2019/12/pokemon-ash-pokeball-770x433.jpg";
var Robot_image = "https://i.imgur.com/pmI53WO.png";
var Breadman_image = "https://image.freepik.com/vector-gratis/kawaii-cute-breakfast-rebanada-pan-icono_24877-12893.jpg"; //La onvoiceschanged propiedad de la SpeechSynthesis representa un controlador de eventos que se ejecutará cuando la lista de 
//SpeechSynthesisVoiceobjetos que devolvería el SpeechSynthesis.getVoices()método haya cambiado (cuando se active el evento de cambio de voces ).

speechSynthesis.onvoiceschanged = function () {
  //Devuelve una lista de objetos que representan todas las voces disponibles en el dispositivo actual y hacemos un for para recorrerlas todas y 
  //determinar la voz de cada personaje
  speechSynthesis.getVoices().forEach(function (voice) {
    if (voice.name === 'Google español de Estados Unidos') {
      Ayrton_voice = voice;
    }

    if (voice.name === 'Google italiano') {
      Robot_voice = voice;
    }

    if (voice.name === 'Google Bahasa Indonesia') {
      Breadman_voice = voice;
    }
  }); //Aquí declaramos cada personaje como una nueva clase Profile a la cual le pasamos el nombre, la imagen y la voz del personaje, asi como el lenguaje, el color 
  //el volumen, tono, velocidad. 

  var ayrtonProfile = new _Profile.default("Ayrton", Ayrton_image, Ayrton_voice, {
    lang: "es",
    rate: 1.0,
    pitch: 0.5,
    color: "#74ff2e",
    volume: 1
  });
  var robotProfile = new _Profile.default("Robot", Robot_image, Robot_voice, {
    lang: "es",
    rate: 1.0,
    pitch: 0.5,
    color: "#f8ff13",
    volume: 1
  });
  var breadmanProfile = new _Profile.default("Breadman", Breadman_image, Breadman_voice, {
    lang: "es",
    rate: 1.0,
    pitch: 0.5,
    color: "#e800ff",
    volume: 1
  }); //Cremos un objeto conversation cuando coga el identificador del chat

  var conversation = new _Conversation.default(document.querySelector('#chat')); //creamos una constante chat y le pasamos a la clase conversacion el chat con document.query
  //Cuando hagamos click en el boton

  document.querySelector("button").onclick = function () {
    //El chat se vuelve visible una vez le damos al boton del play
    document.querySelector('#chat').style.visibility = 'visible'; //Añadimos al objeto conversation los mensajes

    conversation.addMessage([{
      author: ayrtonProfile,
      text: "¡Hola a todos! ¿Qué tal están?"
    }, {
      author: robotProfile,
      text: "Muy bien, ¡gracias!"
    }, {
      author: breadmanProfile,
      text: "Yo también muy bien"
    }, {
      author: ayrtonProfile,
      text: "El robot habla con un acento un tanto raro..."
    }, {
      author: robotProfile,
      text: "Es que soy del norte"
    }]);
  };
};
},{"./Profile.js":"a4f9","./Conversation.js":"o3cf"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.18cb8bdb.js.map