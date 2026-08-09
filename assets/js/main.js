document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("nav.menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  document.querySelectorAll(".has-sub > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 640) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });
});
