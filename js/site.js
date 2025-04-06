document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;

  // Adding the function to show the current slide based on the index.html
  function showSlide(index) {
    const slides = document.querySelectorAll(".slider img");
    const totalSlides = slides.length;

    // Looping back to the start/end when it reaches the ends.
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
