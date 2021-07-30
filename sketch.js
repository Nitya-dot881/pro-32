const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  world;
var ground,slingshot ,box1;
var bg = "bg1.png";
var backgroundImg

function preload()
{
  getTime();
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
   world=engine.world


  ground=new Ground (400,305,300,20)
  ground2=new Ground (450,470,200,20)
 
  box1=new Box(330,235,30,40)

  box2=new Box(360,235,30,40)
  box3=new Box(390,235,30,40)
  box4=new Box(420,235,30,40)
  box5=new Box(450,235,30,40)
  box6=new Box(360,195,30,40)
  box9=new Box(390,195,30,40)
  box7=new Box(420,195,30,40)
  box8=new Box(390,155,30,40)
  box10=new Box(360,275,30,40)
  box11=new Box(390,275,30,40)
  box12=new Box(420,275,30,40)
  box13=new Box(390,275,30,40)
  box14=new Box(330,275,30,40)
  box15=new Box(300,275,30,40)
  box16=new Box(450,275,30,40)
  box17=new Box(480,275,30,40)

  bo1=new Box(450,400,30,40)
  bo2=new B(420,430,30,40)
  bo3=new Bo(390,430,30,40)
  bo4=new B(450,430,30,40)
  bo5=new Bo(450,460,30,40)
  bo6=new Bo(420,460,30,40)
 
  bo7=new Bo(480,460,30,40)
  bo8=new Bo(510,460,30,40)
  bo9=new B(480,430,30,40)

  
  poly=new Polygon(250,180,40,40)
  slingshot = new SlingShot(poly.body,{x:100, y:200});
  
}

function draw() {
   
  if(backgroundImg)
        background(backgroundImg);
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
 
  ground2.display()
  bo1.display()
  bo2.display()
  bo3.display()
  bo4.display()
  bo5.display()
  bo6.display()
  bo7.display()
  bo8.display()
  bo9.display()
 
 
 
  poly.display()
  slingshot.display()
  
  drawSprites();
}
function mouseDragged(){
  
      Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(poly.body);
  }


}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
console.log(responseJSON)
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);
  if(hour>=06 && hour<=19){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
}

