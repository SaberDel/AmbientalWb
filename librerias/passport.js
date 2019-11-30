const passport= require('passport');
const LocalStrategy=require ('passport-local').Strategy;
var connection =require('../database');
const helpers= require('../librerias/helpers');
const bcrypt = require('bcryptjs');


passport.use('local.signin',new LocalStrategy({
    usernameField: 'Target',
    passwordField: 'PASS',
    passReqToCallback: true
}, async (req, username, password, done) => {
    connection.query('SELECT * FROM tbusuario WHERE Target = ?', [username], async (err, rows, fields) => {
        if (!err)
        {  //Aqui sigue lo del tutorial
            if(rows[0].lenght!=0)
            {
                const user= rows[0];
                const validPassword = await helpers.matchPassword(password, user.PASS)
                console.log(validPassword)
                if (validPassword) {
                    done(null, user);
                    
                  }

                  else {
                    done(null, false);
                    console.log('Contraseña incorrecta')
                  }
            }

            else {
                return done(null, false);
              }
        }

        else
            console.log(err); 
    }) 
}));

passport.serializeUser((user, done) => {
    done(null, user.IdUs);
  });
  
  passport.deserializeUser(async (id, done) => {
    const rows = await connection.query('SELECT * FROM tbusuario WHERE Target = ?', [id]);
    done(null, rows[0]);
  });