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

const createOneItem =async(item)=>{
    const itemSchema= {
     collection: item.collection,
     licence: item.collection,
     name: item.name,
     description: item.description,
     img_front:  item.imagenes,
     img_back:  item.imagenes,
     sku:  item.sku,
     price:  item.price,
     dues:  item.dues,
     stock:  item.stock,
     sells: 17
    }

    const data = await createOne({item_id: params});
    return data;
    // return await itemModel.create([Object.values(itemSchema)]);
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