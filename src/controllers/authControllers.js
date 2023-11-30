const userCredentials = {
    email: 'analia@gmail.com',
    password: 'ana123'
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