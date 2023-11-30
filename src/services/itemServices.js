//Aca se contiene la "lógica de negocio"
const { getAll, getOne, createOne, deleteOne, editOne } = require('../models/itemModel');

const getAllItems =async()=>{

    const data = await getAll();
    return data;
}

const getOneItem =async(params)=>{

    const data = await getOne({product_id: params});
    return data;
}

const createOneItem =async(item, files)=>{
    const itemSchema= {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    image_front: '/'+files[0].filename,
    image_back: '/'+files[1].filename,
    licence_id: item.collection,
    category_id: item.category
    }

    const data = await createOne([Object.values(itemSchema)]);
    //console.log(data);
    return data;
}

const deleteOneItem =async(id)=>{
    const result = await deleteOne({product_id: id});
    return result;
}

const editOneItem = async (item, files, id) => {
    const itemSchema = {
      product_name: item.name,
      product_description: item.description,
      price: item.price,
      stock: item.stock,
      discount: item.discount,
      sku: item.sku,
      dues: item.dues,
      image_front: '/'+files[0].filename,
      image_back: '/'+files[1].filename,
      licence_id: item.collection,
      category_id: item.category
    }
  
    const data = await editOne(itemSchema, {product_id: id});
    //console.log(itemSchema);
    return data;
  }

module.exports={
    getAllItems,
    getOneItem,
    createOneItem,
    deleteOneItem,
    editOneItem
}