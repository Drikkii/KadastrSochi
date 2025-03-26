const moreReviews = document.querySelector(".button-More-reviews");
const moreLicenses = document.querySelector(".button-More-licenses");
const allReviews = document.querySelector(".all-reviews");
const allLicenses = document.querySelector(".all-licenses");

let isAnimating = false; // Флаг анимации

let isClassAdded = false; //Флаг класса

// Проверка на разрешение экрана
function checkScreenSize() {
  if (window.innerWidth <= 1310) {
    allReviews.classList.add("height-content");
    allLicenses.classList.add("height-content");

    if (window.innerWidth <= 768) {
      if (!isClassAdded) {
        isClassAdded = true;
      }
    } else {
      isClassAdded = false;
    }
  } else {
    allReviews.classList.remove("height-content");
    allLicenses.classList.remove("height-content");
    isClassAdded = false;
  }
}

// function handleResize() {
//   checkScreenSize();
//   moreReviews.textContent = "Показать еще";
//   moreLicenses.textContent = "Показать еще";
// }

// window.addEventListener("resize", handleResize);

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
  if (allReviews.classList.contains("height-content")) {
    isClassAdded = true;
  } else {
    isClassAdded = false;
  }
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
  if (allLicenses.classList.contains("height-content")) {
    isClassAdded = true;
  } else {
    isClassAdded = false;
  }
  if (moreLicenses.textContent == "Показать еще") {
    moreLicenses.textContent = "Скрыть";
  } else {
    moreLicenses.textContent = "Показать еще";
    allLicenses.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
