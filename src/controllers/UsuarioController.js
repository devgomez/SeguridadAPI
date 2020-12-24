const router = require("express").Router();
const bcryp = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");
const { Usuario } = require("../../database");
const comun = require("./ComunController");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  console.log(req.usuarioCodigo);

  const { page, size, nombre } = req.query;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  const { limit, offset } = comun.getPagination(page, size);

  await Usuario.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = comun.getPagingData(data, page, limit);
      res.json(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error ocurrido al consultar menues.",
      });
    });
});

router.post(
  "/",
  [
    check("codigo", "El codigo de usuario es obligatorio").not().isEmpty(),
    check("nombre", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("correo", "El correo debe ser valido").isEmail(),
    check("reintentos", "El valor debe ser numerico").isNumeric(),
    check("estado", "El valor debe ser boleano").isBoolean(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() });
    }

    req.body.clave = bcryp.hashSync(req.body.clave, 14);
    await Usuario.create(req.body);
    res.json({ estado: true, mensaje: "Guardado Correctamente" });
  }
);

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findOne({ where: { id: [id] } });
  res.json(usuario);
});

router.put(
  "/:id",
  [
    check("codigo", "El codigo de usuario es obligatorio").not().isEmpty(),
    check("nombre", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("correo", "El correo debe ser valido").isEmail(),
    check("reintentos", "El valor debe ser numerico").isNumeric(),
    check("estado", "El valor debe ser boleano").isBoolean(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() });
    }
    req.body.clave = bcryp.hashSync(req.body.clave, 14);
    await Usuario.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ estado: true, mensaje: "Usuario Modificado!!!" });
  }
);

router.delete("/:id", async (req, res) => {
  await Usuario.destroy({
    where: { id: req.params.id },
  });
  res.json({ estado: true, mensaje: "Usuario Eliminado!!!" });
});

module.exports = router;
