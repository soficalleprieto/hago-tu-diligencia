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

  // El formulario envía el mensaje por correo a través de /api/contacto (Resend).
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    var estado = document.getElementById("form-estado");
    var boton = contactForm.querySelector("button[type=submit]");

    var avisa = function (texto, tipo) {
      if (!estado) return;
      estado.textContent = texto;
      estado.className = "form-estado" + (tipo ? " es-" + tipo : "");
    };

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var datos = {
        nombre: contactForm.nombre.value.trim(),
        telefono: contactForm.telefono.value.trim(),
        servicio: contactForm.servicio.value,
        zona: contactForm.zona.value.trim(),
        mensaje: contactForm.mensaje.value.trim(),
        web: contactForm.web.value
      };

      if (!datos.nombre || !datos.telefono || !datos.servicio || !datos.zona || !datos.mensaje) {
        avisa("Faltan campos por completar.", "error");
        return;
      }

      boton.disabled = true;
      var textoBoton = boton.textContent;
      boton.textContent = "Enviando...";
      avisa("");

      fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
      })
        .then(function (r) {
          // Si la respuesta no es JSON (por ejemplo una página de error del
          // servidor), no se enseña el fallo técnico: se usa el mensaje genérico.
          return r
            .json()
            .catch(function () {
              return {};
            })
            .then(function (d) {
              return { ok: r.ok, datos: d };
            });
        })
        .then(function (res) {
          if (!res.ok) {
            var e = new Error((res.datos && res.datos.error) || "");
            e.paraElUsuario = res.datos && res.datos.error;
            throw e;
          }
          contactForm.reset();
          avisa("Mensaje enviado. Te respondo lo antes posible.", "ok");
        })
        .catch(function (err) {
          avisa(
            ((err && err.paraElUsuario) || "No se pudo enviar el mensaje.") +
              " Si prefieres, escríbeme directo por WhatsApp al 313 248 9177.",
            "error"
          );
        })
        .finally(function () {
          boton.disabled = false;
          boton.textContent = textoBoton;
        });
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
