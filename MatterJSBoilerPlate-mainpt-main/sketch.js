
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,block3
var chao
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var block1_opitions={
restitution:0.5,
friction:0.01,
frictionAir:0
}

var block2_opitions={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
	}
	var block3_opitions={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
		}
		var chao_opitions={
			isStatic:true
			}


	//Crie os Corpos Aqui.
block1=Bodies.circle(220,10,10,block1_opitions)
World.add(world,block1)

block2=Bodies.rectangle(110,50,10,10,block2_opitions)
World.add(world,block2)

block3=Bodies.rectangle(350,50,10,10,block3_opitions)
World.add(world,block3)

chao=Bodies.rectangle(400,680,800,10,chao_opitions)
World.add(world,chao)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ellipse(block1.position.x,block1.position.y,10)
  rect(block2.position.x,block2.position.y,10,10)
  rect(block3.position.x,block3.position.y,10,10)
  rect(chao.position.x,chao.position.y,800,10)
}



