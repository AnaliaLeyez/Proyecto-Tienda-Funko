const mainControllers= {
    home: (req,res)=>res.render("home.ejs",{
        view:{
            title: "HOME | FUNKOSHOP"
        },
    }),
    contact: (req, res)=> res.send('Rout for contact view'),
    about: (req, res)=> res.send('Rout for about view'),
    faqs: (req, res)=> res.send('Rout for faqs view')
}

module.exports = mainControllers;