var box;


function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50);
  
}

function draw() 
{
  background("red");
if(keyDown("RIGHT_ARROW")){
box.x=box.x+5
}
if(keyDown("left")){
  box.x-=5
}
if(keyDown("up")){
  box.y-=5
}
if(keyDown("down")){
  box.y+=5
}
  drawSprites();
}




