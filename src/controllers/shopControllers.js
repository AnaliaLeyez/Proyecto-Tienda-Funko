const fs = require ('fs'); //file system permite leer archivos
const path = require('path');
const { getOne} = require('../models/items');
//const { getAllItems} = require('../services/itemServices');

const shopcontrollers= {
    shop: (req,res)=> {
        const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render("shop/shop.ejs", 
    {
        productos,
        view: {
            title: "SHOP | FUNKOSHOP"
        },
    }
    )},

    // item: (req, res)=> {
    // const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
    // res.render("shop/item.ejs", 
    // {
    //     productos,
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

    itemGET: async function getItem(req,res){
        const id= req.params.id;
        const item = await getOne({product_id: id});
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