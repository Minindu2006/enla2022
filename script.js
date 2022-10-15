let menu_icon = document.querySelector(".header .nav-bar .nav-list .menu-icon");
let side_menu = document.querySelector(".header .nav-bar .nav-list ul");
let side_menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);

menu_icon.addEventListener("click", function () {
  menu_icon.classList.toggle("active");
  side_menu.classList.toggle("active");
});

side_menu_item.forEach((item) => {
  item.addEventListener("click", function () {
    menu_icon.classList.toggle("active");
    side_menu.classList.toggle("active");
  });
});
window.onscroll = function () {
  sFunc();
};

let hd = document.querySelector("#header .header");

function sFunc() {
  if (
    document.body.scrollTop > 750 ||
    document.documentElement.scrollTop > 750
  ) {
    hd.classList.add("scroll");
  } else {
    hd.classList.remove("scroll");
  }
}
