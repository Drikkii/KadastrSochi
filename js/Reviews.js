const moreReviews = document.querySelector(".button-More-reviews");
const moreLicenses = document.querySelector(".button-More-licenses");
const allReviews = document.querySelector(".all-reviews");
const allLicenses = document.querySelector(".all-licenses");

let isAnimating = false; // Флаг анимации

function checkScreenSize() {
  if (window.innerWidth <= 1310) {
    allReviews.classList.add("height-content");
    allLicenses.classList.add("height-content");

    if (window.innerWidth <= 768) {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    }
  } else {
    allReviews.classList.remove("height-content");
    allLicenses.classList.remove("height-content");
  }
}

function handleResize() {
  checkScreenSize();
  moreReviews.textContent = "Показать еще";
  moreLicenses.textContent = "Показать еще";
}

function handleScroll() {
  if (window.innerWidth <= 768) {
    allReviews.classList.add("height-content");
    allLicenses.classList.add("height-content");
    moreReviews.textContent = "Показать еще";
    moreLicenses.textContent = "Показать еще";
  }
}

window.addEventListener("resize", () => {
  checkScreenSize();
  moreReviews.textContent = "Показать еще";
  moreLicenses.textContent = "Показать еще";
});

document.addEventListener("DOMContentLoaded", checkScreenSize);

// проверяем разрешение (меняем высоту)
// function checkScreenSize() {
//   if (window.innerWidth <= 1310) {
//     allReviews.classList.add("height-content");
//     allLicenses.classList.add("height-content");
//   } else {
//     allReviews.classList.remove("height-content");
//     allLicenses.classList.remove("height-content");
//   }
// }

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
  setTimeout(enableButtons, 500); // Включаем кнопки
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
