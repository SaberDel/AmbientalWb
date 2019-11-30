const express = require('express');
const router = express.Router();

const trabajo = require('../controladores/TrabajoController');

router.get('/trabajos/:id',trabajo.getTrabajos );
router.get('/trabajo/:id', trabajo.getTrabajo);
router.post('/trabajo', trabajo.CreateTrabajo);
router.put('/trabajo/:id',trabajo.UpdateTrabajo);
router.delete('/trabajo/:id',trabajo.deleteTrabajo);
router.get('/trabajos/:id',trabajo.getWork);
router.get('/busqueda/trabajo/:id',trabajo.searchTrabajo);


module.exports = router;