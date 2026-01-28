'use strict'

const express = require('express');
const ContactoController = require('../controllers/contacto');

const api = express.Router(); // esto sirve para crear las rutas

// CRUD de contactos
api.post('/agregarContacto', ContactoController.agregarContacto);
api.get('/listarContactos', ContactoController.listarContactos);
api.get('/buscarPorNombre/:nombre', ContactoController.buscarPorNombre);
api.put('/actualizarContacto', ContactoController.actualizarContacto);
api.delete('/eliminarContacto/:id', ContactoController.eliminarContacto);

module.exports = api;
