const shopcontrollers= {
    shop: (req,res)=> res.send('Route for shop View'),
    item: (req, res)=> res.send(`Rout for find and retrieve a rpoduct from an ID=${req.params.id}`),
    cart: (req, res)=> res.send('Rout for cart view'),
    faqs: (req, res)=> res.send('Rout for faqs view')
     // const id= req.params.id;
    // res.send({item});
};
//router.post('/item/:id/add', (req, res)=> res.send('Rout for add the current item to the shop cart'));
//router.post('/cart', (req, res)=> res.send('Rout for go to checkout page'));

module.exports = shopcontrollers;