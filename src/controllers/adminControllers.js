const adminControllers= {
    admin: (req,res)=>res.send('Route for Home View'),
    create: (req, res)=> res.send('Rout for contact view'),
    edit: (req, res)=> res.send('Rout for about view')
}

module.exports = adminControllers;