const slides = document.querySelectorAll('#slides .sliderImg');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'sliderImg';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'sliderImg showing';
}