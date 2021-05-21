//collision detection algorithm

var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(100, 200, 100, 50);
  movingrect.debug=true;
  movingrect.shapeColor="green";
  fixedrect=createSprite(200,200,50,100)         
  fixedrect.shapeColor="green"
  fixedrect.debug=true
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
//call collision detection
if (collision(movingrect,fixedrect)){
fixedrect.visible=false;

}else{
  fixedrect.visible=true
}

  drawSprites();
}