function race_text() {
    let player_race;
    let dwarf = document.getElementById("dwarf-text");
    let human = document.getElementById("human-text");
    let elf = document.getElementById("elf-text");
    let halfOrc = document.getElementById("half-orc-text");
    let tiefling = document.getElementById("tiefling-text");
    const races = ["dwarf", "elf", "half-orc", "human", "tiefling"];
    
    races.forEach(el => {
        if (document.getElementById(el).selected === true) {
            player_race = el;
        }
    })

    let text_section = document.getElementById("race-text");
    let text = document.createElement("span");

    if (player_race === 'dwarf') {
        dwarf.style.display = "flex";
        human.style.display = "none";
        elf.style.display = "none";
        halfOrc.style.display = "none";
        tiefling.style.display = "none";
    } else if (player_race === "human") {
        dwarf.style.display = "none";
        human.style.display = "flex";
        elf.style.display = "none";
        halfOrc.style.display = "none";
        tiefling.style.display = "none";
    } else if (player_race === "elf") {
        dwarf.style.display = "none";
        human.style.display = "none";
        elf.style.display = "flex";
        halfOrc.style.display = "none";
        tiefling.style.display = "none";
    } else if (player_race === "half-orc") {
        dwarf.style.display = "none";
        human.style.display = "none";
        elf.style.display = "none";
        halfOrc.style.display = "flex";
        tiefling.style.display = "none";
    } else if (player_race.race === "tiefling") {
        dwarf.style.display = "none";
        human.style.display = "none";
        elf.style.display = "none";
        halfOrc.style.display = "none";
        tiefling.style.display = "flex";
    }
   
}

module.exports = race_text;