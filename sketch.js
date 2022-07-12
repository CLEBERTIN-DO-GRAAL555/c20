
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var chaoOptions={
		isStatic:true
	}
    solo=Bodies.rectangle(600,580,1200,2,chaoOptions)
    World.add(world,solo)

	var b1_options={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	var b2_options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var b3_options={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	b1=Bodies.circle(220,10,10,b1_options)
    World.add(world,b1)

	b2=Bodies.rectangle(110,50,10,10,b2_options)
    World.add(world,b2)

	b3=Bodies.rectangle(350,50,50,20,b3_options)
    World.add(world,b3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(solo.position.x,solo.position.y,1200,2)
  rect(b2.position.x,b2.position.y,10,10)
  rect(b3.position.x,b3.position.y,50,20)
  ellipse(b1.position.x,b1.position.y,10)
  drawSprites();
 
}



