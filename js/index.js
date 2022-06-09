"use strict";

(() => {
   window.onload = () => {
      let front__burger = document.querySelector(".front-page__burger");
      let front__nav = document.querySelector(".front__nav");
      let body = document.querySelector("body");
      front__burger.addEventListener("click", (e) => {
         front__burger.classList.toggle("active");
         front__nav.classList.toggle("active");
         body.classList.toggle("lock");
      });
   };
})();
