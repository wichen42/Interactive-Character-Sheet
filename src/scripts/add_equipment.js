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

    let selected = document.getElementById(item_id); // search bar item
    let equip_list = document.getElementById('equipment'); // ul list that holds equips
    let url = selected.dataset.url;

    let new_item = document.createElement("li");
    new_item.dataset.url = url;
    new_item.innerHTML = item;
    console.log(new_item);

    equip_list.appendChild(new_item);


}

module.exports = add_equipment;