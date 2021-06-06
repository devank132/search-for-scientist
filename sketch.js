var corona,vaccine;
var vaccine1,vaccine2;
var vaccine3,corona1;
var runningboy,scientist
var coronai,vaccinei;
var runningboyi,scientisti
var wall1,wall2;
var wall3,wall4;
var wall5,wall6;
var wall7,wall8;
var wall9,wall10;
var wall11,wall12;
var wall13,wall14;
var wall15,wall16;
var wall17,wall18;
var wall19,wall20;
var wall21,wall22;
var wall23,wall24;
var wall25,wall26;
var wall27,wall28;
var wall29,wall30;
var wall31,wall32;
function preload() {

  coronai=loadImage("pictures/corona.jpg")
  vaccinei=loadImage("pictures/vaccine.png")
  scientisti=loadImage("pictures/scientist.jpg")
  runningboyi=loadImage("pictures/runningboy.jpg")
 console.log(displayWidth)
 console.log(displayHeight)
}

function setup() {
  createCanvas ( displayWidth,displayHeight)
  edges=createEdgeSprites()
  corona=createSprite(50,50,10,10)
  corona.addImage(coronai)
  corona.scale=0.1
  corona.velocityY=5
  corona.bounceOff(wall1) 
  corona.bounceOff(wall2)
  corona1=createSprite(1200,50,10,10)
  corona1.addImage(coronai)
  corona1.scale=0.1
  corona1.velocityY=5
  corona1.bounceOff(wall1) 
  corona1.bounceOff(wall2)
  runningboy=createSprite(625,320,10,10)
  runningboy.addImage(runningboyi)
  runningboy.scale=0.3
  scientist=createSprite(300,150,10,10)
  scientist.addImage(scientisti)
  scientist.scale=0.1
  scientist.visible=false
  vaccine=createSprite(700,200,10,10)
 vaccine.addImage(vaccinei)
 vaccine.scale=0.1
 vaccine1=createSprite(600,200,10,10)
 vaccine1.addImage(vaccinei)
 vaccine1.scale=0.1
 vaccine2=createSprite(800,200,10,10)
 vaccine2.addImage(vaccinei)
 vaccine2.scale=0.1
 vaccine3=createSprite(500,200,10,10)
 vaccine3.addImage(vaccinei)
 vaccine3.scale=0.1
wall1=createSprite(640,0,displayWidth,20)
wall2=createSprite(640,550,displayWidth,20)
wall3=createSprite(1250,360,20,700)
wall4=createSprite(0,360,20,700)
wall5=createSprite(625,360,100,20)
wall6=createSprite(675,320,20,100)
wall7=createSprite(575,320,20,100)
wall8=createSprite(200,100,20,200)
wall9=createSprite(1050,100,20,200)
wall10=createSprite(100,200,50,20)
wall11=createSprite(75,300,20,200)
wall13=createSprite(1125,200,50,20)
wall14=createSprite(1150,300,20,200)
wall15=createSprite(400,350,50,30)
wall16=createSprite(400,300,50,30)
wall17=createSprite(850,350,50,30)
wall18=createSprite(850,300,50,30)
wall19=createSprite(1150,500,50,20)
wall20=createSprite(100,500,50,20)
wall21= createSprite(300,50,20,100)
wall22=createSprite(350,100,100,10)
wall23=createSprite(950,50,20,100)
wall24=createSprite(900,100,100,20)
wall25=createSprite(400,40,40,20)
wall26=createSprite(850,40,100,20)
wall27=createSprite(300,500,20,150)
wall28=createSprite(350,430,150,20)

}

function draw() {
  background("white")
  drawSprites()
  
}