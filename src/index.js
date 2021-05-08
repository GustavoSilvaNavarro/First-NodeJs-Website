//INSTALE MODULO NODEMON QUE HACE QUE LA CONSOLE SE EJECUTE CADA VEZ QUE HAGO UN CAMBIO O GUARDO (NPM RUN DEV) QUE ES DNDE GUARDE EL MODULO INSTALADO CON (npm i nodemon -D) la -D ES PARA QUE SE GUARDARA POR APARTE DE LOS MODULOS IMPORTANTES

const express = require('express'); //llamo a mi modulo express que lo isntale
const app = express(); //ejecuto el modulo y me debe devolver un objeto, me va a ayudar para crear un servidor
const path = require('path'); // node tiene un modulo llamado path que esta preparado para trabajar con directorios
//con el modulo path que sabe diferenciar si estamos en linux o windos seria path.join(__dirname, 'view/index.html') y ya el modulo cambia las barras y las acomoda a si es windows o linux
//solo como mencion el comando __dirname me da la direccion de donde esta el archivo que se esta ejecutando y si quiero ir profundo puedo concatenarlo como __dirname + '\views\index.html'

//SETTINGS PARA LA APLICACION
app.set('port', 3000); //Express da un manera de generar constantes que pueden ser accedidas para modifcar su valor y estas se cmabien en todo el codigo
app.set('views', path.join(__dirname, 'views')); //le doy la direccion a node de donde esta mi carpeta views por lo general node sabe donde esta pero al incluirla dentro de la carpeta src ya node no sabe donde esta la carpeta por lo que se la configuro y le digo donde esta esa carpeta
app.engine('html', require('ejs').renderFile); //configuro mis archivos html para poder usar la extensio html pero de todas maneras lo procese ejs
app.set('view engine', 'ejs'); //ejecuto mi motor de plantillas especificadoe en linea anterior //traigo mi modulo ejs no lo declaro o la importo como antes ya que express esta relacionado con el 

//MIDDLEWEARS (son funciones que se ejecutan antes que las rutas procesen algo)


//RUTAS DE MI SERVIDOR
app.use(require('./routes/index')); // con esto importo mis rutas y no es necesario llamar todo el archivo solo dandole la carptea es suficiente el app.use es para indicarle que deso utilizar mis rutas

//STATIC FILES (archivos de Javascript, fotos, css)
app.use(express.static(path.join(__dirname, 'public')));

//APP  es practicamente el servidor / Listening Server
app.listen(app.get('port'), () => { //le dijo servidor ejecutate y cuando lo hagas muestra el mensaje por consola Servr on port
    console.log('Server on Port', app.get('port')); //uso la constante que puede ser accedida
    //console.log(path.join(__dirname, 'views'));
});



