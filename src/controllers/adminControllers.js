const fs = require ('fs'); //file system permite leer archivos
const path = require('path');

const adminControllers= {
    admin: (req,res)=>{
        const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render("admin/admin.ejs",{
        productos,
        view:{
            title: "ADMIN | FUNKOSHOP"
        },
    })},
    createGET: (req, res)=> res.send('Rout for Admin Create'),
    createPOST: (req, res)=> res.send('Rout POST for Admin Create'),
    editGET: (req, res)=> res.send('Rout for Admin Edit'),
    editPUT: (req, res)=> res.send('Rout PUT for Admin Edit'),
    delete: (req, res)=> res.send('Rout for DELETE Admin')
}

module.exports = adminControllers;