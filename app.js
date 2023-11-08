const express = require ('express');
const app = express();

app.use(express.static('public_html'));

app.listen(4000, ()=>console.log('servidor corriendo en http://localhost:4000'));

app.get('/ping', (req, res)=> res.send('pong'));
app.get('/home', (req, res)=> res.sendFile(__dirname+'/public_html/index.html'));