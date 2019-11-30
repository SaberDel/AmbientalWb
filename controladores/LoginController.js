const loginCtrl = {};
var connection =require('../database')
const passport= require('passport');
const LocalStrategy=require ('passport-local').Strategy;
const helpers= require('../librerias/helpers');
const bcrypt = require('bcryptjs');
const path = require('path');


loginCtrl.getdato= (req,res)=>
{
    res.sendFile(path.join(__dirname + '../../views/login.html'));
}

loginCtrl.postDato= function (req, res)
{
    var poster=req.body;
    console.log(poster)
    var username = req.body.username;
    var password = req.body.password;
    console.log(username)
	if (username && password) {
		connection.query('SELECT * FROM tbUsuario WHERE Target = ? AND PASS = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('http://localhost:4200/indexUsers');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
}


module.exports = loginCtrl;