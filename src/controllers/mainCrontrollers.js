const maincontrollers= {
    home: (req,res)=>res.send('Route for Home View'),
    contact: (req, res)=> res.send('Rout for contact view'),
    about: (req, res)=> res.send('Rout for about view'),
    faqs: (req, res)=> res.send('Rout for faqs view')
}

module.exports = maincontrollers;