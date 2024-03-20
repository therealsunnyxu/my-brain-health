const slides = document.querySelectorAll('.carousel-slide');
const numSlides = slides.length
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const indicatorButtons = document.querySelectorAll('.carousel-indicators button');
const hammertime = new Hammer(carouselSlides);

let currentSlide = 0;

function moveToSlide(targetSlide) {
    if (targetSlide > numSlides - 1) {
        targetSlide = 0
    } else if (targetSlide < 0) {
        targetSlide = numSlides - 1
    }
    currentSlide = targetSlide;
    updateCarousel();
}

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(-currentSlide) * 100}%)`;
    });

    indicatorButtons.forEach((button, index) => {
        button.classList.toggle('bg-blue-500/50', index === currentSlide);
    });
}

// Event listeners 
nextButton.addEventListener('click', () => moveToSlide(currentSlide + 1));
prevButton.addEventListener('click', () => moveToSlide(currentSlide - 1));
indicatorButtons.forEach(button => {
    button.addEventListener('click', () => moveToSlide(parseInt(button.dataset.slide)));
});
hammertime.on('swipeleft', () => {
    moveToSlide(currentSlide + 1);
});

hammertime.on('swiperight', () => {
    moveToSlide(currentSlide - 1);
});

updateCarousel();
