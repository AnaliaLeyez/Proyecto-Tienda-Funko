const express = require ('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');

app.use(express.static('public_html'));
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);

app.listen(4000, ()=>console.log('servidor corriendo en http://localhost:4000'));
