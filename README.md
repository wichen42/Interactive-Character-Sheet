**<ins>Background</ins>**

Dungeons & Dragons is a fantasy tabletop role-playing game originally designed by Gary Gygax and Dave Arneson. The classic tabletop RPG is a collaborative story telling where one player takes on the role of the Dungeon Master (DM) while the others each control their own player character (PC). Typically a party of players are composed of characters that each have their unique area of specialties. Each character is unique and their composition of various factors such as skills, class, or race allows players to have a large amount of freedom in how they would like to progress their campaign. 

Before the campaign begins DMs and players will often have a Session 0, where the players first create their character. Players will have to choose a race, class, starting class skills, proficiencies, generate their starting stat points, and more. All of these attributes are tracked from the start on a Character Sheet which players will utilize over the course of the campaign to keep track of new skills, items, equipment, notes, and more. The goal of this interactive Character Sheet is to help players better track their character stats, equipment, items, and attacks by reducing the time spent refering to the Player's handbook.

<br>

**<ins>Functionality & MVPs</ins>**

**The Character Sheet contains features that**

<br>

-Dynamically updates based on user input and selections

-Animates Character Sprites

-Auto-complete Search


<br>



In addtion, this project will include: 
- An About Modal describing the API used to generate tooltips.
- This README.

<br>

**<ins>Wireframes</ins>**

<br>



<br>

- Nav Bar displays general character details including name, class, race, state, status and links to GitHub, LinkedIn.
- Body of the character sheet is comprised of three main components. 
    1. First section contains character skills, stat points, and stat modifiers.
    2. Second section is divided into two parts. The first contains Misc character stats such as Health, Armor Class, Temporary HP, speed, proficiency, perception, as well as buttons to generate Temporary HP amount, and initiative. The second contains an equipment and inventory list.
    3. Third section conatins two parts. The first houses the canvas where character sprites are animated. The second contains a list of attacks and spells.

<br>

**<ins>Technologies, Libraries, and APIs</ins>**

This project will be implemented with the following technologies:
- The 5th Edition Dungeons and Dragons API: https://www.dnd5eapi.co/
- Webpack and Babel to bundles and transpile source code.
- Canvas API
- jQuery Autocomplete 
- npm to manage dependencies. 

<br>

**<ins>Implementation Timeline</ins>**



<br>

**<ins>Bonus features:</ins>**

There are many sections on a character sheet that can be included that may not have an effect on overall gameplay. Some of these seections are: 

- Stylized Checkbox animation with SVG
- Button to toggle tooltip functionality
- Character background, inspirations, and motivations
- Quest Journal
