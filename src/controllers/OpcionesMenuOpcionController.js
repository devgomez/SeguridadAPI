const router = require("express").Router();
const bcryp = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");
const { OpcionesMenuOpcion } = require("../../database");
const comun = require("./ComunController");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  console.log(req.usuarioCodigo);

  const { page, size, codresponsable } = req.query;
  var condition = codresponsable
    ? { codresponsable: { [Op.like]: `%${codresponsable}%` } }
    : null;

  const { limit, offset } = comun.getPagination(page, size);

  await OpcionesMenuOpcion.findAndCountAll({ where: condition, limit, offset })
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

router.post("/", async (req, res) => {
  await OpcionesMenuOpcion.create(req.body);
  res.json({ estado: true, mensaje: "Guardado Correctamente" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = await OpcionesMenuOpcion.findOne({ where: { id: [id] } });
  res.json(usuario);
});

router.put("/:id", async (req, res) => {
  await OpcionesMenuOpcion.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ estado: true, mensaje: "OpcionesMenuOpcion Modificado!!!" });
});

router.delete("/:id", async (req, res) => {
  await OpcionesMenuOpcion.destroy({
    where: { id: req.params.id },
  });
  res.json({ estado: true, mensaje: "OpcionesMenuOpcion Eliminado!!!" });
});

module.exports = router;
