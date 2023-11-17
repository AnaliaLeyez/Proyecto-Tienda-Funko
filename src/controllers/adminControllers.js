const adminControllers= {
    admin: (req,res)=>res.send('Route for Admin'),
    getCreate: (req, res)=> res.send('Rout for Admin Create'),
    postCreate: (req, res)=> res.send('Rout POST for Admin Create'),
    getEdit: (req, res)=> res.send('Rout for Admin Edit'),
    putEdit: (req, res)=> res.send('Rout PUT for Admin Edit'),
    delete: (req, res)=> res.send('Rout for DELETE Admin')
}

module.exports = adminControllers;