const { conn } = require('../config/conn'); //importo la conexion

//Aca requiero la tabla product de la BD
const getAll = async() =>{
    const [rows] = await conn.query('SELECT * FROM product;');

    return rows;
};

const getOne = async(params) =>{
    const [rows] = await conn.query('SELECT * FROM product WHERE ?;', params); //otra opcion: params.id

    return rows;
};

module.exports={
    getAll,
    getOne
}