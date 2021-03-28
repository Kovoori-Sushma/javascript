var characher=document.getElementById("character");
var block1=document.getElementById("block1");
var block2=document.getElementById("block2");
var block3=document.getElementById("block3");
var block4=document.getElementById("block4");
var block5=document.getElementById("block5");
var counter=0;
var flag=0;
setInterval(function(){
    var leftVal=Math.random()*380;
    var topVal=Math.random()*480;
    characher.style.left=(100+leftVal)+"px";
    characher.style.top=-topVal+"px";
},3000);

setInterval(function(){
    block1.style.width=100+"px";
    block2.style.width=100+"px";
    block3.style.width=100+"px";
    block4.style.width=100+"px";
    block5.style.width=100+"px";
    if(flag==1){
        counter++;
        flag=0;
    }
    else{
        alert("Game Over! score : "+counter);
        counter=0;
    }
},3000);

function double(block,initial,final){
    var blockWidht=parseInt(window.getComputedStyle(block).getPropertyValue("width"));
    block.style.width=(blockWidht+100)+"px";
    var characterLeft=parseInt(window.getComputedStyle(characher).getPropertyValue("left"));
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var cTop=(500+characterTop);
    console.log("initial = "+initial+"final = "+final+"character top = "+cTop+"character left = "+characterLeft+"block width = "+blockWidht);
    if((cTop>=initial && cTop<=final) && (characterLeft<blockWidht)){
        flag=1;
    }
}