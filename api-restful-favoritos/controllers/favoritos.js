'use strict'

var Favorito = require('./../models/favorito')

function prueba(req, res){

if(req.params.nombre)
		var nombre = req.params.nombre;
else
	var nombre = "SIN NOMBRE";

res.status(200).send({
	data:[2,3,4],
	message: "Hola Mundo con NodeJS y Express"});
}

function getFavorito(req, res){
	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, (err, favorito) =>{
		if(err)
			res.status(500).send({message: "GetFavorito: Error al buscar en favoritos"});
		else{
			if (!favorito)
				res.status(404).send({message: "GetFavorito: No hay favoritos con id:"+ favoritoId});

			res.status(200).send({favorito});
		}
	});
}

function getFavoritos(req, res){
	Favorito.find({}).sort('-_id').exec((err, favoritos) =>{
		if(err)
			res.status(500).send({message: "GetFavoritos: Error al buscar favoritos"});
		else{
			if (!favoritos)
				res.status(404).send({message: "GetFavoritos: No hay favoritos que mostrar"});

			res.status(200).send({favoritos});
			}
		});
}

function saveFavorito(req, res){
	
	var params = req.body;

	var favorito = new Favorito();
	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored) => {
		if(err)
			res.status(500).send({message:'SaveFavorito: Error al guardar en el servidor'});
		res.status(200).send({favorito: favoritoStored});	
	});
}

function updateFavorito(req, res){
	var favoritoId = req.params.id;

	var update = req.body;
	Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) =>{
		if(err)
			res.status(500).send({message: "UpdateFavorito: Error al buscar en favoritos"});
		else{
			 if (!favoritoUpdated)
				res.status(404).send({message: "UpdateFavorito: No hay favoritos con id:"+ favoritoId});

			res.status(200).send({favoritoUpdated});
		}
	});
}

function deleteFavorito(req, res){
	var favoritoId = req.params.id;

	Favorito.findById(favoritoId, (err, favorito) =>{
		if(err)
			res.status(500).send({message: "DeleteFavorito: Error al buscar en favoritos"});
		else {
			if (!favorito)
			res.status(404).send({message: "DeleteFavorito:  No hay favoritos con id:"+ favoritoId});

			favorito.remove( (err) =>{
			if(err)
				res.status(500).send({message: "DeleteFavorito: Error al borrar el favorito:" + favoritoId});
			res.status(200).send({message: "DeleteFavorito: Se borro el favorito:" + favoritoId});
			});
		}
	});
}

module.exports = {
	prueba, getFavorito, getFavoritos, saveFavorito, updateFavorito, deleteFavorito
}