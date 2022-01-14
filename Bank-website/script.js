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

// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  tabsContent.forEach((c) =>
    c.classList.remove(".operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(".operations__content--active");
});

// menu fade animation
const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", function (e) {
  console.log("ffff");
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});
nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});
