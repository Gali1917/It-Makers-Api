const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) =>{
try {
    let usuario;

    //Creacion de usuario
    usuario = new Usuario(req.body);
    await usuario.save();
    res.send(usuario);

} catch (error) {
    console.log(error);
    res.status(500).send('Error al procesar la solicitud');

}

    console.log(req.body);
}

exports.obtenerUsuarios = async(req, res) =>{
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al procesar la solicitud');

        
    }
}

exports.actualizarUsuario = async(req, res) =>{
    try {
        const{nombre, email, telefono, rol, imagen} = req.body;
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }
        usuario.nombre = nombre;
        usuario.email = email;
        usuario.telefono = telefono;
        usuario.rol = rol;
        usuario.imagen = imagen;

        usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, usuario, {new: true})
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al procesar la solicitud');
    }
}