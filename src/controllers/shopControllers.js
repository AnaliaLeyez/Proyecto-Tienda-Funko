const shopcontrollers= {
    shop: (req,res)=> res.send('Route for shop View'),
    item: (req, res)=> res.send(`Rout for find and retrieve a rpoduct from an ID=${req.params.id}`),
    getCart: (req, res)=> res.send('Rout for cart view, with GET'),
    postCart: (req, res)=> res.send('Rout for go to checkout page with POST')
     // const id= req.params.id;
    // res.send({item});
};
//router.post('/item/:id/add', (req, res)=> res.send('Rout for add the current item to the shop cart'));
//router.post('/cart', (req, res)=> res.send('Rout for go to checkout page'));

module.exports = shopcontrollers;