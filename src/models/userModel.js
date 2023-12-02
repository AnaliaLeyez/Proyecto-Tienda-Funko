const { conn } = require('../config/conn'); //importo la conexion

//Aca requiero la tabla collection de la BD
const getOne = async(mail,pass) =>{
    try{
        const [rows] = await conn.query('SELECT * FROM user WHERE ?', mail, ' and ? ;',pass);
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudo recuperar el usuario por: ${e}`
        }
        return error;
    }  
};

module.exports={
    getOne
}