/*
 * @name Acceleration Ball Bounce
 * @description Move an ellipse around based on accelerationX and accelerationY values, and bounces when touch the edge of the canvas.
 */
var gui = createGui('P5 GUI');
  gui.addGlobals('numShapes', 'bigRadius', 'shape', 'label', 'radius',
  'drawFill', 'fillColor', 'drawStroke', 'strokeColor', 'strokeWidth');
// Position Variables
var x = 0;
var y = 0;
 
// Speed - Velocity
var vx = 0;
var vy = 0;
 
// Acceleration
var ax = 0;
var ay = 0;
 
var vMultiplier = 0.007;
var bMultiplier = 0.6;



function setup() {
    createCanvas(displayWidth, displayHeight);
    fill(0);
}

function draw() {
    background(255);
    ballMove();
    ellipse(x, y, 30, 30);
	
	
	switch(shape) {

		  case 'circle':
		    ellipse(x, y, d, d);
		    break;

		  case 'square':
		    rectMode(CENTER);
		    rect(x, y, d, d);
		    break;

		  case 'triangle':
		    ngon(3, x, y, d);
		    break;

		  case 'pentagon':
		    ngon(5, x, y, d);
		    break;

		  case 'star':
		    star(6, x, y, d/sqrt(3), d);
		    break;

		}

}

function ballMove() {

	ax = rotationX;
	ay = rotationY;

	vx = vx + ay;
	vy = vy + ax;
	y = y + vy * vMultiplier; 
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the canvas
	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * bMultiplier; 
 	}
 	if (x > width - 20) { 
 		x = width - 20; 
 		vx = -vx * bMultiplier; 
 	}
 	if (y > height - 20) { 
 		y = height - 20; 
 		vy = -vy * bMultiplier; 
 	}
	
}

