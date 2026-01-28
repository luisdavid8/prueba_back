'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var contacto_rutas = require('./routes/contacto');

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configurar cabeceras HTTP (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
// rutas base
app.use('/api', contacto_rutas);

module.exports = app;
