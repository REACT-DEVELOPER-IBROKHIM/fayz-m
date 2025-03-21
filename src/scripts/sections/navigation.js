const navigation = document.querySelector("#navigation");
const navigationBtn = document.querySelector(".navigation__toggle");
const navigationCloseBtn = document.querySelector(".navigation__close");
const navigationMenu = document.querySelector(".navigation__menu");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 45) {
    navigation.classList.add("pinned-navbar");
  } else {
    navigation.classList.remove("pinned-navbar");
  }
});

navigationBtn.addEventListener("click", () => {
  navigationMenu.classList.add("active-menu");
  document.body.classList.add("no-scroll");
});

navigationCloseBtn.addEventListener("click", () => {
  navigationMenu.classList.remove("active-menu");
  document.body.classList.remove("no-scroll");
});
