const router = require('express').Router();

const {Sistema} = require('../../database');

router.get('/',async (req,res) =>{
    console.log(req.usuarioId);
    const sistemas  = await Sistema.findAll();
    res.json(sistemas);
});

router.get('/:id',async (req,res) =>{
	const { id } = req.params;
    const sistema  = await Sistema.findOne({ where: { id: [id] } });
    res.json(sistema);
});

router.post('/',async (req,res) =>{
    const sistema  = await Sistema.create(req.body);
    res.json({estado:true,mensaje : "Guardado Correctamente"});
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
});

module.exports = router;