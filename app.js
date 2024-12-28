// Loader functionality
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});
// let currentSlide = 0;
// const slides = document.querySelectorAll(".testimonial-slide");
// const dots = document.querySelectorAll(".dot");

// function showSlide(index) {
//   if (index === currentSlide) return; // Avoid redundant clicks

//   // Determine direction of slide
//   const direction = index > currentSlide ? "next" : "prev";

//   // Set up exit animation for the current slide
//   slides[currentSlide].classList.remove("active", "slide-in");
//   slides[currentSlide].classList.add(
//     direction === "next" ? "slide-out-left" : "slide-out-right"
//   );

//   // Set up enter animation for the new slide
//   slides[index].classList.add(
//     "active",
//     direction === "next" ? "slide-in-right" : "slide-in-left"
//   );

//   // Update dot indicators
//   dots[currentSlide].classList.remove("active");
//   dots[index].classList.add("active");

//   // Clean up previous animations after transition
//   setTimeout(() => {
//     slides[currentSlide].classList.remove("slide-out-left", "slide-out-right");
//     slides[index].classList.remove("slide-in-left", "slide-in-right");
//     currentSlide = index;
//   }, 500); // Match this timeout to the CSS animation duration
// }

// // Dot navigation
// function goToSlide(index) {
//   showSlide(index);
// }

// // Initial display
// showSlide(currentSlide);


// Get the button and form fields
const submitBtn = document.getElementsByClassName("unique-submit-btn")[0]; // Assuming you're targeting the first button
const nameField = document.getElementsByClassName("unique-input")[0]; // Assuming you're targeting the first input field
const textareaField = document.getElementsByClassName("unique-textarea")[0]; // Assuming you're targeting the first textarea

// Add an event listener to the submit button
submitBtn.addEventListener("click", function(event) {
  // Check if the fields are empty
  if (nameField.value === "" || textareaField.value === "") {
    alert("Empty form :( \nPlease enter your name and message before submitting.");
    event.preventDefault(); // Prevent form submission
  }
});



// JavaScript to toggle sidebar visibility
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px"; // Hide sidebar
  } else {
    sidebar.style.left = "0"; // Show sidebar
  }
});
