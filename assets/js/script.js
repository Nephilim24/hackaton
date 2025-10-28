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
