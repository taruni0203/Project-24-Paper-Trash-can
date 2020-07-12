
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper1 = new Paper(75,300);

	bottom = new Dustbin(1000,350,200,20);
	side1 = new Dustbin(900,310,20,100);
	side2 = new Dustbin(1100,310,20,100);

	ground = new Ground(600,360,width,20);
	keyPressed();

}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  bottom.display();
  side1.display();
  side2.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}


