var myData;
var astronauts = [];
var myBackground
var myAstro

function preload() {
	myData = loadJSON('assets/peopleinspace.json');
	myBackground = loadImage("./assets/BG.png");
	myAstro = loadImage("./assets/50.png");
}

function setup() {

	createCanvas(500, 500);

	
	for (var i = 0; i < myData.people.length; i++) {
		
		var astroData = myData.people[i];
		
		var newAstronaut = new Astronaut(astroData.name,astroData.launchdate);
		astronauts.push(newAstronaut);
	}
	
}

function draw() {
	
	image(myBackground, 0, 0, 500, 500);
  
  fill(0);
  rect(90, 230, 310, 65);
  
  textSize(20);
  //fill(250);
	//text("MOVE YOUR MOUSE TO FIND MORE ASTRONAUTS",250,250,0,250);
	textAlign(CENTER);
  s = "MOVE YOUR MOUSE TO FIND MORE ASTRONAUTS";
  fill(250);
  text(s, 100, 240, 300, 250); // Text wraps within text box
  
	for (var i = 0; i < astronauts.length; i++) {
		var astro = astronauts[i];
		astro.move();
		astro.display();
	}

}

function Astronaut(name,date) {
  
  this.name = name;
  this.launchDate = date;
  
  var daysInSpace = (Date.now() - Date.parse(this.launchDate)) / 1000 / 60 / 60 / 24;
  
  
	this.radius = daysInSpace;

	this.x = random(this.radius, width - this.radius);
	this.y = random(this.radius, height - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;

	//this.display = function() {

		//noFill();
		//stroke(225);
		//ellipse(this.x, this.y, this.radius * 2);
		//textAlign(CENTER);
		//fill(225)
		//text(this.name,this.x,this.y);
//	}
	
	this.display = function() {
    rotate(mouseX*0.01)
		image(myAstro, this.x-this.radius/2,this.y-this.radius, this.radius,this.radius*2);
		textSize(14);
		textAlign(CENTER);
		fill(225)
		text(this.name,this.x,this.y);
	}

	this.move = function() {

		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1
			print(this.x);
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1
			print(this.y);
		}
	}
}
