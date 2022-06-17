//changing images on click
function changeImage1() {
  var image = document.getElementById("season-featured");
  if (image.src.match("img/spring.png")) {
    image.src = "img/spring.png";
  } else {
    image.src = "img/spring.png";
  }
}

function changeImage2() {
  var image = document.getElementById("season-featured");
  if (image.src.match("summer")) {
    image.src = "img/summer.png";
  } else {
    image.src = "img/summer.png";
  }
}

function changeImage3() {
  var image = document.getElementById("season-featured");
  if (image.src.match("autum")) {
    image.src = "img/autum.png";
  } else {
    image.src = "img/autum.png";
  }
}

function changeImage4() {
  var image = document.getElementById("season-featured");
  if (image.src.match("winter")) {
    image.src = "img/winter.png";
  } else {
    image.src = "img/winter.png";
  }
}
// month bar rotation 

function rotateMonthSummer() {
  document.querySelector("#link-grid").style.transform = "rotate(140deg)";
}
function rotateMonthAutum() {
  document.querySelector("#link-grid").style.transform = "rotate(230deg)";
}
function rotateMonthWinter() {
  document.querySelector("#link-grid").style.transform = "rotate(320deg)";
}
function rotateMonthSpring() {
  document.querySelector("#link-grid").style.transform = "rotate(50deg)";
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
function hideOptions() {
  var b = document.getElementById("2");
  var c = document.getElementById("3");

  b.style.display = "none";
  c.style.display = "none";

  var w = document.getElementById("5");
  var e = document.getElementById("6");

  w.style.display = "none";
  e.style.display = "none";
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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
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
//CAROUSEL for preset preview thanks goes to https://www.youtube.com/watch?v=KtsVC_JRxCU&ab_channel=codefoxx
const images = ["img/bouquet1.webp", "img/bouquet2.webp", "img/bouquet3.webp"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function () {
  startCarousel();
}, 3000);
var index = 1;

startCarousel = () => {
  carousel.style.backgroundImage = `url(${images[index++]})`;
  carousel.classList.remove("fade");
  void carousel.offsetWidth;
  carousel.classList.add("fade");
  if (index > images.length - 1) index = 0;
};
//CArousel for preset preview end
//Preset preview slideshow  thanks goes again to https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_dots2
var slideIndex2 = 1;
showDivs(slideIndex2);

function currentDiv(n) {
  showDivs((slideIndex2 = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("slider-cell");
  if (n > x.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " w3-white";
}
//Preset preview slideshow end
