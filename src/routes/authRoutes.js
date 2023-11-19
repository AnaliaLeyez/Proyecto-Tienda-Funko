const express = require ('express');
const router = express.Router();
const authcontrollers= require('../controllers/authControllers');

router.get('/login', authcontrollers.loginGET);
router.post('/login', authcontrollers.loginPOST);
router.get('/register', authcontrollers.registerGET);
router.post('/register', authcontrollers.registerPOST);
router.get('/logout', authcontrollers.logout);

module.exports =router;