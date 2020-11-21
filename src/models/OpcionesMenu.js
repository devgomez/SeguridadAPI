module.exports = (sequelize, type) => {
  return sequelize.define("opcionesmenu", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idmenu: type.INTEGER,
    nombre: type.STRING,
    url: type.STRING,
    nivel: type.INTEGER,
    codresponsable: type.STRING,
  });
};
