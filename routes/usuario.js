//rutas de usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//api/usuarios
router.get('/usuarios/', usuarioController.obtenerUsuarios);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.get('/usuarios/:id', usuarioController.obtenerUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

router.post('/usuarios/', usuarioController.crearUsuario);
router.post('/signin', usuarioController.signIn);
module.exports = router;

