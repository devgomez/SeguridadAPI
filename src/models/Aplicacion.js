module.exports = (sequelize, type) => {
  return sequelize.define("aplicacion", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idsistema: type.INTEGER,
    codigo: type.STRING,
    nombre: type.STRING,
    version: type.STRING,
    aux: type.STRING,
    tipo: type.STRING,
  });
};
