const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine, myworld, ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup() 
{
  createCanvas(1200,600);

  myengine=Engine.create();
  myworld=myengine.world;

  
  ground=new Ground(600,590,1200,20);

  box1=new  Box(700,500,70,70)
  box2=new Box(920,500,70,70)
  box3=new Box(700,400,70,70);
  box4=new Box(920,400,70,70)
  box5= new Box(810,230,70,70)

  pig1=new Pig(810,500);
  pig2=new Pig(810,400);

  log1= new Log(810,430,300,PI/2);
  log2=new Log(810,330,300,PI/2);
  log3= new Log(760,230,150,PI/8)
  log4=new Log(840,230,150,-PI/9)

  bird= new Bird(100,100)
  
  
}

function draw()
{
  background(0);  
  Engine.update(myengine);
  

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display()

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
 
  bird.display();
}