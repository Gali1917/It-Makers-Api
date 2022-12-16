const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
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
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema);