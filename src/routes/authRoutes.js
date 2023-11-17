const express = require ('express');
const router = express.Router();
const authcontrollers= require('../controllers/authControllers');

router.get('/login', authcontrollers.getLogin);
router.post('/login', authcontrollers.postLogin);
router.get('/register', authcontrollers.getRegister);
router.post('/register', authcontrollers.postRegister);
router.get('/logout', authcontrollers.logout);

module.exports =router;