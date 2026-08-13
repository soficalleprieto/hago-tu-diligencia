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

  // Ruta de "Cómo funciona": en móvil el camino es un raíl vertical que une los pines de
  // cada paso. Las tarjetas no tienen alto fijo (depende del texto), así que hay que medir
  // dónde queda cada pin y publicarlo como variables CSS para colocar el raíl y el caminante.
  var steps = document.querySelector(".how-block .steps");
  if (steps) {
    var medirRuta = function () {
      var pines = steps.querySelectorAll(".step .num");
      if (!pines.length) return;
      var base = steps.getBoundingClientRect();
      for (var i = 0; i < pines.length; i++) {
        var r = pines[i].getBoundingClientRect();
        steps.style.setProperty("--m" + (i + 1), (r.top + r.height / 2 - base.top).toFixed(1) + "px");
        steps.style.setProperty("--mx", (r.left + r.width / 2 - base.left).toFixed(1) + "px");
      }
    };
    medirRuta();
    window.addEventListener("resize", medirRuta);
    window.addEventListener("load", medirRuta);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(medirRuta);
    }
  }
});
