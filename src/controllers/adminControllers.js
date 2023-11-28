const fs = require ('fs'); //file system permite leer archivos
const path = require('path');
//Si no tuviera "Servicios" de intermediario haria:
// const { getOne, deleteOne} = require('../models/itemsModels');
const { getAllItems, getOneItem, createOneItem, deleteOneItem } = require('../services/itemsServices');

const adminControllers= {
    admin: (req,res)=>{
        const items = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/items.json')));
        res.render("admin/admin.ejs",{
        items,
        view:{
            title: "ADMIN | FUNKOSHOP"
        },
    })},
    
    createGET: (req, res)=> {
        res.render("admin/create.ejs",{
            view:{
                title: "ADMIN | FUNKOSHOP"
            },
        })
    },
    
    createPOST: async(req, res)=>{
        await createOneItem(req.body, req.files);
        
        const items = await getAllItems();

        res.render('admin/admin.ejs', {
            items,
            view:{
                title: "ADMIN | FUNKOSHOP"
            },
        });
    },

    editGET: (req, res)=>{
        res.render("admin/edit.ejs",{
        view:{
            title: "ADMIN EDIT | FUNKOSHOP"
        },
    })
    },

    editPUT: (req, res)=> res.send('Rout PUT for Admin Edit'),
    
    delete: async(req, res)=>{
        const result = await deleteOneItem(req.params.id);
        res.send(result);
    }
}

module.exports = adminControllers;