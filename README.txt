Background

Dungeons & Dragons is a fantasy tabletop role-playing game originally designed by Gary Gygax and Dave Arneson. The classic tabletop RPG is a collaborative story telling where one player takes on the role of the Dungeon Master (DM) while the others each control their own player character (PC). Typically a party of players are composed of characters that each have their unique area of specialties. Each character is unique and their composition of various factors such as skills, class, or race allows players to have a large amount of freedom in how they would like to progress their campaign. 

Before the campaign begins DMs and players will often have a Session 0, where the players first create their character. Players will have to choose a race, class, starting class skills, proficiencies, generate their starting stat points, and more. All of these attributes are tracked from the start on a Character Sheet which players will utilize over the course of the campaign to keep track of new skills, items, equipment, notes, and more. The goal of this interactive Character Sheet is to help players better track their PC and also reduce the time spent refering to the Player's handbook by provide helpful tooltips for their character's attributes and skills.


Functionality & MVPs

- Character Input fields that a user can edit.
- Tool tips over character attributes, proficiency, and skills.
- Character EXP tracker.
- Character equipment weight tracker.

In addtion, this project will include: 
- An About Modal describing the API used to generate tooltips.
- This Production README.


Technologies, Libraries, and APIs

This project will be implemented with the following technologies:
- The 5th Edition Dungeons and Dragons API: https://www.dnd5eapi.co/
- Webpack and Babel to bundles and transpile source code.
- npm to manage dependencies. 


Implementation Timeline
- Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Design structure of character sheet and implement the stucture via HTML and implement basic tool tip hover effect. If time, also work on additional CSS properties to beautify webpage.

- Monday: Implement forms and AJAX that will allow the web page to save user inputted information without having the page reload.

- Tuesday: Dedicate day to familiarize myself with how to fetch, manipulate, and display data obtained from API on the correct HTML element. If time, implement EXP and Equipment weight tracker.

Wednesday: Finish implementing EXP, Equipment weight tracker, and CSS Styling. Create footer navbar that links to GitHub, LinkedIn, and Angels List.

Thursday: Deploy to GitHub pages. If time, rewrite this proposal as a production README.


Bonus features:

There are many sections on a character sheet that can be included that may not have an effect on overall gameplay. Some of these seections are: 

- Inventory
- Character background, inspirations, and motivations
- Quest Journal

