const warriorEquip = require('./scripts/equipment-autocomplete');
const warrior = require('./scripts/warrior');
const thief = require('./scripts/thief')
const mage = require('./scripts/mage');
const archer = require('./scripts/archer');
const { async } = require('regenerator-runtime');
const tooltipHover = require('./scripts/hover');

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


    var item = document.getElementById("hp-label");
    item.addEventListener("mouseover", func, false);
    item.addEventListener("mouseout", func1, false);

    function func () {
    
        item.textContent = "Hit Points"
        item.dataset.tooltip = "Changed"

        let data_url = "https://www.dnd5eapi.co/api/rule-sections/damage-and-healing";

        async function getData(data_url) {
            const response = await fetch(data_url);

            if(!response.ok) {
                throw new Error('Network response was not OK.');
            }

            const data = response.json();
            return data;
        }

    
    getData()
        .then (data => {
            console.log(data);
        })
        .catch (error => {
            console.log('There has been a problem with fetch operation.', error);
        })
        

    }

    function func1 () {
        item.textContent = "HP"
        console.log(item);
    }

    document.addEventListener("mouseover", function(e) {
        let tooltip = "";
        let tooltipDiv = document.querySelector(".tooltip-div");
        // tooltipHover(tar);
        let elements = Array.from(document.querySelectorAll(".hover-reveal"));

        console.log(tooltip);
        console.log(tooltipDiv);
        console.log(elements);

    });

    animate();
})
