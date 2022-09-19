document.addEventListener('DOMContentLoaded', (event) => {
    
    console.log("hello world!")

    var canvas = document.getElementById("model-canvas");
    var parent = document.getElementById("character-canvas");

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const warriorImage = new Image();
    warriorImage.src = './sprites_sheet/_Idle.png';
    


    function idle_animate () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(warriorImage, 80, -30, 4100, 300 );

        requestAnimationFrame(idle_animate);
    }

    idle_animate();
})
