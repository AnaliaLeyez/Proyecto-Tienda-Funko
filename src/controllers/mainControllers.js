const fs = require ('fs'); //file system permite leer archivos
const path = require('path');

const mainControllers= {
    home: (req,res)=>{
        const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        const colecciones = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/collections.json')));
        res.render("home.ejs",{
        productos,
        colecciones,
        view:{
            title: "HOME | FUNKOSHOP"
        },
        slider:{
            telte: "Últimos lanzamientos"
        }
    })},
    contact: (req, res)=> res.send('Rout for contact view'),
    about: (req, res)=> res.send('Rout for about view'),
    faqs: (req, res)=> res.send('Rout for faqs view')
}

module.exports = mainControllers;