const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var ground, platform1, platform2, polygon, slingshot, col;
var lock1, lock2, lock3, lock4, lock5, lock6, lock7, lock8, lock9, backgroundImg;
var bg = "sprites/bg.png";
function preload(){
  getTime();
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(420, 395, 800, 10);
  platform1 = new Ground(315, 300, 255, 10);
  platform2 = new Ground(600, 200, 180, 10);
  //polygon = Bodies.circle(50, 200, 20);
  //slingshot = new SlingShot(this.polygon, {x: 100, y: 200})
  //level 1
  block1 = new Block(410, 250, 30, 40);
  block2 = new Block(380, 250, 30, 40);
  block3 = new Block(350, 250, 30, 40);
  block4 = new Block(320, 250, 30, 40);
  block5 = new Block(290, 250, 30, 40);
  block6 = new Block(260, 250, 30, 40);
  block7 = new Block(230, 250, 30, 40);
  //level 2
  block8 = new Block(260, 210, 30, 40);
  block9 = new Block(290, 210, 30, 40);
  block10 = new Block(320, 210, 30, 40);
  block11 = new Block(350, 210, 30, 40);
  block12 = new Block(380, 210, 30, 40);
  //level 3
  block13 = new Block(290, 170, 30, 40);
  block14 = new Block(320, 170, 30, 40);
  block15 = new Block(350, 170, 30, 40);
  //level 4
  block16 = new Block(320, 130, 30, 40);
  //part 2
  //level 1
  lock1 = new Block(540, 150, 30, 40);
  lock2 = new Block(570, 150, 30, 40);
  lock3 = new Block(600, 150, 30, 40);
  lock4 = new Block(630, 150, 30, 40);
  lock5 = new Block(660, 150, 30, 40);
  //level 2
  lock6 = new Block(570, 110, 30, 40);
  lock7 = new Block(600, 110, 30, 40);
  lock8 = new Block(630, 110, 30, 40);
  //level 3
  lock9 = new Block(600, 70, 30, 40);
  polygon = new BlocktheDouble(200, 300, 20, 20);
  slingshot = new SlingShot(polygon.body, {x: 100, y: 200})
}

function draw() {
  if(backgroundImg){
  background(backgroundImg);
  }
  Engine.update(engine);
  drawSprites();
  ground.display();
  platform1.display();
  platform2.display();
  //polygon.display();
  //alert("Test");
  //slingshot.display();
  col = "lightblue";
  block1.display(col);
  block2.display(col);
  block3.display(col);
  block4.display(col);
  block5.display(col);
  block6.display(col);
  block7.display(col);
  lock1.display(col);
  lock2.display(col);
  lock3.display(col);
  lock4.display(col);
  lock5.display(col);
  col = "lightpink";
  block8.display(col);
  block9.display(col);
  block10.display(col);
  block11.display(col);
  block12.display(col);
  lock6.display(col);
  lock7.display(col);
  lock8.display(col);
  col = "lightgreen";
  block13.display(col);
  block14.display(col);
  block15.display(col);
  lock9.display(col);
  col = "lightgray";
  block16.display(col);
  polygon.display("yellow");
  slingshot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
  //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON.datetime);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(9, 10);
  if(hour >= 6 && hour <= 18 ){
      bg = "sprites/bg.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }
  backgroundImg = loadImage(bg);
}