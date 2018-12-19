//for red, green, and blue color values
var canvas;
//Create two variables that will store the new objects from the class Circle
let pinkCircleArray = [];
let darkBlueCircleArray = [];
let blueCircleArray = [];
let whiteCircleArray = [];
let arraySize = 3;
var pinkCircle, darkBlueCircle, blueCircle;
var t;
var w = window.innerWidth;
var h = window.innerHeight;

if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
){
  w = window.screen.width;
  h = window.screen.height;
 }

function setup() {
  //Create canvas swize of window
  canvas = createCanvas(w,h);
  canvas.parent("sketchContainer");

  pinkCircle = loadImage("../assets/images/PinkCircle.svg");
  darkBlueCircle = loadImage("../assets/images/darkBlueCircle.svg");
  blueCircle = loadImage("../assets/images/blueCircle.svg");

  for (let i=0; i<arraySize; i++){
    t= random();

    pinkCircleArray[i] = new PinkCircle(random(-w,w), random(-h,h), random(-3, 3), random(-3, 3), random(190, 400));
    darkBlueCircleArray[i] = new DarkBlueCircle(random(-w, w), random(-h,h), random(-3, 3), random(-3, 3), random(190, 400));
    blueCircleArray[i] = new BlueCircle(random(-w,w), random (-h,h), random(-3, 3), random(-3, 3), random(190, 400));

  }

}

function draw() {
  background(0);

  for (let i=0; i<pinkCircleArray.length; i++){
    pinkCircleArray[i].moveFunction();
    pinkCircleArray[i].displayCircle();
  }
  for (let i=0; i<darkBlueCircleArray.length; i++){
    darkBlueCircleArray[i].moveFunction();
    darkBlueCircleArray[i].displayCircle();
  }
  for (let i=0; i<blueCircleArray.length; i++){
    blueCircleArray[i].moveFunction();
    blueCircleArray[i].displayCircle();
  }

}

//Definition of the class Circle
class PinkCircle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    // this.x = this.x + this.speedX;
    // this.y = this.y + this.speedY;
    //
    // //Based on boundaries collision, reverse direction for x and y
    // if (this.x > width - 230 || this.x<0){
    //   this.speedX *= -1;
    // }
    // if (this.y > (height - 230) || this.y<0){
    //   this.speedY *= -1;
    // }

    var x = width * noise(t + this.speedX);
    var y = height * noise(t + this.speedY);
    t = t + 0.0004;

    this.x = x;
    this.y = y;
  }

  //Class function that displays the ellipse
  displayCircle(){
    image(pinkCircle,this.x,this.y,this.size,this.size);
  }
}
class DarkBlueCircle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    // this.x = this.x + this.speedX;
    // this.y = this.y + this.speedY;
    //
    // //Based on boundaries collision, reverse direction for x and y
    // if (this.x > width - 230 || this.x<0){
    //   this.speedX *= -1;
    // }
    // if (this.y > (height - 230) || this.y<0){
    //   this.speedY *= -1;
    // }

    var x = width * noise(t + this.speedX);
    var y = height * noise(t + this.speedY);
    t = t + 0.0004;

    this.x = x;
    this.y = y;
  }

  //Class function that displays the ellipse
  displayCircle(){
    image(darkBlueCircle,this.x,this.y,this.size,this.size);
  }
}
class BlueCircle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    // this.x = this.x + this.speedX;
    // this.y = this.y + this.speedY;
    //
    // //Based on boundaries collision, reverse direction for x and y
    // if (this.x > width - 230 || this.x<0){
    //   this.speedX *= -1;
    // }
    // if (this.y > (height - 230) || this.y<0){
    //   this.speedY *= -1;
    // }

    var x = width * noise(t + this.speedX);
    var y = height * noise(t + this.speedY);
    t = t + 0.0004;

    this.x = x;
    this.y = y;
  }

  //Class function that displays the ellipse
  displayCircle(){
    image(blueCircle,this.x,this.y,this.size,this.size);
  }
}
