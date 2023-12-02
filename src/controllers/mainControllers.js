 const fs = require ('fs'); //file system permite leer archivos
 const path = require('path'); //este y fs serian necesarios si trajera los datos desde el archivo json
//Si no tuviera "Servicios" de intermediario haria:
//const { getOne} = require('../models/itemsModels');
const { getAllItems} = require('../services/itemServices');
const { getAllLicences} = require('../services/licenceServices');


const mainControllers= {
    home: async(req,res)=>{
        //Si no tuviera BD:
        // const items = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/items.json')));
        // const colecciones = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/licences.json')));
        const items = await getAllItems();
        const colecciones = await getAllLicences();
        
        res.render("home.ejs",{
        items,
        colecciones,
        view:{
            title: "HOME | FUNKOSHOP"
        },
        slider:{
            title: "Últimos lanzamientos"
        },
        // message: req.query.message === 'logout' ? 'Sesión finalizada correctamente' : ''
        message: req.query.message === 'logout' ? 'Sesión finalizada correctamente' : '',
        sendForm: req.query.sendForm === 'ok' ? 'Mensaje enviado correctamente' : ''
    })},

    contact: (req, res)=> 
    res.render("contact.ejs",{
        view:{
            title: "CONTACT | FUNKOSHOP"
        },
    }),

    contactPOST: (req,res)=>{
    res.redirect("/home?sendForm=ok")
    },
    
    about: (req, res)=> res.send('Rout for about view'),
    faqs: (req, res)=> res.send('Rout for faqs view')
}

module.exports = mainControllers;