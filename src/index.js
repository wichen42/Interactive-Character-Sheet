const warriorEquip = require('./scripts/equipment-autocomplete');

document.addEventListener('DOMContentLoaded', (event) => {


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

    var selected = document.querySelector('#state-select');

    for(let i = 0; i < selected.length; i++) {
        if (selected.options[i].selected === true) {
            console.log("true")
        } else {
            console.log(`${selected.options[i].value}`);
        }
    }

    function animate () {
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

        requestAnimationFrame(animate);
    }

    let result = document.querySelector('#state-select');
        
    document.body.addEventListener('change', function (e) {
        let target = e.target;
        let message;

        switch (target.value) {
            case 'idle':
                console.log(target.value)
                frameY = 0;
                break;
            case 'battle':
                console.log("battle")
                frameY = 1;
                break;
            case 'rest':
                console.log("rest")
                frameY = 2;
                break;
        }
    });
    let weapons = Object.values(warriorEquip);
    console.log(weapons);

/*     $('#equipment-item').autocomplete(); */
    console.log(warriorEquip);

    animate();
})
