// Recibe el formulario de contacto y lo envía por correo con Resend.
//
// Función serverless de Vercel. No usa dependencias: Node 18+ ya trae fetch,
// así que el proyecto sigue sin build ni node_modules.
//
// Variables de entorno que hay que crear en Vercel (Settings > Environment Variables):
//   RESEND_API_KEY       clave de API de Resend
//   CONTACTO_DESTINO     correo donde quieres recibir los mensajes
//   CONTACTO_REMITENTE   remitente verificado en Resend, p. ej. "web@tudominio.com"

const LIMITE = 2000;

function limpia(valor) {
  return String(valor == null ? "" : valor).trim().slice(0, LIMITE);
}

function escapaHtml(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido." });
  }

  const cuerpo = req.body || {};

  // Campo trampa: es invisible para las personas, pero los bots lo rellenan.
  // Se responde ok para que el bot no reintente, pero no se envía nada.
  if (limpia(cuerpo.web)) return res.status(200).json({ ok: true });

  const nombre = limpia(cuerpo.nombre);
  const telefono = limpia(cuerpo.telefono);
  const servicio = limpia(cuerpo.servicio);
  const zona = limpia(cuerpo.zona);
  const mensaje = limpia(cuerpo.mensaje);

  if (!nombre || !telefono || !servicio || !zona || !mensaje) {
    return res.status(400).json({ error: "Faltan campos por completar." });
  }

  const clave = process.env.RESEND_API_KEY;
  const destino = process.env.CONTACTO_DESTINO;
  const remitente = process.env.CONTACTO_REMITENTE;

  if (!clave || !destino || !remitente) {
    console.error("Faltan variables de entorno para el envío de correo.");
    return res.status(500).json({ error: "El envío no está configurado todavía." });
  }

  const filas = [
    ["Nombre", nombre],
    ["Teléfono o WhatsApp", telefono],
    ["Servicio", servicio],
    ["Zona de la diligencia", zona],
  ]
    .map(
      ([etiqueta, valor]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#5a5a5a;">${etiqueta}</td>` +
        `<td style="padding:6px 0;font-weight:700;">${escapaHtml(valor)}</td></tr>`
    )
    .join("");

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;color:#232323;line-height:1.5;">` +
    `<h2 style="color:#0b3d2c;margin:0 0 16px;">Nueva solicitud desde la web</h2>` +
    `<table style="border-collapse:collapse;margin-bottom:18px;">${filas}</table>` +
    `<p style="margin:0 0 6px;color:#5a5a5a;">Mensaje:</p>` +
    `<p style="white-space:pre-wrap;margin:0;padding:14px;background:#f7f7f5;border-radius:10px;">` +
    `${escapaHtml(mensaje)}</p></div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${clave}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `dajula web <${remitente}>`,
        to: [destino],
        subject: `Solicitud de ${nombre} — ${servicio}`,
        html,
      }),
    });

    if (!r.ok) {
      const detalle = await r.text();
      console.error("Resend respondió con error:", r.status, detalle);
      return res.status(502).json({ error: "No se pudo enviar el mensaje." });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Fallo al contactar con Resend:", e);
    return res.status(502).json({ error: "No se pudo enviar el mensaje." });
  }
}
