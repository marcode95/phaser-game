/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n margin: 0 auto;\n position: relative;\n}\n\n#health-bar {\n  position: absolute;\n  top: 60px;\n  left: 16px;\n  display: flex;\n}\n\n#health-bar i {\n  font-size: 30px;\n  color: red;\n  margin-right: 13px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,cAAc;CACd,kBAAkB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA;EACE,eAAe;EACf,UAAU;EACV,kBAAkB;AACpB","sourcesContent":["body {\n margin: 0 auto;\n position: relative;\n}\n\n#health-bar {\n  position: absolute;\n  top: 60px;\n  left: 16px;\n  display: flex;\n}\n\n#health-bar i {\n  font-size: 30px;\n  color: red;\n  margin-right: 13px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
    var nonce =  true ? __webpack_require__.nc : 0;

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

/***/ "./src/assets/bomb.png":
/*!*****************************!*\
  !*** ./src/assets/bomb.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1344cabbbf6c61010d6e.png";

/***/ }),

/***/ "./src/assets/bullet.png":
/*!*******************************!*\
  !*** ./src/assets/bullet.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea5aa2eeca78c5faba89.png";

/***/ }),

/***/ "./src/assets/dude.png":
/*!*****************************!*\
  !*** ./src/assets/dude.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96aa753af441d2464d09.png";

/***/ }),

/***/ "./src/assets/glowworm1.png":
/*!**********************************!*\
  !*** ./src/assets/glowworm1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1dfbf343cd207d11b6a0.png";

/***/ }),

/***/ "./src/assets/glowworm2.png":
/*!**********************************!*\
  !*** ./src/assets/glowworm2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0567d722c395aa1f4ca7.png";

/***/ }),

/***/ "./src/assets/glowworm3.png":
/*!**********************************!*\
  !*** ./src/assets/glowworm3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "762f69b049e2d0082af0.png";

/***/ }),

/***/ "./src/assets/glowworm4.png":
/*!**********************************!*\
  !*** ./src/assets/glowworm4.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "008401813d2636a71e47.png";

/***/ }),

/***/ "./src/assets/ground.png":
/*!*******************************!*\
  !*** ./src/assets/ground.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d004277e70a537c1b6a0.png";

/***/ }),

/***/ "./src/assets/heart.png":
/*!******************************!*\
  !*** ./src/assets/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb0be1e12d258867ca0e.png";

/***/ }),

/***/ "./src/assets/heartItem.png":
/*!**********************************!*\
  !*** ./src/assets/heartItem.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f0f5893b23b95344f4c.png";

/***/ }),

/***/ "./src/assets/jumpItem.png":
/*!*********************************!*\
  !*** ./src/assets/jumpItem.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "509084d374a3263b2db9.png";

/***/ }),

/***/ "./src/assets/knightAttackingRight.png":
/*!*********************************************!*\
  !*** ./src/assets/knightAttackingRight.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c522f04047989805fa2f.png";

/***/ }),

/***/ "./src/assets/knightRunningLeft.png":
/*!******************************************!*\
  !*** ./src/assets/knightRunningLeft.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2469a210190d31aa360d.png";

/***/ }),

/***/ "./src/assets/knightRunningRight.png":
/*!*******************************************!*\
  !*** ./src/assets/knightRunningRight.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "298cf4f3c86378cc0f3e.png";

/***/ }),

/***/ "./src/assets/knightStanding.png":
/*!***************************************!*\
  !*** ./src/assets/knightStanding.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "939e2b4a67ad2d97d5cd.png";

/***/ }),

/***/ "./src/assets/sky.png":
/*!****************************!*\
  !*** ./src/assets/sky.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b829ba1eb5a3c05e3981.png";

/***/ }),

/***/ "./src/assets/star.png":
/*!*****************************!*\
  !*** ./src/assets/star.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7cb585cf61f7dafb028.png";

/***/ }),

/***/ "./src/assets/starItem.png":
/*!*********************************!*\
  !*** ./src/assets/starItem.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65ba016769e7952f3c0c.png";

/***/ }),

/***/ "./src/assets/stones.png":
/*!*******************************!*\
  !*** ./src/assets/stones.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0fc13e80ae9d1c86b7b.png";

/***/ }),

/***/ "./src/assets/trees1.png":
/*!*******************************!*\
  !*** ./src/assets/trees1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9596319cf44e3faa808f.png";

/***/ }),

/***/ "./src/assets/trees2.png":
/*!*******************************!*\
  !*** ./src/assets/trees2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a337f3cc8d27d7b4cf2f.png";

/***/ }),

/***/ "./src/assets/trees3.png":
/*!*******************************!*\
  !*** ./src/assets/trees3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5bfac9c297533fd55ac.png";

/***/ }),

/***/ "./src/assets/trees4.png":
/*!*******************************!*\
  !*** ./src/assets/trees4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09cfdd635432455f90c7.png";

/***/ }),

/***/ "./src/assets/wolfRunningLeft.png":
/*!****************************************!*\
  !*** ./src/assets/wolfRunningLeft.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dc5303a2926959675c8.png";

/***/ }),

/***/ "./src/assets/wolfRunningRight.png":
/*!*****************************************!*\
  !*** ./src/assets/wolfRunningRight.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4dfb976481cb927e568.png";

/***/ }),

/***/ "./src/assets/wolfStanding.png":
/*!*************************************!*\
  !*** ./src/assets/wolfStanding.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dd9a0112d841aa2f606.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_sky_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sky.png */ "./src/assets/sky.png");
/* harmony import */ var _assets_stones_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/stones.png */ "./src/assets/stones.png");
/* harmony import */ var _assets_trees1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/trees1.png */ "./src/assets/trees1.png");
/* harmony import */ var _assets_trees2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/trees2.png */ "./src/assets/trees2.png");
/* harmony import */ var _assets_trees3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/trees3.png */ "./src/assets/trees3.png");
/* harmony import */ var _assets_trees4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/trees4.png */ "./src/assets/trees4.png");
/* harmony import */ var _assets_glowworm1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/glowworm1.png */ "./src/assets/glowworm1.png");
/* harmony import */ var _assets_glowworm2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/glowworm2.png */ "./src/assets/glowworm2.png");
/* harmony import */ var _assets_glowworm3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/glowworm3.png */ "./src/assets/glowworm3.png");
/* harmony import */ var _assets_glowworm4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/glowworm4.png */ "./src/assets/glowworm4.png");
/* harmony import */ var _assets_ground_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/ground.png */ "./src/assets/ground.png");
/* harmony import */ var _assets_heart_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/heart.png */ "./src/assets/heart.png");
/* harmony import */ var _assets_bullet_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/bullet.png */ "./src/assets/bullet.png");
/* harmony import */ var _assets_jumpItem_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/jumpItem.png */ "./src/assets/jumpItem.png");
/* harmony import */ var _assets_heartItem_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/heartItem.png */ "./src/assets/heartItem.png");
/* harmony import */ var _assets_starItem_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/starItem.png */ "./src/assets/starItem.png");
/* harmony import */ var _assets_knightStanding_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/knightStanding.png */ "./src/assets/knightStanding.png");
/* harmony import */ var _assets_knightRunningRight_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/knightRunningRight.png */ "./src/assets/knightRunningRight.png");
/* harmony import */ var _assets_knightRunningLeft_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/knightRunningLeft.png */ "./src/assets/knightRunningLeft.png");
/* harmony import */ var _assets_knightAttackingRight_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/knightAttackingRight.png */ "./src/assets/knightAttackingRight.png");
/* harmony import */ var _assets_wolfStanding_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/wolfStanding.png */ "./src/assets/wolfStanding.png");
/* harmony import */ var _assets_wolfRunningRight_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/wolfRunningRight.png */ "./src/assets/wolfRunningRight.png");
/* harmony import */ var _assets_wolfRunningLeft_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/wolfRunningLeft.png */ "./src/assets/wolfRunningLeft.png");
/* harmony import */ var _assets_dude_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/dude.png */ "./src/assets/dude.png");
/* harmony import */ var _assets_bomb_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/bomb.png */ "./src/assets/bomb.png");
/* harmony import */ var _assets_star_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/star.png */ "./src/assets/star.png");
































var config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 675,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true
};

var player;
var wolves;
var jumpItems;
var heartItems;
var starItems;
var bullets;
var platforms;
var cursors;
var spaceKey
var score = 0;
var gameOver = false;
var scoreText;
let invincible = false;
let superJump = false;
var stars;
var bombs;

var game = new Phaser.Game(config);

class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" });
  }

  create() {
    this.scene.start("SceneMain");
  }
}

class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
  }

  preload () {
    this.load.image('sky', _assets_sky_png__WEBPACK_IMPORTED_MODULE_1__);
    this.load.image('stones', _assets_stones_png__WEBPACK_IMPORTED_MODULE_2__);
    this.load.image('trees1', _assets_trees1_png__WEBPACK_IMPORTED_MODULE_3__);
    this.load.image('trees2', _assets_trees2_png__WEBPACK_IMPORTED_MODULE_4__);
    this.load.image('trees3', _assets_trees3_png__WEBPACK_IMPORTED_MODULE_5__);
    this.load.image('trees4', _assets_trees4_png__WEBPACK_IMPORTED_MODULE_6__);
    this.load.image('glowworm1', _assets_glowworm1_png__WEBPACK_IMPORTED_MODULE_7__);
    this.load.image('glowworm2', _assets_glowworm2_png__WEBPACK_IMPORTED_MODULE_8__);
    this.load.image('glowworm3', _assets_glowworm3_png__WEBPACK_IMPORTED_MODULE_9__);
    this.load.image('glowworm4', _assets_glowworm4_png__WEBPACK_IMPORTED_MODULE_10__);
    this.load.image('ground', _assets_ground_png__WEBPACK_IMPORTED_MODULE_11__);
    this.load.image('jumpItem', _assets_jumpItem_png__WEBPACK_IMPORTED_MODULE_14__);
    this.load.image('heartItem', _assets_heartItem_png__WEBPACK_IMPORTED_MODULE_15__);
    this.load.image('starItem', _assets_starItem_png__WEBPACK_IMPORTED_MODULE_16__);
    this.load.image('bullet', _assets_bullet_png__WEBPACK_IMPORTED_MODULE_13__);

    this.load.spritesheet('dude', _assets_dude_png__WEBPACK_IMPORTED_MODULE_24__, { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('knightStanding', _assets_knightStanding_png__WEBPACK_IMPORTED_MODULE_17__, { frameWidth: 128, frameHeight: 90 });
    this.load.spritesheet('knightRunningRight', _assets_knightRunningRight_png__WEBPACK_IMPORTED_MODULE_18__, { frameWidth: 192, frameHeight: 90 });
    this.load.spritesheet('knightRunningLeft', _assets_knightRunningLeft_png__WEBPACK_IMPORTED_MODULE_19__, { frameWidth: 192, frameHeight: 90 });
    this.load.spritesheet('knightAttackingRight', _assets_knightAttackingRight_png__WEBPACK_IMPORTED_MODULE_20__, { frameWidth: 288, frameHeight: 90 });
    this.load.spritesheet('wolfStanding', _assets_wolfStanding_png__WEBPACK_IMPORTED_MODULE_21__, { frameWidth: 128, frameHeight: 90 });
    this.load.spritesheet('wolfRunningRight', _assets_wolfRunningRight_png__WEBPACK_IMPORTED_MODULE_22__, { frameWidth: 128, frameHeight: 90 });
    this.load.spritesheet('wolfRunningLeft', _assets_wolfRunningLeft_png__WEBPACK_IMPORTED_MODULE_23__, { frameWidth: 128, frameHeight: 90 });

    this.load.image('star', _assets_star_png__WEBPACK_IMPORTED_MODULE_26__);
    this.load.image('bomb', _assets_bomb_png__WEBPACK_IMPORTED_MODULE_25__);
    this.load.image('heart', _assets_heart_png__WEBPACK_IMPORTED_MODULE_12__);
  }

  create () {
    //  A simple background for our game
    this.add.image(600, 337.5, 'sky').setScrollFactor(0);
    createLoop(this, 4, 'trees4', 0.2);
    createLoop(this, 4, 'trees2', 0.4);
    createLoop(this, 4, 'trees1', 0.6);
    createLoop(this, 4, 'trees3', 0.8);
    createLoop(this, 4, 'stones', 1);
    createLoop(this, 4, 'glowworm4', 1);
    createLoop(this, 4, 'glowworm1', 1.25);
    createLoop(this, 4, 'glowworm2', 1.25);
    createLoop(this, 4, 'glowworm3', 1.25);
  
  
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();
  
    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    // platforms.create(32, 670, 'ground').setScale(1.5).refreshBody();
    // platforms.create(96, 670, 'ground').setScale(1.5).refreshBody();
    createGround(32, 670, 'ground', 1.5, 15);
  
    //  Now let's create some ledges
    //  platforms.create(600, 400, 'ground');
    //  platforms.create(50, 250, 'ground');
    //  platforms.create(750, 220, 'ground');
  
    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'knightStanding');
  
    //  Player physics properties. Give the little guy a slight bounce.
    player.setCollideWorldBounds(true);
    player.setGravityY(200);
  
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('knightRunningLeft', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
  
    this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('knightStanding', { start: 0, end: 14 }),
        frameRate: 10,
        repeat: -1
    });
  
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('knightRunningRight', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
  
    this.anims.create({
      key: 'attackRight',
      frames: this.anims.generateFrameNumbers('knightAttackingRight', { start: 0, end: 21 }),
      frameRate: 10,
      repeat: -1
    });  
  
    this.anims.create({
      key: 'wolfRight',
      frames: this.anims.generateFrameNumbers('wolfRunningRight', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
  
    this.anims.create({
      key: 'wolfLeft',
      frames: this.anims.generateFrameNumbers('wolfRunningLeft', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
  
    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();
    spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  
    //  WOLVES
    wolves = this.physics.add.group({
      key: 'wolfStanding',
      setXY: { x: 700, y: 0 }
    })
    wolves.setVelocityX(0);
  
    //  JUMP ITEM
    jumpItems = this.physics.add.group({
      key: 'jumpItem',
      setXY: { x: 500, y: 0}
    });  
  
    //  HEART ITEM
    heartItems = this.physics.add.group({
      key: 'heartItem',
      setXY: { x: 400, y: 0}
    });
  
    //  STAR ITEM
    starItems = this.physics.add.group({
      key: 'starItem',
      setXY: { x: 600, y: 0}
    });  
  
    //  BULLET 
    bullets = this.physics.add.group();
    // bullets.enableBody = true;
  
    bullets.createMultiple(20, 'bullet');
  
    // bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetBullet);
    // bullets.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
   
    // bullets.setAll('checkWorldBounds', true);
  
  
  
  
  
  
  
  
    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 2,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
  
    stars.children.iterate(function (child) {
  
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  
    });
  
    bombs = this.physics.add.group();
  
    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
  
    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(wolves, platforms);
    this.physics.add.collider(jumpItems, platforms);
    this.physics.add.collider(heartItems, platforms);
    this.physics.add.collider(starItems, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
  
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);
  
    this.physics.add.collider(player, bombs, hitBomb, null, this);
  
    this.physics.add.collider(player, jumpItems, activateSuperJump, null, this);
  
    this.physics.add.collider(player, heartItems, addHeart, null, this);
  
    this.physics.add.collider(player, starItems, activateInvincibilityItem, null, this);
  
    this.physics.add.collider(player, wolves, looseHeart, null, this);
  
    this.cameras.main.setBounds(0, 0, 3000);
  }

  update () {
    const cam = this.cameras.main;
  
    if (gameOver)
    {
        return;
    }
  
    // if (player.body.velocity.x === 0) {
    //   player.anims.play('turn');
    // }
  
    if (cursors.left.isDown)
    {  
        player.setVelocityX(-160);
        player.anims.play('left', true);
  
        cam.scrollX -= 2;
    }
  
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
  
        cam.scrollX += 2;
    }
  
    else
    {      
      player.setVelocityX(0);
      player.anims.play('turn');
    }
  
    if (spaceKey.isDown) {  
      player.anims.play('right', false);
      //fireBullet(this);    
    }
  
  
  
    if (cursors.up.isDown && player.body.touching.down) { 
      if (superJump === false) {
        player.setVelocityY(-270);
      }
      else if (superJump === true) {
        player.setVelocityY(-470);      
      }
    }
  
    wolves.children.iterate(function (wolf) {
      if (wolf.body.velocity.x > 0) {
        wolf.anims.play('wolfRight', true);
      }
      if (wolf.body.velocity.x < 0) {
        wolf.anims.play('wolfLeft', true);
      }
    });
  }
}

class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: "SceneGameOver" });
  }

  create() {
    
  }
}

let hearts = 3;
const healthBar = document.getElementById('health-bar');
const updateHealthBar = () => {
  healthBar.innerHTML = ''
  for (let i=0; i < hearts; i++) {
    const singleHeart = document.createElement('img');
    singleHeart.setAttribute('src', _assets_heart_png__WEBPACK_IMPORTED_MODULE_12__);
    healthBar.appendChild(singleHeart);
  }
}

updateHealthBar();

const createLoop = (scene, count, texture, scrollFactor) => {
  let x = 0;
  for (let i = 0; i < count; ++i) {
    const m = scene.add.image(x, 337.5, texture).setScrollFactor(scrollFactor);
    x += m.width;
  }
}

const createGround = (start, height, texture, scale, count) => {
  let x = 0;
  for (let i = 0; i < count; ++i) {
    const m = platforms.create(start + x, height, texture).setScale(scale).refreshBody();
    x += m.width;
  }
}

const activateSuperJump = (player, jumpItem) => {
  superJump = true;
  setTimeout(function(){ superJump = false; }, 8000);
  jumpItem.disableBody(true, true);
}

const activateInvincibility = (time) => {
  invincible = true;
  setTimeout(function(){ invincible = false; }, time);
}

const looseHeart = () => {
  if (invincible === false) {
    activateInvincibility(3000);
    hearts = hearts - 1;
    updateHealthBar();
  }
}

const addHeart = (player, heartItem) => {
  hearts = hearts + 1;
  updateHealthBar();
  heartItem.disableBody(true, true);
}

const activateInvincibilityItem = (player, starItem) => {
  activateInvincibility(8000);
  starItem.disableBody(true, true);
}

const resetBullet = (bullet) => {
	bullet.kill();
}

// class newBulletObj extends Phaser.GameObjects.Image {
//   constructor (scene, x, y) {
//     super(scene, x, y, 'bullet');
//   }
// }

// const fireBullet = (scene) => {
//   console.log('bla0');
//   var newBulletObj = new newBulletObj(scene, player.x, player.y);
//   console.log('bla1');
//   bullets.add(newBulletObj);
//   console.log('bla2');
//   newBulletObj.body.velocity.x = 400;
// }












function collectStar (player, star)
{
  star.disableBody(true, true);

  //  Add and update the score
  score += 10;
  scoreText.setText('Score: ' + score);

  if (stars.countActive(true) === 0)
  {
      //  A new batch of stars to collect
      stars.children.iterate(function (child) {

          child.enableBody(true, child.x, 0, true, true);

      });

      var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

      var bomb = bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
      bomb.allowGravity = false;

  }
}

function hitBomb (player, bomb)
{
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play('turn');

  gameOver = true;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGFzZXItZ2FtZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGhhc2VyLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BoYXNlci1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcGhhc2VyLWdhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGhhc2VyLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGhhc2VyLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhhc2VyLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGhhc2VyLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BoYXNlci1nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGhhc2VyLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waGFzZXItZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BoYXNlci1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BoYXNlci1nYW1lLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxn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QUFJQSx5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQSxvQ0FBb0MsK0NBQUs7QUFDekM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsV0FBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUIsRUFBRTtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CLEVBQUU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiBtYXJnaW46IDAgYXV0bztcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jaGVhbHRoLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDYwcHg7XFxuICBsZWZ0OiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hlYWx0aC1iYXIgaSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogcmVkO1xcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiBtYXJnaW46IDAgYXV0bztcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jaGVhbHRoLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDYwcHg7XFxuICBsZWZ0OiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hlYWx0aC1iYXIgaSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogcmVkO1xcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBza3kgZnJvbSAnLi9hc3NldHMvc2t5LnBuZyc7XG5pbXBvcnQgc3RvbmVzIGZyb20gJy4vYXNzZXRzL3N0b25lcy5wbmcnO1xuaW1wb3J0IHRyZWVzMSBmcm9tICcuL2Fzc2V0cy90cmVlczEucG5nJztcbmltcG9ydCB0cmVlczIgZnJvbSAnLi9hc3NldHMvdHJlZXMyLnBuZyc7XG5pbXBvcnQgdHJlZXMzIGZyb20gJy4vYXNzZXRzL3RyZWVzMy5wbmcnO1xuaW1wb3J0IHRyZWVzNCBmcm9tICcuL2Fzc2V0cy90cmVlczQucG5nJztcbmltcG9ydCBnbG93d29ybTEgZnJvbSAnLi9hc3NldHMvZ2xvd3dvcm0xLnBuZyc7XG5pbXBvcnQgZ2xvd3dvcm0yIGZyb20gJy4vYXNzZXRzL2dsb3d3b3JtMi5wbmcnO1xuaW1wb3J0IGdsb3d3b3JtMyBmcm9tICcuL2Fzc2V0cy9nbG93d29ybTMucG5nJztcbmltcG9ydCBnbG93d29ybTQgZnJvbSAnLi9hc3NldHMvZ2xvd3dvcm00LnBuZyc7XG5pbXBvcnQgZ3JvdW5kIGZyb20gJy4vYXNzZXRzL2dyb3VuZC5wbmcnO1xuaW1wb3J0IGhlYXJ0IGZyb20gJy4vYXNzZXRzL2hlYXJ0LnBuZyc7XG5pbXBvcnQgYnVsbGV0IGZyb20gJy4vYXNzZXRzL2J1bGxldC5wbmcnO1xuaW1wb3J0IGp1bXBJdGVtIGZyb20gJy4vYXNzZXRzL2p1bXBJdGVtLnBuZyc7XG5pbXBvcnQgaGVhcnRJdGVtIGZyb20gJy4vYXNzZXRzL2hlYXJ0SXRlbS5wbmcnO1xuaW1wb3J0IHN0YXJJdGVtIGZyb20gJy4vYXNzZXRzL3N0YXJJdGVtLnBuZyc7XG5cblxuaW1wb3J0IGtuaWdodFN0YW5kaW5nIGZyb20gJy4vYXNzZXRzL2tuaWdodFN0YW5kaW5nLnBuZyc7XG5pbXBvcnQga25pZ2h0UnVubmluZ1JpZ2h0IGZyb20gJy4vYXNzZXRzL2tuaWdodFJ1bm5pbmdSaWdodC5wbmcnO1xuaW1wb3J0IGtuaWdodFJ1bm5pbmdMZWZ0IGZyb20gJy4vYXNzZXRzL2tuaWdodFJ1bm5pbmdMZWZ0LnBuZyc7XG5pbXBvcnQga25pZ2h0QXR0YWNraW5nUmlnaHQgZnJvbSAnLi9hc3NldHMva25pZ2h0QXR0YWNraW5nUmlnaHQucG5nJztcbmltcG9ydCB3b2xmU3RhbmRpbmcgZnJvbSAnLi9hc3NldHMvd29sZlN0YW5kaW5nLnBuZyc7XG5pbXBvcnQgd29sZlJ1bm5pbmdSaWdodCBmcm9tICcuL2Fzc2V0cy93b2xmUnVubmluZ1JpZ2h0LnBuZyc7XG5pbXBvcnQgd29sZlJ1bm5pbmdMZWZ0IGZyb20gJy4vYXNzZXRzL3dvbGZSdW5uaW5nTGVmdC5wbmcnO1xuXG5pbXBvcnQgZHVkZSBmcm9tICcuL2Fzc2V0cy9kdWRlLnBuZyc7XG5pbXBvcnQgYm9tYiBmcm9tICcuL2Fzc2V0cy9ib21iLnBuZyc7XG5pbXBvcnQgc3RhciBmcm9tICcuL2Fzc2V0cy9zdGFyLnBuZyc7XG5cbnZhciBjb25maWcgPSB7XG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICB3aWR0aDogMTIwMCxcbiAgaGVpZ2h0OiA2NzUsXG4gIHBoeXNpY3M6IHtcbiAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgICAgYXJjYWRlOiB7XG4gICAgICAgICAgZ3Jhdml0eTogeyB5OiAzMDAgfSxcbiAgICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgIH1cbiAgfSxcbiAgc2NlbmU6IFtcbiAgICBTY2VuZU1haW5NZW51LFxuICAgIFNjZW5lTWFpbixcbiAgICBTY2VuZUdhbWVPdmVyXG4gIF0sXG4gIHBpeGVsQXJ0OiB0cnVlLFxuICByb3VuZFBpeGVsczogdHJ1ZVxufTtcblxudmFyIHBsYXllcjtcbnZhciB3b2x2ZXM7XG52YXIganVtcEl0ZW1zO1xudmFyIGhlYXJ0SXRlbXM7XG52YXIgc3Rhckl0ZW1zO1xudmFyIGJ1bGxldHM7XG52YXIgcGxhdGZvcm1zO1xudmFyIGN1cnNvcnM7XG52YXIgc3BhY2VLZXlcbnZhciBzY29yZSA9IDA7XG52YXIgZ2FtZU92ZXIgPSBmYWxzZTtcbnZhciBzY29yZVRleHQ7XG5sZXQgaW52aW5jaWJsZSA9IGZhbHNlO1xubGV0IHN1cGVySnVtcCA9IGZhbHNlO1xudmFyIHN0YXJzO1xudmFyIGJvbWJzO1xuXG52YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xuXG5jbGFzcyBTY2VuZU1haW5NZW51IGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoeyBrZXk6IFwiU2NlbmVNYWluTWVudVwiIH0pO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJTY2VuZU1haW5cIik7XG4gIH1cbn1cblxuY2xhc3MgU2NlbmVNYWluIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoeyBrZXk6IFwiU2NlbmVNYWluXCIgfSk7XG4gIH1cblxuICBwcmVsb2FkICgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NreScsIHNreSk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdzdG9uZXMnLCBzdG9uZXMpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgndHJlZXMxJywgdHJlZXMxKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RyZWVzMicsIHRyZWVzMik7XG4gICAgdGhpcy5sb2FkLmltYWdlKCd0cmVlczMnLCB0cmVlczMpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgndHJlZXM0JywgdHJlZXM0KTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dsb3d3b3JtMScsIGdsb3d3b3JtMSk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdnbG93d29ybTInLCBnbG93d29ybTIpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZ2xvd3dvcm0zJywgZ2xvd3dvcm0zKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dsb3d3b3JtNCcsIGdsb3d3b3JtNCk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdncm91bmQnLCBncm91bmQpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnanVtcEl0ZW0nLCBqdW1wSXRlbSk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdoZWFydEl0ZW0nLCBoZWFydEl0ZW0pO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnc3Rhckl0ZW0nLCBzdGFySXRlbSk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCBidWxsZXQpO1xuXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdkdWRlJywgZHVkZSwgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDQ4IH0pO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgna25pZ2h0U3RhbmRpbmcnLCBrbmlnaHRTdGFuZGluZywgeyBmcmFtZVdpZHRoOiAxMjgsIGZyYW1lSGVpZ2h0OiA5MCB9KTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2tuaWdodFJ1bm5pbmdSaWdodCcsIGtuaWdodFJ1bm5pbmdSaWdodCwgeyBmcmFtZVdpZHRoOiAxOTIsIGZyYW1lSGVpZ2h0OiA5MCB9KTtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2tuaWdodFJ1bm5pbmdMZWZ0Jywga25pZ2h0UnVubmluZ0xlZnQsIHsgZnJhbWVXaWR0aDogMTkyLCBmcmFtZUhlaWdodDogOTAgfSk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdrbmlnaHRBdHRhY2tpbmdSaWdodCcsIGtuaWdodEF0dGFja2luZ1JpZ2h0LCB7IGZyYW1lV2lkdGg6IDI4OCwgZnJhbWVIZWlnaHQ6IDkwIH0pO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnd29sZlN0YW5kaW5nJywgd29sZlN0YW5kaW5nLCB7IGZyYW1lV2lkdGg6IDEyOCwgZnJhbWVIZWlnaHQ6IDkwIH0pO1xuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnd29sZlJ1bm5pbmdSaWdodCcsIHdvbGZSdW5uaW5nUmlnaHQsIHsgZnJhbWVXaWR0aDogMTI4LCBmcmFtZUhlaWdodDogOTAgfSk7XG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd3b2xmUnVubmluZ0xlZnQnLCB3b2xmUnVubmluZ0xlZnQsIHsgZnJhbWVXaWR0aDogMTI4LCBmcmFtZUhlaWdodDogOTAgfSk7XG5cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3N0YXInLCBzdGFyKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvbWInLCBib21iKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2hlYXJ0JywgaGVhcnQpO1xuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICAvLyAgQSBzaW1wbGUgYmFja2dyb3VuZCBmb3Igb3VyIGdhbWVcbiAgICB0aGlzLmFkZC5pbWFnZSg2MDAsIDMzNy41LCAnc2t5Jykuc2V0U2Nyb2xsRmFjdG9yKDApO1xuICAgIGNyZWF0ZUxvb3AodGhpcywgNCwgJ3RyZWVzNCcsIDAuMik7XG4gICAgY3JlYXRlTG9vcCh0aGlzLCA0LCAndHJlZXMyJywgMC40KTtcbiAgICBjcmVhdGVMb29wKHRoaXMsIDQsICd0cmVlczEnLCAwLjYpO1xuICAgIGNyZWF0ZUxvb3AodGhpcywgNCwgJ3RyZWVzMycsIDAuOCk7XG4gICAgY3JlYXRlTG9vcCh0aGlzLCA0LCAnc3RvbmVzJywgMSk7XG4gICAgY3JlYXRlTG9vcCh0aGlzLCA0LCAnZ2xvd3dvcm00JywgMSk7XG4gICAgY3JlYXRlTG9vcCh0aGlzLCA0LCAnZ2xvd3dvcm0xJywgMS4yNSk7XG4gICAgY3JlYXRlTG9vcCh0aGlzLCA0LCAnZ2xvd3dvcm0yJywgMS4yNSk7XG4gICAgY3JlYXRlTG9vcCh0aGlzLCA0LCAnZ2xvd3dvcm0zJywgMS4yNSk7XG4gIFxuICBcbiAgICAvLyAgVGhlIHBsYXRmb3JtcyBncm91cCBjb250YWlucyB0aGUgZ3JvdW5kIGFuZCB0aGUgMiBsZWRnZXMgd2UgY2FuIGp1bXAgb25cbiAgICBwbGF0Zm9ybXMgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG4gIFxuICAgIC8vICBIZXJlIHdlIGNyZWF0ZSB0aGUgZ3JvdW5kLlxuICAgIC8vICBTY2FsZSBpdCB0byBmaXQgdGhlIHdpZHRoIG9mIHRoZSBnYW1lICh0aGUgb3JpZ2luYWwgc3ByaXRlIGlzIDQwMHgzMiBpbiBzaXplKVxuICAgIC8vIHBsYXRmb3Jtcy5jcmVhdGUoMzIsIDY3MCwgJ2dyb3VuZCcpLnNldFNjYWxlKDEuNSkucmVmcmVzaEJvZHkoKTtcbiAgICAvLyBwbGF0Zm9ybXMuY3JlYXRlKDk2LCA2NzAsICdncm91bmQnKS5zZXRTY2FsZSgxLjUpLnJlZnJlc2hCb2R5KCk7XG4gICAgY3JlYXRlR3JvdW5kKDMyLCA2NzAsICdncm91bmQnLCAxLjUsIDE1KTtcbiAgXG4gICAgLy8gIE5vdyBsZXQncyBjcmVhdGUgc29tZSBsZWRnZXNcbiAgICAvLyAgcGxhdGZvcm1zLmNyZWF0ZSg2MDAsIDQwMCwgJ2dyb3VuZCcpO1xuICAgIC8vICBwbGF0Zm9ybXMuY3JlYXRlKDUwLCAyNTAsICdncm91bmQnKTtcbiAgICAvLyAgcGxhdGZvcm1zLmNyZWF0ZSg3NTAsIDIyMCwgJ2dyb3VuZCcpO1xuICBcbiAgICAvLyBUaGUgcGxheWVyIGFuZCBpdHMgc2V0dGluZ3NcbiAgICBwbGF5ZXIgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSgxMDAsIDQ1MCwgJ2tuaWdodFN0YW5kaW5nJyk7XG4gIFxuICAgIC8vICBQbGF5ZXIgcGh5c2ljcyBwcm9wZXJ0aWVzLiBHaXZlIHRoZSBsaXR0bGUgZ3V5IGEgc2xpZ2h0IGJvdW5jZS5cbiAgICBwbGF5ZXIuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuICAgIHBsYXllci5zZXRHcmF2aXR5WSgyMDApO1xuICBcbiAgICAvLyAgT3VyIHBsYXllciBhbmltYXRpb25zLCB0dXJuaW5nLCB3YWxraW5nIGxlZnQgYW5kIHdhbGtpbmcgcmlnaHQuXG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdsZWZ0JyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdrbmlnaHRSdW5uaW5nTGVmdCcsIHsgc3RhcnQ6IDAsIGVuZDogNyB9KSxcbiAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgcmVwZWF0OiAtMVxuICAgIH0pO1xuICBcbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ3R1cm4nLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2tuaWdodFN0YW5kaW5nJywgeyBzdGFydDogMCwgZW5kOiAxNCB9KSxcbiAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgcmVwZWF0OiAtMVxuICAgIH0pO1xuICBcbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ3JpZ2h0JyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdrbmlnaHRSdW5uaW5nUmlnaHQnLCB7IHN0YXJ0OiAwLCBlbmQ6IDcgfSksXG4gICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgIHJlcGVhdDogLTFcbiAgICB9KTtcbiAgXG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnYXR0YWNrUmlnaHQnLFxuICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdrbmlnaHRBdHRhY2tpbmdSaWdodCcsIHsgc3RhcnQ6IDAsIGVuZDogMjEgfSksXG4gICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgcmVwZWF0OiAtMVxuICAgIH0pOyAgXG4gIFxuICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGtleTogJ3dvbGZSaWdodCcsXG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3dvbGZSdW5uaW5nUmlnaHQnLCB7IHN0YXJ0OiAwLCBlbmQ6IDcgfSksXG4gICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgcmVwZWF0OiAtMVxuICAgIH0pO1xuICBcbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBrZXk6ICd3b2xmTGVmdCcsXG4gICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3dvbGZSdW5uaW5nTGVmdCcsIHsgc3RhcnQ6IDAsIGVuZDogNyB9KSxcbiAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICByZXBlYXQ6IC0xXG4gICAgfSk7XG4gIFxuICAgIC8vICBJbnB1dCBFdmVudHNcbiAgICBjdXJzb3JzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgc3BhY2VLZXkgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0UpO1xuICBcbiAgICAvLyAgV09MVkVTXG4gICAgd29sdmVzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7XG4gICAgICBrZXk6ICd3b2xmU3RhbmRpbmcnLFxuICAgICAgc2V0WFk6IHsgeDogNzAwLCB5OiAwIH1cbiAgICB9KVxuICAgIHdvbHZlcy5zZXRWZWxvY2l0eVgoMCk7XG4gIFxuICAgIC8vICBKVU1QIElURU1cbiAgICBqdW1wSXRlbXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcbiAgICAgIGtleTogJ2p1bXBJdGVtJyxcbiAgICAgIHNldFhZOiB7IHg6IDUwMCwgeTogMH1cbiAgICB9KTsgIFxuICBcbiAgICAvLyAgSEVBUlQgSVRFTVxuICAgIGhlYXJ0SXRlbXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcbiAgICAgIGtleTogJ2hlYXJ0SXRlbScsXG4gICAgICBzZXRYWTogeyB4OiA0MDAsIHk6IDB9XG4gICAgfSk7XG4gIFxuICAgIC8vICBTVEFSIElURU1cbiAgICBzdGFySXRlbXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcbiAgICAgIGtleTogJ3N0YXJJdGVtJyxcbiAgICAgIHNldFhZOiB7IHg6IDYwMCwgeTogMH1cbiAgICB9KTsgIFxuICBcbiAgICAvLyAgQlVMTEVUIFxuICAgIGJ1bGxldHMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XG4gICAgLy8gYnVsbGV0cy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgXG4gICAgYnVsbGV0cy5jcmVhdGVNdWx0aXBsZSgyMCwgJ2J1bGxldCcpO1xuICBcbiAgICAvLyBidWxsZXRzLmNhbGxBbGwoJ2V2ZW50cy5vbk91dE9mQm91bmRzLmFkZCcsICdldmVudHMub25PdXRPZkJvdW5kcycsIHJlc2V0QnVsbGV0KTtcbiAgICAvLyBidWxsZXRzLmNhbGxBbGwoJ2FuY2hvci5zZXRUbycsICdhbmNob3InLCAwLjUsIDEuMCk7XG4gICBcbiAgICAvLyBidWxsZXRzLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsIHRydWUpO1xuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gICAgLy8gIFNvbWUgc3RhcnMgdG8gY29sbGVjdCwgMTIgaW4gdG90YWwsIGV2ZW5seSBzcGFjZWQgNzAgcGl4ZWxzIGFwYXJ0IGFsb25nIHRoZSB4IGF4aXNcbiAgICBzdGFycyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe1xuICAgICAgICBrZXk6ICdzdGFyJyxcbiAgICAgICAgcmVwZWF0OiAyLFxuICAgICAgICBzZXRYWTogeyB4OiAxMiwgeTogMCwgc3RlcFg6IDcwIH1cbiAgICB9KTtcbiAgXG4gICAgc3RhcnMuY2hpbGRyZW4uaXRlcmF0ZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgXG4gICAgICAgIC8vICBHaXZlIGVhY2ggc3RhciBhIHNsaWdodGx5IGRpZmZlcmVudCBib3VuY2VcbiAgICAgICAgY2hpbGQuc2V0Qm91bmNlWShQaGFzZXIuTWF0aC5GbG9hdEJldHdlZW4oMC40LCAwLjgpKTtcbiAgXG4gICAgfSk7XG4gIFxuICAgIGJvbWJzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCgpO1xuICBcbiAgICAvLyAgVGhlIHNjb3JlXG4gICAgc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dCgxNiwgMTYsICdzY29yZTogMCcsIHsgZm9udFNpemU6ICczMnB4JywgZmlsbDogJyNmZmYnIH0pO1xuICBcbiAgICAvLyAgQ29sbGlkZSB0aGUgcGxheWVyIGFuZCB0aGUgc3RhcnMgd2l0aCB0aGUgcGxhdGZvcm1zXG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihwbGF5ZXIsIHBsYXRmb3Jtcyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih3b2x2ZXMsIHBsYXRmb3Jtcyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihqdW1wSXRlbXMsIHBsYXRmb3Jtcyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihoZWFydEl0ZW1zLCBwbGF0Zm9ybXMpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoc3Rhckl0ZW1zLCBwbGF0Zm9ybXMpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoc3RhcnMsIHBsYXRmb3Jtcyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihib21icywgcGxhdGZvcm1zKTtcbiAgXG4gICAgLy8gIENoZWNrcyB0byBzZWUgaWYgdGhlIHBsYXllciBvdmVybGFwcyB3aXRoIGFueSBvZiB0aGUgc3RhcnMsIGlmIGhlIGRvZXMgY2FsbCB0aGUgY29sbGVjdFN0YXIgZnVuY3Rpb25cbiAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAocGxheWVyLCBzdGFycywgY29sbGVjdFN0YXIsIG51bGwsIHRoaXMpO1xuICBcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHBsYXllciwgYm9tYnMsIGhpdEJvbWIsIG51bGwsIHRoaXMpO1xuICBcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHBsYXllciwganVtcEl0ZW1zLCBhY3RpdmF0ZVN1cGVySnVtcCwgbnVsbCwgdGhpcyk7XG4gIFxuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIocGxheWVyLCBoZWFydEl0ZW1zLCBhZGRIZWFydCwgbnVsbCwgdGhpcyk7XG4gIFxuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIocGxheWVyLCBzdGFySXRlbXMsIGFjdGl2YXRlSW52aW5jaWJpbGl0eUl0ZW0sIG51bGwsIHRoaXMpO1xuICBcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHBsYXllciwgd29sdmVzLCBsb29zZUhlYXJ0LCBudWxsLCB0aGlzKTtcbiAgXG4gICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Qm91bmRzKDAsIDAsIDMwMDApO1xuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCBjYW0gPSB0aGlzLmNhbWVyYXMubWFpbjtcbiAgXG4gICAgaWYgKGdhbWVPdmVyKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgLy8gaWYgKHBsYXllci5ib2R5LnZlbG9jaXR5LnggPT09IDApIHtcbiAgICAvLyAgIHBsYXllci5hbmltcy5wbGF5KCd0dXJuJyk7XG4gICAgLy8gfVxuICBcbiAgICBpZiAoY3Vyc29ycy5sZWZ0LmlzRG93bilcbiAgICB7ICBcbiAgICAgICAgcGxheWVyLnNldFZlbG9jaXR5WCgtMTYwKTtcbiAgICAgICAgcGxheWVyLmFuaW1zLnBsYXkoJ2xlZnQnLCB0cnVlKTtcbiAgXG4gICAgICAgIGNhbS5zY3JvbGxYIC09IDI7XG4gICAgfVxuICBcbiAgICBlbHNlIGlmIChjdXJzb3JzLnJpZ2h0LmlzRG93bilcbiAgICB7XG4gICAgICAgIHBsYXllci5zZXRWZWxvY2l0eVgoMTYwKTtcbiAgICAgICAgcGxheWVyLmFuaW1zLnBsYXkoJ3JpZ2h0JywgdHJ1ZSk7XG4gIFxuICAgICAgICBjYW0uc2Nyb2xsWCArPSAyO1xuICAgIH1cbiAgXG4gICAgZWxzZVxuICAgIHsgICAgICBcbiAgICAgIHBsYXllci5zZXRWZWxvY2l0eVgoMCk7XG4gICAgICBwbGF5ZXIuYW5pbXMucGxheSgndHVybicpO1xuICAgIH1cbiAgXG4gICAgaWYgKHNwYWNlS2V5LmlzRG93bikgeyAgXG4gICAgICBwbGF5ZXIuYW5pbXMucGxheSgncmlnaHQnLCBmYWxzZSk7XG4gICAgICAvL2ZpcmVCdWxsZXQodGhpcyk7ICAgIFxuICAgIH1cbiAgXG4gIFxuICBcbiAgICBpZiAoY3Vyc29ycy51cC5pc0Rvd24gJiYgcGxheWVyLmJvZHkudG91Y2hpbmcuZG93bikgeyBcbiAgICAgIGlmIChzdXBlckp1bXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHBsYXllci5zZXRWZWxvY2l0eVkoLTI3MCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzdXBlckp1bXAgPT09IHRydWUpIHtcbiAgICAgICAgcGxheWVyLnNldFZlbG9jaXR5WSgtNDcwKTsgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHdvbHZlcy5jaGlsZHJlbi5pdGVyYXRlKGZ1bmN0aW9uICh3b2xmKSB7XG4gICAgICBpZiAod29sZi5ib2R5LnZlbG9jaXR5LnggPiAwKSB7XG4gICAgICAgIHdvbGYuYW5pbXMucGxheSgnd29sZlJpZ2h0JywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAod29sZi5ib2R5LnZlbG9jaXR5LnggPCAwKSB7XG4gICAgICAgIHdvbGYuYW5pbXMucGxheSgnd29sZkxlZnQnLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jbGFzcyBTY2VuZUdhbWVPdmVyIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoeyBrZXk6IFwiU2NlbmVHYW1lT3ZlclwiIH0pO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIFxuICB9XG59XG5cbmxldCBoZWFydHMgPSAzO1xuY29uc3QgaGVhbHRoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWx0aC1iYXInKTtcbmNvbnN0IHVwZGF0ZUhlYWx0aEJhciA9ICgpID0+IHtcbiAgaGVhbHRoQmFyLmlubmVySFRNTCA9ICcnXG4gIGZvciAobGV0IGk9MDsgaSA8IGhlYXJ0czsgaSsrKSB7XG4gICAgY29uc3Qgc2luZ2xlSGVhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzaW5nbGVIZWFydC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhlYXJ0KTtcbiAgICBoZWFsdGhCYXIuYXBwZW5kQ2hpbGQoc2luZ2xlSGVhcnQpO1xuICB9XG59XG5cbnVwZGF0ZUhlYWx0aEJhcigpO1xuXG5jb25zdCBjcmVhdGVMb29wID0gKHNjZW5lLCBjb3VudCwgdGV4dHVyZSwgc2Nyb2xsRmFjdG9yKSA9PiB7XG4gIGxldCB4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgY29uc3QgbSA9IHNjZW5lLmFkZC5pbWFnZSh4LCAzMzcuNSwgdGV4dHVyZSkuc2V0U2Nyb2xsRmFjdG9yKHNjcm9sbEZhY3Rvcik7XG4gICAgeCArPSBtLndpZHRoO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUdyb3VuZCA9IChzdGFydCwgaGVpZ2h0LCB0ZXh0dXJlLCBzY2FsZSwgY291bnQpID0+IHtcbiAgbGV0IHggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICBjb25zdCBtID0gcGxhdGZvcm1zLmNyZWF0ZShzdGFydCArIHgsIGhlaWdodCwgdGV4dHVyZSkuc2V0U2NhbGUoc2NhbGUpLnJlZnJlc2hCb2R5KCk7XG4gICAgeCArPSBtLndpZHRoO1xuICB9XG59XG5cbmNvbnN0IGFjdGl2YXRlU3VwZXJKdW1wID0gKHBsYXllciwganVtcEl0ZW0pID0+IHtcbiAgc3VwZXJKdW1wID0gdHJ1ZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpeyBzdXBlckp1bXAgPSBmYWxzZTsgfSwgODAwMCk7XG4gIGp1bXBJdGVtLmRpc2FibGVCb2R5KHRydWUsIHRydWUpO1xufVxuXG5jb25zdCBhY3RpdmF0ZUludmluY2liaWxpdHkgPSAodGltZSkgPT4ge1xuICBpbnZpbmNpYmxlID0gdHJ1ZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpeyBpbnZpbmNpYmxlID0gZmFsc2U7IH0sIHRpbWUpO1xufVxuXG5jb25zdCBsb29zZUhlYXJ0ID0gKCkgPT4ge1xuICBpZiAoaW52aW5jaWJsZSA9PT0gZmFsc2UpIHtcbiAgICBhY3RpdmF0ZUludmluY2liaWxpdHkoMzAwMCk7XG4gICAgaGVhcnRzID0gaGVhcnRzIC0gMTtcbiAgICB1cGRhdGVIZWFsdGhCYXIoKTtcbiAgfVxufVxuXG5jb25zdCBhZGRIZWFydCA9IChwbGF5ZXIsIGhlYXJ0SXRlbSkgPT4ge1xuICBoZWFydHMgPSBoZWFydHMgKyAxO1xuICB1cGRhdGVIZWFsdGhCYXIoKTtcbiAgaGVhcnRJdGVtLmRpc2FibGVCb2R5KHRydWUsIHRydWUpO1xufVxuXG5jb25zdCBhY3RpdmF0ZUludmluY2liaWxpdHlJdGVtID0gKHBsYXllciwgc3Rhckl0ZW0pID0+IHtcbiAgYWN0aXZhdGVJbnZpbmNpYmlsaXR5KDgwMDApO1xuICBzdGFySXRlbS5kaXNhYmxlQm9keSh0cnVlLCB0cnVlKTtcbn1cblxuY29uc3QgcmVzZXRCdWxsZXQgPSAoYnVsbGV0KSA9PiB7XG5cdGJ1bGxldC5raWxsKCk7XG59XG5cbi8vIGNsYXNzIG5ld0J1bGxldE9iaiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XG4vLyAgIGNvbnN0cnVjdG9yIChzY2VuZSwgeCwgeSkge1xuLy8gICAgIHN1cGVyKHNjZW5lLCB4LCB5LCAnYnVsbGV0Jyk7XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgZmlyZUJ1bGxldCA9IChzY2VuZSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnYmxhMCcpO1xuLy8gICB2YXIgbmV3QnVsbGV0T2JqID0gbmV3IG5ld0J1bGxldE9iaihzY2VuZSwgcGxheWVyLngsIHBsYXllci55KTtcbi8vICAgY29uc29sZS5sb2coJ2JsYTEnKTtcbi8vICAgYnVsbGV0cy5hZGQobmV3QnVsbGV0T2JqKTtcbi8vICAgY29uc29sZS5sb2coJ2JsYTInKTtcbi8vICAgbmV3QnVsbGV0T2JqLmJvZHkudmVsb2NpdHkueCA9IDQwMDtcbi8vIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGNvbGxlY3RTdGFyIChwbGF5ZXIsIHN0YXIpXG57XG4gIHN0YXIuZGlzYWJsZUJvZHkodHJ1ZSwgdHJ1ZSk7XG5cbiAgLy8gIEFkZCBhbmQgdXBkYXRlIHRoZSBzY29yZVxuICBzY29yZSArPSAxMDtcbiAgc2NvcmVUZXh0LnNldFRleHQoJ1Njb3JlOiAnICsgc2NvcmUpO1xuXG4gIGlmIChzdGFycy5jb3VudEFjdGl2ZSh0cnVlKSA9PT0gMClcbiAge1xuICAgICAgLy8gIEEgbmV3IGJhdGNoIG9mIHN0YXJzIHRvIGNvbGxlY3RcbiAgICAgIHN0YXJzLmNoaWxkcmVuLml0ZXJhdGUoZnVuY3Rpb24gKGNoaWxkKSB7XG5cbiAgICAgICAgICBjaGlsZC5lbmFibGVCb2R5KHRydWUsIGNoaWxkLngsIDAsIHRydWUsIHRydWUpO1xuXG4gICAgICB9KTtcblxuICAgICAgdmFyIHggPSAocGxheWVyLnggPCA0MDApID8gUGhhc2VyLk1hdGguQmV0d2Vlbig0MDAsIDgwMCkgOiBQaGFzZXIuTWF0aC5CZXR3ZWVuKDAsIDQwMCk7XG5cbiAgICAgIHZhciBib21iID0gYm9tYnMuY3JlYXRlKHgsIDE2LCAnYm9tYicpO1xuICAgICAgYm9tYi5zZXRCb3VuY2UoMSk7XG4gICAgICBib21iLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcbiAgICAgIGJvbWIuc2V0VmVsb2NpdHkoUGhhc2VyLk1hdGguQmV0d2VlbigtMjAwLCAyMDApLCAyMCk7XG4gICAgICBib21iLmFsbG93R3Jhdml0eSA9IGZhbHNlO1xuXG4gIH1cbn1cblxuZnVuY3Rpb24gaGl0Qm9tYiAocGxheWVyLCBib21iKVxue1xuICB0aGlzLnBoeXNpY3MucGF1c2UoKTtcblxuICBwbGF5ZXIuc2V0VGludCgweGZmMDAwMCk7XG5cbiAgcGxheWVyLmFuaW1zLnBsYXkoJ3R1cm4nKTtcblxuICBnYW1lT3ZlciA9IHRydWU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9