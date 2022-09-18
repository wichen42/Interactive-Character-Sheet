document.addEventListener('DOMContentLoaded', (event) => {
    
    console.log("hello world!")

    var canvas = document.getElementById("model-canvas");
    var parent = document.getElementById("character-canvas");
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
})