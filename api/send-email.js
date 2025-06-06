const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { name, phone, message } = req.body;

  // Validate inputs
  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Bitte füllen Sie alle Felder aus.",
    });
  }

  // Create transporter
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
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@mts-sicherheit.com",
      subject: "Neue Kontaktanfrage von der Website",
      text: `
Name: ${name}
Telefon: ${phone}

Nachricht:
${message}
      `,
      replyTo: process.env.EMAIL_USER,
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
