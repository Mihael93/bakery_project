let linkNav = document.querySelectorAll('[href^="#"]'); //выбираем все ссылки к якорю на странице
for (let i = 0; i < linkNav.length; i++) {
   let speed = 0.3;
   linkNav[i].addEventListener(
      "click",
      function (e) {
         //по клику на ссылку
         e.preventDefault(); //отменяем стандартное поведение
         let w = window.pageYOffset, // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
         (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
            (start = null);
         requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
         function step(time) {
            if (start === null) start = time;
            let progress = time - start,
               r =
                  t < 0
                     ? Math.max(w - progress / speed, w + t)
                     : Math.min(w + progress / speed, w + t);
            window.scrollTo(0, r);
            if (r != w + t) {
               requestAnimationFrame(step);
            } else {
               location.hash = hash; // URL с хэшем
            }
         }
      },
      false
   );
}

/*
// 1
document.querySelector(
   "body > div.front-page > nav > ul:nth-child(1) > li:nth-child(1) > a"
);
document.querySelector("body > div.menu-wrapper > div.menu-wrapper-title");
id="scroll" href="#menu"
// 2
document.querySelector(
   "body > div.front-page > nav > ul:nth-child(1) > li:nth-child(2) > a"
);
document.querySelector("body > div.about-us");
id="scroll" href="#about"
// 3
document.querySelector(
   "body > div.front-page > nav > ul:nth-child(1) > li:nth-child(3) > a"
);
document.querySelector("body > div.team");
id="scroll" href="#team"
// 4
document.querySelector(
   "body > div.front-page > nav > ul:nth-child(2) > li:nth-child(1) > a"
);
document.querySelector("body > div.carousel-container-box");
id="scroll" href="#special"
// 5
document.querySelector(
   "body > div.front-page > nav > ul:nth-child(2) > li:nth-child(2) > a"
);
document.querySelector("body > div.gallery-fun");
id="scroll" href="#photo"
// 6
document.querySelector(
   "body > div.front-page > nav > ul:nth-child(2) > li:nth-child(3) > a"
);
document.querySelector("body > div.form-contact");
id="scroll" href="#contact"
// 7
document.querySelector(
   "body > div.front-page > div > div.front__cook-name > div.front__cook-buttons > div.front__cook-button-left > a"
);
document.querySelector("body > div.book-candie");
id="scroll" href="#fastbook"
// 8
document.querySelector(
   "body > div.front-page > div > div.front__cook-name > div.front__cook-buttons > div.front__cook-button-right > a"
);
document.querySelector("body > div.footer"); 
id="scroll" href="#ps" */
