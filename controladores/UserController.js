const userCtrl = {};
var connection =require('../database')
const passport= require('passport');
const LocalStrategy=require ('passport-local').Strategy;
const helpers= require('../librerias/helpers');
const bcrypt = require('bcryptjs');


userCtrl.getUsers = async (req, res, next) => {
        connection.query('SELECT * FROM tbUsuario', async(err, rows, fields) => {
         if (!err)
             {
                res.json(rows);
                password1= await helpers.desencriptarPass(rows[0].PASS)
                console.log(password1);
                console.log(rows[0].PASS)
             }
         else
             console.log(err); 
     }) 
}

userCtrl.loginDato = async (req, res, next) => {
    connection.query('SELECT * FROM login', async(err, rows, fields) => {
     if (!err)
         {
            res.json(rows);
         }
     else
         console.log(err); 
 }) 
}

userCtrl.getUser= (req, res) => 
{
    connection.query('SELECT * FROM tbUsuario WHERE IdUs = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

userCtrl.CreateUser = async(req,res)=> {
    var postData=req.body;
    //postData.PASS= await helpers.encryptPassword(postData.PASS);
    console.log(postData)
    connection.query ('INSERT INTO tbUsuario SET?', postData, function (error,results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));  
    });
}

userCtrl.UpdateUser= (req, res) => {
    const { id } = req.params;
    const oldUser = req.body;
    connection.query('UPDATE tbUsuario set ? WHERE IdUs = ?', [req.body, id]); 
    res.json({ message: "The user was Updated" });
}

userCtrl.deleteUser= (req, res) => {
    connection.query('DELETE FROM tbUsuario WHERE IdUs = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json('Deleted successfully.');
        else
            console.log(err);
    })
}

userCtrl.searchUser=(req,res)=> {
    connection.query('SELECT * FROM tbUsuario WHERE Target = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}


module.exports = userCtrl;