/* Initialize Swiper*/
var swiper = new Swiper(".mySwiper", {});
// 7 elements on preset preview
function currentPresetSlideMob(n) {
  showPresetSlidesMob((slideIndex = n));
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
  let options = document.getElementsByClassName("activeOption");
  let text = document.getElementsByClassName("presetText");
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
    options[i].className = options[i].className.replace(" underlineDLongNoMargins", "");
  }
  for (i = 0; i < text.length; i++) {
    text[i].style.display = "none";
  }
  pSlides[n * 2 - 2].style.display = "";
  pSlides[n * 2 - 1].style.display = "";
  text[n - 1].style.display = "initial";

  options[pSlideIndex - 1].className += " underlineDLongNoMargins";
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
