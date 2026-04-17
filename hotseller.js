const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");

let index = 0;

// MOVE SLIDE
function moveSlide() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// NEXT
function nextSlide() {
  index++;
  if (index >= slides.length) index = 0;
  moveSlide();
}

// PREVIOUS
function prevSlide() {
  index--;
  if (index < 0) index = slides.length - 1;
  moveSlide();
}

// AUTO SLIDE (every 3 seconds)
setInterval(nextSlide, 7000);

// BUTTONS (arrows)
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// SWIPE SUPPORT
let startX = 0;

slider.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});
