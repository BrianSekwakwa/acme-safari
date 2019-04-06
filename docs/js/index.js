// Initializing variables
const form = document.querySelector(".contact__form form");
const contactForm = document.querySelector(".contact__form");
const spinner = document.querySelector(".contact__spinner");
const message = document.querySelector(".contact__message");
// const modalContent = document.querySelector(".modal__content");
// const image1 = document.querySelector("#image01");
// const image2 = document.querySelector("#image02");
// const image3 = document.querySelector("#image03");
// const image4 = document.querySelector("#image04");

// Smooth Scrolling

// Responsive Menu
$(".handle").on("click", function() {
  $("nav ul").toggleClass("showing");
});

// Form event on submit
form.addEventListener("submit", load);

function load(e) {
  contactForm.style.display = "none";
  spinner.style.display = "block";
  setTimeout(() => {
    spinner.style.display = "none";
    message.style.display = "block";
  }, 2000);
  e.preventDefault();
}

// // Click function for show the Modal

// $(".show").on("click", function() {
//   $(".mask").addClass("active");
// });

// // Function for close the Modal

// function closeModal() {
//   $(".mask").removeClass("active");
// }

// // Call the closeModal function on the clicks/keyboard

// $(".close, .mask").on("click", function() {
//   closeModal();
// });

// $(document).keyup(function(e) {
//   if (e.keyCode == 27) {
//     closeModal();
//   }
// });

// // Puttin Images into the modal
// image1.addEventListener("click", loadImage);
// image2.addEventListener("click", loadImage);
// image3.addEventListener("click", loadImage);
// image4.addEventListener("click", loadImage);

// function loadImage(e) {
//   if (e.target.parentNode.id === "image01") {
//     modalContent.innerHTML = "<h1>Number One</h1>";
//   }
//   if (e.target.parentNode.id === "image02") {
//     modalContent.innerHTML = "<h1>Number Two</h1>";
//   }
//   if (e.target.parentNode.id === "image03") {
//     modalContent.innerHTML = "<h1>Number Three</h1>";
//   }
//   if (e.target.parentNode.id === "image04") {
//     modalContent.innerHTML = "<h1>Number One</h1>";
//   }
// }
