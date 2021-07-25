const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var batM;
var dropL;
var drops = [];
var batMimg;
var lightning;
var lightimg;

var timer = 0;

var rota = 0;

function preload()
{
  batMimg = loadImage("batman3r.png");
  lightimg = loadAnimation("lightning1r.png","lightning2r.png","lightning3r.png","lightning4r.png");
}

function setup()
{
  canvas = createCanvas(714,714);

  batM = createSprite(width/2, height/2);
  batM.addImage(batMimg);
  batM.scale = 0.15

  lightning = createSprite(200,150);
  lightning.addAnimation('lightt', lightimg);
  lightning.frameDelay = 2;
  lightning.scale = 1;

  batM.rotation = batM.rotation+10
  batM.velocityX = 1;

  engine = Engine.create();
  world = engine.world;  
}

function draw()
{
  background("#202020");
  Engine.update(engine);
  drawSprites();

  if(batM.x > 450)
  {
    batM.velocityX = -1;
    batM.rotation = batM.rotation-20
  }

  if(batM.x < 250)
  {
    batM.velocityX = 1;
    batM.rotation = batM.rotation+20
  }
 
  if(timer > 0)
  {
    lightning.visible = true;
  }else
  {
    lightning.visible = false;
  }

  if(timer === 0 && frameCount % 70 === 0)
  {
    timer = 10;
    lightning.x = Math.round(random(50,650));
    rota = Math.round(random(-30,30));
    lightning.rotation = lightning.rotation + rota;
  }

  if(timer > 0 && frameCount%5===0)
  {
    timer = timer-5;
  }

  if(drops.length < 200)
  {
    dropL = new rain(Math.round(random(0,710)), 0,4,4);
    drops.push(dropL);
  }

  for(var i = 0 ; i < drops.length ; i++)
  {
    drops[i].display();
    drops[i].cycle();
  }
}

function move(){}
