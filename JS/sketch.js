//Listens for scroll to be active to execute 'parallax' function
window.addEventListener("scroll", parallax);

//Function to adjust the Y offset of paralax images depending on scrolling activation
function parallax() {
  var parallax1 = document.getElementById('parallax1');
  var parallax2 = document.getElementById('parallax2');
  var parallax3 = document.getElementById('parallax3');
  parallax1.style.top = (window.pageYOffset/2)+'px';
  parallax2.style.top = (window.pageYOffset/3)+'px';
  parallax2.style.top = -(window.pageYOffset/0)+'px';
}

//Execute functions on load of page
window.onload = function() {
  nightColor();
  currentYear();
};

//Function to set copyright year in footer
function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

//Function to set background to black when time is between 8pm and 7.59am
function nightColor(){
  var d = new Date();
  var n = d.getHours();

  if(n>=20 || n<=7){
    var element = document.getElementById("body");
    element.classList.add("timeD");
    console.log(n);
  }
};

$('.js-tilt').tilt({
    glare: true,
    maxGlare: 5.5
})
