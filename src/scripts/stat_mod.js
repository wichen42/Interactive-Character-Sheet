function stat_mod () {

    let str = document.getElementById("str");
    let str_mod = document.querySelector(".str_mod");
    
    for(let i = 1; i < 21; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        str.appendChild(opt);
    }
    
    str.addEventListener("change", function(e) {
        let s_mod = Math.floor((str.value - 10)/2);
        if (s_mod < 0) {
            str_mod.innerHTML = s_mod
        } else {
            str_mod.innerHTML = `+${s_mod}`;
        }
    })


    let dex = document.getElementById("dex");
    let dex_mod = document.querySelector(".dex_mod");

    for(let i = 1; i < 21; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        dex.appendChild(opt);
    }

    dex.addEventListener("change", function(e) {
        let d_mod = Math.floor((dex.value - 10)/2);
        if (d_mod < 0) {
            dex_mod.innerHTML = d_mod
        } else {
            dex_mod.innerHTML = `+${d_mod}`;
        }
    })

    let con = document.getElementById("con");
    let con_mod = document.querySelector(".con_mod");

    for(let i = 1; i < 21; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        con.appendChild(opt);
    }

    con.addEventListener("change", function(e) {
        let c_mod = Math.floor((con.value - 10)/2);
        if (c_mod < 0) {
            con_mod.innerHTML = c_mod
        } else {
            con_mod.innerHTML = `+${c_mod}`;
        }
    })

    let int = document.getElementById("int");
    let int_mod = document.querySelector(".int_mod");

    for(let i = 1; i < 21; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        int.appendChild(opt);
    }

    int.addEventListener("change", function(e) {
        let i_mod = Math.floor((int.value - 10)/2);
        if (i_mod < 0) {
            int_mod.innerHTML = i_mod
        } else {
            int_mod.innerHTML = `+${i_mod}`;
        }
    })

    let wis = document.getElementById("wis");
    let wis_mod = document.querySelector(".wis_mod");

    for(let i = 1; i < 21; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        wis.appendChild(opt);
    }

    wis.addEventListener("change", function(e) {
        let w_mod = Math.floor((wis.value - 10)/2);
        if (w_mod < 0) {
            wis_mod.innerHTML = w_mod
        } else {
            wis_mod.innerHTML = `+${w_mod}`;
        }
    })

    let cha = document.getElementById("cha");
    let cha_mod = document.querySelector(".cha_mod");

    for(let i = 1; i < 21; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        cha.appendChild(opt);
    }

    cha.addEventListener("change", function(e) {
        let c_mod = Math.floor((cha.value - 10)/2);
        if (c_mod < 0) {
            cha_mod.innerHTML = c_mod
        } else {
            cha_mod.innerHTML = `+${c_mod}`;
        }
    })
    
}

module.exports = stat_mod;

