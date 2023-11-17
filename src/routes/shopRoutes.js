const express = require ('express');
const router = express.Router();
const shopcontrollers= require('../controllers/shopControllers');

router.get('/', shopcontrollers.shop);
router.get('/item/:id', shopcontrollers.item);
router.post('/item/:id', shopcontrollers.item);
router.get('/cart', shopcontrollers.cartGET);
router.post('/cart', shopcontrollers.cartPOST);

module.exports = router;