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
        const item = await getOneItem(req.params.id);
        const { data } = item;
        const items = await getAllItems();

        res.render("shop/item.ejs", 
        { 
            items,
            item: data[0] ? data[0] : false,
            view: {
                title: "SHOP | FUNKOSHOP"
            },
            slider:{ 
                items,
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

module.exports = shopcontrollers;