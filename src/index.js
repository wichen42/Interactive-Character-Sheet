document.addEventListener('DOMContentLoaded', (event) => {
    
    console.log("hello world!")

    var canvas = document.getElementById("model-canvas");
    var parent = document.getElementById("character-canvas");

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let x = 0;

    function animate () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(x, 50, 100, 100);
        x++;
        requestAnimationFrame(animate);
    }

    animate();
})