const express = require('express');
const conexionDB = require('./config/db');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Conexion a la base de datos
conexionDB();

//Desactivacion del cors para realizar las solicitudes al api externo
app.use(cors());

//Convierte los datos en formato json
app.use(express.json());

app.use('/api', require('./routes/usuario'));

//Definicion del puerto de entrada
app.listen(5005, () =>{
    console.log("Servidor iniciado por el puerto 5005")
})
