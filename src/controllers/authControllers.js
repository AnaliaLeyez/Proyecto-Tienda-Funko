//de momento solo existe el siguiente usuario con acceso al admin:
const userCredentials = {
    email: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASS
  }

const authControllers= {
    loginGET: (req,res)=>{
        res.render("auth/login.ejs",{
        view:{
            title: "LOGIN | FUNKOSHOP"
        },
    })},
    
    loginPOST:  (req, res) => {
        const { email, password } = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;
    
        req.session.isLogged = emailValidation && passwordValidation ? true : false;
    
        if (req.session.isLogged) {
          res.locals.isLogged = true;
          return res.redirect('/admin');
        }
    
        return res.status(401).send('Credenciales inválidas');
      },

    registerGET: (req, res)=> {
        res.render("auth/register.ejs",{
        view:{
            title: "REGISTER | FUNKOSHOP"
        },
    })},

    registerPOST: (req, res)=> res.send('Rout POST register'),
    
    logout: (req, res) => {
    req.session.isLogged = false;
    res.send('Sesión finalizada con éxito.')
  },
}

module.exports = authControllers;