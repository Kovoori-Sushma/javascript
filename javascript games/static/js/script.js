// challenge your age in days
function ageInDays(){
    var birthyear=prompt("what is your birth year?");
    var days=(2020-birthyear)*365;
    document.getElementById("flex-box-result").innerHTML="<p> your "+days+" days old<p>";
}

function reset(){
    document.getElementById("flex-box-result").remove();
}

//Challenge generate images
function generateImages(){
    var n=prompt("how many images do you want?");
    for(var i=0;i<n;i++){
        displayImages();
    }
}

function displayImages(){
    var image=document.createElement('img');
    var div=document.getElementById("flex-box-result-2");
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe85cyWJD0SqYIc5E-4twwOR5n7XCyC-OjFQ&usqp=CAU";
    div.appendChild(image);
   
}

function generateOnclick(){
    var image=document.createElement('img');
    var div=document.getElementById("flex-box-result-2");
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe85cyWJD0SqYIc5E-4twwOR5n7XCyC-OjFQ&usqp=CAU";
    div.appendChild(image);
}




//Challenge rock paper scissor

var imageDatabase={
    'rock': document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src
};

function rpsGame(yourChoice){
    console.log(yourChoice.id);
    var humanChoice,botChoice,message;
    var list=["rock","paper","scissor"];
    humanChoice=yourChoice.id;
    botChoice=list[Math.floor(Math.random()*3)];
    console.log(" humanchoice = "+humanChoice+" botchoice = "+botChoice);
    result=decideWinner(humanChoice,botChoice); //[0,1] human lost, bot won
    console.log("decide winnner "+result);
    message=finalMessage(result);//dictionary {'message':'you won', 'color':'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function decideWinner(humanChoice,botChoice){
    var rpsDatabase={
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissor':0},
        'scissor':  {'paper':1, 'scissor':0.5, 'rock':0}
    }
    return [rpsDatabase[humanChoice][botChoice],rpsDatabase[botChoice][humanChoice]];
}


function finalMessage(result){
    if(result[0]>result[1]){
        return {'message':'you won!', 'color':'green'};
    }
    if(result[0]==result[1]){
        return {'message':'draw!', 'color':'yellow'};
    }
    if(result[0]<result[1]){
        return {'message':'you lose!', 'color':'red'};
    }
}

function rpsFrontEnd(youChose, botChoice,message){
    document.getElementById("rock").remove();
    document.getElementById("scissor").remove();
    document.getElementById("paper").remove();

    var humanDiv=document.createElement("div");
    var messageDiv=document.createElement("div");
    var botDiv=document.createElement("div");

    humanDiv.innerHTML="<img height='200px' width='200px' src='"+imageDatabase[youChose]+"'>";
    document.getElementById("box").appendChild(humanDiv);
   
    messageDiv.innerHTML="<h1 font-size: 60px; padding: 30px; style=' color:"+message.color+"';>"+message.message+"</h1>";
    document.getElementById("box").appendChild(messageDiv);

    botDiv.innerHTML="<img text-align: center; height='200px' width='200px' src='"+imageDatabase[botChoice]+"'>";
    document.getElementById("box").appendChild(botDiv);
}

function playagain(){
    document.getElementById("box").remove();
    var str=' <div class="flex-box-container-3" id="box"><img id="rock" onclick="rpsGame(this)" src="https://vignette.wikia.nocookie.net/yandere-simulator-fanon/images/4/4e/Johnson.jpg/revision/latest?cb=20160625153352" height="200px" width="200px"><img id="paper" height="200px" width="200px" onclick="rpsGame(this)"   src="data:image/jpeg;base64,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"><img id="scissor" height="200px" width="200px" onclick="rpsGame(this)" src="data:image/jpeg;base64,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"></div>';
    document.getElementById("outer").innerHTML=str;
    console.log("playagain called");
    


}

//Challenge 4 change color

var allButtons=document.getElementsByTagName("button"); //array of buttons
//console.log(allButtons);

var copyAllButtons=[];
for(let i=0;i<allButtons.length;i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}
//console.log(copyAllButtons);


function buttonColorChange(colors){
   if(colors.value=='red'){
       redbuttons();
   }
   else if(colors.value==='blue'){
       bluebuttons();
   }
   else if(colors.value==='green'){
       greenbuttons();
   }
   else if(colors.value==='reset'){
       resetbuttons();
   }
   else if(colors.value==='random'){
       randombuttons();
   }
}

function redbuttons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function greenbuttons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function bluebuttons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-primary');
    }
}

function randombuttons(){
    var choices=['btn-primary','btn-success','btn-warning','btn-secondary','btn-info','btn-danger'];
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        var x=Math.floor(Math.random()*(choices.length));
        allButtons[i].classList.add(choices[x]);
    }
}
function resetbuttons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}




//challenge 5 blackjack

let blackjackGame={
    'you':{'scorespan':'#your-blackjack-result', 'div':'#your-box', 'score':0},
    'dealer':{'scorespan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,

};

const you=blackjackGame['you'];
const dealer=blackjackGame['dealer'];
const cards=blackjackGame['cards'];
const hitSound=new Audio('static/sounds/swish.m4a');
const winsound=new Audio('static/sounds/cash.mp3');
const losesound=new Audio('static/sounds/aww.mp3');
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
function blackjackHit(){
    if(blackjackGame['isStand']===false){
        if(you['score']<=21){
            var card=showcard(you);
            updateScore(card,you);
            console.log("score = "+you['score']);
            
            showScore(you);
            }
        if(you['score']>21){
            document.querySelector(you['scorespan']).textContent='BUST!';
            document.querySelector(you['scorespan']).style.color='red';
        }
    }   
}

function showcard(activeplayer){
    var pick=Math.floor(Math.random()*13);
    console.log('pick'+cards[pick]);
    let cardImg=document.createElement('img');
    cardImg.src='static/images/'+cards[pick]+'.png';
    document.querySelector(activeplayer['div']).appendChild(cardImg);
    hitSound.play();
   return cards[pick];
}

function blackjackDeal(){
    if(blackjackGame['turnsOver']===true){
        blackjackGame['isStand']=false;
        let yourImages=document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');
        for(let i=0;i<yourImages.length;i++){
            yourImages[i].remove();
        }
        for(let i=0;i<dealerImages.length;i++){
            dealerImages[i].remove();
        }

        you['score']=0;
        dealer['score']=0;
        document.querySelector(you['scorespan']).textContent=0;
        document.querySelector(dealer['scorespan']).textContent=0;
        document.querySelector(you['scorespan']).style.color='white';
        document.querySelector(dealer['scorespan']).style.color='white';
        document.querySelector('#blackjack-result').textContent='Lets Play!';
        document.querySelector('#blackjack-result').style.color='Black';
        blackjackGame['turnsOver']=true;
    }
    

}

function updateScore(card,activeplayer){
//if adding 11 keeps me below 21, add 11 otherwise add 1
    if(card=='A'){
        if(activeplayer['score']+blackjackGame['cardsmap'][card][1]<=21){
            activeplayer['score']+=blackjackGame['cardsmap'][card][1];
        }
        else{
            activeplayer['score']+=blackjackGame['cardsmap'][card][0];
        }
    }
 else{
    activeplayer['score']+=blackjackGame['cardsmap'][card];
 }
}

function showScore(activeplayer){
    document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
}

function sleep(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
}
async function dealerLogic(){
    blackjackGame['isStand']=true;
   while(dealer['score']<16 && blackjackGame['isStand']===true){
    if(dealer['score']<=21){
        var card=showcard(dealer);
        updateScore(card,dealer);
        console.log("score = "+dealer['score']);
        showScore(dealer);
        await sleep(1000);
    }
    if(dealer['score']>21){
        document.querySelector(dealer['scorespan']).textContent='BUST!';
        document.querySelector(dealer['scorespan']).style.color='red';
    }
   }
      
    var winner=computeWinner();
    showresult(winner);
    blackjackGame['turnsOver']=true;
      
        
}

function computeWinner(){
    let winner;
    if(you['score']<=21){
        if(you['score']>dealer['score'] || dealer['score']>21){
            console.log('You Won!');
            winner=you;
        }
        else if(you['score']<dealer['score']){
            console.log('You Lost!');
            winner=dealer;
        }
        else if(you['score']===dealer['score']){
            console.log('Draw!');
        }
    }
    else if(you['score']>21 && dealer['score']>21){
        console.log('Draw!');
    }
    else if(you['score']>21 && dealer['score']<=21){
        winner=dealer;
        console.log('You Lost!');
    }
    return winner;
}

function showresult(winner){
    console.log('show result called');
    let message,messageColor;
    if(blackjackGame['turnsOver']===true){
        if(winner==you){
            message='You Won!';
            messageColor='green';
            winsound.play();
        }
        else if(winner==dealer){
            message='You Lose!';
            messageColor='red';
            losesound.play();
        }
        else{
            message='Draw!';
            messageColor='yellow!';
        }
        document.querySelector('#blackjack-result').textContent=message;
        document.querySelector('#blackjack-result').style.color=messageColor;
    
    }
    
}