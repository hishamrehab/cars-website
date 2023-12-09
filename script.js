const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let myImage = document.getElementById("slideshow");
let Images = [
  "cars_images/car1.jpg",
  "cars_images/car2.jfif",
  "cars_images/car3.jfif",
  "cars_images/car4.jfif",
  "cars_images/car5.jfif",
  "cars_images/car6.jfif",
  "cars_images/car7.jfif",
  "cars_images/car11.jfif",
  "cars_images/car13.jfif",
  "cars_images/car14.jfif",
  "cars_images/car15.jfif",
  "cars_images/car16.jfif",
  "cars_images/car17.jfif",
  "cars_images/car18.jfif",
  "cars_images/car19.jfif",
  "cars_images/car20.jfif",
  "cars_images/car21.jfif",
  "cars_images/car22.jfif",
];
let i = 0;

function slideshow() {
  myImage.setAttribute("src", Images[i]);

  if (i == Images.length - 1) {
    i = 0;
  } else {
    i++;
  }

  setTimeout(function () {
    slideshow();
  }, 4000);
}
slideshow();

// carsbrsnds
$(document).ready(function () {
  $(".wish-icon i").click(function () {
    $(this).toggleClass("fa-heart fa-heart-o");
  });
});
// cars - brands
//AOS



// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 0,
//   centeredSlides: false,
//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });













 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 4,
   centeredSlides: true,
   spaceBetween: 30,
   centeredSlides: false,
   autoplay: {
     delay: "1000",
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     type: "fraction",
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

 var appendNumber = 4;
 var prependNumber = 1;
 document
   .querySelector(".prepend-2-slides")
   .addEventListener("click", function (e) {
     e.preventDefault();
     swiper.prependSlide([
       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
     ]);
   });
 document
   .querySelector(".prepend-slide")
   .addEventListener("click", function (e) {
     e.preventDefault();
     swiper.prependSlide(
       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
     );
   });
 document
   .querySelector(".append-slide")
   .addEventListener("click", function (e) {
     e.preventDefault();
     swiper.appendSlide(
       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
     );
   });
 document
   .querySelector(".append-2-slides")
   .addEventListener("click", function (e) {
     e.preventDefault();
     swiper.appendSlide([
       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
     ]);
   });