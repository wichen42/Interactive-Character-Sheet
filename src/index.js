const warriorEquip = require('./scripts/equipment-autocomplete');
const warrior = require('./scripts/warrior');
const thief = require('./scripts/thief')
const mage = require('./scripts/mage');
const archer = require('./scripts/archer');
const { async } = require('regenerator-runtime');
const tooltipHover = require('./scripts/hover');
const stat_mod = require('./scripts/stat_mod');
const autoEquip = require('./scripts/equipment-autocomplete');
const add_equipment = require('./scripts/add_equipment');
const add_inventory = require('./scripts/add_inventory');
const add_attack = require('./scripts/add_attack');
const hit_dice = require('./scripts/hit_dice');
const speed_gen = require('./scripts/stat_gen');
const perception_gen = require('./scripts/perception_gen');
const race_text = require('./scripts/race_text');

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
    let frameY = 0;
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

    let background = new Image();
    background.src = './assets/Background.png';

    function animate () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0,0, canvas.width, canvas.height);
        ctx.drawImage(image, frameX * player.width, frameY * player.height, player.width, player.height, player.offsetWidth, player.offsetHeight, canvas.width, canvas.height);
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
        let tooltip = document.querySelector(".tooltip");

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
                tooltip.innerHTML = data.desc;
                console.log(item.offsetWidth)
                console.log(item.offsetHeight)
                tooltip.style.top = item.offsetTop + "px";
                tooltip.style.left = item.offsetLeft + "px";
                tooltip.style.opacity = 1;
                tooltip.style.transitionDuration = "1s"

                let button = document.createElement("BUTTON");
                button.innerHTML = "X"
                button.style.position = "absolute";
                button.style.top = 0;
                button.style.right = 0;
                button.style.bottom = 5;
                button.style.left = 20;
                button.style.borderRadius = "4px";
                tooltip.appendChild(button);

                button.addEventListener("click", function(e) {
                    tooltip.innerHTML = "";
                    tooltip.style.opacity = 0;
                    tooltip.style.transitionDuration = "1s"
                    tooltip.style.top = 0;
                    tooltip.style.left = 0;

                })
            })
            .catch (error => {
                console.log('There has been a problem with fetch operation.', error);
            })

    });

    const equip_search = document.getElementById('equipment-item');
    const addEquip = document.getElementById('add-equipment');

    addEquip.addEventListener("click", function(){
        if (equip_search.value !== "") {
            add_equipment();
        }
    });

    const inventory_search = document.getElementById('inventory-item');
    const addItem = document.getElementById('add-item');

    addItem.addEventListener("click", function() {
        if (inventory_search.value !== "") {
            add_inventory();
        }
    });

    const attack_search = document.getElementById('attack-bar');
    const addAttack = document.getElementById('add-attack');

    addAttack.addEventListener("click", function(){
        if (attack_search !== "") {
            add_attack();
        }
    });

    let dice = document.getElementById('hit-dice');
    dice.addEventListener("click", function(){
        hit_dice();
    })

    let initiative_button = document.getElementById("initiative-button");
    let initiative_input = document.getElementById("initiative_input");
    initiative_button.addEventListener("click", function(){
        initiative_input.value = Math.floor(Math.random() * 21) + 1;
    })

    let race_select = document.getElementById("background-select");
    race_select.addEventListener("change", function(){
        speed_gen();
    })

    let wisdom_stat = document.getElementById("wis");
    wisdom_stat.addEventListener("change", function(){
        perception_gen();
    })


    let race = document.getElementById("background-select");
    race.addEventListener("change", function(){
        race_text();
    })

    let perception_stat = document.getElementById("perception_input");
    let wisdom_mod = document.querySelector(".wis_mod");

    document.getElementById("wis").onchange = function () {

        if(document.getElementById("perception-check").checked) {
            console.log("checked")
            console.log(wis.value)
            if (wis.value === 1) {
                perception_stat.value = -5;
            }
        }
    }

    autoEquip();
    stat_mod();
    animate();
})
