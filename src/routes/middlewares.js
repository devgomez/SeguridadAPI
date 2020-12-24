const jwt = require("jwt-simple");
const moment = require("moment");

const checkToken = (req, res, next) => {
  console.log(req.headers);
  if (!req.headers["authorization"]) {
    res.json({
      estadoToken: false,
      error: "Debes incluir el Authorization en las cabeceras",
    });
  }

  const userToken = req.headers["authorization"];
  let payload = {};
  try {
    payload = jwt.decode(userToken, "mimamamemimaxd");
  } catch (err) {
    return res.json({ estadoToken: false, error: "El token es incorrecto" });
  }

  if (payload.expiredAt < moment().unix()) {
    return res.json({ estadoToken: false, error: "El token a expirado" });
  }

  req.usuarioCodigo = payload.usuarioCodigo;

  next();
};

module.exports = {
  checkToken: checkToken,
};
