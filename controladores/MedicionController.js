const medicionCtrl = {};
var connection =require('../database')

medicionCtrl.getMediciones = async(req, res) => {
    connection.query('SELECT * FROM tbMedicion WHERE tbTrabajo_IdTr = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

medicionCtrl.getMedicion= (req, res) => 
{
    connection.query('SELECT * FROM tbMedicion WHERE IdMed = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

medicionCtrl.CreateMedicion = function(req,res){
    var postData=req.body;
    connection.query('INSERT INTO tbMedicion SET?', postData, function(error,results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));  
    });     
}

medicionCtrl.UpdateMedicion= (req, res) => {
    const { id } = req.params;
    const oldUser = req.body;
    connection.query('UPDATE tbMedicion set ? WHERE IdMed = ?', [req.body, id]); 
    res.json({ message: "Medicion actualizada" });
}

medicionCtrl.deleteMedicion= (req, res) => {
    connection.query('DELETE FROM tbMedicion WHERE IdMed = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json('Deleted successfully.');
        else
            console.log(err);
    });
}



module.exports = medicionCtrl;