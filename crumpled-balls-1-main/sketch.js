var boxedge1,boxedge2,boxedge3;
var ground;
var ball;

var dustbinimg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 dustbinimg = loadImage("images/dustbingreen.png");
}

function setup() {
  createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width / 2, 675, width, 10, {isStatic: true});
	World.add(world, ground);

	  boxedge1 = Bodies.rectangle(1090, 515, 20, 300, {isStatic: true});
    World.add(world, boxedge1);

    boxedge2 = Bodies.rectangle(1200, 655, 200, 20, {isStatic: true});
    World.add(world, boxedge2);

    boxedge3 = Bodies.rectangle(1310, 515, 20, 300, {isStatic: true});
	  World.add(world, boxedge3);
	
    ball = new paper(210,500,50,50);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");
  
  rect(boxedge1.position.x, boxedge1.position.y, 20, 300)
  rect(boxedge2.position.x, boxedge2.position.y, 200, 20)
  rect(boxedge3.position.x, boxedge3.position.y, 20, 300)
  rect(ground.position.x, ground.position.y, 1600, 20)

  ball.display();
  imageMode(CENTER)
  image(dustbinimg,1200,520,300,320)

  drawSprites();
 
}

function keyPressed() {
   if (keyCode === (DOWN_ARROW)) {
     Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95});
   }
}

