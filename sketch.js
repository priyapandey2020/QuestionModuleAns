const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Butterfly(100,100);

    chain = new Chain(bird.body,{x:200, y:100});
}

function draw(){

    background("lightblue");
    Engine.update(engine);
    strokeWeight(4);

    bird.display();
    chain.display();
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
