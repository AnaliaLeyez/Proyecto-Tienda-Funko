const express = require ('express');
const router = express.Router();

router.get('/', (req, res)=> res.send('Rout for shop view'));
router.get('/item/:id', (req, res)=> { res.send(`Rout for find and retrieve a rpoduct from an ID=${req.params.id}`);
    // const id= red.params.id;

    // res.send({item});
});
router.post('/item/:id/add', (req, res)=> res.send('Rout for add the current item to the shop cart'));
router.get('/cart', (req, res)=> res.send('Rout for cart view'));
router.post('/cart', (req, res)=> res.send('Rout for go to checkout page'));


module.exports =router;