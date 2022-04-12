let logo_box = document.getElementById('logo_box');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    logo_box.style.left = x - (logo_box.clientWidth/2) + "px";
    logo_box.style.top = y - (logo_box.clientWidth/2) + "px";

}