document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
 
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      let slides = document.getElementsByClassName("imgslide");
  
      if (slides.length === 0) {
        console.error("No slides found. Check the class name in your HTML.");
        return;
      }
  
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
      }
    }
  
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
});