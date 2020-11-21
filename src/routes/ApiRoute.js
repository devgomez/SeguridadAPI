const router = require("express").Router();
const middlewares = require("../routes/middlewares");
const sistemaController = require("../controllers/SistemaController");
const usuarioController = require("../controllers/UsuarioController");
const loginController = require("../controllers/LoginController");
const menuController = require("../controllers/MenuController");
const aplicacionController = require("../controllers/AplicacionController");

router.use("/sistema", sistemaController);
router.use("/usuario", middlewares.checkToken, usuarioController);
router.use("/login", loginController);
router.use("/menu", menuController);
router.use("/aplicacion", aplicacionController);

module.exports = router;
