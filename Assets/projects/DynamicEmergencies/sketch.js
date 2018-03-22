//https://github.com/JakeDWarren/JakeDWarren.github.io
//https://jakedwarren.github.io

//DAT405 Assignment Submission
//Dynamic Emergencies

//Global variables required in functions
let o = 100;
let v;
var strokeValue = 1;
var strokeSize = 1;

//Initialisation
function setup() {
  var canvas  = createCanvas(594, 841); //Canvas size defined
  canvas.parent("JavaContent");
}

//Draw
function draw() {
  frameRate(20);//20 frames are generated per second

//Intial ellipse creations
  for (let i=0; i<50 && o>0; i++){
      fill(255, o);//Colour white with a decremental opactiy as the ellipses get bigger
      noStroke();
      ellipse(width/2, height/2, i, i);
      o = o-2;//Fo each loop the value of 'o' decreases by 2
      console.log(o,i);
  }

//Variables for arc start and end points (each draw randomises a new start and stop vaule which is the same and always between 55 and width)
  let a =random(55,width-20);
  let b =random(55,width-20);
  let c =random(55,width-20);
  let d =random(55,width-20);
  let e =random(55,width-20);
  let f =random(55,width-20);
  let g =random(55,width-20);
  let h =random(55,width-20);

//Settings for the arcs
  strokeCap(SQUARE);
  strokeWeight(strokeSize);
  stroke(random(255), random(255), random(255));//random selection of colour for each new arc created
  noFill();

//Arc creation
  arc(width/2, height/2, a, a, PI, PI+QUARTER_PI);//Segment area 1
  arc(width/2, height/2, b, b, PI+QUARTER_PI,PI+HALF_PI);//Segment area 2
  arc(width/2, height/2, c, c, PI+HALF_PI, PI+HALF_PI+QUARTER_PI);//Segment area 3
  arc(width/2, height/2, d, d, PI+HALF_PI+QUARTER_PI,TWO_PI);//Segment area 4
  arc(width/2, height/2, e, e, TWO_PI,TWO_PI+QUARTER_PI);//Segment area 5
  arc(width/2, height/2, f, f, TWO_PI+QUARTER_PI,TWO_PI+HALF_PI);//Segment area 6
  arc(width/2, height/2, g, g, TWO_PI+HALF_PI,TWO_PI+HALF_PI+QUARTER_PI);//Segment area 7
  arc(width/2, height/2, h, h, TWO_PI+HALF_PI+QUARTER_PI,PI);//Segment area 8

}

function mouseWheel(event) {
strokeValue += event.delta;//obtaining input values of either 1 or -1 from user event scroll.
strokeSize = map(strokeValue,50,-50,1,100)//mapping input to size of stroke
console.log(strokeValue,strokeSize);
}
