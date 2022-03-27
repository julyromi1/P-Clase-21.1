const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var groundprincipal;
var paredderecha;
var paredizquierda;

function setup(){
createCanvas (windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;

var ball_options = {
  restitution: 0.95,
  frictionAir:0.01,
  density:1.2
}

var groundprincipal_options = {
isStatic: true

}
// Estas lineas de codigo no son necesarias ya que realizan la misma función
/*
var paredderecha_options= {
isStatic: true
}

var paredizquierda_options= {
isStatic: true
}
*/
ball = Bodies.circle(85,25,15,ball_options);
  World.add(world,ball);
  groundprincipal=Bodies.rectangle(0,380, 400, 10, groundprincipal_options);
  World.add(world,groundprincipal);
  paredderecha=Bodies.rectangle(350,330,10,20, groundprincipal_options);
  World.add(world, paredderecha);
  paredizquierda=Bodies.rectangle(230,330, 10, 200, groundprincipal_options);
  World.add(world,paredizquierda);

    }

    



function draw(){
    createCanvas(400,400);
    background("lightgreen");
  Engine.update(engine);


  fill("blue");
  ellipse(ball.position.x,ball.position.y,20);
  fill("purple");
  rect(groundprincipal.position.x,groundprincipal.position.y, 400, 10);
  fill("green");
  rect(paredderecha.position.x,paredderecha.position.y, 10, 50);
  fill("red");
  rect(paredizquierda.position.x,paredizquierda.position.y, 10, 50);
}

function keyPressed (){
	if (keyDown("up")){ //la instrucción keyDown nesita dentro de su parentesis la tecla que va a vigilar
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  }
	}