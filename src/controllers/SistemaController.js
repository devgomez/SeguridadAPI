const router = require("express").Router();
const { Op } = require("sequelize");
const { Sistema } = require("../../database");
const comun = require("./ComunController");

router.get("/", async (req, res) => {
  console.log(req.usuarioCodigo);

  const { page, size, nombre } = req.query;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  const { limit, offset } = comun.getPagination(page, size);

  await Sistema.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = comun.getPagingData(data, page, limit);
      res.json(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error ocurrido al consultar sistemas.",
      });
    });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const sistema = await Sistema.findOne({ where: { id: [id] } });
  res.json(sistema);
});

router.post("/", async (req, res) => {
  const sistema = await Sistema.create(req.body);
  res.json({ estado: true, mensaje: "Guardado Correctamente" });
});

router.put("/:id", async (req, res) => {
  const sistema = await Sistema.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ susccess: "Sistema Modificado!!!" });
});

router.delete("/:id", async (req, res) => {
  await Sistema.destroy({
    where: { id: req.params.id },
  });
  res.json({ susccess: "Sistema Eliminado!!!" });
});

module.exports = router;
