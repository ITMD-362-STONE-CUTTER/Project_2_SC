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

  // Another function to go to the next slide.
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // The other function to go to the previous slide.
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Attaching event listeners to the navigation buttons.
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function () {
    prevSlide();
  });

  nextButton.addEventListener("click", function () {
    nextSlide();
  });

  // Automatically shows the next slide every 3 seconds using the setInterval.
  setInterval(function () {
    nextSlide();
  }, 3000);

  // Initializes the first slide on page load.
  showSlide(currentSlide);
});
