const express = require ('express');
const router = express.Router();
const admincontrollers= require('../controllers/adminControllers');
const { uploadFile } = require('../middlewares/uploadFiles');

router.get('/', admincontrollers.admin);
router.get('/create', admincontrollers.createGET);
router.post('/create', uploadFile.array('imagenes', 2),admincontrollers.createPOST);
router.get('/edit/:id', admincontrollers.editGET);
router.put('/edit/:id', uploadFile.array('imagenes', 2), admincontrollers.editPUT);
router.get('/delete/:id', admincontrollers.delete);
//router.delete('/delete/:id', admincontrollers.delete);

module.exports =router;