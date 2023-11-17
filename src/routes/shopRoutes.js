const express = require ('express');
const router = express.Router();
const shopcontrollers= require('../controllers/shopControllers');

router.get('/', shopcontrollers.shop);
router.get('/item/:id', shopcontrollers.item);
router.get('/cart', shopcontrollers.cart);
router.get('/faqs', shopcontrollers.faqs);

module.exports = router;