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
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(156, 137, 84);\n}\n\n#bg-blur {\n  overflow: hidden;\n  height: 110%;\n  width: 110%;\n  position: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 110% 110%;\n  filter: blur(8px) brightness(80%);\n}\n\nsection {\n  position: fixed;\n  justify-self: center;\n  min-width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  filter: blur(0) brightness(100%);\n}\n\n#box {\n  background-color: rgb(218, 191, 118);\n  position: absolute;\n  top: 8vh;\n  padding: 20px;\n  border-radius: 4px;\n  max-width: 80vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 8px;\n}\n\n#div-city > * {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.day-name > *,\n.day-name {\n  font-size: 18px;\n}\n\n#forecast {\n  display: grid;\n  grid-template-rows: 1fr 8px 1fr;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n#future {\n  grid-row: 3;\n  grid-column: 1 / 6;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  overflow: auto;\n}\n\n#divider {\n  grid-row: 2;\n  grid-column: 1 / 6;\n  background-color: rgb(180, 159, 100);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.day {\n  text-align: center;\n  background-color: rgb(180, 159, 100);\n  border-radius: 4px;\n  padding-top: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n@media screen and (width < 420px) {\n  #today {\n    grid-column: 1 / 6;\n  }\n}\n\n@media screen and (420px <= width <= 720px) {\n  #today {\n    grid-column: 2 / 5;\n  }\n}\n\n@media screen and (width > 720px) {\n  #today {\n    grid-column: 2 / 5;\n    margin-right: 32px;\n    margin-left: 32px;\n  }\n}\n\n#today {\n  background-color: rgb(143, 180, 100);\n  font-size: 18px;\n}\n\n.autocomplete {\n  position: relative;\n  display: inline-block;\n}\n\n#city-form {\n  max-width: 80%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: stretch;\n  gap: 8px;\n}\n\n.day-name {\n  font-weight: bold;\n}\n\ninput[type=\"submit\"] {\n  background-color: #f8f9fa;\n  color: #3c4043;\n  font-family: sans-serif;\n  font-size: 16px;\n  padding: 0 12px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: #eaecee;\n}\n\ninput {\n  border: none;\n  background-color: #f1f1f1;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 4px;\n}\n\ninput[type=\"text\"] {\n  min-width: 8em;\n  background-color: #f1f1f1;\n  width: 100%;\n}\n\n.autocomplete-item {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 99;\n  top: 100%;\n  left: 0;\n  right: 0;\n  display: grid;\n  grid-template-rows: auto;\n  overflow: auto;\n  max-height: 24vh;\n}\n\n.autocomplete-item div {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n}\n\n.autocomplete-item div:hover {\n  background-color: #e9e9e9;\n}\n\n.autocomplete-active {\n  background-color: rgb(114, 114, 114) !important;\n  color: #ffffff;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,4DAA4D;EAC5D,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,2BAA2B;EAC3B,4BAA4B;EAC5B,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,4BAA4B;EAC5B,0BAA0B;EAC1B,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,kBAAkB;EAClB,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,qCAAqC;EACrC,QAAQ;EACR,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;EACnB;AACF;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,oBAAoB;EACpB,QAAQ;AACV;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,wBAAwB;EACxB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,+CAA+C;EAC/C,cAAc;AAChB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(156, 137, 84);\n}\n\n#bg-blur {\n  overflow: hidden;\n  height: 110%;\n  width: 110%;\n  position: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 110% 110%;\n  filter: blur(8px) brightness(80%);\n}\n\nsection {\n  position: fixed;\n  justify-self: center;\n  min-width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  filter: blur(0) brightness(100%);\n}\n\n#box {\n  background-color: rgb(218, 191, 118);\n  position: absolute;\n  top: 8vh;\n  padding: 20px;\n  border-radius: 4px;\n  max-width: 80vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 8px;\n}\n\n#div-city > * {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.day-name > *,\n.day-name {\n  font-size: 18px;\n}\n\n#forecast {\n  display: grid;\n  grid-template-rows: 1fr 8px 1fr;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n#future {\n  grid-row: 3;\n  grid-column: 1 / 6;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  overflow: auto;\n}\n\n#divider {\n  grid-row: 2;\n  grid-column: 1 / 6;\n  background-color: rgb(180, 159, 100);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.day {\n  text-align: center;\n  background-color: rgb(180, 159, 100);\n  border-radius: 4px;\n  padding-top: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n@media screen and (width < 420px) {\n  #today {\n    grid-column: 1 / 6;\n  }\n}\n\n@media screen and (420px <= width <= 720px) {\n  #today {\n    grid-column: 2 / 5;\n  }\n}\n\n@media screen and (width > 720px) {\n  #today {\n    grid-column: 2 / 5;\n    margin-right: 32px;\n    margin-left: 32px;\n  }\n}\n\n#today {\n  background-color: rgb(143, 180, 100);\n  font-size: 18px;\n}\n\n.autocomplete {\n  position: relative;\n  display: inline-block;\n}\n\n#city-form {\n  max-width: 80%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: stretch;\n  gap: 8px;\n}\n\n.day-name {\n  font-weight: bold;\n}\n\ninput[type=\"submit\"] {\n  background-color: #f8f9fa;\n  color: #3c4043;\n  font-family: sans-serif;\n  font-size: 16px;\n  padding: 0 12px;\n  text-align: center;\n  cursor: pointer;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: #eaecee;\n}\n\ninput {\n  border: none;\n  background-color: #f1f1f1;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 4px;\n}\n\ninput[type=\"text\"] {\n  min-width: 8em;\n  background-color: #f1f1f1;\n  width: 100%;\n}\n\n.autocomplete-item {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 99;\n  top: 100%;\n  left: 0;\n  right: 0;\n  display: grid;\n  grid-template-rows: auto;\n  overflow: auto;\n  max-height: 24vh;\n}\n\n.autocomplete-item div {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n}\n\n.autocomplete-item div:hover {\n  background-color: #e9e9e9;\n}\n\n.autocomplete-active {\n  background-color: rgb(114, 114, 114) !important;\n  color: #ffffff;\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/autocomplete.js":
/*!*****************************!*\
  !*** ./src/autocomplete.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autocomplete": () => (/* binding */ autocomplete)
/* harmony export */ });
/* harmony import */ var _cities_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities.json */ "./src/cities.json");


const mapped = _cities_json__WEBPACK_IMPORTED_MODULE_0__.map((city) => city.name);

const autocomplete = (inp) => {
  let currentFocus;
  const arr = mapped;
  inp.addEventListener("input", (e) => {
    const inputValue = inp.value;
    closeAllLists();
    if (!inputValue) return false;

    currentFocus = -1;

    const list = document.createElement("div");
    list.id = "autocomplete-list";
    list.classList = "autocomplete-item";

    inp.parentNode.appendChild(list);
    for (let i = 0; i < arr.length; i++) {
      // check if the item starts with the same letters as the text field value:
      if (
        arr[i].substring(0, inputValue.length).toUpperCase() ==
        inputValue.toUpperCase()
      ) {
        const item = document.createElement("DIV");

        item.innerHTML =
          "<strong>" + arr[i].substring(0, inputValue.length) + "</strong>";
        item.innerHTML += arr[i].substring(inputValue.length);
        item.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        item.addEventListener("click", () => {
          inp.value = item.getElementsByTagName("input")[0].value;
          closeAllLists();
          inp.parentNode.parentNode.requestSubmit();
        });
        list.appendChild(item);
      }
    }
  });

  // Focus swapping when pressing arrows
  inp.addEventListener("keydown", (e) => {
    const list = document.getElementById("autocomplete-list");
    if (!list) return false;

    const items = list.getElementsByTagName("div");

    if (e.keyCode == 40) {
      // arrow down
      currentFocus++;
      addActive(items);
    } else if (e.keyCode == 38) {
      // arrow up
      currentFocus--;
      addActive(items);
    } else if (e.keyCode == 13) {
      // enter
      if (currentFocus > -1) {
        if (items) items[currentFocus].click();
      }
    }
  });
  const addActive = (items) => {
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add("autocomplete-active");
  };

  const removeActive = (items) => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("autocomplete-active");
    }
  };

  const closeAllLists = (targetElement) => {
    const items = document.getElementsByClassName("autocomplete-item");
    for (let i = 0; i < items.length; i++) {
      if (targetElement != items[i] && targetElement != inp) {
        items[i].parentNode.removeChild(items[i]);
      }
    }
  };

  document.addEventListener("click", (e) => {
    closeAllLists(e.target);
  });
};


/***/ }),

/***/ "./src/cities.json":
/*!*************************!*\
  !*** ./src/cities.json ***!
  \*************************/
/***/ ((module) => {


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete */ "./src/autocomplete.js");



const BING = "c1e53f81cbmsh092a4edbfb07a1cp1b2230jsn06ec2bc7dfb3";
const WEATHER = "829b532905845ac68bf3a89674382243";

const city = "Ostrava";

// main function, retrieves all data based on user input
const submitCity = async () => {
  const geolocation = await getGeolocation(citySelect.value);
  const weatherData = await getFutureWeatherData(
    geolocation.lat,
    geolocation.lon
  );
  addWeatherData(
    geolocation.name,
    geolocation.state,
    weatherData.dayNames,
    weatherData.temps,
    weatherData.winds,
    weatherData.humids,
    weatherData.icons
  );
  getBackgroundImage(geolocation.name);
  citySelect.value = "";
};

const getFutureWeatherData = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=40&lat=${lat}&lon=${lon}&appid=${WEATHER}`,
    { mode: "cors" }
  );
  const listedData = await response.json();
  const unsortedData = listedData.list;
  const data = unsortedData.filter((day) => {
    const date = new Date(day.dt_txt);
    const today = new Date(Date.now());
    if (date.getDay() == today.getDay()) {
      return true;
    }
    const hour = date.getHours();
    return hour == 12;
  });
  const dayNames = data.map((day) => {
    const date = new Date(day.dt_txt);
    const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      date
    );
    return today;
  });
  const temps = data.map((day) => day.main.temp);
  const winds = data.map((day) => day.wind.speed);
  const humids = data.map((day) => day.main.humidity);
  const icons = data.map((day) => day.weather[0].icon);

  return { temps, winds, humids, icons, dayNames };
};

const addWeatherData = (
  cityName,
  countryName,
  dayNames,
  dayTemps,
  dayWinds,
  dayHumids,
  dayIcons
) => {
  const outputCity = document.getElementById("output-city");
  const outputCountry = document.getElementById("output-state");
  outputCity.textContent = cityName;
  outputCountry.textContent = countryName;

  const days = document.getElementsByClassName("day");

  for (let i = 0; i < days.length; i++) {
    days[i].childNodes.forEach((item) => {
      if (item.nodeType == 3) return;
      const itemClass = Array.from(item.classList)[0];
      switch (itemClass) {
        case "day-name":
          item.textContent = dayNames[i];
          break;
        case "day-temp":
          item.textContent = `${dayTemps[i]}`.substring(0, 4) + " °C";
          break;
        case "day-humid":
          item.textContent = dayHumids[i] + " %";
          break;
        case "day-wind":
          item.textContent = `${dayWinds[i]}`.substring(0, 3) + " km/h";
          break;
        case "day-icon":
          const icon = `<img src="https://openweathermap.org/img/wn/${dayIcons[i]}@2x.png" alt="weather icon"/>`;
          item.innerHTML = icon;
          break;
        default:
          console.log(item);
          break;
      }
    });
  }
};

// retrieves background image based on given city
const getBackgroundImage = async (city) => {
  const response = await fetch(
    `https://bing-image-search1.p.rapidapi.com/images/search?q=${city}&count=1`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": BING,
        "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
      },
    }
  );

  if (await response.ok) {
    const imagesData = await response.json();
    addCityImageToDOM(imagesData.value[0].contentUrl);
  } else {
    // free api for when bing api runs out of calls
    const response = await fetch(
      `https://imsea.herokuapp.com/api/1?q=${city}`,
      {
        mode: "cors",
      }
    );

    const imagesData = await response.json();
    addCityImageToDOM(imagesData.value[0].contentUrl);
  }
};

// sets city image as a background
const addCityImageToDOM = (data) => {
  const cityImageURL = data;
  document.getElementById(
    "bg-blur"
  ).style.backgroundImage = `url('${cityImageURL}')`;
  document.querySelector(
    "section"
  ).style.backgroundImage = `url('${cityImageURL}')`;
};

// adds a listener to user city input
const citySelect = document.getElementById("city-input");
const inputForm = document.getElementById("city-form");
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitCity();
});

// retrieves geolocation data based on given city
const getGeolocation = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${WEATHER}`,
    { mode: "cors" }
  );
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });
  const geolocation = (await response.json())[0];
  const name = geolocation.name;
  const state = regionNamesInEnglish.of(geolocation.country);
  const lat = geolocation.lat;
  const lon = geolocation.lon;
  return { name, state, lat, lon };
};

// activate autocomplete
(0,_autocomplete__WEBPACK_IMPORTED_MODULE_1__.autocomplete)(citySelect);

// default script
getBackgroundImage(city);
const geolocation = getGeolocation(city);
geolocation.then((gData) => {
  const wData = getFutureWeatherData(gData.lat, gData.lon);
  wData.then((dat) => {
    addWeatherData(
      gData.name,
      gData.state,
      dat.dayNames,
      dat.temps,
      dat.winds,
      dat.humids,
      dat.icons
    );
  });
});

})();

/******/ })()
;