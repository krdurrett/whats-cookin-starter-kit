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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml {\n  height: 100vh; }\n\nbody {\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  height: 100vh; }\n\nnav {\n  display: flex;\n  align-items: center;\n  background-color: rgba(225, 225, 225, 0.6);\n  width: 100%;\n  height: 15%; }\n\n.home-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15%;\n  height: 100%; }\n\n.home-button {\n  width: 80%;\n  height: 80%; }\n\n.nav-search-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60%;\n  height: 100%; }\n\n.search-input {\n  width: 70%;\n  height: 50%; }\n\n.search-button {\n  width: 20%;\n  height: 50%; }\n\n.nav-button-container {\n  display: flex;\n  justify-content: space-around;\n  width: 30%;\n  height: 50%; }\n\n.nav-buttons {\n  width: 25%; }\n\nbutton {\n  cursor: pointer; }\n\n.landing-page-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  border: 2px solid red;\n  height: 90%;\n  width: 30%; }\n\n.all-recipes-button {\n  height: 50%;\n  width: 90%;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(225, 225, 225, 0.6); }\n\n.recipe-display-view {\n  border: 2px solid red;\n  height: 85%; }\n\n.recipe-card-section {\n  display: flex;\n  flex-wrap: wrap;\n  border: 2px solid pink;\n  width: 100%;\n  height: 90%;\n  overflow-y: auto; }\n\n.recipe-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px solid yellow;\n  width: 15%;\n  height: 50%; }\n\n.recipe-card-img {\n  width: auto;\n  height: 40%; }\n\n.recipe-card-buttons {\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n\n.recipe-details-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\n.recipe-header {\n  display: flex;\n  justify-content: space-between;\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n\n.recipe-details {\n  display: flex;\n  justify-content: space-around;\n  overflow-y: auto; }\n\n.recipe-details,\n.recipe-header {\n  height: 40%;\n  width: 60%;\n  background-color: rgba(225, 225, 225, 0.6); }\n\n.recipe-detail-buttons {\n  display: flex;\n  align-items: flex-end;\n  align-self: flex-start; }\n\n.ingredients {\n  width: 25%; }\n\n.instructions {\n  width: 75%; }\n\n.filter-view {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n\n.filter-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 75%;\n  width: 50%;\n  background-color: rgba(225, 225, 225, 0.6); }\n\n.filter-view-title {\n  text-align: center; }\n\n.filter-view-tags {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 50%;\n  height: 75%; }\n\n.filter-view-button {\n  border: 2px solid purple; }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAA;;AAGxB;EACE,aAAa,EAAA;;AAGf;EACE,gFAAgF;EAChF,4BAA4B;EAC5B,sBAAsB;EACtB,SAAS,EAAA;;AAGX;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa,EAAA;;AAGf;EACE,aAAa;EACb,mBAAmB;EACnB,0CAAyC;EACzC,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,YAAY,EAAA;;AAGd;EACE,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,YAAY,EAAA;;AAGd;EACE,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,6BAA6B;EAC7B,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,UAAU,EAAA;;AAGZ;EACE,eAAe,EAAA;;AAGjB;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,WAAW;EACX,UAAU,EAAA;;AAGZ;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,0CAAyC,EAAA;;AAG3C;EACA,qBAAqB;EACrB,WAAW,EAAA;;AAGX;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,WAAW;EACX,gBAAgB,EAAA;;AAGlB;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,wBAAwB;EACxB,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,8BAA8B;EAC9B,gFAAgF;EAChF,4BAA4B;EAC5B,sBAAsB;EACtB,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB,EAAA;;AAGlB;;EAEE,WAAW;EACX,UAAU;EACV,0CAAyC,EAAA;;AAG3C;EACE,aAAa;EACb,qBAAqB;EACrB,sBAAsB,EAAA;;AAGxB;EACE,UAAU,EAAA;;AAEZ;EACE,UAAU,EAAA;;AAGZ;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,UAAU;EACV,0CAAyC,EAAA;;AAG3C;EACE,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,WAAW,EAAA;;AAGb;EACE,wBAAwB,EAAA;;AAG1B;EACE,aAAa,EAAA","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100vh;\n}\n\nbody {\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  background-color: rgba(225, 225, 225, .6);\n  width: 100%;\n  height: 15%;\n}\n\n.home-button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15%;\n  height: 100%;\n}\n\n.home-button {\n  width: 80%;\n  height: 80%;\n}\n\n.nav-search-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60%;\n  height: 100%;\n}\n\n.search-input {\n  width: 70%;\n  height: 50%;\n}\n\n.search-button {\n  width: 20%;\n  height: 50%;\n}\n\n.nav-button-container {\n  display: flex;\n  justify-content: space-around;\n  width: 30%;\n  height: 50%;\n}\n\n.nav-buttons {\n  width: 25%;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.landing-page-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  border: 2px solid red;\n  height: 90%;\n  width: 30%;\n}\n\n.all-recipes-button {\n  height: 50%;\n  width: 90%;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(225, 225, 225, .6);\n}\n\n.recipe-display-view {\nborder: 2px solid red;\nheight: 85%;\n}\n\n.recipe-card-section {\n  display: flex;\n  flex-wrap: wrap;\n  border: 2px solid pink;\n  width: 100%;\n  height: 90%;\n  overflow-y: auto;\n}\n\n.recipe-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px solid yellow;\n  width: 15%;\n  height: 50%;\n}\n\n.recipe-card-img {\n  width: auto;\n  height: 40%;\n}\n\n.recipe-card-buttons {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.recipe-details-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.recipe-header {\n  display: flex;\n  justify-content: space-between;\n  background-image: url(\"https://spoonacular.com/recipeImages/595736-556x370.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n}\n\n.recipe-details {\n  display: flex;\n  justify-content: space-around;\n  overflow-y: auto;\n}\n\n.recipe-details,\n.recipe-header {\n  height: 40%;\n  width: 60%;\n  background-color: rgba(225, 225, 225, .6);\n}\n\n.recipe-detail-buttons {\n  display: flex;\n  align-items: flex-end;\n  align-self: flex-start;\n}\n\n.ingredients {\n  width: 25%;\n}\n.instructions {\n  width: 75%;\n}\n\n.filter-view {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.filter-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 75%;\n  width: 50%;\n  background-color: rgba(225, 225, 225, .6);\n}\n\n.filter-view-title {\n  text-align: center;\n}\n\n.filter-view-tags {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 50%;\n  height: 75%;\n}\n\n.filter-view-button {\n  border: 2px solid purple;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
      const ingredientAmount = this.ingredients.find((ingredient) => {
        return ingredient.id === id
      }).quantity.amount
      const ingredientUnit = this.ingredients.find((ingredient) => {
        return ingredient.id === id
      }).quantity.unit
      ingredientNames.push(`${ingredientAmount} ${ingredientUnit} ${ingredientName}`);
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
    return (this.totalRecipeCost.toFixed(2));
  }
  getRecipeInstructions() {
    const instructions = this.instructions.map((instruction) => {
      return `${instruction.instruction}`
    })
    return instructions;
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
const heading = document.querySelector('#heading');
const recipeDetailsView = document.querySelector('#recipeDetailsView');
const navFilterButton = document.querySelector('#navFilterButton');
const filterView = document.querySelector('#filterView');

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
  heading.innerText = 'All Recipes'
  recipeCardSection.innerHTML = ``;
  recipeRepository.recipes.forEach(recipe => {
    recipeCardSection.innerHTML += `
    <section class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <button class="recipe-name-button" id="${recipe.id}" >${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button>🥘</button>
        <button>❤️</button>
      </div>
    </section>`;
  })
}

const showRecipeDetails = (event) => {
  if(event.target.classList.contains('recipe-name-button')){
    addHidden([recipeDisplayView]);
    removeHidden([recipeDetailsView]);
    recipeRepository.recipes.forEach(recipe => {
      if(event.target.id === recipe.id.toString()) {
        const selectedRecipe = new _classes_Recipe__WEBPACK_IMPORTED_MODULE_3__["default"](recipe, _data_ingredients__WEBPACK_IMPORTED_MODULE_5__["default"]);
        let ingredientNames = selectedRecipe.getIngredientNames().reduce((acc, ingredient) => {
          acc += `<li>${ingredient}</li>`
          return acc
        }, ``)
        let ingredientInstructions = selectedRecipe.getRecipeInstructions().reduce((acc, instruction) => {
          acc += `<li>${instruction}</li>`
          return acc
        }, ``)
        recipeDetailsView.innerHTML = `
        <section class="recipe-header" id="recipeHeader">
          <span>${recipe.name}</span>
          <span>${selectedRecipe.getRecipeCost()}</span>
          <div class="recipe-detail-buttons">
            <button>🥘</button>
            <button>❤️</button>
          </div>
        </section>
        <div class= "recipe-details">
          <section class="ingredients">
            <h2>Ingredients</h2>
            <ul>${ingredientNames}</ul>
          </section>
          <section class="instructions">
            <h2>Instructions</h2>
            <ol>${ingredientInstructions}</ol>
          </section>
        </div>`
        document.getElementById('recipeHeader').style.backgroundImage = `url(${recipe.image})`
      }
    })
  }
}

const displayFilterForm = () => {
  addHidden([landingPageView, recipeDisplayView, recipeDetailsView]);
  removeHidden([filterView]);

  // <input type="radio" id="beans" name="tag" value="beans">
  // <label for="beans">Beans</label>
}

//Event Listeners
window.addEventListener('load', instantiateRecipeRepository);
allRecipesButton.addEventListener('click', displayAllRecipes);
recipeCardSection.addEventListener('click', event => {
  showRecipeDetails(event)});
navFilterButton.addEventListener('click', displayFilterForm);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9SZWNpcGVSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2luZ3JlZGllbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSwyQkFBMkIsRUFBRSxVQUFVLGtCQUFrQixFQUFFLFVBQVUsdUZBQXVGLGlDQUFpQywyQkFBMkIsY0FBYyxFQUFFLFVBQVUsa0JBQWtCLDJCQUEyQixrQkFBa0IsRUFBRSxTQUFTLGtCQUFrQix3QkFBd0IsK0NBQStDLGdCQUFnQixnQkFBZ0IsRUFBRSw0QkFBNEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxpQkFBaUIsRUFBRSxrQkFBa0IsZUFBZSxnQkFBZ0IsRUFBRSxxQkFBcUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxpQkFBaUIsRUFBRSxtQkFBbUIsZUFBZSxnQkFBZ0IsRUFBRSxvQkFBb0IsZUFBZSxnQkFBZ0IsRUFBRSwyQkFBMkIsa0JBQWtCLGtDQUFrQyxlQUFlLGdCQUFnQixFQUFFLGtCQUFrQixlQUFlLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSx3QkFBd0Isa0JBQWtCLDJCQUEyQix5QkFBeUIsMEJBQTBCLGdCQUFnQixlQUFlLEVBQUUseUJBQXlCLGdCQUFnQixlQUFlLHVCQUF1QixpQkFBaUIsK0NBQStDLEVBQUUsMEJBQTBCLDBCQUEwQixnQkFBZ0IsRUFBRSwwQkFBMEIsa0JBQWtCLG9CQUFvQiwyQkFBMkIsZ0JBQWdCLGdCQUFnQixxQkFBcUIsRUFBRSxrQkFBa0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsNkJBQTZCLGVBQWUsZ0JBQWdCLEVBQUUsc0JBQXNCLGdCQUFnQixnQkFBZ0IsRUFBRSwwQkFBMEIsa0JBQWtCLG1DQUFtQyxnQkFBZ0IsRUFBRSwwQkFBMEIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGlCQUFpQixFQUFFLG9CQUFvQixrQkFBa0IsbUNBQW1DLHVGQUF1RixpQ0FBaUMsMkJBQTJCLGdCQUFnQixFQUFFLHFCQUFxQixrQkFBa0Isa0NBQWtDLHFCQUFxQixFQUFFLHNDQUFzQyxnQkFBZ0IsZUFBZSwrQ0FBK0MsRUFBRSw0QkFBNEIsa0JBQWtCLDBCQUEwQiwyQkFBMkIsRUFBRSxrQkFBa0IsZUFBZSxFQUFFLG1CQUFtQixlQUFlLEVBQUUsa0JBQWtCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGlCQUFpQixFQUFFLGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsZUFBZSwrQ0FBK0MsRUFBRSx3QkFBd0IsdUJBQXVCLEVBQUUsdUJBQXVCLGtCQUFrQix3QkFBd0IsMkJBQTJCLG9CQUFvQixlQUFlLGdCQUFnQixFQUFFLHlCQUF5Qiw2QkFBNkIsRUFBRSxhQUFhLGtCQUFrQixFQUFFLFNBQVMsaUZBQWlGLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLFlBQVksYUFBYSxhQUFhLGlCQUFpQixLQUFLLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksV0FBVyxnQkFBZ0IsS0FBSyxnQkFBZ0IsS0FBSyxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxZQUFZLGlCQUFpQixLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksaUJBQWlCLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxZQUFZLG1CQUFtQixPQUFPLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxnQkFBZ0IsS0FBSyxrQkFBa0IsTUFBTSxzQ0FBc0MsMkJBQTJCLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxVQUFVLHVGQUF1RixpQ0FBaUMsMkJBQTJCLGNBQWMsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsa0JBQWtCLEdBQUcsU0FBUyxrQkFBa0Isd0JBQXdCLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLEdBQUcsNEJBQTRCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGVBQWUsaUJBQWlCLEdBQUcsa0JBQWtCLGVBQWUsZ0JBQWdCLEdBQUcscUJBQXFCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGVBQWUsaUJBQWlCLEdBQUcsbUJBQW1CLGVBQWUsZ0JBQWdCLEdBQUcsb0JBQW9CLGVBQWUsZ0JBQWdCLEdBQUcsMkJBQTJCLGtCQUFrQixrQ0FBa0MsZUFBZSxnQkFBZ0IsR0FBRyxrQkFBa0IsZUFBZSxHQUFHLFlBQVksb0JBQW9CLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIseUJBQXlCLDBCQUEwQixnQkFBZ0IsZUFBZSxHQUFHLHlCQUF5QixnQkFBZ0IsZUFBZSx1QkFBdUIsaUJBQWlCLDhDQUE4QyxHQUFHLDBCQUEwQix3QkFBd0IsY0FBYyxHQUFHLDBCQUEwQixrQkFBa0Isb0JBQW9CLDJCQUEyQixnQkFBZ0IsZ0JBQWdCLHFCQUFxQixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLG1DQUFtQyw2QkFBNkIsZUFBZSxnQkFBZ0IsR0FBRyxzQkFBc0IsZ0JBQWdCLGdCQUFnQixHQUFHLDBCQUEwQixrQkFBa0IsbUNBQW1DLGdCQUFnQixHQUFHLDBCQUEwQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLEdBQUcsb0JBQW9CLGtCQUFrQixtQ0FBbUMsdUZBQXVGLGlDQUFpQywyQkFBMkIsZ0JBQWdCLEdBQUcscUJBQXFCLGtCQUFrQixrQ0FBa0MscUJBQXFCLEdBQUcsc0NBQXNDLGdCQUFnQixlQUFlLDhDQUE4QyxHQUFHLDRCQUE0QixrQkFBa0IsMEJBQTBCLDJCQUEyQixHQUFHLGtCQUFrQixlQUFlLEdBQUcsaUJBQWlCLGVBQWUsR0FBRyxrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixlQUFlLDhDQUE4QyxHQUFHLHdCQUF3Qix1QkFBdUIsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3QiwyQkFBMkIsb0JBQW9CLGVBQWUsZ0JBQWdCLEdBQUcseUJBQXlCLDZCQUE2QixHQUFHLGFBQWEsa0JBQWtCLEdBQUcscUJBQXFCO0FBQ3A4UDtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMvQmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQTs7O0FBR0EseUM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsOEJBQThCLGlCQUFpQixHQUFHLGVBQWUsR0FBRyxlQUFlO0FBQ25GLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztBQU9lLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6RHRCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVlLCtFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDNUNoQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDhFQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqdEMvQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNJQUFzSTtBQUN0STtBQUNBLFNBQVM7QUFDVDtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUVBQXlFLG9JQUFvSTtBQUM3TTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdSQUFnUjtBQUNoUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0NBQStDLDZEQUE2RDtBQUM1RztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkZBQTZGO0FBQzdGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxzSUFBc0k7QUFDdEk7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFKQUFxSjtBQUNySjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkZBQTZGO0FBQzdGO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2R0FBNkc7QUFDN0c7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5Q0FBeUMsNEZBQTRGLDRFQUE0RTtBQUNqTjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxtSUFBbUk7QUFDbkk7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdndLMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQjtBQUNZO0FBQ3dCO0FBQ3BCO0FBQ0U7QUFDUzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EseUJBQXlCLGlFQUFnQixDQUFDLHFEQUFVLEVBQUUseURBQWU7QUFDckU7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGFBQWE7QUFDdkQsK0NBQStDLFVBQVUsS0FBSyxZQUFZO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVEQUFNLFNBQVMseURBQWU7QUFDakU7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBLFNBQVM7QUFDVDtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QixrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBLCtFQUErRSxhQUFhO0FBQzVGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUN6RixZQUFnSTs7QUFFaEk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJVCwyTEFBTyxhQUFhLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU5NTczNi01NTZ4MzcwLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC42KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNSU7IH1cXG5cXG4uaG9tZS1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmhvbWUtYnV0dG9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTsgfVxcblxcbi5uYXYtc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNTAlOyB9XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogNTAlOyB9XFxuXFxuLm5hdi1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDUwJTsgfVxcblxcbi5uYXYtYnV0dG9ucyB7XFxuICB3aWR0aDogMjUlOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5sYW5kaW5nLXBhZ2UtdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMzAlOyB9XFxuXFxuLmFsbC1yZWNpcGVzLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNik7IH1cXG5cXG4ucmVjaXBlLWRpc3BsYXktdmlldyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBoZWlnaHQ6IDg1JTsgfVxcblxcbi5yZWNpcGUtY2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXI6IDJweCBzb2xpZCBwaW5rO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87IH1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiA1MCU7IH1cXG5cXG4ucmVjaXBlLWNhcmQtaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA0MCU7IH1cXG5cXG4ucmVjaXBlLWNhcmQtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucmVjaXBlLWRldGFpbHMtdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5yZWNpcGUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81OTU3MzYtNTU2eDM3MC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucmVjaXBlLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcblxcbi5yZWNpcGUtZGV0YWlscyxcXG4ucmVjaXBlLWhlYWRlciB7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIHdpZHRoOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNik7IH1cXG5cXG4ucmVjaXBlLWRldGFpbC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLmluZ3JlZGllbnRzIHtcXG4gIHdpZHRoOiAyNSU7IH1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIHdpZHRoOiA3NSU7IH1cXG5cXG4uZmlsdGVyLXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5maWx0ZXItZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNik7IH1cXG5cXG4uZmlsdGVyLXZpZXctdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmZpbHRlci12aWV3LXRhZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNzUlOyB9XFxuXFxuLmZpbHRlci12aWV3LWJ1dHRvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdGQUFnRjtFQUNoRiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQ0FBeUM7RUFDekMsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBDQUF5QyxFQUFBOztBQUczQztFQUNBLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR1g7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0ZBQWdGO0VBQ2hGLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsV0FBVztFQUNYLFVBQVU7RUFDViwwQ0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMENBQXlDLEVBQUE7O0FBRzNDO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxhQUFhLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTk1NzM2LTU1NngzNzAuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgLjYpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1JTtcXG59XFxuXFxuLmhvbWUtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhvbWUtYnV0dG9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLm5hdi1zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhbmRpbmctcGFnZS12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5hbGwtcmVjaXBlcy1idXR0b24ge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAuNik7XFxufVxcblxcbi5yZWNpcGUtZGlzcGxheS12aWV3IHtcXG5ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuaGVpZ2h0OiA4NSU7XFxufVxcblxcbi5yZWNpcGUtY2FyZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXI6IDJweCBzb2xpZCBwaW5rO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcXG4gIHdpZHRoOiAxNSU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkLWltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNDAlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGUtZGV0YWlscy12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTk1NzM2LTU1NngzNzAuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnJlY2lwZS1kZXRhaWxzLFxcbi5yZWNpcGUtaGVhZGVyIHtcXG4gIGhlaWdodDogNDAlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgLjYpO1xcbn1cXG5cXG4ucmVjaXBlLWRldGFpbC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaW5ncmVkaWVudHMge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLmluc3RydWN0aW9ucyB7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4uZmlsdGVyLXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZpbHRlci1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNzUlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgLjYpO1xcbn1cXG5cXG4uZmlsdGVyLXZpZXctdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmlsdGVyLXZpZXctdGFncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA3NSU7XFxufVxcblxcbi5maWx0ZXItdmlldy1idXR0b24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFlvdXIgZmV0Y2ggcmVxdWVzdHMgd2lsbCBsaXZlIGhlcmUhXG5cblxuY29uc29sZS5sb2coJ0kgd2lsbCBiZSBhIGZldGNoIHJlcXVlc3QhJykiLCJjbGFzcyBSZWNpcGUge1xuICBjb25zdHJ1Y3RvcihyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmFsbEluZ3JlZGllbnRzID0gaW5ncmVkaWVudHNEYXRhO1xuICAgIHRoaXMudG90YWxSZWNpcGVDb3N0ID0gMDtcbiAgfVxuICBnZXRJbmdyZWRpZW50TmFtZXMoKSB7XG4gICAgbGV0IGluZ3JlZGllbnROYW1lcyA9IFtdO1xuICAgIGNvbnN0IGluZ3JlZGllbnRJZHMgPSB0aGlzLmluZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnQuaWRcbiAgICB9KVxuICAgIGluZ3JlZGllbnRJZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnROYW1lID0gdGhpcy5hbGxJbmdyZWRpZW50cy5maW5kKChpbmdyZWRpZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50LmlkID09PSBpZFxuICAgICAgfSkubmFtZVxuICAgICAgY29uc3QgaW5ncmVkaWVudEFtb3VudCA9IHRoaXMuaW5ncmVkaWVudHMuZmluZCgoaW5ncmVkaWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5pZCA9PT0gaWRcbiAgICAgIH0pLnF1YW50aXR5LmFtb3VudFxuICAgICAgY29uc3QgaW5ncmVkaWVudFVuaXQgPSB0aGlzLmluZ3JlZGllbnRzLmZpbmQoKGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZ3JlZGllbnQuaWQgPT09IGlkXG4gICAgICB9KS5xdWFudGl0eS51bml0XG4gICAgICBpbmdyZWRpZW50TmFtZXMucHVzaChgJHtpbmdyZWRpZW50QW1vdW50fSAke2luZ3JlZGllbnRVbml0fSAke2luZ3JlZGllbnROYW1lfWApO1xuICAgIH0pXG4gICAgcmV0dXJuIGluZ3JlZGllbnROYW1lcztcbiAgfVxuICBnZXRSZWNpcGVDb3N0KCkge1xuICAgIHRoaXMuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50KSA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudC5pZFxuICAgIH0pLmZvckVhY2goaWQgPT4ge1xuICAgICAgY29uc3QgaW5ncmVkaWVudENvc3QgPSB0aGlzLmFsbEluZ3JlZGllbnRzLmZpbmQoKGluZykgPT4ge1xuICAgICAgICByZXR1cm4gaW5nLmlkID09PSBpZDtcbiAgICAgIH0pLmVzdGltYXRlZENvc3RJbkNlbnRzXG4gICAgICBjb25zdCBpbmdyZWRpZW50QW1vdW50ID0gdGhpcy5pbmdyZWRpZW50cy5maW5kKChpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZy5pZCA9PT0gaWQ7XG4gICAgICB9KS5xdWFudGl0eS5hbW91bnRcbiAgICAgIHRoaXMudG90YWxSZWNpcGVDb3N0ICs9ICgoaW5ncmVkaWVudENvc3QgKiBpbmdyZWRpZW50QW1vdW50KSAvIDEwMCk7XG4gICAgfSlcbiAgICByZXR1cm4gKHRoaXMudG90YWxSZWNpcGVDb3N0LnRvRml4ZWQoMikpO1xuICB9XG4gIGdldFJlY2lwZUluc3RydWN0aW9ucygpIHtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSB0aGlzLmluc3RydWN0aW9ucy5tYXAoKGluc3RydWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gYCR7aW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb259YFxuICAgIH0pXG4gICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgfVxufVxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlO1xuIiwiY2xhc3MgUmVjaXBlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZURhdGEsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IHJlY2lwZURhdGE7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzRGF0YTtcbiAgICB0aGlzLmZpbHRlcmVkUmVjaXBlcyA9IFtdO1xuICB9XG4gIGdldFJlY2lwZUJ5VGFnKHRhZykge1xuICAgIHRoaXMucmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIGlmKHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZykpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJlZFJlY2lwZXMucHVzaChyZWNpcGUpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZ2V0UmVjaXBlQnlOYW1lKHNlYXJjaFBocmFzZSkge1xuICAgIHRoaXMucmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIGlmKHJlY2lwZS5uYW1lLmluY2x1ZGVzKHNlYXJjaFBocmFzZSkpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJlZFJlY2lwZXMucHVzaChyZWNpcGUpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZ2V0UmVjaXBlQnlJbmdyZWRpZW50cyhzZWFyY2hQaHJhc2UpIHtcbiAgICBjb25zdCBmaWx0ZXJlZEluZ3JlZGllbnRzID0gdGhpcy5pbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lLmluY2x1ZGVzKHNlYXJjaFBocmFzZSlcbiAgICB9KTtcbiAgICBmaWx0ZXJlZEluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBjb25zdCByZWNpcGVzVG9QdXNoID0gdGhpcy5yZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgICBjb25zdCByZWNpcGVJbmdyZWRpZW50ID0gcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoaW5nID0+IHtcbiAgICAgICAgICByZXR1cm4gaW5nLmlkID09PSBpbmdyZWRpZW50LmlkO1xuICAgICAgICB9KVxuICAgICAgICBpZihyZWNpcGVJbmdyZWRpZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHJlY2lwZUluZ3JlZGllbnQuaWQgPT09IGluZ3JlZGllbnQuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmVjaXBlc1RvUHVzaC5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJlZFJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgICAgIHRoaXMuZmlsdGVyZWRSZWNpcGVzLnB1c2gocmVjaXBlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVJlcG9zaXRvcnk7XG4iLCJjb25zdCBpbmdyZWRpZW50c0RhdGEgPSBbXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgIFwibmFtZVwiOiBcIndoZWF0IGZsb3VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxODM3MixcbiAgICAgIFwibmFtZVwiOiBcImJpY2FyYm9uYXRlIG9mIHNvZGFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjMsXG4gICAgICBcIm5hbWVcIjogXCJlZ2dzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgIFwibmFtZVwiOiBcInN1Y3Jvc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MjA2LFxuICAgICAgXCJuYW1lXCI6IFwiaW5zdGFudCB2YW5pbGxhIHB1ZGRpbmdcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgXCJuYW1lXCI6IFwiYnJvd24gc3VnYXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNDcsXG4gICAgICBcIm5hbWVcIjogXCJzYWx0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI4MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDEyMDQ3LFxuICAgICAgXCJuYW1lXCI6IFwiZmluZSBzZWEgc2FsdFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTk5MDMsXG4gICAgICBcIm5hbWVcIjogXCJzZW1pIHN3ZWV0IGNoaXBzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgXCJuYW1lXCI6IFwidW5zYWx0ZWQgYnV0dGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgXCJuYW1lXCI6IFwidmFuaWxsYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwOTAxNixcbiAgICAgIFwibmFtZVwiOiBcImFwcGxlIGNpZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MDAzLFxuICAgICAgXCJuYW1lXCI6IFwiYXBwbGVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMDI3LFxuICAgICAgXCJuYW1lXCI6IFwiY29ybiBzdGFyY2hcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwNDYsXG4gICAgICBcIm5hbWVcIjogXCJkaWpvbiBzdHlsZSBtdXN0YXJkXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgIFwibmFtZVwiOiBcIndob2xlIGdhcmxpYyBjbG92ZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMjA0NixcbiAgICAgIFwibmFtZVwiOiBcIndob2xlIGdyYWluIGRpam9uIG11c3RhcmRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5OTExLFxuICAgICAgXCJuYW1lXCI6IFwibWFwbGVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE2MTEyLFxuICAgICAgXCJuYW1lXCI6IFwibWlzb1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTAwNjIsXG4gICAgICBcIm5hbWVcIjogXCJwb3JrIGNob3BcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICBcIm5hbWVcIjogXCJzJnBcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE2MTI0LFxuICAgICAgXCJuYW1lXCI6IFwic295IHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgICAgXCJuYW1lXCI6IFwic3JpcmFjaGEgc2F1Y2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICBcIm5hbWVcIjogXCJibGFjayBwZXBwZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDEsXG4gICAgICBcIm5hbWVcIjogXCJidXR0ZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICBcIm5hbWVcIjogXCJvaWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMzEsXG4gICAgICBcIm5hbWVcIjogXCJyZWQgcGVwcGVyIHBvd2RlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTEwMCxcbiAgICAgIFwibmFtZVwiOiBcImNoaWNrZW4gd2luZ1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1OTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwOSxcbiAgICAgIFwibmFtZVwiOiBcInJlZCBjaGlsaSBwb3dkZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgICBcIm5hbWVcIjogXCJnYXJsaWMgcG93ZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MTY4LFxuICAgICAgXCJuYW1lXCI6IFwidGFiYXNjbyBzYXVjZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTE3NixcbiAgICAgIFwibmFtZVwiOiBcIm1hbmdvZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMjYsXG4gICAgICBcIm5hbWVcIjogXCJvbmlvbiBwb3dkZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNDIwNDcsXG4gICAgICBcIm5hbWVcIjogXCJzZWFzb25lZCBzYWx0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgIFwibmFtZVwiOiBcImJha2luZyBwb3dkZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkwNDAsXG4gICAgICBcIm5hbWVcIjogXCJyaXBlIGJhbmFuYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwMTEsXG4gICAgICBcIm5hbWVcIjogXCJidWNrIHdoZWF0IGZsb3VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjMwLFxuICAgICAgXCJuYW1lXCI6IFwiYnV0dGVybWlsa1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkyOTYsXG4gICAgICBcIm5hbWVcIjogXCJydW5ueSBob25leVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYwOTgsXG4gICAgICBcIm5hbWVcIjogXCJwZWFudXQgYnV0dGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDQ4LFxuICAgICAgXCJuYW1lXCI6IFwiYXBwbGUgY2lkZXIgdmluZWdhclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwOTAsXG4gICAgICBcIm5hbWVcIjogXCJicm93biByaWNlIGZsb3VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5Mzc4NCxcbiAgICAgIFwibmFtZVwiOiBcImJyb3duIHJpY2Ugc3lydXBcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjQsXG4gICAgICBcIm5hbWVcIjogXCJlZ2cgYWxidW1lblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2MjUsXG4gICAgICBcIm5hbWVcIjogXCJldmFwb3JhdGVkIGNhbmUganVpY2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMjIwLFxuICAgICAgXCJuYW1lXCI6IFwiZmxheCBtZWFsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDExODM3NSxcbiAgICAgIFwibmFtZVwiOiBcImluc3RhbnQgeWVhc3RcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MzA0LFxuICAgICAgXCJuYW1lXCI6IFwidW5zdWxmdXJlZCBtb2xhc3Nlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE0MTMsXG4gICAgICBcIm5hbWVcIjogXCJQb3RhdG8gU3RhcmNoIEZsb3VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg5NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzY5NixcbiAgICAgIFwibmFtZVwiOiBcInRhcGlvY2Egc3RhcmNoXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5Mzc2MCxcbiAgICAgIFwibmFtZVwiOiBcIldob2xlIEdyYWluIFRlZmYgRmxvdXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgXCJuYW1lXCI6IFwiaWNlIHdhdGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzYyNixcbiAgICAgIFwibmFtZVwiOiBcInhhbnRoYW4gZ3VtXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTM1MCxcbiAgICAgIFwibmFtZVwiOiBcImNvcm4gc3lydXBcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkwOTksXG4gICAgICBcIm5hbWVcIjogXCJmcnVpdCBjb2NrdGFpbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIwNjEsXG4gICAgICBcIm5hbWVcIjogXCJ3aG9sZSBhbG1vbmRzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIxMDQsXG4gICAgICBcIm5hbWVcIjogXCJjb2NvbnV0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkxOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjExNSxcbiAgICAgIFwibmFtZVwiOiBcImNvY29udXQgY3JlYW1cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQwNDcsXG4gICAgICBcIm5hbWVcIjogXCJjb2NvbnV0IG9pbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTkwNzEsXG4gICAgICBcIm5hbWVcIjogXCJkYXJrIGNob2NvbGF0ZSBtb3JzZWxzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA4MjEyLFxuICAgICAgXCJuYW1lXCI6IFwiZ3Jhbm9sYSBjZXJlYWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzgxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDgxMjEsXG4gICAgICBcIm5hbWVcIjogXCJvYXRtZWFsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjE0MixcbiAgICAgIFwibmFtZVwiOiBcInBlY2FuXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5Mzc0MCxcbiAgICAgIFwibmFtZVwiOiBcImJsYW5jaGVkIGFsbW9uZCBmbG91clwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5ODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyNSxcbiAgICAgIFwibmFtZVwiOiBcImVnZyB5b2xrc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIwMjMsXG4gICAgICBcIm5hbWVcIjogXCJzZXNhbWUgc2VlZHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTUwNjIsXG4gICAgICBcIm5hbWVcIjogXCJjaGlja2VuIHRlbmRlcnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDExMTA5LFxuICAgICAgXCJuYW1lXCI6IFwic2xhdyBtaXhcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjgxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTE2MDk4LFxuICAgICAgXCJuYW1lXCI6IFwiY3JlYW15IHBlYW51dCBidXR0ZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNjQsXG4gICAgICBcIm5hbWVcIjogXCJtaW50XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU3NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDIxLFxuICAgICAgXCJuYW1lXCI6IFwicG93ZGVyZWQgZ2luZ2VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MTYwLFxuICAgICAgXCJuYW1lXCI6IFwianVpY2Ugb2YgbGltZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTI2NixcbiAgICAgIFwibmFtZVwiOiBcInBpbmVhcHBsZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTExMzUsXG4gICAgICBcIm5hbWVcIjogXCJjYXVsaWZsb3dlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjE3MixcbiAgICAgIFwibmFtZVwiOiBcImNoaWNrZW4gc3RvY2tcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDU0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjMyLFxuICAgICAgXCJuYW1lXCI6IFwiZ2hlZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIxMjAsXG4gICAgICBcIm5hbWVcIjogXCJoYXplbG51dFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2OTAsXG4gICAgICBcIm5hbWVcIjogXCJudXRyaXRpb25hbCB5ZWFzdCBmbGFrZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgXCJuYW1lXCI6IFwib25pb25zXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQzOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxMDEyMyxcbiAgICAgIFwibmFtZVwiOiBcInByb3NjdWl0dG9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMDk2LFxuICAgICAgXCJuYW1lXCI6IFwicmFwaW5pXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg0NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MTUwLFxuICAgICAgXCJuYW1lXCI6IFwiYmFyIGIgcXVlIHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MTk0LFxuICAgICAgXCJuYW1lXCI6IFwiY2hpY2tlbiBicm90aFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2MjcsXG4gICAgICBcIm5hbWVcIjogXCJsaXF1aWQgc21va2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMjgsXG4gICAgICBcIm5hbWVcIjogXCJwYXByaWthXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDA3MixcbiAgICAgIFwibmFtZVwiOiBcInBvcmsgc2hvdWxkZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDY5NzEsXG4gICAgICBcIm5hbWVcIjogXCJ3b3JjZXN0ZXJzaGlyZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzYwNyxcbiAgICAgIFwibmFtZVwiOiBcImFsbW9uZG1pbGtcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzg3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE4OTQyLFxuICAgICAgXCJuYW1lXCI6IFwiZ3JhaGFtIGNyYWNrZXIgY3J1c3RcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTIwMTAsXG4gICAgICBcIm5hbWVcIjogXCJncm91bmQgY2lubmFtb25cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMjUsXG4gICAgICBcIm5hbWVcIjogXCJudXRtZWcgcG93ZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ4MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0MzI3NCxcbiAgICAgIFwibmFtZVwiOiBcImxvdyBmYXQgY3JlYW0gY2hlZXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwNDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogODEyMCxcbiAgICAgIFwibmFtZVwiOiBcIndob2xlIGdyYWluIHJvbGxlZCBvYXRzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExNDI0LFxuICAgICAgXCJuYW1lXCI6IFwiY2FubmVkIHB1bXBraW5cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkwMTYsXG4gICAgICBcIm5hbWVcIjogXCJhcHBsZSBqdWljZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTgwNDcsXG4gICAgICBcIm5hbWVcIjogXCJyYWlzaW4gYnJlYWRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwODkwMDMsXG4gICAgICBcIm5hbWVcIjogXCJncmFubnlzbWl0aCBhcHBsZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA3NyxcbiAgICAgIFwibmFtZVwiOiBcImZ1bGwtZmF0IG1pbGtcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgXCJuYW1lXCI6IFwiZmxhdCBsZWFmIHBhcnNsZXkgbGVhdmVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAzMjAwOSxcbiAgICAgIFwibmFtZVwiOiBcImRyaWVkIHJlZCBjaGlsaVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDE1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE1MTUyLFxuICAgICAgXCJuYW1lXCI6IFwianVtYm8gc2hyaW1wXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI5NCxcbiAgICAgIFwibmFtZVwiOiBcInZpZGFsaWEgb25pb25cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTk1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMDA3LFxuICAgICAgXCJuYW1lXCI6IFwiYXJ0aWNob2tlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTE1MCxcbiAgICAgIFwibmFtZVwiOiBcImxlbW9uXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MTU2LFxuICAgICAgXCJuYW1lXCI6IFwibGVtb24gcGVlbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTgwNjksXG4gICAgICBcIm5hbWVcIjogXCJnbHV0ZW4tZnJlZSB3aGl0ZSBzYW5kd2ljaCBicmVhZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAzMyxcbiAgICAgIFwibmFtZVwiOiBcInBhcm1lc2FuIGNoZWVzZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAyNyxcbiAgICAgIFwibmFtZVwiOiBcIm9yZWdhbm9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMzQwNTMsXG4gICAgICBcIm5hbWVcIjogXCJleHRyYSB2aXJnaW4gb2xpdmUgb2lsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDA0LFxuICAgICAgXCJuYW1lXCI6IFwiYmF5IGxlYXZlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkzMzYsXG4gICAgICBcIm5hbWVcIjogXCJwb3dkZXJlZCBzdWdhclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTExNDMsXG4gICAgICBcIm5hbWVcIjogXCJjZWxlcnlcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjksXG4gICAgICBcIm5hbWVcIjogXCJoYXJkY29va2VkIGVnZ3NcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQ2NDEsXG4gICAgICBcIm5hbWVcIjogXCJyZWR1Y2VkIGZhdCBtYXlvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY5N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDExMjU2LFxuICAgICAgXCJuYW1lXCI6IFwic2tpbSBncmVlayB5b2d1cnRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExOTQ0LFxuICAgICAgXCJuYW1lXCI6IFwiaG90ZG9nIHJlbGlzaFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTEyODIsXG4gICAgICBcIm5hbWVcIjogXCJyZWQgb25pb25cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMzUzLFxuICAgICAgXCJuYW1lXCI6IFwiaWRhaG8gcG90YXRvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDIxMTgyMSxcbiAgICAgIFwibmFtZVwiOiBcImJlbGwgcGVwcGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAyMDA0OCxcbiAgICAgIFwibmFtZVwiOiBcImJyb3duIG1pbnV0ZSByaWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzY1MSxcbiAgICAgIFwibmFtZVwiOiBcIml0YWxpYW4gY2hlZXNlIGJsZW5kXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIzM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3OTI3LFxuICAgICAgXCJuYW1lXCI6IFwic3dlZXQgaXRhbGlhbiB0dXJrZXkgc2F1c2FnZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE1NDksXG4gICAgICBcIm5hbWVcIjogXCJjYW5uZWQgdG9tYXRvIHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYyMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDEyMDEyOSxcbiAgICAgIFwibmFtZVwiOiBcImJyZWFkIGZsb3VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDExNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgXCJuYW1lXCI6IFwiY3JlYW1cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQwNTMsXG4gICAgICBcIm5hbWVcIjogXCJwdXJlIG9saXZlIG9pbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTk5MTIsXG4gICAgICBcIm5hbWVcIjogXCJhZ2F2ZSBzeXJ1cFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMjAwODAsXG4gICAgICBcIm5hbWVcIjogXCJwYXN0cnkgZmxvdXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDE5MzM0LFxuICAgICAgXCJuYW1lXCI6IFwiZGFyayBicm93biBzdWdhclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM4MTQsXG4gICAgICBcIm5hbWVcIjogXCJsaWdodGx5IHN3ZWV0ZW5lZCB3aGlwcGVkIGNyZWFtXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjA2LFxuICAgICAgXCJuYW1lXCI6IFwiY3VjdW1iZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMDM1LFxuICAgICAgXCJuYW1lXCI6IFwicXVpbm9hXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTUyOSxcbiAgICAgIFwibmFtZVwiOiBcImhlaXJsb29tIHRvbWF0b2VzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNDI0MixcbiAgICAgIFwibmFtZVwiOiBcImNyYW5iZXJyeSBqdWljZSBjb2NrdGFpbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTQxMzAsXG4gICAgICBcIm5hbWVcIjogXCJjcmVhbSBzb2RhXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTE3NyxcbiAgICAgIFwibmFtZVwiOiBcImdlbGF0aW5lXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2NDUsXG4gICAgICBcIm5hbWVcIjogXCJoYWxsb3dlZW4gc3ByaW5rbGVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNDA1MSxcbiAgICAgIFwibmFtZVwiOiBcImdyZXkgZ29vc2Ugdm9ka2FcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzczXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNTQsXG4gICAgICBcIm5hbWVcIjogXCJ3aGlwcGVkIGNyZWFtXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzgyOCxcbiAgICAgIFwibmFtZVwiOiBcIm1hcmluYXRlZCBhcnRpY2hva2UgaGVhcnRzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI2NixcbiAgICAgIFwibmFtZVwiOiBcImNyaW1pbmkgbXVzaHJvb21zXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDE3LFxuICAgICAgXCJuYW1lXCI6IFwiY3JlYW0gY2hlZXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDE5LFxuICAgICAgXCJuYW1lXCI6IFwiZmV0YVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjIwMjcsXG4gICAgICBcIm5hbWVcIjogXCJtaXhlZCBpdGFsaWFuIGhlcmJzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgICAgXCJuYW1lXCI6IFwia29zaGVyIHNhbHRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDExNDU3LFxuICAgICAgXCJuYW1lXCI6IFwic3BpbmFjaFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA0NCxcbiAgICAgIFwibmFtZVwiOiBcImJhc2lsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3MDM2LFxuICAgICAgXCJuYW1lXCI6IFwiaXRhbGlhbiBzYXVzYWdlIGxpbmtzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMTE1NDksXG4gICAgICBcIm5hbWVcIjogXCJtYXJpbmFyYSBzYXVjZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAzOCxcbiAgICAgIFwibmFtZVwiOiBcInBlY29yaW5vIHJvbWFubyBjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEzMDQsXG4gICAgICBcIm5hbWVcIjogXCJwZWFzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTY3NyxcbiAgICAgIFwibmFtZVwiOiBcInNoYWxsb3RzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTAyMDQyMCxcbiAgICAgIFwibmFtZVwiOiBcInBhc3RhIHNoZWxsc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTAyNixcbiAgICAgIFwibmFtZVwiOiBcInNocmVkZGVkIG1venphcmVsbGFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTg0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjMwLFxuICAgICAgXCJuYW1lXCI6IFwic2tpbSBtaWxrIHJpY290dGEgY2hlZXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM5NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNDEwNixcbiAgICAgIFwibmFtZVwiOiBcIndoaXRlIHdpbmVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjc1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExNDYzLFxuICAgICAgXCJuYW1lXCI6IFwiZnJvemVuIHNwaW5hY2hcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjUsXG4gICAgICBcIm5hbWVcIjogXCJwZXBwZXJqYWNrXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIxMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxNDYyMyxcbiAgICAgIFwibmFtZVwiOiBcImJsYWNrYmVycnkganVpY2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzMDIsXG4gICAgICBcIm5hbWVcIjogXCJyYXNwYmVycnlcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNTQsXG4gICAgICBcIm5hbWVcIjogXCJwaW5lYXBwbGUgd2l0aCBqdWljZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTA3MCxcbiAgICAgIFwibmFtZVwiOiBcInN3ZWV0IGNoZXJyaWVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNDE4MSxcbiAgICAgIFwibmFtZVwiOiBcImNob2NvbGF0ZSBzeXJ1cFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTg2MTcsXG4gICAgICBcIm5hbWVcIjogXCJncmFoYW0gY3JhY2tlciBjcnVtYnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMTM1LFxuICAgICAgXCJuYW1lXCI6IFwibnV0c1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTAzNyxcbiAgICAgIFwibmFtZVwiOiBcImhhYXMgYXZvY2Fkb3NcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjc1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE2MDU3LFxuICAgICAgXCJuYW1lXCI6IFwiZ2FyYmFuem9zXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNDUsXG4gICAgICBcIm5hbWVcIjogXCJkaWxsd2VlZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTI1NixcbiAgICAgIFwibmFtZVwiOiBcImdyZWVrIHlvZ3VydFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTE1MixcbiAgICAgIFwibmFtZVwiOiBcImxlbW9uIGp1aWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI5MSxcbiAgICAgIFwibmFtZVwiOiBcInNwcmluZyBvbmlvbnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTIzNixcbiAgICAgIFwibmFtZVwiOiBcInBlYWNoZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MDk1LFxuICAgICAgXCJuYW1lXCI6IFwiaWNlY3JlYW1cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwODYyLFxuICAgICAgXCJuYW1lXCI6IFwiY29va2VkIGJhY29uIHN0cmlwc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTExNCxcbiAgICAgIFwibmFtZVwiOiBcInJvYXN0ZWQgY2hpY2tlblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEzMzMsXG4gICAgICBcIm5hbWVcIjogXCJncmVlbiBwZXBwZXJzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDI2LFxuICAgICAgXCJuYW1lXCI6IFwiZnJlc2ggbW96emFyZWxsYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAyMTE1MjksXG4gICAgICBcIm5hbWVcIjogXCJpdGFsaWFuIHRvbWF0b1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMTAwOSxcbiAgICAgIFwibmFtZVwiOiBcIndoaXRlIGNoZWRkYXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk4OTk4LFxuICAgICAgXCJuYW1lXCI6IFwiYmFsc2FtaWMgZ2xhemVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDgwMzAsXG4gICAgICBcIm5hbWVcIjogXCJmcnVpdCBsb29wc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxOTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkxMTYsXG4gICAgICBcIm5hbWVcIjogXCJtYXJzaG1hbGxvd1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYxNTgsXG4gICAgICBcIm5hbWVcIjogXCJodW1tdXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNDYsXG4gICAgICBcIm5hbWVcIjogXCJwcmVwYXJlZCB5ZWxsb3cgbXVzdGFyZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIxNCxcbiAgICAgIFwibmFtZVwiOiBcImV2YXBvcmF0ZWQgbWlsa1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MjE0LFxuICAgICAgXCJuYW1lXCI6IFwib3JhbmdlIGp1aWNlIGNvbmNlbnRyYXRlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MjE2LFxuICAgICAgXCJuYW1lXCI6IFwib3JhbmdlIHBlZWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTIzLFxuICAgICAgXCJuYW1lXCI6IFwiYmFjb24gc2xpY2VzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTA1MixcbiAgICAgIFwibmFtZVwiOiBcInN0cmluZyBiZWFuc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE5NTksXG4gICAgICBcIm5hbWVcIjogXCJiYWJ5IGFydWd1bGEgbGVhdmVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDA0LFxuICAgICAgXCJuYW1lXCI6IFwiYmx1ZSBjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkyNTIsXG4gICAgICBcIm5hbWVcIjogXCJwZWFyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0MzQwOCxcbiAgICAgIFwibmFtZVwiOiBcInBlYXIganVpY2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNDksXG4gICAgICBcIm5hbWVcIjogXCJmcmVzaCB0aHltZSBsZWF2ZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjgxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMTU1LFxuICAgICAgXCJuYW1lXCI6IFwid2FsbnV0IGhhbHZlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTE2OTMsXG4gICAgICBcIm5hbWVcIjogXCJjYW5uZWQgdG9tYXRvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE3MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTEyNCxcbiAgICAgIFwibmFtZVwiOiBcImNhcnJvdHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMTIsXG4gICAgICBcIm5hbWVcIjogXCJjb3JpYW5kZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMjAxNCxcbiAgICAgIFwibmFtZVwiOiBcImNvbWlub1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE5MTMsXG4gICAgICBcIm5hbWVcIjogXCJmcm96ZW4gY29yblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE0NzcsXG4gICAgICBcIm5hbWVcIjogXCJ6dWNjaGluaSBzcXVhc2hcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjIwNDQ1LFxuICAgICAgXCJuYW1lXCI6IFwic3RlYW1lZCByaWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwNDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwMyxcbiAgICAgIFwibmFtZVwiOiBcImdyb3VuZCBiYXNpbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxOThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYwMTgsXG4gICAgICBcIm5hbWVcIjogXCJjYW5uZWQgYmxhY2sgYmVhbnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk5MjIzLFxuICAgICAgXCJuYW1lXCI6IFwiY2FubmVkIGNoaXBvdGxlIGNoaWxpZXMgaW4gYWRvYm9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMTY1LFxuICAgICAgXCJuYW1lXCI6IFwiY2lsYW50cm9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjE4MzY0LFxuICAgICAgXCJuYW1lXCI6IFwiZmxvdXIgdG9ydGlsbGFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNjExMjgyLFxuICAgICAgXCJuYW1lXCI6IFwid2hpdGUgb25pb25zXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTQ1NyxcbiAgICAgIFwibmFtZVwiOiBcImJhYnkgc3BpbmFjaCBsZWF2ZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjY4LFxuICAgICAgXCJuYW1lXCI6IFwiZHJpZWQgc2hpaXRha2UgbXVzaHJvb21cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwMDA1LFxuICAgICAgXCJuYW1lXCI6IFwiZmFycm9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNTExMjgyLFxuICAgICAgXCJuYW1lXCI6IFwieWVsbG93IG9uaW9uXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDY5LFxuICAgICAgXCJuYW1lXCI6IFwiYmFsc2FtaWMgdmluZWdhclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyNTAsXG4gICAgICBcIm5hbWVcIjogXCJib3N0b24gYmliYiBsZXR0dWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMTU2LFxuICAgICAgXCJuYW1lXCI6IFwiZnJlc2ggY2hpdmVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQwMjUsXG4gICAgICBcIm5hbWVcIjogXCJtYXlvbm5haXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTExOSxcbiAgICAgIFwibmFtZVwiOiBcIm5hcGEgY2FiYmFnZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMTEyLFxuICAgICAgXCJuYW1lXCI6IFwicmVkIGNhYmJhZ2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk4OTYyLFxuICAgICAgXCJuYW1lXCI6IFwic3dlZXQgY2hpbGkgc2F1Y2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDQyLFxuICAgICAgXCJuYW1lXCI6IFwiZHJpZWQgdGh5bWVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwMjAsXG4gICAgICBcIm5hbWVcIjogXCJncmFudWxhdGVkIGdhcmxpY1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMjM1NzIsXG4gICAgICBcIm5hbWVcIjogXCJncm91bmQgY2h1Y2tcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjAwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDExMjUwLFxuICAgICAgXCJuYW1lXCI6IFwiYnV0dGVyaGVhZCBsZXR0dWNlIGxlYXZlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTA2NCxcbiAgICAgIFwibmFtZVwiOiBcImJha2VkIGNoaWNrZW4gYnJlYXN0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAxNSxcbiAgICAgIFwibmFtZVwiOiBcImN1cnJ5IHNlYXNvbmluZ1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwOTE1OSxcbiAgICAgIFwibmFtZVwiOiBcImxpbWUgcGVlbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTg5OTEsXG4gICAgICBcIm5hbWVcIjogXCJtaW50IGNodXRuZXlcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzMTYsXG4gICAgICBcIm5hbWVcIjogXCJzdHJhd2JlcnJ5XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTA5MCxcbiAgICAgIFwibmFtZVwiOiBcImJyb2Njb2xpIGNyb3duc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTE4MjEsXG4gICAgICBcIm5hbWVcIjogXCJzd2VldCBvcmFuZ2UgcGVwcGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDIxOCxcbiAgICAgIFwibmFtZVwiOiBcInBvcmsgdGVuZGVybG9pblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkxNTcsXG4gICAgICBcIm5hbWVcIjogXCJtaW5pIG0mbVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTg4NzEsXG4gICAgICBcIm5hbWVcIjogXCJoYXdhaWlhbiBzd2VldCByb2xsc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA1NTA2MixcbiAgICAgIFwibmFtZVwiOiBcImJvbmVsZXNzIHNraW5sZXNzIGNoaWNrZW4gYnJlYXN0c1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTkxNTEsXG4gICAgICBcIm5hbWVcIjogXCJyZWVzZSBwaWVjZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNDEwMDksXG4gICAgICBcIm5hbWVcIjogXCJjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDE4NDEzLFxuICAgICAgXCJuYW1lXCI6IFwiZmxhdGJyZWFkXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDExMTUyOSxcbiAgICAgIFwibmFtZVwiOiBcImdyYXBlIHRvbWF0b1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTAxOSxcbiAgICAgIFwibmFtZVwiOiBcInVuc3dlZXRlbmVkIGFwcGxlIHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxODA3OSxcbiAgICAgIFwibmFtZVwiOiBcImRyeSBicmVhZGNydW1ic1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYwNjksXG4gICAgICBcIm5hbWVcIjogXCJsZWd1bWVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MDc5LFxuICAgICAgXCJuYW1lXCI6IFwiZHJpZWQgY3JhbmJlcnJpZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExOTM1LFxuICAgICAgXCJuYW1lXCI6IFwiY2F0c3VwXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjE1MSxcbiAgICAgIFwibmFtZVwiOiBcInBpc3RhY2hpb1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE4MjEsXG4gICAgICBcIm5hbWVcIjogXCJyZWQgc3dlZXQgcGVwcGVyc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDY2MTUsXG4gICAgICBcIm5hbWVcIjogXCJ2ZWdldGFibGUgc3RvY2tcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjEzXG4gICAgfVxuICBdO1xuXG5leHBvcnQgZGVmYXVsdCBpbmdyZWRpZW50c0RhdGE7XG4iLCJjb25zdCByZWNpcGVEYXRhID0gW1xuICAgIHtcbiAgICAgIFwiaWRcIjogNTk1NzM2LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81OTU3MzYtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkyMDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMjQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxOTkwMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIG1peGluZyBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgZHJ5IGluZ3JlZGllbnRzIChmbG91ciwgcHVkZGluZyBtaXgsIHNvZGEgYW5kIHNhbHQpLiBTZXQgYXNpZGUuSW4gYSBsYXJnZSBtaXhpbmcgYm93bCBvZiBhIHN0YW5kIG1peGVyLCBjcmVhbSBidXR0ZXIgZm9yIDMwIHNlY29uZHMuIEdyYWR1YWxseSBhZGQgZ3JhbnVsYXRlZCBzdWdhciBhbmQgYnJvd24gc3VnYXIgYW5kIGNyZWFtIHVudGlsIGxpZ2h0IGFuZCBmbHVmZnkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBlZ2cgYW5kIHZhbmlsbGEgYW5kIG1peCB1bnRpbCBjb21iaW5lZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGRyeSBpbmdyZWRpZW50cyBhbmQgbWl4IG9uIGxvdyBqdXN0IHVudGlsIGluY29ycG9yYXRlZC4gU3RpciBpbiBjaG9jb2xhdGUgY2hpcHMuU2Nvb3AgdGhlIGRvdWdoIGludG8gMSw1IHRhYmxlc3Bvb24gc2l6ZSBiYWxscyBhbmQgcGxhY2Ugb24gYSBwbGF0ZSBvciBzaGVldC4gQ292ZXIgd2l0aCBzYXJhbiB3cmFwIGFuZCBjaGlsbCBhdCBsZWFzdCAyIGhvdXJzIG9yIG92ZXJuaWdodC5XaGVuIHJlYWR5IHRvIGJha2UsIHByZWhlYXQgb3ZlbiB0byAzNTAgZGVncmVlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIGNvb2tpZSBkb3VnaCBiYWxscyBpbnRvIHVuZ3JlYXNlZCBtdWZmaW4gcGFuLiBTcHJpbmtsZSB3aXRoIHNlYSBzYWx0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciA5IHRvIDEwIG1pbnV0ZXMsIG9yIHVudGlsIHlvdSBzZWUgdGhlIGVkZ2VzIHN0YXJ0IHRvIGJyb3duLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIHBhbiBmcm9tIHRoZSBvdmVuIGFuZCBsZXQgc2l0IGZvciAxMCBtaW51dGVzIGJlZm9yZSByZW1vdmluZyBvbnRvIGEgY29vbGluZyByYWNrLlRvcCB3aXRoIGljZSBjcmVhbSBhbmQgYSBkcml6emxlIG9mIGNob2NvbGF0ZSBzYXVjZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJMb2FkZWQgQ2hvY29sYXRlIENoaXAgUHVkZGluZyBDb29raWUgQ3Vwc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2NzgzNTMsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzY3ODM1My01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDkwMTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwMDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjA0NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3ZlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwNDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTkxMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYxMTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMDA2MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDI0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjEyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTYxNjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlYXNvbiB0aGUgcG9yayBjaG9wcyB3aXRoIHNhbHQgYW5kIHBlcHBlciBhbmQgZ3JpbGwgb3IgcGFuIGZyeSBvdmVyIG1lZGl1bSBoaWdoIGhlYXQgdW50aWwgY29va2VkLCBhYm91dCAzLTUgbWludXRlcyBwZXIgc2lkZS4gKElmIGdyaWxsaW5nLCBiYXN0ZSB0aGUgY2hvcHMgaW4gdGhlIG1hcGxlIGRpam9uIGFwcGxlIGNpZGVyIHNhdWNlIGFzIHlvdSBncmlsbC4pTWVhbndoaWxlLCBtaXggdGhlIHJlbWFpbmluZyBpbmdyZWRpZW50cyBleGNlcHQgdGhlIGFwcGxlIHNsaWNlcywgYnJpbmcgdG8gYSBzaW1tZXIgYW5kIGNvb2sgdW50aWwgdGhlIHNhdWNlIHRoaWNrZW5zLCBhYm91dCAyLTUgbWludXRlcy5HcmlsbCBvciBzYXV0ZSB0aGUgYXBwbGUgc2xpY2VzIHVudGlsIGp1c3QgdGVuZGVyIGJ1dCBzdGlsbCBjcmlzcC5Ub3NzIHRoZSBwb3JrIGNob3BzIGFuZCBhcHBsZSBzbGljZXMgaW4gdGhlIG1hcGxlIGRpam9uIGFwcGxlIGNpZGVyIHNhdWNlIGFuZCBlbmpveSFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJNYXBsZSBEaWpvbiBBcHBsZSBDaWRlciBHcmlsbGVkIFBvcmsgQ2hvcHNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQxMjMwOSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNDEyMzA5LTU1NngzNzAuanBlZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDUxMDAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMjAyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjE2OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNzYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA0MjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHRoZSBob3Qgc2F1Y2UsIGJ1dHRlciwgbWFuZ28gaGFiYW5lcm8gc2F1Y2UsIGJyb3duIHN1Z2FyLCBjaGlsaSBwb3dkZXIsIGdhcmxpYyBwb3dkZXIsIG9uaW9uIHBvd2RlciwgYmxhY2sgcGVwcGVyLCBjYXllbm5lIHBlcHBlciBhbmQgc2Vhc29uaW5nIHNhbHQgaW4gYSBib3dsLiBTdGlyIHZpZ29yb3VzbHkgdW50aWwgY29tcGxldGVseSBjb21iaW5lZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJEaXJ0eSBTdGV2ZSdzIE9yaWdpbmFsIFdpbmcgU2F1Y2VcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2F1Y2VcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3NDE2MDMsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc0MTYwMy01NTZ4MzcwLmpwZWdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwNDAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDExLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5Mjk2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjA5OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXYXRjaCBob3cgdG8gbWFrZSB0aGlzIHJlY2lwZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBsYXJnZSBib3dsLCB3aGlzayB0b2dldGhlciBidXR0ZXJtaWxrLCBlZ2dzLCBiYWtpbmcgcG93ZGVyLCBzdWdhciwgc2FsdCBhbmQgYnV0dGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhbm90aGVyIGxhcmdlIGJvd2wgbWl4IHRvZ2V0aGVyIGFsbC1wdXJwb3NlIGZsb3VyIGFuZCBidWNrd2hlYXQgZmxvdXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNsb3dseSBhZGQgZmxvdXIgaW50byB0aGUgd2V0IGluZ3JlZGllbnRzIG1peGluZyB3aXRoIGEgd2hpc2suXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB1bnRpbCB0aGVyZSBhcmUgbm8gbHVtcHMgYW5kIHRoZSBiYXR0ZXIgaXMgc21vb3RoIGFuZCB2ZWx2ZXR5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIGNhc3QgaXJvbiBza2lsbGV0IG9yIGZsYXQgZ3JpbGwgcGFuIG92ZXIgbWVkaXVtLWhpZ2ggaGVhdCwgbWVsdCBhIHRhYmxlc3Bvb24gb2YgYnV0dGVyLiBMYWRsZSBwYW5jYWtlIGJhdHRlciBvbnRvIHNraWxsZXQgdG8gZGVzaXJlZCBzaXplLiBVc2luZyB0aGUgbGFkbGUsIGZvcm0gcGFuY2FrZSBpbnRvIGNpcmN1bGFyIHNoYXBlLiBDb29rIG9uIGVhY2ggc2lkZSBmb3IgMiB0byAzIG1pbnV0ZXMgb3IgdW50aWwgZ29sZGVuIGJyb3duLiBTZXQgcGFuY2FrZXMgYXNpZGUgYW5kIGtlZXAgd2FybS4gUmVwZWF0IHdpdGggcmVtYWluaW5nIGluZ3JlZGllbnRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJPbmNlIGNvbXBsZXRlZCwgc3ByZWFkIHBlYW51dCBidXR0ZXIgb24gYSBwYW5jYWtlLCBsYXllciBpdCB3aXRoIHNsaWNlZCBiYW5hbmFzIGFuZCBkcml6emxlIGl0IHdpdGggaG9uZXkuIFRvcCB0aGUgcGFuY2FrZSB3aXRoIGFub3RoZXIgcGFuY2FrZSB0byBmb3JtIGEgc2FuZHdpY2guIFJlcGVhdCB3aXRoIHJlbWFpbmluZyBwYW5jYWtlcyBhbmQgc2VydmUgd2l0aCBleHRyYSBob25leS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJFbHZpcyBQYW5jYWtlc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1NjIzMzQsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU2MjMzNC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwOTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjEyNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5Mzc4NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDU4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzYyNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIyMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTgzNzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzA0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQxMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzY5NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM3NjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzYyNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJHcmVhc2Ugb3Igc3ByYXkgb2lsIGEgOcOXNSBpbmNoIGxvYWYgcGFuLlByZWhlYXQgb3ZlbiB0byAxNzAg4oCTIDIwMMKwRiAobG93ZXN0IHBvc3NpYmxlKS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHdhcm0gd2F0ZXIgd2l0aCBicm93biByaWNlIHN5cnVwLCBtb2xhc3NlcywgYW5kIHllYXN0IGluIGEgY3VwIGxhcmdlciB0aGFuIDggb3ouLCBhcyBpdCBtYXkgYnViYmxlIG92ZXI7IHNldCBhc2lkZSB1bnRpbCBmb2FteSBvbiB0aGUgdG9wLCBubyBtb3JlIHRoYW4gNSBtaW51dGVzLkluIHRoZSBib3dsIG9mIHlvdXIgbWl4ZXIsIGJlYXQgdGhlIGVnZ3MgYXQgaGlnaCBzcGVlZCBpbiBhIGxhcmdlIG1peGluZyBib3dsIHVudGlsIGxhcmdlIGJ1YmJsZXMgZm9ybSwgYWJvdXQgMjAgc2Vjb25kcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgdG9nZXRoZXIgdGhlIGRyeSBpbmdyZWRpZW50czsgc2V0IGFzaWRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIG9pbCwgdmluZWdhciBhbmQgeWVhc3QgbWl4dHVyZSB0byB0aGUgZWdnIHdoaXRlcyBhbmQgYmxlbmQgb24gbG93IGZvciBhIGZldyBzZWNvbmRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZHJ5IGluZ3JlZGllbnRzIGFsbCBhdCBvbmNlIGFuZCBtaXggb24gbG93IHNwZWVkIHVudGlsIGFsbCBkcnkgaW5ncmVkaWVudHMgYXJlIG1vaXN0ZW5lZC4gVGhlbiBiZWF0IG9uIGhpZ2ggZm9yIDEgbWludXRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZG91Z2ggYmF0dGVyIHRvIHByZXBhcmVkIHBhbiBhbmQgZGlzdHJpYnV0ZSBhbmQgc21vb3RoIHRoZSB0b3AgdXNpbmcgYSBydWJiZXIgc3BhdHVsYS4gWW91J2xsIHdhbnQgdG8gbWVldCBhbGwgc2lkZXMgb2YgdGhlIHBhbi4gSWYgeW91IG1pc3MgdGhlIGNvcm5lcnMgdGhhdCB3aWxsIHN0aWxsIGJlIG9rYXkuIEl0IHdpbGwgZmlsbCBpbiB1cG9uIHJpc2luZy4gVG8gZXZlbiBvdXQgdG9wLCBkcm9wIGEgZmV3IGRyb3BzIG9mIGZpbHRlcmVkIHdhdGVyIG9uIHRvcCwgYW5kIHNwcmVhZCBldmVubHkgd2l0aCBhIHJ1YmJlciBzcGF0dWxhLCBvciBkaXAgc3BhdHVsYSBpbiB3YXRlciBzZXZlcmFsIHRpbWVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgYnJlYWQgcGFuIGluIHRoZSBvdmVuLiBUdXJuIG92ZW4gb2ZmLiBBbGxvdyB0aGUgZG91Z2ggdG8gcmlzZSB1bnRpbCB0aGUgY2VudGVyIGlzIGFib3V0IDEvMuKAnSBvdmVyIHRoZSB0b3Agb2YgdGhlIHBhbiwgYWJvdXQgMjIgbWludXRlcy4gSXQgd2lsbCByaXNlIG1vcmUgd2hpbGUgdGhlIG92ZW4gaXMgaGVhdGluZyBhbmQgZHVyaW5nIGJha2luZy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHBhbiBmcm9tIG92ZW4gYW5kIHByZWhlYXQgb3ZlbiB0byAzNzXCsEYuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBwYW4gb24gdGhlIGNlbnRlciBvZiB0aGUgcmFjayBpbiB0aGUgY2VudGVyIG9mIHRoZSBvdmVuIGFuZCBiYWtlIGZvciBhYm91dCA0NSBtaW51dGVzIG9yIG1vcmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgbG9hZiBmcm9tIHRoZSBvdmVuIGFuZCBpbW1lZGlhdGVseSByZW1vdmUgaXQgZnJvbSB0aGUgcGFuIChjYXJlZnVsIGl0IHdpbGwgYmUgaG90KSwgYW5kIHNldCB0aGUgbG9hZiBvbiBhIGNvb2xpbmcgcmFjayB0byBjb29sLiBJZiB5b3UgZG8gbm90IHJlbW92ZSBpdCByaWdodCBhd2F5IHRoZSBzdGVhbSB3aWxsIG1ha2UgdGhlIGNydXN0IHNvZ2d5LlNsaWNlIG9mZiB0aGUgdHdvIGVuZHMgdG8gYWxsb3cgdGhlIHN0ZWFtIHRvIGVzY2FwZSwgb3IgaXQgd2lsbCBiZWdpbiB0byBzaW5rIGluIG9uIHRoZSBzaWRlcyBhbmQgYm90dG9tLk9uY2UgY29vbGVkLCBpdCB3aWxsIHNocmluayBhIGxpdHRsZSBiaXQuIFNsaWNlIGl0IHdpdGggYW4gZWxlY3RyaWMgc2xpY2VyLCBlbGVjdHJpYyBrbmlmZSBvciBzZXJyYXRlZCBrbmlmZS4gWW91J2xsIGdldCBhYm91dCAxMy0xNiwgZGVwZW5kaW5nIHVwb24gaG93IHRoaWNrIHlvdSBzbGljZSBpdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxMFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiTW9jayBVZGnigJlzIEdsdXRlbiBGcmVlIFdob2xlIEdyYWluIEJyZWFkXCIsXG4gICAgICBcInRhZ3NcIjogW11cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTA3OTIxLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81MDc5MjEtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTM1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTA5OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG8gbWFrZSB0aGUgQ3VwY2FrZXM6IFByZWhlYXQgb3ZlbiB0byAzNTAgZGVncmVlcy4gTGluZSAxMiBjdXBjYWtlIHRpbnMgd2l0aCBwYXBlciBob2xkZXJzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlzayB0b2dldGhlciBkcnkgRnJ1aXQgQ29ja3RhaWwgQ3VwY2FrZXMgaW5ncmVkaWVudHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBpbiB3ZXQgRnJ1aXQgQ29ja3RhaWwgQ3VwY2FrZXMgaW5ncmVkaWVudHMgYW5kIHN0aXIgd2l0aCBhIHJ1YmJlciBzcGF0dWxhIHVudGlsIHRob3JvdWdobHkgY29tYmluZWQuIEZpbGwgY3VwY2FrZSB0aW5zIGV2ZW5seSwgYW5kIGJha2UgZm9yIDIwIG1pbnV0ZXMgb3IgdW50aWwgdGhpbiBrbmlmZSBpbnNlcnRlZCBpbiBjZW50ZXIgY29tZXMgb3V0IGNsZWFuLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkFtYnJvc2lhIEN1cGNha2VzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDcyMTE0NixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzIxMTQ2LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIwNjEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIxMDQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIxMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTkwNzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDgyMTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiSGFuZGZ1bFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTkxMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA4MTIxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIxNDIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCB0aGUgb3ZlbiB0byAzMjUgZGVncmVlcyBGLkNvYXJzZWx5IGNob3AgdGhlIGFsbW9uZHMgYW5kIHBlY2Fucy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ29tYmluZSB0aGUgb2F0cywgYWxtb25kcywgcGVjYW5zLCBhbmQgc2FsdCBpbiBhIGJvd2wuIFRvc3MgdG8gY29tYmluZS5JbiBhIG1lZGl1bS1zaXplZCBib3dsLCBjb21iaW5lIHRoZSBjb2NvbnV0IG9pbCAobWVhc3VyZSBleGFjdGx5IHdoZW4gaXQncyBtZWx0ZWQgYW5kIG5vdCBpbiB0aGUgaGFyZGVuZWQgc3RhdGUpLCBhbmQgMS8yIGN1cCBjaG9jb2xhdGUgY2hpcHMuTWljcm93YXZlIGluIGJ1cnN0cyBvZiAxNSBzZWNvbmRzIHN0aXJyaW5nIGluIGJldHdlZW4gZWFjaCBidXJzdCBmb3IgMTUgc2Vjb25kcyB1bnRpbCBjb21wbGV0ZWx5IG1lbHRlZC5TdGlyIGluIHRoZSBicm93biBzdWdhciAobWVhc3VyZWQgbGlnaHRseSBwYWNrZWQpLCBob25leSBvciBtYXBsZSBzeXJ1cCwgYW5kIHZhbmlsbGEgZXh0cmFjdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciB0aGUgY2hvY29sYXRlIHdldCBtaXh0dXJlIGludG8gdGhlIG9hdCBhbmQgbnV0IG1peHR1cmUgYW5kIHN0aXIgdW50aWwgd2VsbCBjb21iaW5lZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIHRoZSBncmFub2xhIGV2ZW5seSBvbnRvIGEgcGFyY2htZW50IGxpbmVkIGJha2luZyBzaGVldC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBmb3IgMjAtMzAgbWludXRlcyAoZGVwZW5kaW5nIG9uIHRoZSBoZWF0IG9mIHlvdXIgb3ZlbikgbWFraW5nIHN1cmUgdG8gZmxpcCBhbmQgc3RpciB0aGUgZ3Jhbm9sYSBhcm91bmQgZXZlcnkgNi04IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBhbmQgYWxsb3cgdGhlIGdyYW5vbGEgdG8gaGFyZGVuIGFuZCBzZXQgdXAuIChJdCBtYXkgYmUgc29mdCBhbmQgbm90IHZlcnkgXFxcImdyYW5vbGEtbGlrZVxcXCIsIGJ1dCBpdCBoYXJkZW5zIGFzIGl0IGRyaWVzIG91dCBzbyBiZSBjYXJlZnVsIHRvIG5vdCBvdmVyLWNvb2sgaXQpLiBNaW5lIGdlbmVyYWxseSB0YWtlcyBhYm91dCAyMSBtaW51dGVzIHRvIGJlIGZ1bGx5IGJha2VkLkFsbG93IHRoZSBncmFub2xhIHRvIHNpdCBhdCByb29tIHRlbXBlcmF0dXJlIGZvciBhIGZldyBob3VycyB0byBoYXJkZW4gYW5kIHNldCB1cC5PbmNlIHRoZSBncmFub2xhIGlzIGhhcmRlbmVkLCBzdGlyIGluIHRoZSByZW1haW5pbmcgMS8yIGN1cCBjaG9jb2xhdGUgY2hpcHMgYW5kIHRoZSB0b2FzdGVkIGZsYWtlZCBjb2NvbnV0LlRvIG1ha2UgYSB5b2d1cnQgYm93bDogZmlsbCBhIGJvd2wgd2l0aCB0aGUgY29jb251dCBjcmVhbSB5b2d1cnQsIGFkZCBhIHN3aXJsIG9mIG51dCBidXR0ZXIsIGFkZCBzb21lIGZydWl0IHN1Y2ggYXMgYSBiYW5hbmEsIGFkZCB0aGUgZ3Jhbm9sYSwgYW5kIGZpbmlzaCB3aXRoIGNoaWEgc2VlZHMuIEVuam95IGltbWVkaWF0ZWx5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkNyZWFteSBDb2NvbnV0IFlvZ3VydCBCb3dsIHdpdGggQ2hvY29sYXRlIEdyYW5vbGEgKFZpZGVvKVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1NDEyODgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU0MTI4OC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTYwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5Mzc0MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMDIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNDAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogODAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic3RpY2tcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDdXQgdGhlIGJ1dHRlciBpbnRvIHNtYWxsIGN1YmVzIGFuZCBrZWVwIHRoZW0gcmVmcmlnZXJhdGVkIHVudGlsIHJlYWR5IHRvIHVzZSAoSSBjdXQgb24gcGFyY2htZW50IHBhcGVyIGFuZCB3cmFwIHVwIHRoZSBidXR0ZXIgZm9yIGVhc3kgdHJhbnNmZXIuKS5JbiB0aGUgZm9vZCBwcm9jZXNzb3IsIGNvbWJpbmUgdGhlIGZsb3VyLCBhbG1vbmQgbWVhbCwgc3VnYXIsIGFuZCBzYWx0LiBJZiB5b3UgZG9u4oCZdCBoYXZlIGEgZm9vZCBwcm9jZXNzb3IsIHlvdSBjYW4gc2ltcGx5IHVzZSBhIGJvd2wgdG8gbWl4IGFsbCB0aGUgaW5ncmVkaWVudHMuSWYgeW91IHdhbnQgeW91ciBzZXNhbWUgc2VlZHMgdG8gYmUgZmluZSB0ZXh0dXJlLCBhZGQgdGhlbSBub3cuIElmIHlvdSBwcmVmZXIgdG8ga2VlcCB0aGUgb3JpZ2luYWwgc2hhcGUgb2Ygc2VzYW1lIHNlZWRzLCBhZGQgdGhlbSB3aXRoIGVnZyB5b2xrIGxhdGVyIG9uLlRha2Ugb3V0IHRoZSBidXR0ZXIgZnJvbSB0aGUgcmVmcmlnZXJhdG9yIGFuZCBtaXggdG9nZXRoZXIuIElmIHlvdSB1c2UgYSByZWd1bGFyIGJvd2wgdG8gbWl4LCB1c2UgYSBkb3VnaC9wYXN0cnkgYmxlbmRlciB0byBjb21iaW5lIHRoZSBidXR0ZXIgaW50byB0aGUgZHJ5IGluZ3JlZGllbnRzLkxhc3RseSBhZGQgZWdnIHlvbGsuSWYgdGhlIGZvb2QgcHJvY2Vzc29yIGlzIHNtYWxsIChsaWtlIG1pbmUpIGFuZCBpdCBkb2VzbuKAmXQgbG9vayBsaWtlIGl04oCZcyBtaXhlZCBjb21wbGV0ZWx5LCB0YWtlIGl0IG91dCBhbmQgbWl4IHdlbGwgd2l0aCBhIHNpbGljb25lIHNwYXR1bGEuRm9ybSB0aGUgZG91Z2ggaW50byBhIGJhbGwgYW5kIGN1dCBpbiBoYWxmLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSb2xsIGl0IHRvIGEgbG9nIGFwcHJveGltYXRlbHkgMuKAnSBhY3Jvc3MuIEZvciBtZSBpdOKAmXMgZWFzaWVyIHRvIHdvcmsgd2hlbiB0aGUgZG91Z2ggaXMgd3JhcHBlZCBpbiBwbGFzdGljIHdyYXAuIFdoaWxlIHJvbGxpbmcsIHVud3JhcCBzb21lIHBhcnRzIG9mIHBsYXN0aWMgd3JhcCB0aGVuIHJvbGwgYWdhaW4uIEZvcm0gYSBuaWNlIHNoYXBlLiBJIHdhc24ndCBwYXlpbmcgYXR0ZW50aW9uIHNvIG15IGxvZyBpcyBmbGF0IG9uIG9uZSBzaWRlIChzZWUgc3RlcCAxMSkhV3JhcCB0aGUgbG9ncyB0aWdodGx5IGluIHBsYXN0aWMgd3JhcCBhbmQgcmVmcmlnZXJhdGUgdW50aWwgZmlybSwgYWJvdXQgMSBob3VyLlByZWhlYXQgdGhlIG92ZW4gdG8gMzUwwrAgRiAoMTc1wrAgQykuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgZG91Z2ggZnJvbSBwbGFzdGljIHdyYXAgYW5kIGN1dCBpbnRvIGRpc2NzIGFib3V0IMK8IGluY2ggdGhpY2sgKGlmIHlvdSBwcmVmZXIgdGhpY2tlciBjb29raWVzLCBjdXQgaW50byBkaXNjcyBhYm91dCDCvSBpbmNoIGFuZCB5b3UgZ2V0IDIwIGNvb2tpZXMgdG90YWwpLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGVtIG9uIHR3byBiYWtpbmcgc2hlZXRzIGxpbmVkIHdpdGggcGFyY2htZW50IHBhcGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciBhYm91dCAxNSBtaW51dGVzLCBvciB1bnRpbCBsaWdodGx5IGJyb3duZWQgYXJvdW5kIHRoZSBlZGdlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gdGhlIG92ZW4gYW5kIGFsbG93IHRvIGNvb2wgb24gdGhlIGJha2luZyBzaGVldCBmb3IgYWJvdXQgMTAgbWludXRlcy4gVGhlbiB0cmFuc2ZlciB0byBhIHdpcmUgcmFjayB0byBjb29sIGNvbXBsZXRlbHkuIFN0b3JlIGNvb2tpZXMgaW4gYW4gYWlydGlnaHQgY29udGFpbmVyLiBDb29raWVzIHdpbGwgbGFzdCBmb3IgYSBkYXkgb3IgdHdvLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlNlc2FtZSBDb29raWVzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc3OTU4MyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzc5NTgzLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDU4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE1MDYyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExMTA5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTYwOTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDY0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDIxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTI2NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MTI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxNjE2OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxNjE2OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlcGFyZSB0aGUgY2hpY2tlbjogSW4gYSBsYXJnZSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgYnJvd24gc3VnYXIsIGdpbmdlciwgb2lsLCBzb3kgc2F1Y2UsIFNyaXJhY2hhIGFuZCBwZWFudXQgYnV0dGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGNoaWNrZW4gYW5kIHRvc3MgdG8gY29hdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTGV0IG1hcmluYXRlIGF0IHJvb20gdGVtcGVyYXR1cmUgZm9yIDE1IG1pbnV0ZXMgb3IgY292ZXIgYW5kIHJlZnJpZ2VyYXRlIGZvciB1cCB0byA2IGhvdXJzLiBQcmVoZWF0IHRoZSBvdmVuIGJyb2lsZXIgd2l0aCBhIHJhY2sgc2V0IDQtaW5jaGVzIGZyb20gdGhlIGhlYXQgc291cmNlLiBMaW5lIGFuIDE4eDEzLWluY2ggcmltbWVkIHNoZWV0IHBhbiB3aXRoIGZvaWwgYW5kIHNwcmF5IHdpdGggbm9uc3RpY2sgc3ByYXkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgY2hpY2tlbiBmcm9tIHRoZSBtYXJpbmFkZSwgZGlzY2FyZGluZyBleGNlc3MgbWFyaW5hZGUsIGFuZCBwbGFjZSBvbiBwcmVwYXJlZCBwYW4sIGNvdmVyaW5nIHR3by10aGlyZHMgb2YgdGhlIHBhbiBhbmQgc3BhY2luZyBldmVubHkuIEJyb2lsIGZvciA2IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgcGFuIGZyb20gdGhlIG92ZW4gYW5kIHNwcmVhZCBwaW5lYXBwbGUgb24gdGhlIHJlbWFpbmluZyBzcGFjZSBvbiB0aGUgcGFuLiBTcHJpbmtsZSB0aGUgcGluZWFwcGxlIHdpdGggMSB0YWJsZXNwb29uIGJyb3duIHN1Z2FyLiBCcm9pbCBmb3IgMyB0byA1IG1pbnV0ZXMgb3IgdW50aWwgY2hpY2tlbiBpcyBicm93bmVkIGFuZCBubyBsb25nZXIgcGluayBpbnNpZGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRyYW5zZmVyIHRoZSBjaGlja2VuIHRvIHNlcnZpbmcgcGxhdGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgY29sZXNsYXcgbWl4IGluIGEgbWVkaXVtIGJvd2wuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgYnJvaWxlZCBwaW5lYXBwbGUsIGxpbWUganVpY2UsIG9pbCwgc295IHNhdWNlIGFuZCBTcmlyYWNoYTsgdG9zcyB0byBjb2F0LiBEaXZpZGUgYW1vbmcgdGhlIHBsYXRlcyB3aXRoIHRoZSBjaGlja2VuIGFuZCBzcHJpbmtsZSB0aGUgc2xhdyB3aXRoIG1pbnQgb3IgYmFzaWwuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiVGhhaSBDaGlja2VuIFRlbmRlcnMgd2l0aCBCcm9pbGVkIFBpbmVhcHBsZSBTbGF3XCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1NTA5NDAsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU1MDk0MC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlIGhlYWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjE3MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwNDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2MzIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMTIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjkwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMDEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwOTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyMDAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IHRoZSBvdmVuIHRvIDM3NUZDb29rIGFuZCBwZWVsIHRoZSBoYXJkIGJvaWxlZCBlZ2dzIGFjY29yZGluZyB0byB5b3VyIGZhdm91cml0ZSBtZXRob2QuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBvbmlvbiwgZ2FybGljLCBzYWx0IGFuZCBwZXBwZXIgdG8gYSBtZWRpdW0gc2F1Y2VwYW4uIENvb2sgb3ZlciBtZWRpdW0gaGVhdCBmb3Igb25lIG9yIHR3byBtaW51dGVzLCB1bnRpbCBmcmFncmFudCBhbmQgc2xpZ2h0bHkgc29mdGVuZWQuVGhyb3cgdGhlIGNhdWxpZmxvd2VyIGZsb3JldHMgaW4gYW5kIGNvbnRpbnVlIGNvb2tpbmcgZm9yIGEgbWludXRlIG9yIHR3by5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGNoaWNrZW4gc3RvY2ssIGNvdmVyIGFuZCBicmluZyB0byB0aGUgYm9pbDsgbG93ZXIgaGVhdCBhbmQgY29udGludWUgY29va2luZyB1bnRpbCB0aGUgY2F1bGlmbG93ZXIgaXMgdGVuZGVyLCBhYm91dCA1LTcgbWludXRlcy5MYWRsZSB0aGUgY2F1bGlmbG93ZXIgbWl4dHVyZSBpbnRvIHlvdXIgYmxlbmRlcjsgYWRkIGdoZWUsIERpam9uIG11c3RhcmQgYW5kIG51dHJpdGlvbmFsIHllYXN0IGFuZCBwcm9jZXNzIG9uIGhpZ2ggc3BlZWQgdW50aWwgc3VwZXIgc21vb3RoIGFuZCBzaWxreSBpbiBjb25zaXN0ZW5jeS4gU2V0IGFzaWRlLiBTdGVhbSB0aGUgcmFwaW5pIGZvciAzMCBzZWNvbmRzIHRvIGEgbWludXRlLCB1bnRpbCBzbGlnaHRseSBzb2Z0ZW5lZCBhbmQgYnJpZ2h0IGdyZWVuLiBJbiBhIHNtYWxsIHNraWxsZXQsIGRyeSByb2FzdCB0aGUgaGF6ZWxudXRzIG92ZXIgbWVkaXVtIGhlYXQgdW50aWwgdGhleSBiZWNvbWUgZnJhZ3JhbnQgYW5kIHRha2UgYSBuaWNlIGdvbGRlbiBjb2xvcmF0aW9uLiBTbGljZSB0aGUgaGFyZCBib2lsZWQgZWdncyBhbmQgYWRkIHRoZW0gdG8gYSBsYXJnZSBtaXhpbmcgYm93bCwgZm9sbG93ZWQgYnkg4oCcQmVjaGFtZWzigJ0gc2F1Y2UsIHJhcGluaSBhbmQgdGhyZWUgcXVhcnRlcnMgb2YgdGhlIGhhemVsbnV0cy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHZlcnkgZGVsaWNhdGVseSB1bnRpbCB3ZWxsIGNvbWJpbmVkIGFuZCB0cmFuc2ZlciB0byBhbiBvdmVuIHNhZmUgZGlzaC4gVGVhciB0aGUgcHJvc2NpdXR0byBpbnRvIHNtYWxsZXIgcGllY2VzIGFuZCBhcnJhbmdlIHRoZW0gb24gdG9wIG9mIHRoZSBkaXNoLiBTcHJpbmtsZSB3aXRoIHRoZSByZXN0IG9mIHRoZSBoYXplbG51dHMuIENvdmVyIHdpdGggZm9pbCBhbmQgcGxhY2UgaW4gdGhlIG92ZW4gZm9yIDIwIG1pbnV0ZXM7IGFmdGVyIHRoYXQgdGltZSwgcmVtb3ZlIHRoZSBmb2lsIGFuZCBzZXQgdGhlIG92ZW4gdG8gYnJvaWwgZm9yIGEgMi0zIG1pbnV0ZXMgb3IgdW50aWwgdGhlIHByb3NjaXV0dG8gYmVjb21lcyBuaWNlIGFuZCBjcmlzcHkgYW5kIHRha2VzIGEgbmljZSBnb2xkZW4gY29sb3JhdGlvbi4gWW91IGNvdWxkIGFsc28gbWFrZSB0aGlzIGFoZWFkIG9mIHRpbWUgYW5kIHBsYWNlIGl0IGluIHRoZSBmcmlkZ2UgYWZ0ZXIgeW91IGhhdmUgY292ZXJlZCBpdCB3aXRoIGZvaWwgKGFsdGhvdWdoIHlvdSBtaWdodCB3YW50IHRvIGxldCBpdCBjb29sIGEgYml0IGJlZm9yZWhhbmQpLiBJbiB0aGlzIGNhc2UsIHlvdeKAmWxsIHdhbnQgdG8gaW5jcmVhc2Ugb3ZlbiB0aW1lIHRvIGFib3V0IDQ1IG1pbnV0ZXMsIGF0IDM3NUYuIFRoaXMgYWxzbyByZWhlYXRzIGV4dHJlbWVseSB3ZWxsIGluIHRoZSBtaWNyb3dhdmUgYW5kIHdpbGwgZWFzaWx5IGtlZXAgZm9yIDQtNSBkYXlzIGluIHRoZSByZWZyaWdlcmF0b3IuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiRWdnIGFuZCBSYXBpbmkgQ2Fzc2Vyb2xlXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1ODM1MDIsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU4MzUwMi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDYxNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjE5NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2MjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDcyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxic1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDY5NzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvbWJpbmUgMSBjdXAgY2hpY2tlbiBicm90aCwgMSBjdXAgQkJRIHNhdWNlLCAzIHRic3AgbGlxdWlkIHNtb2tlLCAyIHRic3AgV29yY2VzdGVyc2hpcmUgc2F1Y2UsIDMgcHJlc3NlZCBnYXJsaWMgY2xvdmVzLCAyIHRic3AgYnJvd24gc3VnYXIgYW5kIHN0aXIgdG8gY29tYmluZS5HZW5lcm91c2x5IHNwcmlua2xlIHRoZSBwb3JrIHJvYXN0IHdpdGggc2FsdCwgcGVwcGVyIGFuZCBwYXByaWthLlJ1YiB0aGUgc2Vhc29uaW5nIGludG8gdGhlIHBvcmsgc2hvdWxkZXIuQ2hvcCAxIGxhcmdlIG9uaW9uIGFuZCBwbGFjZSBpdCBpbnRvIHRoZSBib3R0b20gb2YgdGhlIHNsb3cgY29va2VyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgcG9yayByb2FzdCBvdmVyIHRoZSBvbmlvbiBhbmQgcG91ciB0aGUgbWFyaW5hZGUgb3ZlciB0aGUgcG9yay5Db3ZlciBhbmQgc2V0IG9uIGxvdyBmb3IgOCBob3Vycy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTGV0IGl0IGNvb2wgZG93biBzbyB5b3UgZG9uJ3QgYnVybiB5b3VyIGZpbmdlcnMgd2hpbGUgc2hyZWRkaW5nLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIG1lYXQgdG8gYSBsYXJnZSBib3dsIGFuZCBzaHJlZC4gVGhpcyBtZWF0IGlzIGZhbGwtYXBhcnQgdGVuZGVyISBUaGUgbWFyaW5hZGUgZW5oYW5jZXMgdGhlIG5hdHVyYWwgZmxhdm9ycyBvZiB0aGUgcG9yay4gV2hlbiB5b3UncmUgZG9uZSBzaHJlZGRpbmcgdGhlIHBvcmssIHBvdXIgYXMgbXVjaCBvZiB0aGUgcmVtYWluaW5nIHNhdWNlIG92ZXIgdGhlIHBvcmsgYXMgeW91IGxpa2UuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIHdpdGggbW9yZSBCYWJ5IFJheXMgQkJRIFNhdWNlLi4uIGFuZCBwaWNrbGVzXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiUHVsbGVkIFBvcmtcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU0MzY4NyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTQzNjg3LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2MDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwNDAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTg5NDIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDEwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDIxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDMyNzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogODEyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0MjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgYWxsIGluZ3JlZGllbnRzIHRvIGEgYmxlbmRlciAoZXhjZXB0IGdyYWhhbSBjcmFja2VycyBpZiB1c2luZykuIENvdmVyIGFuZCBibGVuZCB1bnRpbCB3ZWxsIHB1cmVlZCB0aGVuIHNlcnZlIHRvcHBlZCB3aXRoIGNydXNoZWQgZ3JhaGFtIGNyYWNrZXJzIGlmIGRlc2lyZWQuKlRoZSBiYW5hbmEgaXMgbW9zdGx5IHdoYXQgZ2l2ZXMgdGhpcyBzbW9vdGhpZSBpdCdzIHN3ZWV0bmVzcywgc28gSSByZWNvbW1lbmQgdXNpbmcgb25lIHRoYXQgaXMgc3BlY2tsZWQgKG5vdCBtdXNoeSB0aG91Z2gpLlJlY2lwZSBTb3VyY2U6IENvb2tpbmcgQ2xhc3N5XCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiUHVtcGtpbiBDaGVlc2VjYWtlIEJyZWFrZmFzdCBTbW9vdGhpZVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJtb3JuaW5nIG1lYWxcIixcbiAgICAgICAgXCJicnVuY2hcIixcbiAgICAgICAgXCJicmVha2Zhc3RcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1MTY5MDQsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzUxNjkwNC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwMTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDg5MDAzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDEwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZXBhcmUgYXBwbGUgZmlsbGluZzogTWVsdCBidXR0ZXIgb3ZlciBtZWRpdW0gaGVhdCBpbiAxMi0gaW5jaCBza2lsbGV0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgYXBwbGVzIGFuZCBzdWdhcjsgY29vayAyMCBtaW51dGVzLCBzdGlycmluZyBvY2Nhc2lvbmFsbHkuIFN0aXIgaW4gYXBwbGUganVpY2U7IGNvb2sgMSBtb3JlIG1pbnV0ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiR3JlYXNlIDEzIHggOS1pbmNoIGJha2luZyBkaXNoLiBBcnJhbmdlIDEvMiBvZiBicmVhZCBzbGljZXMsIG92ZXJsYXBwaW5nIHNsaWdodGx5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG1lZGl1bSBib3dsLCB3aGlzayBtaWxrLCBzYWx0LCBjaW5uYW1vbiBhbmQgZWdncy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciAxLzIgb2YgZWdnIG1peHR1cmUgb3ZlciBicmVhZC4gU2V0IGFzaWRlIDEvNCBvZiBhcHBsZSBmaWxsaW5nOyBjb3ZlciBhbmQgcmVmcmlnZXJhdGUgdG8gc3Bvb24gb24gYWZ0ZXIgYmFraW5nLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgcmVtYWluaW5nIGFwcGxlIGZpbGxpbmcgb3ZlciBicmVhZCBpbiBhbiBldmVuIGxheWVyLiBBcnJhbmdlIHJlbWFpbmluZyBicmVhZCBzbGljZXMgb3ZlciBhcHBsZSBsYXllci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciByZW1haW5pbmcgZWdnIG1peHR1cmUgb3ZlciB0b3AgYnJlYWQgbGF5ZXIuIFByZXNzIGJyZWFkIGRvd24gd2l0aCBzcGF0dWxhIHNvIGl0IGFic29yYnMgdGhlIG1heGltdW0gYW1vdW50IG9mIGVnZyBtaXh0dXJlLiBEb3QgYnJlYWQgd2l0aCBidXR0ZXIgYW5kIHNwcmlua2xlIHdpdGggc3VnYXIuIENvdmVyIGFuZCByZWZyaWdlcmF0ZSBvdmVybmlnaHQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvIGJha2U6IFByZWhlYXQgb3ZlbiB0byAzMjXCsEYuIFVuY292ZXIgZGlzaCBhbmQgYmFrZSA1MCB0byA1NSBtaW51dGVzIG9yIHVudGlsIGtuaWZlIGluc2VydGVkIGluIGNlbnRlciBjb21lcyBvdXQgY2xlYW4uIFJlaGVhdCByZW1haW5pbmcgYXBwbGUgbWl4dHVyZSBpbiBtaWNyb3dhdmUuIFNwb29uIG92ZXIgdG9wIHRvIHNlcnZlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkNpbm5hbW9uIFJhaXNpbiBPdmVybmlnaHQgRnJlbmNoIFRvYXN0IHcvIEFwcGxlIEZpbGxpbmdcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTg4MjQzLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy85ODgyNDMtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyOTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDMyMDA5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNTE1MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyOTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWVsdCBidXR0ZXIgdG8gYSBsYXJnZSBza2lsbGV0IG92ZXIgbWVkaXVtIGhlYXQuIEFzIHRoZSBidXR0ZXIgbWVsdHMsIGl0IHdpbGwgYmVnaW4gdG8gZm9hbSBhcyBpdCB0cmFuc2l0aW9ucyBmcm9tIGEgYnJpZ2h0LCBsZW1vbi15ZWxsb3cgY29sb3IgdG8gZ29sZGVuIGFuZCB0aGVuIGZpbmFsbHkgdG8gYSBudXR0eS1icm93biBjb2xvci4gQXMgdGhlIGJ1dHRlciBqdXN0IGJlZ2lucyB0byB0dXJuIG51dHR5LWJyb3duIGZyb20gZ29sZGVuLCByZWR1Y2UgeW91ciBoZWF0IHRvIG1lZGl1bS1sb3cgYW5kIGNhcmVmdWxseSB0b3NzIGluIHlvdXIgZ2FybGljIGFuZCBvbmlvbi4gQ29vayB1bnRpbCB0aGUgb25pb24ganVzdCBiZWdpbnMgdG8gYmVjb21lIHRlbmRlciBhbmQgdGhlbiBhZGQgaW4geW91ciBzaHJpbXAuIFN0aXJyaW5nIGZyZXF1ZW50bHksIGNvb2sgdW50aWwgdGhlIHNocmltcCB0dXJuIHBpbmsgYW5kIGxvc2UgdGhlaXIgdHJhbnNsdWNlbmNlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTdGlyIGluIHNhbHQsIGJsYWNrIHBlcHBlciwgcmVkIHBlcHBlciBmbGFrZXMgYW5kIGZyZXNoIHBhcnNsZXkuIFRvc3Mgc2hyaW1wIHRvIG1ha2Ugc3VyZSBhbGwgYXJlIHdlbGwtY29hdGVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgZnJvbSBoZWF0IGFuZCBzZXJ2ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCcm93biBCdXR0ZXIgR2FybGljIFNocmltcFwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzI0MDE4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83MjQwMTgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAwNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNsaWNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTU2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MDY5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNsaWNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IG9mZiB0aGUgY3J1c3QgZnJvbSA2IHNsaWNlcyBvZiBicmVhZC4gQ2hvcCB0aGUgY2VudGVycyBhbmQgcHV0IGludG8gYSBmb29kIHByb2Nlc3Nvci4gUHVsc2UgdW50aWwgeW91IGhhdmUgY29hcnNlIGJyZWFkY3J1bWJzLiBZb3Ugc2hvdWxkIGhhdmUgYWJvdXQgMyBjdXBzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNYWtlIHRoZSBzdHVmZmluZzogSW4gYSBsYXJnZSBib3dsLCBzdGlyIHRvZ2V0aGVyIHRoZSBicmVhZGNydW1icywgbGVtb24gemVzdCwgUGFybWVzYW4gY2hlZXNlLCBtaW5jZWQgZ2FybGljLCBjaG9wcGVkIHBhcnNsZXksIG1pbmNlZCBvcmVnYW5vLCAxLzIgY3VwIG9saXZlIG9pbCwgYW5kIGJsYWNrIHBlcHBlci4gU2V0IGFzaWRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJha2VkIFN0dWZmZWQgQXJ0aWNob2tlc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIixcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MjM4NTUsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYyMzg1NS01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTE2MDk4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTE2MDk4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxOTkwMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCBvdmVuIHRvIDM1MEZMaW5lIGEgYmFraW5nIHNoZWV0IHdpdGggcGFyY2htZW50LCBzZXQgYXNpZGUuSW4gYm93bCBvZiBzdGFuZCBtaXhlciBjcmVhbSBidXR0ZXIgYW5kIHBlYW51dCBidXR0ZXIgdG9nZXRoZXIgdW50aWwgc21vb3RoLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgYm90aCBzdWdhcnMgYW5kIGJlYXQgZm9yIDIgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGluIGVnZywgdmFuaWxsYSwgYmFraW5nIHNvZGEgYW5kIHNhbHQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB1bnRpbCBjb21iaW5lZC5UdXJuIG1peGVyIHRvIGxvdyBhbmQgYWRkIGluIGZsb3VyLlBvcnRpb24gb3V0IGRvdWdoIGJ5IGluIHRhYmxlc3Bvb24gYW1vdW50cy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUm9sbCBpbnRvIGEgYmFsbCBhbmQgdGhlbiBmbGF0dGVuIHRvIGFwcHJveGltYXRlbHkgIGluY2ggdGhpY2suXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIG9uIGJha2luZyBzaGVldCBhYm91dCAyIGluY2hlcyBhcGFydC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBmb3IgOC05IG1pbnV0ZXMgdW50aWwgZ29sZGVuIGF0IGhlIGVkZ2VzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgZnJvbSBvdmVuIGFuZCB0cmFuc2ZlciBjb29raWVzIHRvIGEgd2lyZSByYWNrIHRvIGNvb2wgY29tcGxldGVseS5JbiBtaWNyb3dhdmUgc2FmZSBib3dsIGNvbWJpbmUgY2hvY29sYXRlIGNoaXBzLCBwZWFudXQgYnV0dGVyIGFuZCBidXR0ZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkhlYXQgb24gaGlnaCBmb3IgMSBtaW51dGUgYW5kIHRoZW4gc3RpciB1bnRpbCBzbW9vdGguXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHBvd2RlcmVkIHN1Z2FyIGluIGJvd2wuRGlwIGVhY2ggY29va2llIGluIGNob2NvbGF0ZSBhbmQgdXNpbmcgYSBmb3JrIHJlbW92ZSBjb29raWUsIHRhcHBpbmcgb2ZmIGV4Y2VzcyBjaG9jb2xhdGUuIFlvdSBkb24ndCBuZWVkIGEgbG90IG9mIGNob2NvbGF0ZSBjb2F0aW5nIG9uIHRoZSBjb29raWVzLkltbWVkaWF0ZWx5IGRpcCB0aGUgY29va2llIGludG8gdGhlIHBvd2RlcmVkIHN1Z2FyIGFuZCB0b3NzIHRvIGNvYXQgY29tcGxldGVseS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIGJhY2sgb24gY29vbGluZyByYWNrIHRvIHVudGlsIGNob2NvbGF0ZSBpcyBzZXQuIFJlcGVhdCBmb3IgYWxsIGNvb2tpZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTFcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlB1cHB5IENob3cgQ29va2llc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3OTM1ODQsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc5MzU4NC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTQzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwNDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDY0MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExMjU2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI5NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE5NDQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEzNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHBvdGF0b2VzIGluIGEgbGFyZ2Ugc2F1Y2VwYW4gYW5kIGFkZCB3YXRlciB0byBjb3ZlciBieSAxIGluY2guIEJyaW5nIHRvIGJvaWwgb3ZlciBtZWRpdW0taGlnaCBoZWF0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgMS10YWJsZXNwb29uIHNhbHQsIHJlZHVjZSBoZWF0IHRvIG1lZGl1bSwgYW5kIHNpbW1lci4gU3RpciBhIGZldyB0aW1lcywgdW50aWwgcG90YXRvZXMgcmUtZm9yayB0ZW5kZXIsIGFib3V0IDggbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiRHJhaW4gcG90YXRvZXMgYW5kIHRyYW5zZmVyIHRvIGEgbGFyZ2UgYm93bC5JbiBhIG1lZGl1bSBzaXplZCBib3dsIHdoaXNrIHRvZ2V0aGVyIHlvZ3VydCwgbWF5b25uYWlzZSwgbXVzdGFyZCwgc2FsdCwgcGVwcGVyIGFuZCBvbmlvbiBwb3dkZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0byBwb3RhdG9lcyBhbmQgZ2VudGx5IHN0aXIgdG8gY29tYmluZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGNlbGVyeSwgcGlja2xlcywgcmVkIG9uaW9ucywgcGFyc2xleSBhbmQgY2hvcHBlZCBlZ2dzIHRvIHBvdGF0byBtaXh0dXJlLCBzdGlyIHRvIGNvbWJpbmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBtb3JlIHNhbHQgYW5kIHBlcHBlciB0byB0YXN0ZS5Db3ZlciBhbmQgcmVmcmlnZXJhdGUgdW50aWwgY2hpbGxlZCwgYWJvdXQgMSBob3VyIGJlZm9yZSBzZXJ2aW5nLiBQb3RhdG8gc2FsYWQgY2FuIGJlIG1hZGUgdXAgdG8gb25lIGRheSBhaGVhZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJFYXN5IENyZWFteSBQb3RhdG8gU2FsYWQgd2l0aCBZb2d1cnRcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2FsYWRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MDc4MDUsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYwNzgwNS01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjExODIxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDA0OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzY1MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDc5MjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbWFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTU0OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDdXQgdG9wcyBvZmYgcGVwcGVyczsgcmVtb3ZlIGFuZCBkaXNjYXJkIHNlZWRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDaG9wIHRvcHM7IHBsYWNlIGluIG1lZGl1bSBib3dsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgc2F1c2FnZSwgb25pb25zLCByaWNlLCBQYXJtZXNhbiwgZ2FybGljLCBvcmVnYW5vLCAxLTEvMiBjdXBzIHBpenphIHNhdWNlIGFuZCAxLTEvNCBjdXBzIHNocmVkZGVkIGNoZWVzZTsgbWl4IGxpZ2h0bHkuICBTcG9vbiBpbnRvIHBlcHBlciBzaGVsbHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlN0YW5kIHBlcHBlcnMgaW4gc2xvdyBjb29rZXI7IHRvcCB3aXRoIHJlbWFpbmluZyBzYXVjZSBhbmQgc2hyZWRkZWQgY2hlZXNlLiAgQ292ZXIgd2l0aCBsaWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvb2sgb24gTE9XIDYgdG8gOCBob3VycyAob3Igb24gSElHSCAyLTEvMiB0byAzLTEvMiBob3VycykuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiU2xvdy1Db29rZXIgSXRhbGlhbi1TdHVmZmVkIFBlcHBlcnNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzYzODU4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83NjM4NTgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDEyOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkyOTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTgzNzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExODM3NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogODEyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA4MTIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDQxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlzayBmbG91cnMgdG9nZXRoZXIgd2l0aCAgdGVhc3Bvb24gaW5zdGFudCB5ZWFzdCBpbiBhIGxhcmdlIG1peGluZyBib3dsIHdpdGggYSB0aWdodC1maXR0aW5nIGxpZCAobGlrZSB0aGlzIG9uZSksIGFuZCB0aGVuIHN0aXIgaW4gdGhlIG9hdHMuIFN0aXIgdGhlIHdhdGVyIGFuZCBtaWxrIHRvZ2V0aGVyLCB0aGVuIHBvdXIgdGhlIGxpcXVpZHMgaW50byB0aGUgZHJ5IGluZ3JlZGllbnRzLCBzdGlycmluZyB0byBjcmVhdGUgYSBsb29zZSwgc2hhZ2d5IGRvdWdoLiBDb3ZlciB0aGUgbWl4aW5nIGJvd2wgdGlnaHRseSwgYW5kIGFsbG93IHRoZSBkb3VnaCB0byByZXN0IGF0IHJvb20gdGVtcGVyYXR1cmUgYXQgbGVhc3QgZWlnaHQgYW5kIHVwIHRvIHR3ZWx2ZSBob3Vycy5EdW1wIHRoZSBkb3VnaCBpbnRvIHRoZSBiYXNpbiBvZiBhIHN0YW5kIG1peGVyIChsaWtlIHRoaXMgb25lKSwgYW5kIHRoZW4gYmVhdCBpbiB0aGUgYnV0dGVyLCBob25leSwgc2FsdCwgYW5kIHRoZSByZW1haW5pbmcgMiB0YWJsZXNwb29ucyB5ZWFzdC4gQ29udGludWUgYmVhdGluZyBhbGwgdGhlIGluZ3JlZGllbnRzIHRvZ2V0aGVyIHVudGlsIHRoZXkgZm9ybSBhIHNtb290aCBkb3VnaCwgYW5kIHRoZW4gdHVybiBpdCBvdXQgb24gYSB3ZWxsLWZsb3VyZWQgc3VyZmFjZS4gS25lYWQgYnkgaGFuZCBmb3IgdGVuIHRvIGZpZnRlZW4gbWludXRlcywgaW5jb3Jwb3JhdGluZyBhYm91dCAxIGN1cHMgYWRkaXRpb25hbCBmbG91ciwgdW50aWwgdGhlIGRvdWdoIGJlY29tZXMgc21vb3RoIGFuZCBlbGFzdGljLk9pbCBhIGxhcmdlIG1peGluZyBib3dsLCBhbmQgdHJhbnNmZXIgdGhlIGRvdWdoIHRvIHRoZSBib3dsLiBDb3ZlciB0aWdodGx5LCBhbmQgYWxsb3cgdGhlIGRvdWdoIHRvIHJpc2UgdW50aWwgZG91YmxlZCBpbiB2b2x1bWUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRyYW5zZmVyIHRoZSBkb3VnaCB0byBhIHdlbGwtZmxvdXJlZCBzdXJmYWNlLCBhbmQgc3BsaXQgaW50byB0d28gcG9ydGlvbnMgb2YgYXBwcm94aW1hdGVseSBlcXVhbCB3ZWlnaHQuIEJ1dHRlciBhbmQgZmxvdXIgdHdvIDQtaW5jaCBieSA4LWluY2ggbG9hZiBwYW5zLldvcmtpbmcgb25lIGF0IGEgdGltZSwgcm9sbCBlYWNoIGx1bXAgb2YgZG91Z2ggb3V0IGludG8gYSBsYXJnZSByZWN0YW5nbGUsIGFib3V0IDggYnkgMTYgaW5jaGVzLiBXb3JraW5nIGZyb20gdGhlIHNob3J0IGVuZCwgcm9sbCB0aGUgZG91Z2ggaW50byBhIGxvYWYsIHBpbmNoaW5nIHRoZSBzZWFtIGF0IHRoZSBib3R0b20gb2YgdGhlIGxvYWYgdGlnaHRseSB0byBzZWFsIGl0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgZG91Z2gsIHNlYW0tc2lkZSBkb3duLCBpbiBhIHByZXBhcmVkIGxvYWYgcGFuLiBDb3ZlciBsaWdodGx5IHdpdGggYSBraXRjaGVuIHRvd2VsLCBhbmQgYWxsb3cgaXQgdG8gcmlzZSB1bnRpbCBkb3VibGVkIGluIHNpemUsIGFib3V0IHR3byBob3Vycy5XaGlsZSB0aGUgZG91Z2ggcmlzZXMsIGhlYXQgdGhlIG92ZW4gdG8gNDAwIEYuVXNpbmcgYSBwYXN0cnkgYnJ1c2gsIGdlbnRseSBicnVzaCB0aGUgdG9wIG9mIHRoZSBkb3VnaCB3aXRoIGNyZWFtLCBhbmQgdGhlbiBzY2F0dGVyIG9uZSB0YWJsZXNwb29uIHJvbGxlZCBvYXRzIG92ZXIgZWFjaCBsb2FmLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUcmFuc2ZlciB0aGUgbG9hdmVzIHRvIHRoZSBvdmVuLCBhbmQgYmFrZSA1IG1pbnV0ZXMgYXQgNDAwIEYuIFRoZW4gcmVkdWNlIHRoZSB0ZW1wZXJhdHVyZSB0byAzNTAgRiBhbmQgY29udGludWUgYmFraW5nIHVudGlsIHRoZSBjcnVzdCBpcyBhIGRhcmsgYnJvd24gYW5kIHRoZSBicmVhZCByZWFjaGVzIGFuIGludGVybmFsIHRlbXBlcmF0dXJlIG9mIDIwMCBGIGFib3V0IDQ1IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIHRoZSBvdmVuIGFuZCBhbGxvdyB0aGUgbG9hdmVzIHRvIGNvb2wgaW4gdGhlaXIgcGFucyBmb3IgZml2ZSBtaW51dGVzLCB0aGVuIHR1cm4gb3V0IG9udG8gYSB3aXJlIHJhY2ssIGFsbG93aW5nIHRoZSBicmVhZCB0byBjb29sIGNvbXBsZXRlbHkgYmVmb3JlIHNsaWNpbmcuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiV2hvbGUgV2hlYXQgTWlsayBhbmQgSG9uZXkgU2FuZHdpY2ggQnJlYWRcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjE4MzMyLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MTgzMzItNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTkxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE2OCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE5MDcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwMTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE4MyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtTFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDA4MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyMCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG1lZGl1bSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgZmxvdXIsIGJha2luZyBwb3dkZXIsIGNvcm5zdGFyY2gsIGNpbm5hbW9uLCBhbmQgc2FsdC4gSW4gYSBzZXBhcmF0ZSBib3dsLCB3aGlzayB0b2dldGhlciB0aGUgYnV0dGVyLCBwdW1wa2luLCBhbmQgdmFuaWxsYS4gU3RpciBpbiB0aGUgYWdhdmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgZmxvdXIgbWl4dHVyZSwgc3RpcnJpbmcganVzdCB1bnRpbCBpbmNvcnBvcmF0ZWQuIEZvbGQgaW4gMiB0YWJsZXNwb29ucyBvZiBjaG9jb2xhdGUgY2hpcHMuIENoaWxsIHRoZSBjb29raWUgZG91Z2ggZm9yIGF0IGxlYXN0IDMwIG1pbnV0ZXMuIChJZiBjaGlsbGluZyBsb25nZXIgdGhhbiAxIGhvdXIsIGNvdmVyIHRoZSB0b3Agb2YgdGhlIGJvd2wgd2l0aCBmb2lsLilQcmVoZWF0IHRoZSBvdmVuIHRvIDMyNUYsIGFuZCBsaW5lIGEgYmFraW5nIHNoZWV0IHdpdGggcGFyY2htZW50IHBhcGVyIG9yIGEgc2lsaWNvbmUgYmFraW5nIG1hdC4gRHJvcCB0aGUgY29va2llIGRvdWdoIGludG8gMTIgcm91bmRlZCBzY29vcHMgb250byB0aGUgcHJlcGFyZWQgYmFraW5nIHNoZWV0LiBGbGF0dGVuIHNsaWdodGx5LCBhbmQgcHJlc3MgdGhlIHJlbWFpbmluZyBjaG9jb2xhdGUgY2hpcHMgaW50byB0aGUgdG9wcyBvZiB0aGUgY29va2llIGRvdWdoLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGF0IDMyNUYgZm9yIDE1LTE3IG1pbnV0ZXMuIENvb2wgb24gdGhlIGJha2luZyBzaGVldCBmb3IgYXQgbGVhc3QgMTAgbWludXRlcyBiZWZvcmUgdHVybmluZyBvdXQgb250byBhIHdpcmUgcmFjay5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJUaGUgVWx0aW1hdGUgSGVhbHRoeSBTb2Z0ICYgQ2hld3kgUHVtcGtpbiBDaG9jb2xhdGUgQ2hpcCBDb29raWVzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIzMTk1MSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvMjMxOTUxLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzgxNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlzayB0b2dldGhlciBicm93biBzdWdhciwgY29ybnN0YXJjaCwgYW5kIDEvNCB0ZWFzcG9vbiBzYWx0IGluIGEgaGVhdnkgbWVkaXVtIHNhdWNlcGFuLCB0aGVuIHdoaXNrIGluIG1pbGsgYW5kIGNyZWFtLiBCcmluZyB0byBhIGJvaWwgb3ZlciBtZWRpdW0gaGVhdCwgd2hpc2tpbmcgZnJlcXVlbnRseSwgdGhlbiBib2lsLCB3aGlza2luZywgMSBtaW51dGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIGhlYXQgYW5kIHdoaXNrIGluIGJ1dHRlciBhbmQgdmFuaWxsYS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciBpbnRvIGEgYm93bCwgdGhlbiBjb3ZlciBzdXJmYWNlIHdpdGggYnV0dGVyZWQgd2F4IHBhcGVyIGFuZCBjaGlsbCB1bnRpbCBjb2xkLCBhdCBsZWFzdCAxIDEvMiBob3Vycy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCdXR0ZXJzY290Y2ggUHVkZGluZ1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA4ODAxMDgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzg4MDEwOC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjA2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImJ1bmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTUyOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJpbnNlIHRoZSBxdWlub2EgdW5kZXIgY29vbCBydW5uaW5nIHdhdGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgcmluc2VkIHF1aW5vYSBpbiBhIHBvdCB3aXRoIDEuNzUgY3VwcyBvZiB3YXRlci4gUHV0IGEgbGlkIG9uIHRvcCwgYnJpbmcgaXQgdG8gYSBib2lsLCB0aGVuIHJlZHVjZSB0aGUgaGVhdCB0byBsb3cgYW5kIGxldCBzaW1tZXIgZm9yIDE1IG1pbnV0ZXMuIEFmdGVyIDE1IG1pbnV0ZXMsIHR1cm4gb2ZmIHRoZSBoZWF0LiBBbGxvdyB0aGUgcXVpbm9hIHRvIGNvb2wgYmVmb3JlIG1ha2luZyB0aGUgc2FsYWQgb3IgZWxzZSB0aGUgaGVhdCB3aWxsIHdpbHQgdGhlIHBhcnNsZXkgYW5kIHZlZ2V0YWJsZXMuIFRvIGNvb2wgaXQgZmFzdGVyLCBzcHJlYWQgaXQgb3V0IG9uIGEgYmFraW5nIHNoZWV0IGFuZCBwbGFjZSBpbiB0aGUgcmVmcmlnZXJhdG9yIGZvciAzMCBtaW51dGVzLldoaWxlIHRoZSBxdWlub2EgaXMgY29vbGluZywgcHJlcGFyZSB0aGUgcmVzdCBvZiB0aGUgc2FsYWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkN1dCB0aGUgdG9tYXRvIGFuZCBjdWN1bWJlciBpbnRvIGEgc21hbGwgZGljZS4gUmluc2UgdGhlIHBhcnNsZXkgd2VsbCB0byByZW1vdmUgc2FuZCBhbmQgZ3JpdCwgdGhlbiBjaG9wIHdlbGwuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgY3VjdW1iZXIsIHRvbWF0bywgYW5kIHBhcnNsZXkgdG8gYSBib3dsLlRvIG1ha2UgdGhlIGRyZXNzaW5nLCBzcXVlZXplIHRoZSBqdWljZSBmcm9tIHRoZSBsZW1vbiBpbnRvIGEgYm93bCAoYWJvdXQgIGN1cCkuIE1pbmNlIHRoZSBnYXJsaWMgYW5kIGFkZCB0byB0aGUgbGVtb24ganVpY2UgYWxvbmcgd2l0aCB0aGUgb2xpdmUgb2lsIGFuZCBzYWx0Lk9uY2UgdGhlIHF1aW5vYSBpcyBjb29sZWQsIGNvbWJpbmUgaXQgd2l0aCB0aGUgY2hvcHBlZCB2ZWdldGFibGVzIGFuZCB0aGUgbGVtb24gZHJlc3NpbmcuIFN0aXIgd2VsbCBhbmQgdGhlbiBzZXJ2ZSFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJxdWlub2EgdGFiYm91bGVoXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYwMjMxMSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjAyMzExLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQyNDIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQxMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkxNzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZW52ZWxvcGVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzY0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQwNTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjY2NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMaWdodGx5IHNwcmF5IHRoZSBtb2xkIHdpdGggbm9uLXN0aWNrIHNwcmF5IGFuZCB3aXBlIGV4Y2VzcyBvZmYgd2l0aCBhIHBhcGVyIHRvd2VsLiBEb27igJl0IG92ZXJkbyBpdCBvciB0aGUgcmVzaWR1ZSB3aWxsIGFmZmVjdCB0aGUgdGFzdGUgb2YgdGhlIGplbGxvLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIHRoZSBzb2RhLCBqdWljZSwgYW5kIGNyZWFtIGludG8gYSBtZWRpdW0gc2F1Y2VwYW4gYW5kIHNwcmlua2xlIHRoZSBnZWxhdGluIG9uIHRvcC4gQWxsb3cgdGhlIGdlbGF0aW4gdG8gc29hayBmb3IgMi0zIG1pbnV0ZXMsIHRoZW4gYmVnaW4gdG8gaGVhdCBvbiBsb3csIHN0aXJyaW5nIGNvbnN0YW50bHkgdW50aWwgZ2VsYXRpbiBpcyBmdWxseSBkaXNzb2x2ZWQgKGFib3V0IDUgbWludXRlcykuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBzYXVjZXBhbiBmcm9tIGhlYXQgYW5kIGFkZCB2b2RrYSBhbmQgZm9vZCBjb2xvcmluZy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciBpbnRvIG1vbGRzIGFuZCBjaGlsbCBmb3Igc2V2ZXJhbCBob3Vycywgb3IgdW50aWwgc2V0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgZnJvbSBtb2xkLCB0b3Agd2l0aCB3aGlwcGVkIGNyZWFtLCBhbmQgZW5qb3kgcmVzcG9uc2libHkhKlRoZSBvcmlnaW5hbCByZWNpcGUgc3VnZ2VzdHMgMi0zIGVudmVsb3BlcywgZGVwZW5kaW5nIG9uIGhvdyBsb25nIHlvdXIgamVsbG8gc2hvdHMgd2lsbCBiZSBsZWZ0IG91dCAobW9yZSBnZWxhdGluIGZvciBtb3JlIHRpbWUpLiBJIG9wdGVkIGZvciAzIGJlY2F1c2Ugd2Ugd2VyZSB0cmF2ZWxpbmcgYW4gaG91ciB0byBnZXQgdG8gdGhlIHBhcnR5LCBidXQgSSBmb3VuZCB0aGVtIHRvIGJlIGEgbGl0dGxlIHRvbyBmaXJtICwgc28gSSBzdWdnZXN0IHlvdSBzdGljayB3aXRoIDIgYW5kIHBsYW4gYWNjb3JkaW5nbHkgZm9yIHRoZSBiZXN0IHJlc3VsdHMhXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQmlydGhkYXkgQ2FrZSBKZWxsbyBTaG90c1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2NzA0MDgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzY3MDQwOC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzODI4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjY2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjIwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA4MjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzMjAwOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTQ1NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IG92ZW4gdG8gMzUwIGRlZ3JlZXMgRi4gRmlyc3QsIHJlbW92ZSB0aGUgbXVzaHJvb20gc3RlbXMgYnkgcHVzaGluZyBlYWNoIG9uZSB0b3dhcmQgeW91LCB0aGVuIGF3YXkgZnJvbSB5b3UuIEl0IHdpbGwgcG9wIHJpZ2h0IG91dC4gKFNhdmUgdGhlbSB0byBhZGQgdG8gYW5vdGhlciByZWNpcGUuKSBTd2lzaCBhbmQgcnViIHRoZSBtdXNocm9vbSB0b3BzIGluIGEgbGFyZ2UgYm93bCBvZiBjb2xkIHdhdGVyIHRvIGdldCB0aGVtIGNsZWFuLiBUaGVuLCBsYXkgdGhlbSBvcGVuIHNpZGUgZG93biBvbiBhIGtpdGNoZW4gdG93ZWwgdG8gZHJ5LldoaWxlIHRoZSBtdXNocm9vbXMgZHJ5LCBtaXggdG9nZXRoZXIgdGhlIGNyZWFtIGNoZWVzZSwgc3BpbmFjaCwgYXJ0aWNob2tlIGhlYXJ0cywgcGFybWVzYW4sIGdhcmxpYyBwb3dkZXIsIDEvMiB0c3AuIGtvc2hlciBzYWx0LCBhbmQgcmVkIHBlcHBlciBmbGFrZXMuSW4gYSBzbWFsbCBib3dsLCBzdGlyIHRvZ2V0aGVyIG9saXZlIG9pbCwgMS80IHRzcC4gc2FsdCwgYW5kIEl0YWxpYW4gc2Vhc29uaW5nLiBVc2UgYSBiYXN0aW5nIGJydXNoIG9yIHlvdXIgZmluZ2VycyB0byBsaWdodGx5IHJ1YiB0aGUgb3V0c2lkZSBvZiB0aGUgbXVzaHJvb21zIHdpdGggdGhlIG9pbCBtaXh0dXJlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgbXVzaHJvb21zIG9wZW4gc2lkZSB1cCBvbiBhIGJha2luZyBzaGVldC4gVXNlIGEgc21hbGwgZGlzaGVyIG9yIHNwb29uIHRvIHBsYWNlIGEgaGVhcGluZyBzY29vcCBvZiBkaXAgbWl4dHVyZSBpbnRvIGVhY2ggbXVzaHJvb20sIHByZXNzaW5nIGl0IGRvd24gdG8gbWFrZSBzdXJlIGl0IGZpbGxzIHRoZSBvcGVuaW5nLiBQcmVzcyBhIHNtYWxsIGFtb3VudCBvZiBmZXRhIGNoZWVzZSBvbiB0b3Agb2YgZWFjaCBzdHVmZmVkIG11c2hyb29tLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGluIHByZWhlYXRlZCBvdmVuIGZvciAyMC0yNSBtaW51dGVzIHVudGlsIGZpbGxpbmcgaXMgaG90IGFuZCBidWJibHkgYW5kIGZldGEgaXMgc3RhcnRpbmcgdG8gYnJvd24uIE11c2hyb29tcyB3aWxsIGRyYWluIHNvbWUgYnJvd24gbGlxdWlkIGR1cmluZyBjb29raW5nLCBzbyBkcmFpbiBvbiBwYXBlciB0b3dlbHMgYmVmb3JlIHNlcnZpbmcgaWYgeW91IGRvbid0IHdhbnQgdGhhdCBsaXF1aWQgb24geW91ciBzZXJ2aW5nIHBsYXRlLiBUaGVzZSB0YXN0ZSBqdXN0IGFzIGdvb2QgZXZlbiBhZnRlciB0aGV5IGhhdmUgY29vbGVkIGRvd24hXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQXJ0aWNob2tlIFNwaW5hY2ggRGlwIFN0dWZmZWQgTXVzaHJvb21zXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImNvbmRpbWVudFwiLFxuICAgICAgICBcImRpcFwiLFxuICAgICAgICBcInNwcmVhZFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDMyNTIwOCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvMzI1MjA4LTU1NngzNzAuanBlZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNzAzNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTExNTQ5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMjYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTMwNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE2NzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMjA0MjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMDI2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzYzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDEwNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXYXRjaCBob3cgdG8gbWFrZSB0aGlzIHJlY2lwZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgYW4gb3ZlbiByYWNrIGluIHRoZSBjZW50ZXIgb2YgdGhlIG92ZW4uIFByZWhlYXQgdGhlIG92ZW4gdG8gMzUwIGRlZ3JlZXMgRi4gU3ByYXkgYSA5LWJ5LTEzLWJ5LTItaW5jaCBnbGFzcyBiYWtpbmcgZGlzaCB3aXRoIHZlZ2V0YWJsZSBvaWwgY29va2luZyBzcHJheS4gU2V0IGFzaWRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJGb3IgdGhlIGZvbmR1dGEgc2F1Y2U6IEluIGEgbWVkaXVtIGhlYXZ5LWJvdHRvbWVkIHNhdWNlcGFuLCBicmluZyB0aGUgbWlsayBhbmQgY3JlYW0gdG8gYSBzaW1tZXIgb3ZlciBtZWRpdW0gaGVhdC4gUmVkdWNlIHRoZSBoZWF0IHRvIGxvdy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBQZWNvcmlubyBSb21hbm8gYW5kIHdoaXNrIHVudGlsIHRoZSBjaGVlc2UgaXMgbWVsdGVkIGFuZCB0aGUgc2F1Y2UgaXMgc21vb3RoLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIHBhbiBmcm9tIHRoZSBoZWF0IGFuZCBzdGlyIGluIHRoZSBiYXNpbC4gU2V0IGFzaWRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIHNraWxsZXQsIGhlYXQgMiB0YWJsZXNwb29ucyBvZiBvbGl2ZSBvaWwgb3ZlciBtZWRpdW0taGlnaCBoZWF0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIHNhdXNhZ2UsIHNoYWxsb3RzLCBnYXJsaWMsIDEvNCB0ZWFzcG9vbiBzYWx0LCBhbmQgMS80IHRlYXNwb29uIHBlcHBlci4gQ29vayB1bnRpbCB0aGUgc2F1c2FnZSBpcyBjb29rZWQgdGhyb3VnaCBhbmQgdGhlIHZlZ2V0YWJsZXMgaGF2ZSBzb2Z0ZW5lZCwgOCB0byAxMCBtaW51dGVzLiBVc2luZyBhIHdvb2RlbiBzcG9vbiwgYnJlYWsgdGhlIHNhdXNhZ2UgaW50byAxLzItaW5jaCBwaWVjZXMuIEluY3JlYXNlIHRoZSBoZWF0IHRvIGhpZ2guXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgd2luZSBhbmQgc2NyYXBlIHVwIHRoZSBicm93biBiaXRzIHRoYXQgY2xpbmcgdG8gdGhlIGJvdHRvbSBvZiB0aGUgcGFuIHdpdGggYSB3b29kZW4gc3Bvb24uIENvb2sgdW50aWwgdGhlIHdpbmUgaGFzIGV2YXBvcmF0ZWQsIGFib3V0IDIgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBwYW4gZnJvbSB0aGUgaGVhdCBhbmQgc2V0IGFzaWRlIHRvIGNvb2wgc2xpZ2h0bHkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgcGVhcywgcmljb3R0YSwgYW5kIDEgY3VwIG9mIHRoZSBmb25kdXRhIHNhdWNlLiBTZWFzb24gd2l0aCByZW1haW5pbmcgMS8yIHRlYXNwb29uIGtvc2hlciBzYWx0IGFuZCAxLzQgdGVhc3Bvb24gcGVwcGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQnJpbmcgYSBsYXJnZSBwb3Qgb2Ygc2FsdGVkIHdhdGVyIHRvIGEgYm9pbCBvdmVyIGhpZ2ggaGVhdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgcGFzdGEgYW5kIGNvb2sgdW50aWwganVzdCB0ZW5kZXIsIDcgdG8gOCBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDEyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiRHJhaW4gYW5kIHNldCBhc2lkZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCBoYWxmIG9mIHRoZSBtYXJpbmFyYSBzYXVjZSBvdmVyIHRoZSBib3R0b20gb2YgdGhlIHByZXBhcmVkIGJha2luZyBkaXNoLiBVc2luZyBhIHNtYWxsIHNwb29uLCBmaWxsIHRoZSBtYW5pY290dGkgc2hlbGxzIHdpdGggdGhlIHNhdXNhZ2UgZmlsbGluZyBhbmQgYXJyYW5nZSBpbiBhIHNpbmdsZSBsYXllciBpbiB0aGUgYmFraW5nIGRpc2guXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIHRoZSByZW1haW5pbmcgbWFyaW5hcmEgc2F1Y2Ugb24gdG9wIG9mIHRoZSBmaWxsZWQgc2hlbGxzLiBTcG9vbiB0aGUgcmVtYWluaW5nIGZvbmR1dGEgc2F1Y2Ugb24gdG9wIGFuZCBzcHJpbmtsZSB3aXRoIHRoZSBtb3p6YXJlbGxhLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDE1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiRHJpenpsZSB3aXRoIG9saXZlIG9pbCBhbmQgYmFrZSB1bnRpbCBidWJibHkgYW5kIGdvbGRlbiBicm93biwgMzAgdG8gMzUgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQmFrZWQgTWFuaWNvdHRpIHdpdGggU2F1c2FnZSBhbmQgUGVhc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTQyNzc4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NDI3NzgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bSBzaXplXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDYzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjUxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzODI4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTI1NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDI1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE2NzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCB0aGUgb3ZlbiB0byAzNzXCsEYgdGhlbiBwcmVwYXJlIGEgbGFyZ2UgY2Fzc2Vyb2xlIGRpc2ggKEkgdXNlZCBhIDEgcXVhcnQgZGlzaCkgYnkgZ3JlYXNpbmcgd2l0aCBFYXJ0aCBCYWxhbmNlLCBidXR0ZXIgb3Igbm9uLXN0aWNrIGNvb2tpbmcgc3ByYXkuV2FybSB0aGUgb2xpdmUgb2lsIG92ZXIgbWVkaXVtIGhlYXQgaW4gYSBzYXV0w6kgcGFuIGFuZCBjb29rIHRoZSBzaGFsbG90IGFuZCBnYXJsaWMgZm9yIGEgZmV3IG1pbnV0ZXMsIHVudGlsIGZyYWdyYW50LlVzaW5nIGEgc3RyYWluZXIgYW5kIGEgcGFwZXIgdG93ZWwsIHByZXNzIHRoZSBleGNlc3Mgd2F0ZXIgb3V0IGZyb20gdGhlIGRlZnJvc3RlZCBzcGluYWNoIHRoZW4gYWRkIGl0IHRvIHRoZSBwYW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgY2hvcHBlZCBhcnRpY2hva2UgaGVhcnRzIChJIGRpc2NhcmRlZCBhbnkgdG91Z2ggcGFydHMpIGFuZCBhIHBpbmNoIG9mIHNhbHQgJiBwZXBwZXIgdG8gdGhlIHBhbiBhbmQgY29vayBmb3IgZml2ZSBtaW51dGVzLk1lYW53aGlsZSwgY29tYmluZSB0aGUgZWdncywgeW9ndXJ0IGFuZCBjaGVlc2UgaW4gYSBsYXJnZSBib3dsIGFuZCB3aGlzayB0b2dldGhlciB1bnRpbCB3ZWxsLWNvbWJpbmVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIHNwaW5hY2ggYXJ0aWNob2tlIG1peHR1cmUgZnJvbSB0aGUgaGVhdCBhbmQgYWxsb3cgdG8gY29vbCBmb3IgYSBmZXcgbWludXRlcyBiZWZvcmUgYWRkaW5nIHRvIHRoZSBib3dsIHdpdGggdGhlIGVnZ3MgYW5kIGNoZWVzZS5MYXN0bHksIGFkZCB0aGUgY29va2VkIHF1aW5vYSBhbmQgc3RpciB1bnRpbCBldmVyeXRoaW5nIGlzIG1peGVkIHRvZ2V0aGVyIHdlbGwuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBtaXh0dXJlIGludG8gdGhlIGNhc3Nlcm9sZSBkaXNoLCBzbW9vdGhpbmcgdGhlIHRvcCB3aXRoIHRoZSBiYWNrIG9mIGEgc3Bvb24uIFNwcmlua2xlIGEgZmV3IHRhYmxlc3Bvb25zIG9mIGNoZWVzZSBvbiB0b3AgYW5kIGNvb2sgZm9yIDMwLTM1IG1pbnV0ZXMsIHVudGlsIHRvcCBpcyBsaWdodCBnb2xkZW4gYnJvd24uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIHdhcm0gYW5kIGVuam95IVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlNwaW5hY2ggQXJ0aWNob2tlIFF1aW5vYSBDYXNzZXJvbGVcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDY5ODcwMSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjk4NzAxLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTQ2MjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxNDYyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzAyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUbyBwcmVwYXJlIGJlcnJ5IGxheWVyOiBQcmVoZWF0IG92ZW4gdG8gMzc1Ri4gQ29hdCBzaXggOC1vdW5jZSBzb3VmZmwgY3VwcyB3aXRoIGNvb2tpbmcgc3ByYXkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCAxIHRlYXNwb29uIHN1Z2FyIHRvIGVhY2ggY3VwIGFuZCBzd2lybCB0byBjb2F0IHRoZSBpbnNpZGUuIERpc3RyaWJ1dGUgcmFzcGJlcnJpZXMgaW4gdGhlIGJvdHRvbSBvZiB0aGUgY3VwcyBhbmQgc3ByaW5rbGUgZWFjaCB3aXRoIDEgdGVhc3Bvb24gY3JtZSBkZSBjYXNzaXMgKG9yIGVhdS1kZS12aWUsIGp1aWNlIG9yIG5lY3RhcikuVG8gcHJlcGFyZSBzb3VmZmxzOiBTdGlyIHJhc3BiZXJyaWVzIGluIGEgc2F1Y2VwYW4gb3ZlciBsb3cgaGVhdCB1bnRpbCB0aGV5IGFyZSBqdWljeSAoZm9yIGZyZXNoKSBvciB0aGF3ZWQgKGZvciBmcm96ZW4pLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUcmFuc2ZlciB0byBhIGZpbmUgc2lldmUgc2V0IG92ZXIgYSBib3dsLiBXaXRoIGEgc3Bvb24sIHByZXNzIHRoZSBiZXJyaWVzIHRocm91Z2ggdGhlIHNpZXZlLCBiZWluZyBjYXJlZnVsIHRvIGV4dHJhY3QgYWxsIHRoZSBwdWxwLiBEaXNjYXJkIHRoZSBzZWVkcy5SZXR1cm4gdGhlIHB1cmVlIHRvIHRoZSBzYXVjZXBhbi4gQnJpbmcgdG8gYSBzaW1tZXIgYW5kIHN0aXIgb3ZlciBtZWRpdW0gaGVhdCB1bnRpbCB2ZXJ5IHRoaWNrIGFuZCByZWR1Y2VkIHRvIDEvNCBjdXAsIGFib3V0IDEwIG1pbnV0ZXMuIChSZWR1Y2UgdGhlIGhlYXQgYXMgdGhlIG1peHR1cmUgdGhpY2tlbnMuKSBTdGlyIGluIDEgdGFibGVzcG9vbiBjcm1lIGRlIGNhc3NpcyAob3IgZWF1LWRlLXZpZSwganVpY2Ugb3IgbmVjdGFyKSBhbmQgc2V0IGFzaWRlIHRvIGNvb2wgc2xpZ2h0bHkuQmVhdCBlZ2cgd2hpdGVzIGFuZCBzYWx0IGluIGEgbWl4aW5nIGJvd2wgd2l0aCBhbiBlbGVjdHJpYyBtaXhlciBvbiBoaWdoIHNwZWVkIHVudGlsIHNvZnQgcGVha3MgZm9ybS4gQ29udGludWluZyB0byBiZWF0LCBncmFkdWFsbHkgYWRkIHN1Z2FyIGFuZCBiZWF0IHVudGlsIHN0aWZmIHBlYWtzIGZvcm0uIFdpdGggYSBydWJiZXIgc3BhdHVsYSwgZm9sZCBhYm91dCBhIGZvdXJ0aCBvZiB0aGUgYmVhdGVuIHdoaXRlcyBpbnRvIHRoZSByZXNlcnZlZCByYXNwYmVycnkgcHVyZWUgdG8gbGlnaHRlbiBpdHMgdGV4dHVyZSwgdGhlbiBwb3VyIHRoZSBtaXh0dXJlIG92ZXIgdGhlIHJlbWFpbmluZyB3aGl0ZXMuIEdlbnRseSBmb2xkIHRoZSBwdXJlZSBhbmQgd2hpdGVzIHRvZ2V0aGVyIHVudGlsIGV2ZW5seSBibGVuZGVkLiBTcG9vbiB0aGUgc291ZmZsIG1peHR1cmUgaW50byB0aGUgY3Vwcywgc3ByZWFkaW5nIHRvIHRoZSBlZGdlcyBvZiB0aGUgY3Vwcy5TZXQgdGhlIGN1cHMgb24gYSBiYWtpbmcgc2hlZXQgYW5kIGJha2UgZm9yIDEwIG1pbnV0ZXMsIG9yIHVudGlsIGxpZ2h0bHkgYnJvd25lZCBvbiB0aGUgdG9wLiBEdXN0IHdpdGggY29uZmVjdGlvbmVycyBzdWdhciBhbmQgc2VydmUgaW1tZWRpYXRlbHkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiRG91YmxlIFJhc3BiZXJyeSBTb3VmZmzDqXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTE1MDIxLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81MTUwMjEtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDQwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInN0aWNrc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzU0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlIGNhblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDcwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDE4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTg2MTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIxMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJHcmVhc2UgYSA5w5cxMyBwYW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB0b2dldGhlciBncmFoYW0gY3JhY2tlciBjcnVzdCBhbmQgMcK8IHN0aWNrcyBvZiBidXR0ZXIuIFByZXNzIG91dCBpbiBwYW4uSW4gbWl4ZXIsIG1peCB0b2dldGhlciBwb3dkZXJlZCBzdWdhciwgMiBzdGlja3Mgb2YgYnV0dGVyLCB2YW5pbGxhLCBhbmQgZWdncy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciBvbiB0b3Agb2YgZ3JhaGFtIGNyYWNrZXIgY3J1c3QuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCBvdXQgY3J1c2hlZCBwaW5lYXBwbGUgb24gdG9wIG9mIHN1Z2FyIG1peHR1cmUsIHRoZW4gYWRkIHNsaWNlZCBiYW5hbmFzLiBJIGFkZGVkIGNoZXJyaWVzIG5leHQgZm9yIGZ1bi5JbiBtaXhlciwgYWRkIGhlYXZ5IGNyZWFtIGFuZCBtaXggb24gbWVkaXVtIGhpZ2ggdW50aWwgc29mdCBwZWFrLiBXaGVuIGFsbW9zdCBjb21wbGV0ZWQsIGFkZCDCvSBjdXAgc3VnYXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCB3aGlwcGVkIGNyZWFtIG92ZXIgdG9wIG9mIGJhbmFuYXMuIFJlZnJpZ2VyYXRlIGZvciBhdCBsZWFzdCAyIGhvdXJzLCAoSSB3YWl0ZWQgMSBob3VycyBhbmQgaXQgd2FzIGZpbmUuKUVuam95IVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkEgQ2FrZSBUbyBXYXJtIEFueSBIZWFydCDigJMgQmFuYW5hIFNwbGl0IENha2VcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTk5MDQ0LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy85OTkwNDQtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDM3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjA1NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyOTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjU2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyOTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV29ya2luZyBpbiBhIGNvdXBsZSBvZiBiYXRjaGVzLCByb3VnaGx5IGNob3AgdGhlIGNoaWNrcGVhcyBhbmQgcGxhY2UgaW4gYSBib3dsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIG1pbmNlZCBoZXJicyBhbmQgc2NhbGxpb25zIHRvIHRoZSBjaGlja3BlYXMgYW5kIGdpdmUgYSBxdWljayB0b3NzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIHNlcGFyYXRlIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBtYXlvLCBsZW1vbiBqdWljZSwgYW5kIG9saXZlIG9pbC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IHRoZSBhdm9jYWRvIGluIGhhbGYsIHJlbW92ZSB0aGUgcGl0LCBhbmQgY3V0IGVhY2ggaGFsZiBpbnRvICBjdWJlcyAoc2VlIG5vdGUpLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBpbiB0aGUgYm93bCBhbmQgcG91ciB0aGUgbWF5byBtaXh0dXJlIG92ZXIgdGhlIGNoaWNrcGVhcyBhbmQgYXZvY2Fkby4gVG9zcyB1bnRpbCB3ZWxsIGNvbWJpbmUuIFRhc3RlIGFuZCBhZGQgc2FsdC9wZXBwZXIgdG8geW91ciBwcmVmZXJyZWQgdGFzdGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIG9uIGEgc2FuZHdpY2ggb3Igd2l0aCBjcmFja2Vycy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJBdm9jYWRvIENoaWNrcGVhIFNhbGFkXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNhbGFkXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzk4MDcwLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83OTgwNzAtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTIzNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkwOTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1lbHQgYnV0dGVyIGFuZCBicnVzaCBzb21lIG9mIHRoZSBidXR0ZXIgYXJvdW5kIHRoZSBzbG93IGNvb2tlci5Vc2luZyBhIHN0YW5kIG1peGVyLCBjb21iaW5lIGZsb3VyLCAxLWN1cCBzdWdhciwgYmFraW5nIHBvd2RlciwgYW5kIHNhbHQuIFRoZW4sIGFkZCBtaWxrIGFuZCByZW1haW5pbmcgbWVsdGVkIGNvb2xlZCBidXR0ZXIsIG1peGluZyBqdXN0IHVudGlsIGRyeSBpbmdyZWRpZW50cyBhcmUgbW9pc3RlbmVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIHRoZSBiYXR0ZXIgaW4gdGhlIHNsb3cgY29va2VyIGFuZCBwbGFjZSB0aGUgZnJvemVuIHBlYWNoZXMgb24gdG9wLkNvb2sgb24gaGlnaCBmb3IgMyBob3VycyB3aXRoIGxpZCBvbiB0b3AuIE9uY2UgdGhlIGNvYmJsZXIgaXMgZG9uZSwgZGl2aWRlIGFuZCBzZXJ2ZSBjb2JibGVyIHdhcm0gd2l0aCBpY2UgY3JlYW0gYW5kIHdoaXBwZWQgY3JlYW0gb24gdG9wLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlNsb3cgQ29va2VyIFBlYWNoIENvYmJsZXJcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTc0MzE3LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NzQzMTctNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwODYyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInN0cmlwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA1MTE0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMjAyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMzMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDI2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjExNTI5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDQxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTAwOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIG1peGluZyBib3dsLCBhZGQgMSBjdXAgd2FybSB3YXRlciwgMSBwYWNrIHJhcGlkIG9yIHF1aWNrIHllYXN0LCAxIHQgc3VnYXIgMS8yIHQgc2FsdCBhbmQgMSBUIG9saXZlIG9pbC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHdlbGwuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCAyIDEvMiBjdXBzIGZsb3VyIGFuZCBtaXguXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCAgYSBsaXR0bGUgbW9yZSBmbG91ciBpZiB0b28gc3RpY2t5IGJ1dCB5b3UgYXJlIG1ha2luZyBhIGxpZ2h0IGRvdWdoIG5vdCBhIGhlYXZ5IGJyaWNrLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDb3ZlciBhbmQgbGV0IHJpc2UgdW50aWwgZG91YmxlIGluIHNpemUuIEFib3V0IDMwLTQwIG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoaWxlIGRvdWdoIGlzIHJpc2luZywgcHJlcCBhbnkgdG9wcGluZ3MuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiAzNzUgY29udmVjdGlvbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIHRoZSBkb3VnaCBvbiBhIHdlbGwgb2lsZWQgbGFyZ2UgcGl6emEgcGFuIG9yIGNvb2tpZSBzaGVldC4gTWVsdCAyIFQgYnV0dGVyIGluIGEgbWljcm93YXZlIGZvciAxNS0yMCBzZWNvbmRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggMiB0IGdhcmxpYyBwb3dkZXIgaW4gdGhlIGJ1dHRlciBhbmQgc3ByZWFkIHRoaW5seSBvdmVyIHRoZSBkb3VnaC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG9wIHdpdGggY2hlZXNlcyBhbmQgb3RoZXIgdG9wcGluZ3Mgb2YgY2hvaWNlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBpbiBvdmVuIGZvciAyMCB0byAyNSBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDExXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCI0IENoZWVzZSBXaGl0ZSBQaXp6YVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2NzMzMzcsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzY3MzMzNy01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDk4OTk4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogODAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MTE2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciBtaXh0dXJlIGludG8gcHJlcGFyZWQgcGFuLCB1c2luZyB5b3VyIGhhbmRzIHByZXNzIHRvIGZsYXR0ZW4uIFNldCBhc2lkZSBmb3IgMS0yIGhvdXJzIHRvIHNldC5JbiBhIHNlcGFyYXRlIGJvd2wsIGNvbWJpbmUgcG93ZGVyZWQgc3VnYXIgd2l0aCBtaWxrIGFuZCBzdGlyIHRvIGNvbWJpbmUuIFVzaW5nIGEgc3Bvb24sIGRyaXp6bGUgZ2xhemUgb24gdG9wIG9mIGNlcmVhbCBiYXJzIGFuZCBkdXN0IHdpdGggY29sb3JlZCBzdWdhciBvciBzcHJpbmtsZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQ2VyZWFsIE1hcnNobWFsbG93IEJhcnNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzY0MTg0LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83NjQxODQtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDYxNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYxNTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyOCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUbyBoYXJkLWJvaWwgdGhlIGVnZ3MsIHBsYWNlIHRoZSByYXcgZWdncyBhdCB0aGUgYm90dG9tIG9mIGEgbGFyZ2UgcG90LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIHdhdGVyIGluIHRoZSBwb3QgdW50aWwgdGhlIHdhdGVyIGlzIDEtMiBpbmNoZXMgb3ZlciB0aGUgdG9wIG9mIHRoZSBlZ2dzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgcG90IG9uIHRoZSBzdG92ZSB0b3AgdW5jb3ZlcmVkIGFuZCB0dXJuIHRoZSBidXJuZXIgdG8gaGlnaCBoZWF0LiBCcmluZyB0aGUgd2F0ZXIgaW4gdGhlIHBvdCB0byBhIGJvaWwuIFdoZW4gdGhlIHdhdGVyIGNvbWVzIHRvIGEgZnVsbCBib2lsLCBjb3ZlciB0aGUgcG90IHdpdGggYSBsaWQgYW5kIHR1cm4gb2ZmIHRoZSBoZWF0IHRvIHRoZSBidXJuZXIuIExlYXZlIHRoZSBwb3Qgb24gdGhlIGJ1cm5lciwgY292ZXJlZCwgZm9yIDEyIG1pbnV0ZXMuV2hpbGUgdGhlIGVnZ3Mgc2l0IGluIHRoZSBjb3ZlcmVkIHBvdCwgZmlsbCBhIG1peGluZyBib3dsICB3YXkgd2l0aCBpY2Ugd2F0ZXIuIFdoZW4gdGhlIHRpbWUgaXMgdXAgb24gdGhlIGVnZ3MsIHVzZSBhIHNsb3R0ZWQgc3Bvb24gdG8gcmVtb3ZlIHRoZW0gZnJvbSB0aGUgcG90IGFuZCB0cmFuc2ZlciB0aGVtIHRvIHRoZSBib3dsIG9mIGljZSB3YXRlciB0byBzdG9wIHRoZW0gZnJvbSBjb29raW5nLiBMZWF2ZSB0aGVtIGluIHRoZSBib3dsIG9mIGljZSB3YXRlciBmb3IgYSBmZXcgbWludXRlcyB1bnRpbCBmdWxseSBjb2xkLlBlZWwgdGhlIGVnZ3MgdW5kZXIgY29sZCBydW5uaW5nIHdhdGVyIChJdmUgZm91bmQgaXRzIG11Y2ggZWFzaWVyKS4gU2xpY2UgdGhlIGVnZ3MgaW4gaGFsZiBsZW5ndGh3aXNlIGFuZCByZW1vdmV0aGUgeW9sa3MgaW50byBhIG1peGluZyBib3dsLiBVc2UgYSBmb3JrIHRvIG1hc2ggdGhlIHlvbGtzIGFzIG11Y2ggYXMgeW91IGNhbi4gSSB1c3VhbGx5IGFkZCBhIGxpdHRsZSBzcGxhc2ggb2Ygd2F0ZXIgdG8gdGhlIG1hc2hlZCBlZ2cgeW9sa3MgYW5kIG1hc2ggYWdhaW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgYmxhY2sgcGVwcGVyLCBodW1tdXMsIGhvdCBzYXVjZSBhbmQgbXVzdGFyZCBhbmQgc3RpciB0b2dldGhlciB1bnRpbCB3ZWxsIGNvbWJpbmVkIGFuZCBtb3N0bHkgc21vb3RoLiBTcG9vbiBvciBwaXBlIHRoaXMgZmlsbGluZyBiYWNrIGludG8gdGhlIGhvbGxvd3Mgb2YgdGhlIGVnZyB3aGl0ZXMuIFNwcmlua2xlIHBhcHJpa2Egb3ZlciB0aGUgdG9wcyBvZiB0aGUgZWdncyBhbmQgc2VydmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiSHVtbXVzIERldmlsZWQgRWdnc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDY0MDIsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzIwNjQwMi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjE0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkyMDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LjgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTIxNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkyMTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkyMTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoaXNrIHRvZ2V0aGVyIGV2YXBvcmF0ZWQgbWlsaywgcHVkZGluZyBtaXgsIGFuZCB6ZXN0IGluIGEgYm93bCBmb3IgMiBtaW51dGVzIG9yIHVudGlsIG1peHR1cmUgaXMgdGhpY2tlbmVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCZWF0IGNyZWFtIGNoZWVzZSBhbmQgdmFuaWxsYSBhdCBtZWRpdW0gc3BlZWQgd2l0aCBhbiBlbGVjdHJpYyBtaXhlciB1bnRpbCBmbHVmZnkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBvcmFuZ2UganVpY2UgY29uY2VudHJhdGUsIGJlYXRpbmcgdW50aWwgc21vb3RoOyBhZGQgZXZhcG9yYXRlZCBtaWxrIG1peHR1cmUsIGFuZCBiZWF0IHVudGlsIGJsZW5kZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgaW50byBjcnVzdC4gQ292ZXIgYW5kIGNoaWxsIDggaG91cnMgb3IgdW50aWwgZmlybS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ29tYmluZSBjcmVhbSBhbmQgY29uZmVjdGlvbmVyJ3Mgc3VnYXIgaW4gYSBib3dsIGFuZCB3aGlwIHdpdGggYSB3aGlzayB1bnRpbCBpdCBob2xkcyBzb2Z0IHBlYWtzLiBEb2xsb3Agb3IgcGlwZSBlYWNoIHNsaWNlIHdpdGggd2hpcHBlZCBjcmVhbSwgYW5kIGdhcm5pc2ggd2l0aCBjYW5kaWVkIHplc3Qgb3IgY2FuZHkgaWYgZGVzaXJlZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJDcmVhbXNpY2xlIFBpZVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0NDY1NzcsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzQ0NjU3Ny01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNsaWNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTA1MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjEyNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIGJhY29uIGluIGEgbGFyZ2UsIGRlZXAgc2tpbGxldC4gQ29vayBvdmVyIG1lZGl1bSBoaWdoIGhlYXQgdW50aWwgdGhlIGZhdCBiZWdpbnMgdG8gcmVuZGVyLiBTdGlyIGluIG9uaW9ucyBhbmQgZ2FybGljOyBsZXQgY29vayBmb3IgMSBtaW51dGUuIFN0aXIgaW4gYmVhbnMgYW5kIHdhdGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMZXQgdGhlIGJlYW5zIGNvb2sgdW50aWwgdGhlIHdhdGVyIGhhcyBldmFwb3JhdGVkIGFuZCB0aGUgYmVhbnMgYXJlIHRlbmRlci4gSWYgdGhlIGJlYW5zIGFyZSBub3QgdGVuZGVyIG9uY2UgdGhlIHdhdGVyIGhhcyBldmFwb3JhdGVkLCBhZGQgYSBzbWFsbCBhbW91bnQgbW9yZSB3YXRlciBhbmQgbGV0IHRoZW0gY29vayB1bnRpbCB0ZW5kZXIuIFNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlciAodG8gdGFzdGUpIGFuZCBzZXJ2ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJTbW90aGVyZWQgR3JlZW4gQmVhbnNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTc2OTA2LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NzY5MDYtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTk1OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4xMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkyNTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTI1MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MzQwOCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTY3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzcHJpZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIxNTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG1lZGl1bSBib3dsIGFkZCB0aGUgcGVhciBqdWljZSBhbmQgdmluZWdhci4gV2hpbGUgd2hpc2tpbmcsIHNsb3dseSBzdHJlYW0gaW4gdGhlIG9saXZlIG9pbC4gU2NyYXBlIHRoZSBsZWF2ZXMgb2ZmIG9mIHR3byBzcHJpZ3Mgb2YgdGh5bWUgYW5kIGFkZCBpbiB0aGUgYmxhY2sgcGVwcGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlzayB0byBjb21iaW5lXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFzc2VtYmxlIHJvbWFpbmUgbGVhdmVzIGFuZCB0b3Agd2l0aCBzbGljZWQgcGVhciwgc2hhbGxvdCwgdG9hc3RlZCB3YWxudXRzLCBibHVlIGNoZWVzZSBhbmQgc2Vhc29uIHdpdGggc2VhIHNhbHQgdG8gdGFzdGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkRyaXp6bGUgd2l0aCBkZXNpcmVkIGFtb3VudCBvZiB0aGUgcGVhciB2aW5haWdyZXR0ZSBhbmQgZW5qb3khXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiUGVhciAmIFdhbG51dCBTYWxhZCB3aXRoIGEgUGVhciBWaW5haWdyZXR0ZVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzYWxhZFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDUwNDIxOCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTA0MjE4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTE2OTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2Fuc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTEyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAxNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE5MTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEzMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNob3AgYWxsIHRoZSB2ZWdnaWVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTYXV0ZSB0aGUgb25pb24gYW5kIGdhcmxpYyBpbiBhIGxhcmdlIHNraWxsZXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBpbiB0aGUgY2Fycm90cyBhbmQgc2F1dGUgZm9yIGEgZmV3IG1pbnV0ZXMsIGNvdmVyaW5nIHRvIGNvb2sgZm9yIGFib3V0IDUgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGluIHRoZSBvdGhlciB2ZWdnaWVzIGFuZCBzZWFzb25pbmdzIGFuZCBsZXQgaXQgY29vayB1bnRpbCB0aGUgdmVnZ2llcyBhcmUgdGVuZGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSBob3Qgb3ZlciBjb3JuYnJlYWQgd2l0aCBzaHJlZGRlZCBjaGVlc2UgYW5kIHNvdXIgY3JlYW0uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiTWV4aWNhbiBWZWdldGFibGVzIG9uIENvcm5icmVhZFwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0NDUxOTYsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzQ0NTE5Ni01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDYxNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMjA0NDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4xMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTMzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkyOTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjEyNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE1MTUyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBub25zdGljayBza2lsbGV0IGNvYXRlZCB3aXRoIGNvb2tpbmcgc3ByYXksIHNhdXRlIG9uaW9uIGFuZCBncmVlbiBwZXBwZXIgZm9yIDMtNCBtaW51dGVzIG9yIHVudGlsIGNyaXNwLXRlbmRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ29tYmluZSB0aGUgYmFyYmVjdWUgc2F1Y2UsIGhvbmV5LCBiYXNpbCwgZ2FybGljIHBvd2RlciBhbmQgcGVwcGVyOyBwb3VyIG92ZXIgdmVnZXRhYmxlcy4gQnJpbmcgdG8gYSBib2lsIG92ZXIgbWVkaXVtLWhpZ2ggaGVhdCwgc3RpcnJpbmcgY29uc3RhbnRseS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHNocmltcDsgY29vayBhbmQgc3RpciBmb3IgMy01IG1pbnV0ZXMgb3IgdW50aWwgc2hyaW1wIHR1cm4gcGluay5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgd2l0aCByaWNlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJhcmJlY3VlIFNocmltcCBTdGlyLUZyeVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzU5NTM0LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83NTk1MzQtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjAxOCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDU4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTkyMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTY1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjE4MzY0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIjgtaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAxNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE2MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTExMDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA2MTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCBvdmVuIHRvIDQ1MMKwRi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSGVhdCBvaWwgaW4gc2F1Y2VwYW4gb3ZlciBtZWRpdW0taGlnaCBoZWF0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgb25pb24sIGFuZCBjb29rIDUgbWludXRlcywgb3IgdW50aWwgdHJhbnNsdWNlbnQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBnYXJsaWMgYW5kIGN1bWluLCBhbmQgY29vayAxIG1pbnV0ZSBtb3JlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBvbmlvbiBtaXh0dXJlIGluIGJsZW5kZXIgd2l0aCBiZWFucywgY2hpcG90bGUgY2hpbGUsIGJyb3duIHN1Z2FyLCBhbmQgMyBUYnMuIHdhdGVyLiBCbGVuZCB1bnRpbCBzbW9vdGguIFNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgMiB0b3J0aWxsYXMgZWFjaCBvbiAyIGJha2luZyBzaGVldHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCBiZWFuIG1peHR1cmUgb24gdG9ydGlsbGFzLCBhbmQgYmFrZSA1IHRvIDcgbWludXRlcywgb3IgdW50aWwgZWRnZXMgYmVjb21lIGdvbGRlbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG9zcyBzbGF3IGluIGJvd2wgd2l0aCBjaWxhbnRybyBhbmQgbGltZSBqdWljZS4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyLiBUb3AgZWFjaCBjbGF5dWRhIHdpdGggc2xhdywgYW5kIGN1dCBpbnRvIHRyaWFuZ2xlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJDbGF5dWRhc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1ODg4OTMsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU4ODg5My01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDU3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImhhbmRmdWxzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjY4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAwMDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZSBjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDQxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBtZWRpdW0gc2l6ZWQgcG90IGNvbWJpbmUgdGhlIGZhcnJvIHdpdGggdGhlIDUgY3VwcyBvZiB3YXRlciBhbmQgMiB0ZWFzcG9vbnMgc2FsdC4gQnJpbmcgdG8gYSBib2lsLCB0aGVuIGxvd2VyIHRvIGEgc2ltbWVyIGFuZCBjb29rIGZvciBhYm91dCAyNSBtaW51dGVzIGZvciBzZW1pLXBlYXJsZWQgZmFycm8gYW5kIDUwIG1pbnV0ZXMgZm9yIHdob2xlIGZhcnJvLiBUaGUgZmFycm8gaXMgZG9uZSB3aGVuIHRoZSBncmFpbnMgYXJlIHRlbmRlciBhbmQgYWxsIHRoZSB3YXRlciBoYXMgYmVlbiBhYnNvcmJlZC4gU2V0IGFzaWRlLldoaWxlIHRoZSBmYXJybyBpcyBjb29raW5nLCBjb21iaW5lIHRoZSBzaGlpdGFrZSBtdXNocm9vbXMgd2l0aCAxIGN1cCBvZiBib2lsaW5nIHdhdGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMZXQgc2l0IGZvciAxNSBtaW51dGVzIG9yIGhvd2V2ZXIgbG9uZyB0aGUgcGFja2FnZSBpbnN0cnVjdGlvbnMgc2F5IGlzIG5lZWRlZCB0byByZWNvbnN0aXR1dGUgdGhlIG11c2hyb29tcy4gV2hlbiBkb25lLCByZW1vdmUgdGhlIG11c2hyb29tcyBmcm9tIHRoZSB3YXRlciBhbmQgY2hvcCwgcmVzZXJ2aW5nIHRoZSBsaXF1aWQuQWJvdXQgMm8gbWludXRlcyBiZWZvcmUgdGhlIGZhcnJvIGlzIGRvbmUgd2FybSB0aGUgb2xpdmUgb2lsIGluIGEgbGFyZ2Ugc2tpbGxldC4gQ29vayB0aGUgb25pb24sIHN0aXJyaW5nIGZyZXF1ZW50bHksIGZvciBhYm91dCA1IG1pbnV0ZXMgb3IgdW50aWwgdHJhbnNsdWNlbnQgYW5kIGJlZ2lubmluZyB0byBnZXQgc29tZSBjb2xvci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBnYXJsaWMgYW5kIGNydXNoZWQgcmVkIHBlcHBlciBmbGFrZXMgKGlmIHVzaW5nKSwgY29vayAxIG1pbnV0ZSBsb25nZXIsIHVudGlsIGZyYWdyYW50LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGNob3BwZWQgbXVzaHJvb21zLCBtdXNocm9vbSBicm90aCBhbmQgYSBmZXcgYmlnIGhhbmRmdWxzIG9mIGJhYnkgc3BpbmFjaC4gQ29vaywgc3RpcnJpbmcgZnJlcXVlbnRseSwgdW50aWwgdGhlIHNwaW5hY2ggaGFzIHdpbHRlZCBhbmQgbW9zdCBvZiB0aGUgbGlxdWlkIGhhcyBldmFwb3JhdGVkLiBTZWFzb24gd2l0aCBzYWx0IGFuZCBwZXBwZXIgdG8gdGFzdGUuU3RpciBpbiB0aGUgZmFycm8sIG1peGluZyB3aXRoIGEgbGFyZ2Ugc3Bvb24gdG8gY29tYmluZSB3ZWxsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSB0b3BwZWQgd2l0aCBzaHJlZGRlZCBQYXJtZXNhbiBjaGVlc2UuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiRmFycm8gd2l0aCBTaGlpdGFrZSBNdXNocm9vbXMgYW5kIEJhYnkgU3BpbmFjaFwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjE1NTgxLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MTU1ODEtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDY5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDU4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTU2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTY1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTI5NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDI1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTE5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImhlYWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE1MTUyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImhlYWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxNjE2OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTg5NjIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBtYXlvLCBjaGlsaSBzYXVjZSBhbmQgc3JpcmFjaGEsIHRoZW4gc2V0IGl0IGFzaWRlIHVudGlsIHJlYWR5IHRvIHVzZS5Ub3NzIHRoZSBzaHJpbXAgd2l0aCB0aGUgY29ybnN0YXJjaCB1bnRpbCBldmVubHkgY29hdGVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJIZWF0IHRoZSBjYW5vbGEgb2lsIGluIGEgbGFyZ2Ugc2tpbGxldCBvdmVyIGhpZ2ggaGVhdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBzaHJpbXAgYW5kIGNvb2sgdW50aWwgaXQganVzdCB0dXJucyBwaW5rIGFuZCBvcGFxdWUsIGFib3V0IDMgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIHNocmltcCB0byBhIGxhcmdlIGJvd2wgYW5kIHRvc3Mgd2l0aCB0aGUgbWF5byBtaXh0dXJlLkluIGEgc2VwYXJhdGUgYm93bCwgYWRkIHRoZSBjYWJiYWdlIGFuZCBsZXR0dWNlLiBUb3NzIHdpdGggdGhlIG9saXZlIG9pbCwgdmluZWdhciBhbmQgaG9uZXkgdW50aWwgd2VsbCBjb2F0ZWQuIFRvc3MgdGhlIGNpbGFudHJvIGluLiBUbyBzZXJ2ZSB0aGUgc2hyaW1wLCBtaXggd2l0aCB0aGUgc2xhdyBhbmQgZ2FybmlzaCB0aGUgZW50aXJlIHRoaW5nIHdpdGggY2hpdmVzLiBFbmpveSFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCYW5nIEJhbmcgU2hyaW1wIHdpdGggTmFwYSBDYWJiYWdlIFNsYXdcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc2NDgxMCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzY0ODEwLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIzNTcyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMi43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgdGhlIG92ZW4gdG8gMzUwRi5TcHJheSBiYWtpbmcgc2hlZXRzIHdpdGggY29va2luZyBzcHJheSBvciBzcHJlYWQgYSB0aGluIGxheWVyIG9mIG9saXZlIG9pbCBvdmVyIHRoZW0uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCBhbGwgb2YgdGhlIGluZ3JlZGllbnRzIHRvZ2V0aGVyIHZlcnkgd2VsbCAtLSB5b3UnbGwgbmVlZCB0byB1c2UgeW91ciBoYW5kcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUm9sbCBpbnRvIGJhbGxzIHRoZSBzaXplIG9mIGEgZ29sZiBiYWxsLCBtb2xkaW5nIHRoZW0gZmlybWx5IHRvZ2V0aGVyIHdpdGhvdXQgcGFja2luZyB0aGVtLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgYmFsbHMgb24gYmFraW5nIHNoZWV0cy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBmb3IgMzAgdG8gNDAgbWludXRlcywgb3IgdW50aWwgdGhlIGNlbnRlciByZWdpc3RlcnMgMTYwRiBvbiBhIG1lYXQgdGhlcm1vbWV0ZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIG92ZW4gYW5kIHVzZSBhcyBuZWVkZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiSG9tZW1hZGUgSXRhbGlhbiBNZWF0YmFsbHNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzk5NzMyLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83OTk3MzItNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTI1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExNDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicmliXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDUwNjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDkxNTksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDY0MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5ODk5MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzMTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbGFyZ2UgYm93bCwgbWl4IHRoZSBmaXJzdCBzaXggaW5ncmVkaWVudHMuIFN0aXIgaW4gIGNoaWNrZW4sIGNlbGVyeSBhbmQgb25pb24uIFJlZnJpZ2VyYXRlLCBjb3ZlcmVkLCBhdCBsZWFzdCAxIGhvdXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvIHNlcnZlLCBzdGlyIHN0cmF3YmVycmllcyBpbnRvIGNoaWNrZW4gbWl4dHVyZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgb3ZlciBsZXR0dWNlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkN1cnJpZWQgU3RyYXdiZXJyeSBDaGlja2VuIFNhbGFkXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNhbGFkXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjIxMjEzLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MjEyMTMtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDkwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic21hbGxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTgyMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIxOCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTQ1NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTUyOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNhdXRlIG9uaW9uIGluIDEgdGJzcC4gT2xpdmUgT2lsIGZvciBhIGZldyBtaW51dGVzIHVudGlsIHNvZnQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBnYXJsaWMgYW5kIGNvb2sgZm9yIDQ1LTYwIHNlY29uZHMsIHRoZW4gYWRkIHNwaW5hY2guIFB1dCBhbGwgdGhlIHNwaWNlcyBpbiB0aGVyZSBleGNlcHQgZm9yIDEvNCB0c3AuIG9mIHRoZSBsaXF1aWQgc21va2UsIHRoeW1lLCBhbmQgcm9zZW1hcnkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCB3aWx0IGFuZCB0aGVuIGFkZCBjcmVhbSBjaGVlc2UuIFNldCBhc2lkZS5QcmVoZWF0IG92ZW4gdG8gMzUwRi5MYXkgcG9yayB0ZW5kZXJsb2luIG9uIGN1dHRpbmcgYm9hcmQgYW5kIGNvdmVyIHdpdGggc2FyYW4gd3JhcCwgdGhlbiBwb3VuZCB3aXRoIG1lYXQgaGFtbWVyIHVudGlsIGZsYXQgLSBjdXQgdGhlIHVuZXZlbiBzaWRlcyBzbyBpdCBnb2VzIHNxdWFyZS4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyLCB0aGVuIDEvNCB0c3AuIGxpcXVpZCBzbW9rZS5NYWtlIGEgYmFjb24gd2VhdmUgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgcG9yayB0ZW5kZXJsb2luIHNxdWFyZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIHNwaW5hY2ggYW5kIGNyZWFtIGNoZWVzZSBhbGwgb3ZlciB0aGUgcG9yayB0ZW5kZXJsb2luLCB0aGVuIGxheSB0ZW5kZXJsb2luIG9uIHRvcCBvZiBiYWNvbi4gU2xpY2UgdGhlIHBpZWNlcyBvZiBiYWNvbiB0aGF0IHBva2Ugb3V0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSb2xsIGl0IHVwLiBTZWFzb24gd2l0aCBzYWx0IGFuZCBwZXBwZXIgYW5kIHRoZSByZW1haW5pbmcgMS80IHRzcC4gb2YgdGh5bWUgYW5kIHJvc2VtYXJ5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdG9vdGhwaWNrcyB3aGVyZSB0aGUgYmFjb24gZW5kcyBhcmUgc28gdGhhdCBpdCBkb2Vzbid0IGZhbGwgYXBhcnQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDc1IG1pbnV0ZXMgb3IgdW50aWwgdGhlcm1vbWV0ZXIgcmVhZHMgMTQwRi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2F1dGUgYnJvY2NvbGksIHBlcHBlcnMsIGFuZCB0b21hdG9lcyBpbiB0aGUgcmVtYWluaW5nIGZhdCBpbiB0aGUgYm90dG9tIG9mIHRoZSBwYW4gb2YgdGhlIHBvcmsgdGVuZGVybG9pbiB3aGlsZSBpdCByZXN0cy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCYWNvbiBXcmFwcGVkIFN0dWZmZWQgUG9yayBUZW5kZXJsb2luXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MTE4NTgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYxMTg1OC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MTU3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE5OTAzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IG92ZW4gdG8gMzUwRi4gTGluZSBhIDh4OC1pbmNoIGJha2luZyBwYW4gd2l0aCBmb2lsIGFuZCBzcHJheSB3aXRoIG5vbi1zdGljayBjb29raW5nIHNwcmF5LkluIGEgbWVkaXVtIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBmbG91ciwgYmFraW5nIHBvd2RlciwgYmFraW5nIHNvZGEsIGFuZCBzYWx0LkluIHRoZSBib3dsIG9mIGEgc3RhbmQgbWl4ZXIgZml0dGVkIHdpdGggdGhlIHBhZGRsZSBhdHRhY2htZW50IG9yIGluIGEgbGFyZ2UgYm93bCB3aXRoIGFuIGVsZWN0cmljIG1peGVyLCBjb21iaW5lIHRoZSBtZWx0ZWQgYnV0dGVyIGFuZCBicm93biBzdWdhci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGVnZyBhbmQgdmFuaWxsYSwgbWl4aW5nIHVudGlsIHdlbGwgY29tYmluZWQuIEdyYWR1YWxseSBhZGQgaW4gZHJ5IGluZ3JlZGllbnRzIGFuZCBtaXggdW50aWwganVzdCBjb21iaW5lZC4gU3RpciBpbiBjaG9jb2xhdGUgY2hpcHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCBoYWxmIHRoZSBkb3VnaCBpbnRvIHRoZSBwcmVwYXJlZCBwYW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBSb2xvcyBldmVubHkgb250byB0aGUgY29va2llIGRvdWdoLiBVc2luZyBhIHNtYWxsIGNvb2tpZSBzY29vcCwgZXZlbmx5IGRpc3RyaWJ1dGUgdGhlIHJlc3Qgb2YgdGhlIGNvb2tpZSBkb3VnaCBvbiB0b3Agb2YgdGhlIFJvbG9zLiBUaGVyZSBpcyBuZWVkIHRvIHNwcmVhZCBldmVubHkgb3ZlciB0aGUgUm9sb3MsIHRoaXMgd2lsbCBoYXBwZW4gbmF0dXJhbGx5IGR1cmluZyB0aGUgYmFraW5nIHByb2Nlc3MuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgaW4gdGhlIHByZWhlYXRlZCBvdmVuIHVudGlsIGEgdG9vdGhwaWNrIGluc2VydGVkIGluIHRoZSBjZW50ZXIgY29tZXMgb3V0IGNsZWFuLCBhYm91dCAyMCB0byAyNSBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgcGFuIHRvIHdpcmUgcmFjayBhbmQgY29vbCBjb21wbGV0ZWx5LklmIGRlc2lyZWQsIGRyaXp6bGUgd2l0aCBtZWx0ZWQgY2hvY29sYXRlIG9yIGNhcmFtZWwgYmVmb3JlIHNlcnZpbmcuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiUm9sbyBDb29raWUgQmFyc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5OTExMzYsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzk5MTEzNi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDk4ODcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkyOTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDYxNjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDU1MDYyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgY2hpY2tlbiBpbiBhIDMtcXQuIHNsb3cgY29va2VyLiBUb3NzIHdpdGggMiB0YWJsZXNwb29ucyBob3Qgc2F1Y2UgYW5kIHBlcHBlcjsgY29vaywgY292ZXJlZCwgb24gbG93IHVudGlsIHRlbmRlciwgMy00IGhvdXJzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgY2hpY2tlbjsgZGlzY2FyZCBjb29raW5nIGp1aWNlcy4gSW4gYSBzbWFsbCBzYXVjZXBhbiwgY29tYmluZSBidXR0ZXIsIGhvbmV5IGFuZCByZW1haW5pbmcgaG90IHNhdWNlOyBjb29rIGFuZCBzdGlyIG92ZXIgbWVkaXVtIGhlYXQgdW50aWwgYmxlbmRlZC4gU2hyZWQgY2hpY2tlbiB3aXRoIHR3byBmb3Jrczsgc3RpciBpbnRvIHNhdWNlIGFuZCBoZWF0IHRocm91Z2guXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIG9uIHJvbGxzIHdpdGggb3B0aW9uYWwgaW5ncmVkaWVudHMgYXMgZGVzaXJlZC4gRnJlZXplIG9wdGlvbjogRnJlZXplIGNvb2xlZCBjaGlja2VuIG1peHR1cmUgaW4gZnJlZXplciBjb250YWluZXJzLiBUbyB1c2UsIHBhcnRpYWxseSB0aGF3IGluIHJlZnJpZ2VyYXRvciBvdmVybmlnaHQuIE1pY3Jvd2F2ZSwgY292ZXJlZCwgb24gaGlnaCBpbiBhIG1pY3Jvd2F2ZS1zYWZlIGRpc2ggdW50aWwgaGVhdGVkIHRocm91Z2gsIHN0aXJyaW5nIG9jY2FzaW9uYWxseSBhbmQgYWRkaW5nIGEgbGl0dGxlIHdhdGVyIG9yIGJyb3RoIGlmIG5lY2Vzc2FyeS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCdWZmYWxvIENoaWNrZW4gU2xpZGVyc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTgzNzM4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81ODM3MzgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MDk4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxOTE1MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCBvdmVuIHRvIDM1MMKwRi4gTGluZSB0d28gYmFraW5nIHNoZWV0cyB3aXRoIHBhcmNobWVudCBwYXBlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ29tYmluZSB0aGUgZmxvdXIsIGJha2luZyBzb2RhIGFuZCBzYWx0IGluIGEgbWVkaXVtIGJvd2wuIFNldCBhc2lkZS5JbiB0aGUgYm93bCBvZiBhIHN0YW5kIG1peGVyLCBiZWF0IHRoZSBidXR0ZXIsIHBlYW51dCBidXR0ZXIgYW5kIHN1Z2FycywgdW50aWwgbGlnaHQgYW5kIGZsdWZmeS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGluIHRoZSBlZ2cgYW5kIHZhbmlsbGEuR3JhZHVhbGx5IGFkZCBpbiB0aGUgZmxvdXIgbWl4dHVyZSBvbiBsb3cgc3BlZWQuIFN0aXIgdW50aWwgZG91Z2ggZm9ybXMuIFRoZW4gc3RpciBpbiBSZWVzZSdzIFBpZWNlcyBieSBoYW5kLlVzaW5nIGEgY29va2llIGRvdWdoIHNjb29wIG9yIHlvdXIgaGFuZHMsIGZvcm0gYmFsbHMgb2YgZG91Z2ggd2l0aCAxIGhlYXBpbmcgdGFibGVzcG9vbiBvZiBkb3VnaC4gR2VudGx5IGZsYXR0ZW4gY29va2llIGRvdWdoICh0byBmb3JtIGEgZGlzayBzaGFwZSkgYW5kIHBsYWNlIG9uIHByZXBhcmVkIGJha2luZyBzaGVldHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDkgbWludXRlcyBhbmQgcmVtb3ZlIGZyb20gb3Zlbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTGV0IGNvb2wgZm9yIDUgbWludXRlcyBiZWZvcmUgdHJhbnNmZXJyaW5nIGNvb2tpZXMgdG8gYSB3aXJlIHJhY2sgdG8gY29vbCBjb21wbGV0ZWx5Lk5vdGU6IENvb2tpZXMgd2lsbCBub3Qgc3ByZWFkIG11Y2ggYXQgYWxsIGFuZCB3aWxsIGxvb2sgbGlrZSB0aGV5IGFyZSBub3QgZG9uZSBiYWtpbmcuIEJ1dCBJIHByb21pc2UgdGhleSBhcmUhIE9uY2UgdGhleSBmaW5pc2ggY29vbGluZywgdGhlIGNvb2tpZSBhbmQgY2hvY29sYXRlIHdpbGwgYmVjb21lIGZpcm0gYW5kIHlvdSB3aWxsIGhhdmUgYSBtYWdpY2FsbHkgc29mdCBhbmQgY3J1bWJseSBjb29raWUhXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiUmVlc2UncyBQaWVjZXMgUGVhbnV0IEJ1dHRlciBDb29raWVzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYwMTIxNixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjAxMjE2LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA0MTAwOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxODQxMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsZWF2ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTE1MjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTYXV0ZSB0aGUgenVjY2hpbmkgaW4gdGhlIG9saXZlIG9pbCBvbiBoaWdoIGhlYXQuIFNlYXNvbiBnZW5lcm91c2x5IHdpdGggc2FsdCBhbmQgcGVwcGVyLiBTdGlyIGFuZCBsZWF2ZSBhbG9uZSBmb3IgYSBsaXR0bGUgd2hpbGUsIHNvIHlvdSBnZXQgYSBsaXR0bGUgYml0IG9mIHRleHR1cmUgZnJvbSB0aGUgYnJvd25pbmcgb24gdGhlIHp1Y2NoaW5pLldoaWxlIHlvdeKAmXJlIHNhdXRlaW5nLCB0b2FzdCB0aGUgZmxhdGJyZWFkIGluIHRoZSBvdmVuIGF0IDQwMCBkZWdyZWVzLldoZW4gdGhlIHp1Y2NoaW5pIGlzIHNvZnQgYW5kIGp1c3Qgc2xpZ2h0bHkgYnJvd25lZCwgcmVtb3ZlIGZyb20gdGhlIGhlYXQuIFRha2UgdGhlIGZsYXRicmVhZCBvdXQgb2YgdGhlIG92ZW4gYW5kIHNwcmVhZCB0aGUgenVjY2hpbmkgb24gdGhlIGZsYXRicmVhZC5Ub3Agd2l0aCB0aGUgZnJlc2ggdG9tYXRvZXMsIGNoZWVzZSwgYW5kIGZyZXNoIGJhc2lsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDdXQsIHNlcnZlLCBhbmQgZW5qb3khXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiRmFybWVy4oCZcyBNYXJrZXQgRmxhdGJyZWFkIFBpenphXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIyNjU2MixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvMjI2NTYyLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTAxOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODA3OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYwNjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwNzksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExNjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDE0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExOTM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIxNTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE4MjEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjYxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2FzaCB0aGUgbGVudGlscyBhbmQgcGxhY2UgaW50byBhIHBvdCBhbG9uZyB3aXRoIHRoZSB2ZWdldGFibGUgYnJvdGguIEJyaW5nIHRvIGEgYm9pbCwgdGhlbiByZWR1Y2UgaGVhdCB0byBtZWRpdW0tbG93IGFuZCBzaW1tZXIsIGZvciBhYm91dCA0MCBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgbW9yZSBicm90aCBvciB3YXRlciBpZiBuZWNlc3NhcnlcIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWVhbndoaWxlLCB3YXJtIHRoZSBvaWwgaW4gYSBwYW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgb25pb25zIGFuZCBjb29rIGZvciBhYm91dCA0IG1pbnV0ZXMgb3IgdW50aWwgc29mdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBjYXJyb3RzLCBiZWxsIHBlcHBlciBhbmQgZ2FybGljLiBDb29rIGZvciBhYm91dCAzIG1pbnV0ZXMgbW9yZS4gU2V0IGFzaWRlLldoZW4gdGhlIGxlbnRpbHMgYXJlIHJlYWR5IG1hc2ggdGhlbSBzbGlnaHRseSB3aXRoIGEgcG90YXRvIG1hc2hlciBvciBhIGZvcmsuUHJlaGVhdCB0aGUgb3ZlbiB0byAzNTDCuiBGLkluIGEgbGFyZ2UgYm93bCwgbWl4IHRoZSBvbmlvbiBtaXh0dXJlLCBtYXNoZWQgbGVudGlscywgYXBwbGUgc2F1Y2UsIGNyYW5iZXJyaWVzLCBwaXN0YWNoaW9zLCBicmVhZCBjcnVtYnMsIGNpbGFudHJvLCBjaGlsaSBwb3dkZXIsIGN1bWluLCB0aHltZSwgc2FsdCBhbmQgcGVwcGVyLkxpbmUgYSBsb2FmIHBhbiB3aXRoIHBhcmNobWVudCBwYXBlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIG1peHR1cmUgdG8gdGhlIGxvYWYgcGFuIGFuZCBwcmVzcyBtaXh0dXJlIGludG8gdGhlIHBhbiB3aXRoIGEgc3Bvb24uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCB0aGUgZ2xhemUgaW5ncmVkaWVudHMgaW4gYSBzbWFsbCBib3dsIGFuZCBzcHJlYWQgZXZlbmx5IG92ZXIgdGhlIHRvcC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBmb3IgYWJvdXQgNDUgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIHBhbiB0byBhIHdpcmUgcmFjayBhbmQgbGV0IHRoZSBsb2FmIGNvb2wgYSBiaXQuIFJ1biBhIHRhYmxlIGtuaWZlIGFyb3VuZCB0aGUgZWRnZSBvZiB0aGUgcGFuIGFuZCB0dXJuIHRoZSBsb2FmIG91dCBvbnRvIGEgc2VydmluZyBwbGF0ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA5XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJWZWdhbiBMZW50aWwgTG9hZlwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MDUxMzIsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYwNTEzMi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBoZWF2eSBzYXVjZXBhbiwgc3RpciB0b2dldGhlciB0aGUgbWlsayBhbmQgMS80IGN1cCBvZiBzdWdhci4gQnJpbmcgdG8gYSBib2lsIG92ZXIgbWVkaXVtIGhlYXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbWVkaXVtIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBlZ2cgeW9sa3MgYW5kIGVnZy4gU3RpciB0b2dldGhlciB0aGUgcmVtYWluaW5nIHN1Z2FyIGFuZCBjb3Juc3RhcmNoOyB0aGVuIHN0aXIgdGhlbSBpbnRvIHRoZSBlZ2cgdW50aWwgc21vb3RoLiBXaGVuIHRoZSBtaWxrIGNvbWVzIHRvIGEgYm9pbCwgZHJpenpsZSBpdCBpbnRvIHRoZSBib3dsIGluIGEgdGhpbiBzdHJlYW0gd2hpbGUgbWl4aW5nIHNvIHRoYXQgeW91IGRvIG5vdCBjb29rIHRoZSBlZ2dzLiBSZXR1cm4gdGhlIG1peHR1cmUgdG8gdGhlIHNhdWNlcGFuLCBhbmQgc2xvd2x5IGJyaW5nIHRvIGEgYm9pbCwgc3RpcnJpbmcgY29uc3RhbnRseSBzbyB0aGUgZWdncyBkb24nIHQgY3VyZGxlIG9yIHNjb3JjaCBvbiB0aGUgYm90dG9tLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGVuIHRoZSBtaXh0dXJlIGNvbWVzIHRvIGEgYm9pbCBhbmQgdGhpY2tlbnMsIHJlbW92ZSBmcm9tIHRoZSBoZWF0LiBTdGlyIGluIHRoZSBidXR0ZXIgYW5kIHZhbmlsbGEsIG1peGluZyB1bnRpbCB0aGUgYnV0dGVyIGlzIGNvbXBsZXRlbHkgYmxlbmRlZCBpbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciBpbnRvIGEgaGVhdC1wcm9vZiBjb250YWluZXIgYW5kIHBsYWNlIGEgcGllY2Ugb2YgcGxhc3RpYyB3cmFwIGRpcmVjdGx5IG9uIHRoZSBzdXJmYWNlIHRvIHByZXZlbnQgYSBza2luIGZyb20gZm9ybWluZy4gUmVmcmlnZXJhdGUgdW50aWwgY2hpbGxlZCBiZWZvcmUgdXNpbmcuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiUGFzdHJ5IENyZWFtXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfVxuICBdXG5leHBvcnQgZGVmYXVsdCByZWNpcGVEYXRhO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGFwaUNhbGxzIGZyb20gJy4vYXBpQ2FsbHMnO1xuaW1wb3J0IFJlY2lwZVJlcG9zaXRvcnkgZnJvbSAnLi9jbGFzc2VzL1JlY2lwZVJlcG9zaXRvcnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL2NsYXNzZXMvUmVjaXBlJztcbmltcG9ydCByZWNpcGVEYXRhIGZyb20gJy4vZGF0YS9yZWNpcGVzJztcbmltcG9ydCBpbmdyZWRpZW50c0RhdGEgZnJvbSAnLi9kYXRhL2luZ3JlZGllbnRzJztcblxuLy9RdWVyeSBTZWxlY3RvcnNcbmNvbnN0IGFsbFJlY2lwZXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsUmVjaXBlc0J1dHRvbicpO1xuY29uc3QgcmVjaXBlQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVjaXBlQ2FyZFNlY3Rpb24nKTtcbmNvbnN0IGxhbmRpbmdQYWdlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5kaW5nUGFnZVZpZXcnKTtcbmNvbnN0IHJlY2lwZURpc3BsYXlWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlY2lwZURpc3BsYXlWaWV3Jyk7XG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRpbmcnKTtcbmNvbnN0IHJlY2lwZURldGFpbHNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlY2lwZURldGFpbHNWaWV3Jyk7XG5jb25zdCBuYXZGaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2RmlsdGVyQnV0dG9uJyk7XG5jb25zdCBmaWx0ZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlclZpZXcnKTtcblxuLy9HbG9iYWwgdmFyaWFibGVzXG5sZXQgcmVjaXBlUmVwb3NpdG9yeTtcblxuLy9GdW50aW9uc1xuY29uc3QgYWRkSGlkZGVuID0gZWxlbWVudHMgPT4ge1xuICBlbGVtZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSlcbn1cblxuY29uc3QgcmVtb3ZlSGlkZGVuID0gZWxlbWVudHMgPT4ge1xuICBlbGVtZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSlcbn1cblxuY29uc3QgaW5zdGFudGlhdGVSZWNpcGVSZXBvc2l0b3J5ID0gKCkgPT4ge1xuICByZWNpcGVSZXBvc2l0b3J5ID0gbmV3IFJlY2lwZVJlcG9zaXRvcnkocmVjaXBlRGF0YSwgaW5ncmVkaWVudHNEYXRhKTtcbn1cblxuXG5cbmNvbnN0IGRpc3BsYXlBbGxSZWNpcGVzID0gKCkgPT4ge1xuICBhZGRIaWRkZW4oW2xhbmRpbmdQYWdlVmlld10pO1xuICByZW1vdmVIaWRkZW4oW3JlY2lwZURpc3BsYXlWaWV3XSk7XG4gIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ0FsbCBSZWNpcGVzJ1xuICByZWNpcGVDYXJkU2VjdGlvbi5pbm5lckhUTUwgPSBgYDtcbiAgcmVjaXBlUmVwb3NpdG9yeS5yZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICByZWNpcGVDYXJkU2VjdGlvbi5pbm5lckhUTUwgKz0gYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwicmVjaXBlLWNhcmRcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJyZWNpcGUtY2FyZC1pbWdcIiBzcmM9XCIke3JlY2lwZS5pbWFnZX1cIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJyZWNpcGUtbmFtZS1idXR0b25cIiBpZD1cIiR7cmVjaXBlLmlkfVwiID4ke3JlY2lwZS5uYW1lfTwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkLWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbj7wn6WYPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+4p2k77iPPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+YDtcbiAgfSlcbn1cblxuY29uc3Qgc2hvd1JlY2lwZURldGFpbHMgPSAoZXZlbnQpID0+IHtcbiAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVjaXBlLW5hbWUtYnV0dG9uJykpe1xuICAgIGFkZEhpZGRlbihbcmVjaXBlRGlzcGxheVZpZXddKTtcbiAgICByZW1vdmVIaWRkZW4oW3JlY2lwZURldGFpbHNWaWV3XSk7XG4gICAgcmVjaXBlUmVwb3NpdG9yeS5yZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gcmVjaXBlLmlkLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRSZWNpcGUgPSBuZXcgUmVjaXBlKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKTtcbiAgICAgICAgbGV0IGluZ3JlZGllbnROYW1lcyA9IHNlbGVjdGVkUmVjaXBlLmdldEluZ3JlZGllbnROYW1lcygpLnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICAgICAgYWNjICs9IGA8bGk+JHtpbmdyZWRpZW50fTwvbGk+YFxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgfSwgYGApXG4gICAgICAgIGxldCBpbmdyZWRpZW50SW5zdHJ1Y3Rpb25zID0gc2VsZWN0ZWRSZWNpcGUuZ2V0UmVjaXBlSW5zdHJ1Y3Rpb25zKCkucmVkdWNlKChhY2MsIGluc3RydWN0aW9uKSA9PiB7XG4gICAgICAgICAgYWNjICs9IGA8bGk+JHtpbnN0cnVjdGlvbn08L2xpPmBcbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIH0sIGBgKVxuICAgICAgICByZWNpcGVEZXRhaWxzVmlldy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicmVjaXBlLWhlYWRlclwiIGlkPVwicmVjaXBlSGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+JHtyZWNpcGUubmFtZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+JHtzZWxlY3RlZFJlY2lwZS5nZXRSZWNpcGVDb3N0KCl9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtZGV0YWlsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24+8J+lmDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj7inaTvuI88L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPSBcInJlY2lwZS1kZXRhaWxzXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJpbmdyZWRpZW50c1wiPlxuICAgICAgICAgICAgPGgyPkluZ3JlZGllbnRzPC9oMj5cbiAgICAgICAgICAgIDx1bD4ke2luZ3JlZGllbnROYW1lc308L3VsPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImluc3RydWN0aW9uc1wiPlxuICAgICAgICAgICAgPGgyPkluc3RydWN0aW9uczwvaDI+XG4gICAgICAgICAgICA8b2w+JHtpbmdyZWRpZW50SW5zdHJ1Y3Rpb25zfTwvb2w+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5gXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVIZWFkZXInKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVjaXBlLmltYWdlfSlgXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBkaXNwbGF5RmlsdGVyRm9ybSA9ICgpID0+IHtcbiAgYWRkSGlkZGVuKFtsYW5kaW5nUGFnZVZpZXcsIHJlY2lwZURpc3BsYXlWaWV3LCByZWNpcGVEZXRhaWxzVmlld10pO1xuICByZW1vdmVIaWRkZW4oW2ZpbHRlclZpZXddKTtcblxuICAvLyA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJiZWFuc1wiIG5hbWU9XCJ0YWdcIiB2YWx1ZT1cImJlYW5zXCI+XG4gIC8vIDxsYWJlbCBmb3I9XCJiZWFuc1wiPkJlYW5zPC9sYWJlbD5cbn1cblxuLy9FdmVudCBMaXN0ZW5lcnNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5zdGFudGlhdGVSZWNpcGVSZXBvc2l0b3J5KTtcbmFsbFJlY2lwZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsUmVjaXBlcyk7XG5yZWNpcGVDYXJkU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgc2hvd1JlY2lwZURldGFpbHMoZXZlbnQpfSk7XG5uYXZGaWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5RmlsdGVyRm9ybSk7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==