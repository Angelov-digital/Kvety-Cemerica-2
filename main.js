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
  sessionStorage.setItem("selectedMonth", month);
  console.log("selectedMonth:", month); // Log the selected month
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

function showCurrentMonthFlowers(){
  var currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const functionCall = `rotate${currentMonth}();`;
  eval(functionCall);
updateImages(currentMonth);
sessionStorage.setItem("selectedMonth", currentMonth);
  console.log("selectedMonth:", currentMonth);
}

var monthsData = {
  December: [
    "img/flowers/december/Dhalia.webp",
    "img/flowers/december/English rose.webp",
    "img/flowers/december/Lisianthus.webp"
  ],
  April: [
    "img/flowers/april/Lilac.webp",
    "img/flowers/april/Ranunculus.webp"
  ],
  August: [
    "img/flowers/august/Chamelaucium.webp",
    "img/flowers/august/Cinia.webp",
    "img/flowers/august/Leander.webp",
    "img/flowers/august/Lilac.webp",
    "img/flowers/august/Limonium.webp",
    "img/flowers/august/Tanacetum.webp",
    "img/flowers/august/Eringium.webp",
  ],
  January: [
    "img/flowers/february/English rose.webp",
    "img/flowers/february/Hellebore.webp",
    "img/flowers/february/Lisianthus.webp",
  ],
  February: [
    "img/flowers/february/English rose.webp",
    "img/flowers/february/Hellebore.webp",
    "img/flowers/february/Lisianthus.webp",
  ],
  July: [
    "img/flowers/july/Chamelaucium.webp",
    "img/flowers/july/Astrania.webp",
    "img/flowers/july/Cinia.webp",
    "img/flowers/july/Leander.webp",
    "img/flowers/july/Lilac.webp",
    "img/flowers/july/Limonium.webp",
    "img/flowers/july/peony.webp",
    "img/flowers/july/Tanacetum.webp",
    "img/flowers/july/Eringium.webp",
  ],
  June: [
    "img/flowers/june/Chamelaucium.webp",
    "img/flowers/june/Astrania.webp",
    "img/flowers/june/Lilac.webp",
    "img/flowers/june/Ranunculus.webp",
    "img/flowers/june/Peony.webp",
    "img/flowers/june/Tanacetum.webp",
    "img/flowers/june/Eringium.webp",
  ],
  May: [
    "img/flowers/may/Lilac.webp",
    "img/flowers/may/Ranunculus.webp",
  ],
  March: [
    "img/flowers/february/English rose.webp",
    "img/flowers/february/Hellebore.webp",
    "img/flowers/february/Lisianthus.webp",
  ],
  November: [
    "img/flowers/november/Dhalia.webp",
    "img/flowers/november/English rose.webp",
  ],
  October: [
    "img/flowers/november/Dhalia.webp",
    "img/flowers/november/English rose.webp",
  ],
  September: [
    "img/flowers/september/Cinia.webp",
    "img/flowers/september/Leander.webp",
    "img/flowers/september/Limonium.webp",
  ],
};

// Function to update the displayed images based on the selected month
function updateImages(selectedMonth) {
  let flowerContainer = document.getElementById("english-rose2");

  // Clear the existing images in the container
  flowerContainer.innerHTML = '';

  if (monthsData.hasOwnProperty(selectedMonth)) {
    var monthImages = monthsData[selectedMonth];

    // Loop through the image sources for the selected month and create and append images
    for (let i = 0; i < monthImages.length; i++) {
      let flowerFrame = document.createElement("div");
      flowerFrame.className = "flower-frame";

      let newFlowerImg = document.createElement("img");
      newFlowerImg.src = monthImages[i];
      newFlowerImg.alt = "flowers";
      newFlowerImg.className = "flower";

      let flowerName = document.createElement("p");
      flowerName.className = "flower-name";
      let imageName = monthImages[i].split('/').pop().replace(".webp", "");
      flowerName.textContent = imageName;

      flowerFrame.appendChild(newFlowerImg);
      flowerFrame.appendChild(flowerName);
      flowerContainer.appendChild(flowerFrame);
    }
  }
}

// Function to call updateImages based on the selected month
function displayImagesForMonth(selectedMonth) {
  updateImages(selectedMonth);
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
function fillContactPresetOptions(language) {
  let selectedProgram = sessionStorage.getItem("selectedProgram");
  let partsOfPreset = [];
 if (language === 'en') {
  partsOfPreset = [
    "Bouquet for bride",
    "Feather for wedding guests",
    "Wedding hall decorations",
    "Church decorations",
    "Car decorations",
    "Bridesmaids decorations",
    "Other decorations",
  ];
} else if (language === 'sl') {
  partsOfPreset = [
    "Kytica pre nevestu",
    "Pero pre svadobných hostí",
    "Výzdoba svadobnej sály",
    "Výzdoba kostola",
    "Dekorácie do auta",
    "Dekorácie pre družičky",
    "Ostatné dekorácie",
  ];
}
  
  let numberOfItemsToDisplay = 0;

  // Determine the number of items to display based on the selected program
  if (selectedProgram === "base-programme") {
    numberOfItemsToDisplay = 4;
  } else if (selectedProgram === "full-programme") {
    numberOfItemsToDisplay = 6;
  } else if (selectedProgram === "partial-programme") {
    numberOfItemsToDisplay = 5;
  }
  else if (selectedProgram === null) {
    alert("please go back and choose a program");
  }

  // Select the container where you want to add the <p> elements
  let containers = document.getElementsByClassName("contactChosenPreset");

// Loop through all elements with the class name "contactChosenPreset"
for (let j = 0; j < containers.length; j++) {
    let container = containers[j];

    // Loop to create and append the <p> elements
    for (let i = 0; i < numberOfItemsToDisplay; i++) {
        let newParagraph = document.createElement("p");
        newParagraph.textContent = partsOfPreset[i];
        container.appendChild(newParagraph);
    }
}}
function fillContactFlowers()  {

}
function displayChosenMonthMobile(language) {
  let selectedMonth = sessionStorage.getItem("selectedMonth");
  if (language==="en"){
        let container = document.getElementById("chosenMonthEn");
      
          let newParagraph = document.createElement("p");
          newParagraph.textContent = selectedMonth;
          container.appendChild(newParagraph);
        }
        if (language==="sl"){
          const slovakMonthMappings = {
            January: "Január",
            February: "Február",
            March: "Marec",
            April: "Apríl",
            May: "Máj",
            June: "Jún",
            July: "Júl",
            August: "August",
            September: "September",
            October: "Október",
            November: "November",
            December: "December"
          };
          let container = document.getElementById("chosenMonthSl");
          if (container && slovakMonthMappings[selectedMonth]) {
            let newParagraph = document.createElement("p");
            newParagraph.textContent = slovakMonthMappings[selectedMonth];
            container.appendChild(newParagraph);
          }
         
        }
        
}