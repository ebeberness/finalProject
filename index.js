let t = 0;
let lines = [];
let isDrawing = false;
let startX, startY;
let slider;
let val;
let clearPressed = false;
let newCanvas;
let circles = [];
let stars = [];
let shape = "";

function setup() {

  createCanvas(600, 600);
  colorMode(HSB);

  stroke (255);
  fill(255);
  slider = createSlider(0, 360, 60, 40);
  slider.position(620, 10);
  slider.style('width', '80px');
  
  saveButton = createButton('Save');
  saveButton.position(670, 200);
  saveButton.mousePressed(saveArt);
  
  clearButton = createButton('Clear');
  clearButton.position(620, 200);
  clearButton.mousePressed(erased);
  
  lineButton = createButton ('Lines');
  lineButton.position(620, 50);
  lineButton.mousePressed(drawLine);
  
  circleButton = createButton ('Circles');
  circleButton.position(620, 75);
  circleButton.mousePressed(drawCircles);  
  
  starButton = createButton ('Stars');
  starButton.position(620, 100);
  starButton.mousePressed(drawStars); 
  
  blackInk = createButton ('Black');
  blackInk.position(672, 150);
  blackInk.mousePressed(fillBlack);
  
  whiteInk = createButton ('White');
  whiteInk.position(620, 150);
  whiteInk.mousePressed(fillWhite);
}


function draw() {
  clear();
  let val = slider.value();
  background(val, 100, 100, 1);
  
  if(clearPressed == true){
    erased();
   }
  
  if (shape == "line"){
    drawLine();
  }
  
  if(shape == "circle"){
    drawCircles();
  }
  
  if(shape == "star"){
    drawStars();
  }
  
  for (const lin of lines) {
    strokeWeight(5);
    line(lin.startX, lin.startY, lin.endX, lin.endY);
  }
  
  for (const circ of circles) {
    strokeWeight(0);
    circle(circ.startX, circ.startY, 25);
  }
  
  for (const s of stars) {
    strokeWeight(0);
    star(s.startX, s.startY, 10, 5, 5);
  }
  
  }
  
function drawLine() {
 shape = "line";

 if (mouseIsPressed) {
    if (isDrawing) {
      lines.push({
        startX: mouseX,
        startY: mouseY,
        endX: pmouseX,
        endY: pmouseY,
      });
    }
    isDrawing = true;
    }

  if (isDrawing) {
    //stroke(255);
    line(startX, startY, mouseX, mouseY);
  }
  
  
}

function drawCircles() {
//strokeWeight (0);
 shape = "circle";

  if (mouseIsPressed) {
    if (isDrawing) {
      circles.push({
        startX: mouseX,
        startY: mouseY,
      });
    }
    isDrawing = true;
      }

  if (isDrawing) {
    //stroke(255);
    circle(mouseX, mouseY, 25);
  }
  
}

function drawStars() {
 //strokeWeight (0);
 shape = "star";
 //stroke(0);
  if (mouseIsPressed) {
    if (isDrawing) {
      stars.push({
        startX: mouseX,
        startY: mouseY,
      });
    }
    isDrawing = true;
      }

  if (isDrawing) {
   // stroke(255);
    star(mouseX, mouseY, 10, 5, 5);
  }
}

function erased() {
      lines=[];
      circles = [];
      stars = [];
      clearPressed = false;
}

function saveArt() {
  saveCanvas(canvas, 'myCanvas', 'jpg');
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function fillBlack(){
 fill (0);
 stroke(0);
}

function fillWhite(){
  fill (255);
  stroke(255);

}

