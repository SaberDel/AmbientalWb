const express = require('express');
const router = express.Router();

const resultados = require('../controladores/ResultadoController');

router.get('/resultados/:id',resultados.getResultados);
router.get('/resultado/:id', resultados.getResultado);
router.post('/resultados', resultados.AddResultado);
router.put('/resultados/:id', resultados.UpdateResultado);
router.delete('/resultados/:id',resultados.DeleteResultado);


module.exports = router;