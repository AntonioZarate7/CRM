var express = require('express');
var bodyparser = require('body-parser')
var mongoose = require('mongoose');
var port = process.env.port || 4201;

var app = express();

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/negocio',{ useUnifiedTopology: true, useNewUrlParser: true},(err, res) => {
    if(err){
        console.log(err);
    }else{
        console.log('Servidor corriendo ...');
        app.listen(port, function(){
            console.log("En puerto: "+port);
        });
    }
});

app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyparser.json({limit: '50mb', extended: true}));

/**
 * Para evitar los errores de cors
 */
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); // Cada peticion tendra un acceso permitido para cualquier ruta, permitira ingresar datos de cualquier dominio de cualquier servidor 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

var test_routes = require('./routes/test');
app.use('/api', test_routes);

module.exports = app;