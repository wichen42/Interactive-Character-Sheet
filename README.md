**<ins>Background</ins>**

Dungeons & Dragons is a fantasy tabletop role-playing game originally designed by Gary Gygax and Dave Arneson. The classic tabletop RPG is a collaborative story telling where one player takes on the role of the Dungeon Master (DM) while the others each control their own player character (PC). Typically a party of players are composed of characters that each have their unique area of specialties. Each character is unique and their composition of various factors such as skills, class, or race allows players to have a large amount of freedom in how they would like to progress their campaign. 

Before the campaign begins DMs and players will often have a Session 0, where the players first create their character. Players will have to choose a race, class, starting class skills, proficiencies, generate their starting stat points, and more. All of these attributes are tracked from the start on a Character Sheet which players will utilize over the course of the campaign to keep track of new skills, items, equipment, notes, and more. The goal of this interactive Character Sheet is to help players better track their PC and also reduce the time spent refering to the Player's handbook by provide helpful tooltips for their character's attributes, skills and provide a visual interpretation of their character.

<br>

**<ins>Functionality & MVPs</ins>**

- Character Input fields that a player can edit.
- Character sprite model visualization via Canvas.
- Tool tips over character attributes, proficiency, and skills.
- Character EXP tracker.
- Character equipment weight tracker.

In addtion, this project will include: 
- An About Modal describing the API used to generate tooltips.
- This Production README.

<br>

**<ins>Wireframes</ins>**

<br>

**Character Sheet Header**

![character-sheet-header](https://user-images.githubusercontent.com/103459101/190873886-f41e3564-b76c-4135-8d38-46ef7f7f6d1f.png)

<br>

**Character Sheet Body**

![character-sheet-body](https://user-images.githubusercontent.com/103459101/190873888-fe8cb7f8-ae8c-47da-afdb-78c297d8d61c.png)


<br>

- Nav Bar displays links to GitHub, LinkedIn, and AngelList.
- Player Character Attributes, Saving Throws, HP, AC, Speed, Attacks, Spells, Proficiencies, Bonuses, and Equipments displays hover over tool tips.

<br>

**<ins>Technologies, Libraries, and APIs</ins>**

This project will be implemented with the following technologies:
- The 5th Edition Dungeons and Dragons API: https://www.dnd5eapi.co/
- Webpack and Babel to bundles and transpile source code.
- Canvas API
- npm to manage dependencies. 

<br>

**<ins>Implementation Timeline</ins>**

- Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Design structure of character sheet and implement the stucture via HTML and implement basic tool tip hover effect. If time, also work on additional CSS properties to beautify webpage.

- Monday: Review documentation and lecture notes on Ajax. Implement forms and AJAX that will allow the web page to save user inputted information without having the page reload.

- Tuesday: Dedicate day to familiarize myself with how to fetch, manipulate, and display data obtained from API on the correct HTML element. Familiarize myself with canvas and how to display sprite animations. 

Wednesday: Implement character model visualization. If time, implementi EXP, Equipment weight tracker, and additional CSS Styling. Finalize navbar elements that links to GitHub, LinkedIn, and Angels List.

Thursday: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

<br>

**<ins>Bonus features:</ins>**

There are many sections on a character sheet that can be included that may not have an effect on overall gameplay. Some of these seections are: 

- Inventory
- Character background, inspirations, and motivations
- Quest Journal
