	document.body.style[ 'backgroundColor' ] = "#FFFFFF";

var scale = 1;
var xsize = 120*scale;
var ysize = 100*scale;
    x = 10,
    y = 10;
var element = document.createElement("canvas");
//var element= document.getElementById('canvas');

	element.width = xsize;
    element.height = ysize;

document.body.appendChild(element);
var graphics = element.getContext("2d");
var img = new Image;
img.onload = function(){ graphics.drawImage(img, 0,0, xsize, ysize); };
img.src = "../img/cat.svg";

