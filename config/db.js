const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');
require('dotenv').config({path: '.env'});

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