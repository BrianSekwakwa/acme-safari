// Initializing variables
const form = document.querySelector(".contact__form form");
const contactForm = document.querySelector(".contact__form");
const spinner = document.querySelector(".contact__spinner");
const message = document.querySelector(".contact__message");

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
