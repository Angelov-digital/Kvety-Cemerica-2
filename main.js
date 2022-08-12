//CAROUSEL for preset preview thanks goes to https://www.youtube.com/watch?v=KtsVC_JRxCU&ab_channel=codefoxx
var images = ["img/bouquet1.webp", "img/bouquet2.webp", "img/bouquet3.webp"];
var carousel = document.querySelector(".carousel");
var interval = setInterval(function () {
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
//changing images onclick
function changeImage1() {
  var image = document.getElementById("season-featured");
  if (image.src.match("img/spring.webp")) {
    image.src = "img/spring.webp";
  } else {
    image.src = "img/spring.webp";
  }
}

function changeImage2() {
  var image = document.getElementById("season-featured");
  if (image.src.match("summer")) {
    image.src = "img/summer.webp";
  } else {
    image.src = "img/summer.webp";
  }
}

function changeImage3() {
  var image = document.getElementById("season-featured");
  if (image.src.match("autum")) {
    image.src = "img/autum.webp";
  } else {
    image.src = "img/autum.webp";
  }
}

function changeImage4() {
  var image = document.getElementById("season-featured");
  if (image.src.match("winter")) {
    image.src = "img/winter.webp";
  } else {
    image.src = "img/winter.webp";
  }
}
// month bar rotation + flower change

function rotateMonthSummer() {
  document.querySelector("#link-grid").style.transform = "rotate(136deg)";
  document.getElementById("flower1").src = "img/flowers/summer4.webp";
  document.getElementById("flower2").src = "img/flowers/summer2.webp";
  document.getElementById("flower3").src = "img/flowers/summer3.webp";
}
function rotateMonthAutum() {
  document.querySelector("#link-grid").style.transform = "rotate(226deg)";
  document.getElementById("flower1").src = "img/flowers/autum1.webp";
  document.getElementById("flower2").src = "img/flowers/autum2.webp";
  document.getElementById("flower3").src = "img/flowers/autum3.webp";
}
function rotateMonthWinter() {
  document.querySelector("#link-grid").style.transform = "rotate(316deg)";
  document.getElementById("flower1").src = "img/flowers/winter1.webp";
  document.getElementById("flower2").src = "img/flowers/winter2.webp";
  document.getElementById("flower3").src = "img/flowers/winter3.webp";
}
function rotateMonthSpring() {
  document.querySelector("#link-grid").style.transform = "rotate(46deg)";
  document.getElementById("flower1").src = "img/flowers/spring1.webp";
  document.getElementById("flower2").src = "img/flowers/spring2a.webp";
  document.getElementById("flower3").src = "img/flowers/spring3.webp";
}
// change flower names
function changeTextSummer() {
  {
    var element = document.getElementById("flowerName1");
    element.innerHTML = "Pink rose";
  }
  {
    var element = document.getElementById("flowerName2");
    element.innerHTML = "Nice purple flower";
  }
  {
    var element = document.getElementById("flowerName3");
    element.innerHTML = "Karafiát";
  }
}
function changeTextSpring() {
  {
    var element = document.getElementById("flowerName1");
    element.innerHTML = "Lisianthus";
  }
  {
    var element = document.getElementById("flowerName2");
    element.innerHTML = "White Rose";
  }
  {
    var element = document.getElementById("flowerName3");
    element.innerHTML = "English rose";
  }
}
function changeTextAutum() {
  {
    var element = document.getElementById("flowerName1");
    element.innerHTML = "Violetum";
  }
  {
    var element = document.getElementById("flowerName2");
    element.innerHTML = "Vřes obecný";
  }
  {
    var element = document.getElementById("flowerName3");
    element.innerHTML = "Modrý bodlák";
  }
}
function changeTextWinter() {
  {
    var element = document.getElementById("flowerName1");
    element.innerHTML = "Winter Rose";
  }
  {
    var element = document.getElementById("flowerName2");
    element.innerHTML = "Plevel Krásný";
  }
  {
    var element = document.getElementById("flowerName3");
    element.innerHTML = "Bělavka úžasná";
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
    top: 850,
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
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slider-cell");
  getSlides(n, slides, dots);
}

//Choose us mobile
function chooseUsMobileSlider(n) {
  showChooseUsMob((slideIndex = n));
}

function showChooseUsMob(n) {
  let slides = document.getElementsByClassName("chooseUsMobile");
  let dots = document.getElementsByClassName("chooseUs-slider");
  getSlides(n, slides, dots);
}

//choose us desktop version
function chooseUsSlides(n) {
  showChooseUs((slideIndex = n));
}

function showChooseUs(n) {
  let slides = document.getElementsByClassName("chooseus-content");
  let dots = document.getElementsByClassName("titleChooseUs");

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
    dots[i].className = dots[i].className.replace(" underlineD", "");
  }
  slides[slideIndex - 1].style.display = "";
  dots[slideIndex - 1].className += " underlineD";
}
//function that gets all slides and active sliders for carousels
function getSlides(n, slides, dots) {
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
