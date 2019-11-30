const express = require('express');
const router = express.Router();
const inicioSesion =require('../index');

const user = require('../controladores/UserController.js');

router.get('/users/', user.getUsers);
router.get('/users/:id', user.getUser);
router.post('/users', user.CreateUser);
router.put('/users/:id',user.UpdateUser);
router.delete('/users/:id',user.deleteUser);
router.get('/busqueda/users/:id',user.searchUser);
router.get('/loginDato',user.loginDato);


module.exports = router;