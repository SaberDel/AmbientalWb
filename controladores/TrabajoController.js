const trabajoCtrl = {};
var connection =require('../database')

trabajoCtrl.getTrabajos = async(req, res) => {
    connection.query('SELECT * FROM tbTrabajo WHERE tbempresa_Idempresa = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            {
                res.json(rows);
                
            }
        else
            console.log(err);
    })
}

trabajoCtrl.getTrabajo= (req, res) => 
{
    connection.query('SELECT * FROM tbTrabajo WHERE IdTr = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

trabajoCtrl.CreateTrabajo = function(req,res){
    var postData=req.body;
    connection.query('INSERT INTO tbTrabajo SET?', postData, function(error,results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));  
    });     
}

trabajoCtrl.UpdateTrabajo= (req, res) => {
    const { id } = req.params;
    const oldUser = req.body;
    connection.query('UPDATE tbTrabajo set ? WHERE IdTr = ?', [req.body, id]); 
    res.json({ message: "The user was Updated" });
}

trabajoCtrl.deleteTrabajo= (req, res) => {
    connection.query('DELETE FROM tbTrabajo WHERE IdTr = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json('Deleted successfully.');
        else
            console.log(err);
    })
}

trabajoCtrl.getWork=(req, res) => {
    connection.query('SELECT * FROM tbTrabajo WHERE tbempresa_Idempresa = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

trabajoCtrl.searchTrabajo=(req, res) => {
    connection.query('SELECT * FROM tbTrabajo WHERE NumCot = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

module.exports = trabajoCtrl;