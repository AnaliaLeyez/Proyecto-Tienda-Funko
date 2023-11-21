const express = require ('express');
const router = express.Router();
//const uploadFiles = require('../middlewares/uploadFiles');
const admincontrollers= require('../controllers/adminControllers');

router.get('/', admincontrollers.admin);
router.get('/create', admincontrollers.createGET);
router.post('/create', admincontrollers.createPOST);
router.get('/edit/:id', admincontrollers.editGET);
router.put('/edit/:id', admincontrollers.editPUT);
router.delete('/delete/:id', admincontrollers.delete);

module.exports =router;