const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
const slides = Array.from(track.children);

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID = 0;
let currentIndex = 0;
let slideWidth = 0;
let changeTime = 1500;

// Get the index of the current slide
const getSlideIndex = () => {
  return slides.findIndex((slide) => 
    slide.classList.contains("current-slide")
  );
};

// Set the current slide
const setCurrentSlide = (slide, slideIndex) => {
  slide.classList.add("current-slide");
  currentIndex = slideIndex;
};

// Remove the current slide class from all slides
const removeCurrentSlide = () => {
  slides.forEach((slide) => slide.classList.remove("current-slide"));
};

// Move the slides to the next position
const moveToSlide = (slideIndex) => {
  track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  removeCurrentSlide();
  setCurrentSlide(slides[slideIndex], slideIndex);
};

// Start dragging
const dragStart = (event) => {
  isDragging = true;
  startPosition = getPositionX(event);
  previousTranslate = currentTranslate;
  clearInterval(animationID);
};

// During dragging
const drag = (event) => {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = previousTranslate + currentPosition - startPosition;
    track.style.transform = `translateX(${currentTranslate}px)`;
  }
};

// End dragging
const dragEnd = () => {
  isDragging = false;
  const diff = currentTranslate - previousTranslate;
  if (diff < -slideWidth / 4 && currentIndex < slides.length - 1) {
    currentIndex++;
  } else if (diff > slideWidth / 4 && currentIndex > 0) {
    currentIndex--;
  }
  moveToSlide(currentIndex);
  animateCarousel();
};

// Get the X position of the touch event
const getPositionX = (event) => {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
};

// Animate the carousel when the user is not dragging
const animateCarousel = () => {
  clearInterval(animationID);
  animationID = setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
      track.style.transform = `translateX(0)`;
    } else if (currentIndex > 7) {
      currentIndex = 0;
      track.style.transform = `translateX(0)`;
    }
    moveToSlide(currentIndex);
  }, changeTime);
};

// const animateCarousel = () => {
//   clearInterval(animationID);
//   animationID = setInterval(() => {
//     currentIndex++;
//     if (currentIndex >= slides.length) {
//       currentIndex = 0;
//       track.style.transform = `translateX(0)`;
//     }
//     moveToSlide(currentIndex);
//   }, changeTime);
// };

// Set the width of each slide
const setSlideWidth = () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  slides.forEach((slide) => {
    slide.style.width = `${slideWidth}px`;
  });
};

// Initialize the carousel
setSlideWidth();
setCurrentSlide(slides[0], 0);
animateCarousel();

// Add touch and mouse event listeners to the carousel
track.addEventListener("mousedown", dragStart);
track.addEventListener("touchstart", dragStart);
track.addEventListener("mousemove", drag);
track.addEventListener("touchmove", drag);
track.addEventListener("mouseup", dragEnd);
track.addEventListener("touchend", dragEnd);

// Add automatic animation
carousel.addEventListener("mouseenter", () => {
  clearInterval(animationID);
});
carousel.addEventListener("mouseleave", animateCarousel);
