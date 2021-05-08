const express = require('express'); //lo requiero por que voy a usar otro modulo de express llamado router 
const router = express.Router(); //sirve para crear multiples rutas y mantenerlas en archivos separados

//RUTAS DE MI SERVIDOR
//CREACION DE RUTA PRINCIPAL PAGINA PRINCIPAL
router.get ('/', (req, res) => { //el router es el encargado de crear las rutas
    //res.send('Hello World'); //envia como respuesta este mensaje
    //res.sendFile(path.join(__dirname, 'views/index.html')); //en lugar de enviar un mensaje voy a enviar mi html por lo que coloco esta función
    res.render('index.html', { title: 'First Website NodeJS' }); //como ahora quiero procesar mi archivo para que se vuelva un html ya que estamos agregando codigo que no es valido por el html hay que procesarlo con ejs se puede colocar codigo de javascript o loops
});

//CREACION DE OTRA RUTA LLAMADA CONTACT
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page' });
});


module.exports = router; //exporto el router esot me ayuda a crear mis rutas junto con las filas 1 y 2