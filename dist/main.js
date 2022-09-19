/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', event => {\n  console.log(\"hello world!\");\n  var canvas = document.getElementById(\"model-canvas\");\n  var parent = document.getElementById(\"character-canvas\");\n  canvas.width = parent.offsetWidth;\n  canvas.height = parent.offsetHeight;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  const warriorImage = new Image();\n  warriorImage.src = './sprites_sheet/_Idle.png';\n\n  function idle_animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(warriorImage, 80, -30, 4100, 300);\n    requestAnimationFrame(idle_animate);\n  }\n\n  idle_animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3YXJyaW9ySW1hZ2UiLCJJbWFnZSIsInNyYyIsImlkbGVfYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkIVwiKVxuXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kZWwtY2FudmFzXCIpO1xuICAgIHZhciBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJhY3Rlci1jYW52YXNcIik7XG5cbiAgICBjYW52YXMud2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHBhcmVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJncmV5XCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBjb25zdCB3YXJyaW9ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB3YXJyaW9ySW1hZ2Uuc3JjID0gJy4vc3ByaXRlc19zaGVldC9fSWRsZS5wbmcnO1xuICAgIFxuXG5cbiAgICBmdW5jdGlvbiBpZGxlX2FuaW1hdGUgKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh3YXJyaW9ySW1hZ2UsIDgwLCAtMzAsIDQxMDAsIDMwMCApO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShpZGxlX2FuaW1hdGUpO1xuICAgIH1cblxuICAgIGlkbGVfYW5pbWF0ZSgpO1xufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQStDQyxLQUFELElBQVc7RUFFckRDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7RUFFQSxJQUFJQyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixjQUF4QixDQUFiO0VBQ0EsSUFBSUMsTUFBTSxHQUFHUCxRQUFRLENBQUNNLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWI7RUFFQUQsTUFBTSxDQUFDRyxLQUFQLEdBQWVELE1BQU0sQ0FBQ0UsV0FBdEI7RUFDQUosTUFBTSxDQUFDSyxNQUFQLEdBQWdCSCxNQUFNLENBQUNJLFlBQXZCO0VBRUEsSUFBSUMsR0FBRyxHQUFHUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtFQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsTUFBaEI7RUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQlYsTUFBTSxDQUFDRyxLQUExQixFQUFpQ0gsTUFBTSxDQUFDSyxNQUF4QztFQUVBLE1BQU1NLFlBQVksR0FBRyxJQUFJQyxLQUFKLEVBQXJCO0VBQ0FELFlBQVksQ0FBQ0UsR0FBYixHQUFtQiwyQkFBbkI7O0VBSUEsU0FBU0MsWUFBVCxHQUF5QjtJQUNyQlAsR0FBRyxDQUFDUSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQmYsTUFBTSxDQUFDRyxLQUEzQixFQUFrQ0gsTUFBTSxDQUFDSyxNQUF6QztJQUVBRSxHQUFHLENBQUNTLFNBQUosQ0FBY0wsWUFBZCxFQUE0QixFQUE1QixFQUFnQyxDQUFDLEVBQWpDLEVBQXFDLElBQXJDLEVBQTJDLEdBQTNDO0lBRUFNLHFCQUFxQixDQUFDSCxZQUFELENBQXJCO0VBQ0g7O0VBRURBLFlBQVk7QUFDZixDQTVCRCJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;