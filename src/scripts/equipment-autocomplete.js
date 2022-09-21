function autoEquip() {
    const equipment = [
        "Caltrops", "Staff", "Adamantine Armor", "Berserker Axe", "Boots of Speed",
        "Bracers of Archery", "Broom of Flying", "Cloak of Arachnida", "Dagger of Venom"
        ];
        
        $("#equipment-item").autocomplete({
            source: equipment
        }, {
            autoFocus: true,
        });
        
        const inventory = [
            "Disguise Kit", "Lamp", "Spyglass", "Tinderbox", "Torch", "Crowbar", "Flute", "Horn"
        ];
        
        $('#inventory-item').autocomplete({
            source: inventory
        }, {});
        
        const attacks = [
            "Fireball", "Haste", "Acid Arrow", "Call Lightning", "Shape Change"
        ];
        
        $('#attack-bar').autocomplete({
            source: attacks
        }, {})
        
}


module.exports = autoEquip;