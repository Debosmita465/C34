const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var box1, box2, box3;
var ball;
var chain1;
var boxS;
function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(600,height,1200,40);
  box1 = new box(1000,680,150,150);
  box2 = new box(1000,530,150,150);
  box3 = new box(1000,380,150,150);
  boxS = new ground(400,400,10,10);
ball = new wreckingBall(400,400,30);
chain1 = new chain(ball.body,boxS.body);
  Engine.run(engine);
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  boxS.display();
  ball.display();
  chain1.display();

}

function mouseDragged(){
Matter.Body.setPosition(boxS.body,{x:mouseX,y:mouseY});
}