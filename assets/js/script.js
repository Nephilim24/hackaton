const navContent = document.querySelector(".nav__content");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
  navContent.classList.toggle("active");
  burger.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  navContent.classList.remove("active");
  burger.classList.remove("active");
  overlay.classList.remove("active");
});

const header = document.querySelector("header");
let anchors = document.querySelectorAll('a[href^="#"]');
// Нашли на странице ссылки и кнопки, на которые нужно повесить плавный скролл

// // Функция скролла на нужную позицию
// const scrollToPosition = (position) => {
//   window.scrollBy({
//     top: position,
//     behavior: "smooth",
//   });
// };

// Функция которая вычисляет позицию нужного блока и вызывает функцию скролла
// const anchorScrolling = (link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault(); // Отменили стандартное поведение ссылок, чтобы страница не прыгала резко к нужному блоку и в URL не было добавлено #id.
//     let href = link.getAttribute("href");
//     // Получаем значение атрибута href у кликнутой ссылки, чтобы понять, к какому блоку нужно перейти. Для этого создали переменную href и scrollTarget

//     let scrollTarget = document.querySelector(`${href}`);
//     let topOffset = header.offsetHeight; // Получили высоту header, чтобы учесть её при скролле.
//     let elementPosition = scrollTarget.getBoundingClientRect().top; // Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
//     if (screen.width <= 768) {
//       navContent.classList.remove("active");
//       burger.classList.remove("active");
//       overlay.classList.remove("active");
//       let offsetPosition = elementPosition - topOffset + 200; // Высчитываем позицию элемента с учётом отступа сверху (высоты header). Дополнительно можно задать отступ в пикселях, например 200, чтобы элемент не прилипал к header.
//       scrollToPosition(offsetPosition);
//     } else {
//       let offsetPosition = elementPosition - topOffset - 70; // Высчитываем позицию элемента с учётом отступа сверху (высоты header). Дополнительно можно задать отступ в пикселях, например 70, чтобы элемент не прилипал к header.
//       scrollToPosition(offsetPosition);
//     }
//   });
// };

anchors.forEach((anchor) => {
  // Перебрали все ссылки, и на каждую из них применили функцию scrollToSection
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    let href = anchor.getAttribute("href");
    let scrollElement = document.querySelector(href);
    if (href == "#top" || scrollElement === null) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    } else {
      scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
