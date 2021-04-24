var filterColor='transparent';
var drawingCanvas=null;
var video=null;

function preload(){
}

function setup(){
    drawingCanvas=createCanvas(640, 480);
    drawingCanvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(filterColor);
}

function takeSnapshot(){
    save(prompt('Enter in a name for your file!')+'.png');
}