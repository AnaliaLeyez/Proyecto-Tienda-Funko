const express = require ('express');
const router = express.Router();
const {validateInput, loginValidations }= require('../middlewares/validator');
const authcontrollers= require('../controllers/authControllers');


router.get('/login', authcontrollers.loginGET);
router.post('/login', loginValidations, validateInput, authcontrollers.loginPOST);
router.get('/register', authcontrollers.registerGET);
router.post('/register', authcontrollers.registerPOST);
router.get('/logout', authcontrollers.logout);

module.exports =router;