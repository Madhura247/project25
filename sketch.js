const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, ground, BottomBox, LeftBox, RightBox;


function setup() {
	createCanvas(1500, 500);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(50, 300, 70);

	ground = new Ground(width/2, 430, width, 10);
	
	//LeftBox = new Dustbin (1300, 414, 200, 90);
	//RightBox = new Dustbin (1200, 374, 100, 0, 100);
  dustbin = new Dustbin (1200, 374, 100, 0, 100);

	Engine.run(engine);
  
}


function draw() {
  
  background(200);
  rectMode(CENTER);
  
  Engine.update(engine);

  ground.display();
  dustbin.display();
  paper.display();
  //BottomBox.display();
  
  //RightBox.display();

}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.setStatic(paper.body, false);
      Matter.Body.applyForce(paper.body, paper.body.position, {x:100, y:-100})
  }
}