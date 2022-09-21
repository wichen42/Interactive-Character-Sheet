function add_equipment(equip) {
    // console.log("click")
    const searched = document.getElementById('equipment-item');
    let item = searched.value;
    let item_id = ""
    // console.log(item.length);

    for (let i = 0; i < item.length; i++) {
        if (item[i] === " ") {
            item_id += "-";
        } else {
            item_id += item[i].toLowerCase();
        }
    }

    let selected = document.getElementById(item_id);
    let equip_list = document.getElementById('equipment');
    equip_list.appendChild(selected);
}

module.exports = add_equipment;