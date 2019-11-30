const express = require('express');
const router = express.Router();

const medicion = require('../controladores/MedicionController');

router.get('/medicion/:id',medicion.getMediciones);
router.get('/mediciones/:id', medicion.getMedicion);
router.post('/medicion', medicion.CreateMedicion);
router.put('/medicion/:id',medicion.UpdateMedicion);
router.delete('/medicion/:id',medicion.deleteMedicion);


module.exports = router;