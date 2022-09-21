const warrior = require("./warrior");

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

module.exports = hit_dice;