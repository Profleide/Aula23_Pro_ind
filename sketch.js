const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;// aluno

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);//limit da nossa tela
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES); //Aluno
  angle = 15; // Aluno

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);// novo objeto do tipo canhao
  cannonBall = new CannonBall(cannon.x, cannon.y);// novo objeto do tipo bola
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display(); // Depois temos q pedir pra mostar o canhao
  cannonBall.display();// mostrar o canhao
}

// aluno
function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    cannonBall.shoot();
  }
}
