var mysql = require('mysql');

var connection=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1204',
    database: 'Ambiental',  
    multipleStatements: true 
})
    
connection.getConnection(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Base de datos conectada');
    }
  });  
  
 module.exports = connection; 
    