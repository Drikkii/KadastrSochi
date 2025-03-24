// время чеерз которое перелистывание АВТО
// const SliderTimer = 1000; //Задержка перед сл слайдом в мили секундах
// const SliderSpeed = 1; //время на перелистывание слайда в секундах
// Код слайдера !
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const slideCount = slides.length;
  const sliderContainer = document.querySelector(".advertising");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;
  let sliderInterval;
  let isAnimating = false; // Флаг анимации

  function updateSlidePosition() {
    slider.style.transition =
      "transform" + " " + SliderSpeed + "s" + " " + "ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function enableButtons() {
    isAnimating = false;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  function disableButtons() {
    isAnimating = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    setTimeout(enableButtons, SliderSpeed * 1000); // Включаем кнопки
  }

  function nextSlide() {
    if (isAnimating) return; // Блокируем двойные клики
    disableButtons();

    if (currentIndex >= slideCount - 1) return;
    currentIndex++;
    updateSlidePosition();

    if (currentIndex === slideCount - 1) {
      setTimeout(() => {
        slider.style.transition = "none";
        currentIndex = 0;
        slider.style.transform = `translateX(0%)`;
      }, SliderSpeed * 1000);
    }
  }

  function prevSlide() {
    if (isAnimating) return;
    disableButtons();

    if (currentIndex <= 0) {
      slider.style.transition = "none";
      currentIndex = slideCount - 1;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;

      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
        currentIndex--;
        updateSlidePosition();
      }, 50);
    } else {
      currentIndex--;
      updateSlidePosition();
    }
  }

  function startSlider() {
    sliderInterval = setInterval(nextSlide, SliderTimer);
  }

  function stopSlider() {
    clearInterval(sliderInterval);
  }

  startSlider();

  sliderContainer.addEventListener("mouseenter", stopSlider);
  sliderContainer.addEventListener("mouseleave", startSlider);

  nextBtn.addEventListener("click", () => {
    stopSlider();
    nextSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopSlider();
    prevSlide();
  });
});
