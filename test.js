let logo_box = document.getElementById('logo_box');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    logo_box.style.left = x - (logo_box.clientWidth/2) + "px";
    logo_box.style.top = y - (logo_box.clientWidth/2) + "px";

}

function random(number) {
    return Math.floor(Math.random()* number)
}

document.onclick = function () {
    acak = "rgb(" + random(255) +"," + random(255) +"," +random(255) + ")";
    logo_box.style.background = acak
    
}