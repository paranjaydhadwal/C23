//var ground1;
// const Engine=Matter.Engine;
// const Bodies=Matter.Bodies;
// const World=Matter.World;
function setup() {
  createCanvas(800,400);
//  ground1= createSprite(50,390, 50, 800);
//  ground2= createSprite(750,390, 50, 800);
//  rect1=createSprite(400,375,800,50);
//  rect2=createSprite(200,250,50,200); 
//engine=Engine.create();
//world=engine.world;
//ground1=new Ground(50,50,50,50);
//hy=new Ground(50,20,20,20);
// ground1=new Ground(50,50,50,50);
}

function draw() {
  background(0);
  console.log(mouseX);
  console.log(mouseY);
 // background("red"); 
  //Engine.update(engine) ;
 
  rect(125, 275, 550, 125);
  rect(50,150,75,250);
  rect(675,150,75,250);
  triangle(49,151,124,151,87,87);
  triangle(675,151,749,151,712,87);
  rect(125,180,550,50);
  circle(170+20,253,35);
  circle(170+127+23+20-15,253,35);
  circle(170+127+127+23+20-10,253,35);
  circle(170+127+127+127+23+20,253,35);
  rect(365,80-20,50,215);
  triangle(389,14,366,56+5,413,56+5);

//   rect(50, 100, 15, 300);
//   rect(355, 100, 15, 300);
//   rect(300, 200, 50, 200);
//   rect(120, 250, 50, 150);
//   rect(250, 250, 50, 150);
//   rect(170, 280, 80, 120);
//   triangle(65, 200, 95, 150, 125, 200);
//   triangle(355, 200, 325, 150, 295, 200);
//   triangle(170, 280, 215, 160, 250, 280);
// // hy.display();
//ground1.display();
 //ground1.x=50;
// ground1.shapeColor="blue";
// drawSprites();
}