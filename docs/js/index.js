// Initializing variables
const form = document.querySelector(".contact__form form");
const contactForm = document.querySelector(".contact__form");
const spinner = document.querySelector(".contact__spinner");
const message = document.querySelector(".contact__message");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__box__content");
const modalCloseButton = document.querySelector(".modal__box__close");
const image1 = document.querySelector("#image01");
const image2 = document.querySelector("#image02");
const image3 = document.querySelector("#image03");
const image4 = document.querySelector("#image04");

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

// Opening Modal

image1.addEventListener("click", openModal);
image2.addEventListener("click", openModal);
image3.addEventListener("click", openModal);
image4.addEventListener("click", openModal);

function openModal(e) {
  modal.classList.add("showModal");

  console.log(e.target.parentNode.id);
  // loading specific images into the modal
  if (e.target.parentNode.id === "image01") {
    modalContent.innerHTML = "";
  }
  if (e.target.parentNode.id === "image02") {
    modalContent.innerHTML = "<h1>Number Two</h1>";
  }
  if (e.target.parentNode.id === "image03") {
    modalContent.innerHTML = "<h1>Number Three</h1>";
  }
  if (e.target.parentNode.id === "image04") {
    modalContent.innerHTML = "<h1>Number One</h1>";
  }
}

// Close Modal
modalCloseButton.addEventListener("click", closeModal);

function closeModal(e) {
  modal.classList.remove("showModal");
}

// Close modal with an Esc key
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    modal.classList.remove("showModal");
  }
});
