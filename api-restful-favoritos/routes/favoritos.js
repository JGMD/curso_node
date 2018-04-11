'use strict'

var express = require('express');
var FavoritosController = require('../controllers/favoritos');
var api = express.Router();

api.get('/prueba/:nombre?', FavoritosController.prueba);
api.get('/favorito/:id', FavoritosController.getFavorito);
api.get('/favoritos', FavoritosController.getFavoritos);
api.post('/favorito', FavoritosController.saveFavorito);
api.put('/favorito/:id', FavoritosController.updateFavorito);
api.delete('/favorito/:id', FavoritosController.deleteFavorito);

//api.post('/favorito', FavoritosController.saveFavorito);
//PRUEBA MYSQL
//api.get('/sports', FavoritosController.getSports);


module.exports = api;