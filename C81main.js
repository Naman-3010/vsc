canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

pos_x=300;
pos_y=200;
color="White";
circle(pos_x,pos_y);

function circle(pos_x,pos_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(pos_x,pos_y,40,70,360);
    ctx.stroke();
}

canvas.addEventListener("mousedown",mouseDown);
function mouseDown(e){
    pos_x=e.clientX-canvas.offsetLeft;
    pos_y=e.clientY-canvas.offsetTop;
    console.log("x = "+pos_x+" y = "+pos_y);
    circle(pos_x,pos_y);
}