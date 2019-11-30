const express = require('express');
const router = express.Router();

const reporte = require('../controladores/ReporteController');

router.get('/capturista', reporte.getResultados);
router.get('/capturista/:id',reporte.getResultado);
router.get('/capturistas/:id',reporte.getRes);
router.delete('/capturista/:id',reporte.ElimResultado);
router.post('/capturista',reporte.AddResultado);
router.put('/capturista/:id',reporte.UpdateRes);


module.exports = router;