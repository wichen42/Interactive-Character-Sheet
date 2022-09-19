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
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const warriorEquip = __webpack_require__(/*! ./scripts/equipment-autocomplete */ \"./src/scripts/equipment-autocomplete.js\");\n\ndocument.addEventListener('DOMContentLoaded', event => {\n  var canvas = document.getElementById(\"model-canvas\");\n  var parent = document.getElementById(\"character-canvas\");\n  canvas.width = parent.offsetWidth;\n  canvas.height = parent.offsetHeight;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  const warriorImage = new Image();\n  warriorImage.src = './sprites_sheet/warrior_sprite_sheet.png';\n  const warriorWidth = 120;\n  const warriorHeight = 85;\n  let frameX = 0;\n  let frameY = 1;\n  let frame = 0;\n  var selected = document.querySelector('#state-select');\n\n  for (let i = 0; i < selected.length; i++) {\n    if (selected.options[i].selected === true) {\n      console.log(\"true\");\n    } else {\n      console.log(`${selected.options[i].value}`);\n    }\n  }\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(warriorImage, frameX * warriorWidth, frameY * warriorHeight, warriorWidth, warriorHeight, 0, -50, canvas.width, canvas.height);\n\n    if (frame % 10 === 0) {\n      if (frameX < 9) {\n        frameX++;\n      } else {\n        frameX = 0;\n      }\n    }\n\n    frame++;\n    requestAnimationFrame(animate);\n  }\n\n  let result = document.querySelector('#state-select');\n  document.body.addEventListener('change', function (e) {\n    let target = e.target;\n    let message;\n\n    switch (target.value) {\n      case 'idle':\n        console.log(target.value);\n        frameY = 0;\n        break;\n\n      case 'battle':\n        console.log(\"battle\");\n        frameY = 1;\n        break;\n\n      case 'rest':\n        console.log(\"rest\");\n        frameY = 2;\n        break;\n    }\n  });\n  let weapons = Object.values(warriorEquip);\n  console.log(weapons);\n  /*     $('#equipment-item').autocomplete(); */\n\n  console.log(warriorEquip);\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssTUFBTDtRQUNJRixPQUFPLENBQUNDLEdBQVIsQ0FBWVMsTUFBTSxDQUFDUixLQUFuQjtRQUNBVCxNQUFNLEdBQUcsQ0FBVDtRQUNBOztNQUNKLEtBQUssUUFBTDtRQUNJTyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO1FBQ0FSLE1BQU0sR0FBRyxDQUFUO1FBQ0E7O01BQ0osS0FBSyxNQUFMO1FBQ0lPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7UUFDQVIsTUFBTSxHQUFHLENBQVQ7UUFDQTtJQVpSO0VBY0gsQ0FsQkQ7RUFtQkEsSUFBSW1CLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMzQyxZQUFkLENBQWQ7RUFDQTZCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxPQUFaO0VBRUo7O0VBQ0laLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOUIsWUFBWjtFQUVBZ0MsT0FBTztBQUNWLENBL0VEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdhcnJpb3JFcXVpcCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9lcXVpcG1lbnQtYXV0b2NvbXBsZXRlJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcblxuXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kZWwtY2FudmFzXCIpO1xuICAgIHZhciBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJhY3Rlci1jYW52YXNcIik7XG5cbiAgICBjYW52YXMud2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHBhcmVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJncmV5XCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBjb25zdCB3YXJyaW9ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB3YXJyaW9ySW1hZ2Uuc3JjID0gJy4vc3ByaXRlc19zaGVldC93YXJyaW9yX3Nwcml0ZV9zaGVldC5wbmcnO1xuICAgIFxuICAgIGNvbnN0IHdhcnJpb3JXaWR0aCA9IDEyMDtcbiAgICBjb25zdCB3YXJyaW9ySGVpZ2h0ID0gODU7XG5cbiAgICBsZXQgZnJhbWVYID0gMDtcbiAgICBsZXQgZnJhbWVZID0gMTtcbiAgICBsZXQgZnJhbWUgPSAwO1xuXG4gICAgdmFyIHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRlLXNlbGVjdCcpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZC5vcHRpb25zW2ldLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3NlbGVjdGVkLm9wdGlvbnNbaV0udmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlICgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2Uod2FycmlvckltYWdlLCBmcmFtZVggKiB3YXJyaW9yV2lkdGgsIGZyYW1lWSAqIHdhcnJpb3JIZWlnaHQsIHdhcnJpb3JXaWR0aCwgd2FycmlvckhlaWdodCwgMCwgLTUwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGlmKGZyYW1lICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChmcmFtZVggPCA5KSB7XG4gICAgICAgICAgICAgICAgZnJhbWVYKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZyYW1lWCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmcmFtZSsrO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRlLXNlbGVjdCcpO1xuICAgICAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgc3dpdGNoICh0YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2lkbGUnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICBmcmFtZVkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmF0dGxlJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhdHRsZVwiKVxuICAgICAgICAgICAgICAgIGZyYW1lWSA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN0JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3RcIilcbiAgICAgICAgICAgICAgICBmcmFtZVkgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHdlYXBvbnMgPSBPYmplY3QudmFsdWVzKHdhcnJpb3JFcXVpcCk7XG4gICAgY29uc29sZS5sb2cod2VhcG9ucyk7XG5cbi8qICAgICAkKCcjZXF1aXBtZW50LWl0ZW0nKS5hdXRvY29tcGxldGUoKTsgKi9cbiAgICBjb25zb2xlLmxvZyh3YXJyaW9yRXF1aXApO1xuXG4gICAgYW5pbWF0ZSgpO1xufSlcbiJdLCJuYW1lcyI6WyJ3YXJyaW9yRXF1aXAiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3YXJyaW9ySW1hZ2UiLCJJbWFnZSIsInNyYyIsIndhcnJpb3JXaWR0aCIsIndhcnJpb3JIZWlnaHQiLCJmcmFtZVgiLCJmcmFtZVkiLCJmcmFtZSIsInNlbGVjdGVkIiwicXVlcnlTZWxlY3RvciIsImkiLCJsZW5ndGgiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc3VsdCIsImJvZHkiLCJlIiwidGFyZ2V0IiwibWVzc2FnZSIsIndlYXBvbnMiLCJPYmplY3QiLCJ2YWx1ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/equipment-autocomplete.js":
/*!***********************************************!*\
  !*** ./src/scripts/equipment-autocomplete.js ***!
  \***********************************************/
/***/ (function(module) {

eval("const warriorEquip = {\n  sword: \"shortsword\",\n  mace: \"mace\",\n  greatsword: \"greatsword\",\n  staff: \"staff\"\n};\nmodule.exports = warriorEquip;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lcXVpcG1lbnQtYXV0b2NvbXBsZXRlLmpzLmpzIiwibmFtZXMiOlsid2FycmlvckVxdWlwIiwic3dvcmQiLCJtYWNlIiwiZ3JlYXRzd29yZCIsInN0YWZmIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2VxdWlwbWVudC1hdXRvY29tcGxldGUuanM/NjI3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3YXJyaW9yRXF1aXAgPSB7XG4gICAgc3dvcmQ6IFwic2hvcnRzd29yZFwiLFxuICAgIG1hY2U6IFwibWFjZVwiLFxuICAgIGdyZWF0c3dvcmQ6IFwiZ3JlYXRzd29yZFwiLFxuICAgIHN0YWZmOiBcInN0YWZmXCJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJyaW9yRXF1aXA7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxZQUFZLEdBQUc7RUFDakJDLEtBQUssRUFBRSxZQURVO0VBRWpCQyxJQUFJLEVBQUUsTUFGVztFQUdqQkMsVUFBVSxFQUFFLFlBSEs7RUFJakJDLEtBQUssRUFBRTtBQUpVLENBQXJCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sWUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/equipment-autocomplete.js\n");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;