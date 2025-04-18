var timer = 30;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
   hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";


for(var i=1; i<=208; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbottom").innerHTML = clutter;
}



function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } 
        else {
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1> <h1>your score: ${score}<\h1> `;
        }
    }, 1000);
}



document.querySelector("#pbottom").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
        
    }
});
    
    

runTimer();
makeBubble();
getNewHit();


