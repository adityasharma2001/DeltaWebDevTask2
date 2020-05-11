var circle;
var obstacles = [];
var colourChangers = [];
var smallCircles = [];
var numOffScreen = 0;
var gameOver = false;
var a=0;



function setup(){
  //creating canvas
  createCanvas(400 , 600);
  circle = new Circle();
  for (var i=0; i< 20; i++){
    obstacles.push(new CircleObstacle(width / 2, height * (1 - i) / 2));
    colourChangers.push(new ColourChanger(width / 2, height * (1 - 2 * i) / 4));


  }
}

function draw(){
  background(32, 32, 32);


  for(var i = 0; i< colourChangers.length; i++){
    obstacles[i].show();
    obstacles[i].update();
    colourChangers[i].show();
    colourChangers[i].update();

    if(obstacles[i].offscreen()){
      obstacles.splice(i, 1);
    }

    if(obstacles[i].intersect() && !gameOver){
      gameOver = true;

      for (var i = 0; i < 15; i++) {
        smallCircles.push(new SmallCircle(circle.x, circle.y));
      }

      background(255);
      var j = 1;
      while (j < 100000) {
        j++;
      }
    }

    else if (colourChangers[i].intersect()) {
     colourChangers.splice(i, 1);
     circle.changeColour();
   }


  }

  if(gameOver){

    if (numOffScreen >= 15) {
      this.end();
    }
    for (var i = 0; i < smallCircles.length; i++) {
      smallCircles[i].show();
      smallCircles[i].update();

      if (smallCircles[i].offscreen()) {
        smallCircles.splice(i, 1);
        numOffScreen++;
      }
    }
  }

  if(!gameOver){
    circle.show();
    circle.update();
  }
}

function keyPressed(){
  if(key == ' '){

    circle.up();



  }
}

function gameOverAnimation() {
  // Keep updating unless all the circles are offscreen
  while (numOffScreen < smallCircles.length) {
    for (var i = 0; i < smallCircles.length; i++) {
      smallCircles[i].show();
      smallCircles[i].update();

      if (smallCircles[i].offscreen()) {
        smallCircles.splice(1, i);
        numOffScreen++;
      }
    }
  }
}
