const express = require ('express');
const router = express.Router();
const admincontrollers= require('../controllers/adminControllers');
const { uploadFile } = require('../middlewares/uploadFiles');

router.get('/', admincontrollers.admin);
router.get('/create', admincontrollers.createGET);
router.post('/create', uploadFile.array('images', 2) ,admincontrollers.createPOST);
router.get('/edit/:id', admincontrollers.editGET);
router.put('/edit/:id', admincontrollers.editPUT);
router.delete('/delete/:id', admincontrollers.delete);

module.exports =router;