const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Pig(700,350);
    box2 = new Pig(920,350);
    pig1 = new Pig(810, 350);
    box3 = new Pig(700,350);
    box4 = new Pig(920,350);
    pig3 = new Pig(810, 350);

    box5 = new Pig(810,350);
    
    bird = new Bird(200,50);

    piggy1= new Pig(755,350);
    piggy2= new Pig(755,350);

    piggy3= new Pig(865,350);
    piggy4= new Pig(865,350);

    piggy11= new Pig(700,350);
    piggy12= new Pig(755,350);
    piggy13= new Pig(810,350);
    piggy14= new Pig(865,350);
    piggy15= new Pig(920,350);
    piggy16= new Pig(755,350);
    piggy17= new Pig(865,350);
    
    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    

    box3.display();
    box4.display();
    pig3.display();
 

    box5.display();

    piggy1.display();
    piggy2.display();
    piggy3.display();
    piggy4.display();

    piggy11.display();
    piggy12.display();
    piggy13.display();
    piggy14.display();
    piggy15.display();
    piggy16.display();
    piggy17.display();
    

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}

