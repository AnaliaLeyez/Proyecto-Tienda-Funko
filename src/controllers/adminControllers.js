const adminControllers= {
    admin: (req,res)=>res.send('Route for Admin'),
    createGET: (req, res)=> res.send('Rout for Admin Create'),
    createPOST: (req, res)=> res.send('Rout POST for Admin Create'),
    editGET: (req, res)=> res.send('Rout for Admin Edit'),
    editPUT: (req, res)=> res.send('Rout PUT for Admin Edit'),
    delete: (req, res)=> res.send('Rout for DELETE Admin')
}

module.exports = adminControllers;