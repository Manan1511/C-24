const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2,bird1;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(250,300,50,50);
    box2 = new Box(150,300,50,50);
    box3 = new Box(250,250,50,50);
    box4 = new Box(150,250,50,50);
    ground = new Ground(200,height,400,20)
    pig1 = new Pig(200,300,50,50);
    pig2 = new Pig(200,250,50,50);
    log1 = new WoodLog(200,275,PI);
    bird1 = new Bird(300,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    bird1.display();
}