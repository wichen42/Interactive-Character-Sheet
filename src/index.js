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
    const player_class = document.getElementById("class");
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
                player_class.dataset.url = "https://www.dnd5eapi.co/api/classes/barbarian";
                console.log(player_class.url);
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


    function animate () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(image, frameX * player.width, frameY * player.height, player.width, player.height, 0, -50, canvas.width, canvas.height);
        if(frame % stagger === 0) {
            if (frameX < stagger-1) {
                frameX++;
            } else {
                frameX = 0;
            }
        }

        frame++;

        requestAnimationFrame(animate);
    }



    document.addEventListener("mouseover", function(e) {
        let item = e.target;
        let tooltip = "";
        let tooltipDiv = document.querySelector(".tooltip-div");

        async function makeTooltip(url) {
            const response = await fetch(url);

            if(!response.ok) {
                throw new Error('Network response was not OK.');
            }

            const data = response.json();
            return data;
        }

        makeTooltip(item.dataset.url)
            .then (data => {
                tooltip = data.desc;
                tooltipDiv.innerHTML = tooltip;
                console.log(item.offsetWidth)
                console.log(item.offsetHeight)
                tooltipDiv.style.top = item.offsetTop + "px";
                tooltipDiv.style.left = item.offsetLeft + "px";
                tooltipDiv.style.opacity = 1;
                
                item.addEventListener("mouseleave", function(e) {
                    tooltipDiv.innerHTML = "";
                    tooltipDiv.style.opacity = 0;
                })
            })
            .catch (error => {
                console.log('There has been a problem with fetch operation.', error);
            })
    });


    animate();
})
