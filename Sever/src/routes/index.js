// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const sendEmail = require("../controllers/sendEmail");

const { Router } = require("express");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/email", sendEmail);

module.exports = router;
