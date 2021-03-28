var character=document.getElementById("character");
var counter=0;
var flag=0;
setInterval(function(){
    var leftVal=Math.random()*380;
    var topVal=Math.random()*480;
    character.style.left=(100+leftVal)+"px";
    character.style.top=-topVal+"px";
},3000);
