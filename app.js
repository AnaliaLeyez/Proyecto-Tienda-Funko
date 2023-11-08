const express = require ('express');
const app = express();

app.use(express.static('public_html'));

app.get('/home', (req, res)=> res.sendFile(__dirname+'/public_html/index.html'));
app.get('/shop', (req, res)=> res.send(''));
app.get('/cart', (req, res)=> res.send(''));

app.listen(4000, ()=>console.log('servidor corriendo en http://localhost:4000'));
