function speed_gen() {
    let player_race;
    const races = ["dwarf", "elf", "half-orc", "human", "tiefling"];
    let speed_input = document.getElementById("speed_input");
    let perception = document.getElementById("perception_input");
    
    races.forEach(el => {
        if (document.getElementById(el).selected === true) {
            player_race = el;
        }
    })

    if (player_race === "dwarf") {
        speed_input.value = 25;
    } else {
        speed_input.value = 30;
    }



}

module.exports = speed_gen;