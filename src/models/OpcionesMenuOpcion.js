module.exports = (sequelize, type) => {
  return sequelize.define("opcionesmenuopcion", {
    idmenu: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idopcionpadre: type.INTEGER,
    idopcionhijo: type.INTEGER,
    orden: type.INTEGER,
  });
};
