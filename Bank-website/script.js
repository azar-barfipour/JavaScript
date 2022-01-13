"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// smooth schrolling
btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

//page navigation

// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("clich", function (e) {
//     e.preventDefault();
//     const id = this.getAtrribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
// 1.add event listener to common parent element
// 2. determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  //match
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(document.querySelector(id));
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
