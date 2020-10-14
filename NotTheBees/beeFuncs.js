let facePic = new Image();
let beePic = new Image();
facePic.src = "cageface.png";
beePic.src = "bee.png";
let x;
let y;
let ctx;
let canvas;


window.onload = function (){  
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    canvas.addEventListener("mousemove",e => {  
        x=e.offsetX;
        y=e.offsetY;
        requestAnimationFrame(animate);
    });
    requestAnimationFrame(animate);
    
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(facePic, x, y, 150, 150);
    ctx.drawImage(beePic, x+150+randomNumber(-5,5),  y-75+randomNumber(-5,5), 100, 100);
    ctx.drawImage(beePic, x+150+randomNumber(-5,5), y-85+randomNumber(-5,5), 100, 100);
    ctx.drawImage(beePic, x+150+randomNumber(-5,5), y-50+randomNumber(-5,5), 100, 100);
    ctx.drawImage(beePic, x+150+randomNumber(-5,5), y-30+randomNumber(-5,5), 100, 100);
    
    requestAnimationFrame(animate);
}

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min;}
  


