
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground
function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;

	
  
	//Create the Bodies Here.
   var options= {
	isStatic : true,
   }
    ground = Bodies.rectangle(400,680,800,10,options)
	Engine.run(engine);
  


	paper1 = new paper(400,350,20)
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
 

 

rect(ground.position.x,ground.position.y,1200,150)

paper1.display();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW)  {
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-85});
	}
}