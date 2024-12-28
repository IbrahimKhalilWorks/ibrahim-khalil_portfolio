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


// form code
const submitBtn = document.getElementsByClassName("unique-submit-btn");
const nameField = document.getElementsByClassName("unique-input").value;
const textareaField = document.getElementsByClassName("unique-textarea").value;
if(nameField.value === "" || textareaField.value === ""){
  alert("Empty form :( .\n Please enter you name and email address before submit. ")
}
 