document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;

  // Adding the function to show the current slide based on the index.html
  function showSlide(index) {
    const slides = document.querySelectorAll(".slider img");
    const totalSlides = slides.length;

