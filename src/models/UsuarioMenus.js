module.exports = (sequelize, type) => {
  return sequelize.define("usuariomenus", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idmenu: type.INTEGER,
    codpadre: type.INTEGER,
    codhijo: type.INTEGER,
    nivel: type.INTEGER,
    codresponsable: type.STRING,
    estado: type.BOOLEAN,
  });
};
