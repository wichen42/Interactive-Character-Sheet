**<ins>Background</ins>**

Dungeons & Dragons is a fantasy tabletop role-playing game originally designed by Gary Gygax and Dave Arneson. The classic tabletop RPG is a collaborative story telling where one player takes on the role of the Dungeon Master (DM) while the others each control their own player character (PC). Typically a party of players are composed of characters that each have their unique area of specialties. Each character is unique and their composition of various factors such as skills, class, or race allows players to have a large amount of freedom in how they would like to progress their campaign. 

Before the campaign begins DMs and players will often have a Session 0, where the players first create their character. Players will have to choose a race, class, starting class skills, proficiencies, generate their starting stat points, and more. All of these attributes are tracked from the start on a Character Sheet which players will utilize over the course of the campaign to keep track of new skills, items, equipment, notes, and more. The goal of this interactive Character Sheet is to help players better track their character stats, equipment, items, and attacks by reducing the time spent refering to the Player's handbook.

<br>

**<ins>Wireframes</ins>**

<br>

![wireframe](https://user-images.githubusercontent.com/103459101/191825910-26d774aa-7bf8-407d-b69a-56128daf839d.png)

<br>

- Nav Bar displays general character details including name, class, race, state, status and links to GitHub, LinkedIn.
- Body of the character sheet is comprised of three main components. 
    1. First section contains character skills, stat points, and stat modifiers.
    2. Second section is divided into two parts. The first contains Misc character stats such as Health, Armor Class, Temporary HP, speed, proficiency, perception, as well as buttons to generate Temporary HP amount, and initiative. The second contains an equipment and inventory list.
    3. Third section conatins two parts. The first houses the canvas where character sprites are animated. The second contains a list of attacks and spells.
<br>

**<ins>Functionality & MVPs</ins>**

**The Character Sheet contains features that**

<br>

- Dynamically updates based on user input and selections

<br>

![cs_statmod](https://user-images.githubusercontent.com/103459101/191825331-a3ef6955-a26a-4df1-a797-31b94671d17d.gif)

<br>

Element values updates based on selected values.

```javascript
function stat_mod () {

    let str = document.getElementById("str");
    let str_mod = document.querySelector(".str_mod");
    
    for(let i = 1; i < 21; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        str.appendChild(opt);
    }
    
    str.addEventListener("change", function(e) {
        let s_mod = Math.floor((str.value - 10)/2);
        if (s_mod < 0) {
            str_mod.innerHTML = s_mod
        } else {
            str_mod.innerHTML = `+${s_mod}`;
        }
    })
}
```

<br>

![cs_hitdice](https://user-images.githubusercontent.com/103459101/191825321-eceb0248-35cf-4bbe-825a-06f07d3ec6ff.gif)

<br>

Logic changes depending on class selected and updates the correct input fields.

```javascript
function hit_dice () {
    let player_class;
    const temp = document.getElementById("temp-hp");
    const die = document.getElementById("hit-dice");

    let classes = ["warrior", "thief", "mage", "archer"]

    classes.forEach(el => {
        player = `${el}-radio`
        if (document.getElementById(player).checked === true) {
            player_class = document.getElementById(player);
        }
    })


    if (player_class.value === "warrior") {
        console.log("warrior");
        temp.value = Math.floor(Math.random() * 9) + 1
    } else if (player_class.value === "thief") {
        console.log("thief");
        temp.value = Math.floor(Math.random() * 5) + 1
    } else if (player_class.value === "mage") {
        console.log("mage");
        temp.value = Math.floor(Math.random() * 5) + 1
    } else if (player_class.value === "archer") {
        console.log("archer");
        temp.value = Math.floor(Math.random() * 6) + 1
    }
}

let dice = document.getElementById('hit-dice');
dice.addEventListener("click", function(){
    hit_dice();
})
```

<br>

- Animates Character Sprites

<br>

![atk_sprite](https://user-images.githubusercontent.com/103459101/191833968-fc4a68f2-8558-48b3-80e9-8199e1d9ef4a.gif)

<br>

Sprite Animation occurs on canvas via drawImage and simple loop logic. Script utilizes a stagger frame to slow down speed of animation loop. 

```javascript
    var canvas = document.getElementById("model-canvas");
    var parent = document.getElementById("character-canvas");

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const image = new Image();
    image.src = './sprites_sheet/warrior_sprite_sheet.png';
    
    let background = new Image();
    background.src = './assets/Background.png';
    
    let stagger = 0;
    let frameX = 0;
    let frameY = 0;
    let frame = 0;
    
    
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
```

<br>

<br>

- Auto-complete Search

<br>

![addAttack](https://user-images.githubusercontent.com/103459101/191825121-0ee5a9c3-2c00-4cd5-8ca7-5542d06fe0da.gif)

<br>

Auto-complete search funtionality is achieved with the jQuery auto-complete library. Currently equipment, items, attacks / spells are prepopulated due to limitations of the DnD 5e API. User input for searched item / attack is sanitized and converted into the element id value. Script utilizes dom manipulation to target correct element in a hidden container and appends selected item / attack into a list.

<br>

```javascript

function add_attack() {

    const searched = document.getElementById('attack-bar');
    let item = searched.value;
    let attack_id = ""

    for (let i = 0; i < item.length; i++) {
        if (item[i] === " ") {
            attack_id += "-";
        } else {
            attack_id += item[i].toLowerCase();
        }
    }

    let selected = document.getElementById(attack_id);
    let attack_list = document.getElementById('attack-spell-list');
    attack_list.appendChild(selected);

    searched.value = "";
}

const attack_search = document.getElementById('attack-bar');
const addAttack = document.getElementById('add-attack');

addAttack.addEventListener("click", function(){
    if (attack_search !== "") {
        add_attack();
    }
});
```

<br>

- Generates tooltip that pulls from DnD 5e API

<br>

![tooltip](https://user-images.githubusercontent.com/103459101/191825342-3d8b3221-b7b8-4dd5-8fee-6f63f2cec538.gif)

<br>

Elements store an api endpoint in a data attribute. On hover script fires in the background to fetch data from the DnD 5e API. The tooltips's innerHTML is then populated with the data and moves to the "hovered" element's position. Tooltip size is predefined, if there is a large amount of data user is able to hover over tooltip to scroll up / down. An exit button is also dynamically created and appended to the tooltip.

<br>

```javascript
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
```

<br>


**Technologies, Libraries, and APIs**

This project will be implemented with the following technologies:
- The 5th Edition Dungeons and Dragons API: https://www.dnd5eapi.co/
- Webpack and Babel to bundles and transpile source code.
- Canvas API
- jQuery Autocomplete 
- Landing page
- npm to manage dependencies. 

<br>

**Bonus features:**

There are many sections on a character sheet that can be included that may not have an effect on overall gameplay. Some of these seections are: 

- Stylized Checkbox animation with SVG
- Button to toggle tooltip functionality
- Auto-complete selections populate based on race, class, and level.
- Quest Journal

**Acknowledgment and Credits**
- Knight Sprite Pack: created by aamatniekss - https://aamatniekss.itch.io/fantasy-knight-free-pixelart-animated-character
- Wizard Sprite Pack: created by LuizMelo - https://luizmelo.itch.io/wizard-pack
- Huntresss Sprite Pack: created by LuizMelo - https://luizmelo.itch.io/huntress-2
- Wind Hashin Sprite Pack: created by chierit - https://chierit.itch.io/elementals-wind-hashashin

<br>

In addtion, this project will include: 
- [Link to Github Page](https://wichen42.github.io/Interactive-Character-Sheet/)
- An About Modal describing the API used to generate tooltips.
- This README.
