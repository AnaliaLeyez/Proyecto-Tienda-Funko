const express = require ('express');
const router = express.Router();
const admincontrollers= require('../controllers/adminControllers');

router.get('/', admincontrollers.admin);
router.get('/create', admincontrollers.getCreate);
router.post('/create', admincontrollers.postCreate);
router.get('/edit/:id', admincontrollers.getEdit);
router.put('/edit/:id', admincontrollers.putEdit);
router.delete('/delete/:id', admincontrollers.delete);

module.exports =router;