const authControllers= {
    getLogin: (req,res)=>res.send('Route for login'),
    postLogin: (req,res)=>res.send('Route POST login'),
    getRegister: (req, res)=> res.send('Rout for register'),
    postRegister: (req, res)=> res.send('Rout POST register'),
    logout: (req, res)=> res.send('Rout for about view'),
}

module.exports = authControllers;