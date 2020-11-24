const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops=50;
var drops = [];
var bruce;
var i1, i2, i3, i4;
var rand;


function preload(){
    i1 = loadImage("images/thunderbolt/1.png");
    i2 = loadImage("images/thunderbolt/2.png");
    i3 = loadImage("images/thunderbolt/3.png");
    i4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400, 510);
    engine = Engine.create();
    world = engine.world;
    bruce = new Umbrella(200, 400);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    for (var i = 0; i < maxDrops; i++) 
    {
        drops.push(new createDrop(random(0, 400), random(0, 400)));
    }

    for (var j = 0; j < maxDrops; j++)
    {
        drops[j].display();
    }

    bruce.display();

    if(frameCount%46 === 0){
        rand = random(1,2,3,4);
        var thunder = createSprite(random(40,360), 50)
        thunder.addImage(i3);
        thunder.scale = 0.5;
        thunder.lifetime = 12;
    }

    drawSprites();
}   

