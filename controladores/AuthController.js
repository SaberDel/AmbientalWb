const loginCtrl = {};
var connection =require('../database')
const passport=require('passport');
const LocalStrategy=require ('passport-local').Strategy;

loginCtrl.getUser= (req, res) => 
{
    connection.query('SELECT * FROM tbUsuario WHERE Target = ? ', [req.params.id], (err, rows, fields) => 
    {
        if (!err)
        {
               
            if(req.params.id==rows[0].Target)
            {
            res.json(rows);
            console.log(req.params)} 
        }
        else
            console.log(err);
    })
}


loginCtrl.postUser= (req, res) =>
{
    req.username = req.body.Target;
    req.password = req.body.PASS;
    passport.authenticate('local.signin',{
        successRedirect:'',
        failureRedirect:''
    })(req, res);
};


module.exports = loginCtrl;