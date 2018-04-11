'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favoritos');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((use,res, next)=>{
	res.header('Acces-Control-Allow-Origin', '*');
	res.header('Acces-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Acces-Control-Allow-Request-Method');
	res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	next();

});

app.use('/api', api);


module.exports = app;