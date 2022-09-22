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

-Dynamically updates based on user input and selections

<br>

![cs_statmod](https://user-images.githubusercontent.com/103459101/191825331-a3ef6955-a26a-4df1-a797-31b94671d17d.gif)
<br>

![cs_hitdice](https://user-images.githubusercontent.com/103459101/191825321-eceb0248-35cf-4bbe-825a-06f07d3ec6ff.gif)
<br>

<br>
-Animates Character Sprites

<br>

![sprite_animation](https://user-images.githubusercontent.com/103459101/191825344-f5968819-c91e-4a52-90f2-d8cae7825569.gif)

<br>

<br>

-Auto-complete Search

<br>

![addAttack](https://user-images.githubusercontent.com/103459101/191825121-0ee5a9c3-2c00-4cd5-8ca7-5542d06fe0da.gif)

<br>

-Generates tooltip that pulls from DnD 5e API

<br>

![tooltip](https://user-images.githubusercontent.com/103459101/191825342-3d8b3221-b7b8-4dd5-8fee-6f63f2cec538.gif)

<br>

```javascript
  <section id="survival">
    <label for="survival" id="survival-label" data-url="https://www.dnd5eapi.co/api/skills/survival">Survival</label>
    <input type="checkbox" name="survival-checkbox" id="survivial">
  </section>
  
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

<br>

In addtion, this project will include: 
- An About Modal describing the API used to generate tooltips.
- This README.

<br>



**<ins>Technologies, Libraries, and APIs</ins>**

This project will be implemented with the following technologies:
- The 5th Edition Dungeons and Dragons API: https://www.dnd5eapi.co/
- Webpack and Babel to bundles and transpile source code.
- Canvas API
- jQuery Autocomplete 
- npm to manage dependencies. 

<br>

<br>

**<ins>Bonus features:</ins>**

There are many sections on a character sheet that can be included that may not have an effect on overall gameplay. Some of these seections are: 

- Stylized Checkbox animation with SVG
- Button to toggle tooltip functionality
- Character background, inspirations, and motivations
- Quest Journal
