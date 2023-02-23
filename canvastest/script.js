
var img = new Image();
img.src = 'churki.jpg';
var draw = document.getElementById('drawo');
var ctx = draw.getContext('2d');

img.onload = function() {
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
};

var color = document.getElementById('color');

function pick(event) {
    var x = event.layerX;
    var y = event.layerY;
    //var pixel = ctx.getImageData(x, y, 1, 1);
    //var data = pixel.data;
    //var rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    var cords = x + ', ' + y;
    //color.style.background =  rgba;
    color.textContent = cords;
}
draw.addEventListener('click', pick);