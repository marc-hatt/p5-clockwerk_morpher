var angle;
var pos;
var side;
var c = color(sec*4, min*4, std*4);

function setup() {
	side = 60;
	createCanvas(windowWidth, windowHeight);
	angle = 0;
	pos = p5.Vector.fromAngle(0);
	angleMode(DEGREES);
	setRadius();
}

function setRadius() {
	var m = min(windowWidth, windowHeight);
	var radius = m/2-side*0.8;
	pos.setMag(radius);
}

function drawRect(pos) {
push();
translate(pos.x, pos.y);
rotate(angle);
rect(-side/2, -side/2, side, side);
pop();
}

function draw() {

	var sc = second();
	var mn = minute();
	var hr = hour();

translate(windowWidth/2, windowHeight/2);
var a = angle / 4;
  	drawRect(p5.Vector.mult(pos.rotate(sc/3), cos(a)*0.75));
  	drawRect(p5.Vector.mult(pos.rotate(sc/3), sin(a*1.5)));
  	drawRect(p5.Vector.mult(pos.rotate(mn/3), sin(a)*0.66));
  	drawRect(p5.Vector.mult(pos.rotate(hr/3), cos(a)*0.75));

angle += 0.089;
pos.rotate(0.02);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setRadius();
}
