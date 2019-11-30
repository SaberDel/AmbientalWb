const express = require('express');
const router = express.Router();
var connection =require('../database')
const app = express();
const login = require('../controladores/LoginController');
const path = require('path');

//router.get('/sigin',login.getdato);
//router.post('/authenticate',login.postDato);


//Login
router.get('/sigin', (request, response) =>{
	response.sendFile(path.join(__dirname + '../../views/login.html'));
});

router.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
    console.log(username);
    console.log(password);
		connection.query('SELECT * FROM tbusuario WHERE Target = ? AND PASS = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('http://localhost:4200/indexUsers');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
}); 
//Fin del login
module.exports = router;