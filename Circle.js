var bgSound ;
function Circle(){
  bgSound = new sound("bg.mp3");
  this.colour = colours[(Math.floor(Math.random() * colours.length))];
	this.radius = 11.5;
	this.y = height * 0.8;
	this.x = width / 2;

	this.gravity = 0.17;
	this.lift = -2;
	this.velocity = 0;

  this.show = function(){
    bgSound.play();
      start();
    fill(this.colour[0], this.colour[1], this.colour[2]);
    ellipse(this.x, this.y, this.radius*2, this.radius * 2);
    }

  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.velocity <= -3){
      this.velocity = -3;
    }

    if(this.y + this.radius > height){
      this.y = height - this.radius;
      this.velocity = 0;
    }
  }

  this.up = function(){
    this.velocity = this.lift;
    this.velocity += this.lift*0.7;
  }

  this.changeColour = function() {
		var newColour = colours[(Math.floor(Math.random() * colours.length))];
		while (newColour == this.colour) {
			newColour = colours[(Math.floor(Math.random() * colours.length))];
		}
		this.colour = newColour;
	}


}
