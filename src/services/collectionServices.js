//Aca se contiene la "lógica de negocio"
const { getAll } = require('../models/collectionModel');

const getAllCollections =async(params)=>{

    const data = await getAll(params);
    return data;
}

module.exports={
    getAllCollections
}