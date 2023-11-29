// const fs = require ('fs'); //file system permite leer archivos
// const path = require('path'); //este y fs serian necesarios si trajera los datos desde el archivo json
//Si no tuviera "Servicios" de intermediario haria:
//const { getOne} = require('../models/itemsModels');
const { getAllItems, getOneItem } = require('../services/itemServices');

const shopcontrollers= {
    shop: async(req,res) => {
        //Si no tuviera BD:
        // const items = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/items.json')));
        let items = await getAllItems();
        if(items.isError){
            items = 'Hubo un error'
        }
        res.render("shop/shop.ejs", 
    {
        items,
        view: {
            title: "SHOP | FUNKOSHOP"
        },
    }
    )},


    itemGET: async(req,res)=>{
        let item = await getOneItem(req.params.id);
        if(item.isError){
            item = 'Hubo un error'
        }
        const items = await getAllItems();

        res.render("shop/item.ejs", 
        { 
            items,
            item: item[0],
            view: {
                title: "SHOP | FUNKOSHOP"
            },
            slider:{ 
                        title: "Productos relacionados"
                    }
        }
        )
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

};
//router.post('/item/:id/add', (req, res)=> res.send('Rout for add the current item to the shop cart'));
//router.post('/cart', (req, res)=> res.send('Rout for go to checkout page'));

module.exports = shopcontrollers;