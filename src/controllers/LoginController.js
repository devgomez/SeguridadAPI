const router = require("express").Router();
const bcryp = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");
const { Usuario } = require("../../database");

router.get("/", async (req, res) => {
  console.log(req);
  res.render("login");
});

router.post(
  "/",
  [
    check("codigo", "El codigo de usuario alfanumerico").isString(),
    check("clave", "La clave de usuario debe ser alfanumerico").isString(),
    check("codigo", "El codigo de usuario es obligatorio").not().isEmpty(),
    check("clave", "La clave de usuario es obligatorio").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const usuario = await Usuario.findOne({
      where: {
        codigo: req.body.codigo,
      },
    });
    if (usuario) {
		
      const iguales = bcryp.compareSync(req.body.clave, usuario.clave);
      if (iguales) {
        res.json({ token: CreateToken(usuario), user : {id: usuario.id, codigo:usuario.codigo, nombre: usuario.nombre, correo:usuario.correo }});
      } else { 
        res.json({ errors: "Error en usuario y/o contraseña" });
      }
    } else {
     res.json({ errors: "Error en usuario y/o contraseña" });
    }
    res.json(sistema);
  }
);

const CreateToken = (usuario) => {
  const payload = {
    usuarioId: usuario.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(5, "minutes").unix(),
  };
  //  objeto de datos token / frase secreta
  return jwt.encode(payload, "mimamamemimaxd");
};

module.exports = router;
