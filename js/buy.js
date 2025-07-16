const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".arrow.prev");
const nextBtn = document.querySelector(".arrow.next");

let currentSlide = 0;
const totalSlides = slides.length;

// Tunjuk slide yang dipilih
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

// Slide seterusnya
function nextSlide() {
  const nextIndex = (currentSlide + 1) % totalSlides;
  showSlide(nextIndex);
}

// Slide sebelumnya
function prevSlide() {
  const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(prevIndex);
}

// Navigasi menggunakan panah
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Navigasi menggunakan titik (dot)
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// ❗ Tambah ini supaya slide pertama aktif masa load

showSlide(currentSlide);

