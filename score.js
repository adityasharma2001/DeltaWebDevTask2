var score =0;
var highscore;

var displayScore = 0;
function scoreUpdate(){
  score = (parseInt(ref - circle.y) );
  if(score<10){
    displayScore = "0"+ score.toString();
  }
  else{
    displayScore = score;
  }
  document.getElementById("score").innerHTML =  displayScore;
  if(highscore !== null){
      if (score > highscore) {
          localStorage.setItem("highscore", score);
      }
  }
  else{
      localStorage.setItem("highscore", score);
  }

}

function start(){
  interval = window.setInterval(scoreUpdate, 1000);
  status = "started";
}
function stop(){
    clearInterval(interval);
}
function clear(){
  stop();
  score=0;
  document.getElementById("score").innerHTML = "00";
}

function load(){




highscore = localStorage.getItem("highscore");

document.getElementById("bestscore").innerHTML = highscore;
}
