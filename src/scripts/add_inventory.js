function add_inventory() {
    // console.log("click")
    const searched = document.getElementById('inventory-item');
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
    let inventory_list = document.getElementById('inventory');
    inventory_list.appendChild(selected);
}

module.exports = add_inventory;