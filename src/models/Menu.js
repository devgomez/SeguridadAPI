module.exports = (sequelize, type) => {
  return sequelize.define("menu", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idaplicacion: type.INTEGER,
    nombre: type.STRING,
    estado: type.BOOLEAN,
  });
};
