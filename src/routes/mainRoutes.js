const express = require ('express');
const router = express.Router();
const maincontrollers= require('../controllers/mainControllers');

router.get('/home', maincontrollers.home);
router.get('/contact', maincontrollers.contact);
router.get('/about', maincontrollers.about);
router.get('/faqs', maincontrollers.faqs);
router.get('/', maincontrollers.home);
module.exports =router;