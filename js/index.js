var count = 0
window.onload = function() {
    var settingIcon = document.getElementById("gear");
    settingIcon.onclick = function() {
        var colorList = document.getElementById("color-list");
        var colorSwitch = document.getElementById("color-switch");
        if(count==0) {
            colorList.style.width = "130px";
            colorSwitch.style.width = "130px";
            count = 1;
        }
        else {

            colorList.style.width = "0px";
            colorSwitch.style.width = "20px";
            count=0;
        }
        colorList.style.transition = "0.3s";
        colorSwitch.style.transition = "0.3s";

    }
    var icon = document.getElementById("moon-icon");
    var iconClickCount = 0;
    icon.onclick = function() {
        if(iconClickCount == 0) {

            var parentDiv = document.getElementById("parent-div");
            parentDiv.style.background = "#000";
            parentDiv.style.transition = "0.4s";
            var bottomList = document.getElementById("bottom-list");
            bottomList.style.background = "#000";
            bottomList.style.transition = "0.4s";
            icon.className = "fa fa-sun-o";
            iconClickCount = 1;
        }
        else {
            var parentDiv = document.getElementById("parent-div");
            parentDiv.style.background = "#182848";
            parentDiv.style.transition = "0.4s";
            var bottomList = document.getElementById("bottom-list");
            bottomList.style.background = "#182848";
            bottomList.style.transition = "0.4s";
            icon.className = "fa fa-moon-o";
            iconClickCount = 0;

        }


    }
}
function changeTextColor(color) {
    var buttons = document.getElementsByTagName("button");
    for(var i = 0; i<buttons.length; i++) {
        buttons[i].style.color = color;
        buttons[i].style.transition = "0.3s";
    }

    var para = document.getElementsByTagName("p");
    for(var i = 0; i<para.length; i++) {
        para[i].style.color = color;
        para[i].style.transition = "0.3s";

    }

    var headings = document.getElementsByTagName("h3");
    for(var i = 0; i<headings.length; i++) {
        headings[i].style.color = color;
        headings[i].style.transition = "0.3s";

    }
}