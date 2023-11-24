const mysq = require('mysql2');
const fs = require('fs');
const path = require('path');

const pool = mysq.createPool({
    host: 'localhost',
    user: 'root',
    database: 'funko_db',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    enableKeepAlive: true,
    queueLimit: 0
});

//A ESTA FUNCION LA LLAMO SOLO CUANDO NECESITO AGREGAR PRODUCTOS:
// Lee el archivo JSON y realiza las inserciones en la base de datos
async function insertarProductos() {
    try {
        const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8'));
        const connection = await pool.promise().getConnection();

        // Itera sobre los productos y realiza las inserciones en la base de datos
        for (const producto of productos) {
            const result = await connection.query('INSERT INTO product SET ?', producto);
            console.log(`Producto insertado con ID: ${result[0].insertId}`);
        }

    } catch (error) {
        console.error(`Error al insertar productos: ${error.message}`);
    }
}

//A ESTA FUNCION LA LLAMO SOLO CUANDO NECESITO AGREGAR COLECCIONES:
async function insertarColecciones() {
    try {
        const colecciones = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/collections.json'), 'utf-8'));
        const connection = await pool.promise().getConnection();

        // Itera sobre los productos y realiza las inserciones en la base de datos
        for (const coleccion of colecciones) {
            const result = await connection.query('INSERT INTO collection SET ?', coleccion);
            console.log(`Coleccion insetada con ID: ${result[0].insertId}`);
        }

    } catch (error) {
        console.error(`Error al insertar colecciones: ${error.message}`);
    }
}

// Obtiene una conexión del pool y llama a la función insertarProductos
    pool.getConnection((error,connection) =>{
        if(error){
            console.error('Error de conexion, este fue: ', error)
        }else{
            console.log('conexion a BD exitosa');
            //insertarProductos();  //A ESTA FUNCION LA LLAMO SOLO CUANDO NECESITO AGREGAR PRODUCTOS
            //insertarColecciones(); //A ESTA FUNCION LA LLAMO SOLO CUANDO NECESITO AGREGAR COLECCIONES
            connection.release();
        }
    });

module.exports= {
    conn:pool.promise()
}
