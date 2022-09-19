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

eval("const warriorEquip = __webpack_require__(/*! ./scripts/equipment-autocomplete */ \"./src/scripts/equipment-autocomplete.js\");\n\nconst warrior = __webpack_require__(/*! ./scripts/warrior */ \"./src/scripts/warrior.js\");\n\ndocument.addEventListener('DOMContentLoaded', event => {\n  var canvas = document.getElementById(\"model-canvas\");\n  var parent = document.getElementById(\"character-canvas\");\n  canvas.width = parent.offsetWidth;\n  canvas.height = parent.offsetHeight;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  const image = new Image();\n  let player = {};\n  const warriorImage = new Image();\n  warriorImage.src = './sprites_sheet/warrior_sprite_sheet.png';\n  const warriorWidth = 120;\n  const warriorHeight = 85;\n  let frameX = 0;\n  let frameY = 1;\n  let frame = 0;\n  var selected = document.querySelector('#state-select');\n\n  for (let i = 0; i < selected.length; i++) {\n    if (selected.options[i].selected === true) {\n      console.log(\"true\");\n    } else {\n      console.log(`${selected.options[i].value}`);\n    }\n  }\n\n  document.addEventListener('change', function (e) {\n    let target = e.target;\n    console.log(e);\n\n    switch (target.value) {\n      case 'idle':\n        console.log(target.value);\n        frameY = 0;\n        break;\n\n      case 'battle':\n        console.log(\"battle\");\n        frameY = 1;\n        break;\n\n      case 'rest':\n        console.log(\"rest\");\n        frameY = 2;\n        break;\n\n      case 'warrior':\n        console.log(target.value);\n        image.src = './sprites_sheet/warrior_sprite_sheet.png';\n        player = warrior;\n        console.log(warrior);\n        break;\n    }\n  });\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(image, frameX * player.width, frameY * player.height, player.width, player.height, 0, -50, canvas.width, canvas.height);\n\n    if (frame % 10 === 0) {\n      if (frameX < 9) {\n        frameX++;\n      } else {\n        frameX = 0;\n      }\n    }\n\n    frame++;\n    requestAnimationFrame(animate);\n  }\n\n  console.log(warrior.height);\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ2hCeEIsR0FBRyxDQUFDeUIsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JoQyxNQUFNLENBQUNHLEtBQTNCLEVBQWtDSCxNQUFNLENBQUNLLE1BQXpDO0lBRUFFLEdBQUcsQ0FBQzBCLFNBQUosQ0FBY3RCLEtBQWQsRUFBcUJPLE1BQU0sR0FBR0wsTUFBTSxDQUFDVixLQUFyQyxFQUE0Q2dCLE1BQU0sR0FBR04sTUFBTSxDQUFDUixNQUE1RCxFQUFvRVEsTUFBTSxDQUFDVixLQUEzRSxFQUFrRlUsTUFBTSxDQUFDUixNQUF6RixFQUFpRyxDQUFqRyxFQUFvRyxDQUFDLEVBQXJHLEVBQXlHTCxNQUFNLENBQUNHLEtBQWhILEVBQXVISCxNQUFNLENBQUNLLE1BQTlIOztJQUVBLElBQUdlLEtBQUssR0FBRyxFQUFSLEtBQWUsQ0FBbEIsRUFBcUI7TUFDakIsSUFBSUYsTUFBTSxHQUFHLENBQWIsRUFBZ0I7UUFDWkEsTUFBTTtNQUNULENBRkQsTUFFTztRQUNIQSxNQUFNLEdBQUcsQ0FBVDtNQUNIO0lBQ0o7O0lBRURFLEtBQUs7SUFFTGMscUJBQXFCLENBQUNILE9BQUQsQ0FBckI7RUFDSDs7RUFJREwsT0FBTyxDQUFDQyxHQUFSLENBQVkvQixPQUFPLENBQUNTLE1BQXBCO0VBRUEwQixPQUFPO0FBQ1YsQ0F4RkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2FycmlvckVxdWlwID0gcmVxdWlyZSgnLi9zY3JpcHRzL2VxdWlwbWVudC1hdXRvY29tcGxldGUnKTtcbmNvbnN0IHdhcnJpb3IgPSByZXF1aXJlKCcuL3NjcmlwdHMvd2FycmlvcicpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG5cblxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGVsLWNhbnZhc1wiKTtcbiAgICB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFyYWN0ZXItY2FudmFzXCIpO1xuXG4gICAgY2FudmFzLndpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBwYXJlbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JleVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgcGxheWVyID0ge307XG5cblxuICAgIGNvbnN0IHdhcnJpb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHdhcnJpb3JJbWFnZS5zcmMgPSAnLi9zcHJpdGVzX3NoZWV0L3dhcnJpb3Jfc3ByaXRlX3NoZWV0LnBuZyc7XG5cblxuXG4gICAgY29uc3Qgd2FycmlvcldpZHRoID0gMTIwO1xuICAgIGNvbnN0IHdhcnJpb3JIZWlnaHQgPSA4NTtcblxuICAgIGxldCBmcmFtZVggPSAwO1xuICAgIGxldCBmcmFtZVkgPSAxO1xuICAgIGxldCBmcmFtZSA9IDA7XG5cbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdGUtc2VsZWN0Jyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7c2VsZWN0ZWQub3B0aW9uc1tpXS52YWx1ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc29sZS5sb2coZSlcblxuICAgICAgICBzd2l0Y2ggKHRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnaWRsZSc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIGZyYW1lWSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmF0dGxlXCIpXG4gICAgICAgICAgICAgICAgZnJhbWVZID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3QnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdFwiKVxuICAgICAgICAgICAgICAgIGZyYW1lWSA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3YXJyaW9yJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gJy4vc3ByaXRlc19zaGVldC93YXJyaW9yX3Nwcml0ZV9zaGVldC5wbmcnO1xuICAgICAgICAgICAgICAgIHBsYXllciA9IHdhcnJpb3I7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2Fycmlvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUgKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgZnJhbWVYICogcGxheWVyLndpZHRoLCBmcmFtZVkgKiBwbGF5ZXIuaGVpZ2h0LCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIDAsIC01MCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICBpZihmcmFtZSAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoZnJhbWVYIDwgOSkge1xuICAgICAgICAgICAgICAgIGZyYW1lWCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcmFtZVggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnJhbWUrKztcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbnNvbGUubG9nKHdhcnJpb3IuaGVpZ2h0KVxuXG4gICAgYW5pbWF0ZSgpO1xufSlcbiJdLCJuYW1lcyI6WyJ3YXJyaW9yRXF1aXAiLCJyZXF1aXJlIiwid2FycmlvciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiaW1hZ2UiLCJJbWFnZSIsInBsYXllciIsIndhcnJpb3JJbWFnZSIsInNyYyIsIndhcnJpb3JXaWR0aCIsIndhcnJpb3JIZWlnaHQiLCJmcmFtZVgiLCJmcmFtZVkiLCJmcmFtZSIsInNlbGVjdGVkIiwicXVlcnlTZWxlY3RvciIsImkiLCJsZW5ndGgiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiZSIsInRhcmdldCIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/equipment-autocomplete.js":
/*!***********************************************!*\
  !*** ./src/scripts/equipment-autocomplete.js ***!
  \***********************************************/
/***/ (function(module) {

eval("const warriorEquip = {\n  sword: \"shortsword\",\n  mace: \"mace\",\n  greatsword: \"greatsword\",\n  staff: \"staff\"\n};\nmodule.exports = warriorEquip;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lcXVpcG1lbnQtYXV0b2NvbXBsZXRlLmpzLmpzIiwibmFtZXMiOlsid2FycmlvckVxdWlwIiwic3dvcmQiLCJtYWNlIiwiZ3JlYXRzd29yZCIsInN0YWZmIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2VxdWlwbWVudC1hdXRvY29tcGxldGUuanM/NjI3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3YXJyaW9yRXF1aXAgPSB7XG4gICAgc3dvcmQ6IFwic2hvcnRzd29yZFwiLFxuICAgIG1hY2U6IFwibWFjZVwiLFxuICAgIGdyZWF0c3dvcmQ6IFwiZ3JlYXRzd29yZFwiLFxuICAgIHN0YWZmOiBcInN0YWZmXCJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJyaW9yRXF1aXA7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxZQUFZLEdBQUc7RUFDakJDLEtBQUssRUFBRSxZQURVO0VBRWpCQyxJQUFJLEVBQUUsTUFGVztFQUdqQkMsVUFBVSxFQUFFLFlBSEs7RUFJakJDLEtBQUssRUFBRTtBQUpVLENBQXJCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sWUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/equipment-autocomplete.js\n");

/***/ }),

/***/ "./src/scripts/warrior.js":
/*!********************************!*\
  !*** ./src/scripts/warrior.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const {\n  ModulesOption\n} = __webpack_require__(/*! @babel/preset-env/lib/options */ \"./node_modules/@babel/preset-env/lib/options.js\");\n\nconst warrior = {\n  height: 85,\n  width: 120,\n  frame: 1\n};\nmodule.exports = warrior;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93YXJyaW9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU07RUFBRUE7QUFBRixJQUFvQkMsbUJBQU8sQ0FBQyxzRkFBRCxDQUFqQzs7QUFFQSxNQUFNQyxPQUFPLEdBQUc7RUFDWkMsTUFBTSxFQUFFLEVBREk7RUFFWkMsS0FBSyxFQUFFLEdBRks7RUFHWkMsS0FBSyxFQUFFO0FBSEssQ0FBaEI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxPQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy93YXJyaW9yLmpzP2MzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNb2R1bGVzT3B0aW9uIH0gPSByZXF1aXJlKFwiQGJhYmVsL3ByZXNldC1lbnYvbGliL29wdGlvbnNcIilcblxuY29uc3Qgd2FycmlvciA9IHtcbiAgICBoZWlnaHQ6IDg1LFxuICAgIHdpZHRoOiAxMjAsXG4gICAgZnJhbWU6IDEsXG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FycmlvcjsiXSwibmFtZXMiOlsiTW9kdWxlc09wdGlvbiIsInJlcXVpcmUiLCJ3YXJyaW9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJmcmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/warrior.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./node_modules/@babel/preset-env/lib/options.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/preset-env/lib/options.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.UseBuiltInsOption = exports.TopLevelOptions = exports.ModulesOption = void 0;\nconst TopLevelOptions = {\n  bugfixes: \"bugfixes\",\n  configPath: \"configPath\",\n  corejs: \"corejs\",\n  debug: \"debug\",\n  exclude: \"exclude\",\n  forceAllTransforms: \"forceAllTransforms\",\n  ignoreBrowserslistConfig: \"ignoreBrowserslistConfig\",\n  include: \"include\",\n  loose: \"loose\",\n  modules: \"modules\",\n  shippedProposals: \"shippedProposals\",\n  spec: \"spec\",\n  targets: \"targets\",\n  useBuiltIns: \"useBuiltIns\",\n  browserslistEnv: \"browserslistEnv\"\n};\nexports.TopLevelOptions = TopLevelOptions;\nconst ModulesOption = {\n  false: false,\n  auto: \"auto\",\n  amd: \"amd\",\n  commonjs: \"commonjs\",\n  cjs: \"cjs\",\n  systemjs: \"systemjs\",\n  umd: \"umd\"\n};\nexports.ModulesOption = ModulesOption;\nconst UseBuiltInsOption = {\n  false: false,\n  entry: \"entry\",\n  usage: \"usage\"\n};\nexports.UseBuiltInsOption = UseBuiltInsOption;\n\n//# sourceMappingURL=options.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3ByZXNldC1lbnYvbGliL29wdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseUJBQXlCLEdBQUcsdUJBQXVCLEdBQUcscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcHJlc2V0LWVudi9saWIvb3B0aW9ucy5qcz85M2Y5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Vc2VCdWlsdEluc09wdGlvbiA9IGV4cG9ydHMuVG9wTGV2ZWxPcHRpb25zID0gZXhwb3J0cy5Nb2R1bGVzT3B0aW9uID0gdm9pZCAwO1xuY29uc3QgVG9wTGV2ZWxPcHRpb25zID0ge1xuICBidWdmaXhlczogXCJidWdmaXhlc1wiLFxuICBjb25maWdQYXRoOiBcImNvbmZpZ1BhdGhcIixcbiAgY29yZWpzOiBcImNvcmVqc1wiLFxuICBkZWJ1ZzogXCJkZWJ1Z1wiLFxuICBleGNsdWRlOiBcImV4Y2x1ZGVcIixcbiAgZm9yY2VBbGxUcmFuc2Zvcm1zOiBcImZvcmNlQWxsVHJhbnNmb3Jtc1wiLFxuICBpZ25vcmVCcm93c2Vyc2xpc3RDb25maWc6IFwiaWdub3JlQnJvd3NlcnNsaXN0Q29uZmlnXCIsXG4gIGluY2x1ZGU6IFwiaW5jbHVkZVwiLFxuICBsb29zZTogXCJsb29zZVwiLFxuICBtb2R1bGVzOiBcIm1vZHVsZXNcIixcbiAgc2hpcHBlZFByb3Bvc2FsczogXCJzaGlwcGVkUHJvcG9zYWxzXCIsXG4gIHNwZWM6IFwic3BlY1wiLFxuICB0YXJnZXRzOiBcInRhcmdldHNcIixcbiAgdXNlQnVpbHRJbnM6IFwidXNlQnVpbHRJbnNcIixcbiAgYnJvd3NlcnNsaXN0RW52OiBcImJyb3dzZXJzbGlzdEVudlwiXG59O1xuZXhwb3J0cy5Ub3BMZXZlbE9wdGlvbnMgPSBUb3BMZXZlbE9wdGlvbnM7XG5jb25zdCBNb2R1bGVzT3B0aW9uID0ge1xuICBmYWxzZTogZmFsc2UsXG4gIGF1dG86IFwiYXV0b1wiLFxuICBhbWQ6IFwiYW1kXCIsXG4gIGNvbW1vbmpzOiBcImNvbW1vbmpzXCIsXG4gIGNqczogXCJjanNcIixcbiAgc3lzdGVtanM6IFwic3lzdGVtanNcIixcbiAgdW1kOiBcInVtZFwiXG59O1xuZXhwb3J0cy5Nb2R1bGVzT3B0aW9uID0gTW9kdWxlc09wdGlvbjtcbmNvbnN0IFVzZUJ1aWx0SW5zT3B0aW9uID0ge1xuICBmYWxzZTogZmFsc2UsXG4gIGVudHJ5OiBcImVudHJ5XCIsXG4gIHVzYWdlOiBcInVzYWdlXCJcbn07XG5leHBvcnRzLlVzZUJ1aWx0SW5zT3B0aW9uID0gVXNlQnVpbHRJbnNPcHRpb247XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wdGlvbnMuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/preset-env/lib/options.js\n");

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