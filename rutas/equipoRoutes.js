const express = require('express');
const router = express.Router();

const equipo = require('../controladores/EquipoController');

router.get('/equipo/:id',equipo.getEquipos);
router.get('/equipos/:id', equipo.getEquipo);
router.post('/equipo', equipo.CreateEquipo);
router.put('/equipo/:id', equipo.UpdateEquipo);
router.delete('/equipo/:id',equipo.deleteEquipo);


module.exports = router;