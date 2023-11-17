const express = require ('express');
const router = express.Router();
const admincontrollers= require('../controllers/adminControllers');

router.get('/', admincontrollers.admin);
router.get('/create', admincontrollers.create);
router.get('/edit/:id', admincontrollers.edit);
//router.get('/faqs', admincontrollers.faqs);

module.exports =router;