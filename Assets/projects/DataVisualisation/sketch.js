//https://github.com/JakeDWarren/JakeDWarren.github.io
//https://jakedwarren.github.io
//API Website: http://http://api.postcodes.io/

//DAT405 Assignment Submission
//Data Visualisation

//Global variables required in functions
var postcode = "PL4 8AA"; //Intial postcode reuired in order to connect successfully to API
var result; //Storage for returned API arrays

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  console.log(postcode); //A log of the postcode being queiried
  let url = "https://api.postcodes.io/postcodes/";
  result = loadJSON(url+postcode);//The URL is sent to the loadJSON that returns the data to the result variable
  console.log(result); //A log of the returned API array for the used postcode
}

//Initialisation
function setup() {
  var canvas  = createCanvas(1280, 720); //Canvas size defined as varaiable
  canvas.parent("JavaContent"); //Canvas variable attached to parent ID "JavaContent"
  loadImage("assets/UKMAP.png", function(backmap){ //Loads UKMAP.png into the Canvas
    image(backmap,0,0,500,666) //Draws image at defined size and location
  });
  background(164,205,253); //Background colour set
  fill(5, 158, 3); //Defining fill colour of green
  noStroke(); //Removing stroke
  rect(0,0,500,666); //Creates a rectangle behind image that is green (Uk land shown in picture is transparent and displays the Java code executed behind)
}

//Draw
function draw(){
}

//Function to execute on click of html button
function searchpostcode() {
  postcode = document.getElementById("userInput").value; //Fetches html inputed value and stores in 'postcode'
  preload(); //Reruns the 'preload()' function, now with update postcode
  setup(); //Reruns the 'setup()' function to remove old plotted postcode point
  setTimeout(plot,700); //Waits 700 milliseconds before executing 'plot()' function in order to give 'preload()' enough time to collect the new array
}

//Function to execute in 'searchpostcode()' onlick of html button after 700 millisecond delay
function plot() {
  //console.log(result.result.latitude); //Logs returned latidude coordinate
  let laty = map(result.result.latitude,59.7430800000000,49.8850000000000,0,666); //Maps returned latitude value onto UKMAP image dimensions
  //console.log(laty); //Logs 'laty' (new mapped value of latitide onto UKMAP image dimensions)
  //console.log(result.result.longitude); //Logs returned longitude coordinate
  let longx = map(result.result.longitude,-10.9973100000000,2.0764200000000,0,500); //Maps returned longitude value onto UKMAP image dimensions
  //console.log(longx); //Logs 'longx' (new mapped value of longitude onto UKMAP image dimensions)
  fill(255); //Define fill colour as white
  noStroke(); //Removes stroke
  ellipse(longx,laty,10,10); //Creates a 10px*10px circle at the mapped longitude and latitude values
  textSize(11.5); //Defines text size as 11.5
  text(postcode,longx-25,laty-10); //Draws the entered postcode in text above the plotted elipse
  textSize(20); //Define new text size of 20
  text("Latitude = " + result.result.latitude,width/2+100,300); //Draws latitude value in a sentence on right of canvas
  text("Longitude = " + result.result.longitude,width/2+100,330); //Draws longitude value in a sentence on right of canvas
  if (result.result.admin_ward == null) { //If result is not avaialble/null then write message on right of canvas detailing issue
    text("Ward is not available",width/2+100,360);
  } else { //If result is retuned with a value then write message on right of screen detailing the return value in a sentence
    text("Ward of " + result.result.admin_ward,width/2+100,360);
  };
  if (result.result.admin_district == null) { //If result is not avaialble/null then write message on right of canvas detailing issue
    text("District is unavailable",width/2+100,390);
  } else { //If result is retuned with a value then write message on right of screen detailing the return value in a sentence
    text("District of " + result.result.admin_district,width/2+100,390);
  };
  if (result.result.admin_county == null) { //If result is not avaialble/null then write message on right of canvas detailing issue
    text("County is unavailable",width/2+100,420);
  }else{ //If result is retuned with a value then write message on right of screen detailing the return value in a sentence
    text("County of " + result.result.admin_county,width/2+100,420);
  };
  if (result.result.region == null) { //If result is not avaialble/null then write message on right of canvas detailing issue
    text("Region is unavailable",width/2+100,450);
  } else { //If result is retuned with a value then write message on right of screen detailing the return value in a sentence
    text(result.result.region + " Region",width/2+100,450);
  };
}
