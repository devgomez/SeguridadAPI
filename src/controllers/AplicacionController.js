const router = require("express").Router();
const { Op } = require("sequelize");

const { Aplicacion } = require("../../database");

const comun = require("./ComunController");

router.get("/", async (req, res) => {
  console.log(req.usuarioCodigo);

  const { page, size, nombre } = req.query;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  const { limit, offset } = comun.getPagination(page, size);

  await Aplicacion.findAndCountAll({ where: condition, limit, offset })
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const aplicacion = await Aplicacion.findOne({ where: { id: [id] } });
  res.json(aplicacion);
});

router.post("/", async (req, res) => {
  await Aplicacion.create(req.body);
  res.json({ estado: true, mensaje: "Guardado Correctamente" });
});

router.put("/:id", async (req, res) => {
  await Aplicacion.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ estado: true, mensaje: "Modificado Correctamente" });
});

router.delete("/:id", async (req, res) => {
  await Aplicacion.destroy({
    where: { id: req.params.id },
  });
  res.json({ estado: true, mensaje: "Eliminado Correctamente" });
});

module.exports = router;
