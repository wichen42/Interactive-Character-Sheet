function add_inventory() {

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

module.exports = add_inventory;