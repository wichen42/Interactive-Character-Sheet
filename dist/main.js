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

eval("const warriorEquip = __webpack_require__(/*! ./scripts/equipment-autocomplete */ \"./src/scripts/equipment-autocomplete.js\");\n\nconst warrior = __webpack_require__(/*! ./scripts/warrior */ \"./src/scripts/warrior.js\");\n\nconst thief = __webpack_require__(/*! ./scripts/thief */ \"./src/scripts/thief.js\");\n\ndocument.addEventListener('DOMContentLoaded', event => {\n  var canvas = document.getElementById(\"model-canvas\");\n  var parent = document.getElementById(\"character-canvas\");\n  canvas.width = parent.offsetWidth;\n  canvas.height = parent.offsetHeight;\n  var ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"grey\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  const image = new Image();\n  let player = {};\n  let stagger = 0;\n  let frameX = 0;\n  let frameY = 1;\n  let frame = 0;\n  document.addEventListener('change', function (e) {\n    let target = e.target;\n    console.log(e);\n\n    switch (target.value) {\n      case 'idle':\n        console.log(target.value);\n        frameY = 0;\n        break;\n\n      case 'battle':\n        console.log(\"battle\");\n        frameY = 1;\n        break;\n\n      case 'rest':\n        console.log(\"rest\");\n        frameY = 2;\n        break;\n\n      case 'warrior':\n        console.log(target.value);\n        image.src = './sprites_sheet/warrior_sprite_sheet.png';\n        player = warrior;\n        stagger = 10;\n        break;\n\n      case 'thief':\n        console.log(target.value);\n        image.src = './sprites_sheet/thief_sprite_sheet.png';\n        player = thief;\n        stagger = 16;\n        break;\n    }\n  });\n  const test_thief = new Image();\n  test_thief.src = './sprites_sheet/thief_sprite_sheet.png';\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(image, frameX * player.width, frameY * player.height, player.width, player.height, 0, -50, canvas.width, canvas.height);\n\n    if (frame % stagger === 0) {\n      if (frameX < stagger - 1) {\n        frameX++;\n      } else {\n        frameX = 0;\n      }\n    }\n\n    frame++;\n    requestAnimationFrame(animate);\n  }\n\n  console.log(warrior.height);\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLGlGQUFELENBQTVCOztBQUNBLE1BQU1DLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQyxtREFBRCxDQUF2Qjs7QUFDQSxNQUFNRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsK0NBQUQsQ0FBckI7O0FBRUFHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQStDQyxLQUFELElBQVc7RUFHckQsSUFBSUMsTUFBTSxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBYjtFQUNBLElBQUlDLE1BQU0sR0FBR0wsUUFBUSxDQUFDSSxjQUFULENBQXdCLGtCQUF4QixDQUFiO0VBRUFELE1BQU0sQ0FBQ0csS0FBUCxHQUFlRCxNQUFNLENBQUNFLFdBQXRCO0VBQ0FKLE1BQU0sQ0FBQ0ssTUFBUCxHQUFnQkgsTUFBTSxDQUFDSSxZQUF2QjtFQUVBLElBQUlDLEdBQUcsR0FBR1AsTUFBTSxDQUFDUSxVQUFQLENBQWtCLElBQWxCLENBQVY7RUFDQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLE1BQWhCO0VBQ0FGLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJWLE1BQU0sQ0FBQ0csS0FBMUIsRUFBaUNILE1BQU0sQ0FBQ0ssTUFBeEM7RUFFQSxNQUFNTSxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkO0VBQ0EsSUFBSUMsTUFBTSxHQUFHLEVBQWI7RUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FBZDtFQUVBLElBQUlDLE1BQU0sR0FBRyxDQUFiO0VBQ0EsSUFBSUMsTUFBTSxHQUFHLENBQWI7RUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtFQUVBcEIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFVb0IsQ0FBVixFQUFhO0lBQzdDLElBQUlDLE1BQU0sR0FBR0QsQ0FBQyxDQUFDQyxNQUFmO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaOztJQUVBLFFBQVFDLE1BQU0sQ0FBQ0csS0FBZjtNQUNJLEtBQUssTUFBTDtRQUNJRixPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDRyxLQUFuQjtRQUNBTixNQUFNLEdBQUcsQ0FBVDtRQUNBOztNQUNKLEtBQUssUUFBTDtRQUNJSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO1FBQ0FMLE1BQU0sR0FBRyxDQUFUO1FBQ0E7O01BQ0osS0FBSyxNQUFMO1FBQ0lJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7UUFDQUwsTUFBTSxHQUFHLENBQVQ7UUFDQTs7TUFDSixLQUFLLFNBQUw7UUFDSUksT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBbkI7UUFDQVgsS0FBSyxDQUFDWSxHQUFOLEdBQVksMENBQVo7UUFDQVYsTUFBTSxHQUFHbEIsT0FBVDtRQUNBbUIsT0FBTyxHQUFHLEVBQVY7UUFDQTs7TUFDSixLQUFLLE9BQUw7UUFDSU0sT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBbkI7UUFDQVgsS0FBSyxDQUFDWSxHQUFOLEdBQVksd0NBQVo7UUFDQVYsTUFBTSxHQUFHakIsS0FBVDtRQUNBa0IsT0FBTyxHQUFHLEVBQVY7UUFDQTtJQXhCUjtFQTBCSCxDQTlCRDtFQWdDQSxNQUFNVSxVQUFVLEdBQUcsSUFBSVosS0FBSixFQUFuQjtFQUNBWSxVQUFVLENBQUNELEdBQVgsR0FBaUIsd0NBQWpCOztFQUVBLFNBQVNFLE9BQVQsR0FBb0I7SUFDaEJsQixHQUFHLENBQUNtQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjFCLE1BQU0sQ0FBQ0csS0FBM0IsRUFBa0NILE1BQU0sQ0FBQ0ssTUFBekM7SUFFQUUsR0FBRyxDQUFDb0IsU0FBSixDQUFjaEIsS0FBZCxFQUFxQkksTUFBTSxHQUFHRixNQUFNLENBQUNWLEtBQXJDLEVBQTRDYSxNQUFNLEdBQUdILE1BQU0sQ0FBQ1IsTUFBNUQsRUFBb0VRLE1BQU0sQ0FBQ1YsS0FBM0UsRUFBa0ZVLE1BQU0sQ0FBQ1IsTUFBekYsRUFBaUcsQ0FBakcsRUFBb0csQ0FBQyxFQUFyRyxFQUF5R0wsTUFBTSxDQUFDRyxLQUFoSCxFQUF1SEgsTUFBTSxDQUFDSyxNQUE5SDs7SUFFQSxJQUFHWSxLQUFLLEdBQUdILE9BQVIsS0FBb0IsQ0FBdkIsRUFBMEI7TUFDdEIsSUFBSUMsTUFBTSxHQUFHRCxPQUFPLEdBQUMsQ0FBckIsRUFBd0I7UUFDcEJDLE1BQU07TUFDVCxDQUZELE1BRU87UUFDSEEsTUFBTSxHQUFHLENBQVQ7TUFDSDtJQUNKOztJQUVERSxLQUFLO0lBRUxXLHFCQUFxQixDQUFDSCxPQUFELENBQXJCO0VBQ0g7O0VBSURMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMUIsT0FBTyxDQUFDVSxNQUFwQjtFQUVBb0IsT0FBTztBQUNWLENBL0VEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdhcnJpb3JFcXVpcCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9lcXVpcG1lbnQtYXV0b2NvbXBsZXRlJyk7XG5jb25zdCB3YXJyaW9yID0gcmVxdWlyZSgnLi9zY3JpcHRzL3dhcnJpb3InKTtcbmNvbnN0IHRoaWVmID0gcmVxdWlyZSgnLi9zY3JpcHRzL3RoaWVmJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXG5cbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RlbC1jYW52YXNcIik7XG4gICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcmFjdGVyLWNhbnZhc1wiKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IHBsYXllciA9IHt9O1xuICAgIGxldCBzdGFnZ2VyID0gMDtcblxuICAgIGxldCBmcmFtZVggPSAwO1xuICAgIGxldCBmcmFtZVkgPSAxO1xuICAgIGxldCBmcmFtZSA9IDA7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG5cbiAgICAgICAgc3dpdGNoICh0YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2lkbGUnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgZnJhbWVZID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JhdHRsZSc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXR0bGVcIik7XG4gICAgICAgICAgICAgICAgZnJhbWVZID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3QnOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdFwiKTtcbiAgICAgICAgICAgICAgICBmcmFtZVkgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd2Fycmlvcic6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnLi9zcHJpdGVzX3NoZWV0L3dhcnJpb3Jfc3ByaXRlX3NoZWV0LnBuZyc7XG4gICAgICAgICAgICAgICAgcGxheWVyID0gd2FycmlvcjtcbiAgICAgICAgICAgICAgICBzdGFnZ2VyID0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aGllZic6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnLi9zcHJpdGVzX3NoZWV0L3RoaWVmX3Nwcml0ZV9zaGVldC5wbmcnO1xuICAgICAgICAgICAgICAgIHBsYXllciA9IHRoaWVmO1xuICAgICAgICAgICAgICAgIHN0YWdnZXIgPSAxNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdGVzdF90aGllZiA9IG5ldyBJbWFnZSgpO1xuICAgIHRlc3RfdGhpZWYuc3JjID0gJy4vc3ByaXRlc19zaGVldC90aGllZl9zcHJpdGVfc2hlZXQucG5nJztcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUgKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgZnJhbWVYICogcGxheWVyLndpZHRoLCBmcmFtZVkgKiBwbGF5ZXIuaGVpZ2h0LCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIDAsIC01MCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICBpZihmcmFtZSAlIHN0YWdnZXIgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChmcmFtZVggPCBzdGFnZ2VyLTEpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJhbWVYID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZyYW1lKys7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb25zb2xlLmxvZyh3YXJyaW9yLmhlaWdodClcblxuICAgIGFuaW1hdGUoKTtcbn0pXG4iXSwibmFtZXMiOlsid2FycmlvckVxdWlwIiwicmVxdWlyZSIsIndhcnJpb3IiLCJ0aGllZiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiaW1hZ2UiLCJJbWFnZSIsInBsYXllciIsInN0YWdnZXIiLCJmcmFtZVgiLCJmcmFtZVkiLCJmcmFtZSIsImUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzcmMiLCJ0ZXN0X3RoaWVmIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/equipment-autocomplete.js":
/*!***********************************************!*\
  !*** ./src/scripts/equipment-autocomplete.js ***!
  \***********************************************/
/***/ (function(module) {

eval("const warriorEquip = {\n  sword: \"shortsword\",\n  mace: \"mace\",\n  greatsword: \"greatsword\",\n  staff: \"staff\"\n};\nmodule.exports = warriorEquip;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lcXVpcG1lbnQtYXV0b2NvbXBsZXRlLmpzLmpzIiwibmFtZXMiOlsid2FycmlvckVxdWlwIiwic3dvcmQiLCJtYWNlIiwiZ3JlYXRzd29yZCIsInN0YWZmIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2VxdWlwbWVudC1hdXRvY29tcGxldGUuanM/NjI3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3YXJyaW9yRXF1aXAgPSB7XG4gICAgc3dvcmQ6IFwic2hvcnRzd29yZFwiLFxuICAgIG1hY2U6IFwibWFjZVwiLFxuICAgIGdyZWF0c3dvcmQ6IFwiZ3JlYXRzd29yZFwiLFxuICAgIHN0YWZmOiBcInN0YWZmXCJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJyaW9yRXF1aXA7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxZQUFZLEdBQUc7RUFDakJDLEtBQUssRUFBRSxZQURVO0VBRWpCQyxJQUFJLEVBQUUsTUFGVztFQUdqQkMsVUFBVSxFQUFFLFlBSEs7RUFJakJDLEtBQUssRUFBRTtBQUpVLENBQXJCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sWUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/equipment-autocomplete.js\n");

/***/ }),

/***/ "./src/scripts/thief.js":
/*!******************************!*\
  !*** ./src/scripts/thief.js ***!
  \******************************/
/***/ (function(module) {

eval("const thief = {\n  height: 150,\n  width: 275\n};\nmodule.exports = thief;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aGllZi5qcy5qcyIsIm5hbWVzIjpbInRoaWVmIiwiaGVpZ2h0Iiwid2lkdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvdGhpZWYuanM/MjY5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aGllZiA9IHtcbiAgICBoZWlnaHQ6IDE1MCxcbiAgICB3aWR0aDogMjc1XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhpZWY7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxLQUFLLEdBQUc7RUFDVkMsTUFBTSxFQUFFLEdBREU7RUFFVkMsS0FBSyxFQUFFO0FBRkcsQ0FBZDtBQUtBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLEtBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/thief.js\n");

/***/ }),

/***/ "./src/scripts/warrior.js":
/*!********************************!*\
  !*** ./src/scripts/warrior.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const {\n  ModulesOption\n} = __webpack_require__(/*! @babel/preset-env/lib/options */ \"./node_modules/@babel/preset-env/lib/options.js\");\n\nconst warrior = {\n  height: 85,\n  width: 120\n};\nmodule.exports = warrior;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93YXJyaW9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU07RUFBRUE7QUFBRixJQUFvQkMsbUJBQU8sQ0FBQyxzRkFBRCxDQUFqQzs7QUFFQSxNQUFNQyxPQUFPLEdBQUc7RUFDWkMsTUFBTSxFQUFFLEVBREk7RUFFWkMsS0FBSyxFQUFFO0FBRkssQ0FBaEI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixPQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy93YXJyaW9yLmpzP2MzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNb2R1bGVzT3B0aW9uIH0gPSByZXF1aXJlKFwiQGJhYmVsL3ByZXNldC1lbnYvbGliL29wdGlvbnNcIilcblxuY29uc3Qgd2FycmlvciA9IHtcbiAgICBoZWlnaHQ6IDg1LFxuICAgIHdpZHRoOiAxMjAsXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJyaW9yOyJdLCJuYW1lcyI6WyJNb2R1bGVzT3B0aW9uIiwicmVxdWlyZSIsIndhcnJpb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/warrior.js\n");

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