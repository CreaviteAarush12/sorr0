var boy
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint
function preload()
{
boy	= loadImage("car/boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world
	man1 = new mango(600,500,50,50)
	man2 = new mango(530,500,50,50)
	man3 = new mango(490,500,50,50)
	Ground= new ground (600,height,1200,20)
	Tree= new tree(600,530,400,400)
	Stone=  new stone (150,580,)
	Lling = new Sling(Stone.body,{x:200, y:50});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  image(boy, 100,530,200,200);
man1.display()
man3.display()
man2.display()
Ground.display();
Tree.display()
Stone.display();
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   Stone.fly();
}






