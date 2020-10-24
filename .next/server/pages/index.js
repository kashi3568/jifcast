module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/daffolap-968/Videos/learning ssr next/jifcast/components/logo.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n // Circle Right icon designed by Hector (CC license): https://thenounproject.com/term/circle-right/557979\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => __jsx(\"svg\", _extends({\n  viewBox: \"0 0 1150.9491 1151.219\"\n}, props, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 27\n  }\n}), __jsx(\"g\", {\n  transform: \"translate(1904.506,419.41757)\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 76\n  }\n}, __jsx(\"path\", {\n  d: \"m -1354.6565,731.56083 c -20.4904,-1.2663 -41.6453,-3.3398 -56.875,-5.5744 -120.7717,-17.7206 -230.7568,-71.8587 -318.5583,-156.8044 -90.8856,-87.92949 -150.3919,-204.43803 -168.8656,-330.62503 -4.2575,-29.08131 -5.5507,-48.30232 -5.5507,-82.5 0,-34.19767 1.2932,-53.41869 5.5507,-82.500001 17.6653,-120.66555 71.8544,-230.758109 156.7989,-318.558329 87.9295,-90.88557 204.438,-150.39189 330.625,-168.86555 29.0813,-4.25748 48.3023,-5.55069 82.5,-5.55069 34.1977,0 53.4187,1.29321 82.5,5.55069 126.187,18.47366 242.6955,77.97998 330.62496,168.86556 26.5872,27.48095 45.6005,51.07991 66.1988,82.16452 54.0043,81.497079 85.2183,170.4165988 94.6107,269.5188 0.8471,8.9375 1.5401,31.15625 1.5401,49.375 0,44.49681 -3.0696,75.17263 -11.7846,117.76996 -14.705,71.87482 -45.7252,144.69077 -88.1667,206.95994 -48.3424,70.92683 -114.3252,132.03273 -188.64826,174.70493 -70.9275,40.7226 -153.5259,66.7537 -235.625,74.2577 -15.4629,1.4134 -64.5864,2.5708 -76.875,1.8113 z m 77.8682,-139.798 c 129.6922,-16.8933 241.2895,-85.75754 312.08516,-192.58083 38.8375,-58.60169 62.0617,-122.51198 70.8604,-195 2.2079,-18.1894 2.2079,-75.5606 0,-93.75 -14.469,-119.2023912 -71.0092,-221.84159 -162.68876,-295.33419 -63.2446,-50.69841 -140.8843,-82.69356 -225.625,-92.97956 -18.1894,-2.20786 -75.5606,-2.20786 -93.75,0 -84.7407,10.286 -162.3804,42.28115 -225.625,92.97956 -91.6796,73.4926 -148.2197,176.1317988 -162.6888,295.33419 -2.2078,18.1894 -2.2078,75.5606 0,93.75 14.4672,119.18687 71.0528,221.91 162.6888,295.33839 63.3034,50.72534 146.1995,84.78074 225.625,92.69134 7.5625,0.7532 15.7187,1.5927 18.125,1.8655 10.3498,1.1734 66.5446,-0.4324 80.9932,-2.3144 z m -73.958,-217.77592 -42.3398,-41.98998 55.7773,-55.78762 c 30.6775,-30.68319 55.7773,-56.25862 55.7773,-56.8343 0,-0.57566 -73.5469,-0.8546 -163.4375,-0.61983 l -163.4375,0.42682 0,-60 0,-60.000001 165.3125,-0.3171 c 90.9219,-0.1744 165.3125,-0.69776 165.3125,-1.16303 0,-0.46524 -25.875,-26.38857 -57.5,-57.60736 -31.625,-31.2188002 -57.5,-57.41734 -57.5,-58.21897 0,-1.76811 82.6199,-84.568539 84.3841,-84.568539 0.685,0 59.6315,58.388139 130.9923,129.751399 l 129.7469,129.751411 -129.2534,129.62359 c -71.0894,71.29298 -129.7578,129.60557 -130.3742,129.58355 -0.6164,-0.022 -20.1736,-18.93555 -43.4605,-42.03004 z\",\n  fill: \"#000000\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 121\n  }\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ28uanM/Njg2ZiJdLCJuYW1lcyI6WyJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FFQTs7QUFDZ0JBLG9FQUFELElBQVc7QUFBSyxTQUFPLEVBQUM7QUFBYixHQUEwQ0EsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFpRDtBQUFHLFdBQVMsRUFBQywrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTZDO0FBQU0sR0FBQyxFQUFDLHl0RUFBUjtBQUFrdUUsTUFBSSxFQUFDLFNBQXZ1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQTdDLENBQWpELENBQTFCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sb2dvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBDaXJjbGUgUmlnaHQgaWNvbiBkZXNpZ25lZCBieSBIZWN0b3IgKENDIGxpY2Vuc2UpOiBodHRwczovL3RoZW5vdW5wcm9qZWN0LmNvbS90ZXJtL2NpcmNsZS1yaWdodC81NTc5NzlcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gPHN2ZyB2aWV3Qm94PVwiMCAwIDExNTAuOTQ5MSAxMTUxLjIxOVwiIHsuLi5wcm9wc30+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE5MDQuNTA2LDQxOS40MTc1NylcIj48cGF0aCBkPVwibSAtMTM1NC42NTY1LDczMS41NjA4MyBjIC0yMC40OTA0LC0xLjI2NjMgLTQxLjY0NTMsLTMuMzM5OCAtNTYuODc1LC01LjU3NDQgLTEyMC43NzE3LC0xNy43MjA2IC0yMzAuNzU2OCwtNzEuODU4NyAtMzE4LjU1ODMsLTE1Ni44MDQ0IC05MC44ODU2LC04Ny45Mjk0OSAtMTUwLjM5MTksLTIwNC40MzgwMyAtMTY4Ljg2NTYsLTMzMC42MjUwMyAtNC4yNTc1LC0yOS4wODEzMSAtNS41NTA3LC00OC4zMDIzMiAtNS41NTA3LC04Mi41IDAsLTM0LjE5NzY3IDEuMjkzMiwtNTMuNDE4NjkgNS41NTA3LC04Mi41MDAwMDEgMTcuNjY1MywtMTIwLjY2NTU1IDcxLjg1NDQsLTIzMC43NTgxMDkgMTU2Ljc5ODksLTMxOC41NTgzMjkgODcuOTI5NSwtOTAuODg1NTcgMjA0LjQzOCwtMTUwLjM5MTg5IDMzMC42MjUsLTE2OC44NjU1NSAyOS4wODEzLC00LjI1NzQ4IDQ4LjMwMjMsLTUuNTUwNjkgODIuNSwtNS41NTA2OSAzNC4xOTc3LDAgNTMuNDE4NywxLjI5MzIxIDgyLjUsNS41NTA2OSAxMjYuMTg3LDE4LjQ3MzY2IDI0Mi42OTU1LDc3Ljk3OTk4IDMzMC42MjQ5NiwxNjguODY1NTYgMjYuNTg3MiwyNy40ODA5NSA0NS42MDA1LDUxLjA3OTkxIDY2LjE5ODgsODIuMTY0NTIgNTQuMDA0Myw4MS40OTcwNzkgODUuMjE4MywxNzAuNDE2NTk4OCA5NC42MTA3LDI2OS41MTg4IDAuODQ3MSw4LjkzNzUgMS41NDAxLDMxLjE1NjI1IDEuNTQwMSw0OS4zNzUgMCw0NC40OTY4MSAtMy4wNjk2LDc1LjE3MjYzIC0xMS43ODQ2LDExNy43Njk5NiAtMTQuNzA1LDcxLjg3NDgyIC00NS43MjUyLDE0NC42OTA3NyAtODguMTY2NywyMDYuOTU5OTQgLTQ4LjM0MjQsNzAuOTI2ODMgLTExNC4zMjUyLDEzMi4wMzI3MyAtMTg4LjY0ODI2LDE3NC43MDQ5MyAtNzAuOTI3NSw0MC43MjI2IC0xNTMuNTI1OSw2Ni43NTM3IC0yMzUuNjI1LDc0LjI1NzcgLTE1LjQ2MjksMS40MTM0IC02NC41ODY0LDIuNTcwOCAtNzYuODc1LDEuODExMyB6IG0gNzcuODY4MiwtMTM5Ljc5OCBjIDEyOS42OTIyLC0xNi44OTMzIDI0MS4yODk1LC04NS43NTc1NCAzMTIuMDg1MTYsLTE5Mi41ODA4MyAzOC44Mzc1LC01OC42MDE2OSA2Mi4wNjE3LC0xMjIuNTExOTggNzAuODYwNCwtMTk1IDIuMjA3OSwtMTguMTg5NCAyLjIwNzksLTc1LjU2MDYgMCwtOTMuNzUgLTE0LjQ2OSwtMTE5LjIwMjM5MTIgLTcxLjAwOTIsLTIyMS44NDE1OSAtMTYyLjY4ODc2LC0yOTUuMzM0MTkgLTYzLjI0NDYsLTUwLjY5ODQxIC0xNDAuODg0MywtODIuNjkzNTYgLTIyNS42MjUsLTkyLjk3OTU2IC0xOC4xODk0LC0yLjIwNzg2IC03NS41NjA2LC0yLjIwNzg2IC05My43NSwwIC04NC43NDA3LDEwLjI4NiAtMTYyLjM4MDQsNDIuMjgxMTUgLTIyNS42MjUsOTIuOTc5NTYgLTkxLjY3OTYsNzMuNDkyNiAtMTQ4LjIxOTcsMTc2LjEzMTc5ODggLTE2Mi42ODg4LDI5NS4zMzQxOSAtMi4yMDc4LDE4LjE4OTQgLTIuMjA3OCw3NS41NjA2IDAsOTMuNzUgMTQuNDY3MiwxMTkuMTg2ODcgNzEuMDUyOCwyMjEuOTEgMTYyLjY4ODgsMjk1LjMzODM5IDYzLjMwMzQsNTAuNzI1MzQgMTQ2LjE5OTUsODQuNzgwNzQgMjI1LjYyNSw5Mi42OTEzNCA3LjU2MjUsMC43NTMyIDE1LjcxODcsMS41OTI3IDE4LjEyNSwxLjg2NTUgMTAuMzQ5OCwxLjE3MzQgNjYuNTQ0NiwtMC40MzI0IDgwLjk5MzIsLTIuMzE0NCB6IG0gLTczLjk1OCwtMjE3Ljc3NTkyIC00Mi4zMzk4LC00MS45ODk5OCA1NS43NzczLC01NS43ODc2MiBjIDMwLjY3NzUsLTMwLjY4MzE5IDU1Ljc3NzMsLTU2LjI1ODYyIDU1Ljc3NzMsLTU2LjgzNDMgMCwtMC41NzU2NiAtNzMuNTQ2OSwtMC44NTQ2IC0xNjMuNDM3NSwtMC42MTk4MyBsIC0xNjMuNDM3NSwwLjQyNjgyIDAsLTYwIDAsLTYwLjAwMDAwMSAxNjUuMzEyNSwtMC4zMTcxIGMgOTAuOTIxOSwtMC4xNzQ0IDE2NS4zMTI1LC0wLjY5Nzc2IDE2NS4zMTI1LC0xLjE2MzAzIDAsLTAuNDY1MjQgLTI1Ljg3NSwtMjYuMzg4NTcgLTU3LjUsLTU3LjYwNzM2IC0zMS42MjUsLTMxLjIxODgwMDIgLTU3LjUsLTU3LjQxNzM0IC01Ny41LC01OC4yMTg5NyAwLC0xLjc2ODExIDgyLjYxOTksLTg0LjU2ODUzOSA4NC4zODQxLC04NC41Njg1MzkgMC42ODUsMCA1OS42MzE1LDU4LjM4ODEzOSAxMzAuOTkyMywxMjkuNzUxMzk5IGwgMTI5Ljc0NjksMTI5Ljc1MTQxMSAtMTI5LjI1MzQsMTI5LjYyMzU5IGMgLTcxLjA4OTQsNzEuMjkyOTggLTEyOS43NTc4LDEyOS42MDU1NyAtMTMwLjM3NDIsMTI5LjU4MzU1IC0wLjYxNjQsLTAuMDIyIC0yMC4xNzM2LC0xOC45MzU1NSAtNDMuNDYwNSwtNDIuMDMwMDQgelwiIGZpbGw9XCIjMDAwMDAwXCI+PC9wYXRoPjwvZz48L3N2Zz4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logo.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/logo */ \"./components/logo.js\");\nvar _jsxFileName = \"/home/daffolap-968/Videos/learning ssr next/jifcast/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  className: \"jsx-2961073571\" + \" \" + \"root\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }\n}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, __jsx(\"meta\", {\n  charSet: \"utf-8\",\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}), __jsx(\"meta\", {\n  httpEquiv: \"X-UA-Compatible\",\n  content: \"IE=edge\",\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }\n}), __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width, initial-scale=1\",\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 7\n  }\n}), __jsx(\"title\", {\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }\n}, \"Next.js on Heroku\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"2961073571\",\n  __self: undefined\n}, \".root.jsx-2961073571{font-family:sans-serif;line-height:1.33rem;margin-top:8vh,;}@media (min-width:600px){.root.jsx-2961073571{margin-left:21vw;margin-right:21vw;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhZmZvbGFwLTk2OC9WaWRlb3MvbGVhcm5pbmcgc3NyIG5leHQvamlmY2FzdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFHZ0MsQUFNSixpQkFDQyxNQU5BLFlBT3BCLFFBTEgsZ0JBQUMiLCJmaWxlIjoiL2hvbWUvZGFmZm9sYXAtOTY4L1ZpZGVvcy9sZWFybmluZyBzc3IgbmV4dC9qaWZjYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dvJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxuICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIi8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICA8dGl0bGU+TmV4dC5qcyBvbiBIZXJva3U8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucm9vdCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zM3JlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogOHZoLFxuICAgICAgfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5yb290IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjF2dztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIxdnc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8aDE+PExvZ28gc3R5bGU9e3sgaGVpZ2h0OiAnMS40NXJlbScgfX0vPiBOZXh0LmpzIG9uIEhlcm9rdTwvaDE+XG5cbiAgICA8cD5EZXBsb3kgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9cIj5OZXh0LmpzPC9hPiB1bml2ZXJzYWwgd2ViIGFwcHMgb24gPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmhlcm9rdS5jb20vaG9tZVwiPkhlcm9rdTwvYT4uPC9wPlxuXG4gICAgPHA+VGhpcyA8c3Ryb25nPmRlbW8gZGVwbG95bWVudCBvbiBIZXJva3U8L3N0cm9uZz4gaXMgZnJvbSB0aGUgcmVwbyA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hcnMvaGVyb2t1LW5leHRqc1wiPm1hcnMvaGVyb2t1LW5leHRqczwvYT4uPC9wPlxuXG4gICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJzL2hlcm9rdS1uZXh0anMvYXJjaGl2ZS9tYXN0ZXIuemlwXCI+RG93bmxvYWQgdGhpcyBOZXh0LmpzIGFwcDwvYT4gYXMgYSBIZXJva3UtcmVhZHkgdGVtcGxhdGUsIG9yIGZvbGxvdyA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hcnMvaGVyb2t1LW5leHRqcyNwcm9kdWN0aW9uLWRlcGxveW1lbnRcIj5Qcm9kdWN0aW9uIERlcGxveW1lbnQ8L2E+IHRvIHB1c2ggYW4gZXhpc3RpbmcgYXBwIHRvIEhlcm9rdS48L3A+XG4gIDwvZGl2PlxuKVxuIl19 */\\n/*@ sourceURL=/home/daffolap-968/Videos/learning ssr next/jifcast/pages/index.js */\"), __jsx(\"h1\", {\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }\n}, __jsx(_components_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  style: {\n    height: '1.45rem'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }\n}), \" Next.js on Heroku\"), __jsx(\"p\", {\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }\n}, \"Deploy \", __jsx(\"a\", {\n  href: \"https://nextjs.org/\",\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 15\n  }\n}, \"Next.js\"), \" universal web apps on \", __jsx(\"a\", {\n  href: \"https://www.heroku.com/home\",\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 79\n  }\n}, \"Heroku\"), \".\"), __jsx(\"p\", {\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }\n}, \"This \", __jsx(\"strong\", {\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 13\n  }\n}, \"demo deployment on Heroku\"), \" is from the repo \", __jsx(\"a\", {\n  href: \"https://github.com/mars/heroku-nextjs\",\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 73\n  }\n}, \"mars/heroku-nextjs\"), \".\"), __jsx(\"p\", {\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }\n}, __jsx(\"a\", {\n  href: \"https://github.com/mars/heroku-nextjs/archive/master.zip\",\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 8\n  }\n}, \"Download this Next.js app\"), \" as a Heroku-ready template, or follow \", __jsx(\"a\", {\n  href: \"https://github.com/mars/heroku-nextjs#production-deployment\",\n  className: \"jsx-2961073571\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 143\n  }\n}, \"Production Deployment\"), \" to push an existing app to Heroku.\")));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxxRUFDYjtBQUFBLHNDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU0sU0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFNLFdBQVMsRUFBQyxpQkFBaEI7QUFBa0MsU0FBTyxFQUFDLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0U7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixTQUFPLEVBQUMscUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLENBREY7QUFBQTtBQUFBO0FBQUEsMDVFQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSSxNQUFDLHdEQUFEO0FBQU0sT0FBSyxFQUFFO0FBQUVBLFVBQU0sRUFBRTtBQUFWLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFKLHVCQXJCRixFQXVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBVTtBQUFHLE1BQUksRUFBQyxxQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBViw2QkFBMEU7QUFBRyxNQUFJLEVBQUMsNkJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTFFLE1BdkJGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBUix3QkFBb0U7QUFBRyxNQUFJLEVBQUMsdUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFwRSxNQXpCRixFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRztBQUFHLE1BQUksRUFBQywwREFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQUgsNkNBQTBJO0FBQUcsTUFBSSxFQUFDLDZEQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBMUksd0NBM0JGLENBREYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvbG9nbydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiLz5cbiAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgPHRpdGxlPk5leHQuanMgb24gSGVyb2t1PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnJvb3Qge1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzNyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDh2aCxcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxdnc7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMXZ3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPGgxPjxMb2dvIHN0eWxlPXt7IGhlaWdodDogJzEuNDVyZW0nIH19Lz4gTmV4dC5qcyBvbiBIZXJva3U8L2gxPlxuXG4gICAgPHA+RGVwbG95IDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCI+TmV4dC5qczwvYT4gdW5pdmVyc2FsIHdlYiBhcHBzIG9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5oZXJva3UuY29tL2hvbWVcIj5IZXJva3U8L2E+LjwvcD5cblxuICAgIDxwPlRoaXMgPHN0cm9uZz5kZW1vIGRlcGxveW1lbnQgb24gSGVyb2t1PC9zdHJvbmc+IGlzIGZyb20gdGhlIHJlcG8gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJzL2hlcm9rdS1uZXh0anNcIj5tYXJzL2hlcm9rdS1uZXh0anM8L2E+LjwvcD5cblxuICAgIDxwPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFycy9oZXJva3UtbmV4dGpzL2FyY2hpdmUvbWFzdGVyLnppcFwiPkRvd25sb2FkIHRoaXMgTmV4dC5qcyBhcHA8L2E+IGFzIGEgSGVyb2t1LXJlYWR5IHRlbXBsYXRlLCBvciBmb2xsb3cgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJzL2hlcm9rdS1uZXh0anMjcHJvZHVjdGlvbi1kZXBsb3ltZW50XCI+UHJvZHVjdGlvbiBEZXBsb3ltZW50PC9hPiB0byBwdXNoIGFuIGV4aXN0aW5nIGFwcCB0byBIZXJva3UuPC9wPlxuICA8L2Rpdj5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });