function makebubble(){

    //create bubble on board
    var bubble = "";

for(i = 1; i <= 192; i++){
    var rn = Math.floor(Math.random() *10)
    bubble += `<div class="bubble"> ${rn} </div>`
    // var rn = Math.floor(Math.random() *10)
     
}

document.querySelector("#pbtm").innerHTML = bubble;
}

var timer = 60;

function runtime(){
    // start timer on the board
    var timeint = setInterval(function(){
          if(timer > 0){
            timer--;
            document.querySelector("#time").textContent = timer;
          }else{
            clearInterval(timeint)
            document.querySelector("#pbtm").innerHTML = `<h1>Game over<h1>`

          }

    },1000)
}

var hitrn;
function startHit(){
    // start hit at board
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

var score = 0;

function Increasescore(){
    score +=10;
    document.querySelector("#score").textContent = score;
}




document.querySelector("#pbtm").addEventListener("click", function(details){
    var clikedNumber = Number(details.target.textContent);
    if(clikedNumber === hitrn){
        Increasescore();
        startHit();
        makebubble();
    }

})




runtime();
makebubble();
startHit();
 

