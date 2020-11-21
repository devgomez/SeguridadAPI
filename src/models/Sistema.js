module.exports = (sequelize, type) => {
    return sequelize.define('sistema',{
        id:{
            type:type.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        codigo : type.STRING,
        nombre :  type.STRING   
    })
}