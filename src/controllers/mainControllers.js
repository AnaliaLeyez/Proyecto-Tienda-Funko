const fs = require ('fs'); //file system permite leer archivos
const path = require('path');

const mainControllers= {
    home: (req,res)=>{
        const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        //console.log(JSON.parse(productos));
        res.render("home.ejs",{
        productos,
        view:{
            title: "HOME | FUNKOSHOP"
        },
    })},
    contact: (req, res)=> res.send('Rout for contact view'),
    about: (req, res)=> res.send('Rout for about view'),
    faqs: (req, res)=> res.send('Rout for faqs view')
}

module.exports = mainControllers;