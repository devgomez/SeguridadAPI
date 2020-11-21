module.exports = (sequelize, type) => {
  return sequelize.define("usuario", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: type.STRING,
    nombre: type.STRING,
    correo: type.STRING,
    clave: type.STRING,
    reintentos: type.INTEGER,
    usuariodb: type.STRING,
    clavedb: type.STRING,
    roldb: type.STRING,
    estado: type.BOOLEAN,
    fechaactivo: type.DATE,
    fechainactivo: type.DATE,
  });
};
