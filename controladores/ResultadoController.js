const resultadoCtrl = {};
var connection =require('../database');

resultadoCtrl.getResultados = async (req, res, next)=> {
    connection.query('SELECT * FROM tbResultados WHERE tbReporte_IdCap = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

resultadoCtrl.getResultado= async (req, res) => {
    connection.query('SELECT * FROM tbResultados WHERE IdRes = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}


resultadoCtrl.AddResultado=function(req,res){
    var postData=req.body;
    connection.query('INSERT INTO tbResultados SET?', postData, function(error,results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));  
    });     
} 


resultadoCtrl.DeleteResultado =(req, res) => {
    connection.query('DELETE FROM tbResultados WHERE IdRes = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json('Deleted successfully.');
        else
            console.log(err);
    })
}

resultadoCtrl.UpdateResultado= (req, res) => {
    const { id } = req.params;
    const oldEmp = req.body;
    connection.query('UPDATE tbResultados set ? WHERE IdRes = ?', [req.body, id]); 
    res.json({ message: "Actualizado" });
}

module.exports = resultadoCtrl;