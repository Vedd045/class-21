var fixedRect, movingRect;
var rect1,rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1 = createSprite(50, 400, 50,100);
  rect1.velocityX=5
  rect2 = createSprite(1000,400, 80, 80);
  rect2.velocityX=-5
}

function draw() {
  background(0,0,0);  
bounceoff(rect1,rect2);
 bounceoff(fixedRect,movingRect)
  drawSprites();
}
function bounceoff(r1,r2){
  if (r1.x -r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x < r2.width/2 + r1.width/2) {
      r2.velocityX = r2.velocityX * (-1);
       r1.velocityX = r1.velocityX * (-1);
 
}
if (r1.y - r2.y < r2.height/2 + r1.height/2
  && r2.y -r1.y < r2.height/2 + r1.height/2){
    r1.velocityY = r1.velocityY * (-1);
  r2.velocityY = r2.velocityY * (-1);
}
}