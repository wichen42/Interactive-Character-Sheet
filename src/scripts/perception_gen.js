function perception_gen() {
    let perception = document.getElementById("perception_input");
    let perception_prof = document.getElementById("perception-check");
    let wisdom = document.querySelector(".wis_mod");
    
    if (perception_prof.checked === true) {
        perception.value = 10 + wisdom;
    } else {
        perception.value = 10;
        console.log(perception_prof.checked);
        console.log(wisdom.dataset.mod);
    }
}

module.exports = perception_gen;