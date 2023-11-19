const shopcontrollers= {
    shop: (req,res)=> res.render("shop/shop.ejs", {
        view: {
            title: "SHOP | FUNKOSHOP"
        },
    }
    ),
    item: (req, res)=> res.send(`Rout for find and retrieve a rpoduct from an ID=${req.params.id}`),
    cartGET: (req, res)=> res.send('Rout for cart view, with GET'),
    cartPOST: (req, res)=> res.send('Rout for go to checkout page with POST')
     // const id= req.params.id;
    // res.send({item});
};
//router.post('/item/:id/add', (req, res)=> res.send('Rout for add the current item to the shop cart'));
//router.post('/cart', (req, res)=> res.send('Rout for go to checkout page'));

module.exports = shopcontrollers;