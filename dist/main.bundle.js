/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml {\n  height: 100vh; }\n\nbody {\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  height: 100vh; }\n\nnav {\n  display: flex;\n  align-items: center;\n  background-color: rgba(225, 225, 225, 0.6);\n  width: 100%;\n  height: 15%; }\n\n.home-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15%;\n  height: 100%; }\n\n.home-button {\n  width: 80%;\n  height: 80%; }\n\n.nav-search-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60%;\n  height: 100%; }\n\n.search-input {\n  width: 70%;\n  height: 50%; }\n\n.search-button {\n  width: 20%;\n  height: 50%; }\n\n.nav-button-container {\n  display: flex;\n  justify-content: space-around;\n  width: 30%;\n  height: 50%; }\n\n.nav-buttons {\n  width: 25%; }\n\nbutton {\n  cursor: pointer; }\n\n.landing-page-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  border: 2px solid red;\n  height: 90%;\n  width: 30%; }\n\n.all-recipes-button {\n  height: 50%;\n  width: 90%;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(225, 225, 225, 0.6); }\n\n.recipe-display-view {\n  border: 2px solid red;\n  height: 85%; }\n\n.recipe-card-section {\n  border: 2px solid pink;\n  width: 100%;\n  height: 90%; }\n\n.recipe-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px solid yellow;\n  width: 15%;\n  height: 50%; }\n\n.recipe-card-img {\n  width: auto;\n  height: 40%; }\n\n.recipe-card-buttons {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n\n.recipe-details-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\n.recipe-header {\n  display: flex;\n  justify-content: space-between;\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n\n.recipe-details {\n  display: flex;\n  justify-content: space-around; }\n\n.recipe-details,\n.recipe-header {\n  height: 40%;\n  width: 60%;\n  background-color: rgba(225, 225, 225, 0.6); }\n\n.recipe-detail-buttons {\n  display: flex;\n  align-items: flex-end;\n  align-self: flex-start; }\n\n.filter-view {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\n.filter-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 75%;\n  width: 50%;\n  background-color: rgba(225, 225, 225, 0.6); }\n\n.filter-view-title {\n  text-align: center; }\n\n.filter-view-tags {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 50%;\n  height: 75%; }\n\n.filter-view-button {\n  border: 2px solid purple; }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAA;;AAGxB;EACE,aAAa,EAAA;;AAGf;EACE,gFAAgF;EAChF,4BAA4B;EAC5B,sBAAsB;EACtB,SAAS,EAAA;;AAGX;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa,EAAA;;AAGf;EACE,aAAa;EACb,mBAAmB;EACnB,0CAAyC;EACzC,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,YAAY,EAAA;;AAGd;EACE,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,YAAY,EAAA;;AAGd;EACE,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,UAAU,EAAA;;AAGZ;EACE,eAAe,EAAA;;AAGjB;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,WAAW;EACX,UAAU,EAAA;;AAGZ;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,0CAAyC,EAAA;;AAG3C;EACA,qBAAqB;EACrB,WAAW,EAAA;;AAGX;EACE,sBAAsB;EACtB,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,wBAAwB;EACxB,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,8BAA8B;EAC9B,gFAAgF;EAChF,4BAA4B;EAC5B,sBAAsB;EACtB,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,6BAA6B,EAAA;;AAG/B;;EAEE,WAAW;EACX,UAAU;EACV,0CAAyC,EAAA;;AAG3C;EACE,aAAa;EACb,qBAAqB;EACrB,sBAAsB,EAAA;;AAGxB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,0CAAyC,EAAA;;AAG3C;EACE,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,wBAAwB,EAAA;;AAG1B;EACE,aAAa,EAAA","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100vh;\n}\n\nbody {\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  background-color: rgba(225, 225, 225, .6);\n  width: 100%;\n  height: 15%;\n}\n\n.home-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15%;\n  height: 100%;\n}\n\n.home-button {\n  width: 80%;\n  height: 80%;\n}\n\n.nav-search-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60%;\n  height: 100%;\n}\n\n.search-input {\n  width: 70%;\n  height: 50%;\n}\n\n.search-button {\n  width: 20%;\n  height: 50%;\n}\n\n.nav-button-container {\n  display: flex;\n  justify-content: space-around;\n  width: 30%;\n  height: 50%;\n}\n\n.nav-buttons {\n  width: 25%;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.landing-page-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  border: 2px solid red;\n  height: 90%;\n  width: 30%;\n}\n\n.all-recipes-button {\n  height: 50%;\n  width: 90%;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(225, 225, 225, .6);\n}\n\n.recipe-display-view {\nborder: 2px solid red;\nheight: 85%;\n}\n\n.recipe-card-section {\n  border: 2px solid pink;\n  width: 100%;\n  height: 90%;\n}\n\n.recipe-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px solid yellow;\n  width: 15%;\n  height: 50%;\n}\n\n.recipe-card-img {\n  width: auto;\n  height: 40%;\n}\n\n.recipe-card-buttons {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.recipe-details-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.recipe-header {\n  display: flex;\n  justify-content: space-between;\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n}\n\n.recipe-details {\n  display: flex;\n  justify-content: space-around;\n}\n\n.recipe-details,\n.recipe-header {\n  height: 40%;\n  width: 60%;\n  background-color: rgba(225, 225, 225, .6);\n}\n\n.recipe-detail-buttons {\n  display: flex;\n  align-items: flex-end;\n  align-self: flex-start;\n}\n\n.filter-view {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.filter-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 75%;\n  width: 50%;\n  background-color: rgba(225, 225, 225, .6);\n}\n\n.filter-view-title {\n  text-align: center;\n}\n\n.filter-view-tags {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 50%;\n  height: 75%;\n}\n\n.filter-view-button {\n  border: 2px solid purple;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Your fetch requests will live here!


console.log('I will be a fetch request!')

/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.allIngredients = ingredientsData;
    this.totalRecipeCost = 0;
  }
  getIngredientNames() {
    let ingredientNames = [];
    const ingredientIds = this.ingredients.map((ingredient) => {
      return ingredient.id
    })
    ingredientIds.forEach((id) => {
      const ingredientName = this.allIngredients.find((ingredient) => {
        return ingredient.id === id
      }).name
      ingredientNames.push(ingredientName);
    })
    return ingredientNames;
  }
  getRecipeCost() {
    this.ingredients.map((ingredient) => {
      return ingredient.id
    }).forEach(id => {
      const ingredientCost = this.allIngredients.find((ing) => {
        return ing.id === id;
      }).estimatedCostInCents
      const ingredientAmount = this.ingredients.find((ing) => {
        return ing.id === id;
      }).quantity.amount
      this.totalRecipeCost += ((ingredientCost * ingredientAmount) / 100);
    })
    return (this.totalRecipeCost);
  }
  getRecipeInstructions() {
    return this.instructions;
  }
}






/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/classes/RecipeRepository.js":
/*!*****************************************!*\
  !*** ./src/classes/RecipeRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData;
    this.ingredients = ingredientsData;
    this.filteredRecipes = [];
  }
  getRecipeByTag(tag) {
    this.recipes.filter(recipe => {
      if(recipe.tags.includes(tag)) {
        this.filteredRecipes.push(recipe);
      }
    })
  }
  getRecipeByName(searchPhrase) {
    this.recipes.filter(recipe => {
      if(recipe.name.includes(searchPhrase)) {
        this.filteredRecipes.push(recipe);
      }
    })
  }
  getRecipeByIngredients(searchPhrase) {
    const filteredIngredients = this.ingredients.filter(ingredient => {
      return ingredient.name.includes(searchPhrase)
    });
    filteredIngredients.forEach(ingredient => {
      const recipesToPush = this.recipes.filter(recipe => {
        const recipeIngredient = recipe.ingredients.find(ing => {
          return ing.id === ingredient.id;
        })
        if(recipeIngredient) {
          return recipeIngredient.id === ingredient.id;
        } else {
          return false;
        }
      })
      recipesToPush.forEach(recipe => {
        if (!this.filteredRecipes.includes(recipe)) {
          this.filteredRecipes.push(recipe);
        }
      })
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RecipeRepository);


/***/ }),

/***/ "./src/data/ingredients.js":
/*!*********************************!*\
  !*** ./src/data/ingredients.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ingredientsData = [
    {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    },
    {
      "id": 19335,
      "name": "sucrose",
      "estimatedCostInCents": 902
    },
    {
      "id": 19206,
      "name": "instant vanilla pudding",
      "estimatedCostInCents": 660
    },
    {
      "id": 19334,
      "name": "brown sugar",
      "estimatedCostInCents": 559
    },
    {
      "id": 2047,
      "name": "salt",
      "estimatedCostInCents": 280
    },
    {
      "id": 1012047,
      "name": "fine sea salt",
      "estimatedCostInCents": 528
    },
    {
      "id": 10019903,
      "name": "semi sweet chips",
      "estimatedCostInCents": 253
    },
    {
      "id": 1145,
      "name": "unsalted butter",
      "estimatedCostInCents": 617
    },
    {
      "id": 2050,
      "name": "vanilla",
      "estimatedCostInCents": 926
    },
    {
      "id": 1009016,
      "name": "apple cider",
      "estimatedCostInCents": 468
    },
    {
      "id": 9003,
      "name": "apple",
      "estimatedCostInCents": 207
    },
    {
      "id": 20027,
      "name": "corn starch",
      "estimatedCostInCents": 236
    },
    {
      "id": 1002046,
      "name": "dijon style mustard",
      "estimatedCostInCents": 619
    },
    {
      "id": 11215,
      "name": "whole garlic clove",
      "estimatedCostInCents": 220
    },
    {
      "id": 1012046,
      "name": "whole grain dijon mustard",
      "estimatedCostInCents": 867
    },
    {
      "id": 19911,
      "name": "maple",
      "estimatedCostInCents": 349
    },
    {
      "id": 16112,
      "name": "miso",
      "estimatedCostInCents": 978
    },
    {
      "id": 10010062,
      "name": "pork chop",
      "estimatedCostInCents": 834
    },
    {
      "id": 1102047,
      "name": "s&p",
      "estimatedCostInCents": 524
    },
    {
      "id": 16124,
      "name": "soy sauce",
      "estimatedCostInCents": 486
    },
    {
      "id": 1016168,
      "name": "sriracha sauce",
      "estimatedCostInCents": 576
    },
    {
      "id": 1002030,
      "name": "black pepper",
      "estimatedCostInCents": 441
    },
    {
      "id": 1001,
      "name": "butter",
      "estimatedCostInCents": 618
    },
    {
      "id": 4582,
      "name": "oil",
      "estimatedCostInCents": 807
    },
    {
      "id": 2031,
      "name": "red pepper powder",
      "estimatedCostInCents": 583
    },
    {
      "id": 5100,
      "name": "chicken wing",
      "estimatedCostInCents": 593
    },
    {
      "id": 2009,
      "name": "red chili powder",
      "estimatedCostInCents": 499
    },
    {
      "id": 1022020,
      "name": "garlic powder",
      "estimatedCostInCents": 344
    },
    {
      "id": 6168,
      "name": "tabasco sauce",
      "estimatedCostInCents": 859
    },
    {
      "id": 9176,
      "name": "mangoes",
      "estimatedCostInCents": 425
    },
    {
      "id": 2026,
      "name": "onion powder",
      "estimatedCostInCents": 597
    },
    {
      "id": 1042047,
      "name": "seasoned salt",
      "estimatedCostInCents": 334
    },
    {
      "id": 18371,
      "name": "baking powder",
      "estimatedCostInCents": 346
    },
    {
      "id": 9040,
      "name": "ripe banana",
      "estimatedCostInCents": 331
    },
    {
      "id": 20011,
      "name": "buck wheat flour",
      "estimatedCostInCents": 865
    },
    {
      "id": 1230,
      "name": "buttermilk",
      "estimatedCostInCents": 773
    },
    {
      "id": 19296,
      "name": "runny honey",
      "estimatedCostInCents": 742
    },
    {
      "id": 16098,
      "name": "peanut butter",
      "estimatedCostInCents": 490
    },
    {
      "id": 2048,
      "name": "apple cider vinegar",
      "estimatedCostInCents": 532
    },
    {
      "id": 20090,
      "name": "brown rice flour",
      "estimatedCostInCents": 667
    },
    {
      "id": 93784,
      "name": "brown rice syrup",
      "estimatedCostInCents": 126
    },
    {
      "id": 1124,
      "name": "egg albumen",
      "estimatedCostInCents": 304
    },
    {
      "id": 93625,
      "name": "evaporated cane juice",
      "estimatedCostInCents": 118
    },
    {
      "id": 12220,
      "name": "flax meal",
      "estimatedCostInCents": 296
    },
    {
      "id": 10118375,
      "name": "instant yeast",
      "estimatedCostInCents": 383
    },
    {
      "id": 19304,
      "name": "unsulfured molasses",
      "estimatedCostInCents": 925
    },
    {
      "id": 11413,
      "name": "Potato Starch Flour",
      "estimatedCostInCents": 895
    },
    {
      "id": 93696,
      "name": "tapioca starch",
      "estimatedCostInCents": 656
    },
    {
      "id": 93760,
      "name": "Whole Grain Teff Flour",
      "estimatedCostInCents": 539
    },
    {
      "id": 14412,
      "name": "ice water",
      "estimatedCostInCents": 625
    },
    {
      "id": 93626,
      "name": "xanthan gum",
      "estimatedCostInCents": 625
    },
    {
      "id": 19350,
      "name": "corn syrup",
      "estimatedCostInCents": 441
    },
    {
      "id": 9099,
      "name": "fruit cocktail",
      "estimatedCostInCents": 953
    },
    {
      "id": 12061,
      "name": "whole almonds",
      "estimatedCostInCents": 1029
    },
    {
      "id": 12104,
      "name": "coconut",
      "estimatedCostInCents": 918
    },
    {
      "id": 12115,
      "name": "coconut cream",
      "estimatedCostInCents": 304
    },
    {
      "id": 4047,
      "name": "coconut oil",
      "estimatedCostInCents": 152
    },
    {
      "id": 10019071,
      "name": "dark chocolate morsels",
      "estimatedCostInCents": 632
    },
    {
      "id": 8212,
      "name": "granola cereal",
      "estimatedCostInCents": 381
    },
    {
      "id": 8121,
      "name": "oatmeal",
      "estimatedCostInCents": 659
    },
    {
      "id": 12142,
      "name": "pecan",
      "estimatedCostInCents": 314
    },
    {
      "id": 93740,
      "name": "blanched almond flour",
      "estimatedCostInCents": 986
    },
    {
      "id": 1125,
      "name": "egg yolks",
      "estimatedCostInCents": 889
    },
    {
      "id": 12023,
      "name": "sesame seeds",
      "estimatedCostInCents": 886
    },
    {
      "id": 1015062,
      "name": "chicken tenders",
      "estimatedCostInCents": 657
    },
    {
      "id": 10011109,
      "name": "slaw mix",
      "estimatedCostInCents": 681
    },
    {
      "id": 10116098,
      "name": "creamy peanut butter",
      "estimatedCostInCents": 152
    },
    {
      "id": 2064,
      "name": "mint",
      "estimatedCostInCents": 575
    },
    {
      "id": 2021,
      "name": "powdered ginger",
      "estimatedCostInCents": 783
    },
    {
      "id": 9160,
      "name": "juice of lime",
      "estimatedCostInCents": 477
    },
    {
      "id": 9266,
      "name": "pineapple",
      "estimatedCostInCents": 834
    },
    {
      "id": 11135,
      "name": "cauliflower",
      "estimatedCostInCents": 486
    },
    {
      "id": 6172,
      "name": "chicken stock",
      "estimatedCostInCents": 454
    },
    {
      "id": 93632,
      "name": "ghee",
      "estimatedCostInCents": 370
    },
    {
      "id": 12120,
      "name": "hazelnut",
      "estimatedCostInCents": 812
    },
    {
      "id": 93690,
      "name": "nutritional yeast flakes",
      "estimatedCostInCents": 969
    },
    {
      "id": 11282,
      "name": "onions",
      "estimatedCostInCents": 439
    },
    {
      "id": 10010123,
      "name": "proscuitto",
      "estimatedCostInCents": 217
    },
    {
      "id": 11096,
      "name": "rapini",
      "estimatedCostInCents": 846
    },
    {
      "id": 6150,
      "name": "bar b que sauce",
      "estimatedCostInCents": 966
    },
    {
      "id": 6194,
      "name": "chicken broth",
      "estimatedCostInCents": 983
    },
    {
      "id": 93627,
      "name": "liquid smoke",
      "estimatedCostInCents": 412
    },
    {
      "id": 2028,
      "name": "paprika",
      "estimatedCostInCents": 302
    },
    {
      "id": 10072,
      "name": "pork shoulder",
      "estimatedCostInCents": 969
    },
    {
      "id": 6971,
      "name": "worcestershire",
      "estimatedCostInCents": 57
    },
    {
      "id": 93607,
      "name": "almondmilk",
      "estimatedCostInCents": 787
    },
    {
      "id": 18942,
      "name": "graham cracker crust",
      "estimatedCostInCents": 655
    },
    {
      "id": 1012010,
      "name": "ground cinnamon",
      "estimatedCostInCents": 742
    },
    {
      "id": 2025,
      "name": "nutmeg powder",
      "estimatedCostInCents": 480
    },
    {
      "id": 43274,
      "name": "low fat cream cheese",
      "estimatedCostInCents": 1048
    },
    {
      "id": 8120,
      "name": "whole grain rolled oats",
      "estimatedCostInCents": 98
    },
    {
      "id": 11424,
      "name": "canned pumpkin",
      "estimatedCostInCents": 852
    },
    {
      "id": 9016,
      "name": "apple juice",
      "estimatedCostInCents": 710
    },
    {
      "id": 18047,
      "name": "raisin bread",
      "estimatedCostInCents": 222
    },
    {
      "id": 1089003,
      "name": "grannysmith apple",
      "estimatedCostInCents": 459
    },
    {
      "id": 1077,
      "name": "full-fat milk",
      "estimatedCostInCents": 276
    },
    {
      "id": 11297,
      "name": "flat leaf parsley leaves",
      "estimatedCostInCents": 1030
    },
    {
      "id": 1032009,
      "name": "dried red chili",
      "estimatedCostInCents": 1015
    },
    {
      "id": 15152,
      "name": "jumbo shrimp",
      "estimatedCostInCents": 804
    },
    {
      "id": 11294,
      "name": "vidalia onion",
      "estimatedCostInCents": 595
    },
    {
      "id": 11007,
      "name": "artichokes",
      "estimatedCostInCents": 203
    },
    {
      "id": 9150,
      "name": "lemon",
      "estimatedCostInCents": 766
    },
    {
      "id": 9156,
      "name": "lemon peel",
      "estimatedCostInCents": 630
    },
    {
      "id": 18069,
      "name": "gluten-free white sandwich bread",
      "estimatedCostInCents": 863
    },
    {
      "id": 1033,
      "name": "parmesan cheese",
      "estimatedCostInCents": 398
    },
    {
      "id": 2027,
      "name": "oregano",
      "estimatedCostInCents": 835
    },
    {
      "id": 1034053,
      "name": "extra virgin olive oil",
      "estimatedCostInCents": 305
    },
    {
      "id": 2004,
      "name": "bay leaves",
      "estimatedCostInCents": 785
    },
    {
      "id": 19336,
      "name": "powdered sugar",
      "estimatedCostInCents": 603
    },
    {
      "id": 11143,
      "name": "celery",
      "estimatedCostInCents": 840
    },
    {
      "id": 1129,
      "name": "hardcooked eggs",
      "estimatedCostInCents": 882
    },
    {
      "id": 4641,
      "name": "reduced fat mayo",
      "estimatedCostInCents": 697
    },
    {
      "id": 1011256,
      "name": "skim greek yogurt",
      "estimatedCostInCents": 263
    },
    {
      "id": 11944,
      "name": "hotdog relish",
      "estimatedCostInCents": 391
    },
    {
      "id": 10011282,
      "name": "red onion",
      "estimatedCostInCents": 638
    },
    {
      "id": 11353,
      "name": "idaho potato",
      "estimatedCostInCents": 742
    },
    {
      "id": 10211821,
      "name": "bell pepper",
      "estimatedCostInCents": 741
    },
    {
      "id": 10020048,
      "name": "brown minute rice",
      "estimatedCostInCents": 386
    },
    {
      "id": 93651,
      "name": "italian cheese blend",
      "estimatedCostInCents": 233
    },
    {
      "id": 7927,
      "name": "sweet italian turkey sausage",
      "estimatedCostInCents": 216
    },
    {
      "id": 11549,
      "name": "canned tomato sauce",
      "estimatedCostInCents": 622
    },
    {
      "id": 10120129,
      "name": "bread flour",
      "estimatedCostInCents": 114
    },
    {
      "id": 1053,
      "name": "cream",
      "estimatedCostInCents": 645
    },
    {
      "id": 4053,
      "name": "pure olive oil",
      "estimatedCostInCents": 705
    },
    {
      "id": 19912,
      "name": "agave syrup",
      "estimatedCostInCents": 642
    },
    {
      "id": 10020080,
      "name": "pastry flour",
      "estimatedCostInCents": 497
    },
    {
      "id": 10019334,
      "name": "dark brown sugar",
      "estimatedCostInCents": 501
    },
    {
      "id": 93814,
      "name": "lightly sweetened whipped cream",
      "estimatedCostInCents": 88
    },
    {
      "id": 11206,
      "name": "cucumber",
      "estimatedCostInCents": 262
    },
    {
      "id": 20035,
      "name": "quinoa",
      "estimatedCostInCents": 514
    },
    {
      "id": 11529,
      "name": "heirloom tomatoes",
      "estimatedCostInCents": 321
    },
    {
      "id": 14242,
      "name": "cranberry juice cocktail",
      "estimatedCostInCents": 335
    },
    {
      "id": 14130,
      "name": "cream soda",
      "estimatedCostInCents": 585
    },
    {
      "id": 19177,
      "name": "gelatine",
      "estimatedCostInCents": 1011
    },
    {
      "id": 93645,
      "name": "halloween sprinkles",
      "estimatedCostInCents": 293
    },
    {
      "id": 14051,
      "name": "grey goose vodka",
      "estimatedCostInCents": 373
    },
    {
      "id": 1054,
      "name": "whipped cream",
      "estimatedCostInCents": 689
    },
    {
      "id": 93828,
      "name": "marinated artichoke hearts",
      "estimatedCostInCents": 982
    },
    {
      "id": 11266,
      "name": "crimini mushrooms",
      "estimatedCostInCents": 150
    },
    {
      "id": 1017,
      "name": "cream cheese",
      "estimatedCostInCents": 955
    },
    {
      "id": 1019,
      "name": "feta",
      "estimatedCostInCents": 1003
    },
    {
      "id": 1022027,
      "name": "mixed italian herbs",
      "estimatedCostInCents": 253
    },
    {
      "id": 1082047,
      "name": "kosher salt",
      "estimatedCostInCents": 972
    },
    {
      "id": 10011457,
      "name": "spinach",
      "estimatedCostInCents": 336
    },
    {
      "id": 2044,
      "name": "basil",
      "estimatedCostInCents": 203
    },
    {
      "id": 7036,
      "name": "italian sausage links",
      "estimatedCostInCents": 1010
    },
    {
      "id": 10111549,
      "name": "marinara sauce",
      "estimatedCostInCents": 171
    },
    {
      "id": 1038,
      "name": "pecorino romano cheese",
      "estimatedCostInCents": 50
    },
    {
      "id": 11304,
      "name": "peas",
      "estimatedCostInCents": 768
    },
    {
      "id": 11677,
      "name": "shallots",
      "estimatedCostInCents": 696
    },
    {
      "id": 11020420,
      "name": "pasta shells",
      "estimatedCostInCents": 862
    },
    {
      "id": 1001026,
      "name": "shredded mozzarella",
      "estimatedCostInCents": 184
    },
    {
      "id": 93630,
      "name": "skim milk ricotta cheese",
      "estimatedCostInCents": 395
    },
    {
      "id": 14106,
      "name": "white wine",
      "estimatedCostInCents": 675
    },
    {
      "id": 11463,
      "name": "frozen spinach",
      "estimatedCostInCents": 830
    },
    {
      "id": 1025,
      "name": "pepperjack",
      "estimatedCostInCents": 212
    },
    {
      "id": 10014623,
      "name": "blackberry juice",
      "estimatedCostInCents": 256
    },
    {
      "id": 9302,
      "name": "raspberry",
      "estimatedCostInCents": 247
    },
    {
      "id": 9354,
      "name": "pineapple with juice",
      "estimatedCostInCents": 926
    },
    {
      "id": 9070,
      "name": "sweet cherries",
      "estimatedCostInCents": 184
    },
    {
      "id": 14181,
      "name": "chocolate syrup",
      "estimatedCostInCents": 530
    },
    {
      "id": 10018617,
      "name": "graham cracker crumbs",
      "estimatedCostInCents": 205
    },
    {
      "id": 12135,
      "name": "nuts",
      "estimatedCostInCents": 978
    },
    {
      "id": 9037,
      "name": "haas avocados",
      "estimatedCostInCents": 275
    },
    {
      "id": 16057,
      "name": "garbanzos",
      "estimatedCostInCents": 85
    },
    {
      "id": 2045,
      "name": "dillweed",
      "estimatedCostInCents": 162
    },
    {
      "id": 1256,
      "name": "greek yogurt",
      "estimatedCostInCents": 231
    },
    {
      "id": 9152,
      "name": "lemon juice",
      "estimatedCostInCents": 274
    },
    {
      "id": 11291,
      "name": "spring onions",
      "estimatedCostInCents": 55
    },
    {
      "id": 9236,
      "name": "peaches",
      "estimatedCostInCents": 109
    },
    {
      "id": 19095,
      "name": "icecream",
      "estimatedCostInCents": 447
    },
    {
      "id": 10862,
      "name": "cooked bacon strips",
      "estimatedCostInCents": 868
    },
    {
      "id": 5114,
      "name": "roasted chicken",
      "estimatedCostInCents": 708
    },
    {
      "id": 11333,
      "name": "green peppers",
      "estimatedCostInCents": 303
    },
    {
      "id": 1026,
      "name": "fresh mozzarella",
      "estimatedCostInCents": 290
    },
    {
      "id": 10211529,
      "name": "italian tomato",
      "estimatedCostInCents": 978
    },
    {
      "id": 1011009,
      "name": "white cheddar",
      "estimatedCostInCents": 709
    },
    {
      "id": 98998,
      "name": "balsamic glaze",
      "estimatedCostInCents": 759
    },
    {
      "id": 8030,
      "name": "fruit loops",
      "estimatedCostInCents": 191
    },
    {
      "id": 19116,
      "name": "marshmallow",
      "estimatedCostInCents": 425
    },
    {
      "id": 16158,
      "name": "hummus",
      "estimatedCostInCents": 491
    },
    {
      "id": 2046,
      "name": "prepared yellow mustard",
      "estimatedCostInCents": 300
    },
    {
      "id": 1214,
      "name": "evaporated milk",
      "estimatedCostInCents": 95
    },
    {
      "id": 9214,
      "name": "orange juice concentrate",
      "estimatedCostInCents": 379
    },
    {
      "id": 9216,
      "name": "orange peel",
      "estimatedCostInCents": 882
    },
    {
      "id": 10123,
      "name": "bacon slices",
      "estimatedCostInCents": 817
    },
    {
      "id": 11052,
      "name": "string beans",
      "estimatedCostInCents": 502
    },
    {
      "id": 11959,
      "name": "baby arugula leaves",
      "estimatedCostInCents": 207
    },
    {
      "id": 1004,
      "name": "blue cheese",
      "estimatedCostInCents": 646
    },
    {
      "id": 9252,
      "name": "pear",
      "estimatedCostInCents": 467
    },
    {
      "id": 43408,
      "name": "pear juice",
      "estimatedCostInCents": 163
    },
    {
      "id": 2049,
      "name": "fresh thyme leaves",
      "estimatedCostInCents": 681
    },
    {
      "id": 12155,
      "name": "walnut halves",
      "estimatedCostInCents": 895
    },
    {
      "id": 10011693,
      "name": "canned tomato",
      "estimatedCostInCents": 171
    },
    {
      "id": 11124,
      "name": "carrots",
      "estimatedCostInCents": 136
    },
    {
      "id": 2012,
      "name": "coriander",
      "estimatedCostInCents": 52
    },
    {
      "id": 1002014,
      "name": "comino",
      "estimatedCostInCents": 547
    },
    {
      "id": 11913,
      "name": "frozen corn",
      "estimatedCostInCents": 558
    },
    {
      "id": 11477,
      "name": "zucchini squash",
      "estimatedCostInCents": 742
    },
    {
      "id": 10220445,
      "name": "steamed rice",
      "estimatedCostInCents": 1040
    },
    {
      "id": 2003,
      "name": "ground basil",
      "estimatedCostInCents": 198
    },
    {
      "id": 16018,
      "name": "canned black beans",
      "estimatedCostInCents": 356
    },
    {
      "id": 99223,
      "name": "canned chipotle chilies in adobo",
      "estimatedCostInCents": 299
    },
    {
      "id": 11165,
      "name": "cilantro",
      "estimatedCostInCents": 159
    },
    {
      "id": 10218364,
      "name": "flour tortilla",
      "estimatedCostInCents": 653
    },
    {
      "id": 10611282,
      "name": "white onions",
      "estimatedCostInCents": 449
    },
    {
      "id": 11457,
      "name": "baby spinach leaves",
      "estimatedCostInCents": 668
    },
    {
      "id": 11268,
      "name": "dried shiitake mushroom",
      "estimatedCostInCents": 806
    },
    {
      "id": 10020005,
      "name": "farro",
      "estimatedCostInCents": 286
    },
    {
      "id": 10511282,
      "name": "yellow onion",
      "estimatedCostInCents": 241
    },
    {
      "id": 2069,
      "name": "balsamic vinegar",
      "estimatedCostInCents": 118
    },
    {
      "id": 11250,
      "name": "boston bibb lettuce",
      "estimatedCostInCents": 61
    },
    {
      "id": 11156,
      "name": "fresh chive",
      "estimatedCostInCents": 728
    },
    {
      "id": 4025,
      "name": "mayonnaise",
      "estimatedCostInCents": 630
    },
    {
      "id": 11119,
      "name": "napa cabbage",
      "estimatedCostInCents": 1009
    },
    {
      "id": 11112,
      "name": "red cabbage",
      "estimatedCostInCents": 659
    },
    {
      "id": 98962,
      "name": "sweet chili sauce",
      "estimatedCostInCents": 1001
    },
    {
      "id": 2042,
      "name": "dried thyme",
      "estimatedCostInCents": 307
    },
    {
      "id": 1002020,
      "name": "granulated garlic",
      "estimatedCostInCents": 228
    },
    {
      "id": 10023572,
      "name": "ground chuck",
      "estimatedCostInCents": 600
    },
    {
      "id": 10011250,
      "name": "butterhead lettuce leaves",
      "estimatedCostInCents": 341
    },
    {
      "id": 5064,
      "name": "baked chicken breast",
      "estimatedCostInCents": 1020
    },
    {
      "id": 2015,
      "name": "curry seasoning",
      "estimatedCostInCents": 312
    },
    {
      "id": 1009159,
      "name": "lime peel",
      "estimatedCostInCents": 435
    },
    {
      "id": 98991,
      "name": "mint chutney",
      "estimatedCostInCents": 927
    },
    {
      "id": 9316,
      "name": "strawberry",
      "estimatedCostInCents": 292
    },
    {
      "id": 11090,
      "name": "broccoli crowns",
      "estimatedCostInCents": 256
    },
    {
      "id": 10011821,
      "name": "sweet orange pepper",
      "estimatedCostInCents": 968
    },
    {
      "id": 10218,
      "name": "pork tenderloin",
      "estimatedCostInCents": 845
    },
    {
      "id": 19157,
      "name": "mini m&m",
      "estimatedCostInCents": 552
    },
    {
      "id": 98871,
      "name": "hawaiian sweet rolls",
      "estimatedCostInCents": 535
    },
    {
      "id": 1055062,
      "name": "boneless skinless chicken breasts",
      "estimatedCostInCents": 897
    },
    {
      "id": 10019151,
      "name": "reese pieces",
      "estimatedCostInCents": 721
    },
    {
      "id": 1041009,
      "name": "cheese",
      "estimatedCostInCents": 850
    },
    {
      "id": 10018413,
      "name": "flatbread",
      "estimatedCostInCents": 326
    },
    {
      "id": 10111529,
      "name": "grape tomato",
      "estimatedCostInCents": 168
    },
    {
      "id": 9019,
      "name": "unsweetened apple sauce",
      "estimatedCostInCents": 154
    },
    {
      "id": 18079,
      "name": "dry breadcrumbs",
      "estimatedCostInCents": 167
    },
    {
      "id": 16069,
      "name": "legumes",
      "estimatedCostInCents": 903
    },
    {
      "id": 9079,
      "name": "dried cranberries",
      "estimatedCostInCents": 921
    },
    {
      "id": 11935,
      "name": "catsup",
      "estimatedCostInCents": 666
    },
    {
      "id": 12151,
      "name": "pistachio",
      "estimatedCostInCents": 813
    },
    {
      "id": 11821,
      "name": "red sweet peppers",
      "estimatedCostInCents": 1027
    },
    {
      "id": 6615,
      "name": "vegetable stock",
      "estimatedCostInCents": 613
    }
  ];

/* harmony default export */ __webpack_exports__["default"] = (ingredientsData);


/***/ }),

/***/ "./src/data/recipes.js":
/*!*****************************!*\
  !*** ./src/data/recipes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const recipeData = [
    {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "id": 1009016,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "clove"
          }
        },
        {
          "id": 1012046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 19911,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 16112,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 10010062,
          "quantity": {
            "amount": 24,
            "unit": "ounce"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 412309,
      "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 2031,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 5100,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 2009,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 6168,
          "quantity": {
            "amount": 8,
            "unit": "cups"
          }
        },
        {
          "id": 9176,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2026,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1042047,
          "quantity": {
            "amount": 1.5,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1042047,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
          "number": 1
        }
      ],
      "name": "Dirty Steve's Original Wing Sauce",
      "tags": [
        "sauce"
      ]
    },
    {
      "id": 741603,
      "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 9040,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "id": 20011,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 6,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1230,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "id": 16098,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Watch how to make this recipe.",
          "number": 1
        },
        {
          "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
          "number": 2
        },
        {
          "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
          "number": 3
        },
        {
          "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
          "number": 4
        },
        {
          "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
          "number": 5
        },
        {
          "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
          "number": 6
        },
        {
          "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
          "number": 7
        }
      ],
      "name": "Elvis Pancakes",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 562334,
      "image": "https://spoonacular.com/recipeImages/562334-556x370.jpg",
      "ingredients": [
        {
          "id": 2048,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "teaspoon"
          }
        },
        {
          "id": 20090,
          "quantity": {
            "amount": 1.125,
            "unit": "cup"
          }
        },
        {
          "id": 93784,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1124,
          "quantity": {
            "amount": 3,
            "unit": "large"
          }
        },
        {
          "id": 93625,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 12220,
          "quantity": {
            "amount": 2,
            "unit": "Tablespoons"
          }
        },
        {
          "id": 10118375,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 19304,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 11413,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "id": 93696,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 93760,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 93626,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Grease or spray oil a 9×5 inch loaf pan.Preheat oven to 170 – 200°F (lowest possible).",
          "number": 1
        },
        {
          "instruction": "Mix warm water with brown rice syrup, molasses, and yeast in a cup larger than 8 oz., as it may bubble over; set aside until foamy on the top, no more than 5 minutes.In the bowl of your mixer, beat the eggs at high speed in a large mixing bowl until large bubbles form, about 20 seconds.",
          "number": 2
        },
        {
          "instruction": "Whisk together the dry ingredients; set aside.",
          "number": 3
        },
        {
          "instruction": "Add the oil, vinegar and yeast mixture to the egg whites and blend on low for a few seconds.",
          "number": 4
        },
        {
          "instruction": "Add dry ingredients all at once and mix on low speed until all dry ingredients are moistened. Then beat on high for 1 minute.",
          "number": 5
        },
        {
          "instruction": "Add dough batter to prepared pan and distribute and smooth the top using a rubber spatula. You'll want to meet all sides of the pan. If you miss the corners that will still be okay. It will fill in upon rising. To even out top, drop a few drops of filtered water on top, and spread evenly with a rubber spatula, or dip spatula in water several times.",
          "number": 6
        },
        {
          "instruction": "Place the bread pan in the oven. Turn oven off. Allow the dough to rise until the center is about 1/2” over the top of the pan, about 22 minutes. It will rise more while the oven is heating and during baking.",
          "number": 7
        },
        {
          "instruction": "Remove pan from oven and preheat oven to 375°F.",
          "number": 8
        },
        {
          "instruction": "Place the pan on the center of the rack in the center of the oven and bake for about 45 minutes or more.",
          "number": 9
        },
        {
          "instruction": "Remove the loaf from the oven and immediately remove it from the pan (careful it will be hot), and set the loaf on a cooling rack to cool. If you do not remove it right away the steam will make the crust soggy.Slice off the two ends to allow the steam to escape, or it will begin to sink in on the sides and bottom.Once cooled, it will shrink a little bit. Slice it with an electric slicer, electric knife or serrated knife. You'll get about 13-16, depending upon how thick you slice it.",
          "number": 10
        }
      ],
      "name": "Mock Udi’s Gluten Free Whole Grain Bread",
      "tags": []
    },
    {
      "id": 507921,
      "image": "https://spoonacular.com/recipeImages/507921-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19350,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 1124,
          "quantity": {
            "amount": 2,
            "unit": "large"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 9099,
          "quantity": {
            "amount": 15,
            "unit": "oz"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "To make the Cupcakes: Preheat oven to 350 degrees. Line 12 cupcake tins with paper holders.",
          "number": 1
        },
        {
          "instruction": "Whisk together dry Fruit Cocktail Cupcakes ingredients.",
          "number": 2
        },
        {
          "instruction": "Add in wet Fruit Cocktail Cupcakes ingredients and stir with a rubber spatula until thoroughly combined. Fill cupcake tins evenly, and bake for 20 minutes or until thin knife inserted in center comes out clean.",
          "number": 3
        }
      ],
      "name": "Ambrosia Cupcakes",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 721146,
      "image": "https://spoonacular.com/recipeImages/721146-556x370.jpg",
      "ingredients": [
        {
          "id": 12061,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 6,
            "unit": "tablespoons"
          }
        },
        {
          "id": 12104,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 12115,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 4047,
          "quantity": {
            "amount": 6,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10019071,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 8212,
          "quantity": {
            "amount": 1,
            "unit": "Handful"
          }
        },
        {
          "id": 19911,
          "quantity": {
            "amount": 5,
            "unit": "tablespoons"
          }
        },
        {
          "id": 8121,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        },
        {
          "id": 12142,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat the oven to 325 degrees F.Coarsely chop the almonds and pecans.",
          "number": 1
        },
        {
          "instruction": "Combine the oats, almonds, pecans, and salt in a bowl. Toss to combine.In a medium-sized bowl, combine the coconut oil (measure exactly when it's melted and not in the hardened state), and 1/2 cup chocolate chips.Microwave in bursts of 15 seconds stirring in between each burst for 15 seconds until completely melted.Stir in the brown sugar (measured lightly packed), honey or maple syrup, and vanilla extract.",
          "number": 2
        },
        {
          "instruction": "Pour the chocolate wet mixture into the oat and nut mixture and stir until well combined.",
          "number": 3
        },
        {
          "instruction": "Spread the granola evenly onto a parchment lined baking sheet.",
          "number": 4
        },
        {
          "instruction": "Bake for 20-30 minutes (depending on the heat of your oven) making sure to flip and stir the granola around every 6-8 minutes.",
          "number": 5
        },
        {
          "instruction": "Remove and allow the granola to harden and set up. (It may be soft and not very \"granola-like\", but it hardens as it dries out so be careful to not over-cook it). Mine generally takes about 21 minutes to be fully baked.Allow the granola to sit at room temperature for a few hours to harden and set up.Once the granola is hardened, stir in the remaining 1/2 cup chocolate chips and the toasted flaked coconut.To make a yogurt bowl: fill a bowl with the coconut cream yogurt, add a swirl of nut butter, add some fruit such as a banana, add the granola, and finish with chia seeds. Enjoy immediately.",
          "number": 6
        }
      ],
      "name": "Creamy Coconut Yogurt Bowl with Chocolate Granola (Video)",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 541288,
      "image": "https://spoonacular.com/recipeImages/541288-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 160,
            "unit": "g"
          }
        },
        {
          "id": 93740,
          "quantity": {
            "amount": 40,
            "unit": "g"
          }
        },
        {
          "id": 1125,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 12023,
          "quantity": {
            "amount": 40,
            "unit": "g"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 80,
            "unit": "g"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 1,
            "unit": "stick"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Cut the butter into small cubes and keep them refrigerated until ready to use (I cut on parchment paper and wrap up the butter for easy transfer.).In the food processor, combine the flour, almond meal, sugar, and salt. If you don’t have a food processor, you can simply use a bowl to mix all the ingredients.If you want your sesame seeds to be fine texture, add them now. If you prefer to keep the original shape of sesame seeds, add them with egg yolk later on.Take out the butter from the refrigerator and mix together. If you use a regular bowl to mix, use a dough/pastry blender to combine the butter into the dry ingredients.Lastly add egg yolk.If the food processor is small (like mine) and it doesn’t look like it’s mixed completely, take it out and mix well with a silicone spatula.Form the dough into a ball and cut in half.",
          "number": 1
        },
        {
          "instruction": "Roll it to a log approximately 2” across. For me it’s easier to work when the dough is wrapped in plastic wrap. While rolling, unwrap some parts of plastic wrap then roll again. Form a nice shape. I wasn't paying attention so my log is flat on one side (see step 11)!Wrap the logs tightly in plastic wrap and refrigerate until firm, about 1 hour.Preheat the oven to 350° F (175° C).",
          "number": 2
        },
        {
          "instruction": "Remove the dough from plastic wrap and cut into discs about ¼ inch thick (if you prefer thicker cookies, cut into discs about ½ inch and you get 20 cookies total).",
          "number": 3
        },
        {
          "instruction": "Place them on two baking sheets lined with parchment paper.",
          "number": 4
        },
        {
          "instruction": "Bake for about 15 minutes, or until lightly browned around the edges.",
          "number": 5
        },
        {
          "instruction": "Remove from the oven and allow to cool on the baking sheet for about 10 minutes. Then transfer to a wire rack to cool completely. Store cookies in an airtight container. Cookies will last for a day or two.",
          "number": 6
        }
      ],
      "name": "Sesame Cookies",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 779583,
      "image": "https://spoonacular.com/recipeImages/779583-556x370.jpg",
      "ingredients": [
        {
          "id": 19334,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1015062,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 10011109,
          "quantity": {
            "amount": 4,
            "unit": "cups"
          }
        },
        {
          "id": 10116098,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 2064,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 2021,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 9160,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 9266,
          "quantity": {
            "amount": 1.25,
            "unit": "cups"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 0.5,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Prepare the chicken: In a large bowl, whisk together the brown sugar, ginger, oil, soy sauce, Sriracha and peanut butter.",
          "number": 1
        },
        {
          "instruction": "Add the chicken and toss to coat.",
          "number": 2
        },
        {
          "instruction": "Let marinate at room temperature for 15 minutes or cover and refrigerate for up to 6 hours. Preheat the oven broiler with a rack set 4-inches from the heat source. Line an 18x13-inch rimmed sheet pan with foil and spray with nonstick spray.",
          "number": 3
        },
        {
          "instruction": "Remove the chicken from the marinade, discarding excess marinade, and place on prepared pan, covering two-thirds of the pan and spacing evenly. Broil for 6 minutes.",
          "number": 4
        },
        {
          "instruction": "Remove the pan from the oven and spread pineapple on the remaining space on the pan. Sprinkle the pineapple with 1 tablespoon brown sugar. Broil for 3 to 5 minutes or until chicken is browned and no longer pink inside.",
          "number": 5
        },
        {
          "instruction": "Transfer the chicken to serving plates.",
          "number": 6
        },
        {
          "instruction": "Place the coleslaw mix in a medium bowl.",
          "number": 7
        },
        {
          "instruction": "Add the broiled pineapple, lime juice, oil, soy sauce and Sriracha; toss to coat. Divide among the plates with the chicken and sprinkle the slaw with mint or basil.",
          "number": 8
        }
      ],
      "name": "Thai Chicken Tenders with Broiled Pineapple Slaw",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 550940,
      "image": "https://spoonacular.com/recipeImages/550940-556x370.jpg",
      "ingredients": [
        {
          "id": 11135,
          "quantity": {
            "amount": 1,
            "unit": "large head"
          }
        },
        {
          "id": 6172,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 8,
            "unit": ""
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        },
        {
          "id": 93632,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 12120,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 93690,
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "small"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 10010123,
          "quantity": {
            "amount": 5,
            "unit": "slices"
          }
        },
        {
          "id": 11096,
          "quantity": {
            "amount": 200,
            "unit": "g"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat the oven to 375FCook and peel the hard boiled eggs according to your favourite method.",
          "number": 1
        },
        {
          "instruction": "Add onion, garlic, salt and pepper to a medium saucepan. Cook over medium heat for one or two minutes, until fragrant and slightly softened.Throw the cauliflower florets in and continue cooking for a minute or two.",
          "number": 2
        },
        {
          "instruction": "Add chicken stock, cover and bring to the boil; lower heat and continue cooking until the cauliflower is tender, about 5-7 minutes.Ladle the cauliflower mixture into your blender; add ghee, Dijon mustard and nutritional yeast and process on high speed until super smooth and silky in consistency. Set aside. Steam the rapini for 30 seconds to a minute, until slightly softened and bright green. In a small skillet, dry roast the hazelnuts over medium heat until they become fragrant and take a nice golden coloration. Slice the hard boiled eggs and add them to a large mixing bowl, followed by “Bechamel” sauce, rapini and three quarters of the hazelnuts.",
          "number": 3
        },
        {
          "instruction": "Mix very delicately until well combined and transfer to an oven safe dish. Tear the prosciutto into smaller pieces and arrange them on top of the dish. Sprinkle with the rest of the hazelnuts. Cover with foil and place in the oven for 20 minutes; after that time, remove the foil and set the oven to broil for a 2-3 minutes or until the prosciutto becomes nice and crispy and takes a nice golden coloration. You could also make this ahead of time and place it in the fridge after you have covered it with foil (although you might want to let it cool a bit beforehand). In this case, you’ll want to increase oven time to about 45 minutes, at 375F. This also reheats extremely well in the microwave and will easily keep for 4-5 days in the refrigerator.",
          "number": 4
        }
      ],
      "name": "Egg and Rapini Casserole",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 583502,
      "image": "https://spoonacular.com/recipeImages/583502-556x370.jpg",
      "ingredients": [
        {
          "id": 6150,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          }
        },
        {
          "id": 6194,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 3,
            "unit": "large"
          }
        },
        {
          "id": 93627,
          "quantity": {
            "amount": 3,
            "unit": "tbsp"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 2028,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 10072,
          "quantity": {
            "amount": 6,
            "unit": "lbs"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 6971,
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Combine 1 cup chicken broth, 1 cup BBQ sauce, 3 tbsp liquid smoke, 2 tbsp Worcestershire sauce, 3 pressed garlic cloves, 2 tbsp brown sugar and stir to combine.Generously sprinkle the pork roast with salt, pepper and paprika.Rub the seasoning into the pork shoulder.Chop 1 large onion and place it into the bottom of the slow cooker.",
          "number": 1
        },
        {
          "instruction": "Place the pork roast over the onion and pour the marinade over the pork.Cover and set on low for 8 hours.",
          "number": 2
        },
        {
          "instruction": "Let it cool down so you don't burn your fingers while shredding.",
          "number": 3
        },
        {
          "instruction": "Remove the meat to a large bowl and shred. This meat is fall-apart tender! The marinade enhances the natural flavors of the pork. When you're done shredding the pork, pour as much of the remaining sauce over the pork as you like.",
          "number": 4
        },
        {
          "instruction": "Serve with more Baby Rays BBQ Sauce... and pickles",
          "number": 5
        }
      ],
      "name": "Pulled Pork",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 543687,
      "image": "https://spoonacular.com/recipeImages/543687-556x370.jpg",
      "ingredients": [
        {
          "id": 93607,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 9040,
          "quantity": {
            "amount": 1,
            "unit": "small"
          }
        },
        {
          "id": 18942,
          "quantity": {
            "amount": 1,
            "unit": "Tbsp"
          }
        },
        {
          "id": 1012010,
          "quantity": {
            "amount": 0.25,
            "unit": "tsp"
          }
        },
        {
          "id": 2021,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2025,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 43274,
          "quantity": {
            "amount": 1,
            "unit": "oz"
          }
        },
        {
          "id": 8120,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 11424,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Add all ingredients to a blender (except graham crackers if using). Cover and blend until well pureed then serve topped with crushed graham crackers if desired.*The banana is mostly what gives this smoothie it's sweetness, so I recommend using one that is speckled (not mushy though).Recipe Source: Cooking Classy",
          "number": 1
        }
      ],
      "name": "Pumpkin Cheesecake Breakfast Smoothie",
      "tags": [
        "morning meal",
        "brunch",
        "breakfast"
      ]
    },
    {
      "id": 516904,
      "image": "https://spoonacular.com/recipeImages/516904-556x370.jpg",
      "ingredients": [
        {
          "id": 9016,
          "quantity": {
            "amount": 3,
            "unit": "Tablespoons"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 1,
            "unit": "Tablespoon"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "Tablespoons"
          }
        },
        {
          "id": 18047,
          "quantity": {
            "amount": 16,
            "unit": "ounce"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 10,
            "unit": "large"
          }
        },
        {
          "id": 1089003,
          "quantity": {
            "amount": 5,
            "unit": "medium"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 2,
            "unit": "Tablespoons"
          }
        },
        {
          "id": 1012010,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Prepare apple filling: Melt butter over medium heat in 12- inch skillet.",
          "number": 1
        },
        {
          "instruction": "Add apples and sugar; cook 20 minutes, stirring occasionally. Stir in apple juice; cook 1 more minute.",
          "number": 2
        },
        {
          "instruction": "Grease 13 x 9-inch baking dish. Arrange 1/2 of bread slices, overlapping slightly.",
          "number": 3
        },
        {
          "instruction": "In a medium bowl, whisk milk, salt, cinnamon and eggs.",
          "number": 4
        },
        {
          "instruction": "Pour 1/2 of egg mixture over bread. Set aside 1/4 of apple filling; cover and refrigerate to spoon on after baking.",
          "number": 5
        },
        {
          "instruction": "Spread remaining apple filling over bread in an even layer. Arrange remaining bread slices over apple layer.",
          "number": 6
        },
        {
          "instruction": "Pour remaining egg mixture over top bread layer. Press bread down with spatula so it absorbs the maximum amount of egg mixture. Dot bread with butter and sprinkle with sugar. Cover and refrigerate overnight.",
          "number": 7
        },
        {
          "instruction": "To bake: Preheat oven to 325°F. Uncover dish and bake 50 to 55 minutes or until knife inserted in center comes out clean. Reheat remaining apple mixture in microwave. Spoon over top to serve.",
          "number": 8
        }
      ],
      "name": "Cinnamon Raisin Overnight French Toast w/ Apple Filling",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 988243,
      "image": "https://spoonacular.com/recipeImages/988243-556x370.jpg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 4,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 6,
            "unit": "cloves"
          }
        },
        {
          "id": 1032009,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 15152,
          "quantity": {
            "amount": 2,
            "unit": "pounds"
          }
        },
        {
          "id": 11294,
          "quantity": {
            "amount": 0.25,
            "unit": "medium"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Melt butter to a large skillet over medium heat. As the butter melts, it will begin to foam as it transitions from a bright, lemon-yellow color to golden and then finally to a nutty-brown color. As the butter just begins to turn nutty-brown from golden, reduce your heat to medium-low and carefully toss in your garlic and onion. Cook until the onion just begins to become tender and then add in your shrimp. Stirring frequently, cook until the shrimp turn pink and lose their translucence.",
          "number": 1
        },
        {
          "instruction": "Stir in salt, black pepper, red pepper flakes and fresh parsley. Toss shrimp to make sure all are well-coated.",
          "number": 2
        },
        {
          "instruction": "Remove from heat and serve.",
          "number": 3
        }
      ],
      "name": "Brown Butter Garlic Shrimp",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 724018,
      "image": "https://spoonacular.com/recipeImages/724018-556x370.jpg",
      "ingredients": [
        {
          "id": 11007,
          "quantity": {
            "amount": 2,
            "unit": "large"
          }
        },
        {
          "id": 9150,
          "quantity": {
            "amount": 4,
            "unit": "slices"
          }
        },
        {
          "id": 9156,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 18069,
          "quantity": {
            "amount": 6,
            "unit": "slices"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 6,
            "unit": "cloves"
          }
        },
        {
          "id": 2027,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1034053,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2004,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 9150,
          "quantity": {
            "amount": 2,
            "unit": "slices"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Cut off the crust from 6 slices of bread. Chop the centers and put into a food processor. Pulse until you have coarse breadcrumbs. You should have about 3 cups.",
          "number": 1
        },
        {
          "instruction": "Make the stuffing: In a large bowl, stir together the breadcrumbs, lemon zest, Parmesan cheese, minced garlic, chopped parsley, minced oregano, 1/2 cup olive oil, and black pepper. Set aside.",
          "number": 2
        }
      ],
      "name": "Baked Stuffed Artichokes",
      "tags": [
        "side dish",
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 623855,
      "image": "https://spoonacular.com/recipeImages/623855-556x370.jpg",
      "ingredients": [
        {
          "id": 18372,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 10116098,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 10116098,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1.25,
            "unit": "cup"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 19336,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "Tbsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 350FLine a baking sheet with parchment, set aside.In bowl of stand mixer cream butter and peanut butter together until smooth.",
          "number": 1
        },
        {
          "instruction": "Add both sugars and beat for 2 minutes.",
          "number": 2
        },
        {
          "instruction": "Add in egg, vanilla, baking soda and salt.",
          "number": 3
        },
        {
          "instruction": "Mix until combined.Turn mixer to low and add in flour.Portion out dough by in tablespoon amounts.",
          "number": 4
        },
        {
          "instruction": "Roll into a ball and then flatten to approximately  inch thick.",
          "number": 5
        },
        {
          "instruction": "Place on baking sheet about 2 inches apart.",
          "number": 6
        },
        {
          "instruction": "Bake for 8-9 minutes until golden at he edges.",
          "number": 7
        },
        {
          "instruction": "Remove from oven and transfer cookies to a wire rack to cool completely.In microwave safe bowl combine chocolate chips, peanut butter and butter.",
          "number": 8
        },
        {
          "instruction": "Heat on high for 1 minute and then stir until smooth.",
          "number": 9
        },
        {
          "instruction": "Place powdered sugar in bowl.Dip each cookie in chocolate and using a fork remove cookie, tapping off excess chocolate. You don't need a lot of chocolate coating on the cookies.Immediately dip the cookie into the powdered sugar and toss to coat completely.",
          "number": 10
        },
        {
          "instruction": "Place back on cooling rack to until chocolate is set. Repeat for all cookies.",
          "number": 11
        }
      ],
      "name": "Puppy Chow Cookies",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 793584,
      "image": "https://spoonacular.com/recipeImages/793584-556x370.jpg",
      "ingredients": [
        {
          "id": 11143,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1129,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 4641,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1011256,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2026,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11944,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10011282,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11353,
          "quantity": {
            "amount": 2,
            "unit": "pounds"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoons"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Place potatoes in a large saucepan and add water to cover by 1 inch. Bring to boil over medium-high heat.",
          "number": 1
        },
        {
          "instruction": "Add 1-tablespoon salt, reduce heat to medium, and simmer. Stir a few times, until potatoes re-fork tender, about 8 minutes.",
          "number": 2
        },
        {
          "instruction": "Drain potatoes and transfer to a large bowl.In a medium sized bowl whisk together yogurt, mayonnaise, mustard, salt, pepper and onion powder.",
          "number": 3
        },
        {
          "instruction": "Add to potatoes and gently stir to combine.",
          "number": 4
        },
        {
          "instruction": "Add celery, pickles, red onions, parsley and chopped eggs to potato mixture, stir to combine.",
          "number": 5
        },
        {
          "instruction": "Add more salt and pepper to taste.Cover and refrigerate until chilled, about 1 hour before serving. Potato salad can be made up to one day ahead.",
          "number": 6
        }
      ],
      "name": "Easy Creamy Potato Salad with Yogurt",
      "tags": [
        "salad"
      ]
    },
    {
      "id": 607805,
      "image": "https://spoonacular.com/recipeImages/607805-556x370.jpg",
      "ingredients": [
        {
          "id": 10211821,
          "quantity": {
            "amount": 3,
            "unit": "large"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        },
        {
          "id": 10020048,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 93651,
          "quantity": {
            "amount": 1,
            "unit": "cups"
          }
        },
        {
          "id": 7927,
          "quantity": {
            "amount": 0.5,
            "unit": "lb"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "small"
          }
        },
        {
          "id": 2027,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 2,
            "unit": "Tbsp"
          }
        },
        {
          "id": 11549,
          "quantity": {
            "amount": 14,
            "unit": "oz"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Cut tops off peppers; remove and discard seeds.",
          "number": 1
        },
        {
          "instruction": "Chop tops; place in medium bowl.",
          "number": 2
        },
        {
          "instruction": "Add sausage, onions, rice, Parmesan, garlic, oregano, 1-1/2 cups pizza sauce and 1-1/4 cups shredded cheese; mix lightly.  Spoon into pepper shells.",
          "number": 3
        },
        {
          "instruction": "Stand peppers in slow cooker; top with remaining sauce and shredded cheese.  Cover with lid.",
          "number": 4
        },
        {
          "instruction": "Cook on LOW 6 to 8 hours (or on HIGH 2-1/2 to 3-1/2 hours).",
          "number": 5
        }
      ],
      "name": "Slow-Cooker Italian-Stuffed Peppers",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 763858,
      "image": "https://spoonacular.com/recipeImages/763858-556x370.jpg",
      "ingredients": [
        {
          "id": 10120129,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 3.5,
            "unit": "cups"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 10118375,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10118375,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 16,
            "unit": "servings"
          }
        },
        {
          "id": 8120,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 8120,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Whisk flours together with  teaspoon instant yeast in a large mixing bowl with a tight-fitting lid (like this one), and then stir in the oats. Stir the water and milk together, then pour the liquids into the dry ingredients, stirring to create a loose, shaggy dough. Cover the mixing bowl tightly, and allow the dough to rest at room temperature at least eight and up to twelve hours.Dump the dough into the basin of a stand mixer (like this one), and then beat in the butter, honey, salt, and the remaining 2 tablespoons yeast. Continue beating all the ingredients together until they form a smooth dough, and then turn it out on a well-floured surface. Knead by hand for ten to fifteen minutes, incorporating about 1 cups additional flour, until the dough becomes smooth and elastic.Oil a large mixing bowl, and transfer the dough to the bowl. Cover tightly, and allow the dough to rise until doubled in volume.",
          "number": 1
        },
        {
          "instruction": "Transfer the dough to a well-floured surface, and split into two portions of approximately equal weight. Butter and flour two 4-inch by 8-inch loaf pans.Working one at a time, roll each lump of dough out into a large rectangle, about 8 by 16 inches. Working from the short end, roll the dough into a loaf, pinching the seam at the bottom of the loaf tightly to seal it.",
          "number": 2
        },
        {
          "instruction": "Place the dough, seam-side down, in a prepared loaf pan. Cover lightly with a kitchen towel, and allow it to rise until doubled in size, about two hours.While the dough rises, heat the oven to 400 F.Using a pastry brush, gently brush the top of the dough with cream, and then scatter one tablespoon rolled oats over each loaf.",
          "number": 3
        },
        {
          "instruction": "Transfer the loaves to the oven, and bake 5 minutes at 400 F. Then reduce the temperature to 350 F and continue baking until the crust is a dark brown and the bread reaches an internal temperature of 200 F about 45 minutes.",
          "number": 4
        },
        {
          "instruction": "Remove from the oven and allow the loaves to cool in their pans for five minutes, then turn out onto a wire rack, allowing the bread to cool completely before slicing.",
          "number": 5
        }
      ],
      "name": "Whole Wheat Milk and Honey Sandwich Bread",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 618332,
      "image": "https://spoonacular.com/recipeImages/618332-556x370.jpg",
      "ingredients": [
        {
          "id": 19912,
          "quantity": {
            "amount": 168,
            "unit": "g"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 2,
            "unit": "g"
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "g"
          }
        },
        {
          "id": 10019071,
          "quantity": {
            "amount": 42,
            "unit": "g"
          }
        },
        {
          "id": 1012010,
          "quantity": {
            "amount": 3,
            "unit": "g"
          }
        },
        {
          "id": 11424,
          "quantity": {
            "amount": 183,
            "unit": "g"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "g"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 28,
            "unit": "g"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 5,
            "unit": "mL"
          }
        },
        {
          "id": 10020080,
          "quantity": {
            "amount": 120,
            "unit": "g"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a medium bowl, whisk together the flour, baking powder, cornstarch, cinnamon, and salt. In a separate bowl, whisk together the butter, pumpkin, and vanilla. Stir in the agave.",
          "number": 1
        },
        {
          "instruction": "Add the flour mixture, stirring just until incorporated. Fold in 2 tablespoons of chocolate chips. Chill the cookie dough for at least 30 minutes. (If chilling longer than 1 hour, cover the top of the bowl with foil.)Preheat the oven to 325F, and line a baking sheet with parchment paper or a silicone baking mat. Drop the cookie dough into 12 rounded scoops onto the prepared baking sheet. Flatten slightly, and press the remaining chocolate chips into the tops of the cookie dough.",
          "number": 2
        },
        {
          "instruction": "Bake at 325F for 15-17 minutes. Cool on the baking sheet for at least 10 minutes before turning out onto a wire rack.",
          "number": 3
        }
      ],
      "name": "The Ultimate Healthy Soft & Chewy Pumpkin Chocolate Chip Cookies",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 231951,
      "image": "https://spoonacular.com/recipeImages/231951-556x370.jpg",
      "ingredients": [
        {
          "id": 20027,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10019334,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 93814,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Whisk together brown sugar, cornstarch, and 1/4 teaspoon salt in a heavy medium saucepan, then whisk in milk and cream. Bring to a boil over medium heat, whisking frequently, then boil, whisking, 1 minute.",
          "number": 1
        },
        {
          "instruction": "Remove from heat and whisk in butter and vanilla.",
          "number": 2
        },
        {
          "instruction": "Pour into a bowl, then cover surface with buttered wax paper and chill until cold, at least 1 1/2 hours.",
          "number": 3
        }
      ],
      "name": "Butterscotch Pudding",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 880108,
      "image": "https://spoonacular.com/recipeImages/880108-556x370.jpg",
      "ingredients": [
        {
          "id": 11206,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 1,
            "unit": "bunch"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 4,
            "unit": "cloves"
          }
        },
        {
          "id": 9150,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 20035,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 11529,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Rinse the quinoa under cool running water.",
          "number": 1
        },
        {
          "instruction": "Place the rinsed quinoa in a pot with 1.75 cups of water. Put a lid on top, bring it to a boil, then reduce the heat to low and let simmer for 15 minutes. After 15 minutes, turn off the heat. Allow the quinoa to cool before making the salad or else the heat will wilt the parsley and vegetables. To cool it faster, spread it out on a baking sheet and place in the refrigerator for 30 minutes.While the quinoa is cooling, prepare the rest of the salad.",
          "number": 2
        },
        {
          "instruction": "Cut the tomato and cucumber into a small dice. Rinse the parsley well to remove sand and grit, then chop well.",
          "number": 3
        },
        {
          "instruction": "Add the cucumber, tomato, and parsley to a bowl.To make the dressing, squeeze the juice from the lemon into a bowl (about  cup). Mince the garlic and add to the lemon juice along with the olive oil and salt.Once the quinoa is cooled, combine it with the chopped vegetables and the lemon dressing. Stir well and then serve!",
          "number": 4
        }
      ],
      "name": "quinoa tabbouleh",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 602311,
      "image": "https://spoonacular.com/recipeImages/602311-556x370.jpg",
      "ingredients": [
        {
          "id": 14242,
          "quantity": {
            "amount": 0.6666666666666666,
            "unit": "cup"
          }
        },
        {
          "id": 14130,
          "quantity": {
            "amount": 0.6666666666666666,
            "unit": "cup"
          }
        },
        {
          "id": 19177,
          "quantity": {
            "amount": 2,
            "unit": "envelopes"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          }
        },
        {
          "id": 93645,
          "quantity": {
            "amount": 30,
            "unit": "servings"
          }
        },
        {
          "id": 14051,
          "quantity": {
            "amount": 0.6666666666666666,
            "unit": "cup"
          }
        },
        {
          "id": 1054,
          "quantity": {
            "amount": 30,
            "unit": "servings"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Lightly spray the mold with non-stick spray and wipe excess off with a paper towel. Don’t overdo it or the residue will affect the taste of the jello.",
          "number": 1
        },
        {
          "instruction": "Pour the soda, juice, and cream into a medium saucepan and sprinkle the gelatin on top. Allow the gelatin to soak for 2-3 minutes, then begin to heat on low, stirring constantly until gelatin is fully dissolved (about 5 minutes).",
          "number": 2
        },
        {
          "instruction": "Remove saucepan from heat and add vodka and food coloring.",
          "number": 3
        },
        {
          "instruction": "Pour into molds and chill for several hours, or until set.",
          "number": 4
        },
        {
          "instruction": "Remove from mold, top with whipped cream, and enjoy responsibly!*The original recipe suggests 2-3 envelopes, depending on how long your jello shots will be left out (more gelatin for more time). I opted for 3 because we were traveling an hour to get to the party, but I found them to be a little too firm , so I suggest you stick with 2 and plan accordingly for the best results!",
          "number": 5
        }
      ],
      "name": "Birthday Cake Jello Shots",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 670408,
      "image": "https://spoonacular.com/recipeImages/670408-556x370.jpg",
      "ingredients": [
        {
          "id": 93828,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 11266,
          "quantity": {
            "amount": 16,
            "unit": "ounces"
          }
        },
        {
          "id": 1017,
          "quantity": {
            "amount": 4,
            "unit": "ounces"
          }
        },
        {
          "id": 1019,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1022027,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1082047,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1082047,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1032009,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10011457,
          "quantity": {
            "amount": 8,
            "unit": "ounces"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 350 degrees F. First, remove the mushroom stems by pushing each one toward you, then away from you. It will pop right out. (Save them to add to another recipe.) Swish and rub the mushroom tops in a large bowl of cold water to get them clean. Then, lay them open side down on a kitchen towel to dry.While the mushrooms dry, mix together the cream cheese, spinach, artichoke hearts, parmesan, garlic powder, 1/2 tsp. kosher salt, and red pepper flakes.In a small bowl, stir together olive oil, 1/4 tsp. salt, and Italian seasoning. Use a basting brush or your fingers to lightly rub the outside of the mushrooms with the oil mixture.",
          "number": 1
        },
        {
          "instruction": "Place the mushrooms open side up on a baking sheet. Use a small disher or spoon to place a heaping scoop of dip mixture into each mushroom, pressing it down to make sure it fills the opening. Press a small amount of feta cheese on top of each stuffed mushroom.",
          "number": 2
        },
        {
          "instruction": "Bake in preheated oven for 20-25 minutes until filling is hot and bubbly and feta is starting to brown. Mushrooms will drain some brown liquid during cooking, so drain on paper towels before serving if you don't want that liquid on your serving plate. These taste just as good even after they have cooled down!",
          "number": 3
        }
      ],
      "name": "Artichoke Spinach Dip Stuffed Mushrooms",
      "tags": [
        "condiment",
        "dip",
        "spread"
      ]
    },
    {
      "id": 325208,
      "image": "https://spoonacular.com/recipeImages/325208-556x370.jpeg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2044,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 7036,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 1082047,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10111549,
          "quantity": {
            "amount": 26,
            "unit": "ounce"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1038,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        },
        {
          "id": 11304,
          "quantity": {
            "amount": 4,
            "unit": "ounces"
          }
        },
        {
          "id": 11677,
          "quantity": {
            "amount": 2,
            "unit": "small"
          }
        },
        {
          "id": 11020420,
          "quantity": {
            "amount": 12,
            "unit": ""
          }
        },
        {
          "id": 1001026,
          "quantity": {
            "amount": 8,
            "unit": "ounces"
          }
        },
        {
          "id": 93630,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 14106,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Watch how to make this recipe.",
          "number": 1
        },
        {
          "instruction": "Place an oven rack in the center of the oven. Preheat the oven to 350 degrees F. Spray a 9-by-13-by-2-inch glass baking dish with vegetable oil cooking spray. Set aside.",
          "number": 2
        },
        {
          "instruction": "For the fonduta sauce: In a medium heavy-bottomed saucepan, bring the milk and cream to a simmer over medium heat. Reduce the heat to low.",
          "number": 3
        },
        {
          "instruction": "Add the Pecorino Romano and whisk until the cheese is melted and the sauce is smooth.",
          "number": 4
        },
        {
          "instruction": "Remove the pan from the heat and stir in the basil. Set aside.",
          "number": 5
        },
        {
          "instruction": "In a large skillet, heat 2 tablespoons of olive oil over medium-high heat.",
          "number": 6
        },
        {
          "instruction": "Add the sausage, shallots, garlic, 1/4 teaspoon salt, and 1/4 teaspoon pepper. Cook until the sausage is cooked through and the vegetables have softened, 8 to 10 minutes. Using a wooden spoon, break the sausage into 1/2-inch pieces. Increase the heat to high.",
          "number": 7
        },
        {
          "instruction": "Add the wine and scrape up the brown bits that cling to the bottom of the pan with a wooden spoon. Cook until the wine has evaporated, about 2 minutes.",
          "number": 8
        },
        {
          "instruction": "Remove the pan from the heat and set aside to cool slightly.",
          "number": 9
        },
        {
          "instruction": "Add the peas, ricotta, and 1 cup of the fonduta sauce. Season with remaining 1/2 teaspoon kosher salt and 1/4 teaspoon pepper.",
          "number": 10
        },
        {
          "instruction": "Bring a large pot of salted water to a boil over high heat.",
          "number": 11
        },
        {
          "instruction": "Add the pasta and cook until just tender, 7 to 8 minutes.",
          "number": 12
        },
        {
          "instruction": "Drain and set aside.",
          "number": 13
        },
        {
          "instruction": "Spread half of the marinara sauce over the bottom of the prepared baking dish. Using a small spoon, fill the manicotti shells with the sausage filling and arrange in a single layer in the baking dish.",
          "number": 14
        },
        {
          "instruction": "Pour the remaining marinara sauce on top of the filled shells. Spoon the remaining fonduta sauce on top and sprinkle with the mozzarella.",
          "number": 15
        },
        {
          "instruction": "Drizzle with olive oil and bake until bubbly and golden brown, 30 to 35 minutes.",
          "number": 16
        }
      ],
      "name": "Baked Manicotti with Sausage and Peas",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 542778,
      "image": "https://spoonacular.com/recipeImages/542778-556x370.jpg",
      "ingredients": [
        {
          "id": 1123,
          "quantity": {
            "amount": 2,
            "unit": "medium size"
          }
        },
        {
          "id": 11463,
          "quantity": {
            "amount": 10,
            "unit": "ounces"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 3,
            "unit": ""
          }
        },
        {
          "id": 93651,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 93828,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1011256,
          "quantity": {
            "amount": 6,
            "unit": "ounces"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1025,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 20035,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 5,
            "unit": "servings"
          }
        },
        {
          "id": 11677,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat the oven to 375°F then prepare a large casserole dish (I used a 1 quart dish) by greasing with Earth Balance, butter or non-stick cooking spray.Warm the olive oil over medium heat in a sauté pan and cook the shallot and garlic for a few minutes, until fragrant.Using a strainer and a paper towel, press the excess water out from the defrosted spinach then add it to the pan.",
          "number": 1
        },
        {
          "instruction": "Add the chopped artichoke hearts (I discarded any tough parts) and a pinch of salt & pepper to the pan and cook for five minutes.Meanwhile, combine the eggs, yogurt and cheese in a large bowl and whisk together until well-combined.",
          "number": 2
        },
        {
          "instruction": "Remove the spinach artichoke mixture from the heat and allow to cool for a few minutes before adding to the bowl with the eggs and cheese.Lastly, add the cooked quinoa and stir until everything is mixed together well.",
          "number": 3
        },
        {
          "instruction": "Place the mixture into the casserole dish, smoothing the top with the back of a spoon. Sprinkle a few tablespoons of cheese on top and cook for 30-35 minutes, until top is light golden brown.",
          "number": 4
        },
        {
          "instruction": "Serve warm and enjoy!",
          "number": 5
        }
      ],
      "name": "Spinach Artichoke Quinoa Casserole",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 698701,
      "image": "https://spoonacular.com/recipeImages/698701-556x370.jpg",
      "ingredients": [
        {
          "id": 10014623,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 10014623,
          "quantity": {
            "amount": 6,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1124,
          "quantity": {
            "amount": 4,
            "unit": "large"
          }
        },
        {
          "id": 9302,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 6,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "To prepare berry layer: Preheat oven to 375F. Coat six 8-ounce souffl cups with cooking spray.",
          "number": 1
        },
        {
          "instruction": "Add 1 teaspoon sugar to each cup and swirl to coat the inside. Distribute raspberries in the bottom of the cups and sprinkle each with 1 teaspoon crme de cassis (or eau-de-vie, juice or nectar).To prepare souffls: Stir raspberries in a saucepan over low heat until they are juicy (for fresh) or thawed (for frozen).",
          "number": 2
        },
        {
          "instruction": "Transfer to a fine sieve set over a bowl. With a spoon, press the berries through the sieve, being careful to extract all the pulp. Discard the seeds.Return the puree to the saucepan. Bring to a simmer and stir over medium heat until very thick and reduced to 1/4 cup, about 10 minutes. (Reduce the heat as the mixture thickens.) Stir in 1 tablespoon crme de cassis (or eau-de-vie, juice or nectar) and set aside to cool slightly.Beat egg whites and salt in a mixing bowl with an electric mixer on high speed until soft peaks form. Continuing to beat, gradually add sugar and beat until stiff peaks form. With a rubber spatula, fold about a fourth of the beaten whites into the reserved raspberry puree to lighten its texture, then pour the mixture over the remaining whites. Gently fold the puree and whites together until evenly blended. Spoon the souffl mixture into the cups, spreading to the edges of the cups.Set the cups on a baking sheet and bake for 10 minutes, or until lightly browned on the top. Dust with confectioners sugar and serve immediately.",
          "number": 3
        }
      ],
      "name": "Double Raspberry Soufflés",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 515021,
      "image": "https://spoonacular.com/recipeImages/515021-556x370.jpg",
      "ingredients": [
        {
          "id": 9040,
          "quantity": {
            "amount": 4,
            "unit": ""
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 1.25,
            "unit": "sticks"
          }
        },
        {
          "id": 9354,
          "quantity": {
            "amount": 1,
            "unit": "large can"
          }
        },
        {
          "id": 9070,
          "quantity": {
            "amount": 15,
            "unit": "servings"
          }
        },
        {
          "id": 14181,
          "quantity": {
            "amount": 15,
            "unit": "servings"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 10018617,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 12135,
          "quantity": {
            "amount": 15,
            "unit": "servings"
          }
        },
        {
          "id": 19336,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Grease a 9×13 pan.",
          "number": 1
        },
        {
          "instruction": "Mix together graham cracker crust and 1¼ sticks of butter. Press out in pan.In mixer, mix together powdered sugar, 2 sticks of butter, vanilla, and eggs.",
          "number": 2
        },
        {
          "instruction": "Pour on top of graham cracker crust.",
          "number": 3
        },
        {
          "instruction": "Spread out crushed pineapple on top of sugar mixture, then add sliced bananas. I added cherries next for fun.In mixer, add heavy cream and mix on medium high until soft peak. When almost completed, add ½ cup sugar.",
          "number": 4
        },
        {
          "instruction": "Spread whipped cream over top of bananas. Refrigerate for at least 2 hours, (I waited 1 hours and it was fine.)Enjoy!",
          "number": 5
        }
      ],
      "name": "A Cake To Warm Any Heart – Banana Split Cake",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 999044,
      "image": "https://spoonacular.com/recipeImages/999044-556x370.jpg",
      "ingredients": [
        {
          "id": 9037,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 16057,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 2045,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1256,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 9152,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 11291,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Working in a couple of batches, roughly chop the chickpeas and place in a bowl.",
          "number": 1
        },
        {
          "instruction": "Add the minced herbs and scallions to the chickpeas and give a quick toss.",
          "number": 2
        },
        {
          "instruction": "In a separate bowl, whisk together the mayo, lemon juice, and olive oil.",
          "number": 3
        },
        {
          "instruction": "Cut the avocado in half, remove the pit, and cut each half into  cubes (see note).",
          "number": 4
        },
        {
          "instruction": "Place in the bowl and pour the mayo mixture over the chickpeas and avocado. Toss until well combine. Taste and add salt/pepper to your preferred taste.",
          "number": 5
        },
        {
          "instruction": "Serve on a sandwich or with crackers.",
          "number": 6
        }
      ],
      "name": "Avocado Chickpea Salad",
      "tags": [
        "salad"
      ]
    },
    {
      "id": 798070,
      "image": "https://spoonacular.com/recipeImages/798070-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 9236,
          "quantity": {
            "amount": 20,
            "unit": "ounces"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 19095,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 1054,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Melt butter and brush some of the butter around the slow cooker.Using a stand mixer, combine flour, 1-cup sugar, baking powder, and salt. Then, add milk and remaining melted cooled butter, mixing just until dry ingredients are moistened.",
          "number": 1
        },
        {
          "instruction": "Pour the batter in the slow cooker and place the frozen peaches on top.Cook on high for 3 hours with lid on top. Once the cobbler is done, divide and serve cobbler warm with ice cream and whipped cream on top.",
          "number": 2
        }
      ],
      "name": "Slow Cooker Peach Cobbler",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 574317,
      "image": "https://spoonacular.com/recipeImages/574317-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 2.5,
            "unit": "cups"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "T"
          }
        },
        {
          "id": 10862,
          "quantity": {
            "amount": 3,
            "unit": "strips"
          }
        },
        {
          "id": 5114,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1019,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 2,
            "unit": "t"
          }
        },
        {
          "id": 11333,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 1026,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 10011282,
          "quantity": {
            "amount": 0.5,
            "unit": "medium"
          }
        },
        {
          "id": 10211529,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "t"
          }
        },
        {
          "id": 11424,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 1,
            "unit": "t"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1011009,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, add 1 cup warm water, 1 pack rapid or quick yeast, 1 t sugar 1/2 t salt and 1 T olive oil.",
          "number": 1
        },
        {
          "instruction": "Mix well.",
          "number": 2
        },
        {
          "instruction": "Add 2 1/2 cups flour and mix.",
          "number": 3
        },
        {
          "instruction": "Add  a little more flour if too sticky but you are making a light dough not a heavy brick.",
          "number": 4
        },
        {
          "instruction": "Cover and let rise until double in size. About 30-40 minutes.",
          "number": 5
        },
        {
          "instruction": "While dough is rising, prep any toppings.",
          "number": 6
        },
        {
          "instruction": "Preheat oven 375 convection.",
          "number": 7
        },
        {
          "instruction": "Spread the dough on a well oiled large pizza pan or cookie sheet. Melt 2 T butter in a microwave for 15-20 seconds.",
          "number": 8
        },
        {
          "instruction": "Mix 2 t garlic powder in the butter and spread thinly over the dough.",
          "number": 9
        },
        {
          "instruction": "Top with cheeses and other toppings of choice.",
          "number": 10
        },
        {
          "instruction": "Bake in oven for 20 to 25 minutes.",
          "number": 11
        }
      ],
      "name": "4 Cheese White Pizza",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 673337,
      "image": "https://spoonacular.com/recipeImages/673337-556x370.jpg",
      "ingredients": [
        {
          "id": 98998,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "tablespoon"
          }
        },
        {
          "id": 8030,
          "quantity": {
            "amount": 6.5,
            "unit": "oz"
          }
        },
        {
          "id": 19116,
          "quantity": {
            "amount": 9,
            "unit": "oz"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 19336,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Pour mixture into prepared pan, using your hands press to flatten. Set aside for 1-2 hours to set.In a separate bowl, combine powdered sugar with milk and stir to combine. Using a spoon, drizzle glaze on top of cereal bars and dust with colored sugar or sprinkles.",
          "number": 1
        }
      ],
      "name": "Cereal Marshmallow Bars",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 764184,
      "image": "https://spoonacular.com/recipeImages/764184-556x370.jpg",
      "ingredients": [
        {
          "id": 1123,
          "quantity": {
            "amount": 6,
            "unit": "large"
          }
        },
        {
          "id": 6150,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 16158,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2028,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2046,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "To hard-boil the eggs, place the raw eggs at the bottom of a large pot.",
          "number": 1
        },
        {
          "instruction": "Pour water in the pot until the water is 1-2 inches over the top of the eggs.",
          "number": 2
        },
        {
          "instruction": "Place the pot on the stove top uncovered and turn the burner to high heat. Bring the water in the pot to a boil. When the water comes to a full boil, cover the pot with a lid and turn off the heat to the burner. Leave the pot on the burner, covered, for 12 minutes.While the eggs sit in the covered pot, fill a mixing bowl  way with ice water. When the time is up on the eggs, use a slotted spoon to remove them from the pot and transfer them to the bowl of ice water to stop them from cooking. Leave them in the bowl of ice water for a few minutes until fully cold.Peel the eggs under cold running water (Ive found its much easier). Slice the eggs in half lengthwise and removethe yolks into a mixing bowl. Use a fork to mash the yolks as much as you can. I usually add a little splash of water to the mashed egg yolks and mash again.",
          "number": 3
        },
        {
          "instruction": "Add the black pepper, hummus, hot sauce and mustard and stir together until well combined and mostly smooth. Spoon or pipe this filling back into the hollows of the egg whites. Sprinkle paprika over the tops of the eggs and serve.",
          "number": 4
        }
      ],
      "name": "Hummus Deviled Eggs",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 206402,
      "image": "https://spoonacular.com/recipeImages/206402-556x370.jpg",
      "ingredients": [
        {
          "id": 1017,
          "quantity": {
            "amount": 16,
            "unit": "ounces"
          }
        },
        {
          "id": 1214,
          "quantity": {
            "amount": 12,
            "unit": "ounces"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 6.8,
            "unit": "ounces"
          }
        },
        {
          "id": 9214,
          "quantity": {
            "amount": 12,
            "unit": "ounces"
          }
        },
        {
          "id": 9216,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 9216,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Whisk together evaporated milk, pudding mix, and zest in a bowl for 2 minutes or until mixture is thickened.",
          "number": 1
        },
        {
          "instruction": "Beat cream cheese and vanilla at medium speed with an electric mixer until fluffy.",
          "number": 2
        },
        {
          "instruction": "Add orange juice concentrate, beating until smooth; add evaporated milk mixture, and beat until blended.",
          "number": 3
        },
        {
          "instruction": "Pour into crust. Cover and chill 8 hours or until firm.",
          "number": 4
        },
        {
          "instruction": "Combine cream and confectioner's sugar in a bowl and whip with a whisk until it holds soft peaks. Dollop or pipe each slice with whipped cream, and garnish with candied zest or candy if desired.",
          "number": 5
        }
      ],
      "name": "Creamsicle Pie",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 446577,
      "image": "https://spoonacular.com/recipeImages/446577-556x370.jpg",
      "ingredients": [
        {
          "id": 10123,
          "quantity": {
            "amount": 6,
            "unit": "slices"
          }
        },
        {
          "id": 11052,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Place bacon in a large, deep skillet. Cook over medium high heat until the fat begins to render. Stir in onions and garlic; let cook for 1 minute. Stir in beans and water.",
          "number": 1
        },
        {
          "instruction": "Let the beans cook until the water has evaporated and the beans are tender. If the beans are not tender once the water has evaporated, add a small amount more water and let them cook until tender. Season with salt and pepper (to taste) and serve.",
          "number": 2
        }
      ],
      "name": "Smothered Green Beans",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 576906,
      "image": "https://spoonacular.com/recipeImages/576906-556x370.jpg",
      "ingredients": [
        {
          "id": 11959,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1004,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 2,
            "unit": "servings"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 9252,
          "quantity": {
            "amount": 0.5,
            "unit": ""
          }
        },
        {
          "id": 9252,
          "quantity": {
            "amount": 1,
            "unit": "tablespoons"
          }
        },
        {
          "id": 43408,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11677,
          "quantity": {
            "amount": 1,
            "unit": "medium"
          }
        },
        {
          "id": 2049,
          "quantity": {
            "amount": 2,
            "unit": "sprigs"
          }
        },
        {
          "id": 12155,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a medium bowl add the pear juice and vinegar. While whisking, slowly stream in the olive oil. Scrape the leaves off of two sprigs of thyme and add in the black pepper.",
          "number": 1
        },
        {
          "instruction": "Whisk to combine",
          "number": 2
        },
        {
          "instruction": "Assemble romaine leaves and top with sliced pear, shallot, toasted walnuts, blue cheese and season with sea salt to taste.",
          "number": 3
        },
        {
          "instruction": "Drizzle with desired amount of the pear vinaigrette and enjoy!",
          "number": 4
        }
      ],
      "name": "Pear & Walnut Salad with a Pear Vinaigrette",
      "tags": [
        "salad"
      ]
    },
    {
      "id": 504218,
      "image": "https://spoonacular.com/recipeImages/504218-556x370.jpg",
      "ingredients": [
        {
          "id": 10011693,
          "quantity": {
            "amount": 2,
            "unit": "cans"
          }
        },
        {
          "id": 11124,
          "quantity": {
            "amount": 4,
            "unit": ""
          }
        },
        {
          "id": 2012,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 1002014,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 11913,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        },
        {
          "id": 11333,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 11477,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Chop all the veggies.",
          "number": 1
        },
        {
          "instruction": "Saute the onion and garlic in a large skillet.",
          "number": 2
        },
        {
          "instruction": "Add in the carrots and saute for a few minutes, covering to cook for about 5 minutes.",
          "number": 3
        },
        {
          "instruction": "Add in the other veggies and seasonings and let it cook until the veggies are tender.",
          "number": 4
        },
        {
          "instruction": "Serve hot over cornbread with shredded cheese and sour cream.",
          "number": 5
        }
      ],
      "name": "Mexican Vegetables on Cornbread",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 445196,
      "image": "https://spoonacular.com/recipeImages/445196-556x370.jpg",
      "ingredients": [
        {
          "id": 6150,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 10220445,
          "quantity": {
            "amount": 2,
            "unit": "servings"
          }
        },
        {
          "id": 2003,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11333,
          "quantity": {
            "amount": 1,
            "unit": "medium"
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "medium"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 15152,
          "quantity": {
            "amount": 0.75,
            "unit": "pound"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a nonstick skillet coated with cooking spray, saute onion and green pepper for 3-4 minutes or until crisp-tender.",
          "number": 1
        },
        {
          "instruction": "Combine the barbecue sauce, honey, basil, garlic powder and pepper; pour over vegetables. Bring to a boil over medium-high heat, stirring constantly.",
          "number": 2
        },
        {
          "instruction": "Add shrimp; cook and stir for 3-5 minutes or until shrimp turn pink.",
          "number": 3
        },
        {
          "instruction": "Serve with rice.",
          "number": 4
        }
      ],
      "name": "Barbecue Shrimp Stir-Fry",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 759534,
      "image": "https://spoonacular.com/recipeImages/759534-556x370.jpg",
      "ingredients": [
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 16018,
          "quantity": {
            "amount": 15,
            "unit": "oz"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 1,
            "unit": "Tbs"
          }
        },
        {
          "id": 99223,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 11165,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 10218364,
          "quantity": {
            "amount": 4,
            "unit": "8-inch"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 1002014,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 9160,
          "quantity": {
            "amount": 2,
            "unit": "Tbs"
          }
        },
        {
          "id": 10011109,
          "quantity": {
            "amount": 8,
            "unit": "oz"
          }
        },
        {
          "id": 10611282,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 450°F.",
          "number": 1
        },
        {
          "instruction": "Heat oil in saucepan over medium-high heat.",
          "number": 2
        },
        {
          "instruction": "Add onion, and cook 5 minutes, or until translucent.",
          "number": 3
        },
        {
          "instruction": "Add garlic and cumin, and cook 1 minute more.",
          "number": 4
        },
        {
          "instruction": "Place onion mixture in blender with beans, chipotle chile, brown sugar, and 3 Tbs. water. Blend until smooth. Season with salt and pepper.",
          "number": 5
        },
        {
          "instruction": "Place 2 tortillas each on 2 baking sheets.",
          "number": 6
        },
        {
          "instruction": "Spread bean mixture on tortillas, and bake 5 to 7 minutes, or until edges become golden.",
          "number": 7
        },
        {
          "instruction": "Toss slaw in bowl with cilantro and lime juice. Season with salt and pepper. Top each clayuda with slaw, and cut into triangles.",
          "number": 8
        }
      ],
      "name": "Clayudas",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 588893,
      "image": "https://spoonacular.com/recipeImages/588893-556x370.jpg",
      "ingredients": [
        {
          "id": 11457,
          "quantity": {
            "amount": 2,
            "unit": "handfuls"
          }
        },
        {
          "id": 11268,
          "quantity": {
            "amount": 0.5,
            "unit": "oz"
          }
        },
        {
          "id": 10020005,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "large cloves"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 5,
            "unit": "cups"
          }
        },
        {
          "id": 10511282,
          "quantity": {
            "amount": 0.5,
            "unit": "medium"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a medium sized pot combine the farro with the 5 cups of water and 2 teaspoons salt. Bring to a boil, then lower to a simmer and cook for about 25 minutes for semi-pearled farro and 50 minutes for whole farro. The farro is done when the grains are tender and all the water has been absorbed. Set aside.While the farro is cooking, combine the shiitake mushrooms with 1 cup of boiling water.",
          "number": 1
        },
        {
          "instruction": "Let sit for 15 minutes or however long the package instructions say is needed to reconstitute the mushrooms. When done, remove the mushrooms from the water and chop, reserving the liquid.About 2o minutes before the farro is done warm the olive oil in a large skillet. Cook the onion, stirring frequently, for about 5 minutes or until translucent and beginning to get some color.",
          "number": 2
        },
        {
          "instruction": "Add the garlic and crushed red pepper flakes (if using), cook 1 minute longer, until fragrant.",
          "number": 3
        },
        {
          "instruction": "Add the chopped mushrooms, mushroom broth and a few big handfuls of baby spinach. Cook, stirring frequently, until the spinach has wilted and most of the liquid has evaporated. Season with salt and pepper to taste.Stir in the farro, mixing with a large spoon to combine well.",
          "number": 4
        },
        {
          "instruction": "Serve topped with shredded Parmesan cheese.",
          "number": 5
        }
      ],
      "name": "Farro with Shiitake Mushrooms and Baby Spinach",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 615581,
      "image": "https://spoonacular.com/recipeImages/615581-556x370.jpg",
      "ingredients": [
        {
          "id": 2069,
          "quantity": {
            "amount": 0.5,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11250,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11156,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11165,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 4025,
          "quantity": {
            "amount": 5,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11119,
          "quantity": {
            "amount": 1,
            "unit": "head"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 15152,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 11112,
          "quantity": {
            "amount": 0.25,
            "unit": "head"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 98962,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a bowl, whisk together the mayo, chili sauce and sriracha, then set it aside until ready to use.Toss the shrimp with the cornstarch until evenly coated.",
          "number": 1
        },
        {
          "instruction": "Heat the canola oil in a large skillet over high heat.",
          "number": 2
        },
        {
          "instruction": "Add the shrimp and cook until it just turns pink and opaque, about 3 minutes.",
          "number": 3
        },
        {
          "instruction": "Transfer the shrimp to a large bowl and toss with the mayo mixture.In a separate bowl, add the cabbage and lettuce. Toss with the olive oil, vinegar and honey until well coated. Toss the cilantro in. To serve the shrimp, mix with the slaw and garnish the entire thing with chives. Enjoy!",
          "number": 4
        }
      ],
      "name": "Bang Bang Shrimp with Napa Cabbage Slaw",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 764810,
      "image": "https://spoonacular.com/recipeImages/764810-556x370.jpg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2003,
          "quantity": {
            "amount": 1.5,
            "unit": "teaspoons"
          }
        },
        {
          "id": 2042,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 4,
            "unit": ""
          }
        },
        {
          "id": 1002020,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10023572,
          "quantity": {
            "amount": 2.75,
            "unit": "pounds"
          }
        },
        {
          "id": 2027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1.5,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat the oven to 350F.Spray baking sheets with cooking spray or spread a thin layer of olive oil over them.",
          "number": 1
        },
        {
          "instruction": "Mix all of the ingredients together very well -- you'll need to use your hands.",
          "number": 2
        },
        {
          "instruction": "Roll into balls the size of a golf ball, molding them firmly together without packing them.",
          "number": 3
        },
        {
          "instruction": "Place the balls on baking sheets.",
          "number": 4
        },
        {
          "instruction": "Bake for 30 to 40 minutes, or until the center registers 160F on a meat thermometer.",
          "number": 5
        },
        {
          "instruction": "Remove from oven and use as needed.",
          "number": 6
        }
      ],
      "name": "Homemade Italian Meatballs",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 799732,
      "image": "https://spoonacular.com/recipeImages/799732-556x370.jpg",
      "ingredients": [
        {
          "id": 10011250,
          "quantity": {
            "amount": 4,
            "unit": ""
          }
        },
        {
          "id": 11143,
          "quantity": {
            "amount": 2,
            "unit": "rib"
          }
        },
        {
          "id": 5064,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 2015,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "id": 9160,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1009159,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "id": 4641,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 98991,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10011282,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 9316,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large bowl, mix the first six ingredients. Stir in  chicken, celery and onion. Refrigerate, covered, at least 1 hour.",
          "number": 1
        },
        {
          "instruction": "To serve, stir strawberries into chicken mixture.",
          "number": 2
        },
        {
          "instruction": "Serve over lettuce.",
          "number": 3
        }
      ],
      "name": "Curried Strawberry Chicken Salad",
      "tags": [
        "salad"
      ]
    },
    {
      "id": 621213,
      "image": "https://spoonacular.com/recipeImages/621213-556x370.jpg",
      "ingredients": [
        {
          "id": 10123,
          "quantity": {
            "amount": 14,
            "unit": "slices"
          }
        },
        {
          "id": 11090,
          "quantity": {
            "amount": 4,
            "unit": "oz"
          }
        },
        {
          "id": 1017,
          "quantity": {
            "amount": 3,
            "unit": "oz"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "tsp"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 0.5,
            "unit": "small"
          }
        },
        {
          "id": 2026,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 10011821,
          "quantity": {
            "amount": 0.5,
            "unit": ""
          }
        },
        {
          "id": 10218,
          "quantity": {
            "amount": 16,
            "unit": "oz"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 10011457,
          "quantity": {
            "amount": 2,
            "unit": "oz"
          }
        },
        {
          "id": 11529,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Saute onion in 1 tbsp. Olive Oil for a few minutes until soft.",
          "number": 1
        },
        {
          "instruction": "Add garlic and cook for 45-60 seconds, then add spinach. Put all the spices in there except for 1/4 tsp. of the liquid smoke, thyme, and rosemary.",
          "number": 2
        },
        {
          "instruction": "Let wilt and then add cream cheese. Set aside.Preheat oven to 350F.Lay pork tenderloin on cutting board and cover with saran wrap, then pound with meat hammer until flat - cut the uneven sides so it goes square. Season with salt and pepper, then 1/4 tsp. liquid smoke.Make a bacon weave the same size as the pork tenderloin square.",
          "number": 3
        },
        {
          "instruction": "Spread spinach and cream cheese all over the pork tenderloin, then lay tenderloin on top of bacon. Slice the pieces of bacon that poke out.",
          "number": 4
        },
        {
          "instruction": "Roll it up. Season with salt and pepper and the remaining 1/4 tsp. of thyme and rosemary.",
          "number": 5
        },
        {
          "instruction": "Add toothpicks where the bacon ends are so that it doesn't fall apart.",
          "number": 6
        },
        {
          "instruction": "Bake for 75 minutes or until thermometer reads 140F.",
          "number": 7
        },
        {
          "instruction": "Saute broccoli, peppers, and tomatoes in the remaining fat in the bottom of the pan of the pork tenderloin while it rests.",
          "number": 8
        }
      ],
      "name": "Bacon Wrapped Stuffed Pork Tenderloin",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 611858,
      "image": "https://spoonacular.com/recipeImages/611858-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19157,
          "quantity": {
            "amount": 16,
            "unit": ""
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 350F. Line a 8x8-inch baking pan with foil and spray with non-stick cooking spray.In a medium bowl, whisk together the flour, baking powder, baking soda, and salt.In the bowl of a stand mixer fitted with the paddle attachment or in a large bowl with an electric mixer, combine the melted butter and brown sugar.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla, mixing until well combined. Gradually add in dry ingredients and mix until just combined. Stir in chocolate chips.",
          "number": 2
        },
        {
          "instruction": "Spread half the dough into the prepared pan.",
          "number": 3
        },
        {
          "instruction": "Place the Rolos evenly onto the cookie dough. Using a small cookie scoop, evenly distribute the rest of the cookie dough on top of the Rolos. There is need to spread evenly over the Rolos, this will happen naturally during the baking process.",
          "number": 4
        },
        {
          "instruction": "Bake in the preheated oven until a toothpick inserted in the center comes out clean, about 20 to 25 minutes.",
          "number": 5
        },
        {
          "instruction": "Remove pan to wire rack and cool completely.If desired, drizzle with melted chocolate or caramel before serving.",
          "number": 6
        }
      ],
      "name": "Rolo Cookie Bars",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 991136,
      "image": "https://spoonacular.com/recipeImages/991136-556x370.jpg",
      "ingredients": [
        {
          "id": 1001,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 98871,
          "quantity": {
            "amount": 12,
            "unit": ""
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 6168,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1055062,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Place chicken in a 3-qt. slow cooker. Toss with 2 tablespoons hot sauce and pepper; cook, covered, on low until tender, 3-4 hours.",
          "number": 1
        },
        {
          "instruction": "Remove chicken; discard cooking juices. In a small saucepan, combine butter, honey and remaining hot sauce; cook and stir over medium heat until blended. Shred chicken with two forks; stir into sauce and heat through.",
          "number": 2
        },
        {
          "instruction": "Serve on rolls with optional ingredients as desired. Freeze option: Freeze cooled chicken mixture in freezer containers. To use, partially thaw in refrigerator overnight. Microwave, covered, on high in a microwave-safe dish until heated through, stirring occasionally and adding a little water or broth if necessary.",
          "number": 3
        }
      ],
      "name": "Buffalo Chicken Sliders",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 583738,
      "image": "https://spoonacular.com/recipeImages/583738-556x370.jpg",
      "ingredients": [
        {
          "id": 18372,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1.75,
            "unit": "cups"
          }
        },
        {
          "id": 16098,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 10019151,
          "quantity": {
            "amount": 8,
            "unit": "oz"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 350°F. Line two baking sheets with parchment paper.",
          "number": 1
        },
        {
          "instruction": "Combine the flour, baking soda and salt in a medium bowl. Set aside.In the bowl of a stand mixer, beat the butter, peanut butter and sugars, until light and fluffy.",
          "number": 2
        },
        {
          "instruction": "Add in the egg and vanilla.Gradually add in the flour mixture on low speed. Stir until dough forms. Then stir in Reese's Pieces by hand.Using a cookie dough scoop or your hands, form balls of dough with 1 heaping tablespoon of dough. Gently flatten cookie dough (to form a disk shape) and place on prepared baking sheets.",
          "number": 3
        },
        {
          "instruction": "Bake for 9 minutes and remove from oven.",
          "number": 4
        },
        {
          "instruction": "Let cool for 5 minutes before transferring cookies to a wire rack to cool completely.Note: Cookies will not spread much at all and will look like they are not done baking. But I promise they are! Once they finish cooling, the cookie and chocolate will become firm and you will have a magically soft and crumbly cookie!",
          "number": 5
        }
      ],
      "name": "Reese's Pieces Peanut Butter Cookies",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 601216,
      "image": "https://spoonacular.com/recipeImages/601216-556x370.jpg",
      "ingredients": [
        {
          "id": 1041009,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10018413,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 2044,
          "quantity": {
            "amount": 3,
            "unit": "leaves"
          }
        },
        {
          "id": 10111529,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11477,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Saute the zucchini in the olive oil on high heat. Season generously with salt and pepper. Stir and leave alone for a little while, so you get a little bit of texture from the browning on the zucchini.While you’re sauteing, toast the flatbread in the oven at 400 degrees.When the zucchini is soft and just slightly browned, remove from the heat. Take the flatbread out of the oven and spread the zucchini on the flatbread.Top with the fresh tomatoes, cheese, and fresh basil.",
          "number": 1
        },
        {
          "instruction": "Cut, serve, and enjoy!",
          "number": 2
        }
      ],
      "name": "Farmer’s Market Flatbread Pizza",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 226562,
      "image": "https://spoonacular.com/recipeImages/226562-556x370.jpg",
      "ingredients": [
        {
          "id": 9019,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 18079,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 16069,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11124,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 2009,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 9079,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 11165,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 3,
            "unit": ""
          }
        },
        {
          "id": 1002014,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2042,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11935,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 12151,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 11821,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 6615,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Wash the lentils and place into a pot along with the vegetable broth. Bring to a boil, then reduce heat to medium-low and simmer, for about 40 minutes.",
          "number": 1
        },
        {
          "instruction": "Add more broth or water if necessary",
          "number": 2
        },
        {
          "instruction": "Meanwhile, warm the oil in a pan.",
          "number": 3
        },
        {
          "instruction": "Add the onions and cook for about 4 minutes or until soft.",
          "number": 4
        },
        {
          "instruction": "Add the carrots, bell pepper and garlic. Cook for about 3 minutes more. Set aside.When the lentils are ready mash them slightly with a potato masher or a fork.Preheat the oven to 350º F.In a large bowl, mix the onion mixture, mashed lentils, apple sauce, cranberries, pistachios, bread crumbs, cilantro, chili powder, cumin, thyme, salt and pepper.Line a loaf pan with parchment paper.",
          "number": 5
        },
        {
          "instruction": "Transfer the mixture to the loaf pan and press mixture into the pan with a spoon.",
          "number": 6
        },
        {
          "instruction": "Mix the glaze ingredients in a small bowl and spread evenly over the top.",
          "number": 7
        },
        {
          "instruction": "Bake for about 45 minutes.",
          "number": 8
        },
        {
          "instruction": "Transfer the pan to a wire rack and let the loaf cool a bit. Run a table knife around the edge of the pan and turn the loaf out onto a serving plate.",
          "number": 9
        }
      ],
      "name": "Vegan Lentil Loaf",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 605132,
      "image": "https://spoonacular.com/recipeImages/605132-556x370.jpg",
      "ingredients": [
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 1125,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a heavy saucepan, stir together the milk and 1/4 cup of sugar. Bring to a boil over medium heat.",
          "number": 1
        },
        {
          "instruction": "In a medium bowl, whisk together the egg yolks and egg. Stir together the remaining sugar and cornstarch; then stir them into the egg until smooth. When the milk comes to a boil, drizzle it into the bowl in a thin stream while mixing so that you do not cook the eggs. Return the mixture to the saucepan, and slowly bring to a boil, stirring constantly so the eggs don' t curdle or scorch on the bottom.",
          "number": 2
        },
        {
          "instruction": "When the mixture comes to a boil and thickens, remove from the heat. Stir in the butter and vanilla, mixing until the butter is completely blended in.",
          "number": 3
        },
        {
          "instruction": "Pour into a heat-proof container and place a piece of plastic wrap directly on the surface to prevent a skin from forming. Refrigerate until chilled before using.",
          "number": 4
        }
      ],
      "name": "Pastry Cream",
      "tags": [
        "side dish"
      ]
    }
  ]
/* harmony default export */ __webpack_exports__["default"] = (recipeData);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apiCalls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/RecipeRepository */ "./src/classes/RecipeRepository.js");
/* harmony import */ var _classes_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Recipe */ "./src/classes/Recipe.js");
/* harmony import */ var _data_recipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/recipes */ "./src/data/recipes.js");
/* harmony import */ var _data_ingredients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/ingredients */ "./src/data/ingredients.js");







//Query Selectors
const allRecipesButton = document.querySelector('#allRecipesButton');
const recipeCardSection = document.querySelector('#recipeCardSection');
const landingPageView = document.querySelector('#landingPageView');
const recipeDisplayView = document.querySelector('#recipeDisplayView');

//Global variables
let recipeRepository;

//Funtions
const addHidden = elements => {
  elements.forEach(item => {
    item.classList.add("hidden");
  })
}

const removeHidden = elements => {
  elements.forEach(item => {
    item.classList.remove("hidden");
  })
}

const instantiateRecipeRepository = () => {
  recipeRepository = new _classes_RecipeRepository__WEBPACK_IMPORTED_MODULE_2__["default"](_data_recipes__WEBPACK_IMPORTED_MODULE_4__["default"], _data_ingredients__WEBPACK_IMPORTED_MODULE_5__["default"]);
}



const displayAllRecipes = () => {
  addHidden([landingPageView]);
  removeHidden([recipeDisplayView]);
  recipeCardSection.innerHTML = ``;
  recipeRepository.recipes.forEach(recipe => {
    recipeCardSection.innerHTML += `
    <section class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <button>${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button>🥘</button>
        <button>❤️</button>
      </div>
    </section>`;
  })

}

console.log('Hello world');

//Event Listeners
window.addEventListener('load', instantiateRecipeRepository);
allRecipesButton.addEventListener('click', displayAllRecipes)


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9SZWNpcGVSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2luZ3JlZGllbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSwyQkFBMkIsRUFBRSxVQUFVLGtCQUFrQixFQUFFLFVBQVUsdUZBQXVGLGlDQUFpQywyQkFBMkIsY0FBYyxFQUFFLFVBQVUsa0JBQWtCLDJCQUEyQixrQkFBa0IsRUFBRSxTQUFTLGtCQUFrQix3QkFBd0IsK0NBQStDLGdCQUFnQixnQkFBZ0IsRUFBRSw0QkFBNEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxpQkFBaUIsRUFBRSxrQkFBa0IsZUFBZSxnQkFBZ0IsRUFBRSxxQkFBcUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxpQkFBaUIsRUFBRSxtQkFBbUIsZUFBZSxnQkFBZ0IsRUFBRSxvQkFBb0IsZUFBZSxnQkFBZ0IsRUFBRSwyQkFBMkIsa0JBQWtCLGtDQUFrQyxlQUFlLGdCQUFnQixFQUFFLGtCQUFrQixlQUFlLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSx3QkFBd0Isa0JBQWtCLDJCQUEyQix5QkFBeUIsMEJBQTBCLGdCQUFnQixlQUFlLEVBQUUseUJBQXlCLGdCQUFnQixlQUFlLHVCQUF1QixpQkFBaUIsK0NBQStDLEVBQUUsMEJBQTBCLDBCQUEwQixnQkFBZ0IsRUFBRSwwQkFBMEIsMkJBQTJCLGdCQUFnQixnQkFBZ0IsRUFBRSxrQkFBa0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsNkJBQTZCLGVBQWUsZ0JBQWdCLEVBQUUsc0JBQXNCLGdCQUFnQixnQkFBZ0IsRUFBRSwwQkFBMEIsa0JBQWtCLG1DQUFtQyxnQkFBZ0IsRUFBRSwwQkFBMEIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGlCQUFpQixFQUFFLG9CQUFvQixrQkFBa0IsbUNBQW1DLHVGQUF1RixpQ0FBaUMsMkJBQTJCLGdCQUFnQixFQUFFLHFCQUFxQixrQkFBa0Isa0NBQWtDLEVBQUUsc0NBQXNDLGdCQUFnQixlQUFlLCtDQUErQyxFQUFFLDRCQUE0QixrQkFBa0IsMEJBQTBCLDJCQUEyQixFQUFFLGtCQUFrQixrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsRUFBRSxrQkFBa0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLGVBQWUsK0NBQStDLEVBQUUsd0JBQXdCLHVCQUF1QixFQUFFLHVCQUF1QixrQkFBa0Isd0JBQXdCLDJCQUEyQixvQkFBb0IsZUFBZSxnQkFBZ0IsRUFBRSx5QkFBeUIsNkJBQTZCLEVBQUUsYUFBYSxrQkFBa0IsRUFBRSxTQUFTLGlGQUFpRixrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksaUJBQWlCLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLFdBQVcsZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssZ0JBQWdCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxpQkFBaUIsS0FBSyxZQUFZLFdBQVcsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGlCQUFpQixLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixLQUFLLFVBQVUsa0JBQWtCLE9BQU8sVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLHNDQUFzQywyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQixHQUFHLFVBQVUsdUZBQXVGLGlDQUFpQywyQkFBMkIsY0FBYyxHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixrQkFBa0IsR0FBRyxTQUFTLGtCQUFrQix3QkFBd0IsOENBQThDLGdCQUFnQixnQkFBZ0IsR0FBRyw0QkFBNEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxpQkFBaUIsR0FBRyxrQkFBa0IsZUFBZSxnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxpQkFBaUIsR0FBRyxtQkFBbUIsZUFBZSxnQkFBZ0IsR0FBRyxvQkFBb0IsZUFBZSxnQkFBZ0IsR0FBRywyQkFBMkIsa0JBQWtCLGtDQUFrQyxlQUFlLGdCQUFnQixHQUFHLGtCQUFrQixlQUFlLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQix5QkFBeUIsMEJBQTBCLGdCQUFnQixlQUFlLEdBQUcseUJBQXlCLGdCQUFnQixlQUFlLHVCQUF1QixpQkFBaUIsOENBQThDLEdBQUcsMEJBQTBCLHdCQUF3QixjQUFjLEdBQUcsMEJBQTBCLDJCQUEyQixnQkFBZ0IsZ0JBQWdCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLDZCQUE2QixlQUFlLGdCQUFnQixHQUFHLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLEdBQUcsMEJBQTBCLGtCQUFrQixtQ0FBbUMsZ0JBQWdCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixpQkFBaUIsR0FBRyxvQkFBb0Isa0JBQWtCLG1DQUFtQyx1RkFBdUYsaUNBQWlDLDJCQUEyQixnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLGtDQUFrQyxHQUFHLHNDQUFzQyxnQkFBZ0IsZUFBZSw4Q0FBOEMsR0FBRyw0QkFBNEIsa0JBQWtCLDBCQUEwQiwyQkFBMkIsR0FBRyxrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixlQUFlLDhDQUE4QyxHQUFHLHdCQUF3Qix1QkFBdUIsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3QiwyQkFBMkIsb0JBQW9CLGVBQWUsZ0JBQWdCLEdBQUcseUJBQXlCLDZCQUE2QixHQUFHLGFBQWEsa0JBQWtCLEdBQUcscUJBQXFCO0FBQzlqUDtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMvQmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQTs7O0FBR0EseUM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaER0QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFZSwrRUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7OztBQzVDaEM7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw4RUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDanRDL0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxzSUFBc0k7QUFDdEk7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHlFQUF5RSxvSUFBb0k7QUFDN007QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnUkFBZ1I7QUFDaFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtDQUErQyw2REFBNkQ7QUFDNUc7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDZGQUE2RjtBQUM3RjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0lBQXNJO0FBQ3RJO0FBQ0EsU0FBUztBQUNUO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxSkFBcUo7QUFDcko7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDZGQUE2RjtBQUM3RjtBQUNBLFNBQVM7QUFDVDtBQUNBLHFDQUFxQztBQUNyQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkdBQTZHO0FBQzdHO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUNBQXlDLDRGQUE0Riw0RUFBNEU7QUFDak47QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUlBQW1JO0FBQ25JO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3Z3SzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0I7QUFDWTtBQUN3QjtBQUNwQjtBQUNFO0FBQ1M7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSx5QkFBeUIsaUVBQWdCLENBQUMscURBQVUsRUFBRSx5REFBZTtBQUNyRTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGFBQWE7QUFDdkQsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQ3pGLFlBQWdJOztBQUVoSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlULDJMQUFPLGFBQWEsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTk1NzM2LTU1NngzNzAuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbjogMDsgfVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjYpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1JTsgfVxcblxcbi5ob21lLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNSU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaG9tZS1idXR0b24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlOyB9XFxuXFxuLm5hdi1zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA1MCU7IH1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA1MCU7IH1cXG5cXG4ubmF2LWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogNTAlOyB9XFxuXFxuLm5hdi1idXR0b25zIHtcXG4gIHdpZHRoOiAyNSU7IH1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmxhbmRpbmctcGFnZS12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG4uYWxsLXJlY2lwZXMtYnV0dG9uIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC42KTsgfVxcblxcbi5yZWNpcGUtZGlzcGxheS12aWV3IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGhlaWdodDogODUlOyB9XFxuXFxuLnJlY2lwZS1jYXJkLXNlY3Rpb24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcGluaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA5MCU7IH1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiA1MCU7IH1cXG5cXG4ucmVjaXBlLWNhcmQtaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA0MCU7IH1cXG5cXG4ucmVjaXBlLWNhcmQtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucmVjaXBlLWRldGFpbHMtdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5yZWNpcGUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81OTU3MzYtNTU2eDM3MC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucmVjaXBlLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLnJlY2lwZS1kZXRhaWxzLFxcbi5yZWNpcGUtaGVhZGVyIHtcXG4gIGhlaWdodDogNDAlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC42KTsgfVxcblxcbi5yZWNpcGUtZGV0YWlsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG5cXG4uZmlsdGVyLXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5maWx0ZXItZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNik7IH1cXG5cXG4uZmlsdGVyLXZpZXctdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmZpbHRlci12aWV3LXRhZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNzUlOyB9XFxuXFxuLmZpbHRlci12aWV3LWJ1dHRvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdGQUFnRjtFQUNoRiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQ0FBeUM7RUFDekMsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUF5QyxFQUFBOztBQUczQztFQUNBLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR1g7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0ZBQWdGO0VBQ2hGLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QixFQUFBOztBQUcvQjs7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLDBDQUF5QyxFQUFBOztBQUczQztFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDViwwQ0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLGFBQWEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81OTU3MzYtNTU2eDM3MC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAuNik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUlO1xcbn1cXG5cXG4uaG9tZS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaG9tZS1idXR0b24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4ubmF2LXNlYXJjaC1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbi5uYXYtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbi5uYXYtYnV0dG9ucyB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGFuZGluZy1wYWdlLXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmFsbC1yZWNpcGVzLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIC42KTtcXG59XFxuXFxuLnJlY2lwZS1kaXNwbGF5LXZpZXcge1xcbmJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG5oZWlnaHQ6IDg1JTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkLXNlY3Rpb24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcGluaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXG4gIHdpZHRoOiAxNSU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkLWltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNDAlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGUtZGV0YWlscy12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTk1NzM2LTU1NngzNzAuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucmVjaXBlLWRldGFpbHMsXFxuLnJlY2lwZS1oZWFkZXIge1xcbiAgaGVpZ2h0OiA0MCU7XFxuICB3aWR0aDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAuNik7XFxufVxcblxcbi5yZWNpcGUtZGV0YWlsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5maWx0ZXItdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZmlsdGVyLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3NSU7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAuNik7XFxufVxcblxcbi5maWx0ZXItdmlldy10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5maWx0ZXItdmlldy10YWdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDc1JTtcXG59XFxuXFxuLmZpbHRlci12aWV3LWJ1dHRvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gWW91ciBmZXRjaCByZXF1ZXN0cyB3aWxsIGxpdmUgaGVyZSFcblxuXG5jb25zb2xlLmxvZygnSSB3aWxsIGJlIGEgZmV0Y2ggcmVxdWVzdCEnKSIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLmltYWdlID0gcmVjaXBlLmltYWdlO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHM7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuYWxsSW5ncmVkaWVudHMgPSBpbmdyZWRpZW50c0RhdGE7XG4gICAgdGhpcy50b3RhbFJlY2lwZUNvc3QgPSAwO1xuICB9XG4gIGdldEluZ3JlZGllbnROYW1lcygpIHtcbiAgICBsZXQgaW5ncmVkaWVudE5hbWVzID0gW107XG4gICAgY29uc3QgaW5ncmVkaWVudElkcyA9IHRoaXMuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KSA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudC5pZFxuICAgIH0pXG4gICAgaW5ncmVkaWVudElkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgY29uc3QgaW5ncmVkaWVudE5hbWUgPSB0aGlzLmFsbEluZ3JlZGllbnRzLmZpbmQoKGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQuaWQgPT09IGlkXG4gICAgICB9KS5uYW1lXG4gICAgICBpbmdyZWRpZW50TmFtZXMucHVzaChpbmdyZWRpZW50TmFtZSk7XG4gICAgfSlcbiAgICByZXR1cm4gaW5ncmVkaWVudE5hbWVzO1xuICB9XG4gIGdldFJlY2lwZUNvc3QoKSB7XG4gICAgdGhpcy5pbmdyZWRpZW50cy5tYXAoKGluZ3JlZGllbnQpID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50LmlkXG4gICAgfSkuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCBpbmdyZWRpZW50Q29zdCA9IHRoaXMuYWxsSW5ncmVkaWVudHMuZmluZCgoaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmcuaWQgPT09IGlkO1xuICAgICAgfSkuZXN0aW1hdGVkQ29zdEluQ2VudHNcbiAgICAgIGNvbnN0IGluZ3JlZGllbnRBbW91bnQgPSB0aGlzLmluZ3JlZGllbnRzLmZpbmQoKGluZykgPT4ge1xuICAgICAgICByZXR1cm4gaW5nLmlkID09PSBpZDtcbiAgICAgIH0pLnF1YW50aXR5LmFtb3VudFxuICAgICAgdGhpcy50b3RhbFJlY2lwZUNvc3QgKz0gKChpbmdyZWRpZW50Q29zdCAqIGluZ3JlZGllbnRBbW91bnQpIC8gMTAwKTtcbiAgICB9KVxuICAgIHJldHVybiAodGhpcy50b3RhbFJlY2lwZUNvc3QpO1xuICB9XG4gIGdldFJlY2lwZUluc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0cnVjdGlvbnM7XG4gIH1cbn1cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsImNsYXNzIFJlY2lwZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcihyZWNpcGVEYXRhLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSByZWNpcGVEYXRhO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50c0RhdGE7XG4gICAgdGhpcy5maWx0ZXJlZFJlY2lwZXMgPSBbXTtcbiAgfVxuICBnZXRSZWNpcGVCeVRhZyh0YWcpIHtcbiAgICB0aGlzLnJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICBpZihyZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRSZWNpcGVzLnB1c2gocmVjaXBlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGdldFJlY2lwZUJ5TmFtZShzZWFyY2hQaHJhc2UpIHtcbiAgICB0aGlzLnJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICBpZihyZWNpcGUubmFtZS5pbmNsdWRlcyhzZWFyY2hQaHJhc2UpKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRSZWNpcGVzLnB1c2gocmVjaXBlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGdldFJlY2lwZUJ5SW5ncmVkaWVudHMoc2VhcmNoUGhyYXNlKSB7XG4gICAgY29uc3QgZmlsdGVyZWRJbmdyZWRpZW50cyA9IHRoaXMuaW5ncmVkaWVudHMuZmlsdGVyKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhzZWFyY2hQaHJhc2UpXG4gICAgfSk7XG4gICAgZmlsdGVyZWRJbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgY29uc3QgcmVjaXBlc1RvUHVzaCA9IHRoaXMucmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgICAgY29uc3QgcmVjaXBlSW5ncmVkaWVudCA9IHJlY2lwZS5pbmdyZWRpZW50cy5maW5kKGluZyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGluZy5pZCA9PT0gaW5ncmVkaWVudC5pZDtcbiAgICAgICAgfSlcbiAgICAgICAgaWYocmVjaXBlSW5ncmVkaWVudCkge1xuICAgICAgICAgIHJldHVybiByZWNpcGVJbmdyZWRpZW50LmlkID09PSBpbmdyZWRpZW50LmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJlY2lwZXNUb1B1c2guZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyZWRSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkUmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVSZXBvc2l0b3J5O1xuIiwiY29uc3QgaW5ncmVkaWVudHNEYXRhID0gW1xuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICBcIm5hbWVcIjogXCJ3aGVhdCBmbG91clwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTgzNzIsXG4gICAgICBcIm5hbWVcIjogXCJiaWNhcmJvbmF0ZSBvZiBzb2RhXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgXCJuYW1lXCI6IFwiZWdnc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICBcIm5hbWVcIjogXCJzdWNyb3NlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkwMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTIwNixcbiAgICAgIFwibmFtZVwiOiBcImluc3RhbnQgdmFuaWxsYSBwdWRkaW5nXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgIFwibmFtZVwiOiBcImJyb3duIHN1Z2FyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgXCJuYW1lXCI6IFwic2FsdFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyODBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMjA0NyxcbiAgICAgIFwibmFtZVwiOiBcImZpbmUgc2VhIHNhbHRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDE5OTAzLFxuICAgICAgXCJuYW1lXCI6IFwic2VtaSBzd2VldCBjaGlwc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgIFwibmFtZVwiOiBcInVuc2FsdGVkIGJ1dHRlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgIFwibmFtZVwiOiBcInZhbmlsbGFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDkwMTYsXG4gICAgICBcIm5hbWVcIjogXCJhcHBsZSBjaWRlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTAwMyxcbiAgICAgIFwibmFtZVwiOiBcImFwcGxlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDAyNyxcbiAgICAgIFwibmFtZVwiOiBcImNvcm4gc3RhcmNoXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAyMDQ2LFxuICAgICAgXCJuYW1lXCI6IFwiZGlqb24gc3R5bGUgbXVzdGFyZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICBcIm5hbWVcIjogXCJ3aG9sZSBnYXJsaWMgY2xvdmVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTIwNDYsXG4gICAgICBcIm5hbWVcIjogXCJ3aG9sZSBncmFpbiBkaWpvbiBtdXN0YXJkXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTkxMSxcbiAgICAgIFwibmFtZVwiOiBcIm1hcGxlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNjExMixcbiAgICAgIFwibmFtZVwiOiBcIm1pc29cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDEwMDYyLFxuICAgICAgXCJuYW1lXCI6IFwicG9yayBjaG9wXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgXCJuYW1lXCI6IFwicyZwXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUyNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNjEyNCxcbiAgICAgIFwibmFtZVwiOiBcInNveSBzYXVjZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxNjE2OCxcbiAgICAgIFwibmFtZVwiOiBcInNyaXJhY2hhIHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgXCJuYW1lXCI6IFwiYmxhY2sgcGVwcGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgXCJuYW1lXCI6IFwiYnV0dGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgXCJuYW1lXCI6IFwib2lsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDMxLFxuICAgICAgXCJuYW1lXCI6IFwicmVkIHBlcHBlciBwb3dkZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDUxMDAsXG4gICAgICBcIm5hbWVcIjogXCJjaGlja2VuIHdpbmdcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTkzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMDksXG4gICAgICBcIm5hbWVcIjogXCJyZWQgY2hpbGkgcG93ZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgXCJuYW1lXCI6IFwiZ2FybGljIHBvd2RlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjE2OCxcbiAgICAgIFwibmFtZVwiOiBcInRhYmFzY28gc2F1Y2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkxNzYsXG4gICAgICBcIm5hbWVcIjogXCJtYW5nb2VzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDI2LFxuICAgICAgXCJuYW1lXCI6IFwib25pb24gcG93ZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU5N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDQyMDQ3LFxuICAgICAgXCJuYW1lXCI6IFwic2Vhc29uZWQgc2FsdFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICBcIm5hbWVcIjogXCJiYWtpbmcgcG93ZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MDQwLFxuICAgICAgXCJuYW1lXCI6IFwicmlwZSBiYW5hbmFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzMxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMDExLFxuICAgICAgXCJuYW1lXCI6IFwiYnVjayB3aGVhdCBmbG91clwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIzMCxcbiAgICAgIFwibmFtZVwiOiBcImJ1dHRlcm1pbGtcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzczXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5Mjk2LFxuICAgICAgXCJuYW1lXCI6IFwicnVubnkgaG9uZXlcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE2MDk4LFxuICAgICAgXCJuYW1lXCI6IFwicGVhbnV0IGJ1dHRlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA0OCxcbiAgICAgIFwibmFtZVwiOiBcImFwcGxlIGNpZGVyIHZpbmVnYXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMDkwLFxuICAgICAgXCJuYW1lXCI6IFwiYnJvd24gcmljZSBmbG91clwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM3ODQsXG4gICAgICBcIm5hbWVcIjogXCJicm93biByaWNlIHN5cnVwXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI0LFxuICAgICAgXCJuYW1lXCI6IFwiZWdnIGFsYnVtZW5cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjI1LFxuICAgICAgXCJuYW1lXCI6IFwiZXZhcG9yYXRlZCBjYW5lIGp1aWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDExOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjIyMCxcbiAgICAgIFwibmFtZVwiOiBcImZsYXggbWVhbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMTgzNzUsXG4gICAgICBcIm5hbWVcIjogXCJpbnN0YW50IHllYXN0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTMwNCxcbiAgICAgIFwibmFtZVwiOiBcInVuc3VsZnVyZWQgbW9sYXNzZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExNDEzLFxuICAgICAgXCJuYW1lXCI6IFwiUG90YXRvIFN0YXJjaCBGbG91clwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2OTYsXG4gICAgICBcIm5hbWVcIjogXCJ0YXBpb2NhIHN0YXJjaFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM3NjAsXG4gICAgICBcIm5hbWVcIjogXCJXaG9sZSBHcmFpbiBUZWZmIEZsb3VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNDQxMixcbiAgICAgIFwibmFtZVwiOiBcImljZSB3YXRlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2MjYsXG4gICAgICBcIm5hbWVcIjogXCJ4YW50aGFuIGd1bVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkzNTAsXG4gICAgICBcIm5hbWVcIjogXCJjb3JuIHN5cnVwXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MDk5LFxuICAgICAgXCJuYW1lXCI6IFwiZnJ1aXQgY29ja3RhaWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMDYxLFxuICAgICAgXCJuYW1lXCI6IFwid2hvbGUgYWxtb25kc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMTA0LFxuICAgICAgXCJuYW1lXCI6IFwiY29jb251dFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIxMTUsXG4gICAgICBcIm5hbWVcIjogXCJjb2NvbnV0IGNyZWFtXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0MDQ3LFxuICAgICAgXCJuYW1lXCI6IFwiY29jb251dCBvaWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDE5MDcxLFxuICAgICAgXCJuYW1lXCI6IFwiZGFyayBjaG9jb2xhdGUgbW9yc2Vsc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogODIxMixcbiAgICAgIFwibmFtZVwiOiBcImdyYW5vbGEgY2VyZWFsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA4MTIxLFxuICAgICAgXCJuYW1lXCI6IFwib2F0bWVhbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIxNDIsXG4gICAgICBcIm5hbWVcIjogXCJwZWNhblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM3NDAsXG4gICAgICBcIm5hbWVcIjogXCJibGFuY2hlZCBhbG1vbmQgZmxvdXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjUsXG4gICAgICBcIm5hbWVcIjogXCJlZ2cgeW9sa3NcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMDIzLFxuICAgICAgXCJuYW1lXCI6IFwic2VzYW1lIHNlZWRzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDE1MDYyLFxuICAgICAgXCJuYW1lXCI6IFwiY2hpY2tlbiB0ZW5kZXJzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxMTEwOSxcbiAgICAgIFwibmFtZVwiOiBcInNsYXcgbWl4XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY4MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDExNjA5OCxcbiAgICAgIFwibmFtZVwiOiBcImNyZWFteSBwZWFudXQgYnV0dGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDY0LFxuICAgICAgXCJuYW1lXCI6IFwibWludFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAyMSxcbiAgICAgIFwibmFtZVwiOiBcInBvd2RlcmVkIGdpbmdlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTE2MCxcbiAgICAgIFwibmFtZVwiOiBcImp1aWNlIG9mIGxpbWVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDc3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkyNjYsXG4gICAgICBcIm5hbWVcIjogXCJwaW5lYXBwbGVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMTM1LFxuICAgICAgXCJuYW1lXCI6IFwiY2F1bGlmbG93ZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYxNzIsXG4gICAgICBcIm5hbWVcIjogXCJjaGlja2VuIHN0b2NrXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzYzMixcbiAgICAgIFwibmFtZVwiOiBcImdoZWVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzcwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMTIwLFxuICAgICAgXCJuYW1lXCI6IFwiaGF6ZWxudXRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjkwLFxuICAgICAgXCJuYW1lXCI6IFwibnV0cml0aW9uYWwgeWVhc3QgZmxha2VzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgIFwibmFtZVwiOiBcIm9uaW9uc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTAxMjMsXG4gICAgICBcIm5hbWVcIjogXCJwcm9zY3VpdHRvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTA5NixcbiAgICAgIFwibmFtZVwiOiBcInJhcGluaVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjE1MCxcbiAgICAgIFwibmFtZVwiOiBcImJhciBiIHF1ZSBzYXVjZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjE5NCxcbiAgICAgIFwibmFtZVwiOiBcImNoaWNrZW4gYnJvdGhcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjI3LFxuICAgICAgXCJuYW1lXCI6IFwibGlxdWlkIHNtb2tlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQxMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDI4LFxuICAgICAgXCJuYW1lXCI6IFwicGFwcmlrYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwNzIsXG4gICAgICBcIm5hbWVcIjogXCJwb3JrIHNob3VsZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2OTcxLFxuICAgICAgXCJuYW1lXCI6IFwid29yY2VzdGVyc2hpcmVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2MDcsXG4gICAgICBcIm5hbWVcIjogXCJhbG1vbmRtaWxrXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc4N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxODk0MixcbiAgICAgIFwibmFtZVwiOiBcImdyYWhhbSBjcmFja2VyIGNydXN0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDEyMDEwLFxuICAgICAgXCJuYW1lXCI6IFwiZ3JvdW5kIGNpbm5hbW9uXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDI1LFxuICAgICAgXCJuYW1lXCI6IFwibnV0bWVnIHBvd2RlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDMyNzQsXG4gICAgICBcIm5hbWVcIjogXCJsb3cgZmF0IGNyZWFtIGNoZWVzZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDQ4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDgxMjAsXG4gICAgICBcIm5hbWVcIjogXCJ3aG9sZSBncmFpbiByb2xsZWQgb2F0c1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTQyNCxcbiAgICAgIFwibmFtZVwiOiBcImNhbm5lZCBwdW1wa2luXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MDE2LFxuICAgICAgXCJuYW1lXCI6IFwiYXBwbGUganVpY2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzEwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE4MDQ3LFxuICAgICAgXCJuYW1lXCI6IFwicmFpc2luIGJyZWFkXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIyMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDg5MDAzLFxuICAgICAgXCJuYW1lXCI6IFwiZ3Jhbm55c21pdGggYXBwbGVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNzcsXG4gICAgICBcIm5hbWVcIjogXCJmdWxsLWZhdCBtaWxrXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI5NyxcbiAgICAgIFwibmFtZVwiOiBcImZsYXQgbGVhZiBwYXJzbGV5IGxlYXZlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMzIwMDksXG4gICAgICBcIm5hbWVcIjogXCJkcmllZCByZWQgY2hpbGlcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNTE1MixcbiAgICAgIFwibmFtZVwiOiBcImp1bWJvIHNocmltcFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyOTQsXG4gICAgICBcIm5hbWVcIjogXCJ2aWRhbGlhIG9uaW9uXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU5NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTAwNyxcbiAgICAgIFwibmFtZVwiOiBcImFydGljaG9rZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkxNTAsXG4gICAgICBcIm5hbWVcIjogXCJsZW1vblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTE1NixcbiAgICAgIFwibmFtZVwiOiBcImxlbW9uIHBlZWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE4MDY5LFxuICAgICAgXCJuYW1lXCI6IFwiZ2x1dGVuLWZyZWUgd2hpdGUgc2FuZHdpY2ggYnJlYWRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMzMsXG4gICAgICBcIm5hbWVcIjogXCJwYXJtZXNhbiBjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMjcsXG4gICAgICBcIm5hbWVcIjogXCJvcmVnYW5vXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDM0MDUzLFxuICAgICAgXCJuYW1lXCI6IFwiZXh0cmEgdmlyZ2luIG9saXZlIG9pbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwNCxcbiAgICAgIFwibmFtZVwiOiBcImJheSBsZWF2ZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzg1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MzM2LFxuICAgICAgXCJuYW1lXCI6IFwicG93ZGVyZWQgc3VnYXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMTQzLFxuICAgICAgXCJuYW1lXCI6IFwiY2VsZXJ5XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg0MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI5LFxuICAgICAgXCJuYW1lXCI6IFwiaGFyZGNvb2tlZCBlZ2dzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0NjQxLFxuICAgICAgXCJuYW1lXCI6IFwicmVkdWNlZCBmYXQgbWF5b1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMTI1NixcbiAgICAgIFwibmFtZVwiOiBcInNraW0gZ3JlZWsgeW9ndXJ0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTk0NCxcbiAgICAgIFwibmFtZVwiOiBcImhvdGRvZyByZWxpc2hcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDExMjgyLFxuICAgICAgXCJuYW1lXCI6IFwicmVkIG9uaW9uXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTM1MyxcbiAgICAgIFwibmFtZVwiOiBcImlkYWhvIHBvdGF0b1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAyMTE4MjEsXG4gICAgICBcIm5hbWVcIjogXCJiZWxsIHBlcHBlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMjAwNDgsXG4gICAgICBcIm5hbWVcIjogXCJicm93biBtaW51dGUgcmljZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2NTEsXG4gICAgICBcIm5hbWVcIjogXCJpdGFsaWFuIGNoZWVzZSBibGVuZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzkyNyxcbiAgICAgIFwibmFtZVwiOiBcInN3ZWV0IGl0YWxpYW4gdHVya2V5IHNhdXNhZ2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExNTQ5LFxuICAgICAgXCJuYW1lXCI6IFwiY2FubmVkIHRvbWF0byBzYXVjZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMjAxMjksXG4gICAgICBcIm5hbWVcIjogXCJicmVhZCBmbG91clwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgIFwibmFtZVwiOiBcImNyZWFtXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgXCJuYW1lXCI6IFwicHVyZSBvbGl2ZSBvaWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5OTEyLFxuICAgICAgXCJuYW1lXCI6IFwiYWdhdmUgc3lydXBcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwMDgwLFxuICAgICAgXCJuYW1lXCI6IFwicGFzdHJ5IGZsb3VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxOTMzNCxcbiAgICAgIFwibmFtZVwiOiBcImRhcmsgYnJvd24gc3VnYXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTAxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzODE0LFxuICAgICAgXCJuYW1lXCI6IFwibGlnaHRseSBzd2VldGVuZWQgd2hpcHBlZCBjcmVhbVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTIwNixcbiAgICAgIFwibmFtZVwiOiBcImN1Y3VtYmVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDAzNSxcbiAgICAgIFwibmFtZVwiOiBcInF1aW5vYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE1MjksXG4gICAgICBcIm5hbWVcIjogXCJoZWlybG9vbSB0b21hdG9lc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTQyNDIsXG4gICAgICBcIm5hbWVcIjogXCJjcmFuYmVycnkganVpY2UgY29ja3RhaWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE0MTMwLFxuICAgICAgXCJuYW1lXCI6IFwiY3JlYW0gc29kYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkxNzcsXG4gICAgICBcIm5hbWVcIjogXCJnZWxhdGluZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDExXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjQ1LFxuICAgICAgXCJuYW1lXCI6IFwiaGFsbG93ZWVuIHNwcmlua2xlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTQwNTEsXG4gICAgICBcIm5hbWVcIjogXCJncmV5IGdvb3NlIHZvZGthXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDU0LFxuICAgICAgXCJuYW1lXCI6IFwid2hpcHBlZCBjcmVhbVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2ODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM4MjgsXG4gICAgICBcIm5hbWVcIjogXCJtYXJpbmF0ZWQgYXJ0aWNob2tlIGhlYXJ0c1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5ODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyNjYsXG4gICAgICBcIm5hbWVcIjogXCJjcmltaW5pIG11c2hyb29tc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxNyxcbiAgICAgIFwibmFtZVwiOiBcImNyZWFtIGNoZWVzZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxOSxcbiAgICAgIFwibmFtZVwiOiBcImZldGFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDIyMDI3LFxuICAgICAgXCJuYW1lXCI6IFwibWl4ZWQgaXRhbGlhbiBoZXJic1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA4MjA0NyxcbiAgICAgIFwibmFtZVwiOiBcImtvc2hlciBzYWx0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxMTQ1NyxcbiAgICAgIFwibmFtZVwiOiBcInNwaW5hY2hcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNDQsXG4gICAgICBcIm5hbWVcIjogXCJiYXNpbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzAzNixcbiAgICAgIFwibmFtZVwiOiBcIml0YWxpYW4gc2F1c2FnZSBsaW5rc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDEwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTExNTQ5LFxuICAgICAgXCJuYW1lXCI6IFwibWFyaW5hcmEgc2F1Y2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMzgsXG4gICAgICBcIm5hbWVcIjogXCJwZWNvcmlubyByb21hbm8gY2hlZXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMzA0LFxuICAgICAgXCJuYW1lXCI6IFwicGVhc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE2NzcsXG4gICAgICBcIm5hbWVcIjogXCJzaGFsbG90c1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2OTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEwMjA0MjAsXG4gICAgICBcIm5hbWVcIjogXCJwYXN0YSBzaGVsbHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDEwMjYsXG4gICAgICBcIm5hbWVcIjogXCJzaHJlZGRlZCBtb3p6YXJlbGxhXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzYzMCxcbiAgICAgIFwibmFtZVwiOiBcInNraW0gbWlsayByaWNvdHRhIGNoZWVzZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTQxMDYsXG4gICAgICBcIm5hbWVcIjogXCJ3aGl0ZSB3aW5lXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY3NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTQ2MyxcbiAgICAgIFwibmFtZVwiOiBcImZyb3plbiBzcGluYWNoXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDI1LFxuICAgICAgXCJuYW1lXCI6IFwicGVwcGVyamFja1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTQ2MjMsXG4gICAgICBcIm5hbWVcIjogXCJibGFja2JlcnJ5IGp1aWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzAyLFxuICAgICAgXCJuYW1lXCI6IFwicmFzcGJlcnJ5XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzU0LFxuICAgICAgXCJuYW1lXCI6IFwicGluZWFwcGxlIHdpdGgganVpY2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkwNzAsXG4gICAgICBcIm5hbWVcIjogXCJzd2VldCBjaGVycmllc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTQxODEsXG4gICAgICBcIm5hbWVcIjogXCJjaG9jb2xhdGUgc3lydXBcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDE4NjE3LFxuICAgICAgXCJuYW1lXCI6IFwiZ3JhaGFtIGNyYWNrZXIgY3J1bWJzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjEzNSxcbiAgICAgIFwibmFtZVwiOiBcIm51dHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkwMzcsXG4gICAgICBcIm5hbWVcIjogXCJoYWFzIGF2b2NhZG9zXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNjA1NyxcbiAgICAgIFwibmFtZVwiOiBcImdhcmJhbnpvc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDQ1LFxuICAgICAgXCJuYW1lXCI6IFwiZGlsbHdlZWRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyNTYsXG4gICAgICBcIm5hbWVcIjogXCJncmVlayB5b2d1cnRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjMxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkxNTIsXG4gICAgICBcIm5hbWVcIjogXCJsZW1vbiBqdWljZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyOTEsXG4gICAgICBcIm5hbWVcIjogXCJzcHJpbmcgb25pb25zXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkyMzYsXG4gICAgICBcIm5hbWVcIjogXCJwZWFjaGVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTA5NSxcbiAgICAgIFwibmFtZVwiOiBcImljZWNyZWFtXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDg2MixcbiAgICAgIFwibmFtZVwiOiBcImNvb2tlZCBiYWNvbiBzdHJpcHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDUxMTQsXG4gICAgICBcIm5hbWVcIjogXCJyb2FzdGVkIGNoaWNrZW5cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzA4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMzMzLFxuICAgICAgXCJuYW1lXCI6IFwiZ3JlZW4gcGVwcGVyc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAyNixcbiAgICAgIFwibmFtZVwiOiBcImZyZXNoIG1venphcmVsbGFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjkwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjExNTI5LFxuICAgICAgXCJuYW1lXCI6IFwiaXRhbGlhbiB0b21hdG9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTEwMDksXG4gICAgICBcIm5hbWVcIjogXCJ3aGl0ZSBjaGVkZGFyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5ODk5OCxcbiAgICAgIFwibmFtZVwiOiBcImJhbHNhbWljIGdsYXplXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA4MDMwLFxuICAgICAgXCJuYW1lXCI6IFwiZnJ1aXQgbG9vcHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MTE2LFxuICAgICAgXCJuYW1lXCI6IFwibWFyc2htYWxsb3dcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE2MTU4LFxuICAgICAgXCJuYW1lXCI6IFwiaHVtbXVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDQ2LFxuICAgICAgXCJuYW1lXCI6IFwicHJlcGFyZWQgeWVsbG93IG11c3RhcmRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzAwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMTQsXG4gICAgICBcIm5hbWVcIjogXCJldmFwb3JhdGVkIG1pbGtcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTIxNCxcbiAgICAgIFwibmFtZVwiOiBcIm9yYW5nZSBqdWljZSBjb25jZW50cmF0ZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTIxNixcbiAgICAgIFwibmFtZVwiOiBcIm9yYW5nZSBwZWVsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDEyMyxcbiAgICAgIFwibmFtZVwiOiBcImJhY29uIHNsaWNlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEwNTIsXG4gICAgICBcIm5hbWVcIjogXCJzdHJpbmcgYmVhbnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExOTU5LFxuICAgICAgXCJuYW1lXCI6IFwiYmFieSBhcnVndWxhIGxlYXZlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwNCxcbiAgICAgIFwibmFtZVwiOiBcImJsdWUgY2hlZXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MjUyLFxuICAgICAgXCJuYW1lXCI6IFwicGVhclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDM0MDgsXG4gICAgICBcIm5hbWVcIjogXCJwZWFyIGp1aWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDQ5LFxuICAgICAgXCJuYW1lXCI6IFwiZnJlc2ggdGh5bWUgbGVhdmVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY4MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjE1NSxcbiAgICAgIFwibmFtZVwiOiBcIndhbG51dCBoYWx2ZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDExNjkzLFxuICAgICAgXCJuYW1lXCI6IFwiY2FubmVkIHRvbWF0b1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTExMjQsXG4gICAgICBcIm5hbWVcIjogXCJjYXJyb3RzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDEyLFxuICAgICAgXCJuYW1lXCI6IFwiY29yaWFuZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwMTQsXG4gICAgICBcIm5hbWVcIjogXCJjb21pbm9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExOTEzLFxuICAgICAgXCJuYW1lXCI6IFwiZnJvemVuIGNvcm5cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExNDc3LFxuICAgICAgXCJuYW1lXCI6IFwienVjY2hpbmkgc3F1YXNoXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDIyMDQ0NSxcbiAgICAgIFwibmFtZVwiOiBcInN0ZWFtZWQgcmljZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMDMsXG4gICAgICBcIm5hbWVcIjogXCJncm91bmQgYmFzaWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE2MDE4LFxuICAgICAgXCJuYW1lXCI6IFwiY2FubmVkIGJsYWNrIGJlYW5zXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM1NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5OTIyMyxcbiAgICAgIFwibmFtZVwiOiBcImNhbm5lZCBjaGlwb3RsZSBjaGlsaWVzIGluIGFkb2JvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTE2NSxcbiAgICAgIFwibmFtZVwiOiBcImNpbGFudHJvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDIxODM2NCxcbiAgICAgIFwibmFtZVwiOiBcImZsb3VyIHRvcnRpbGxhXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDYxMTI4MixcbiAgICAgIFwibmFtZVwiOiBcIndoaXRlIG9uaW9uc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE0NTcsXG4gICAgICBcIm5hbWVcIjogXCJiYWJ5IHNwaW5hY2ggbGVhdmVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI2OCxcbiAgICAgIFwibmFtZVwiOiBcImRyaWVkIHNoaWl0YWtlIG11c2hyb29tXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAyMDAwNSxcbiAgICAgIFwibmFtZVwiOiBcImZhcnJvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDUxMTI4MixcbiAgICAgIFwibmFtZVwiOiBcInllbGxvdyBvbmlvblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA2OSxcbiAgICAgIFwibmFtZVwiOiBcImJhbHNhbWljIHZpbmVnYXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjUwLFxuICAgICAgXCJuYW1lXCI6IFwiYm9zdG9uIGJpYmIgbGV0dHVjZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTE1NixcbiAgICAgIFwibmFtZVwiOiBcImZyZXNoIGNoaXZlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0MDI1LFxuICAgICAgXCJuYW1lXCI6IFwibWF5b25uYWlzZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTExMTksXG4gICAgICBcIm5hbWVcIjogXCJuYXBhIGNhYmJhZ2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTExMixcbiAgICAgIFwibmFtZVwiOiBcInJlZCBjYWJiYWdlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5ODk2MixcbiAgICAgIFwibmFtZVwiOiBcInN3ZWV0IGNoaWxpIHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA0MixcbiAgICAgIFwibmFtZVwiOiBcImRyaWVkIHRoeW1lXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAyMDIwLFxuICAgICAgXCJuYW1lXCI6IFwiZ3JhbnVsYXRlZCBnYXJsaWNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIzNTcyLFxuICAgICAgXCJuYW1lXCI6IFwiZ3JvdW5kIGNodWNrXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYwMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxMTI1MCxcbiAgICAgIFwibmFtZVwiOiBcImJ1dHRlcmhlYWQgbGV0dHVjZSBsZWF2ZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDUwNjQsXG4gICAgICBcIm5hbWVcIjogXCJiYWtlZCBjaGlja2VuIGJyZWFzdFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMTUsXG4gICAgICBcIm5hbWVcIjogXCJjdXJyeSBzZWFzb25pbmdcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDkxNTksXG4gICAgICBcIm5hbWVcIjogXCJsaW1lIHBlZWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk4OTkxLFxuICAgICAgXCJuYW1lXCI6IFwibWludCBjaHV0bmV5XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzE2LFxuICAgICAgXCJuYW1lXCI6IFwic3RyYXdiZXJyeVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEwOTAsXG4gICAgICBcIm5hbWVcIjogXCJicm9jY29saSBjcm93bnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDExODIxLFxuICAgICAgXCJuYW1lXCI6IFwic3dlZXQgb3JhbmdlIHBlcHBlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAyMTgsXG4gICAgICBcIm5hbWVcIjogXCJwb3JrIHRlbmRlcmxvaW5cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MTU3LFxuICAgICAgXCJuYW1lXCI6IFwibWluaSBtJm1cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk4ODcxLFxuICAgICAgXCJuYW1lXCI6IFwiaGF3YWlpYW4gc3dlZXQgcm9sbHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNTUwNjIsXG4gICAgICBcIm5hbWVcIjogXCJib25lbGVzcyBza2lubGVzcyBjaGlja2VuIGJyZWFzdHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDE5MTUxLFxuICAgICAgXCJuYW1lXCI6IFwicmVlc2UgcGllY2VzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDQxMDA5LFxuICAgICAgXCJuYW1lXCI6IFwiY2hlZXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxODQxMyxcbiAgICAgIFwibmFtZVwiOiBcImZsYXRicmVhZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMTE1MjksXG4gICAgICBcIm5hbWVcIjogXCJncmFwZSB0b21hdG9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkwMTksXG4gICAgICBcIm5hbWVcIjogXCJ1bnN3ZWV0ZW5lZCBhcHBsZSBzYXVjZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTgwNzksXG4gICAgICBcIm5hbWVcIjogXCJkcnkgYnJlYWRjcnVtYnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE2MDY5LFxuICAgICAgXCJuYW1lXCI6IFwibGVndW1lc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTA3OSxcbiAgICAgIFwibmFtZVwiOiBcImRyaWVkIGNyYW5iZXJyaWVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTkzNSxcbiAgICAgIFwibmFtZVwiOiBcImNhdHN1cFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIxNTEsXG4gICAgICBcIm5hbWVcIjogXCJwaXN0YWNoaW9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODEzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExODIxLFxuICAgICAgXCJuYW1lXCI6IFwicmVkIHN3ZWV0IHBlcHBlcnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAyN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2NjE1LFxuICAgICAgXCJuYW1lXCI6IFwidmVnZXRhYmxlIHN0b2NrXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxM1xuICAgIH1cbiAgXTtcblxuZXhwb3J0IGRlZmF1bHQgaW5ncmVkaWVudHNEYXRhO1xuIiwiY29uc3QgcmVjaXBlRGF0YSA9IFtcbiAgICB7XG4gICAgICBcImlkXCI6IDU5NTczNixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTk1NzM2LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MjA2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDI0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTk5MDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBsYXJnZSBtaXhpbmcgYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIGRyeSBpbmdyZWRpZW50cyAoZmxvdXIsIHB1ZGRpbmcgbWl4LCBzb2RhIGFuZCBzYWx0KS4gU2V0IGFzaWRlLkluIGEgbGFyZ2UgbWl4aW5nIGJvd2wgb2YgYSBzdGFuZCBtaXhlciwgY3JlYW0gYnV0dGVyIGZvciAzMCBzZWNvbmRzLiBHcmFkdWFsbHkgYWRkIGdyYW51bGF0ZWQgc3VnYXIgYW5kIGJyb3duIHN1Z2FyIGFuZCBjcmVhbSB1bnRpbCBsaWdodCBhbmQgZmx1ZmZ5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZWdnIGFuZCB2YW5pbGxhIGFuZCBtaXggdW50aWwgY29tYmluZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBkcnkgaW5ncmVkaWVudHMgYW5kIG1peCBvbiBsb3cganVzdCB1bnRpbCBpbmNvcnBvcmF0ZWQuIFN0aXIgaW4gY2hvY29sYXRlIGNoaXBzLlNjb29wIHRoZSBkb3VnaCBpbnRvIDEsNSB0YWJsZXNwb29uIHNpemUgYmFsbHMgYW5kIHBsYWNlIG9uIGEgcGxhdGUgb3Igc2hlZXQuIENvdmVyIHdpdGggc2FyYW4gd3JhcCBhbmQgY2hpbGwgYXQgbGVhc3QgMiBob3VycyBvciBvdmVybmlnaHQuV2hlbiByZWFkeSB0byBiYWtlLCBwcmVoZWF0IG92ZW4gdG8gMzUwIGRlZ3JlZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBjb29raWUgZG91Z2ggYmFsbHMgaW50byB1bmdyZWFzZWQgbXVmZmluIHBhbi4gU3ByaW5rbGUgd2l0aCBzZWEgc2FsdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBmb3IgOSB0byAxMCBtaW51dGVzLCBvciB1bnRpbCB5b3Ugc2VlIHRoZSBlZGdlcyBzdGFydCB0byBicm93bi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBwYW4gZnJvbSB0aGUgb3ZlbiBhbmQgbGV0IHNpdCBmb3IgMTAgbWludXRlcyBiZWZvcmUgcmVtb3Zpbmcgb250byBhIGNvb2xpbmcgcmFjay5Ub3Agd2l0aCBpY2UgY3JlYW0gYW5kIGEgZHJpenpsZSBvZiBjaG9jb2xhdGUgc2F1Y2UuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiTG9hZGVkIENob2NvbGF0ZSBDaGlwIFB1ZGRpbmcgQ29va2llIEN1cHNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjc4MzUzLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82NzgzNTMtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDA5MDE2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDAzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwNDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDQ2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTk5MTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MTEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTAwNjIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYxMjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZWFzb24gdGhlIHBvcmsgY2hvcHMgd2l0aCBzYWx0IGFuZCBwZXBwZXIgYW5kIGdyaWxsIG9yIHBhbiBmcnkgb3ZlciBtZWRpdW0gaGlnaCBoZWF0IHVudGlsIGNvb2tlZCwgYWJvdXQgMy01IG1pbnV0ZXMgcGVyIHNpZGUuIChJZiBncmlsbGluZywgYmFzdGUgdGhlIGNob3BzIGluIHRoZSBtYXBsZSBkaWpvbiBhcHBsZSBjaWRlciBzYXVjZSBhcyB5b3UgZ3JpbGwuKU1lYW53aGlsZSwgbWl4IHRoZSByZW1haW5pbmcgaW5ncmVkaWVudHMgZXhjZXB0IHRoZSBhcHBsZSBzbGljZXMsIGJyaW5nIHRvIGEgc2ltbWVyIGFuZCBjb29rIHVudGlsIHRoZSBzYXVjZSB0aGlja2VucywgYWJvdXQgMi01IG1pbnV0ZXMuR3JpbGwgb3Igc2F1dGUgdGhlIGFwcGxlIHNsaWNlcyB1bnRpbCBqdXN0IHRlbmRlciBidXQgc3RpbGwgY3Jpc3AuVG9zcyB0aGUgcG9yayBjaG9wcyBhbmQgYXBwbGUgc2xpY2VzIGluIHRoZSBtYXBsZSBkaWpvbiBhcHBsZSBjaWRlciBzYXVjZSBhbmQgZW5qb3khXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiTWFwbGUgRGlqb24gQXBwbGUgQ2lkZXIgR3JpbGxlZCBQb3JrIENob3BzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0MTIzMDksXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzQxMjMwOS01NTZ4MzcwLmpwZWdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDU4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDMxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA1MTAwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDYxNjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTc2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDQyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB0aGUgaG90IHNhdWNlLCBidXR0ZXIsIG1hbmdvIGhhYmFuZXJvIHNhdWNlLCBicm93biBzdWdhciwgY2hpbGkgcG93ZGVyLCBnYXJsaWMgcG93ZGVyLCBvbmlvbiBwb3dkZXIsIGJsYWNrIHBlcHBlciwgY2F5ZW5uZSBwZXBwZXIgYW5kIHNlYXNvbmluZyBzYWx0IGluIGEgYm93bC4gU3RpciB2aWdvcm91c2x5IHVudGlsIGNvbXBsZXRlbHkgY29tYmluZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiRGlydHkgU3RldmUncyBPcmlnaW5hbCBXaW5nIFNhdWNlXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNhdWNlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzQxNjAzLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83NDE2MDMtNTU2eDM3MC5qcGVnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDQwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAxMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTI5NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYwOTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2F0Y2ggaG93IHRvIG1ha2UgdGhpcyByZWNpcGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbGFyZ2UgYm93bCwgd2hpc2sgdG9nZXRoZXIgYnV0dGVybWlsaywgZWdncywgYmFraW5nIHBvd2Rlciwgc3VnYXIsIHNhbHQgYW5kIGJ1dHRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYW5vdGhlciBsYXJnZSBib3dsIG1peCB0b2dldGhlciBhbGwtcHVycG9zZSBmbG91ciBhbmQgYnVja3doZWF0IGZsb3VyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTbG93bHkgYWRkIGZsb3VyIGludG8gdGhlIHdldCBpbmdyZWRpZW50cyBtaXhpbmcgd2l0aCBhIHdoaXNrLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdW50aWwgdGhlcmUgYXJlIG5vIGx1bXBzIGFuZCB0aGUgYmF0dGVyIGlzIHNtb290aCBhbmQgdmVsdmV0eS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBsYXJnZSBjYXN0IGlyb24gc2tpbGxldCBvciBmbGF0IGdyaWxsIHBhbiBvdmVyIG1lZGl1bS1oaWdoIGhlYXQsIG1lbHQgYSB0YWJsZXNwb29uIG9mIGJ1dHRlci4gTGFkbGUgcGFuY2FrZSBiYXR0ZXIgb250byBza2lsbGV0IHRvIGRlc2lyZWQgc2l6ZS4gVXNpbmcgdGhlIGxhZGxlLCBmb3JtIHBhbmNha2UgaW50byBjaXJjdWxhciBzaGFwZS4gQ29vayBvbiBlYWNoIHNpZGUgZm9yIDIgdG8gMyBtaW51dGVzIG9yIHVudGlsIGdvbGRlbiBicm93bi4gU2V0IHBhbmNha2VzIGFzaWRlIGFuZCBrZWVwIHdhcm0uIFJlcGVhdCB3aXRoIHJlbWFpbmluZyBpbmdyZWRpZW50cy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiT25jZSBjb21wbGV0ZWQsIHNwcmVhZCBwZWFudXQgYnV0dGVyIG9uIGEgcGFuY2FrZSwgbGF5ZXIgaXQgd2l0aCBzbGljZWQgYmFuYW5hcyBhbmQgZHJpenpsZSBpdCB3aXRoIGhvbmV5LiBUb3AgdGhlIHBhbmNha2Ugd2l0aCBhbm90aGVyIHBhbmNha2UgdG8gZm9ybSBhIHNhbmR3aWNoLiBSZXBlYXQgd2l0aCByZW1haW5pbmcgcGFuY2FrZXMgYW5kIHNlcnZlIHdpdGggZXh0cmEgaG9uZXkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiRWx2aXMgUGFuY2FrZXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTYyMzM0LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NjIzMzQtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDkwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS4xMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM3ODQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2MjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMjIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTE4Mzc1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMwNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0MTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2OTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNzYwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDQxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2MjYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiR3JlYXNlIG9yIHNwcmF5IG9pbCBhIDnDlzUgaW5jaCBsb2FmIHBhbi5QcmVoZWF0IG92ZW4gdG8gMTcwIOKAkyAyMDDCsEYgKGxvd2VzdCBwb3NzaWJsZSkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB3YXJtIHdhdGVyIHdpdGggYnJvd24gcmljZSBzeXJ1cCwgbW9sYXNzZXMsIGFuZCB5ZWFzdCBpbiBhIGN1cCBsYXJnZXIgdGhhbiA4IG96LiwgYXMgaXQgbWF5IGJ1YmJsZSBvdmVyOyBzZXQgYXNpZGUgdW50aWwgZm9hbXkgb24gdGhlIHRvcCwgbm8gbW9yZSB0aGFuIDUgbWludXRlcy5JbiB0aGUgYm93bCBvZiB5b3VyIG1peGVyLCBiZWF0IHRoZSBlZ2dzIGF0IGhpZ2ggc3BlZWQgaW4gYSBsYXJnZSBtaXhpbmcgYm93bCB1bnRpbCBsYXJnZSBidWJibGVzIGZvcm0sIGFib3V0IDIwIHNlY29uZHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoaXNrIHRvZ2V0aGVyIHRoZSBkcnkgaW5ncmVkaWVudHM7IHNldCBhc2lkZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBvaWwsIHZpbmVnYXIgYW5kIHllYXN0IG1peHR1cmUgdG8gdGhlIGVnZyB3aGl0ZXMgYW5kIGJsZW5kIG9uIGxvdyBmb3IgYSBmZXcgc2Vjb25kcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGRyeSBpbmdyZWRpZW50cyBhbGwgYXQgb25jZSBhbmQgbWl4IG9uIGxvdyBzcGVlZCB1bnRpbCBhbGwgZHJ5IGluZ3JlZGllbnRzIGFyZSBtb2lzdGVuZWQuIFRoZW4gYmVhdCBvbiBoaWdoIGZvciAxIG1pbnV0ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGRvdWdoIGJhdHRlciB0byBwcmVwYXJlZCBwYW4gYW5kIGRpc3RyaWJ1dGUgYW5kIHNtb290aCB0aGUgdG9wIHVzaW5nIGEgcnViYmVyIHNwYXR1bGEuIFlvdSdsbCB3YW50IHRvIG1lZXQgYWxsIHNpZGVzIG9mIHRoZSBwYW4uIElmIHlvdSBtaXNzIHRoZSBjb3JuZXJzIHRoYXQgd2lsbCBzdGlsbCBiZSBva2F5LiBJdCB3aWxsIGZpbGwgaW4gdXBvbiByaXNpbmcuIFRvIGV2ZW4gb3V0IHRvcCwgZHJvcCBhIGZldyBkcm9wcyBvZiBmaWx0ZXJlZCB3YXRlciBvbiB0b3AsIGFuZCBzcHJlYWQgZXZlbmx5IHdpdGggYSBydWJiZXIgc3BhdHVsYSwgb3IgZGlwIHNwYXR1bGEgaW4gd2F0ZXIgc2V2ZXJhbCB0aW1lcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIGJyZWFkIHBhbiBpbiB0aGUgb3Zlbi4gVHVybiBvdmVuIG9mZi4gQWxsb3cgdGhlIGRvdWdoIHRvIHJpc2UgdW50aWwgdGhlIGNlbnRlciBpcyBhYm91dCAxLzLigJ0gb3ZlciB0aGUgdG9wIG9mIHRoZSBwYW4sIGFib3V0IDIyIG1pbnV0ZXMuIEl0IHdpbGwgcmlzZSBtb3JlIHdoaWxlIHRoZSBvdmVuIGlzIGhlYXRpbmcgYW5kIGR1cmluZyBiYWtpbmcuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBwYW4gZnJvbSBvdmVuIGFuZCBwcmVoZWF0IG92ZW4gdG8gMzc1wrBGLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgcGFuIG9uIHRoZSBjZW50ZXIgb2YgdGhlIHJhY2sgaW4gdGhlIGNlbnRlciBvZiB0aGUgb3ZlbiBhbmQgYmFrZSBmb3IgYWJvdXQgNDUgbWludXRlcyBvciBtb3JlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIGxvYWYgZnJvbSB0aGUgb3ZlbiBhbmQgaW1tZWRpYXRlbHkgcmVtb3ZlIGl0IGZyb20gdGhlIHBhbiAoY2FyZWZ1bCBpdCB3aWxsIGJlIGhvdCksIGFuZCBzZXQgdGhlIGxvYWYgb24gYSBjb29saW5nIHJhY2sgdG8gY29vbC4gSWYgeW91IGRvIG5vdCByZW1vdmUgaXQgcmlnaHQgYXdheSB0aGUgc3RlYW0gd2lsbCBtYWtlIHRoZSBjcnVzdCBzb2dneS5TbGljZSBvZmYgdGhlIHR3byBlbmRzIHRvIGFsbG93IHRoZSBzdGVhbSB0byBlc2NhcGUsIG9yIGl0IHdpbGwgYmVnaW4gdG8gc2luayBpbiBvbiB0aGUgc2lkZXMgYW5kIGJvdHRvbS5PbmNlIGNvb2xlZCwgaXQgd2lsbCBzaHJpbmsgYSBsaXR0bGUgYml0LiBTbGljZSBpdCB3aXRoIGFuIGVsZWN0cmljIHNsaWNlciwgZWxlY3RyaWMga25pZmUgb3Igc2VycmF0ZWQga25pZmUuIFlvdSdsbCBnZXQgYWJvdXQgMTMtMTYsIGRlcGVuZGluZyB1cG9uIGhvdyB0aGljayB5b3Ugc2xpY2UgaXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTBcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIk1vY2sgVWRp4oCZcyBHbHV0ZW4gRnJlZSBXaG9sZSBHcmFpbiBCcmVhZFwiLFxuICAgICAgXCJ0YWdzXCI6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDUwNzkyMSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTA3OTIxLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwOTksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDQxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvIG1ha2UgdGhlIEN1cGNha2VzOiBQcmVoZWF0IG92ZW4gdG8gMzUwIGRlZ3JlZXMuIExpbmUgMTIgY3VwY2FrZSB0aW5zIHdpdGggcGFwZXIgaG9sZGVycy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgdG9nZXRoZXIgZHJ5IEZydWl0IENvY2t0YWlsIEN1cGNha2VzIGluZ3JlZGllbnRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgaW4gd2V0IEZydWl0IENvY2t0YWlsIEN1cGNha2VzIGluZ3JlZGllbnRzIGFuZCBzdGlyIHdpdGggYSBydWJiZXIgc3BhdHVsYSB1bnRpbCB0aG9yb3VnaGx5IGNvbWJpbmVkLiBGaWxsIGN1cGNha2UgdGlucyBldmVubHksIGFuZCBiYWtlIGZvciAyMCBtaW51dGVzIG9yIHVudGlsIHRoaW4ga25pZmUgaW5zZXJ0ZWQgaW4gY2VudGVyIGNvbWVzIG91dCBjbGVhbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJBbWJyb3NpYSBDdXBjYWtlc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3MjExNDYsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzcyMTE0Ni01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMDYxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMTA0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMTE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE5MDcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA4MjEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIkhhbmRmdWxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTk5MTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogODEyMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMTQyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgdGhlIG92ZW4gdG8gMzI1IGRlZ3JlZXMgRi5Db2Fyc2VseSBjaG9wIHRoZSBhbG1vbmRzIGFuZCBwZWNhbnMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvbWJpbmUgdGhlIG9hdHMsIGFsbW9uZHMsIHBlY2FucywgYW5kIHNhbHQgaW4gYSBib3dsLiBUb3NzIHRvIGNvbWJpbmUuSW4gYSBtZWRpdW0tc2l6ZWQgYm93bCwgY29tYmluZSB0aGUgY29jb251dCBvaWwgKG1lYXN1cmUgZXhhY3RseSB3aGVuIGl0J3MgbWVsdGVkIGFuZCBub3QgaW4gdGhlIGhhcmRlbmVkIHN0YXRlKSwgYW5kIDEvMiBjdXAgY2hvY29sYXRlIGNoaXBzLk1pY3Jvd2F2ZSBpbiBidXJzdHMgb2YgMTUgc2Vjb25kcyBzdGlycmluZyBpbiBiZXR3ZWVuIGVhY2ggYnVyc3QgZm9yIDE1IHNlY29uZHMgdW50aWwgY29tcGxldGVseSBtZWx0ZWQuU3RpciBpbiB0aGUgYnJvd24gc3VnYXIgKG1lYXN1cmVkIGxpZ2h0bHkgcGFja2VkKSwgaG9uZXkgb3IgbWFwbGUgc3lydXAsIGFuZCB2YW5pbGxhIGV4dHJhY3QuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgdGhlIGNob2NvbGF0ZSB3ZXQgbWl4dHVyZSBpbnRvIHRoZSBvYXQgYW5kIG51dCBtaXh0dXJlIGFuZCBzdGlyIHVudGlsIHdlbGwgY29tYmluZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCB0aGUgZ3Jhbm9sYSBldmVubHkgb250byBhIHBhcmNobWVudCBsaW5lZCBiYWtpbmcgc2hlZXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDIwLTMwIG1pbnV0ZXMgKGRlcGVuZGluZyBvbiB0aGUgaGVhdCBvZiB5b3VyIG92ZW4pIG1ha2luZyBzdXJlIHRvIGZsaXAgYW5kIHN0aXIgdGhlIGdyYW5vbGEgYXJvdW5kIGV2ZXJ5IDYtOCBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgYW5kIGFsbG93IHRoZSBncmFub2xhIHRvIGhhcmRlbiBhbmQgc2V0IHVwLiAoSXQgbWF5IGJlIHNvZnQgYW5kIG5vdCB2ZXJ5IFxcXCJncmFub2xhLWxpa2VcXFwiLCBidXQgaXQgaGFyZGVucyBhcyBpdCBkcmllcyBvdXQgc28gYmUgY2FyZWZ1bCB0byBub3Qgb3Zlci1jb29rIGl0KS4gTWluZSBnZW5lcmFsbHkgdGFrZXMgYWJvdXQgMjEgbWludXRlcyB0byBiZSBmdWxseSBiYWtlZC5BbGxvdyB0aGUgZ3Jhbm9sYSB0byBzaXQgYXQgcm9vbSB0ZW1wZXJhdHVyZSBmb3IgYSBmZXcgaG91cnMgdG8gaGFyZGVuIGFuZCBzZXQgdXAuT25jZSB0aGUgZ3Jhbm9sYSBpcyBoYXJkZW5lZCwgc3RpciBpbiB0aGUgcmVtYWluaW5nIDEvMiBjdXAgY2hvY29sYXRlIGNoaXBzIGFuZCB0aGUgdG9hc3RlZCBmbGFrZWQgY29jb251dC5UbyBtYWtlIGEgeW9ndXJ0IGJvd2w6IGZpbGwgYSBib3dsIHdpdGggdGhlIGNvY29udXQgY3JlYW0geW9ndXJ0LCBhZGQgYSBzd2lybCBvZiBudXQgYnV0dGVyLCBhZGQgc29tZSBmcnVpdCBzdWNoIGFzIGEgYmFuYW5hLCBhZGQgdGhlIGdyYW5vbGEsIGFuZCBmaW5pc2ggd2l0aCBjaGlhIHNlZWRzLiBFbmpveSBpbW1lZGlhdGVseS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJDcmVhbXkgQ29jb251dCBZb2d1cnQgQm93bCB3aXRoIENob2NvbGF0ZSBHcmFub2xhIChWaWRlbylcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTQxMjg4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NDEyODgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE2MCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM3NDAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0MCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjAyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInN0aWNrXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IHRoZSBidXR0ZXIgaW50byBzbWFsbCBjdWJlcyBhbmQga2VlcCB0aGVtIHJlZnJpZ2VyYXRlZCB1bnRpbCByZWFkeSB0byB1c2UgKEkgY3V0IG9uIHBhcmNobWVudCBwYXBlciBhbmQgd3JhcCB1cCB0aGUgYnV0dGVyIGZvciBlYXN5IHRyYW5zZmVyLikuSW4gdGhlIGZvb2QgcHJvY2Vzc29yLCBjb21iaW5lIHRoZSBmbG91ciwgYWxtb25kIG1lYWwsIHN1Z2FyLCBhbmQgc2FsdC4gSWYgeW91IGRvbuKAmXQgaGF2ZSBhIGZvb2QgcHJvY2Vzc29yLCB5b3UgY2FuIHNpbXBseSB1c2UgYSBib3dsIHRvIG1peCBhbGwgdGhlIGluZ3JlZGllbnRzLklmIHlvdSB3YW50IHlvdXIgc2VzYW1lIHNlZWRzIHRvIGJlIGZpbmUgdGV4dHVyZSwgYWRkIHRoZW0gbm93LiBJZiB5b3UgcHJlZmVyIHRvIGtlZXAgdGhlIG9yaWdpbmFsIHNoYXBlIG9mIHNlc2FtZSBzZWVkcywgYWRkIHRoZW0gd2l0aCBlZ2cgeW9sayBsYXRlciBvbi5UYWtlIG91dCB0aGUgYnV0dGVyIGZyb20gdGhlIHJlZnJpZ2VyYXRvciBhbmQgbWl4IHRvZ2V0aGVyLiBJZiB5b3UgdXNlIGEgcmVndWxhciBib3dsIHRvIG1peCwgdXNlIGEgZG91Z2gvcGFzdHJ5IGJsZW5kZXIgdG8gY29tYmluZSB0aGUgYnV0dGVyIGludG8gdGhlIGRyeSBpbmdyZWRpZW50cy5MYXN0bHkgYWRkIGVnZyB5b2xrLklmIHRoZSBmb29kIHByb2Nlc3NvciBpcyBzbWFsbCAobGlrZSBtaW5lKSBhbmQgaXQgZG9lc27igJl0IGxvb2sgbGlrZSBpdOKAmXMgbWl4ZWQgY29tcGxldGVseSwgdGFrZSBpdCBvdXQgYW5kIG1peCB3ZWxsIHdpdGggYSBzaWxpY29uZSBzcGF0dWxhLkZvcm0gdGhlIGRvdWdoIGludG8gYSBiYWxsIGFuZCBjdXQgaW4gaGFsZi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUm9sbCBpdCB0byBhIGxvZyBhcHByb3hpbWF0ZWx5IDLigJ0gYWNyb3NzLiBGb3IgbWUgaXTigJlzIGVhc2llciB0byB3b3JrIHdoZW4gdGhlIGRvdWdoIGlzIHdyYXBwZWQgaW4gcGxhc3RpYyB3cmFwLiBXaGlsZSByb2xsaW5nLCB1bndyYXAgc29tZSBwYXJ0cyBvZiBwbGFzdGljIHdyYXAgdGhlbiByb2xsIGFnYWluLiBGb3JtIGEgbmljZSBzaGFwZS4gSSB3YXNuJ3QgcGF5aW5nIGF0dGVudGlvbiBzbyBteSBsb2cgaXMgZmxhdCBvbiBvbmUgc2lkZSAoc2VlIHN0ZXAgMTEpIVdyYXAgdGhlIGxvZ3MgdGlnaHRseSBpbiBwbGFzdGljIHdyYXAgYW5kIHJlZnJpZ2VyYXRlIHVudGlsIGZpcm0sIGFib3V0IDEgaG91ci5QcmVoZWF0IHRoZSBvdmVuIHRvIDM1MMKwIEYgKDE3NcKwIEMpLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIGRvdWdoIGZyb20gcGxhc3RpYyB3cmFwIGFuZCBjdXQgaW50byBkaXNjcyBhYm91dCDCvCBpbmNoIHRoaWNrIChpZiB5b3UgcHJlZmVyIHRoaWNrZXIgY29va2llcywgY3V0IGludG8gZGlzY3MgYWJvdXQgwr0gaW5jaCBhbmQgeW91IGdldCAyMCBjb29raWVzIHRvdGFsKS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlbSBvbiB0d28gYmFraW5nIHNoZWV0cyBsaW5lZCB3aXRoIHBhcmNobWVudCBwYXBlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBmb3IgYWJvdXQgMTUgbWludXRlcywgb3IgdW50aWwgbGlnaHRseSBicm93bmVkIGFyb3VuZCB0aGUgZWRnZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIHRoZSBvdmVuIGFuZCBhbGxvdyB0byBjb29sIG9uIHRoZSBiYWtpbmcgc2hlZXQgZm9yIGFib3V0IDEwIG1pbnV0ZXMuIFRoZW4gdHJhbnNmZXIgdG8gYSB3aXJlIHJhY2sgdG8gY29vbCBjb21wbGV0ZWx5LiBTdG9yZSBjb29raWVzIGluIGFuIGFpcnRpZ2h0IGNvbnRhaW5lci4gQ29va2llcyB3aWxsIGxhc3QgZm9yIGEgZGF5IG9yIHR3by5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJTZXNhbWUgQ29va2llc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3Nzk1ODMsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc3OTU4My01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDU4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxNTA2MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTEwOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTE2MDk4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA2NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTYwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkyNjYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjEyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTYxNjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTYxNjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZXBhcmUgdGhlIGNoaWNrZW46IEluIGEgbGFyZ2UgYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIGJyb3duIHN1Z2FyLCBnaW5nZXIsIG9pbCwgc295IHNhdWNlLCBTcmlyYWNoYSBhbmQgcGVhbnV0IGJ1dHRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBjaGlja2VuIGFuZCB0b3NzIHRvIGNvYXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCBtYXJpbmF0ZSBhdCByb29tIHRlbXBlcmF0dXJlIGZvciAxNSBtaW51dGVzIG9yIGNvdmVyIGFuZCByZWZyaWdlcmF0ZSBmb3IgdXAgdG8gNiBob3Vycy4gUHJlaGVhdCB0aGUgb3ZlbiBicm9pbGVyIHdpdGggYSByYWNrIHNldCA0LWluY2hlcyBmcm9tIHRoZSBoZWF0IHNvdXJjZS4gTGluZSBhbiAxOHgxMy1pbmNoIHJpbW1lZCBzaGVldCBwYW4gd2l0aCBmb2lsIGFuZCBzcHJheSB3aXRoIG5vbnN0aWNrIHNwcmF5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIGNoaWNrZW4gZnJvbSB0aGUgbWFyaW5hZGUsIGRpc2NhcmRpbmcgZXhjZXNzIG1hcmluYWRlLCBhbmQgcGxhY2Ugb24gcHJlcGFyZWQgcGFuLCBjb3ZlcmluZyB0d28tdGhpcmRzIG9mIHRoZSBwYW4gYW5kIHNwYWNpbmcgZXZlbmx5LiBCcm9pbCBmb3IgNiBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIHBhbiBmcm9tIHRoZSBvdmVuIGFuZCBzcHJlYWQgcGluZWFwcGxlIG9uIHRoZSByZW1haW5pbmcgc3BhY2Ugb24gdGhlIHBhbi4gU3ByaW5rbGUgdGhlIHBpbmVhcHBsZSB3aXRoIDEgdGFibGVzcG9vbiBicm93biBzdWdhci4gQnJvaWwgZm9yIDMgdG8gNSBtaW51dGVzIG9yIHVudGlsIGNoaWNrZW4gaXMgYnJvd25lZCBhbmQgbm8gbG9uZ2VyIHBpbmsgaW5zaWRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUcmFuc2ZlciB0aGUgY2hpY2tlbiB0byBzZXJ2aW5nIHBsYXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIGNvbGVzbGF3IG1peCBpbiBhIG1lZGl1bSBib3dsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGJyb2lsZWQgcGluZWFwcGxlLCBsaW1lIGp1aWNlLCBvaWwsIHNveSBzYXVjZSBhbmQgU3JpcmFjaGE7IHRvc3MgdG8gY29hdC4gRGl2aWRlIGFtb25nIHRoZSBwbGF0ZXMgd2l0aCB0aGUgY2hpY2tlbiBhbmQgc3ByaW5rbGUgdGhlIHNsYXcgd2l0aCBtaW50IG9yIGJhc2lsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlRoYWkgQ2hpY2tlbiBUZW5kZXJzIHdpdGggQnJvaWxlZCBQaW5lYXBwbGUgU2xhd1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTUwOTQwLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NTA5NDAtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTEzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZSBoZWFkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDYxNzIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDQ2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjMyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjEyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzY5MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNtYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTAxMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDk2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMjAwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCB0aGUgb3ZlbiB0byAzNzVGQ29vayBhbmQgcGVlbCB0aGUgaGFyZCBib2lsZWQgZWdncyBhY2NvcmRpbmcgdG8geW91ciBmYXZvdXJpdGUgbWV0aG9kLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgb25pb24sIGdhcmxpYywgc2FsdCBhbmQgcGVwcGVyIHRvIGEgbWVkaXVtIHNhdWNlcGFuLiBDb29rIG92ZXIgbWVkaXVtIGhlYXQgZm9yIG9uZSBvciB0d28gbWludXRlcywgdW50aWwgZnJhZ3JhbnQgYW5kIHNsaWdodGx5IHNvZnRlbmVkLlRocm93IHRoZSBjYXVsaWZsb3dlciBmbG9yZXRzIGluIGFuZCBjb250aW51ZSBjb29raW5nIGZvciBhIG1pbnV0ZSBvciB0d28uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBjaGlja2VuIHN0b2NrLCBjb3ZlciBhbmQgYnJpbmcgdG8gdGhlIGJvaWw7IGxvd2VyIGhlYXQgYW5kIGNvbnRpbnVlIGNvb2tpbmcgdW50aWwgdGhlIGNhdWxpZmxvd2VyIGlzIHRlbmRlciwgYWJvdXQgNS03IG1pbnV0ZXMuTGFkbGUgdGhlIGNhdWxpZmxvd2VyIG1peHR1cmUgaW50byB5b3VyIGJsZW5kZXI7IGFkZCBnaGVlLCBEaWpvbiBtdXN0YXJkIGFuZCBudXRyaXRpb25hbCB5ZWFzdCBhbmQgcHJvY2VzcyBvbiBoaWdoIHNwZWVkIHVudGlsIHN1cGVyIHNtb290aCBhbmQgc2lsa3kgaW4gY29uc2lzdGVuY3kuIFNldCBhc2lkZS4gU3RlYW0gdGhlIHJhcGluaSBmb3IgMzAgc2Vjb25kcyB0byBhIG1pbnV0ZSwgdW50aWwgc2xpZ2h0bHkgc29mdGVuZWQgYW5kIGJyaWdodCBncmVlbi4gSW4gYSBzbWFsbCBza2lsbGV0LCBkcnkgcm9hc3QgdGhlIGhhemVsbnV0cyBvdmVyIG1lZGl1bSBoZWF0IHVudGlsIHRoZXkgYmVjb21lIGZyYWdyYW50IGFuZCB0YWtlIGEgbmljZSBnb2xkZW4gY29sb3JhdGlvbi4gU2xpY2UgdGhlIGhhcmQgYm9pbGVkIGVnZ3MgYW5kIGFkZCB0aGVtIHRvIGEgbGFyZ2UgbWl4aW5nIGJvd2wsIGZvbGxvd2VkIGJ5IOKAnEJlY2hhbWVs4oCdIHNhdWNlLCByYXBpbmkgYW5kIHRocmVlIHF1YXJ0ZXJzIG9mIHRoZSBoYXplbG51dHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB2ZXJ5IGRlbGljYXRlbHkgdW50aWwgd2VsbCBjb21iaW5lZCBhbmQgdHJhbnNmZXIgdG8gYW4gb3ZlbiBzYWZlIGRpc2guIFRlYXIgdGhlIHByb3NjaXV0dG8gaW50byBzbWFsbGVyIHBpZWNlcyBhbmQgYXJyYW5nZSB0aGVtIG9uIHRvcCBvZiB0aGUgZGlzaC4gU3ByaW5rbGUgd2l0aCB0aGUgcmVzdCBvZiB0aGUgaGF6ZWxudXRzLiBDb3ZlciB3aXRoIGZvaWwgYW5kIHBsYWNlIGluIHRoZSBvdmVuIGZvciAyMCBtaW51dGVzOyBhZnRlciB0aGF0IHRpbWUsIHJlbW92ZSB0aGUgZm9pbCBhbmQgc2V0IHRoZSBvdmVuIHRvIGJyb2lsIGZvciBhIDItMyBtaW51dGVzIG9yIHVudGlsIHRoZSBwcm9zY2l1dHRvIGJlY29tZXMgbmljZSBhbmQgY3Jpc3B5IGFuZCB0YWtlcyBhIG5pY2UgZ29sZGVuIGNvbG9yYXRpb24uIFlvdSBjb3VsZCBhbHNvIG1ha2UgdGhpcyBhaGVhZCBvZiB0aW1lIGFuZCBwbGFjZSBpdCBpbiB0aGUgZnJpZGdlIGFmdGVyIHlvdSBoYXZlIGNvdmVyZWQgaXQgd2l0aCBmb2lsIChhbHRob3VnaCB5b3UgbWlnaHQgd2FudCB0byBsZXQgaXQgY29vbCBhIGJpdCBiZWZvcmVoYW5kKS4gSW4gdGhpcyBjYXNlLCB5b3XigJlsbCB3YW50IHRvIGluY3JlYXNlIG92ZW4gdGltZSB0byBhYm91dCA0NSBtaW51dGVzLCBhdCAzNzVGLiBUaGlzIGFsc28gcmVoZWF0cyBleHRyZW1lbHkgd2VsbCBpbiB0aGUgbWljcm93YXZlIGFuZCB3aWxsIGVhc2lseSBrZWVwIGZvciA0LTUgZGF5cyBpbiB0aGUgcmVmcmlnZXJhdG9yLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkVnZyBhbmQgUmFwaW5pIENhc3Nlcm9sZVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTgzNTAyLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81ODM1MDItNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2MTUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDYxOTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyOCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDA3MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2OTcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDb21iaW5lIDEgY3VwIGNoaWNrZW4gYnJvdGgsIDEgY3VwIEJCUSBzYXVjZSwgMyB0YnNwIGxpcXVpZCBzbW9rZSwgMiB0YnNwIFdvcmNlc3RlcnNoaXJlIHNhdWNlLCAzIHByZXNzZWQgZ2FybGljIGNsb3ZlcywgMiB0YnNwIGJyb3duIHN1Z2FyIGFuZCBzdGlyIHRvIGNvbWJpbmUuR2VuZXJvdXNseSBzcHJpbmtsZSB0aGUgcG9yayByb2FzdCB3aXRoIHNhbHQsIHBlcHBlciBhbmQgcGFwcmlrYS5SdWIgdGhlIHNlYXNvbmluZyBpbnRvIHRoZSBwb3JrIHNob3VsZGVyLkNob3AgMSBsYXJnZSBvbmlvbiBhbmQgcGxhY2UgaXQgaW50byB0aGUgYm90dG9tIG9mIHRoZSBzbG93IGNvb2tlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIHBvcmsgcm9hc3Qgb3ZlciB0aGUgb25pb24gYW5kIHBvdXIgdGhlIG1hcmluYWRlIG92ZXIgdGhlIHBvcmsuQ292ZXIgYW5kIHNldCBvbiBsb3cgZm9yIDggaG91cnMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCBpdCBjb29sIGRvd24gc28geW91IGRvbid0IGJ1cm4geW91ciBmaW5nZXJzIHdoaWxlIHNocmVkZGluZy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBtZWF0IHRvIGEgbGFyZ2UgYm93bCBhbmQgc2hyZWQuIFRoaXMgbWVhdCBpcyBmYWxsLWFwYXJ0IHRlbmRlciEgVGhlIG1hcmluYWRlIGVuaGFuY2VzIHRoZSBuYXR1cmFsIGZsYXZvcnMgb2YgdGhlIHBvcmsuIFdoZW4geW91J3JlIGRvbmUgc2hyZWRkaW5nIHRoZSBwb3JrLCBwb3VyIGFzIG11Y2ggb2YgdGhlIHJlbWFpbmluZyBzYXVjZSBvdmVyIHRoZSBwb3JrIGFzIHlvdSBsaWtlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSB3aXRoIG1vcmUgQmFieSBSYXlzIEJCUSBTYXVjZS4uLiBhbmQgcGlja2xlc1wiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlB1bGxlZCBQb3JrXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1NDM2ODcsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU0MzY4Ny01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjA3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDQwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNtYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4OTQyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjAxMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQzMjc0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDgxMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGFsbCBpbmdyZWRpZW50cyB0byBhIGJsZW5kZXIgKGV4Y2VwdCBncmFoYW0gY3JhY2tlcnMgaWYgdXNpbmcpLiBDb3ZlciBhbmQgYmxlbmQgdW50aWwgd2VsbCBwdXJlZWQgdGhlbiBzZXJ2ZSB0b3BwZWQgd2l0aCBjcnVzaGVkIGdyYWhhbSBjcmFja2VycyBpZiBkZXNpcmVkLipUaGUgYmFuYW5hIGlzIG1vc3RseSB3aGF0IGdpdmVzIHRoaXMgc21vb3RoaWUgaXQncyBzd2VldG5lc3MsIHNvIEkgcmVjb21tZW5kIHVzaW5nIG9uZSB0aGF0IGlzIHNwZWNrbGVkIChub3QgbXVzaHkgdGhvdWdoKS5SZWNpcGUgU291cmNlOiBDb29raW5nIENsYXNzeVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlB1bXBraW4gQ2hlZXNlY2FrZSBCcmVha2Zhc3QgU21vb3RoaWVcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibW9ybmluZyBtZWFsXCIsXG4gICAgICAgIFwiYnJ1bmNoXCIsXG4gICAgICAgIFwiYnJlYWtmYXN0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTE2OTA0LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81MTY5MDQtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDE2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA4OTAwMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjAxMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVwYXJlIGFwcGxlIGZpbGxpbmc6IE1lbHQgYnV0dGVyIG92ZXIgbWVkaXVtIGhlYXQgaW4gMTItIGluY2ggc2tpbGxldC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGFwcGxlcyBhbmQgc3VnYXI7IGNvb2sgMjAgbWludXRlcywgc3RpcnJpbmcgb2NjYXNpb25hbGx5LiBTdGlyIGluIGFwcGxlIGp1aWNlOyBjb29rIDEgbW9yZSBtaW51dGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkdyZWFzZSAxMyB4IDktaW5jaCBiYWtpbmcgZGlzaC4gQXJyYW5nZSAxLzIgb2YgYnJlYWQgc2xpY2VzLCBvdmVybGFwcGluZyBzbGlnaHRseS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBtZWRpdW0gYm93bCwgd2hpc2sgbWlsaywgc2FsdCwgY2lubmFtb24gYW5kIGVnZ3MuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgMS8yIG9mIGVnZyBtaXh0dXJlIG92ZXIgYnJlYWQuIFNldCBhc2lkZSAxLzQgb2YgYXBwbGUgZmlsbGluZzsgY292ZXIgYW5kIHJlZnJpZ2VyYXRlIHRvIHNwb29uIG9uIGFmdGVyIGJha2luZy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIHJlbWFpbmluZyBhcHBsZSBmaWxsaW5nIG92ZXIgYnJlYWQgaW4gYW4gZXZlbiBsYXllci4gQXJyYW5nZSByZW1haW5pbmcgYnJlYWQgc2xpY2VzIG92ZXIgYXBwbGUgbGF5ZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgcmVtYWluaW5nIGVnZyBtaXh0dXJlIG92ZXIgdG9wIGJyZWFkIGxheWVyLiBQcmVzcyBicmVhZCBkb3duIHdpdGggc3BhdHVsYSBzbyBpdCBhYnNvcmJzIHRoZSBtYXhpbXVtIGFtb3VudCBvZiBlZ2cgbWl4dHVyZS4gRG90IGJyZWFkIHdpdGggYnV0dGVyIGFuZCBzcHJpbmtsZSB3aXRoIHN1Z2FyLiBDb3ZlciBhbmQgcmVmcmlnZXJhdGUgb3Zlcm5pZ2h0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUbyBiYWtlOiBQcmVoZWF0IG92ZW4gdG8gMzI1wrBGLiBVbmNvdmVyIGRpc2ggYW5kIGJha2UgNTAgdG8gNTUgbWludXRlcyBvciB1bnRpbCBrbmlmZSBpbnNlcnRlZCBpbiBjZW50ZXIgY29tZXMgb3V0IGNsZWFuLiBSZWhlYXQgcmVtYWluaW5nIGFwcGxlIG1peHR1cmUgaW4gbWljcm93YXZlLiBTcG9vbiBvdmVyIHRvcCB0byBzZXJ2ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJDaW5uYW1vbiBSYWlzaW4gT3Zlcm5pZ2h0IEZyZW5jaCBUb2FzdCB3LyBBcHBsZSBGaWxsaW5nXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk4ODI0MyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvOTg4MjQzLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzMjAwOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTUxNTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjk0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1lbHQgYnV0dGVyIHRvIGEgbGFyZ2Ugc2tpbGxldCBvdmVyIG1lZGl1bSBoZWF0LiBBcyB0aGUgYnV0dGVyIG1lbHRzLCBpdCB3aWxsIGJlZ2luIHRvIGZvYW0gYXMgaXQgdHJhbnNpdGlvbnMgZnJvbSBhIGJyaWdodCwgbGVtb24teWVsbG93IGNvbG9yIHRvIGdvbGRlbiBhbmQgdGhlbiBmaW5hbGx5IHRvIGEgbnV0dHktYnJvd24gY29sb3IuIEFzIHRoZSBidXR0ZXIganVzdCBiZWdpbnMgdG8gdHVybiBudXR0eS1icm93biBmcm9tIGdvbGRlbiwgcmVkdWNlIHlvdXIgaGVhdCB0byBtZWRpdW0tbG93IGFuZCBjYXJlZnVsbHkgdG9zcyBpbiB5b3VyIGdhcmxpYyBhbmQgb25pb24uIENvb2sgdW50aWwgdGhlIG9uaW9uIGp1c3QgYmVnaW5zIHRvIGJlY29tZSB0ZW5kZXIgYW5kIHRoZW4gYWRkIGluIHlvdXIgc2hyaW1wLiBTdGlycmluZyBmcmVxdWVudGx5LCBjb29rIHVudGlsIHRoZSBzaHJpbXAgdHVybiBwaW5rIGFuZCBsb3NlIHRoZWlyIHRyYW5zbHVjZW5jZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3RpciBpbiBzYWx0LCBibGFjayBwZXBwZXIsIHJlZCBwZXBwZXIgZmxha2VzIGFuZCBmcmVzaCBwYXJzbGV5LiBUb3NzIHNocmltcCB0byBtYWtlIHN1cmUgYWxsIGFyZSB3ZWxsLWNvYXRlZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gaGVhdCBhbmQgc2VydmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQnJvd24gQnV0dGVyIEdhcmxpYyBTaHJpbXBcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDcyNDAxOCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzI0MDE4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE1NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODA2OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI5NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDM0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjEyNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkN1dCBvZmYgdGhlIGNydXN0IGZyb20gNiBzbGljZXMgb2YgYnJlYWQuIENob3AgdGhlIGNlbnRlcnMgYW5kIHB1dCBpbnRvIGEgZm9vZCBwcm9jZXNzb3IuIFB1bHNlIHVudGlsIHlvdSBoYXZlIGNvYXJzZSBicmVhZGNydW1icy4gWW91IHNob3VsZCBoYXZlIGFib3V0IDMgY3Vwcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWFrZSB0aGUgc3R1ZmZpbmc6IEluIGEgbGFyZ2UgYm93bCwgc3RpciB0b2dldGhlciB0aGUgYnJlYWRjcnVtYnMsIGxlbW9uIHplc3QsIFBhcm1lc2FuIGNoZWVzZSwgbWluY2VkIGdhcmxpYywgY2hvcHBlZCBwYXJzbGV5LCBtaW5jZWQgb3JlZ2FubywgMS8yIGN1cCBvbGl2ZSBvaWwsIGFuZCBibGFjayBwZXBwZXIuIFNldCBhc2lkZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCYWtlZCBTdHVmZmVkIEFydGljaG9rZXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCIsXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjIzODU1LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MjM4NTUtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExNjA5OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExNjA5OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTk5MDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiB0byAzNTBGTGluZSBhIGJha2luZyBzaGVldCB3aXRoIHBhcmNobWVudCwgc2V0IGFzaWRlLkluIGJvd2wgb2Ygc3RhbmQgbWl4ZXIgY3JlYW0gYnV0dGVyIGFuZCBwZWFudXQgYnV0dGVyIHRvZ2V0aGVyIHVudGlsIHNtb290aC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGJvdGggc3VnYXJzIGFuZCBiZWF0IGZvciAyIG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBpbiBlZ2csIHZhbmlsbGEsIGJha2luZyBzb2RhIGFuZCBzYWx0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdW50aWwgY29tYmluZWQuVHVybiBtaXhlciB0byBsb3cgYW5kIGFkZCBpbiBmbG91ci5Qb3J0aW9uIG91dCBkb3VnaCBieSBpbiB0YWJsZXNwb29uIGFtb3VudHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJvbGwgaW50byBhIGJhbGwgYW5kIHRoZW4gZmxhdHRlbiB0byBhcHByb3hpbWF0ZWx5ICBpbmNoIHRoaWNrLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBvbiBiYWtpbmcgc2hlZXQgYWJvdXQgMiBpbmNoZXMgYXBhcnQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDgtOSBtaW51dGVzIHVudGlsIGdvbGRlbiBhdCBoZSBlZGdlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gb3ZlbiBhbmQgdHJhbnNmZXIgY29va2llcyB0byBhIHdpcmUgcmFjayB0byBjb29sIGNvbXBsZXRlbHkuSW4gbWljcm93YXZlIHNhZmUgYm93bCBjb21iaW5lIGNob2NvbGF0ZSBjaGlwcywgcGVhbnV0IGJ1dHRlciBhbmQgYnV0dGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJIZWF0IG9uIGhpZ2ggZm9yIDEgbWludXRlIGFuZCB0aGVuIHN0aXIgdW50aWwgc21vb3RoLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBwb3dkZXJlZCBzdWdhciBpbiBib3dsLkRpcCBlYWNoIGNvb2tpZSBpbiBjaG9jb2xhdGUgYW5kIHVzaW5nIGEgZm9yayByZW1vdmUgY29va2llLCB0YXBwaW5nIG9mZiBleGNlc3MgY2hvY29sYXRlLiBZb3UgZG9uJ3QgbmVlZCBhIGxvdCBvZiBjaG9jb2xhdGUgY29hdGluZyBvbiB0aGUgY29va2llcy5JbW1lZGlhdGVseSBkaXAgdGhlIGNvb2tpZSBpbnRvIHRoZSBwb3dkZXJlZCBzdWdhciBhbmQgdG9zcyB0byBjb2F0IGNvbXBsZXRlbHkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBiYWNrIG9uIGNvb2xpbmcgcmFjayB0byB1bnRpbCBjaG9jb2xhdGUgaXMgc2V0LiBSZXBlYXQgZm9yIGFsbCBjb29raWVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDExXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJQdXBweSBDaG93IENvb2tpZXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzkzNTg0LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83OTM1ODQtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTE0MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDQ2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQ2NDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTI1NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyOTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExOTQ0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMzUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBwb3RhdG9lcyBpbiBhIGxhcmdlIHNhdWNlcGFuIGFuZCBhZGQgd2F0ZXIgdG8gY292ZXIgYnkgMSBpbmNoLiBCcmluZyB0byBib2lsIG92ZXIgbWVkaXVtLWhpZ2ggaGVhdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIDEtdGFibGVzcG9vbiBzYWx0LCByZWR1Y2UgaGVhdCB0byBtZWRpdW0sIGFuZCBzaW1tZXIuIFN0aXIgYSBmZXcgdGltZXMsIHVudGlsIHBvdGF0b2VzIHJlLWZvcmsgdGVuZGVyLCBhYm91dCA4IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkRyYWluIHBvdGF0b2VzIGFuZCB0cmFuc2ZlciB0byBhIGxhcmdlIGJvd2wuSW4gYSBtZWRpdW0gc2l6ZWQgYm93bCB3aGlzayB0b2dldGhlciB5b2d1cnQsIG1heW9ubmFpc2UsIG11c3RhcmQsIHNhbHQsIHBlcHBlciBhbmQgb25pb24gcG93ZGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdG8gcG90YXRvZXMgYW5kIGdlbnRseSBzdGlyIHRvIGNvbWJpbmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBjZWxlcnksIHBpY2tsZXMsIHJlZCBvbmlvbnMsIHBhcnNsZXkgYW5kIGNob3BwZWQgZWdncyB0byBwb3RhdG8gbWl4dHVyZSwgc3RpciB0byBjb21iaW5lLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgbW9yZSBzYWx0IGFuZCBwZXBwZXIgdG8gdGFzdGUuQ292ZXIgYW5kIHJlZnJpZ2VyYXRlIHVudGlsIGNoaWxsZWQsIGFib3V0IDEgaG91ciBiZWZvcmUgc2VydmluZy4gUG90YXRvIHNhbGFkIGNhbiBiZSBtYWRlIHVwIHRvIG9uZSBkYXkgYWhlYWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiRWFzeSBDcmVhbXkgUG90YXRvIFNhbGFkIHdpdGggWW9ndXJ0XCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNhbGFkXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjA3ODA1LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MDc4MDUtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIxMTgyMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAwNDgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2NTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA3OTI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE1NDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IHRvcHMgb2ZmIHBlcHBlcnM7IHJlbW92ZSBhbmQgZGlzY2FyZCBzZWVkcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ2hvcCB0b3BzOyBwbGFjZSBpbiBtZWRpdW0gYm93bC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHNhdXNhZ2UsIG9uaW9ucywgcmljZSwgUGFybWVzYW4sIGdhcmxpYywgb3JlZ2FubywgMS0xLzIgY3VwcyBwaXp6YSBzYXVjZSBhbmQgMS0xLzQgY3VwcyBzaHJlZGRlZCBjaGVlc2U7IG1peCBsaWdodGx5LiAgU3Bvb24gaW50byBwZXBwZXIgc2hlbGxzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTdGFuZCBwZXBwZXJzIGluIHNsb3cgY29va2VyOyB0b3Agd2l0aCByZW1haW5pbmcgc2F1Y2UgYW5kIHNocmVkZGVkIGNoZWVzZS4gIENvdmVyIHdpdGggbGlkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDb29rIG9uIExPVyA2IHRvIDggaG91cnMgKG9yIG9uIEhJR0ggMi0xLzIgdG8gMy0xLzIgaG91cnMpLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlNsb3ctQ29va2VyIEl0YWxpYW4tU3R1ZmZlZCBQZXBwZXJzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc2Mzg1OCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzYzODU4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjAxMjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMy41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5Mjk2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTE4Mzc1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTgzNzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDgxMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogODEyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgZmxvdXJzIHRvZ2V0aGVyIHdpdGggIHRlYXNwb29uIGluc3RhbnQgeWVhc3QgaW4gYSBsYXJnZSBtaXhpbmcgYm93bCB3aXRoIGEgdGlnaHQtZml0dGluZyBsaWQgKGxpa2UgdGhpcyBvbmUpLCBhbmQgdGhlbiBzdGlyIGluIHRoZSBvYXRzLiBTdGlyIHRoZSB3YXRlciBhbmQgbWlsayB0b2dldGhlciwgdGhlbiBwb3VyIHRoZSBsaXF1aWRzIGludG8gdGhlIGRyeSBpbmdyZWRpZW50cywgc3RpcnJpbmcgdG8gY3JlYXRlIGEgbG9vc2UsIHNoYWdneSBkb3VnaC4gQ292ZXIgdGhlIG1peGluZyBib3dsIHRpZ2h0bHksIGFuZCBhbGxvdyB0aGUgZG91Z2ggdG8gcmVzdCBhdCByb29tIHRlbXBlcmF0dXJlIGF0IGxlYXN0IGVpZ2h0IGFuZCB1cCB0byB0d2VsdmUgaG91cnMuRHVtcCB0aGUgZG91Z2ggaW50byB0aGUgYmFzaW4gb2YgYSBzdGFuZCBtaXhlciAobGlrZSB0aGlzIG9uZSksIGFuZCB0aGVuIGJlYXQgaW4gdGhlIGJ1dHRlciwgaG9uZXksIHNhbHQsIGFuZCB0aGUgcmVtYWluaW5nIDIgdGFibGVzcG9vbnMgeWVhc3QuIENvbnRpbnVlIGJlYXRpbmcgYWxsIHRoZSBpbmdyZWRpZW50cyB0b2dldGhlciB1bnRpbCB0aGV5IGZvcm0gYSBzbW9vdGggZG91Z2gsIGFuZCB0aGVuIHR1cm4gaXQgb3V0IG9uIGEgd2VsbC1mbG91cmVkIHN1cmZhY2UuIEtuZWFkIGJ5IGhhbmQgZm9yIHRlbiB0byBmaWZ0ZWVuIG1pbnV0ZXMsIGluY29ycG9yYXRpbmcgYWJvdXQgMSBjdXBzIGFkZGl0aW9uYWwgZmxvdXIsIHVudGlsIHRoZSBkb3VnaCBiZWNvbWVzIHNtb290aCBhbmQgZWxhc3RpYy5PaWwgYSBsYXJnZSBtaXhpbmcgYm93bCwgYW5kIHRyYW5zZmVyIHRoZSBkb3VnaCB0byB0aGUgYm93bC4gQ292ZXIgdGlnaHRseSwgYW5kIGFsbG93IHRoZSBkb3VnaCB0byByaXNlIHVudGlsIGRvdWJsZWQgaW4gdm9sdW1lLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUcmFuc2ZlciB0aGUgZG91Z2ggdG8gYSB3ZWxsLWZsb3VyZWQgc3VyZmFjZSwgYW5kIHNwbGl0IGludG8gdHdvIHBvcnRpb25zIG9mIGFwcHJveGltYXRlbHkgZXF1YWwgd2VpZ2h0LiBCdXR0ZXIgYW5kIGZsb3VyIHR3byA0LWluY2ggYnkgOC1pbmNoIGxvYWYgcGFucy5Xb3JraW5nIG9uZSBhdCBhIHRpbWUsIHJvbGwgZWFjaCBsdW1wIG9mIGRvdWdoIG91dCBpbnRvIGEgbGFyZ2UgcmVjdGFuZ2xlLCBhYm91dCA4IGJ5IDE2IGluY2hlcy4gV29ya2luZyBmcm9tIHRoZSBzaG9ydCBlbmQsIHJvbGwgdGhlIGRvdWdoIGludG8gYSBsb2FmLCBwaW5jaGluZyB0aGUgc2VhbSBhdCB0aGUgYm90dG9tIG9mIHRoZSBsb2FmIHRpZ2h0bHkgdG8gc2VhbCBpdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIGRvdWdoLCBzZWFtLXNpZGUgZG93biwgaW4gYSBwcmVwYXJlZCBsb2FmIHBhbi4gQ292ZXIgbGlnaHRseSB3aXRoIGEga2l0Y2hlbiB0b3dlbCwgYW5kIGFsbG93IGl0IHRvIHJpc2UgdW50aWwgZG91YmxlZCBpbiBzaXplLCBhYm91dCB0d28gaG91cnMuV2hpbGUgdGhlIGRvdWdoIHJpc2VzLCBoZWF0IHRoZSBvdmVuIHRvIDQwMCBGLlVzaW5nIGEgcGFzdHJ5IGJydXNoLCBnZW50bHkgYnJ1c2ggdGhlIHRvcCBvZiB0aGUgZG91Z2ggd2l0aCBjcmVhbSwgYW5kIHRoZW4gc2NhdHRlciBvbmUgdGFibGVzcG9vbiByb2xsZWQgb2F0cyBvdmVyIGVhY2ggbG9hZi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIGxvYXZlcyB0byB0aGUgb3ZlbiwgYW5kIGJha2UgNSBtaW51dGVzIGF0IDQwMCBGLiBUaGVuIHJlZHVjZSB0aGUgdGVtcGVyYXR1cmUgdG8gMzUwIEYgYW5kIGNvbnRpbnVlIGJha2luZyB1bnRpbCB0aGUgY3J1c3QgaXMgYSBkYXJrIGJyb3duIGFuZCB0aGUgYnJlYWQgcmVhY2hlcyBhbiBpbnRlcm5hbCB0ZW1wZXJhdHVyZSBvZiAyMDAgRiBhYm91dCA0NSBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgZnJvbSB0aGUgb3ZlbiBhbmQgYWxsb3cgdGhlIGxvYXZlcyB0byBjb29sIGluIHRoZWlyIHBhbnMgZm9yIGZpdmUgbWludXRlcywgdGhlbiB0dXJuIG91dCBvbnRvIGEgd2lyZSByYWNrLCBhbGxvd2luZyB0aGUgYnJlYWQgdG8gY29vbCBjb21wbGV0ZWx5IGJlZm9yZSBzbGljaW5nLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIldob2xlIFdoZWF0IE1pbGsgYW5kIEhvbmV5IFNhbmR3aWNoIEJyZWFkXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYxODMzMixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjE4MzMyLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTk5MTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNjgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxOTA3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDEwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0MjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxODMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMjgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibUxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAwODAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMjAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBtZWRpdW0gYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIGZsb3VyLCBiYWtpbmcgcG93ZGVyLCBjb3Juc3RhcmNoLCBjaW5uYW1vbiwgYW5kIHNhbHQuIEluIGEgc2VwYXJhdGUgYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIGJ1dHRlciwgcHVtcGtpbiwgYW5kIHZhbmlsbGEuIFN0aXIgaW4gdGhlIGFnYXZlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGZsb3VyIG1peHR1cmUsIHN0aXJyaW5nIGp1c3QgdW50aWwgaW5jb3Jwb3JhdGVkLiBGb2xkIGluIDIgdGFibGVzcG9vbnMgb2YgY2hvY29sYXRlIGNoaXBzLiBDaGlsbCB0aGUgY29va2llIGRvdWdoIGZvciBhdCBsZWFzdCAzMCBtaW51dGVzLiAoSWYgY2hpbGxpbmcgbG9uZ2VyIHRoYW4gMSBob3VyLCBjb3ZlciB0aGUgdG9wIG9mIHRoZSBib3dsIHdpdGggZm9pbC4pUHJlaGVhdCB0aGUgb3ZlbiB0byAzMjVGLCBhbmQgbGluZSBhIGJha2luZyBzaGVldCB3aXRoIHBhcmNobWVudCBwYXBlciBvciBhIHNpbGljb25lIGJha2luZyBtYXQuIERyb3AgdGhlIGNvb2tpZSBkb3VnaCBpbnRvIDEyIHJvdW5kZWQgc2Nvb3BzIG9udG8gdGhlIHByZXBhcmVkIGJha2luZyBzaGVldC4gRmxhdHRlbiBzbGlnaHRseSwgYW5kIHByZXNzIHRoZSByZW1haW5pbmcgY2hvY29sYXRlIGNoaXBzIGludG8gdGhlIHRvcHMgb2YgdGhlIGNvb2tpZSBkb3VnaC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBhdCAzMjVGIGZvciAxNS0xNyBtaW51dGVzLiBDb29sIG9uIHRoZSBiYWtpbmcgc2hlZXQgZm9yIGF0IGxlYXN0IDEwIG1pbnV0ZXMgYmVmb3JlIHR1cm5pbmcgb3V0IG9udG8gYSB3aXJlIHJhY2suXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiVGhlIFVsdGltYXRlIEhlYWx0aHkgU29mdCAmIENoZXd5IFB1bXBraW4gQ2hvY29sYXRlIENoaXAgQ29va2llc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMzE5NTEsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzIzMTk1MS01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM4MTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgdG9nZXRoZXIgYnJvd24gc3VnYXIsIGNvcm5zdGFyY2gsIGFuZCAxLzQgdGVhc3Bvb24gc2FsdCBpbiBhIGhlYXZ5IG1lZGl1bSBzYXVjZXBhbiwgdGhlbiB3aGlzayBpbiBtaWxrIGFuZCBjcmVhbS4gQnJpbmcgdG8gYSBib2lsIG92ZXIgbWVkaXVtIGhlYXQsIHdoaXNraW5nIGZyZXF1ZW50bHksIHRoZW4gYm9pbCwgd2hpc2tpbmcsIDEgbWludXRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgZnJvbSBoZWF0IGFuZCB3aGlzayBpbiBidXR0ZXIgYW5kIHZhbmlsbGEuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgaW50byBhIGJvd2wsIHRoZW4gY292ZXIgc3VyZmFjZSB3aXRoIGJ1dHRlcmVkIHdheCBwYXBlciBhbmQgY2hpbGwgdW50aWwgY29sZCwgYXQgbGVhc3QgMSAxLzIgaG91cnMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQnV0dGVyc2NvdGNoIFB1ZGRpbmdcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogODgwMTA4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy84ODAxMDgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIwNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI5NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJidW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE1MjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSaW5zZSB0aGUgcXVpbm9hIHVuZGVyIGNvb2wgcnVubmluZyB3YXRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIHJpbnNlZCBxdWlub2EgaW4gYSBwb3Qgd2l0aCAxLjc1IGN1cHMgb2Ygd2F0ZXIuIFB1dCBhIGxpZCBvbiB0b3AsIGJyaW5nIGl0IHRvIGEgYm9pbCwgdGhlbiByZWR1Y2UgdGhlIGhlYXQgdG8gbG93IGFuZCBsZXQgc2ltbWVyIGZvciAxNSBtaW51dGVzLiBBZnRlciAxNSBtaW51dGVzLCB0dXJuIG9mZiB0aGUgaGVhdC4gQWxsb3cgdGhlIHF1aW5vYSB0byBjb29sIGJlZm9yZSBtYWtpbmcgdGhlIHNhbGFkIG9yIGVsc2UgdGhlIGhlYXQgd2lsbCB3aWx0IHRoZSBwYXJzbGV5IGFuZCB2ZWdldGFibGVzLiBUbyBjb29sIGl0IGZhc3Rlciwgc3ByZWFkIGl0IG91dCBvbiBhIGJha2luZyBzaGVldCBhbmQgcGxhY2UgaW4gdGhlIHJlZnJpZ2VyYXRvciBmb3IgMzAgbWludXRlcy5XaGlsZSB0aGUgcXVpbm9hIGlzIGNvb2xpbmcsIHByZXBhcmUgdGhlIHJlc3Qgb2YgdGhlIHNhbGFkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDdXQgdGhlIHRvbWF0byBhbmQgY3VjdW1iZXIgaW50byBhIHNtYWxsIGRpY2UuIFJpbnNlIHRoZSBwYXJzbGV5IHdlbGwgdG8gcmVtb3ZlIHNhbmQgYW5kIGdyaXQsIHRoZW4gY2hvcCB3ZWxsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGN1Y3VtYmVyLCB0b21hdG8sIGFuZCBwYXJzbGV5IHRvIGEgYm93bC5UbyBtYWtlIHRoZSBkcmVzc2luZywgc3F1ZWV6ZSB0aGUganVpY2UgZnJvbSB0aGUgbGVtb24gaW50byBhIGJvd2wgKGFib3V0ICBjdXApLiBNaW5jZSB0aGUgZ2FybGljIGFuZCBhZGQgdG8gdGhlIGxlbW9uIGp1aWNlIGFsb25nIHdpdGggdGhlIG9saXZlIG9pbCBhbmQgc2FsdC5PbmNlIHRoZSBxdWlub2EgaXMgY29vbGVkLCBjb21iaW5lIGl0IHdpdGggdGhlIGNob3BwZWQgdmVnZXRhYmxlcyBhbmQgdGhlIGxlbW9uIGRyZXNzaW5nLiBTdGlyIHdlbGwgYW5kIHRoZW4gc2VydmUhXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwicXVpbm9hIHRhYmJvdWxlaFwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MDIzMTEsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYwMjMxMS01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0MjQyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0MTMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MTc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImVudmVsb3Blc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2NDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzMCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0MDUxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC42NjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzMCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTGlnaHRseSBzcHJheSB0aGUgbW9sZCB3aXRoIG5vbi1zdGljayBzcHJheSBhbmQgd2lwZSBleGNlc3Mgb2ZmIHdpdGggYSBwYXBlciB0b3dlbC4gRG9u4oCZdCBvdmVyZG8gaXQgb3IgdGhlIHJlc2lkdWUgd2lsbCBhZmZlY3QgdGhlIHRhc3RlIG9mIHRoZSBqZWxsby5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciB0aGUgc29kYSwganVpY2UsIGFuZCBjcmVhbSBpbnRvIGEgbWVkaXVtIHNhdWNlcGFuIGFuZCBzcHJpbmtsZSB0aGUgZ2VsYXRpbiBvbiB0b3AuIEFsbG93IHRoZSBnZWxhdGluIHRvIHNvYWsgZm9yIDItMyBtaW51dGVzLCB0aGVuIGJlZ2luIHRvIGhlYXQgb24gbG93LCBzdGlycmluZyBjb25zdGFudGx5IHVudGlsIGdlbGF0aW4gaXMgZnVsbHkgZGlzc29sdmVkIChhYm91dCA1IG1pbnV0ZXMpLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgc2F1Y2VwYW4gZnJvbSBoZWF0IGFuZCBhZGQgdm9ka2EgYW5kIGZvb2QgY29sb3JpbmcuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgaW50byBtb2xkcyBhbmQgY2hpbGwgZm9yIHNldmVyYWwgaG91cnMsIG9yIHVudGlsIHNldC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gbW9sZCwgdG9wIHdpdGggd2hpcHBlZCBjcmVhbSwgYW5kIGVuam95IHJlc3BvbnNpYmx5ISpUaGUgb3JpZ2luYWwgcmVjaXBlIHN1Z2dlc3RzIDItMyBlbnZlbG9wZXMsIGRlcGVuZGluZyBvbiBob3cgbG9uZyB5b3VyIGplbGxvIHNob3RzIHdpbGwgYmUgbGVmdCBvdXQgKG1vcmUgZ2VsYXRpbiBmb3IgbW9yZSB0aW1lKS4gSSBvcHRlZCBmb3IgMyBiZWNhdXNlIHdlIHdlcmUgdHJhdmVsaW5nIGFuIGhvdXIgdG8gZ2V0IHRvIHRoZSBwYXJ0eSwgYnV0IEkgZm91bmQgdGhlbSB0byBiZSBhIGxpdHRsZSB0b28gZmlybSAsIHNvIEkgc3VnZ2VzdCB5b3Ugc3RpY2sgd2l0aCAyIGFuZCBwbGFuIGFjY29yZGluZ2x5IGZvciB0aGUgYmVzdCByZXN1bHRzIVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJpcnRoZGF5IENha2UgSmVsbG8gU2hvdHNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjcwNDA4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82NzA0MDgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzgyOCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI2NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMjAyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIyMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwODIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA4MjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzIwMDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTE0NTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCBvdmVuIHRvIDM1MCBkZWdyZWVzIEYuIEZpcnN0LCByZW1vdmUgdGhlIG11c2hyb29tIHN0ZW1zIGJ5IHB1c2hpbmcgZWFjaCBvbmUgdG93YXJkIHlvdSwgdGhlbiBhd2F5IGZyb20geW91LiBJdCB3aWxsIHBvcCByaWdodCBvdXQuIChTYXZlIHRoZW0gdG8gYWRkIHRvIGFub3RoZXIgcmVjaXBlLikgU3dpc2ggYW5kIHJ1YiB0aGUgbXVzaHJvb20gdG9wcyBpbiBhIGxhcmdlIGJvd2wgb2YgY29sZCB3YXRlciB0byBnZXQgdGhlbSBjbGVhbi4gVGhlbiwgbGF5IHRoZW0gb3BlbiBzaWRlIGRvd24gb24gYSBraXRjaGVuIHRvd2VsIHRvIGRyeS5XaGlsZSB0aGUgbXVzaHJvb21zIGRyeSwgbWl4IHRvZ2V0aGVyIHRoZSBjcmVhbSBjaGVlc2UsIHNwaW5hY2gsIGFydGljaG9rZSBoZWFydHMsIHBhcm1lc2FuLCBnYXJsaWMgcG93ZGVyLCAxLzIgdHNwLiBrb3NoZXIgc2FsdCwgYW5kIHJlZCBwZXBwZXIgZmxha2VzLkluIGEgc21hbGwgYm93bCwgc3RpciB0b2dldGhlciBvbGl2ZSBvaWwsIDEvNCB0c3AuIHNhbHQsIGFuZCBJdGFsaWFuIHNlYXNvbmluZy4gVXNlIGEgYmFzdGluZyBicnVzaCBvciB5b3VyIGZpbmdlcnMgdG8gbGlnaHRseSBydWIgdGhlIG91dHNpZGUgb2YgdGhlIG11c2hyb29tcyB3aXRoIHRoZSBvaWwgbWl4dHVyZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIG11c2hyb29tcyBvcGVuIHNpZGUgdXAgb24gYSBiYWtpbmcgc2hlZXQuIFVzZSBhIHNtYWxsIGRpc2hlciBvciBzcG9vbiB0byBwbGFjZSBhIGhlYXBpbmcgc2Nvb3Agb2YgZGlwIG1peHR1cmUgaW50byBlYWNoIG11c2hyb29tLCBwcmVzc2luZyBpdCBkb3duIHRvIG1ha2Ugc3VyZSBpdCBmaWxscyB0aGUgb3BlbmluZy4gUHJlc3MgYSBzbWFsbCBhbW91bnQgb2YgZmV0YSBjaGVlc2Ugb24gdG9wIG9mIGVhY2ggc3R1ZmZlZCBtdXNocm9vbS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBpbiBwcmVoZWF0ZWQgb3ZlbiBmb3IgMjAtMjUgbWludXRlcyB1bnRpbCBmaWxsaW5nIGlzIGhvdCBhbmQgYnViYmx5IGFuZCBmZXRhIGlzIHN0YXJ0aW5nIHRvIGJyb3duLiBNdXNocm9vbXMgd2lsbCBkcmFpbiBzb21lIGJyb3duIGxpcXVpZCBkdXJpbmcgY29va2luZywgc28gZHJhaW4gb24gcGFwZXIgdG93ZWxzIGJlZm9yZSBzZXJ2aW5nIGlmIHlvdSBkb24ndCB3YW50IHRoYXQgbGlxdWlkIG9uIHlvdXIgc2VydmluZyBwbGF0ZS4gVGhlc2UgdGFzdGUganVzdCBhcyBnb29kIGV2ZW4gYWZ0ZXIgdGhleSBoYXZlIGNvb2xlZCBkb3duIVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkFydGljaG9rZSBTcGluYWNoIERpcCBTdHVmZmVkIE11c2hyb29tc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJjb25kaW1lbnRcIixcbiAgICAgICAgXCJkaXBcIixcbiAgICAgICAgXCJzcHJlYWRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAzMjUyMDgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzMyNTIwOC01NTZ4MzcwLmpwZWdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDcwMzYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA4MjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExMTU0OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDI2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDM4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEzMDQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNjc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNtYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDIwNDIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTAyNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2MzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQxMDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2F0Y2ggaG93IHRvIG1ha2UgdGhpcyByZWNpcGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIGFuIG92ZW4gcmFjayBpbiB0aGUgY2VudGVyIG9mIHRoZSBvdmVuLiBQcmVoZWF0IHRoZSBvdmVuIHRvIDM1MCBkZWdyZWVzIEYuIFNwcmF5IGEgOS1ieS0xMy1ieS0yLWluY2ggZ2xhc3MgYmFraW5nIGRpc2ggd2l0aCB2ZWdldGFibGUgb2lsIGNvb2tpbmcgc3ByYXkuIFNldCBhc2lkZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiRm9yIHRoZSBmb25kdXRhIHNhdWNlOiBJbiBhIG1lZGl1bSBoZWF2eS1ib3R0b21lZCBzYXVjZXBhbiwgYnJpbmcgdGhlIG1pbGsgYW5kIGNyZWFtIHRvIGEgc2ltbWVyIG92ZXIgbWVkaXVtIGhlYXQuIFJlZHVjZSB0aGUgaGVhdCB0byBsb3cuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgUGVjb3Jpbm8gUm9tYW5vIGFuZCB3aGlzayB1bnRpbCB0aGUgY2hlZXNlIGlzIG1lbHRlZCBhbmQgdGhlIHNhdWNlIGlzIHNtb290aC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBwYW4gZnJvbSB0aGUgaGVhdCBhbmQgc3RpciBpbiB0aGUgYmFzaWwuIFNldCBhc2lkZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBsYXJnZSBza2lsbGV0LCBoZWF0IDIgdGFibGVzcG9vbnMgb2Ygb2xpdmUgb2lsIG92ZXIgbWVkaXVtLWhpZ2ggaGVhdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBzYXVzYWdlLCBzaGFsbG90cywgZ2FybGljLCAxLzQgdGVhc3Bvb24gc2FsdCwgYW5kIDEvNCB0ZWFzcG9vbiBwZXBwZXIuIENvb2sgdW50aWwgdGhlIHNhdXNhZ2UgaXMgY29va2VkIHRocm91Z2ggYW5kIHRoZSB2ZWdldGFibGVzIGhhdmUgc29mdGVuZWQsIDggdG8gMTAgbWludXRlcy4gVXNpbmcgYSB3b29kZW4gc3Bvb24sIGJyZWFrIHRoZSBzYXVzYWdlIGludG8gMS8yLWluY2ggcGllY2VzLiBJbmNyZWFzZSB0aGUgaGVhdCB0byBoaWdoLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIHdpbmUgYW5kIHNjcmFwZSB1cCB0aGUgYnJvd24gYml0cyB0aGF0IGNsaW5nIHRvIHRoZSBib3R0b20gb2YgdGhlIHBhbiB3aXRoIGEgd29vZGVuIHNwb29uLiBDb29rIHVudGlsIHRoZSB3aW5lIGhhcyBldmFwb3JhdGVkLCBhYm91dCAyIG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgcGFuIGZyb20gdGhlIGhlYXQgYW5kIHNldCBhc2lkZSB0byBjb29sIHNsaWdodGx5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIHBlYXMsIHJpY290dGEsIGFuZCAxIGN1cCBvZiB0aGUgZm9uZHV0YSBzYXVjZS4gU2Vhc29uIHdpdGggcmVtYWluaW5nIDEvMiB0ZWFzcG9vbiBrb3NoZXIgc2FsdCBhbmQgMS80IHRlYXNwb29uIHBlcHBlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJyaW5nIGEgbGFyZ2UgcG90IG9mIHNhbHRlZCB3YXRlciB0byBhIGJvaWwgb3ZlciBoaWdoIGhlYXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIHBhc3RhIGFuZCBjb29rIHVudGlsIGp1c3QgdGVuZGVyLCA3IHRvIDggbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkRyYWluIGFuZCBzZXQgYXNpZGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgaGFsZiBvZiB0aGUgbWFyaW5hcmEgc2F1Y2Ugb3ZlciB0aGUgYm90dG9tIG9mIHRoZSBwcmVwYXJlZCBiYWtpbmcgZGlzaC4gVXNpbmcgYSBzbWFsbCBzcG9vbiwgZmlsbCB0aGUgbWFuaWNvdHRpIHNoZWxscyB3aXRoIHRoZSBzYXVzYWdlIGZpbGxpbmcgYW5kIGFycmFuZ2UgaW4gYSBzaW5nbGUgbGF5ZXIgaW4gdGhlIGJha2luZyBkaXNoLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDE0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciB0aGUgcmVtYWluaW5nIG1hcmluYXJhIHNhdWNlIG9uIHRvcCBvZiB0aGUgZmlsbGVkIHNoZWxscy4gU3Bvb24gdGhlIHJlbWFpbmluZyBmb25kdXRhIHNhdWNlIG9uIHRvcCBhbmQgc3ByaW5rbGUgd2l0aCB0aGUgbW96emFyZWxsYS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkRyaXp6bGUgd2l0aCBvbGl2ZSBvaWwgYW5kIGJha2UgdW50aWwgYnViYmx5IGFuZCBnb2xkZW4gYnJvd24sIDMwIHRvIDM1IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJha2VkIE1hbmljb3R0aSB3aXRoIFNhdXNhZ2UgYW5kIFBlYXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU0Mjc3OCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTQyNzc4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW0gc2l6ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ2MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzY1MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzgyOCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTEyNTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNjc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgdGhlIG92ZW4gdG8gMzc1wrBGIHRoZW4gcHJlcGFyZSBhIGxhcmdlIGNhc3Nlcm9sZSBkaXNoIChJIHVzZWQgYSAxIHF1YXJ0IGRpc2gpIGJ5IGdyZWFzaW5nIHdpdGggRWFydGggQmFsYW5jZSwgYnV0dGVyIG9yIG5vbi1zdGljayBjb29raW5nIHNwcmF5Lldhcm0gdGhlIG9saXZlIG9pbCBvdmVyIG1lZGl1bSBoZWF0IGluIGEgc2F1dMOpIHBhbiBhbmQgY29vayB0aGUgc2hhbGxvdCBhbmQgZ2FybGljIGZvciBhIGZldyBtaW51dGVzLCB1bnRpbCBmcmFncmFudC5Vc2luZyBhIHN0cmFpbmVyIGFuZCBhIHBhcGVyIHRvd2VsLCBwcmVzcyB0aGUgZXhjZXNzIHdhdGVyIG91dCBmcm9tIHRoZSBkZWZyb3N0ZWQgc3BpbmFjaCB0aGVuIGFkZCBpdCB0byB0aGUgcGFuLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGNob3BwZWQgYXJ0aWNob2tlIGhlYXJ0cyAoSSBkaXNjYXJkZWQgYW55IHRvdWdoIHBhcnRzKSBhbmQgYSBwaW5jaCBvZiBzYWx0ICYgcGVwcGVyIHRvIHRoZSBwYW4gYW5kIGNvb2sgZm9yIGZpdmUgbWludXRlcy5NZWFud2hpbGUsIGNvbWJpbmUgdGhlIGVnZ3MsIHlvZ3VydCBhbmQgY2hlZXNlIGluIGEgbGFyZ2UgYm93bCBhbmQgd2hpc2sgdG9nZXRoZXIgdW50aWwgd2VsbC1jb21iaW5lZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBzcGluYWNoIGFydGljaG9rZSBtaXh0dXJlIGZyb20gdGhlIGhlYXQgYW5kIGFsbG93IHRvIGNvb2wgZm9yIGEgZmV3IG1pbnV0ZXMgYmVmb3JlIGFkZGluZyB0byB0aGUgYm93bCB3aXRoIHRoZSBlZ2dzIGFuZCBjaGVlc2UuTGFzdGx5LCBhZGQgdGhlIGNvb2tlZCBxdWlub2EgYW5kIHN0aXIgdW50aWwgZXZlcnl0aGluZyBpcyBtaXhlZCB0b2dldGhlciB3ZWxsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgbWl4dHVyZSBpbnRvIHRoZSBjYXNzZXJvbGUgZGlzaCwgc21vb3RoaW5nIHRoZSB0b3Agd2l0aCB0aGUgYmFjayBvZiBhIHNwb29uLiBTcHJpbmtsZSBhIGZldyB0YWJsZXNwb29ucyBvZiBjaGVlc2Ugb24gdG9wIGFuZCBjb29rIGZvciAzMC0zNSBtaW51dGVzLCB1bnRpbCB0b3AgaXMgbGlnaHQgZ29sZGVuIGJyb3duLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSB3YXJtIGFuZCBlbmpveSFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJTcGluYWNoIEFydGljaG9rZSBRdWlub2EgQ2Fzc2Vyb2xlXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2OTg3MDEsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzY5ODcwMS01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE0NjIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTQ2MjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTMwMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG8gcHJlcGFyZSBiZXJyeSBsYXllcjogUHJlaGVhdCBvdmVuIHRvIDM3NUYuIENvYXQgc2l4IDgtb3VuY2Ugc291ZmZsIGN1cHMgd2l0aCBjb29raW5nIHNwcmF5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgMSB0ZWFzcG9vbiBzdWdhciB0byBlYWNoIGN1cCBhbmQgc3dpcmwgdG8gY29hdCB0aGUgaW5zaWRlLiBEaXN0cmlidXRlIHJhc3BiZXJyaWVzIGluIHRoZSBib3R0b20gb2YgdGhlIGN1cHMgYW5kIHNwcmlua2xlIGVhY2ggd2l0aCAxIHRlYXNwb29uIGNybWUgZGUgY2Fzc2lzIChvciBlYXUtZGUtdmllLCBqdWljZSBvciBuZWN0YXIpLlRvIHByZXBhcmUgc291ZmZsczogU3RpciByYXNwYmVycmllcyBpbiBhIHNhdWNlcGFuIG92ZXIgbG93IGhlYXQgdW50aWwgdGhleSBhcmUganVpY3kgKGZvciBmcmVzaCkgb3IgdGhhd2VkIChmb3IgZnJvemVuKS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdG8gYSBmaW5lIHNpZXZlIHNldCBvdmVyIGEgYm93bC4gV2l0aCBhIHNwb29uLCBwcmVzcyB0aGUgYmVycmllcyB0aHJvdWdoIHRoZSBzaWV2ZSwgYmVpbmcgY2FyZWZ1bCB0byBleHRyYWN0IGFsbCB0aGUgcHVscC4gRGlzY2FyZCB0aGUgc2VlZHMuUmV0dXJuIHRoZSBwdXJlZSB0byB0aGUgc2F1Y2VwYW4uIEJyaW5nIHRvIGEgc2ltbWVyIGFuZCBzdGlyIG92ZXIgbWVkaXVtIGhlYXQgdW50aWwgdmVyeSB0aGljayBhbmQgcmVkdWNlZCB0byAxLzQgY3VwLCBhYm91dCAxMCBtaW51dGVzLiAoUmVkdWNlIHRoZSBoZWF0IGFzIHRoZSBtaXh0dXJlIHRoaWNrZW5zLikgU3RpciBpbiAxIHRhYmxlc3Bvb24gY3JtZSBkZSBjYXNzaXMgKG9yIGVhdS1kZS12aWUsIGp1aWNlIG9yIG5lY3RhcikgYW5kIHNldCBhc2lkZSB0byBjb29sIHNsaWdodGx5LkJlYXQgZWdnIHdoaXRlcyBhbmQgc2FsdCBpbiBhIG1peGluZyBib3dsIHdpdGggYW4gZWxlY3RyaWMgbWl4ZXIgb24gaGlnaCBzcGVlZCB1bnRpbCBzb2Z0IHBlYWtzIGZvcm0uIENvbnRpbnVpbmcgdG8gYmVhdCwgZ3JhZHVhbGx5IGFkZCBzdWdhciBhbmQgYmVhdCB1bnRpbCBzdGlmZiBwZWFrcyBmb3JtLiBXaXRoIGEgcnViYmVyIHNwYXR1bGEsIGZvbGQgYWJvdXQgYSBmb3VydGggb2YgdGhlIGJlYXRlbiB3aGl0ZXMgaW50byB0aGUgcmVzZXJ2ZWQgcmFzcGJlcnJ5IHB1cmVlIHRvIGxpZ2h0ZW4gaXRzIHRleHR1cmUsIHRoZW4gcG91ciB0aGUgbWl4dHVyZSBvdmVyIHRoZSByZW1haW5pbmcgd2hpdGVzLiBHZW50bHkgZm9sZCB0aGUgcHVyZWUgYW5kIHdoaXRlcyB0b2dldGhlciB1bnRpbCBldmVubHkgYmxlbmRlZC4gU3Bvb24gdGhlIHNvdWZmbCBtaXh0dXJlIGludG8gdGhlIGN1cHMsIHNwcmVhZGluZyB0byB0aGUgZWRnZXMgb2YgdGhlIGN1cHMuU2V0IHRoZSBjdXBzIG9uIGEgYmFraW5nIHNoZWV0IGFuZCBiYWtlIGZvciAxMCBtaW51dGVzLCBvciB1bnRpbCBsaWdodGx5IGJyb3duZWQgb24gdGhlIHRvcC4gRHVzdCB3aXRoIGNvbmZlY3Rpb25lcnMgc3VnYXIgYW5kIHNlcnZlIGltbWVkaWF0ZWx5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkRvdWJsZSBSYXNwYmVycnkgU291ZmZsw6lzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDUxNTAyMSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTE1MDIxLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTA0MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzdGlja3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM1NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZSBjYW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTA3MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQxODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE4NjE3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMTM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiR3JlYXNlIGEgOcOXMTMgcGFuLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdG9nZXRoZXIgZ3JhaGFtIGNyYWNrZXIgY3J1c3QgYW5kIDHCvCBzdGlja3Mgb2YgYnV0dGVyLiBQcmVzcyBvdXQgaW4gcGFuLkluIG1peGVyLCBtaXggdG9nZXRoZXIgcG93ZGVyZWQgc3VnYXIsIDIgc3RpY2tzIG9mIGJ1dHRlciwgdmFuaWxsYSwgYW5kIGVnZ3MuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgb24gdG9wIG9mIGdyYWhhbSBjcmFja2VyIGNydXN0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgb3V0IGNydXNoZWQgcGluZWFwcGxlIG9uIHRvcCBvZiBzdWdhciBtaXh0dXJlLCB0aGVuIGFkZCBzbGljZWQgYmFuYW5hcy4gSSBhZGRlZCBjaGVycmllcyBuZXh0IGZvciBmdW4uSW4gbWl4ZXIsIGFkZCBoZWF2eSBjcmVhbSBhbmQgbWl4IG9uIG1lZGl1bSBoaWdoIHVudGlsIHNvZnQgcGVhay4gV2hlbiBhbG1vc3QgY29tcGxldGVkLCBhZGQgwr0gY3VwIHN1Z2FyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgd2hpcHBlZCBjcmVhbSBvdmVyIHRvcCBvZiBiYW5hbmFzLiBSZWZyaWdlcmF0ZSBmb3IgYXQgbGVhc3QgMiBob3VycywgKEkgd2FpdGVkIDEgaG91cnMgYW5kIGl0IHdhcyBmaW5lLilFbmpveSFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJBIENha2UgVG8gV2FybSBBbnkgSGVhcnQg4oCTIEJhbmFuYSBTcGxpdCBDYWtlXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk5OTA0NCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvOTk5MDQ0LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTAzNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYwNTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTI1NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTUyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjkxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldvcmtpbmcgaW4gYSBjb3VwbGUgb2YgYmF0Y2hlcywgcm91Z2hseSBjaG9wIHRoZSBjaGlja3BlYXMgYW5kIHBsYWNlIGluIGEgYm93bC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBtaW5jZWQgaGVyYnMgYW5kIHNjYWxsaW9ucyB0byB0aGUgY2hpY2twZWFzIGFuZCBnaXZlIGEgcXVpY2sgdG9zcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBzZXBhcmF0ZSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgbWF5bywgbGVtb24ganVpY2UsIGFuZCBvbGl2ZSBvaWwuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkN1dCB0aGUgYXZvY2FkbyBpbiBoYWxmLCByZW1vdmUgdGhlIHBpdCwgYW5kIGN1dCBlYWNoIGhhbGYgaW50byAgY3ViZXMgKHNlZSBub3RlKS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgaW4gdGhlIGJvd2wgYW5kIHBvdXIgdGhlIG1heW8gbWl4dHVyZSBvdmVyIHRoZSBjaGlja3BlYXMgYW5kIGF2b2NhZG8uIFRvc3MgdW50aWwgd2VsbCBjb21iaW5lLiBUYXN0ZSBhbmQgYWRkIHNhbHQvcGVwcGVyIHRvIHlvdXIgcHJlZmVycmVkIHRhc3RlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSBvbiBhIHNhbmR3aWNoIG9yIHdpdGggY3JhY2tlcnMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQXZvY2FkbyBDaGlja3BlYSBTYWxhZFwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzYWxhZFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc5ODA3MCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzk4MDcwLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkyMzYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyMCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MDk1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNZWx0IGJ1dHRlciBhbmQgYnJ1c2ggc29tZSBvZiB0aGUgYnV0dGVyIGFyb3VuZCB0aGUgc2xvdyBjb29rZXIuVXNpbmcgYSBzdGFuZCBtaXhlciwgY29tYmluZSBmbG91ciwgMS1jdXAgc3VnYXIsIGJha2luZyBwb3dkZXIsIGFuZCBzYWx0LiBUaGVuLCBhZGQgbWlsayBhbmQgcmVtYWluaW5nIG1lbHRlZCBjb29sZWQgYnV0dGVyLCBtaXhpbmcganVzdCB1bnRpbCBkcnkgaW5ncmVkaWVudHMgYXJlIG1vaXN0ZW5lZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciB0aGUgYmF0dGVyIGluIHRoZSBzbG93IGNvb2tlciBhbmQgcGxhY2UgdGhlIGZyb3plbiBwZWFjaGVzIG9uIHRvcC5Db29rIG9uIGhpZ2ggZm9yIDMgaG91cnMgd2l0aCBsaWQgb24gdG9wLiBPbmNlIHRoZSBjb2JibGVyIGlzIGRvbmUsIGRpdmlkZSBhbmQgc2VydmUgY29iYmxlciB3YXJtIHdpdGggaWNlIGNyZWFtIGFuZCB3aGlwcGVkIGNyZWFtIG9uIHRvcC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJTbG93IENvb2tlciBQZWFjaCBDb2JibGVyXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU3NDMxNyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTc0MzE3LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDg2MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzdHJpcHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNTExNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTMzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIxMTUyOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0MjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTEwMDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBsYXJnZSBtaXhpbmcgYm93bCwgYWRkIDEgY3VwIHdhcm0gd2F0ZXIsIDEgcGFjayByYXBpZCBvciBxdWljayB5ZWFzdCwgMSB0IHN1Z2FyIDEvMiB0IHNhbHQgYW5kIDEgVCBvbGl2ZSBvaWwuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB3ZWxsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgMiAxLzIgY3VwcyBmbG91ciBhbmQgbWl4LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgIGEgbGl0dGxlIG1vcmUgZmxvdXIgaWYgdG9vIHN0aWNreSBidXQgeW91IGFyZSBtYWtpbmcgYSBsaWdodCBkb3VnaCBub3QgYSBoZWF2eSBicmljay5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ292ZXIgYW5kIGxldCByaXNlIHVudGlsIGRvdWJsZSBpbiBzaXplLiBBYm91dCAzMC00MCBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlsZSBkb3VnaCBpcyByaXNpbmcsIHByZXAgYW55IHRvcHBpbmdzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IG92ZW4gMzc1IGNvbnZlY3Rpb24uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCB0aGUgZG91Z2ggb24gYSB3ZWxsIG9pbGVkIGxhcmdlIHBpenphIHBhbiBvciBjb29raWUgc2hlZXQuIE1lbHQgMiBUIGJ1dHRlciBpbiBhIG1pY3Jvd2F2ZSBmb3IgMTUtMjAgc2Vjb25kcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IDIgdCBnYXJsaWMgcG93ZGVyIGluIHRoZSBidXR0ZXIgYW5kIHNwcmVhZCB0aGlubHkgb3ZlciB0aGUgZG91Z2guXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvcCB3aXRoIGNoZWVzZXMgYW5kIG90aGVyIHRvcHBpbmdzIG9mIGNob2ljZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgaW4gb3ZlbiBmb3IgMjAgdG8gMjUgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiNCBDaGVlc2UgV2hpdGUgUGl6emFcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjczMzM3LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82NzMzMzctNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5ODk5OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDgwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTExNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDksXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgbWl4dHVyZSBpbnRvIHByZXBhcmVkIHBhbiwgdXNpbmcgeW91ciBoYW5kcyBwcmVzcyB0byBmbGF0dGVuLiBTZXQgYXNpZGUgZm9yIDEtMiBob3VycyB0byBzZXQuSW4gYSBzZXBhcmF0ZSBib3dsLCBjb21iaW5lIHBvd2RlcmVkIHN1Z2FyIHdpdGggbWlsayBhbmQgc3RpciB0byBjb21iaW5lLiBVc2luZyBhIHNwb29uLCBkcml6emxlIGdsYXplIG9uIHRvcCBvZiBjZXJlYWwgYmFycyBhbmQgZHVzdCB3aXRoIGNvbG9yZWQgc3VnYXIgb3Igc3ByaW5rbGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkNlcmVhbCBNYXJzaG1hbGxvdyBCYXJzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc2NDE4NCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzY0MTg0LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2MTUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MTU4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG8gaGFyZC1ib2lsIHRoZSBlZ2dzLCBwbGFjZSB0aGUgcmF3IGVnZ3MgYXQgdGhlIGJvdHRvbSBvZiBhIGxhcmdlIHBvdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciB3YXRlciBpbiB0aGUgcG90IHVudGlsIHRoZSB3YXRlciBpcyAxLTIgaW5jaGVzIG92ZXIgdGhlIHRvcCBvZiB0aGUgZWdncy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIHBvdCBvbiB0aGUgc3RvdmUgdG9wIHVuY292ZXJlZCBhbmQgdHVybiB0aGUgYnVybmVyIHRvIGhpZ2ggaGVhdC4gQnJpbmcgdGhlIHdhdGVyIGluIHRoZSBwb3QgdG8gYSBib2lsLiBXaGVuIHRoZSB3YXRlciBjb21lcyB0byBhIGZ1bGwgYm9pbCwgY292ZXIgdGhlIHBvdCB3aXRoIGEgbGlkIGFuZCB0dXJuIG9mZiB0aGUgaGVhdCB0byB0aGUgYnVybmVyLiBMZWF2ZSB0aGUgcG90IG9uIHRoZSBidXJuZXIsIGNvdmVyZWQsIGZvciAxMiBtaW51dGVzLldoaWxlIHRoZSBlZ2dzIHNpdCBpbiB0aGUgY292ZXJlZCBwb3QsIGZpbGwgYSBtaXhpbmcgYm93bCAgd2F5IHdpdGggaWNlIHdhdGVyLiBXaGVuIHRoZSB0aW1lIGlzIHVwIG9uIHRoZSBlZ2dzLCB1c2UgYSBzbG90dGVkIHNwb29uIHRvIHJlbW92ZSB0aGVtIGZyb20gdGhlIHBvdCBhbmQgdHJhbnNmZXIgdGhlbSB0byB0aGUgYm93bCBvZiBpY2Ugd2F0ZXIgdG8gc3RvcCB0aGVtIGZyb20gY29va2luZy4gTGVhdmUgdGhlbSBpbiB0aGUgYm93bCBvZiBpY2Ugd2F0ZXIgZm9yIGEgZmV3IG1pbnV0ZXMgdW50aWwgZnVsbHkgY29sZC5QZWVsIHRoZSBlZ2dzIHVuZGVyIGNvbGQgcnVubmluZyB3YXRlciAoSXZlIGZvdW5kIGl0cyBtdWNoIGVhc2llcikuIFNsaWNlIHRoZSBlZ2dzIGluIGhhbGYgbGVuZ3Rod2lzZSBhbmQgcmVtb3ZldGhlIHlvbGtzIGludG8gYSBtaXhpbmcgYm93bC4gVXNlIGEgZm9yayB0byBtYXNoIHRoZSB5b2xrcyBhcyBtdWNoIGFzIHlvdSBjYW4uIEkgdXN1YWxseSBhZGQgYSBsaXR0bGUgc3BsYXNoIG9mIHdhdGVyIHRvIHRoZSBtYXNoZWQgZWdnIHlvbGtzIGFuZCBtYXNoIGFnYWluLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGJsYWNrIHBlcHBlciwgaHVtbXVzLCBob3Qgc2F1Y2UgYW5kIG11c3RhcmQgYW5kIHN0aXIgdG9nZXRoZXIgdW50aWwgd2VsbCBjb21iaW5lZCBhbmQgbW9zdGx5IHNtb290aC4gU3Bvb24gb3IgcGlwZSB0aGlzIGZpbGxpbmcgYmFjayBpbnRvIHRoZSBob2xsb3dzIG9mIHRoZSBlZ2cgd2hpdGVzLiBTcHJpbmtsZSBwYXByaWthIG92ZXIgdGhlIHRvcHMgb2YgdGhlIGVnZ3MgYW5kIHNlcnZlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkh1bW11cyBEZXZpbGVkIEVnZ3NcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA2NDAyLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy8yMDY0MDItNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIxNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MjA2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNi44LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkyMTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MjE2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MjE2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlzayB0b2dldGhlciBldmFwb3JhdGVkIG1pbGssIHB1ZGRpbmcgbWl4LCBhbmQgemVzdCBpbiBhIGJvd2wgZm9yIDIgbWludXRlcyBvciB1bnRpbCBtaXh0dXJlIGlzIHRoaWNrZW5lZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmVhdCBjcmVhbSBjaGVlc2UgYW5kIHZhbmlsbGEgYXQgbWVkaXVtIHNwZWVkIHdpdGggYW4gZWxlY3RyaWMgbWl4ZXIgdW50aWwgZmx1ZmZ5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgb3JhbmdlIGp1aWNlIGNvbmNlbnRyYXRlLCBiZWF0aW5nIHVudGlsIHNtb290aDsgYWRkIGV2YXBvcmF0ZWQgbWlsayBtaXh0dXJlLCBhbmQgYmVhdCB1bnRpbCBibGVuZGVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIGludG8gY3J1c3QuIENvdmVyIGFuZCBjaGlsbCA4IGhvdXJzIG9yIHVudGlsIGZpcm0uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvbWJpbmUgY3JlYW0gYW5kIGNvbmZlY3Rpb25lcidzIHN1Z2FyIGluIGEgYm93bCBhbmQgd2hpcCB3aXRoIGEgd2hpc2sgdW50aWwgaXQgaG9sZHMgc29mdCBwZWFrcy4gRG9sbG9wIG9yIHBpcGUgZWFjaCBzbGljZSB3aXRoIHdoaXBwZWQgY3JlYW0sIGFuZCBnYXJuaXNoIHdpdGggY2FuZGllZCB6ZXN0IG9yIGNhbmR5IGlmIGRlc2lyZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQ3JlYW1zaWNsZSBQaWVcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDQ2NTc3LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy80NDY1NzctNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwNTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4xMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDQxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBiYWNvbiBpbiBhIGxhcmdlLCBkZWVwIHNraWxsZXQuIENvb2sgb3ZlciBtZWRpdW0gaGlnaCBoZWF0IHVudGlsIHRoZSBmYXQgYmVnaW5zIHRvIHJlbmRlci4gU3RpciBpbiBvbmlvbnMgYW5kIGdhcmxpYzsgbGV0IGNvb2sgZm9yIDEgbWludXRlLiBTdGlyIGluIGJlYW5zIGFuZCB3YXRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTGV0IHRoZSBiZWFucyBjb29rIHVudGlsIHRoZSB3YXRlciBoYXMgZXZhcG9yYXRlZCBhbmQgdGhlIGJlYW5zIGFyZSB0ZW5kZXIuIElmIHRoZSBiZWFucyBhcmUgbm90IHRlbmRlciBvbmNlIHRoZSB3YXRlciBoYXMgZXZhcG9yYXRlZCwgYWRkIGEgc21hbGwgYW1vdW50IG1vcmUgd2F0ZXIgYW5kIGxldCB0aGVtIGNvb2sgdW50aWwgdGVuZGVyLiBTZWFzb24gd2l0aCBzYWx0IGFuZCBwZXBwZXIgKHRvIHRhc3RlKSBhbmQgc2VydmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiU21vdGhlcmVkIEdyZWVuIEJlYW5zXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU3NjkwNixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTc2OTA2LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE5NTksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDA0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MjUyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkyNTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDM0MDgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE2NzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic3ByaWdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMTU1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBtZWRpdW0gYm93bCBhZGQgdGhlIHBlYXIganVpY2UgYW5kIHZpbmVnYXIuIFdoaWxlIHdoaXNraW5nLCBzbG93bHkgc3RyZWFtIGluIHRoZSBvbGl2ZSBvaWwuIFNjcmFwZSB0aGUgbGVhdmVzIG9mZiBvZiB0d28gc3ByaWdzIG9mIHRoeW1lIGFuZCBhZGQgaW4gdGhlIGJsYWNrIHBlcHBlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgdG8gY29tYmluZVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBc3NlbWJsZSByb21haW5lIGxlYXZlcyBhbmQgdG9wIHdpdGggc2xpY2VkIHBlYXIsIHNoYWxsb3QsIHRvYXN0ZWQgd2FsbnV0cywgYmx1ZSBjaGVlc2UgYW5kIHNlYXNvbiB3aXRoIHNlYSBzYWx0IHRvIHRhc3RlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJEcml6emxlIHdpdGggZGVzaXJlZCBhbW91bnQgb2YgdGhlIHBlYXIgdmluYWlncmV0dGUgYW5kIGVuam95IVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlBlYXIgJiBXYWxudXQgU2FsYWQgd2l0aCBhIFBlYXIgVmluYWlncmV0dGVcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2FsYWRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1MDQyMTgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzUwNDIxOC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExNjkzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNhbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExMjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExOTEzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMzMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDaG9wIGFsbCB0aGUgdmVnZ2llcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2F1dGUgdGhlIG9uaW9uIGFuZCBnYXJsaWMgaW4gYSBsYXJnZSBza2lsbGV0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgaW4gdGhlIGNhcnJvdHMgYW5kIHNhdXRlIGZvciBhIGZldyBtaW51dGVzLCBjb3ZlcmluZyB0byBjb29rIGZvciBhYm91dCA1IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBpbiB0aGUgb3RoZXIgdmVnZ2llcyBhbmQgc2Vhc29uaW5ncyBhbmQgbGV0IGl0IGNvb2sgdW50aWwgdGhlIHZlZ2dpZXMgYXJlIHRlbmRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgaG90IG92ZXIgY29ybmJyZWFkIHdpdGggc2hyZWRkZWQgY2hlZXNlIGFuZCBzb3VyIGNyZWFtLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIk1leGljYW4gVmVnZXRhYmxlcyBvbiBDb3JuYnJlYWRcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDQ1MTk2LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy80NDUxOTYtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2MTUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjIwNDQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMjAyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEzMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5Mjk2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4xMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNTE1MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbm9uc3RpY2sgc2tpbGxldCBjb2F0ZWQgd2l0aCBjb29raW5nIHNwcmF5LCBzYXV0ZSBvbmlvbiBhbmQgZ3JlZW4gcGVwcGVyIGZvciAzLTQgbWludXRlcyBvciB1bnRpbCBjcmlzcC10ZW5kZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvbWJpbmUgdGhlIGJhcmJlY3VlIHNhdWNlLCBob25leSwgYmFzaWwsIGdhcmxpYyBwb3dkZXIgYW5kIHBlcHBlcjsgcG91ciBvdmVyIHZlZ2V0YWJsZXMuIEJyaW5nIHRvIGEgYm9pbCBvdmVyIG1lZGl1bS1oaWdoIGhlYXQsIHN0aXJyaW5nIGNvbnN0YW50bHkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBzaHJpbXA7IGNvb2sgYW5kIHN0aXIgZm9yIDMtNSBtaW51dGVzIG9yIHVudGlsIHNocmltcCB0dXJuIHBpbmsuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIHdpdGggcmljZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCYXJiZWN1ZSBTaHJpbXAgU3Rpci1GcnlcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc1OTUzNCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzU5NTM0LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYwMTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGJzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDk5MjIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTE2NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIxODM2NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCI4LWluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGJzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExMTA5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNjExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiB0byA0NTDCsEYuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkhlYXQgb2lsIGluIHNhdWNlcGFuIG92ZXIgbWVkaXVtLWhpZ2ggaGVhdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIG9uaW9uLCBhbmQgY29vayA1IG1pbnV0ZXMsIG9yIHVudGlsIHRyYW5zbHVjZW50LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZ2FybGljIGFuZCBjdW1pbiwgYW5kIGNvb2sgMSBtaW51dGUgbW9yZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2Ugb25pb24gbWl4dHVyZSBpbiBibGVuZGVyIHdpdGggYmVhbnMsIGNoaXBvdGxlIGNoaWxlLCBicm93biBzdWdhciwgYW5kIDMgVGJzLiB3YXRlci4gQmxlbmQgdW50aWwgc21vb3RoLiBTZWFzb24gd2l0aCBzYWx0IGFuZCBwZXBwZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIDIgdG9ydGlsbGFzIGVhY2ggb24gMiBiYWtpbmcgc2hlZXRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgYmVhbiBtaXh0dXJlIG9uIHRvcnRpbGxhcywgYW5kIGJha2UgNSB0byA3IG1pbnV0ZXMsIG9yIHVudGlsIGVkZ2VzIGJlY29tZSBnb2xkZW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvc3Mgc2xhdyBpbiBib3dsIHdpdGggY2lsYW50cm8gYW5kIGxpbWUganVpY2UuIFNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlci4gVG9wIGVhY2ggY2xheXVkYSB3aXRoIHNsYXcsIGFuZCBjdXQgaW50byB0cmlhbmdsZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQ2xheXVkYXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTg4ODkzLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81ODg4OTMtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ1NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJoYW5kZnVsc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI2OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMDA1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2UgY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDUxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbWVkaXVtIHNpemVkIHBvdCBjb21iaW5lIHRoZSBmYXJybyB3aXRoIHRoZSA1IGN1cHMgb2Ygd2F0ZXIgYW5kIDIgdGVhc3Bvb25zIHNhbHQuIEJyaW5nIHRvIGEgYm9pbCwgdGhlbiBsb3dlciB0byBhIHNpbW1lciBhbmQgY29vayBmb3IgYWJvdXQgMjUgbWludXRlcyBmb3Igc2VtaS1wZWFybGVkIGZhcnJvIGFuZCA1MCBtaW51dGVzIGZvciB3aG9sZSBmYXJyby4gVGhlIGZhcnJvIGlzIGRvbmUgd2hlbiB0aGUgZ3JhaW5zIGFyZSB0ZW5kZXIgYW5kIGFsbCB0aGUgd2F0ZXIgaGFzIGJlZW4gYWJzb3JiZWQuIFNldCBhc2lkZS5XaGlsZSB0aGUgZmFycm8gaXMgY29va2luZywgY29tYmluZSB0aGUgc2hpaXRha2UgbXVzaHJvb21zIHdpdGggMSBjdXAgb2YgYm9pbGluZyB3YXRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTGV0IHNpdCBmb3IgMTUgbWludXRlcyBvciBob3dldmVyIGxvbmcgdGhlIHBhY2thZ2UgaW5zdHJ1Y3Rpb25zIHNheSBpcyBuZWVkZWQgdG8gcmVjb25zdGl0dXRlIHRoZSBtdXNocm9vbXMuIFdoZW4gZG9uZSwgcmVtb3ZlIHRoZSBtdXNocm9vbXMgZnJvbSB0aGUgd2F0ZXIgYW5kIGNob3AsIHJlc2VydmluZyB0aGUgbGlxdWlkLkFib3V0IDJvIG1pbnV0ZXMgYmVmb3JlIHRoZSBmYXJybyBpcyBkb25lIHdhcm0gdGhlIG9saXZlIG9pbCBpbiBhIGxhcmdlIHNraWxsZXQuIENvb2sgdGhlIG9uaW9uLCBzdGlycmluZyBmcmVxdWVudGx5LCBmb3IgYWJvdXQgNSBtaW51dGVzIG9yIHVudGlsIHRyYW5zbHVjZW50IGFuZCBiZWdpbm5pbmcgdG8gZ2V0IHNvbWUgY29sb3IuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgZ2FybGljIGFuZCBjcnVzaGVkIHJlZCBwZXBwZXIgZmxha2VzIChpZiB1c2luZyksIGNvb2sgMSBtaW51dGUgbG9uZ2VyLCB1bnRpbCBmcmFncmFudC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBjaG9wcGVkIG11c2hyb29tcywgbXVzaHJvb20gYnJvdGggYW5kIGEgZmV3IGJpZyBoYW5kZnVscyBvZiBiYWJ5IHNwaW5hY2guIENvb2ssIHN0aXJyaW5nIGZyZXF1ZW50bHksIHVudGlsIHRoZSBzcGluYWNoIGhhcyB3aWx0ZWQgYW5kIG1vc3Qgb2YgdGhlIGxpcXVpZCBoYXMgZXZhcG9yYXRlZC4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyIHRvIHRhc3RlLlN0aXIgaW4gdGhlIGZhcnJvLCBtaXhpbmcgd2l0aCBhIGxhcmdlIHNwb29uIHRvIGNvbWJpbmUgd2VsbC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgdG9wcGVkIHdpdGggc2hyZWRkZWQgUGFybWVzYW4gY2hlZXNlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkZhcnJvIHdpdGggU2hpaXRha2UgTXVzaHJvb21zIGFuZCBCYWJ5IFNwaW5hY2hcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYxNTU4MSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjE1NTgxLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA2OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTE1NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTE2NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkyOTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDAyNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTExOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJoZWFkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNTE1MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTExMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJoZWFkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTYxNjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDk4OTYyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgbWF5bywgY2hpbGkgc2F1Y2UgYW5kIHNyaXJhY2hhLCB0aGVuIHNldCBpdCBhc2lkZSB1bnRpbCByZWFkeSB0byB1c2UuVG9zcyB0aGUgc2hyaW1wIHdpdGggdGhlIGNvcm5zdGFyY2ggdW50aWwgZXZlbmx5IGNvYXRlZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSGVhdCB0aGUgY2Fub2xhIG9pbCBpbiBhIGxhcmdlIHNraWxsZXQgb3ZlciBoaWdoIGhlYXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgc2hyaW1wIGFuZCBjb29rIHVudGlsIGl0IGp1c3QgdHVybnMgcGluayBhbmQgb3BhcXVlLCBhYm91dCAzIG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRyYW5zZmVyIHRoZSBzaHJpbXAgdG8gYSBsYXJnZSBib3dsIGFuZCB0b3NzIHdpdGggdGhlIG1heW8gbWl4dHVyZS5JbiBhIHNlcGFyYXRlIGJvd2wsIGFkZCB0aGUgY2FiYmFnZSBhbmQgbGV0dHVjZS4gVG9zcyB3aXRoIHRoZSBvbGl2ZSBvaWwsIHZpbmVnYXIgYW5kIGhvbmV5IHVudGlsIHdlbGwgY29hdGVkLiBUb3NzIHRoZSBjaWxhbnRybyBpbi4gVG8gc2VydmUgdGhlIHNocmltcCwgbWl4IHdpdGggdGhlIHNsYXcgYW5kIGdhcm5pc2ggdGhlIGVudGlyZSB0aGluZyB3aXRoIGNoaXZlcy4gRW5qb3khXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQmFuZyBCYW5nIFNocmltcCB3aXRoIE5hcGEgQ2FiYmFnZSBTbGF3XCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3NjQ4MTAsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc2NDgxMC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMzU3MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IHRoZSBvdmVuIHRvIDM1MEYuU3ByYXkgYmFraW5nIHNoZWV0cyB3aXRoIGNvb2tpbmcgc3ByYXkgb3Igc3ByZWFkIGEgdGhpbiBsYXllciBvZiBvbGl2ZSBvaWwgb3ZlciB0aGVtLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggYWxsIG9mIHRoZSBpbmdyZWRpZW50cyB0b2dldGhlciB2ZXJ5IHdlbGwgLS0geW91J2xsIG5lZWQgdG8gdXNlIHlvdXIgaGFuZHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJvbGwgaW50byBiYWxscyB0aGUgc2l6ZSBvZiBhIGdvbGYgYmFsbCwgbW9sZGluZyB0aGVtIGZpcm1seSB0b2dldGhlciB3aXRob3V0IHBhY2tpbmcgdGhlbS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIGJhbGxzIG9uIGJha2luZyBzaGVldHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDMwIHRvIDQwIG1pbnV0ZXMsIG9yIHVudGlsIHRoZSBjZW50ZXIgcmVnaXN0ZXJzIDE2MEYgb24gYSBtZWF0IHRoZXJtb21ldGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgZnJvbSBvdmVuIGFuZCB1c2UgYXMgbmVlZGVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkhvbWVtYWRlIEl0YWxpYW4gTWVhdGJhbGxzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc5OTczMixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzk5NzMyLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTEyNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTQzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInJpYlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA1MDY0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTYwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDA5MTU5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQ2NDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTg5OTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzE2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIGJvd2wsIG1peCB0aGUgZmlyc3Qgc2l4IGluZ3JlZGllbnRzLiBTdGlyIGluICBjaGlja2VuLCBjZWxlcnkgYW5kIG9uaW9uLiBSZWZyaWdlcmF0ZSwgY292ZXJlZCwgYXQgbGVhc3QgMSBob3VyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUbyBzZXJ2ZSwgc3RpciBzdHJhd2JlcnJpZXMgaW50byBjaGlja2VuIG1peHR1cmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIG92ZXIgbGV0dHVjZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJDdXJyaWVkIFN0cmF3YmVycnkgQ2hpY2tlbiBTYWxhZFwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzYWxhZFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYyMTIxMyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjIxMjEzLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNsaWNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTA5MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNtYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTE4MjEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTE0NTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE1MjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTYXV0ZSBvbmlvbiBpbiAxIHRic3AuIE9saXZlIE9pbCBmb3IgYSBmZXcgbWludXRlcyB1bnRpbCBzb2Z0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZ2FybGljIGFuZCBjb29rIGZvciA0NS02MCBzZWNvbmRzLCB0aGVuIGFkZCBzcGluYWNoLiBQdXQgYWxsIHRoZSBzcGljZXMgaW4gdGhlcmUgZXhjZXB0IGZvciAxLzQgdHNwLiBvZiB0aGUgbGlxdWlkIHNtb2tlLCB0aHltZSwgYW5kIHJvc2VtYXJ5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMZXQgd2lsdCBhbmQgdGhlbiBhZGQgY3JlYW0gY2hlZXNlLiBTZXQgYXNpZGUuUHJlaGVhdCBvdmVuIHRvIDM1MEYuTGF5IHBvcmsgdGVuZGVybG9pbiBvbiBjdXR0aW5nIGJvYXJkIGFuZCBjb3ZlciB3aXRoIHNhcmFuIHdyYXAsIHRoZW4gcG91bmQgd2l0aCBtZWF0IGhhbW1lciB1bnRpbCBmbGF0IC0gY3V0IHRoZSB1bmV2ZW4gc2lkZXMgc28gaXQgZ29lcyBzcXVhcmUuIFNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlciwgdGhlbiAxLzQgdHNwLiBsaXF1aWQgc21va2UuTWFrZSBhIGJhY29uIHdlYXZlIHRoZSBzYW1lIHNpemUgYXMgdGhlIHBvcmsgdGVuZGVybG9pbiBzcXVhcmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCBzcGluYWNoIGFuZCBjcmVhbSBjaGVlc2UgYWxsIG92ZXIgdGhlIHBvcmsgdGVuZGVybG9pbiwgdGhlbiBsYXkgdGVuZGVybG9pbiBvbiB0b3Agb2YgYmFjb24uIFNsaWNlIHRoZSBwaWVjZXMgb2YgYmFjb24gdGhhdCBwb2tlIG91dC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUm9sbCBpdCB1cC4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyIGFuZCB0aGUgcmVtYWluaW5nIDEvNCB0c3AuIG9mIHRoeW1lIGFuZCByb3NlbWFyeS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRvb3RocGlja3Mgd2hlcmUgdGhlIGJhY29uIGVuZHMgYXJlIHNvIHRoYXQgaXQgZG9lc24ndCBmYWxsIGFwYXJ0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciA3NSBtaW51dGVzIG9yIHVudGlsIHRoZXJtb21ldGVyIHJlYWRzIDE0MEYuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNhdXRlIGJyb2Njb2xpLCBwZXBwZXJzLCBhbmQgdG9tYXRvZXMgaW4gdGhlIHJlbWFpbmluZyBmYXQgaW4gdGhlIGJvdHRvbSBvZiB0aGUgcGFuIG9mIHRoZSBwb3JrIHRlbmRlcmxvaW4gd2hpbGUgaXQgcmVzdHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQmFjb24gV3JhcHBlZCBTdHVmZmVkIFBvcmsgVGVuZGVybG9pblwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjExODU4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MTE4NTgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTE1NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxOTkwMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCBvdmVuIHRvIDM1MEYuIExpbmUgYSA4eDgtaW5jaCBiYWtpbmcgcGFuIHdpdGggZm9pbCBhbmQgc3ByYXkgd2l0aCBub24tc3RpY2sgY29va2luZyBzcHJheS5JbiBhIG1lZGl1bSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgZmxvdXIsIGJha2luZyBwb3dkZXIsIGJha2luZyBzb2RhLCBhbmQgc2FsdC5JbiB0aGUgYm93bCBvZiBhIHN0YW5kIG1peGVyIGZpdHRlZCB3aXRoIHRoZSBwYWRkbGUgYXR0YWNobWVudCBvciBpbiBhIGxhcmdlIGJvd2wgd2l0aCBhbiBlbGVjdHJpYyBtaXhlciwgY29tYmluZSB0aGUgbWVsdGVkIGJ1dHRlciBhbmQgYnJvd24gc3VnYXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBlZ2cgYW5kIHZhbmlsbGEsIG1peGluZyB1bnRpbCB3ZWxsIGNvbWJpbmVkLiBHcmFkdWFsbHkgYWRkIGluIGRyeSBpbmdyZWRpZW50cyBhbmQgbWl4IHVudGlsIGp1c3QgY29tYmluZWQuIFN0aXIgaW4gY2hvY29sYXRlIGNoaXBzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgaGFsZiB0aGUgZG91Z2ggaW50byB0aGUgcHJlcGFyZWQgcGFuLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgUm9sb3MgZXZlbmx5IG9udG8gdGhlIGNvb2tpZSBkb3VnaC4gVXNpbmcgYSBzbWFsbCBjb29raWUgc2Nvb3AsIGV2ZW5seSBkaXN0cmlidXRlIHRoZSByZXN0IG9mIHRoZSBjb29raWUgZG91Z2ggb24gdG9wIG9mIHRoZSBSb2xvcy4gVGhlcmUgaXMgbmVlZCB0byBzcHJlYWQgZXZlbmx5IG92ZXIgdGhlIFJvbG9zLCB0aGlzIHdpbGwgaGFwcGVuIG5hdHVyYWxseSBkdXJpbmcgdGhlIGJha2luZyBwcm9jZXNzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGluIHRoZSBwcmVoZWF0ZWQgb3ZlbiB1bnRpbCBhIHRvb3RocGljayBpbnNlcnRlZCBpbiB0aGUgY2VudGVyIGNvbWVzIG91dCBjbGVhbiwgYWJvdXQgMjAgdG8gMjUgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHBhbiB0byB3aXJlIHJhY2sgYW5kIGNvb2wgY29tcGxldGVseS5JZiBkZXNpcmVkLCBkcml6emxlIHdpdGggbWVsdGVkIGNob2NvbGF0ZSBvciBjYXJhbWVsIGJlZm9yZSBzZXJ2aW5nLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlJvbG8gQ29va2llIEJhcnNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTkxMTM2LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy85OTExMzYtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5ODg3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5Mjk2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2MTY4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1NTA2MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIGNoaWNrZW4gaW4gYSAzLXF0LiBzbG93IGNvb2tlci4gVG9zcyB3aXRoIDIgdGFibGVzcG9vbnMgaG90IHNhdWNlIGFuZCBwZXBwZXI7IGNvb2ssIGNvdmVyZWQsIG9uIGxvdyB1bnRpbCB0ZW5kZXIsIDMtNCBob3Vycy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGNoaWNrZW47IGRpc2NhcmQgY29va2luZyBqdWljZXMuIEluIGEgc21hbGwgc2F1Y2VwYW4sIGNvbWJpbmUgYnV0dGVyLCBob25leSBhbmQgcmVtYWluaW5nIGhvdCBzYXVjZTsgY29vayBhbmQgc3RpciBvdmVyIG1lZGl1bSBoZWF0IHVudGlsIGJsZW5kZWQuIFNocmVkIGNoaWNrZW4gd2l0aCB0d28gZm9ya3M7IHN0aXIgaW50byBzYXVjZSBhbmQgaGVhdCB0aHJvdWdoLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSBvbiByb2xscyB3aXRoIG9wdGlvbmFsIGluZ3JlZGllbnRzIGFzIGRlc2lyZWQuIEZyZWV6ZSBvcHRpb246IEZyZWV6ZSBjb29sZWQgY2hpY2tlbiBtaXh0dXJlIGluIGZyZWV6ZXIgY29udGFpbmVycy4gVG8gdXNlLCBwYXJ0aWFsbHkgdGhhdyBpbiByZWZyaWdlcmF0b3Igb3Zlcm5pZ2h0LiBNaWNyb3dhdmUsIGNvdmVyZWQsIG9uIGhpZ2ggaW4gYSBtaWNyb3dhdmUtc2FmZSBkaXNoIHVudGlsIGhlYXRlZCB0aHJvdWdoLCBzdGlycmluZyBvY2Nhc2lvbmFsbHkgYW5kIGFkZGluZyBhIGxpdHRsZSB3YXRlciBvciBicm90aCBpZiBuZWNlc3NhcnkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQnVmZmFsbyBDaGlja2VuIFNsaWRlcnNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU4MzczOCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTgzNzM4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjA5OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTkxNTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiB0byAzNTDCsEYuIExpbmUgdHdvIGJha2luZyBzaGVldHMgd2l0aCBwYXJjaG1lbnQgcGFwZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvbWJpbmUgdGhlIGZsb3VyLCBiYWtpbmcgc29kYSBhbmQgc2FsdCBpbiBhIG1lZGl1bSBib3dsLiBTZXQgYXNpZGUuSW4gdGhlIGJvd2wgb2YgYSBzdGFuZCBtaXhlciwgYmVhdCB0aGUgYnV0dGVyLCBwZWFudXQgYnV0dGVyIGFuZCBzdWdhcnMsIHVudGlsIGxpZ2h0IGFuZCBmbHVmZnkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBpbiB0aGUgZWdnIGFuZCB2YW5pbGxhLkdyYWR1YWxseSBhZGQgaW4gdGhlIGZsb3VyIG1peHR1cmUgb24gbG93IHNwZWVkLiBTdGlyIHVudGlsIGRvdWdoIGZvcm1zLiBUaGVuIHN0aXIgaW4gUmVlc2UncyBQaWVjZXMgYnkgaGFuZC5Vc2luZyBhIGNvb2tpZSBkb3VnaCBzY29vcCBvciB5b3VyIGhhbmRzLCBmb3JtIGJhbGxzIG9mIGRvdWdoIHdpdGggMSBoZWFwaW5nIHRhYmxlc3Bvb24gb2YgZG91Z2guIEdlbnRseSBmbGF0dGVuIGNvb2tpZSBkb3VnaCAodG8gZm9ybSBhIGRpc2sgc2hhcGUpIGFuZCBwbGFjZSBvbiBwcmVwYXJlZCBiYWtpbmcgc2hlZXRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciA5IG1pbnV0ZXMgYW5kIHJlbW92ZSBmcm9tIG92ZW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCBjb29sIGZvciA1IG1pbnV0ZXMgYmVmb3JlIHRyYW5zZmVycmluZyBjb29raWVzIHRvIGEgd2lyZSByYWNrIHRvIGNvb2wgY29tcGxldGVseS5Ob3RlOiBDb29raWVzIHdpbGwgbm90IHNwcmVhZCBtdWNoIGF0IGFsbCBhbmQgd2lsbCBsb29rIGxpa2UgdGhleSBhcmUgbm90IGRvbmUgYmFraW5nLiBCdXQgSSBwcm9taXNlIHRoZXkgYXJlISBPbmNlIHRoZXkgZmluaXNoIGNvb2xpbmcsIHRoZSBjb29raWUgYW5kIGNob2NvbGF0ZSB3aWxsIGJlY29tZSBmaXJtIGFuZCB5b3Ugd2lsbCBoYXZlIGEgbWFnaWNhbGx5IHNvZnQgYW5kIGNydW1ibHkgY29va2llIVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlJlZXNlJ3MgUGllY2VzIFBlYW51dCBCdXR0ZXIgQ29va2llc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MDEyMTYsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYwMTIxNi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNDEwMDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTg0MTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGVhdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTExNTI5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2F1dGUgdGhlIHp1Y2NoaW5pIGluIHRoZSBvbGl2ZSBvaWwgb24gaGlnaCBoZWF0LiBTZWFzb24gZ2VuZXJvdXNseSB3aXRoIHNhbHQgYW5kIHBlcHBlci4gU3RpciBhbmQgbGVhdmUgYWxvbmUgZm9yIGEgbGl0dGxlIHdoaWxlLCBzbyB5b3UgZ2V0IGEgbGl0dGxlIGJpdCBvZiB0ZXh0dXJlIGZyb20gdGhlIGJyb3duaW5nIG9uIHRoZSB6dWNjaGluaS5XaGlsZSB5b3XigJlyZSBzYXV0ZWluZywgdG9hc3QgdGhlIGZsYXRicmVhZCBpbiB0aGUgb3ZlbiBhdCA0MDAgZGVncmVlcy5XaGVuIHRoZSB6dWNjaGluaSBpcyBzb2Z0IGFuZCBqdXN0IHNsaWdodGx5IGJyb3duZWQsIHJlbW92ZSBmcm9tIHRoZSBoZWF0LiBUYWtlIHRoZSBmbGF0YnJlYWQgb3V0IG9mIHRoZSBvdmVuIGFuZCBzcHJlYWQgdGhlIHp1Y2NoaW5pIG9uIHRoZSBmbGF0YnJlYWQuVG9wIHdpdGggdGhlIGZyZXNoIHRvbWF0b2VzLCBjaGVlc2UsIGFuZCBmcmVzaCBiYXNpbC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0LCBzZXJ2ZSwgYW5kIGVuam95IVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkZhcm1lcuKAmXMgTWFya2V0IEZsYXRicmVhZCBQaXp6YVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMjY1NjIsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzIyNjU2Mi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwMTksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgwNzksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MDY5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTEyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDc5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTY1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAxNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTkzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMTUxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExODIxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDY2MTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldhc2ggdGhlIGxlbnRpbHMgYW5kIHBsYWNlIGludG8gYSBwb3QgYWxvbmcgd2l0aCB0aGUgdmVnZXRhYmxlIGJyb3RoLiBCcmluZyB0byBhIGJvaWwsIHRoZW4gcmVkdWNlIGhlYXQgdG8gbWVkaXVtLWxvdyBhbmQgc2ltbWVyLCBmb3IgYWJvdXQgNDAgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIG1vcmUgYnJvdGggb3Igd2F0ZXIgaWYgbmVjZXNzYXJ5XCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1lYW53aGlsZSwgd2FybSB0aGUgb2lsIGluIGEgcGFuLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIG9uaW9ucyBhbmQgY29vayBmb3IgYWJvdXQgNCBtaW51dGVzIG9yIHVudGlsIHNvZnQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgY2Fycm90cywgYmVsbCBwZXBwZXIgYW5kIGdhcmxpYy4gQ29vayBmb3IgYWJvdXQgMyBtaW51dGVzIG1vcmUuIFNldCBhc2lkZS5XaGVuIHRoZSBsZW50aWxzIGFyZSByZWFkeSBtYXNoIHRoZW0gc2xpZ2h0bHkgd2l0aCBhIHBvdGF0byBtYXNoZXIgb3IgYSBmb3JrLlByZWhlYXQgdGhlIG92ZW4gdG8gMzUwwrogRi5JbiBhIGxhcmdlIGJvd2wsIG1peCB0aGUgb25pb24gbWl4dHVyZSwgbWFzaGVkIGxlbnRpbHMsIGFwcGxlIHNhdWNlLCBjcmFuYmVycmllcywgcGlzdGFjaGlvcywgYnJlYWQgY3J1bWJzLCBjaWxhbnRybywgY2hpbGkgcG93ZGVyLCBjdW1pbiwgdGh5bWUsIHNhbHQgYW5kIHBlcHBlci5MaW5lIGEgbG9hZiBwYW4gd2l0aCBwYXJjaG1lbnQgcGFwZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRyYW5zZmVyIHRoZSBtaXh0dXJlIHRvIHRoZSBsb2FmIHBhbiBhbmQgcHJlc3MgbWl4dHVyZSBpbnRvIHRoZSBwYW4gd2l0aCBhIHNwb29uLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdGhlIGdsYXplIGluZ3JlZGllbnRzIGluIGEgc21hbGwgYm93bCBhbmQgc3ByZWFkIGV2ZW5seSBvdmVyIHRoZSB0b3AuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIGFib3V0IDQ1IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRyYW5zZmVyIHRoZSBwYW4gdG8gYSB3aXJlIHJhY2sgYW5kIGxldCB0aGUgbG9hZiBjb29sIGEgYml0LiBSdW4gYSB0YWJsZSBrbmlmZSBhcm91bmQgdGhlIGVkZ2Ugb2YgdGhlIHBhbiBhbmQgdHVybiB0aGUgbG9hZiBvdXQgb250byBhIHNlcnZpbmcgcGxhdGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiVmVnYW4gTGVudGlsIExvYWZcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjA1MTMyLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MDUxMzItNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgaGVhdnkgc2F1Y2VwYW4sIHN0aXIgdG9nZXRoZXIgdGhlIG1pbGsgYW5kIDEvNCBjdXAgb2Ygc3VnYXIuIEJyaW5nIHRvIGEgYm9pbCBvdmVyIG1lZGl1bSBoZWF0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG1lZGl1bSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgZWdnIHlvbGtzIGFuZCBlZ2cuIFN0aXIgdG9nZXRoZXIgdGhlIHJlbWFpbmluZyBzdWdhciBhbmQgY29ybnN0YXJjaDsgdGhlbiBzdGlyIHRoZW0gaW50byB0aGUgZWdnIHVudGlsIHNtb290aC4gV2hlbiB0aGUgbWlsayBjb21lcyB0byBhIGJvaWwsIGRyaXp6bGUgaXQgaW50byB0aGUgYm93bCBpbiBhIHRoaW4gc3RyZWFtIHdoaWxlIG1peGluZyBzbyB0aGF0IHlvdSBkbyBub3QgY29vayB0aGUgZWdncy4gUmV0dXJuIHRoZSBtaXh0dXJlIHRvIHRoZSBzYXVjZXBhbiwgYW5kIHNsb3dseSBicmluZyB0byBhIGJvaWwsIHN0aXJyaW5nIGNvbnN0YW50bHkgc28gdGhlIGVnZ3MgZG9uJyB0IGN1cmRsZSBvciBzY29yY2ggb24gdGhlIGJvdHRvbS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hlbiB0aGUgbWl4dHVyZSBjb21lcyB0byBhIGJvaWwgYW5kIHRoaWNrZW5zLCByZW1vdmUgZnJvbSB0aGUgaGVhdC4gU3RpciBpbiB0aGUgYnV0dGVyIGFuZCB2YW5pbGxhLCBtaXhpbmcgdW50aWwgdGhlIGJ1dHRlciBpcyBjb21wbGV0ZWx5IGJsZW5kZWQgaW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgaW50byBhIGhlYXQtcHJvb2YgY29udGFpbmVyIGFuZCBwbGFjZSBhIHBpZWNlIG9mIHBsYXN0aWMgd3JhcCBkaXJlY3RseSBvbiB0aGUgc3VyZmFjZSB0byBwcmV2ZW50IGEgc2tpbiBmcm9tIGZvcm1pbmcuIFJlZnJpZ2VyYXRlIHVudGlsIGNoaWxsZWQgYmVmb3JlIHVzaW5nLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlBhc3RyeSBDcmVhbVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH1cbiAgXVxuZXhwb3J0IGRlZmF1bHQgcmVjaXBlRGF0YTtcbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBhcGlDYWxscyBmcm9tICcuL2FwaUNhbGxzJztcbmltcG9ydCBSZWNpcGVSZXBvc2l0b3J5IGZyb20gJy4vY2xhc3Nlcy9SZWNpcGVSZXBvc2l0b3J5JztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9jbGFzc2VzL1JlY2lwZSc7XG5pbXBvcnQgcmVjaXBlRGF0YSBmcm9tICcuL2RhdGEvcmVjaXBlcyc7XG5pbXBvcnQgaW5ncmVkaWVudHNEYXRhIGZyb20gJy4vZGF0YS9pbmdyZWRpZW50cyc7XG5cbi8vUXVlcnkgU2VsZWN0b3JzXG5jb25zdCBhbGxSZWNpcGVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFJlY2lwZXNCdXR0b24nKTtcbmNvbnN0IHJlY2lwZUNhcmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlY2lwZUNhcmRTZWN0aW9uJyk7XG5jb25zdCBsYW5kaW5nUGFnZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZGluZ1BhZ2VWaWV3Jyk7XG5jb25zdCByZWNpcGVEaXNwbGF5VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWNpcGVEaXNwbGF5VmlldycpO1xuXG4vL0dsb2JhbCB2YXJpYWJsZXNcbmxldCByZWNpcGVSZXBvc2l0b3J5O1xuXG4vL0Z1bnRpb25zXG5jb25zdCBhZGRIaWRkZW4gPSBlbGVtZW50cyA9PiB7XG4gIGVsZW1lbnRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KVxufVxuXG5jb25zdCByZW1vdmVIaWRkZW4gPSBlbGVtZW50cyA9PiB7XG4gIGVsZW1lbnRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9KVxufVxuXG5jb25zdCBpbnN0YW50aWF0ZVJlY2lwZVJlcG9zaXRvcnkgPSAoKSA9PiB7XG4gIHJlY2lwZVJlcG9zaXRvcnkgPSBuZXcgUmVjaXBlUmVwb3NpdG9yeShyZWNpcGVEYXRhLCBpbmdyZWRpZW50c0RhdGEpO1xufVxuXG5cblxuY29uc3QgZGlzcGxheUFsbFJlY2lwZXMgPSAoKSA9PiB7XG4gIGFkZEhpZGRlbihbbGFuZGluZ1BhZ2VWaWV3XSk7XG4gIHJlbW92ZUhpZGRlbihbcmVjaXBlRGlzcGxheVZpZXddKTtcbiAgcmVjaXBlQ2FyZFNlY3Rpb24uaW5uZXJIVE1MID0gYGA7XG4gIHJlY2lwZVJlcG9zaXRvcnkucmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgcmVjaXBlQ2FyZFNlY3Rpb24uaW5uZXJIVE1MICs9IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cInJlY2lwZS1jYXJkXCI+XG4gICAgICA8aW1nIGNsYXNzPVwicmVjaXBlLWNhcmQtaW1nXCIgc3JjPVwiJHtyZWNpcGUuaW1hZ2V9XCI+XG4gICAgICA8YnV0dG9uPiR7cmVjaXBlLm5hbWV9PC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWNhcmQtYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uPvCfpZg8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj7inaTvuI88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5gO1xuICB9KVxuXG59XG5cbmNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZCcpO1xuXG4vL0V2ZW50IExpc3RlbmVyc1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbnN0YW50aWF0ZVJlY2lwZVJlcG9zaXRvcnkpO1xuYWxsUmVjaXBlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBbGxSZWNpcGVzKVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=