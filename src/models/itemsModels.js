const { conn } = require('../config/conn'); //importo la conexion

//Aca requiero la tabla product de la BD
const getAll = async() =>{
    try{
        const [rows] = await conn.query('SELECT * FROM item;');
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudieron recuperar los datos por: ${e}`
        }
        return error;
    }
    
};

const getOne = async(params) =>{
    try{
        const [rows] = await conn.query('SELECT * FROM item WHERE ?;', params); //otra opcion: params.id
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudieron recuperar los datos por: ${e}`
        }
        return error;
    }
};

const createOne = async(params) =>{
    try{
        const [rows] = await conn.query('INSERT INTO item VALUES;', params); //otra opcion: params.id
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudo agregar el nuevo registro debido a: ${e}`
        }
        return error;
    }
};

const deleteOne = async(params) =>{
    try{
        const [rows] = await conn.query('DELETE FROM item WHERE ?;', params); //otra opcion: params.id
        return rows;

    }catch(e){
        const error ={
            isError: true,
            Message: `No se pudo borrar el registro con id ${id} debido a: ${e}`
        }
        return error;
    }
};

// const updateOne = async(id) =>{
//     try{
//         const [rows] = await conn.query('UPDATE item SET ?', 'WHERE item_id=?;', id); //otra opcion: params.id
//         return rows;

//     }catch(e){
//         const error ={
//             isError: true,
//             Message: `No se pudo actualizar el registro con id ${id} debido a: ${e}`
//         }
//         return error;
//     }
// };

module.exports={
    getAll,
    getOne,
    createOne,
    deleteOne,
    // updateOne
}