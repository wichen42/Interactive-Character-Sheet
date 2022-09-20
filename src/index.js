const warriorEquip = require('./scripts/equipment-autocomplete');
const warrior = require('./scripts/warrior');
const thief = require('./scripts/thief')
const mage = require('./scripts/mage');
const archer = require('./scripts/archer');

document.addEventListener('DOMContentLoaded', (event) => {


    var canvas = document.getElementById("model-canvas");
    var parent = document.getElementById("character-canvas");

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    let player = {};
    let stagger = 0;

    let frameX = 0;
    let frameY = 1;
    let frame = 0;

    document.addEventListener('change', function (e) {
        let target = e.target;
        console.log(e)

        switch (target.value) {
            case 'idle':
                console.log(target.value);
                frameY = 0;
                break;
            case 'battle':
                console.log(target.value);
                frameY = 1;
                break;
            case 'death':
                console.log(target.value);
                frameY = 2;
                break;
            case 'warrior':
                console.log(target.value);
                image.src = './sprites_sheet/warrior_sprite_sheet.png';
                player = warrior;
                stagger = 10;
                break;
            case 'thief':
                console.log(target.value);
                image.src = './sprites_sheet/thief_sprite_sheet.png';
                player = thief;
                stagger = 19;
                break;
            case 'mage':
                console.log(target.value);
                image.src = './sprites_sheet/mage_sprite_sheet.png';
                player = mage;
                stagger = 7;
                break;
            case 'archer':
                console.log(target.value);
                image.src = './sprites_sheet/archer_sprite_sheet.png';
                player = archer;
                stagger = 10;
        }
    });

    const test_thief = new Image();
    test_thief.src = './sprites_sheet/thief_sprite_sheet.png';

    function animate () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(image, frameX * player.width, frameY * player.height, player.width, player.height, 0, -50, canvas.width, canvas.height);
        // ctx.drawImage(mage, frameX * 231, frameY * 192, 231, 192, 0, 0, canvas.width, canvas.height)
        if(frame % stagger === 5) {
            if (frameX < stagger-1) {
                frameX++;
            } else {
                frameX = 0;
            }
        }

        frame++;

        requestAnimationFrame(animate);
    }



    console.log(warrior.height)

    animate();
})
