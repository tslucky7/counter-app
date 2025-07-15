/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");

const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const countDisplay = document.getElementById("counter");
let intCountDisplay = parseInt((countDisplay === null || countDisplay === void 0 ? void 0 : countDisplay.textContent) || "0");
const reset = document.getElementById("reset");
const stepInput = document.getElementById("step");
const logList = document.getElementById("log-list");
// ステップ数に応じて入力ボタンのテキストを変更
if (decrement) {
    decrement.textContent = "-" + (stepInput === null || stepInput === void 0 ? void 0 : stepInput.value.toString());
}
if (increment) {
    increment.textContent = "+" + (stepInput === null || stepInput === void 0 ? void 0 : stepInput.value.toString());
}
// ステップ数の入力が変更されたときにボタンのテキストを更新
stepInput === null || stepInput === void 0 ? void 0 : stepInput.addEventListener("input", () => {
    if (decrement) {
        decrement.textContent = "-" + stepInput.value.toString();
    }
    if (increment) {
        increment.textContent = "+" + stepInput.value.toString();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    increment === null || increment === void 0 ? void 0 : increment.addEventListener("click", () => {
        intCountDisplay += stepInput ? parseInt(stepInput.value) : 1;
        countDisplay.textContent = intCountDisplay.toString();
        // ログを追加
        const logItem = document.createElement("li");
        logItem.textContent = `+${stepInput.value.toString()}しました`;
    });
    decrement === null || decrement === void 0 ? void 0 : decrement.addEventListener("click", () => {
        intCountDisplay -= stepInput ? parseInt(stepInput.value) : 1;
        countDisplay.textContent = intCountDisplay.toString();
        // ログを追加
        const logItem = document.createElement("li");
        logItem.textContent = `-${stepInput.value.toString()}しました`;
    });
    reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", () => {
        intCountDisplay = 0;
        countDisplay.textContent = intCountDisplay.toString();
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map