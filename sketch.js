const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2
var ground1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,100,60,60);
    box2 = new Box(180,40,60,100)
   ground1= new groundC();
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    ground1.display();
    box2.display();
}