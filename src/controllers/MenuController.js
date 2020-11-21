const router = require("express").Router();
const { Op } = require("sequelize");

const { Menu } = require("../../database");

const comun = require("./ComunController");

router.get("/", async (req, res) => {
  console.log(req.usuarioId);

  const { page, size, nombre } = req.query;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  const { limit, offset } = comun.getPagination(page, size);

  await Menu.findAndCountAll({ where: condition, limit, offset })
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
  const menu = await Menu.findOne({ where: { id: [id] } });
  res.json(menu);
});

router.post("/", async (req, res) => {
  const menu = await Menu.create(req.body);
  res.json({ estado: true, mensaje: "Guardado Correctamente" });
});

router.put("/:id", async (req, res) => {
  const menu = await Menu.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ susccess: "Menu Modificado!!!" });
});

router.delete("/:id", async (req, res) => {
  await Menu.destroy({
    where: { id: req.params.id },
  });
  res.json({ susccess: "Menu Eliminado!!!" });
});

module.exports = router;
