const { Schema, model } = require('mongoose');


const UsuarioSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    telefono:{
        type: Number,
        required: true
    },
    rol:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        requried: true
    },
    password:{
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }

}, {
    timestamps: true
})

module.exports = model('Usuario', UsuarioSchema);