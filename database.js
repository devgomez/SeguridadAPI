const Sequelize = require("sequelize");

const menuModel = require("./src/models/Menu");
const opcionesMenuModel = require("./src/models/OpcionesMenu");
const opcionesMenuOpcionModel = require("./src/models/OpcionesMenuOpcion");
const sistemaModel = require("./src/models/Sistema");
const usuarioModel = require("./src/models/Usuario");
const usuarioMenusModel = require("./src/models/UsuarioMenus");
const aplicacionModel = require("./src/models/Aplicacion");
/*
//-----------------------------local
const sequelize = new Sequelize("segapi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

*/
//-----------------------prod
const sequelize = new Sequelize("3qzy2KuCHP", "3qzy2KuCHP", "lCuXWVmYkh", {
  host: "remotemysql.com",
  dialect: "mysql",
});

const Sistema = sistemaModel(sequelize, Sequelize);
const Usuario = usuarioModel(sequelize, Sequelize);
const Menu = menuModel(sequelize, Sequelize);
const OpcionesMenu = opcionesMenuModel(sequelize, Sequelize);
const OpcionesMenuOpcion = opcionesMenuOpcionModel(sequelize, Sequelize);
const UsuarioMenus = usuarioMenusModel(sequelize, Sequelize);
const Aplicacion = aplicacionModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

module.exports = {
  Sistema,
  Usuario,
  Menu,
  OpcionesMenu,
  OpcionesMenuOpcion,
  UsuarioMenus,
  Aplicacion,
};
