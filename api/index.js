'use strict'

var app = require('./appi'); 
// iniciar servicio
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
