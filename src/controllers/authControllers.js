const { getOneUser } = require('../services/userServices');

//usuario hardcodeado:
// const userCredentials = {
//     email: process.env.ADMIN_USER,
//     password: process.env.ADMIN_PASS
//   }

const authControllers= {
    loginGET: (req,res)=>{
        res.render("auth/login.ejs",{
        view:{
            title: "LOGIN | FUNKOSHOP"
        },
        message: req.query.message === 'invalid' ? 'Usuario o contraseña incorrectos' : '',
    })},
    
    //Si fuera con datos hardcodeados:
    // loginPOST:  (req, res) => {
        // const { email, password } = req.body;
        // const emailValidation = userCredentials.email == email;
        // const passwordValidation = userCredentials.password == password;
        // req.session.isLogged = emailValidation && passwordValidation ? true : false;
    
        // if (req.session.isLogged) {
        //   res.locals.isLogged = true;
        //   return res.redirect('/admin');
        // }
        // return res.redirect('/auth/login?message=invalid');
      // },

      loginPOST: async(req,res)=>{
        try{
          const mail = req.body.email;
          const pass = req.body.password;
          const data = await getOneUser(mail, pass);
          const usuario = data[0];
          console.log(usuario);
          if (usuario !=undefined){
            req.session.isLogged = true;
            res.locals.isLogged = true;
              req.session.nombre= usuario.name;
              req.session.lastname= usuario.lastname;
              res.redirect('/admin');
          } else {
            res.redirect('/auth/login?message=invalid');
          };
      } catch (e) {
          console.log(e);
          res.redirect('/auth/login?message=invalid');
      }
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
    res.redirect('/home?message=logout');
  },
}

module.exports = authControllers;