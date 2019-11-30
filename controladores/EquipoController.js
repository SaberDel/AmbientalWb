const equipoCtrl = {};
var connection =require('../database')

equipoCtrl.getEquipos = async(req, res) => {
    connection.query('SELECT * FROM tbEquipo WHERE tbMedicion_IdMEd = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
}

equipoCtrl.getEquipo= (req, res) => 
{
    connection.query('SELECT * FROM tbEquipo WHERE IdEquipo = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    });
}

equipoCtrl.CreateEquipo = function(req,res){
    var postData=req.body;
    connection.query('INSERT INTO tbEquipo SET?', postData, function(error,results,fields){
        if (error) throw error;
        res.end(JSON.stringify(results));  
    });     
} 

equipoCtrl.UpdateEquipo= (req, res) => {
    const { id } = req.params;
    const oldUser = req.body;
    connection.query('UPDATE tbEquipo set ? WHERE IdEquipo = ?', [req.body, id]); 
    res.json({ message: "Equipo actualizado" });
}

equipoCtrl.deleteEquipo= (req, res) => {
    connection.query('DELETE FROM tbEquipo WHERE IdEquipo = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json('Deleted successfully.');
        else
            console.log(err);
    });
}

module.exports = equipoCtrl;