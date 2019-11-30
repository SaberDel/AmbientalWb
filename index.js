var http= require("http"); 
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const passport=require('passport');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const validator = require('express-validator');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
require('./librerias/passport');
var connection =require('./database')
var inicioSesion;
const alert= require('alert-node')
var JSAlert=require('js-alert')

// Ajustes
app.set('port', process.env.PORT || 3000); 
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json()); 
 
// Enlace con puerto de angular para transferencia de datos
app.use(cors({origin: 'http://157.245.177.68:4200'}));
app.use(express.json());   

//Middlewares
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use('/', express.static('client',{redirect: false}));

//Login
app.get('/Signin', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/login.html'));
});



app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
    console.log(username);
    console.log(password);
		connection.query('SELECT * FROM tbUsuario WHERE Target = ? AND PASS = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				const inicioSesion=request.session.loggedin = true;
				request.session.username = username;
				if(inicioSesion){
				response.redirect('http://157.245.177.68:4200/bienvenido');
				app.use('/api', require('./rutas/userRoutes'));
				app.use('/api', require('./rutas/empresaRoutes'));
				app.use('/api', require('./rutas/trabajoRoutes'));
				app.use('/api', require('./rutas/medicionRoutes'));
				app.use('/api', require('./rutas/equipoRoutes'));
				app.use('/api', require('./rutas/reporteRouter'));
				app.use('/api', require('./rutas/resultadoRoute'));
				app.use('/api', require('./rutas/Auth'));
				console.log(results[0].Target)
				var a={username}
				connection.query ('UPDATE login set ?', a, function (error,results,fields){});
				}
			} else  {
				response.redirect('http://157.245.177.68:3000/signin');
				alert('Usuario o contraseña incorrecto')
				
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
}); 

app.get('/api/sesion',function(request, response) {
	if (request.session.loggedin) {
		
		
	} else {
		response.redirect('http://157.245.177.68:3000/signin');
	}
	response.end();
});
//Fin del login


// Global variables
app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
  });
  

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
});