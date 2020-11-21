const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken =(req, res, next) => {
    if(!req.headers['user_token']){
        res.json({error:'Debes incluir el user_token en las cabeceras'});
    }

    const userToken = req.headers['user_token'];
    let payload ={};
    try{
        payload = jwt.decode(userToken, 'mimamamemimaxd');
    }
    catch(err){
       return res.json({error:'El token es incorrecto'});
    }

    if(payload.expiredAt < moment().unix()){
      return  res.json({error:'El token a expirado'});
    }

    req.usuarioId = payload.usuarioId;

    next();

}

module.exports = {
    checkToken : checkToken
};