var mouseEvent="";
var last_position_of_X,last_position_of_Y
var Canvas= document.getElementById("myCanvas")
var ctx= Canvas.getContext("2d")
var color="purple"
var width=2

Canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(){
    mouseEvent="mousedown"
}
Canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(){
    mouseEvent="mouseup"
}
Canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(){
    mouseEvent="mouseleave"
}
Canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_Position_of_X=e.clientX-Canvas.offsetLeft
    current_Position_of_Y=e.clientY-Canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.lineWidth=width;
        ctx.strokeStyle=color;
        ctx.arc(current_Position_of_X,current_Position_of_Y,30,0,2*Math.PI )
        ctx.stroke()
    }
    last_position_of_X=current_Position_of_X
    last_position_of_Y=current_Position_of_Y
}