var bg,bg2,form,System,Code,Security;
var score=0;

var Security = [];
var System = [];
var Code =[];

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
 
  //load image for the treasure background
  bg2=loadImage("treasure.jpg")

  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
 
  if(score === 3) {
    clear()
    background(bg2)
    fill("green")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);

  }

  drawSprites()
}