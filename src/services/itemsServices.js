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

const createOneItem =async(item, files)=>{
    const itemSchema= {
     collection: item.collection,
     licence: item.collection,
     name: item.name,
     description: item.description,
     sku:  item.sku,
     price:  item.price,
     dues:  item.dues,
     stock:  item.stock,
     sells: 18,
     discount: item.discount,
     img_front:  '/' + files[0].filename,
     img_back:  '/' + files[1].filename,
     category_category_id: item.category_id
    }

    const data = await createOne(Object.values(itemSchema));
    //console.log(data);
    return data;
}

const deleteOneItem =async(id)=>{
    const result = await deleteOne({item_id: id});
    return result;
}

module.exports={
    getAllItems,
    getOneItem,
    createOneItem,
    deleteOneItem
}