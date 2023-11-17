const express = require ('express');
const router = express.Router();
const shopcontrollers= require('../controllers/shopControllers');

router.get('/', shopcontrollers.shop);
router.get('/item/:id', shopcontrollers.item);
router.post('/item/:id', shopcontrollers.item);
router.get('/cart', shopcontrollers.getCart);
router.post('/cart', shopcontrollers.postCart);

module.exports = router;
