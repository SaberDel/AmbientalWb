/*const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn } = require('./Autenticado');


// SINGIN
router.get('/inicio', (req, res) => {
  res.render('Autenticado/inicio');
});

router.post('/inicio', (req, res, next) => {
  req.check('username', 'Username is Required').notEmpty();
  req.check('password', 'Password is Required').notEmpty();
  const errors = req.validationErrors();
  if (errors.length > 0) {
    req.flash('message', errors[0].msg);
    res.redirect('/inicio');
  }
  passport.authenticate('local.signin', {
    successRedirect: 'www.google.com',
    failureRedirect: '/inicio',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

module.exports = router; 
*/