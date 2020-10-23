var rect1,rect2,rect3
function setup() {
  createCanvas(800,600);
  rect1 = createSprite(400, 200, 100, 50);
  rect1.shapeColor = "red";
  rect1.velocityY = 2
  
  rect2 = createSprite(400,400,50,100);
  rect2.shapeColor = "green";
  rect2.velocityY = -2;

  rect3 = createSprite(400,100,50,100);
  rect3.shapeColor="yellow";
  //rect3.velocityY = 2;
}

function draw() {
  background(255,255,255);

  if(touch(rect3,rect2)){
    rect3.shapeColor = "blue";

  }
  else{
    rect3.shapeColor = "yellow";
  }

  bounce(rect1,rect2);
  
  //rect2.x = World.mouseX
  //rect2.y = World.mouseY 
  
  drawSprites();
}
