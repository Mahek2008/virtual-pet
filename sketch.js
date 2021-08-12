//Create variables here
var dog , happyDog;
var database;
var foodS , foodStock;
function preload()
{
	//load images here
 dog = loadImage("images/dogImg.png")
}

function setup() {
   database = firebase.database();
    createCanvas(500,500);
    dog = createSprite(250,250,10,10);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  
background();
rgb(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
drawSprites();
  //add styles here

}



