document.addEventListener('DOMContentLoaded', (event) => {
    var canvas = document.getElementById("model-canvas");
    var parent = document.getElementById("cnaracter-canvas");
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
})