let settingmenu = document.querySelector(".setting-menu");
let darkbtn = document.getElementById("darkbtn");


function settingsMenuToggle(){
    settingmenu.classList.toggle("setting-menu-height");
}

darkbtn.onclick = function(){
    darkbtn.classList.toggle("darkbtn-on");
    document.body.classList.toggle("dark-theme");
}