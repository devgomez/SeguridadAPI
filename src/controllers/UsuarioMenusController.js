const router = require("express").Router();
const bcryp = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");
const { UsuarioMenus } = require("../../database");
const comun = require("./ComunController");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  console.log(req.usuarioCodigo);

  const { page, size, codresponsable } = req.query;
  var condition = codresponsable
    ? { codresponsable: { [Op.like]: `%${codresponsable}%` } }
    : null;

  const { limit, offset } = comun.getPagination(page, size);

  await UsuarioMenus.findAndCountAll({ where: condition, limit, offset })
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
  await UsuarioMenus.create(req.body);
  res.json({ estado: true, mensaje: "Guardado Correctamente" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = await UsuarioMenus.findOne({ where: { id: [id] } });
  res.json(usuario);
});

router.put("/:id", async (req, res) => {
  await UsuarioMenus.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ estado: true, mensaje: "UsuarioMenus Modificado!!!" });
});

router.delete("/:id", async (req, res) => {
  await UsuarioMenus.destroy({
    where: { id: req.params.id },
  });
  res.json({ estado: true, mensaje: "UsuarioMenus Eliminado!!!" });
});

module.exports = router;
