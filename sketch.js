const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var base;
var wall1;
var wall2;
var bridge;
var jointPoint;
var jointLink;
var stones = [];

function setup() {
  createCanvas(500, 700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base (200,680,600,20)
  wall1 = new Base(10,330,5,680)
  wall2 = new Base(485,330,5,680)
  bridge = new Bridge(100,350, 20,20)
  jointPoint = new Base(6, {x : 250, y : 50})
  Matter.Composite.add(bridge.body, jointPoint)
  jointLink = new Link(bridge,jointPoint)
  

}

function draw() {
  background(51);
  Engine.update(engine);

  base.show();
  wall1.show();
  wall2.show();
  for(var i = 0; i <= 8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x,y,80,80)
    stones.push(stone);
  }
  
}
