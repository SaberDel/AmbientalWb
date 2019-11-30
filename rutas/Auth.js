const express =require('express');
const router= express.Router();
const passport= require('passport');   
const login = require('../controladores/AuthController');

//router.get('/inicio/:id/:pass', login.getUser);


router.post('/inicio',(req,res,next)=>{
    passport.authenticate('local.signin',{
        successRedirect: '/inicio',
        failureRedirect: 'http://localhost:3000/api/users',
        failureFlash: true
    })(req,res,next);
});

module.exports=router;