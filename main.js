/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bars-3.svg */ \"./src/assets/bars-3.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/plus.svg */ \"./src/assets/plus.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/plus-circle.svg */ \"./src/assets/plus-circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;700&family=Lexend:wght@400;500;700;800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: 'Lexend', sans-serif;\\n}\\n\\n:root {\\n    --gray: #D9D9D9;\\n    --green: #008435;\\n    --blue: #002584;\\n    --light-blue: #CCDAFF;\\n}\\n\\n#content {\\n    display: grid;\\n    grid-template-rows: 1fr 9fr 0.5fr;\\n    grid-template-columns: 1fr 4fr;\\n    width: 100vw;\\n    height: 100vh;\\n}\\n\\n#header {\\n    grid-column: 1 / -1;\\n    grid-row: 1 / 2;\\n    padding: 10px 15px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: var(--green);\\n}\\n\\n#left-div {\\n    display: flex;\\n    gap: 10px;\\n}\\n\\n#left-div button {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: cover;\\n    width: 35px;\\n    height: 35px;\\n}\\n\\n#left-div h1 {\\n    color: white;\\n}\\n\\nbutton {\\n    cursor: pointer;\\n    z-index: 2;\\n}\\n\\nbutton:hover {\\n    background: var(--light-blue);\\n}\\n\\n#header .input-and-buttons-div {\\n    position: relative;\\n}\\n\\n#header .input-and-buttons-div input{\\n    height: 40px;\\n}\\n\\n#header .input-and-buttons-div .buttons-div {\\n    position: absolute;\\n    right: 10px;\\n    top: 10px;\\n    z-index: 2;\\n    display: flex;\\n    gap: 5px;\\n}\\n\\n.todo-form.quick .buttons-div #details-button {\\n    border: none;\\n    background-color: transparent;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: cover;\\n    width: 25px;\\n    height: 25px; \\n}\\n\\n.todo-form.quick .buttons-div #add-button {\\n    border: none;\\n    background-color: transparent;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-size: cover;\\n    width: 25px;\\n    height: 25px; \\n}\\n\\n\\n#todo-popup {\\n    position: fixed;\\n    top: 30%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    background: white;\\n    border: 2px solid black;\\n    border-radius: 10px;\\n    z-index: 3;\\n    width: 750px;\\n    height: 200px;\\n    max-width: 60%;\\n    display: none;\\n}\\n\\n#todo-popup.active {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n}\\n\\n#overlay {\\n    display: none;\\n}\\n\\n#overlay.active {\\n    display: block;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    background: rgba(0, 0, 0, .2); \\n}\\n\\n.todo-form {\\n    padding: 10px 15px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n}\\n\\n.todo-input, .details-input {\\n    width: 715px;\\n    height: 30px;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n.action-buttons {\\n    padding: 10px 15px;\\n    align-self: flex-end;\\n    display: flex;\\n    gap: 10px;\\n}\\n\\n.action-buttons button {\\n    padding: 5px 10px;\\n}\\n\\n#sidebar {\\n    display: none;\\n}\\n\\n#sidebar.active {\\n    display: block;\\n    background: var(--gray);\\n    grid-row : 2 / 3;\\n    grid-column: 1 / 2;\\n}\\n\\n#sidebar > div {\\n    padding: 20px 30px;\\n}\\n\\n#sidebar h3 {\\n    font-weight: 400;\\n}\\n\\n#sidebar-home > div, \\n#sidebar-projects > div {\\n    padding: 10px 15px;\\n}\\n\\n#sidebar-projects > button, \\n#sidebar-projects > form {\\n    margin: 10px 15px;\\n}\\n\\n#sidebar-home-projects > div {\\n    margin: 15px 20px;\\n}\\n\\n#sidebar-all-projects > div {\\n    margin: 10px 20px;\\n}\\n\\n#home-icon-and-header, \\n#projects-icons-and-header {\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5em;\\n}\\n\\n#home-icon-and-header img,\\n#projects-icons-and-header img {\\n    width: 30px;\\n    height: 30px;\\n}\\n\\n#projects-icons-and-header button,\\n.project-form .input-and-buttons-div button {\\n    border: none;\\n    background-color: transparent;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-size: cover;\\n    width: 25px;\\n    height: 25px; \\n}\\n\\n.project-form {\\n    display: none;\\n}\\n\\n.project-form.active {\\n    display: block;\\n}\\n\\n.project-form .input-and-buttons-div {\\n    display: flex;\\n    align-items: center;\\n    gap: 5px;\\n}\\n\\n#sidebar-home-projects > div, \\n#sidebar-all-projects > div {\\n    cursor: pointer;\\n}\\n\\n#sidebar-home-projects > div:hover, \\n#sidebar-all-projects > div:hover {\\n    color: var(--blue);\\n}\\n\\n#body {\\n    grid-row: 2 / 3;\\n    grid-column: 1 / 3;\\n}\\n\\n#body.smaller{\\n    grid-column: 2 / 3;\\n}\\n\\n#footer {\\n    grid-row: 3 / 4;\\n    grid-column: 1 / -1;\\n    background: var(--green);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./src/layout.js\");\n\n\n(0,_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectCollection */ \"./src/projectCollection.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_home_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/home.svg */ \"./src/assets/home.svg\");\n/* harmony import */ var _assets_rectangle_stack_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/rectangle-stack.svg */ \"./src/assets/rectangle-stack.svg\");\n\n\n\n\n\n\n\n\nlet projectCollection = new _projectCollection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nprojectCollection.loadFromLocalStorage();\n// projectCollection.loadSamples();\nlet allProjects = projectCollection.projects;\n\n// defined so we don't include them in the \"Projects\" section AND \"Home\" section\nconst specialHomeProjects = [\"Inbox\", \"Today\", \"Next 7 Days\"];\n\n// defines header to display page title\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.setAttribute(\"id\", \"header\");\n\n    // holds sidebar button and title headline\n    const leftDiv = document.createElement(\"div\");\n    leftDiv.setAttribute(\"id\", \"left-div\");\n\n    const sidebarButton = document.createElement(\"button\");\n    sidebarButton.setAttribute(\"id\" , \"sidebar-button\");\n    sidebarButton.setAttribute(\"type\", \"button\");\n    sidebarButton.addEventListener(\"click\", openSidebar);\n\n    // title headline\n    const pageName = document.createElement(\"h1\");\n    pageName.textContent = \"ToDo List\";\n\n    leftDiv.appendChild(sidebarButton);\n    leftDiv.appendChild(pageName);\n\n    header.appendChild(leftDiv);\n    \n    // quick ToDo bar\n    const quickTodoDiv = document.createElement(\"div\");\n    quickTodoDiv.setAttribute(\"id\", \"quick-todo-div\");\n\n    const quickTodoForm = createQuickTodoForm();\n    \n    quickTodoDiv.appendChild(quickTodoForm);\n    \n    header.appendChild(quickTodoDiv);\n\n    return header;\n}\n\n// EL function used to toggle (open/close) the sidebar menu\nfunction openSidebar() {\n    const sidebarDiv = document.getElementById(\"sidebar\");\n    sidebarDiv.classList.toggle(\"active\");\n\n    const bodyDiv = document.getElementById(\"body\");\n    bodyDiv.classList.toggle(\"smaller\");\n}\n\n// creates the basic ToDo form to use both standalone in the header\n// and in the extended ToDo form containing details and due date\nfunction createBasicTodoForm() {\n    const todoForm = document.createElement(\"form\");\n    todoForm.classList.add(\"todo-form\");\n\n    const todoInput = document.createElement(\"input\");\n    todoInput.classList.add(\"todo-input\");\n\n    todoInput.setAttribute(\"type\", \"text\");\n    todoInput.setAttribute(\"name\", \"todo\");\n    todoInput.setAttribute(\"placeholder\", \"Add a ToDo Item\");\n    \n    todoForm.appendChild(todoInput);\n\n    return todoForm;\n}\n\n// creates the quick ToDo form used in the header to take in\n// a new ToDo *without* details and due date\nfunction createQuickTodoForm() {\n    const todoForm = createBasicTodoForm();\n    todoForm.classList.add(\"quick\");\n    \n    const todoFormInput = todoForm.querySelector(\".todo-input\");\n    todoFormInput.setAttribute(\"id\", 'todo-quick-input');\n\n    // create a new div to wrap around the ToDo Form and buttons within the form\n    // and moves the input into this div; \n    // this allows us to overlay the details/add button in CSS\n\n    const inputAndButtonsDiv = document.createElement(\"div\");\n    inputAndButtonsDiv.classList.add(\"input-and-buttons-div\");\n\n    todoFormInput.parentNode.insertBefore(inputAndButtonsDiv, todoFormInput);\n\n    inputAndButtonsDiv.appendChild(todoFormInput);\n\n    // buttons for details (extended ToDo) and adding ToDo\n\n    const buttonsDiv = document.createElement(\"div\");\n    buttonsDiv.classList.add(\"buttons-div\");\n\n    const detailsButton = document.createElement(\"button\");\n    detailsButton.setAttribute(\"type\", \"button\");\n    detailsButton.setAttribute(\"id\", \"details-button\");\n    detailsButton.addEventListener(\"click\", openDetailedTodo);\n\n    const addButton = document.createElement(\"button\");\n    addButton.setAttribute(\"type\", \"button\");\n    addButton.setAttribute(\"id\", \"add-button\");\n    addButton.addEventListener(\"click\", addQuickTodo);\n\n    buttonsDiv.append(detailsButton);\n    buttonsDiv.append(addButton);\n\n    inputAndButtonsDiv.appendChild(buttonsDiv);\n\n    return todoForm;\n}\n\n// defines extended form to take in user input for ToDo items\n// including details and due date\nfunction createDetailedTodoForm() {\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"todo-popup\");\n    \n    // ToDo Form\n\n    const todoForm = createBasicTodoForm();\n    todoForm.classList.add(\"detailed\");\n\n    const todoFormInput = todoForm.querySelector(\".todo-input\");\n    todoFormInput.setAttribute(\"id\", 'todo-detailed-input');\n\n    // extended ToDo form details\n    const detailsInput = document.createElement(\"input\");\n    detailsInput.classList.add(\"details-input\");\n\n    detailsInput.setAttribute(\"type\", \"text\");\n    detailsInput.setAttribute(\"name\", \"details\");\n    detailsInput.setAttribute(\"placeholder\", \"Details\");\n\n    const dueDateInput = document.createElement(\"input\");\n    dueDateInput.classList.add(\"due-date-input\");\n\n    dueDateInput.setAttribute(\"type\", \"date\");\n    dueDateInput.setAttribute(\"value\", \"2022-09-20\");\n\n    // dropdown menu for project options\n\n    const dropdown = document.createElement(\"select\");\n    dropdown.setAttribute(\"id\", \"project-dropdown\");\n    dropdown.setAttribute(\"name\", \"project-dropdown\");\n\n    const inboxOption = document.createElement(\"option\");\n    inboxOption.setAttribute(\"value\", \"Inbox\");\n    inboxOption.textContent = \"Inbox\";\n    inboxOption.setAttribute(\"selected\", true);\n    dropdown.appendChild(inboxOption);\n\n    const optionElements = loadProjectDropdown();\n \n    for (const elem of optionElements) {\n        dropdown.appendChild(elem);\n    }\n\n    todoForm.appendChild(detailsInput);\n    todoForm.appendChild(dueDateInput);\n    todoForm.appendChild(dropdown);\n\n    div.appendChild(todoForm);\n\n    // buttons to add or cancel adding a ToDo item\n\n    const actionButtons = document.createElement(\"div\");\n    actionButtons.classList.add(\"action-buttons\");\n    \n    const cancelButton = document.createElement(\"button\");\n    cancelButton.classList.add(\"cancel-button\");\n    cancelButton.textContent = \"Cancel\";\n    cancelButton.addEventListener(\"click\", closeDetailedTodo);\n\n    const addButton = document.createElement(\"button\");\n    addButton.classList.add(\"add-button\");\n    addButton.textContent = \"Add ToDo\";\n    addButton.addEventListener(\"click\", addDetailedTodo);\n\n    actionButtons.appendChild(cancelButton);\n    actionButtons.appendChild(addButton);\n\n    div.appendChild(actionButtons);\n    \n    return div;\n}\n\n// loads all available projects - \"Today\" and \"Next 7 Days\"\n// as an option in the detailed ToDos menu\nfunction loadProjectDropdown() {\n    // rest of projects that are not \"Inbox\", \"Today\" or \"Next 7 Days\"\n    let projectOptions = allProjects.slice(3);\n\n    let alreadyDisplayedProjects = [];\n\n    if (document.getElementById(\"project-dropdown\")) {\n        alreadyDisplayedProjects = document.getElementById(\"project-dropdown\").childNodes;\n        alreadyDisplayedProjects = Array.from(alreadyDisplayedProjects);\n        alreadyDisplayedProjects = alreadyDisplayedProjects.map(element => {return element.value});  \n    }\n\n    let optionElements = [];\n    if (projectOptions.length > 0) {\n        for (const project of projectOptions) {\n            if (! alreadyDisplayedProjects.includes(project.title)) {\n                const option = document.createElement(\"option\");\n                option.setAttribute(\"value\", project.title);\n                option.textContent = project.title;\n                optionElements.push(option);\n            }\n        }\n    }\n    return optionElements;\n}\n\n// EL function used to add a basic ToDo to Inbox from the quick ToDo bar\n// located in the header\nfunction addQuickTodo() {\n    let quickTodoInput = document.getElementById(\"todo-quick-input\");\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](quickTodoInput.value);\n    quickTodoInput.value = '';\n    projectCollection.addTodo(\"Inbox\", todo);\n    projectCollection.saveToLocalStorage();\n}\n\n// EL function used to add a detailed ToDo to any project of choice\n// using the ToDo pop-up menu\n\nfunction addDetailedTodo() {\n    let detailedTodoInput = document.getElementById(\"todo-detailed-input\");\n    let detailsInput = document.querySelector(\".details-input\");\n    let dueDateInput = document.querySelector(\".due-date-input\");\n    let projectDropdown = document.getElementById(\"project-dropdown\");\n    const selectedProject = projectDropdown.options[projectDropdown.selectedIndex].value;\n\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](detailedTodoInput.value, detailsInput.value, dueDateInput.value);\n\n    projectCollection.addTodo(selectedProject, todo);\n    projectCollection.saveToLocalStorage();\n    closeDetailedTodo(); \n}\n\n// EL function used to open detailed ToDo menu \nfunction openDetailedTodo() {\n    const todoPopUp = document.getElementById(\"todo-popup\");\n    todoPopUp.classList.add(\"active\");\n    \n    const overlay = document.getElementById(\"overlay\");\n    overlay.classList.add(\"active\");\n\n    // sets detailed ToDo input to contents of quick Todo\n    let quickTodoInput = document.getElementById(\"todo-quick-input\");\n    let detailedTodoInput = document.getElementById(\"todo-detailed-input\");\n    if (quickTodoInput.value != '') {\n        detailedTodoInput.value = quickTodoInput.value;\n        quickTodoInput.value = '';\n    }\n}\n\n// EL function used to close the detailed ToDo menu\nfunction closeDetailedTodo() {\n    const todoPopUp = document.getElementById(\"todo-popup\");\n\n    const detailedTodoForm = document.querySelector(\".todo-form.detailed\");\n    let todoInput = detailedTodoForm.querySelector(\".todo-input\");\n    let detailsInput = detailedTodoForm.querySelector(\".details-input\");\n    todoInput.value = '';\n    detailsInput.value = '';\n\n    const overlay = document.getElementById(\"overlay\");\n\n    overlay.classList.remove(\"active\");\n    todoPopUp.classList.remove(\"active\");\n}\n\n// defines the sidebar containing links to \"Today\", \n// list of projects, etc.\nfunction createSidebar() {\n    const sidebarDiv = document.createElement(\"div\");\n    sidebarDiv.setAttribute(\"id\", \"sidebar\");\n\n    // Home section of sidebar\n    const homeDiv = document.createElement(\"div\");\n    homeDiv.setAttribute(\"id\", \"sidebar-home\");\n\n    const homeIconAndHeaderDiv = document.createElement(\"div\");\n    homeIconAndHeaderDiv.setAttribute(\"id\", \"home-icon-and-header\");\n\n    const homeIcon = new Image();\n    homeIcon.src = _assets_home_svg__WEBPACK_IMPORTED_MODULE_4__;\n    homeIconAndHeaderDiv.appendChild(homeIcon);\n\n    const homeHeader = document.createElement(\"h2\");\n    homeHeader.textContent = \"Home\";\n\n    homeIconAndHeaderDiv.appendChild(homeHeader);\n    homeDiv.appendChild(homeIconAndHeaderDiv);\n\n    const sidebarHomeProjectsDiv = document.createElement(\"div\");\n    sidebarHomeProjectsDiv.setAttribute(\"id\", \"sidebar-home-projects\");\n\n    // Inbox, Today, Next 7 Days\n    const homeProjectDivs = loadHomeProjectDivs();\n    for (const projectDiv of homeProjectDivs) {\n        sidebarHomeProjectsDiv.appendChild(projectDiv);\n    }\n    \n    homeDiv.appendChild(sidebarHomeProjectsDiv);\n\n    // projects section of sidebar\n    const projectsDiv = document.createElement(\"div\");\n    projectsDiv.setAttribute(\"id\", \"sidebar-projects\");\n\n    const projectsIconsAndHeaderDiv = document.createElement(\"div\");\n    projectsIconsAndHeaderDiv.setAttribute(\"id\", \"projects-icons-and-header\");\n\n    const projectsIcon = new Image();\n    projectsIcon.src = _assets_rectangle_stack_svg__WEBPACK_IMPORTED_MODULE_5__;\n    projectsIconsAndHeaderDiv.appendChild(projectsIcon);\n\n    const projectsHeader = document.createElement(\"h2\");\n    projectsHeader.textContent = \"Projects\";\n\n    projectsIconsAndHeaderDiv.appendChild(projectsHeader);\n    projectsDiv.appendChild(projectsIconsAndHeaderDiv);\n\n    // new project button\n    const newProjectButton = document.createElement(\"button\");\n    newProjectButton.setAttribute(\"type\", \"button\");\n    newProjectButton.setAttribute(\"id\", \"new-project-button\");\n    newProjectButton.addEventListener(\"click\", showNewProjectForm);\n\n    projectsIconsAndHeaderDiv.appendChild(newProjectButton);\n\n    // div to hold all projects inside ProjectCollection\n\n    const allProjectsDiv = document.createElement(\"div\");\n    allProjectsDiv.setAttribute(\"id\", \"sidebar-all-projects\");\n    \n    projectsDiv.appendChild(createNewProjectForm());\n    projectsDiv.appendChild(allProjectsDiv);\n\n    const allProjectDivs = loadProjectsDivs();\n\n    for (const projectDiv of allProjectDivs) {\n        allProjectsDiv.appendChild(projectDiv);\n    }\n\n    sidebarDiv.appendChild(homeDiv);\n    sidebarDiv.appendChild(projectsDiv);\n\n    return sidebarDiv;\n}\n\n// loads the divs containing \"Inbox\", \"Today\", \"Next 7 Days\"\nfunction loadHomeProjectDivs() {\n    let homeProjectDivs = [];\n    for (const projName of specialHomeProjects) {\n        const homeProject = projectCollection.getProject(projName);\n        homeProjectDivs.push(createProjectDiv(homeProject));\n    }\n    return homeProjectDivs;\n\n}\n\n// EL function to show the new project form when the \"New Project\" button\n// inside the sidebar is clicked\nfunction showNewProjectForm() {\n    const projectForm = document.querySelector(\".project-form\");\n    projectForm.classList.add(\"active\");\n}\n\n// function used to hide new project form after new project has been added\nfunction hideNewProjectForm() {\n    const projectForm = document.querySelector(\".project-form\");\n    projectForm.classList.remove(\"active\");\n}\n\n// defines form for adding new projects\nfunction createNewProjectForm() {\n    const projectForm = document.createElement(\"form\");\n    projectForm.classList.add(\"project-form\");\n\n    const inputAndButtonsDiv = document.createElement(\"div\");\n    inputAndButtonsDiv.classList.add(\"input-and-buttons-div\");\n    \n    const projectInput = document.createElement(\"input\");\n    projectInput.classList.add(\"project-input\");\n\n    projectInput.setAttribute(\"type\", \"text\");\n    projectInput.setAttribute(\"name\", \"todo\");\n    projectInput.setAttribute(\"placeholder\", \"Project Name\");\n    \n    inputAndButtonsDiv.appendChild(projectInput);\n\n    const addButton = document.createElement(\"button\");\n    addButton.setAttribute(\"type\", \"button\");\n    addButton.classList.add(\"add-button\");\n    addButton.addEventListener(\"click\", addNewProject);\n\n    inputAndButtonsDiv.appendChild(addButton);\n\n    projectForm.appendChild(inputAndButtonsDiv);\n\n    return projectForm;\n\n}\n\n// EL function for adding new project\nfunction addNewProject() {\n    let projectName = document.querySelector(\".project-input\");\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName.value);\n    projectCollection.addNewProject(project);\n    projectCollection.saveToLocalStorage();\n    projectName.value = '';\n\n    const allProjectDivs = document.getElementById(\"sidebar-all-projects\");\n    allProjectDivs.appendChild(loadProjectsDivs()[0]);\n\n    const projectDropdown = document.getElementById(\"project-dropdown\");\n    projectDropdown.appendChild(loadProjectDropdown()[0]);\n\n    hideNewProjectForm();\n}\n\n// displays and sets up the Projects inside ProjectCollection on the sidebar\nfunction loadProjectsDivs() {\n    let alreadyDisplayedProjects = [];\n    if (document.getElementById(\"sidebar-all-projects\")) {\n        alreadyDisplayedProjects = document.getElementById(\"sidebar-all-projects\").childNodes;\n        alreadyDisplayedProjects = Array.from(alreadyDisplayedProjects);\n        alreadyDisplayedProjects = alreadyDisplayedProjects.map(element => {return element.id});  \n    }\n    let projectsToLoad = [];\n    for (const project of allProjects) {\n        if (!alreadyDisplayedProjects.includes(project.title) \n            && !specialHomeProjects.includes(project.title)) {\n            projectsToLoad.push(createProjectDiv(project));\n        }\n    }\n    return projectsToLoad;\n}\n\n// creates a single div for a Project and adds it \n// to the \"Projects\" section on the sidebar\nfunction createProjectDiv(project) {\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.setAttribute(\"id\", project.title);\n\n    const projectHeader = document.createElement(\"h3\");\n    projectHeader.textContent = project.title;\n\n    projectDiv.addEventListener(\"click\", (event) => {\n        displayTodos(event, project);\n    });\n\n    projectDiv.appendChild(projectHeader);\n    \n    return projectDiv;\n}\n\n// EL function used to show all ToDos inside a project on-click\n// of Project names under the sidebar\nfunction displayTodos(event, project) {\n    const bodyDiv = document.getElementById(\"body\");\n    bodyDiv.replaceChildren(); // clears all existing ToDos\n\n    const allProjectTodos = project.todos;\n\n    for (const todo of allProjectTodos) {\n        const todoDiv = document.createElement(\"div\");\n        todoDiv.setAttribute(\"id\", todo.title);\n        todoDiv.textContent = todo.title;\n        bodyDiv.appendChild(todoDiv);\n    }\n}\n\n// defines the body of the page that holds main ToDo items\nfunction createBody() {\n    const bodyDiv = document.createElement(\"div\");\n    bodyDiv.setAttribute(\"id\", \"body\");\n    \n    return bodyDiv;\n}\n\n// defines the overlay used when opening up the detailed ToDo menu\nfunction createOverlay() {\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"overlay\");\n    \n    return div;\n}\n\nfunction createFooter() {\n    const footerDiv = document.createElement(\"div\");\n    footerDiv.setAttribute(\"id\", \"footer\");\n\n    return footerDiv;\n}\n\n// sets up the entire webpage with default view\n// e.g. sidebar closed and only today's TODOs displayed\nfunction setUpPage() {\n    const content = document.getElementById(\"content\");\n    content.appendChild(createHeader());\n    content.appendChild(createDetailedTodoForm());\n    content.appendChild(createSidebar());\n    content.appendChild(createBody());\n    content.appendChild(createFooter());\n    content.appendChild(createOverlay());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setUpPage);\n\n//# sourceURL=webpack://todo-list/./src/layout.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(title, todos = []) {\n        this._title = title;\n        this._todos = todos;\n    }\n\n    get title() {\n        return this._title;\n    }\n\n    set title(value) {\n        this._title = value;\n    }\n\n    get todos() {\n        return this._todos;\n    }\n\n    set todos(arr) {\n        this.todos = arr;\n    }\n\n    addTodo(todo) {\n        if(! this.getTodo(todo.title)) {\n            this._todos.push(todo);\n        }\n    }\n\n    deleteTodo(todo) {\n        this._todos.splice(this._todos.indexOf(todo), 1);\n    }\n\n    getTodo(todoTitle) {\n        return this.todos.find((todo) => todo.title === todoTitle);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectCollection.js":
/*!**********************************!*\
  !*** ./src/projectCollection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectCollection)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n// holds all projects contained on ToDo List page\n// includes Inbox, Today, and Next 7 Days as defaults\nclass ProjectCollection {\n    constructor() {\n        this._projects = []\n        this.addDefaultProjects();\n    }\n\n    get projects() {\n        return this._projects;\n    }\n\n    set projects(arr) {\n        return this._projects = arr;\n    }\n    \n    // adds in Inbox, Today, and Next 7 Days \n    addDefaultProjects() {\n        this._projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Inbox'));\n        this._projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Today'));\n        this._projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Next 7 Days'));\n    }\n    \n    addNewProject(proj) {\n        if (! this.getProject(proj.title)) {\n            this.projects.push(proj);\n        }\n    }\n\n    deleteProject(projTitle) {\n        const proj = this.getProject(projTitle);\n        this.projects.splice(this.projects.indexOf(proj), 1)\n    }\n\n    getProject(projTitle) {\n        return this.projects.find((p) => p.title === projTitle);\n    }\n\n    addTodo(projTitle, todo) {\n        const project = this.getProject(projTitle);\n        project.addTodo(todo);\n    }\n\n    deleteTodo(projTitle, todoName) {\n        const project = this.getProject(projTitle);\n        const todo = this.getTodo(projTitle, todoName);\n        project.deleteTodo(todo);\n    }\n\n    getTodo(projTitle, todoName) {\n        const project = this.getProject(projTitle);\n        const todos = project.todos;\n        return todos.find((todo) => todo.title === todoName);\n    }\n\n    // saves to localStorage variable\n    saveToLocalStorage() {\n        localStorage.setItem(\"ProjectCollection\", JSON.stringify(this.projects));\n    }\n\n    // loads ProjectCollection from localStorage\n    loadFromLocalStorage() {\n        // all projects stored in localStorage have to be reingested as Project objects \n        // before using in layout since JSON does not save this info\n        if (localStorage.getItem('ProjectCollection')) {\n            let allProjects = JSON.parse(localStorage.getItem('ProjectCollection'));\n            allProjects = allProjects.map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"], project));\n            for (const project of allProjects) {\n                // ToDos also must be reingested as ToDo objects\n                project._todos = project._todos.map((todo) => Object.assign(new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], todo));\n                this.projects = allProjects;\n            }\n        }\n    }\n\n    // loads a set of sample projects and ToDos to show functionality\n    loadSamples() {\n        this.projects = [];\n        this.addDefaultProjects();\n        let projectPersonal = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Personal\");\n        let todoPersonal1 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Do laundry\", \"Separate colors and whites!\", \"2022-03-27\");\n        let todoPersonal2 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Go grocery shopping\", \"See shopping list\", \"2022-03-30\");\n        let todoPersonal3 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Buy Jenny's b-day present\", \"Soap or candles?\", \"2022-04-12\");\n        projectPersonal.addTodo(todoPersonal1);\n        projectPersonal.addTodo(todoPersonal2);\n        projectPersonal.addTodo(todoPersonal3);\n        let projectWork = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Work\");\n        let todoWork1 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Write weekly report\", \"Add links to all tickets\", \"2022-03-29\");\n        let todoWork2 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Prepare presentation\", \"Keep under 10 minutes\", \"2022-04-16\");\n        let todoWork3 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Meet with boss\", \"Talk about promotion?\", \"2022-05-02\");\n        projectWork.addTodo(todoWork1);\n        projectWork.addTodo(todoWork2);\n        projectWork.addTodo(todoWork3);\n        let projectTrip = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Trip\");\n        let todoTrip1 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Buy airplane tickets\", \"Find non-stop flight if possible\", \"2022-04-04\");\n        let todoTrip2 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Pack bags\", \"Bring sunscreen!\", \"2022-05-15\")\n        let todoTrip3 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Buy souvenirs to bring\", \"Magnets or food?\", \"2022-05-01\");\n        projectTrip.addTodo(todoTrip1);\n        projectTrip.addTodo(todoTrip2);\n        projectTrip.addTodo(todoTrip3);\n        this.addNewProject(projectPersonal);\n        this.addNewProject(projectWork);\n        this.addNewProject(projectTrip);\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/projectCollection.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n    constructor(title, details = '', dueDate = '', completed = false)  {\n        this._title = title;\n        this._details = details;\n        this._dueDate = dueDate;\n        this._completed = completed;\n    }\n\n    get title() {\n        return this._title;\n    }\n\n    set title(value) {\n        this._title = value;\n    }\n\n    get details() {\n        return this._details;\n    }\n\n    set details(value) {\n        return this._details = value;\n    }\n\n    get dueDate() {\n        return this._dueDate;\n    }\n\n    set dueDate(date) {\n        this.dueDate = date;\n    }\n\n    get completed() {\n        return this._completed;\n    }\n\n    set completed(value) {\n        this._completed = value;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/assets/bars-3.svg":
/*!*******************************!*\
  !*** ./src/assets/bars-3.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/bars-3.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/bars-3.svg?");

/***/ }),

/***/ "./src/assets/home.svg":
/*!*****************************!*\
  !*** ./src/assets/home.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/home.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/home.svg?");

/***/ }),

/***/ "./src/assets/plus-circle.svg":
/*!************************************!*\
  !*** ./src/assets/plus-circle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/plus-circle.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/plus-circle.svg?");

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/plus.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/plus.svg?");

/***/ }),

/***/ "./src/assets/rectangle-stack.svg":
/*!****************************************!*\
  !*** ./src/assets/rectangle-stack.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/rectangle-stack.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/rectangle-stack.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;