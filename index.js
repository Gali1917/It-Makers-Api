const express = require('express');
const conexionDB = require('./config/db');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Conexion a la base de datos
conexionDB();
app.use(cors());

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario'));

//Definicion del puerto de entrada
app.listen(5005, () =>{
    console.log("Servidor iniciado por el puerto 5005")
})
