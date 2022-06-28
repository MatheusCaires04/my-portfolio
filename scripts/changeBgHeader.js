const changeBg = document.querySelector(".header");

addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    changeBg.classList.add("change__bg");
  } else {
    changeBg.classList.remove("change__bg");
  }
});

const menuMobile = document.querySelector(".menu__list");
const btnMenu = document.querySelector(".menu__hamburguer");
btnMenu.addEventListener("click", function () {
  menuMobile.classList.toggle("active");
  btnMenu.classList.toggle("menu__close");
});

const btnLink = document.querySelectorAll(".link");
btnLink.forEach((n) =>
  n.addEventListener("click", function () {
    menuMobile.classList.toggle("active");
    btnMenu.classList.toggle("menu__close");
  })
);
