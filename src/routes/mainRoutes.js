const express = require ('express');
const router = express.Router();
const maincontrollers= require('../controllers/mainCrontrollers')

router.get('/home', maincontrollers.home);
router.get('/contact', maincontrollers.contact);
router.get('/about', maincontrollers.about);
router.get('/faqs', maincontrollers.faqs);

module.exports =router;