const authControllers= {
    loginGET: (req,res)=>{
        res.render("auth/login.ejs",{
        view:{
            title: "LOGIN | FUNKOSHOP"
        },
    })},
    loginPOST: (req,res)=>res.send('Route POST login'),
    registerGET: (req, res)=> {
        res.render("auth/register.ejs",{
        view:{
            title: "REGISTER | FUNKOSHOP"
        },
    })},
    registerPOST: (req, res)=> res.send('Rout POST register'),
    logout: (req, res)=> res.send('Rout for logout view'),
}

module.exports = authControllers;