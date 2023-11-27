//Aca se contiene la "lógica de negocio"
const { getAll, getOne, createOne, deleteOne } = require('../models/itemsModels');

const getAllItems =async(params)=>{

    const data = await getAll(params);
    return data;
}

const getOneItem =async(params)=>{

    const data = await getOne({item_id: params});
    return data;
}

const createOneItem =async(params)=>{

    const data = await createOne({item_id: params});
    return data;
}

const deleteOneItem =async(params)=>{
    const result = await deleteOne({item_id: params});
    return result;
}

module.exports={
    getAllItems,
    getOneItem,
    createOneItem,
    deleteOneItem
}