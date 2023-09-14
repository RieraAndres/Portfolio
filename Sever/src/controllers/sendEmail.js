const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { name, lastName, email, message } = req.body;

  try {
    if (!name || !lastName || !email || !message) {
      return res.status(500).send("Ingrese todos los datos");
    } else {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "andresriera9999@gmail.com", // Tu dirección de correo electrónico
          pass: "vknjtroaszthesmy", // Tu contraseña
        },
      });
      const mailOptions = {
        from: "andresriera9999@gmail.com", // Remitente
        to: "andresriera9999@gmail.com", // Destinatario
        subject: "Nuevo contacto desde portfolio", // Asunto
        text: `
                    Nombre: ${name}
                    Apellido: ${lastName}
                    Email: ${email}
                    Mensaje: ${message}
                    `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(400).send("Error al enviar correo");
        } else {
          return res.status(200).send("Correo enviado");
        }
      });
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = sendEmail;
