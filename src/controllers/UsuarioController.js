const router = require('express').Router();
const bcryp = require('bcryptjs');
const {check,validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
const { Usuario } = require('../../database');

router.get('/',async (req,res) =>{

    const usuarios  = await Usuario.findAll();
    res.json(usuarios);
});

router.post('/',[
    check('codigo','El codigo de usuario es obligatorio').not().isEmpty(),
    check('nombre','El nombre de usuario es obligatorio').not().isEmpty(),
    check('correo','El correo debe ser valido').isEmail(),
    check('reintentos','El valor debe ser numerico').isNumeric(),
    check('estado','El valor debe ser boleano').isBoolean()
],async (req,res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errores:errors.array()})
    }

    req.body.clave = bcryp.hashSync(req.body.clave,14);
    const usuario  = await Usuario.create(req.body);
    res.json(usuario);
});



/*
router.post('/',async (req,res) =>{
    const sistema  = await Sistema.create(req.body);
    res.json(sistema);
});

router.put('/:id',async (req,res) =>{
    const sistema  = await Sistema.update(req.body,{
        where:{id:req.params.id}
    });
    res.json({susccess : "Sistema Modificado!!!"})
});

router.delete('/:id',async (req,res) =>{
     await Sistema.destroy({
        where:{id:req.params.id}
    });
    res.json({susccess : "Sistema Eliminado!!!"})
});*/

module.exports = router;