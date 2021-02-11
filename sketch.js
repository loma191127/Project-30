
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundImg;
var sling,bomb;
var base1,base2,base3,base4;
var obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10;
var obj11,obj12,obj13,obj14,obj15,obj16,obj17,obj18,obj19,obj20;
function preload(){
 backgroundImg = loadImage("Background.jpg");
}
function setup(){
 createCanvas(1290, 620);
 engine = Engine.create();
 world = engine.world;

 bomb=new Bomb(200,200,40,40);
 sling=new SlingShot(bomb.body,{x:200,y:400});

 base1=new Base(645,610,1290,20);
 base2=new Base(645,10,1290,20);
 base3=new Base(10,310,20,620);
 base4=new Base(1280,310,20,620);

 obj1=new Objects(1150,600,60,60);
 obj2=new Objects(1110,600,60,60);
 obj3=new Objects(1070,600,60,60);
 obj4=new Objects(1070,540,60,60);
 obj5=new Objects(1150,540,60,60);
 obj6=new Objects(1150,540,60,60);
 obj7=new Objects(1200,540,60,60);
 
 obj8=new Objects(1050,600,60,60);
 obj9=new Objects(1110,200,60,60);
 obj10=new Objects(970,600,60,60);
 obj11=new Objects(1070,500,60,60);
 obj12=new Objects(1150,440,60,60);
 obj13=new Objects(1150,540,60,60);
 obj14=new Objects(1280,40,60,60);
 
 obj15=new Objects(1150,600,60,60);
 obj16=new Objects(1110,600,60,60);
 obj17=new Objects(1070,600,60,60);
 obj18=new Objects(1070,540,60,60);
 obj19=new Objects(1150,540,60,60);
 obj20=new Objects(1150,540,60,60);
 
 Engine.run(engine);  
}
function draw(){
 rectMode(CENTER);
 background(backgroundImg);

 bomb.display();
 sling.display();

 base1.display();
 base2.display();
 base3.display();
 base4.display();

 obj1.display();
 obj2.display();
 obj3.display();
 obj4.display();
 obj5.display();
 obj6.display();
 obj7.display();
 
 obj8.display();
 obj9.display();
 obj10.display();
 obj11.display();
 obj12.display();
 obj13.display();
 obj14.display();

 obj15.display();
 obj16.display();
 obj17.display();
 obj18.display();
 obj19.display();
 obj20.display();

 drawSprites();
}
function mouseDragged(){
 Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
 sling.fly();
}
function keyPressed(){
    if(keyCode===32){
     Matter.Body.setPosition(bomb.body,{x:200,y:200});   
    }
    sling.attach(bomb.body);
   }