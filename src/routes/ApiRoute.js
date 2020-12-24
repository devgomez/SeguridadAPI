const router = require("express").Router();
const middlewares = require("../routes/middlewares");
const sistemaController = require("../controllers/SistemaController");
const usuarioController = require("../controllers/UsuarioController");
const loginController = require("../controllers/LoginController");
const menuController = require("../controllers/MenuController");
const aplicacionController = require("../controllers/AplicacionController");
const usuarioMenusController = require("../controllers/UsuarioMenusController");
const opcionesMenuController = require("../controllers/OpcionesMenuController");
const opcionesMenuOpcionController = require("../controllers/OpcionesMenuOpcionController");

router.use("/sistema", middlewares.checkToken, sistemaController);
router.use("/usuario", middlewares.checkToken, usuarioController);
router.use("/login", loginController);
router.use("/menu", middlewares.checkToken, menuController);
router.use("/aplicacion", middlewares.checkToken, aplicacionController);
router.use("/usuario/menu", middlewares.checkToken, usuarioMenusController);
router.use(
  "/usuario/opcionesmenu",
  middlewares.checkToken,
  opcionesMenuController
);
router.use(
  "/usuario/opcionesmenuopcion",
  middlewares.checkToken,
  opcionesMenuOpcionController
);

module.exports = router;
