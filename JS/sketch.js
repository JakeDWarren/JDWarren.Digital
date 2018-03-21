window.addEventListener("scroll", parallax);

function parallax() {
var parallax1 = document.getElementById('parallax1');
var parallax2 = document.getElementById('parallax2');
var parallax3 = document.getElementById('parallax3');
parallax1.style.top = (window.pageYOffset/2)+'px';
parallax2.style.top = (window.pageYOffset/3)+'px';
parallax2.style.top = -(window.pageYOffset/0)+'px';
}

const cards = document.querySelectorAll('.card');
cards.forEach(cardEffects => cardEffects.addEventListener('onmouseover', addEffect));
cards.forEach(cardEffects => cardEffects.addEventListener('onmouseout', removeEffect));

function addEffect(e){
  this.classList.add('hoverEffect');
}

function removeEffect(e){
  this.classList.remove('hoverEffect');
}
