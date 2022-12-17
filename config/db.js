const mongoose = require('mongoose');

require('dotenv').config({path: '.env'});

//configuracion de acceso a la base de datos
const conexionDB = async() =>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DB_MONGO)
        console.log('Base de datos conectada con MongoDB')
    } catch (error) {
        console.log(error);
        process.exit(1) 
    }
}

module.exports = conexionDB;