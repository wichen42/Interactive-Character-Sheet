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

eval("document.addEventListener('DOMContentLoaded', event => {\n  var canvas = document.getElementById(\"model-canvas\");\n  var parent = document.getElementById(\"character-canvas\");\n  canvas.width = parent.offsetWidth;\n  canvas.height = parent.offsetHeight;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  const warriorImage = new Image();\n  warriorImage.src = './sprites_sheet/warrior_sprite_sheet.png';\n  const warriorWidth = 120;\n  const warriorHeight = 85;\n  let frameX = 0;\n  let frameY = 1;\n  let frame = 0;\n  var selected = document.querySelector('#state-select');\n\n  for (let i = 0; i < selected.length; i++) {\n    if (selected.options[i].selected === true) {\n      console.log(\"true\");\n    } else {\n      console.log(`${selected.options[i].value}`);\n    }\n  }\n\n  function idle_animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(warriorImage, frameX * warriorWidth, frameY * warriorHeight, warriorWidth, warriorHeight, 0, -50, canvas.width, canvas.height);\n\n    if (frame % 10 === 0) {\n      if (frameX < 9) {\n        frameX++;\n      } else {\n        frameX = 0;\n      }\n    }\n\n    frame++;\n    requestAnimationFrame(idle_animate);\n  }\n\n  let result = document.querySelector('#state-select');\n  document.body.addEventListener('change', function (e) {\n    let target = e.target;\n    let message;\n\n    switch (target.value) {\n      case 'idle':\n        console.log(target.value);\n        frameY = 0;\n        break;\n\n      case 'battle':\n        console.log(\"battle\");\n        frameY = 1;\n        break;\n\n      case 'rest':\n        console.log(\"rest\");\n        frameY = 2;\n        break;\n    }\n  });\n  idle_animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndhcnJpb3JJbWFnZSIsIkltYWdlIiwic3JjIiwid2FycmlvcldpZHRoIiwid2FycmlvckhlaWdodCIsImZyYW1lWCIsImZyYW1lWSIsImZyYW1lIiwic2VsZWN0ZWQiLCJxdWVyeVNlbGVjdG9yIiwiaSIsImxlbmd0aCIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJpZGxlX2FuaW1hdGUiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXN1bHQiLCJib2R5IiwiZSIsInRhcmdldCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG5cblxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGVsLWNhbnZhc1wiKTtcbiAgICB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFyYWN0ZXItY2FudmFzXCIpO1xuXG4gICAgY2FudmFzLndpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JleVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29uc3Qgd2FycmlvckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgd2FycmlvckltYWdlLnNyYyA9ICcuL3Nwcml0ZXNfc2hlZXQvd2Fycmlvcl9zcHJpdGVfc2hlZXQucG5nJztcbiAgICBcbiAgICBjb25zdCB3YXJyaW9yV2lkdGggPSAxMjA7XG4gICAgY29uc3Qgd2FycmlvckhlaWdodCA9IDg1O1xuXG4gICAgbGV0IGZyYW1lWCA9IDA7XG4gICAgbGV0IGZyYW1lWSA9IDE7XG4gICAgbGV0IGZyYW1lID0gMDtcblxuICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0ZS1zZWxlY3QnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZWN0ZWQub3B0aW9uc1tpXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzZWxlY3RlZC5vcHRpb25zW2ldLnZhbHVlfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaWRsZV9hbmltYXRlICgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uod2FycmlvckltYWdlLCBmcmFtZVggKiB3YXJyaW9yV2lkdGgsIGZyYW1lWSAqIHdhcnJpb3JIZWlnaHQsIHdhcnJpb3JXaWR0aCwgd2FycmlvckhlaWdodCwgMCwgLTUwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGlmKGZyYW1lICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChmcmFtZVggPCA5KSB7XG4gICAgICAgICAgICAgICAgZnJhbWVYKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZyYW1lWCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmcmFtZSsrO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShpZGxlX2FuaW1hdGUpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdGUtc2VsZWN0Jyk7XG4gICAgICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICBzd2l0Y2ggKHRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnaWRsZSc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIGZyYW1lWSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmF0dGxlXCIpXG4gICAgICAgICAgICAgICAgZnJhbWVZID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3QnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdFwiKVxuICAgICAgICAgICAgICAgIGZyYW1lWSA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcblxuICAgIGlkbGVfYW5pbWF0ZSgpO1xufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQStDQyxLQUFELElBQVc7RUFH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\n//# sourceURL=webpack-internal:///./src/index.js\n");

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