var express = require('express');
var testController = require('../controllers/testController');

/** Inicializamos el framework de de express con su modulo de Router*/
var app = express.Router();

app.get('/prueba_test', testController.prueba_test);

// Exporta la variable app
module.exports = app;

