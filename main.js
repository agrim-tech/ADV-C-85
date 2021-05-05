var carx = 20;
var cary = -20;
var width = 100;
var height = 120;
var carimage = "ferrari.png";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvasimage = "track.jpg";

function add(){
    backgroundimg = new Image();
    backgroundimg.src = canvasimage;
    backgroundimg.onload = uploadcanvas;

    lineimg = new Image();
    lineimg.src = "trackline.png";
    lineimg.onload = uploadline;

    carimg = new Image();
    carimg.src = carimage;
    carimg.onload = uploadcar;

}

function uploadcanvas(){
    ctx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(carimg,carx,cary,width,height);
}
function uploadline(){
    ctx.drawImage(lineimg,250,0,500,500);
}
function up(){
    if(cary >= -30){
        cary = cary-10;
        console.log("X : "+carx+" Y : "+cary);
        uploadcanvas();
        uploadline();
        uploadcar();
    }
}
function down(){
    if(cary <= 360){
        cary = cary+10;
        console.log("X : "+carx+" Y : "+cary);
        uploadcanvas();
        uploadline();
        uploadcar();
    }
}
function right(){
    if(carx <= 690){
        carx = carx+10;
        console.log("X : "+carx+" Y : "+cary);
        uploadcanvas();
        uploadline();
        uploadcar();
    }
    if(carx == 620){
    document.getElementById("win").innerHTML = "You Win!" ;
    }
}
function left(){
    if(carx >= 10){
        carx = carx-10;
        console.log("X : "+carx+" Y : "+cary);
        uploadcanvas();
        uploadline();
        uploadcar();
    }
}

addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        console.log("up");
        up();
    }
    if(keypressed == '40'){
        console.log("down");
        down();
    }
    if(keypressed == '39'){
        console.log("right");
        right();
    }
    if(keypressed == '37'){
        console.log("left");
        left();
    }
}