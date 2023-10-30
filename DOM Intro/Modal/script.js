"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnModalClose = document.querySelector(".close-modal");
const btnModalShow = document.querySelectorAll(".show-modal");

const modalShowEvent = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnModalShow.length; i++) {
  btnModalShow[i].addEventListener("click", modalShowEvent);
}

const modalCloseEvent = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnModalClose.addEventListener("click", modalCloseEvent);
overlay.addEventListener("click", modalCloseEvent);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    modalCloseEvent();
  }
});
