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
    warriorImage.src = './sprites_sheet/warrior_sprite_sheet.png';
    
    const warriorWidth = 120;
    const warriorHeight = 85;

    let frameX = 0;
    let frameY = 1;
    let frame = 0;

    function idle_animate () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(warriorImage, frameX * warriorWidth, frameY * warriorHeight, warriorWidth, warriorHeight, 0, -50, canvas.width, canvas.height);

        if(frame % 10 === 0) {
            if (frameX < 9) {
                frameX++;
            } else {
                frameX = 0;
            }
        }

        frame++;

        requestAnimationFrame(idle_animate);
    }

    idle_animate();
})
