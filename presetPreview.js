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
//Preset preview slideshow  thanks goes again to https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_dots2
var slideIndex2 = 1;
showDivs(slideIndex2);

function currentDiv(n) {
  showDivs((slideIndex2 = n));
}

function showDivs(n) {

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
    dots[i].className = dots[i].className.replace("active", "");
  }
  x[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += "active";
}
//Preset preview slideshow end
// 7 elements on preset preview
function currentPresetSlideMob(n) {
  showPresetSlidesMob(slideIndex = n);
}

function showPresetSlidesMob(n) {
  let slides = document.getElementsByClassName("bouquetePart");
  let dots = document.getElementsByClassName("slider");
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
function currentPresetSlide(n) {
  showPresetSlides((pSlideIndex = n));
}

function showPresetSlides(n) {
  let pSlides = document.getElementsByClassName("presetPictureDesktop");
  let options = document.getElementsByClassName("presetOption");
  let text = document.getElementsByClassName("presetText")
  if (n > pSlides.length) {
    pSlideIndex = 1;
  }
  if (n < 1) {
    pSlideIndex = pSlides.length;
  }
  for (i = 0; i < pSlides.length; i++) {
    pSlides[i].style.display = "none";
  }
  for (i = 0; i < options.length; i++) {
    options[i].className = options[i].className.replace("activePreset", "");
  }
  for (i = 0; i < text.length; i++) {
    text[i].style.display = "none";
  }
  pSlides[n*2-2].style.display="";
  pSlides[n*2-1].style.display="";
  text[n-1].style.display="initial";

  options[pSlideIndex - 1].className += " activePreset";
}
// 7 elements on preset preview end
function hideOptionsPreset() {
  let slides1 = document.getElementsByClassName("presetPictureDesktop");
  let slides2 = document.getElementsByClassName("bouquetePart");

  for (i = 0; i > slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i > slides2.length; i++) {
    slides2[i].style.display = "none";
  }
}
var slideIndex2 = 1;
showDivs(slideIndex2);

function currentDiv(n) {
  showDivs((slideIndex2 = n));
}