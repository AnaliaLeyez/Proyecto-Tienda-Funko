const fs = require ('fs'); //file system permite leer archivos
const path = require('path');
//Si no tuviera "Servicios" de intermediario haria:
const { getOne} = require('../models/itemsModels');
const { getAllItems, getOneItem, deleteOneItem } = require('../services/itemsServices');

const shopcontrollers= {
    shop: (req,res)=> {
        const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/items.json')));
        res.render("shop/shop.ejs", 
    {
        productos,
        view: {
            title: "SHOP | FUNKOSHOP"
        },
    }
    )},

    // item: (req, res)=> {
    // const items = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/items.json')));
    // res.render("shop/item.ejs", 
    // {
    //     items,
    //     view: {
    //         title: "SHOP | FUNKOSHOP"
    //     },
    //     slider:{
    //         telte: "Productos relacionados"
    //     }
    // }
    // )},


    // itemGET: async (req, res)=> {
    //     const items = await getAllItems();
    //     res.send(items);
    // },

    itemGET: async(req,res)=>{
        let item = await getOneItem(req.params.id);
        if(item.isError){
            item = 'Hubo un error'
        }
        res.send(item);
    },

    itemPOST:(req, res)=> res.send('Rout for item with POST'),

    cartGET: (req, res)=> res.render("shop/cart.ejs", 
    {
        view: {
            title: "SHOP | FUNKOSHOP"
        },
    }
    ),

    cartPOST: (req, res)=> res.send('Rout for go to checkout page with POST')
     // const id= req.params.id;
    // res.send({item});
};
//router.post('/item/:id/add', (req, res)=> res.send('Rout for add the current item to the shop cart'));
//router.post('/cart', (req, res)=> res.send('Rout for go to checkout page'));

module.exports = shopcontrollers;