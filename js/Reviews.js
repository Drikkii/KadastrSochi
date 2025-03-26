const moreReviews = document.querySelector(".button-More-reviews");
const moreLicenses = document.querySelector(".button-More-licenses");
const allReviews = document.querySelector(".all-reviews");
const allLicenses = document.querySelector(".all-licenses");

let isAnimating = false; // Флаг анимации

let isClassAdded = false;

function checkScreenSize() {
  // Проверка на разрешение экрана
  if (window.innerWidth <= 1310) {
    allReviews.classList.add("height-content");
    allLicenses.classList.add("height-content");

    if (window.innerWidth <= 768) {
      // Если экран меньше или равен 768px, класс остаётся
      if (!isClassAdded) {
        isClassAdded = true; // Устанавливаем флаг, что класс добавлен
      }
    } else {
      // Для больших экранов снимаем флаг, класс не добавляется
      isClassAdded = false;
    }
  } else {
    // Если экран больше 1310px, убираем класс
    allReviews.classList.remove("height-content");
    allLicenses.classList.remove("height-content");
    isClassAdded = false;
  }
}

function handleResize() {
  checkScreenSize();
  moreReviews.textContent = "Показать еще";
  moreLicenses.textContent = "Показать еще";
}

window.addEventListener("resize", () => {
  checkScreenSize();
  moreReviews.textContent = "Показать еще";
  moreLicenses.textContent = "Показать еще";
});

// При загрузке страницы
document.addEventListener("DOMContentLoaded", checkScreenSize);

//выключаем кнопки
function enableButtons() {
  isAnimating = false;
  moreReviews.disabled = false;
  moreLicenses.disabled = false;
}
function disableButtons() {
  isAnimating = true;
  moreReviews.disabled = true;
  moreLicenses.disabled = true;
  setTimeout(enableButtons, 500);
}

//кнопка расширить отзывы

moreReviews.addEventListener("click", function () {
  disableButtons();
  allReviews.classList.toggle("height-content");
  if (moreReviews.textContent == "Показать еще") {
    moreReviews.textContent = "Скрыть";
  } else {
    moreReviews.textContent = "Показать еще";
    allReviews.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

//кнопка расширить лицензии

moreLicenses.addEventListener("click", function () {
  disableButtons();
  allLicenses.classList.toggle("height-content");
  if (moreLicenses.textContent == "Показать еще") {
    moreLicenses.textContent = "Скрыть";
  } else {
    moreLicenses.textContent = "Показать еще";
    allLicenses.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
