const empresaCtrl = {};
var connection =require('../database')

empresaCtrl.getEmpresas = async (req, res, next) => {
        connection.query('SELECT * FROM tbempresa', (err, rows, fields) => {
         if (!err)
             res.json(rows);
         else
             console.log(err); 
     }) 
}

empresaCtrl.getEmpresa= (req, res) => 
{
    connection.query('SELECT * FROM tbempresa WHERE Idempresa = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

empresaCtrl.CreateEmpresa = function(req,res){
    var postData=req.body;
    connection.query('INSERT INTO tbempresa SET?', postData, function(error,results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));  
    });     
}

empresaCtrl.UpdateEmpresa= (req, res) => {
    const { id } = req.params;
    const oldUser = req.body;
    connection.query('UPDATE tbempresa set ? WHERE Idempresa = ?', [req.body, id]); 
    res.json({ message: "The user was Updated" });
}

empresaCtrl.deleteEmpresa= (req, res) => {
    connection.query('DELETE FROM tbempresa WHERE Idempresa = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json('Deleted successfully.');
        else
            console.log(err);
    })
}

empresaCtrl.searchEmpresa=(req, res) => {
    connection.query('SELECT * FROM tbempresa WHERE NombreEmp = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

module.exports = empresaCtrl;