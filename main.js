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
  var dots = document.getElementsByClassName("slider-cellActive");
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




function rotate(angle) {
  document.querySelector("#link-grid").style.transform = `rotate(${angle}deg)`;
  
}

const months = [
  { name: "January", angle: -45 },
  { name: "February", angle: -15 },
  { name: "March", angle: 15 },
  { name: "April", angle: 45 },
  { name: "May", angle: 75 },
  { name: "June", angle: 105 },
  { name: "July", angle: 135 },
  { name: "August", angle: 165 },
  { name: "September", angle: -165 },
  { name: "October", angle: -135 },
  { name: "November", angle: -105 },
  { name: "December", angle: -75 },
];

months.forEach((month) => {
  window[`rotate${month.name}`] = function () {
    rotate(month.angle);
  };
});
function clickCheckbox(event, month) {
  const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
  sessionStorage.setItem("selectedMonth", month); // Use "selectedMonth" consistently here
  let selectedMonth = sessionStorage.getItem("selectedMonth");
  console.log(selectedMonth); // Log the selected month
  if (checkbox) {
    checkbox.checked = true;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((box) => {
      if (box !== checkbox) {
        box.checked = false;
      }
    });
  }
}
let selectedMonth = sessionStorage.getItem("selectedMonth");
console.log(selectedMonth);
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

function storeClickedProgram(program) {
  sessionStorage.setItem("selectedProgram", program);
}

// Function to log the value of selectedProgram at all times
function logSelectedProgram() {
  let selectedProgram = sessionStorage.getItem("selectedProgram");
  console.log(selectedProgram);
}

// Call logSelectedProgram whenever needed to log the value of selectedProgram
logSelectedProgram();

let userChoice ={};
function getUserChoise() {
  let selectedProgram = sessionStorage.getItem("selectedProgram");
  let selectedMonth = sessionStorage.getItem("selectedMonth");
  userChoise = {
    "selectedProgram" : selectedProgram,
    "selectedMonth" : selectedMonth,
  };
  console.log(userChoise);
}
function fillContactPage() {
  let selectedProgram = sessionStorage.getItem("selectedProgram");
  let partsOfPreset = [
    "Bouquet for bride",
    "Feather for wedding guests",
    "Wedding hall decorations",
    "Church decorations",
    "Car decorations",
    "Bridesmaids decorations",
    "Other decorations",
  ];

  let numberOfItemsToDisplay = 0;

  // Determine the number of items to display based on the selected program
  if (selectedProgram === "base-programme") {
    numberOfItemsToDisplay = 4;
  } else if (selectedProgram === "full-programme") {
    numberOfItemsToDisplay = 6;
  } else if (selectedProgram === "partial-programme") {
    numberOfItemsToDisplay = 5;
  }

  // Select the container where you want to add the <p> elements
  let container = document.getElementById("contactChosenPreset");

  // Loop to create and append the <p> elements
  for (let i = 0; i < numberOfItemsToDisplay; i++) {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = partsOfPreset[i];
    container.appendChild(newParagraph);
  }
}