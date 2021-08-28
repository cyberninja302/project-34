var dog,dogImg,dogImg1;
var database;
var foodS,foodSock;

function preload()
{
  dogImg=loadImage("Images/Dog.png");
  dogImg1=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}


function draw() {  

  drawSprites();
  fill(255,255,245);
  stroke("black");
  text("Food remaning : +foodS,170,200");
  textSize(13);
  text("Note : preass UP_ARROE key to feed drago milk",130,10,300,20)

}

function restock(data) {
  foodS-data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

