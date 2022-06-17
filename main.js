//changing images onclick
function changeImage1() {
  var image = document.getElementById("testimage");
  if (image.src.match("spring")) {
    image.src = "img/spring.png";
  } else {
    image.src = "img/spring.png";
  }
}

function changeImage2() {
  var image = document.getElementById("testimage");
  if (image.src.match("summer")) {
    image.src = "img/summer.png";
  } else {
    image.src = "img/summer.png";
  }
}

function changeImage3() {
  var image = document.getElementById("testimage");
  if (image.src.match("autum")) {
    image.src = "img/autum.png";
  } else {
    image.src = "img/autum.png";
  }
}

function changeImage4() {
  var image = document.getElementById("testimage");
  if (image.src.match("winter")) {
    image.src = "img/winter.png";
  } else {
    image.src = "img/winter.png";
  }
}
// choose us 3 ailes
function chooseUs(id) {
  var a = document.getElementById("1");
  var b = document.getElementById("2");
  var c = document.getElementById("3");

  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";

  var x = document.getElementById(id);
  x.style.display = "";
}

// Choose us mobile slider
function chooseUsMobileSlider(id) {
  var q = document.getElementById("4");
  var w = document.getElementById("5");
  var e = document.getElementById("6");

  q.style.display = "none";
  w.style.display = "none";
  e.style.display = "none";

  var y = document.getElementById(id);
  y.style.display = "";
}
//scroll down button                thanks to https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
var scrollToTopBtn = document.getElementById("downButton");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 620,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// presentation slider              thanks to https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slider-cell");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Choose us mobile
function chooseUsSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slider-cell");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
