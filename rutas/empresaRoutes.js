const express = require('express');
const router = express.Router();

const empresa = require('../controladores/EmpresaController');

router.get('/empresa',empresa.getEmpresas );
router.get('/empresa/:id', empresa.getEmpresa);
router.post('/empresa', empresa.CreateEmpresa);
router.put('/empresa/:id',empresa.UpdateEmpresa);
router.delete('/empresa/:id',empresa.deleteEmpresa);
router.get('/busqueda/empresa/:id',empresa.searchEmpresa);


module.exports = router;