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

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var nombre = contactForm.nombre.value.trim();
      var servicio = contactForm.servicio.value;
      var mensaje = contactForm.mensaje.value.trim();
      var texto = "Hola, soy " + nombre + ". Necesito ayuda con: " + servicio + ". " + mensaje;
      var url = "https://wa.me/573132489177?text=" + encodeURIComponent(texto);
      window.open(url, "_blank");
    });
  }
});
