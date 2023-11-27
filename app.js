const express = require ('express');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.APP_PORT || 4000;
const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

//TEMPLATE ENGINES - Motor EJS de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

//Middlewares POST (lo usamos siempre que tengamos que tomar datos de formulario)
app.use(express.urlencoded({ extended : false })); //para poder obtener lo llenado en el formulario, obtener el req.body
app.use(express.json()); //Indica si los datos vienen con formato JSON y lo pasa a objeto

//Middleware para habilitar metodos PUT y DELETE a partir de hacer override
app.use(methodOverride('_method'));


//Middlewares Rutas
app.use(express.static('public_html')); //debe fijarse por la carpeta public si exite el nombre indicado en la ruta. Ej, ver si existe /productos.html
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, ()=>console.log(`servidor corriendo en http://localhost:${PORT}`));
