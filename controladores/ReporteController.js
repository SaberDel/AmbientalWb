const reporteCtrl = {};
var connection =require('../database');

reporteCtrl.getResultados = async (req, res, next) => {
    connection.query('SELECT * FROM tbReporte', (err, rows, fields) => {
         if (!err)
             res.json(rows);
         else
             console.log(err); 
     }) 
 }

 reporteCtrl.getResultado=(req, res) => {
    connection.query('SELECT * FROM tbReporte WHERE tbTrabajo_IdTr = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else 
            console.log(err);
    })
}

reporteCtrl.getRes=(req, res) => {
    connection.query('SELECT * FROM tbReporte WHERE IdCap = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

reporteCtrl.ElimResultado=(req, res) => {
    connection.query('DELETE FROM tbReporte WHERE IdCap = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json('Deleted successfully.');
        else
            console.log(err);
    })
}

reporteCtrl.AddResultado=function(req,res){
    var postData=req.body;
    connection.query('INSERT INTO tbReporte SET?', postData, function(error,results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));  
    });     
}

reporteCtrl.UpdateRes=(req, res) => {
    const { id } = req.params;
    const oldUser = req.body;
    connection.query('UPDATE tbReporte set ? WHERE IdCap = ?', [req.body, id]); 
    res.json({ message: "The user was Updated" });
}

module.exports = reporteCtrl;