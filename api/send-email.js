const nodemailer = require("nodemailer");

function clean(value, maxLen) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F<>]/g, "").trim().slice(0, maxLen);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const honeypot = clean(req.body?.website, 100);
  if (honeypot) {
    return res.status(200).json({
      success: true,
      message:
        "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
    });
  }

  const name = clean(req.body?.name, 120);
  const phone = clean(req.body?.phone, 40);
  const message = clean(req.body?.message, 4000);

  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Bitte füllen Sie alle Felder aus.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@mts-sicherheit.com",
      subject: "Neue Kontaktanfrage von der Website",
      text: `Name: ${name}\nTelefon: ${phone}\n\nNachricht:\n${message}\n`,
    });

    return res.status(200).json({
      success: true,
      message:
        "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      success: false,
      message:
        "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
    });
  }
}
