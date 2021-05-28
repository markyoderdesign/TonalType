// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>
let drag;

function setup() {
  createCanvas(640, 360);
  drag = new Draggable();
}

function draw() {
  background(255);
  drag.update();
  drag.over();
  drag.show();
}

function mousePressed() {
  drag.pressed();
}

function mouseReleased() {
  // Quit dragging
  drag.released();
}