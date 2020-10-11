const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bin2 = new Bin(780,360,160,20)
    bin1 = new Bin(850,320,20,100)
    bin3 = new Bin(700,320,20,100)
    paper=new Paper(200,100)
    
    ground = new Ground(600,380,1200,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
	paper.display();
   
    bin2.display();
    bin1.display();
    bin3.display();
}
function keyPressed(){
	if( keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35});
	}
}


