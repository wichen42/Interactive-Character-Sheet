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

eval("const warriorEquip = __webpack_require__(/*! ./scripts/equipment-autocomplete */ \"./src/scripts/equipment-autocomplete.js\");\n\nconst warrior = __webpack_require__(/*! ./scripts/warrior */ \"./src/scripts/warrior.js\");\n\ndocument.addEventListener('DOMContentLoaded', event => {\n  var canvas = document.getElementById(\"model-canvas\");\n  var parent = document.getElementById(\"character-canvas\");\n  canvas.width = parent.offsetWidth;\n  canvas.height = parent.offsetHeight;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  const image = new Image();\n  let player = {};\n  let stagger = 0;\n  const warriorImage = new Image();\n  warriorImage.src = './sprites_sheet/warrior_sprite_sheet.png';\n  const warriorWidth = 120;\n  const warriorHeight = 85;\n  let frameX = 0;\n  let frameY = 1;\n  let frame = 0;\n  var selected = document.querySelector('#state-select');\n\n  for (let i = 0; i < selected.length; i++) {\n    if (selected.options[i].selected === true) {\n      console.log(\"true\");\n    } else {\n      console.log(`${selected.options[i].value}`);\n    }\n  }\n\n  document.addEventListener('change', function (e) {\n    let target = e.target;\n    console.log(e);\n\n    switch (target.value) {\n      case 'idle':\n        console.log(target.value);\n        frameY = 0;\n        break;\n\n      case 'battle':\n        console.log(\"battle\");\n        frameY = 1;\n        break;\n\n      case 'rest':\n        console.log(\"rest\");\n        frameY = 2;\n        break;\n\n      case 'warrior':\n        console.log(target.value);\n        image.src = './sprites_sheet/warrior_sprite_sheet.png';\n        player = warrior;\n        console.log(warrior);\n        stagger = 10;\n        break;\n    }\n  });\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(image, frameX * player.width, frameY * player.height, player.width, player.height, 0, -50, canvas.width, canvas.height);\n\n    if (frame % stagger === 0) {\n      if (frameX < stagger - 1) {\n        frameX++;\n      } else {\n        frameX = 0;\n      }\n    }\n\n    frame++;\n    requestAnimationFrame(animate);\n  }\n\n  console.log(warrior.height);\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0E7SUFuQlI7RUFxQkgsQ0F6QkQ7O0VBMkJBLFNBQVNrQixPQUFULEdBQW9CO0lBQ2hCekIsR0FBRyxDQUFDMEIsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JqQyxNQUFNLENBQUNHLEtBQTNCLEVBQWtDSCxNQUFNLENBQUNLLE1BQXpDO0lBRUFFLEdBQUcsQ0FBQzJCLFNBQUosQ0FBY3ZCLEtBQWQsRUFBcUJRLE1BQU0sR0FBR04sTUFBTSxDQUFDVixLQUFyQyxFQUE0Q2lCLE1BQU0sR0FBR1AsTUFBTSxDQUFDUixNQUE1RCxFQUFvRVEsTUFBTSxDQUFDVixLQUEzRSxFQUFrRlUsTUFBTSxDQUFDUixNQUF6RixFQUFpRyxDQUFqRyxFQUFvRyxDQUFDLEVBQXJHLEVBQXlHTCxNQUFNLENBQUNHLEtBQWhILEVBQXVISCxNQUFNLENBQUNLLE1BQTlIOztJQUVBLElBQUdnQixLQUFLLEdBQUdQLE9BQVIsS0FBb0IsQ0FBdkIsRUFBMEI7TUFDdEIsSUFBSUssTUFBTSxHQUFHTCxPQUFPLEdBQUMsQ0FBckIsRUFBd0I7UUFDcEJLLE1BQU07TUFDVCxDQUZELE1BRU87UUFDSEEsTUFBTSxHQUFHLENBQVQ7TUFDSDtJQUNKOztJQUVERSxLQUFLO0lBRUxjLHFCQUFxQixDQUFDSCxPQUFELENBQXJCO0VBQ0g7O0VBSURMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEMsT0FBTyxDQUFDUyxNQUFwQjtFQUVBMkIsT0FBTztBQUNWLENBMUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdhcnJpb3JFcXVpcCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9lcXVpcG1lbnQtYXV0b2NvbXBsZXRlJyk7XG5jb25zdCB3YXJyaW9yID0gcmVxdWlyZSgnLi9zY3JpcHRzL3dhcnJpb3InKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXG5cbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RlbC1jYW52YXNcIik7XG4gICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcmFjdGVyLWNhbnZhc1wiKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IHBsYXllciA9IHt9O1xuICAgIGxldCBzdGFnZ2VyID0gMDtcblxuXG4gICAgY29uc3Qgd2FycmlvckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgd2FycmlvckltYWdlLnNyYyA9ICcuL3Nwcml0ZXNfc2hlZXQvd2Fycmlvcl9zcHJpdGVfc2hlZXQucG5nJztcblxuXG5cbiAgICBjb25zdCB3YXJyaW9yV2lkdGggPSAxMjA7XG4gICAgY29uc3Qgd2FycmlvckhlaWdodCA9IDg1O1xuXG4gICAgbGV0IGZyYW1lWCA9IDA7XG4gICAgbGV0IGZyYW1lWSA9IDE7XG4gICAgbGV0IGZyYW1lID0gMDtcblxuICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0ZS1zZWxlY3QnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZWN0ZWQub3B0aW9uc1tpXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzZWxlY3RlZC5vcHRpb25zW2ldLnZhbHVlfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuXG4gICAgICAgIHN3aXRjaCAodGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdpZGxlJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgZnJhbWVZID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JhdHRsZSc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXR0bGVcIilcbiAgICAgICAgICAgICAgICBmcmFtZVkgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVzdCc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN0XCIpXG4gICAgICAgICAgICAgICAgZnJhbWVZID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dhcnJpb3InOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnLi9zcHJpdGVzX3NoZWV0L3dhcnJpb3Jfc3ByaXRlX3NoZWV0LnBuZyc7XG4gICAgICAgICAgICAgICAgcGxheWVyID0gd2FycmlvcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3YXJyaW9yKTtcbiAgICAgICAgICAgICAgICBzdGFnZ2VyID0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUgKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgZnJhbWVYICogcGxheWVyLndpZHRoLCBmcmFtZVkgKiBwbGF5ZXIuaGVpZ2h0LCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIDAsIC01MCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICBpZihmcmFtZSAlIHN0YWdnZXIgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChmcmFtZVggPCBzdGFnZ2VyLTEpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJhbWVYID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZyYW1lKys7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb25zb2xlLmxvZyh3YXJyaW9yLmhlaWdodClcblxuICAgIGFuaW1hdGUoKTtcbn0pXG4iXSwibmFtZXMiOlsid2FycmlvckVxdWlwIiwicmVxdWlyZSIsIndhcnJpb3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImltYWdlIiwiSW1hZ2UiLCJwbGF5ZXIiLCJzdGFnZ2VyIiwid2FycmlvckltYWdlIiwic3JjIiwid2FycmlvcldpZHRoIiwid2FycmlvckhlaWdodCIsImZyYW1lWCIsImZyYW1lWSIsImZyYW1lIiwic2VsZWN0ZWQiLCJxdWVyeVNlbGVjdG9yIiwiaSIsImxlbmd0aCIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJlIiwidGFyZ2V0IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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