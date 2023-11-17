const authControllers= {
    loginGET: (req,res)=>res.send('Route for login'),
    loginPOST: (req,res)=>res.send('Route POST login'),
    registerGET: (req, res)=> res.send('Rout for register'),
    registerPOST: (req, res)=> res.send('Rout POST register'),
    logout: (req, res)=> res.send('Rout for about view'),
}

module.exports = authControllers;