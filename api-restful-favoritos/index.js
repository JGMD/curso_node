'use strict'


var app = require('./app');
var port = process.env.PORT || 3678;


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database: 'opta'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  app.listen(port, function(){
		console.log("LA API REST FAVORITOS funcionando en: http://local.host:" + port);

		connection.query('SELECT * FROM sports', function(err, results) {
        if (err) throw err
        console.log(results);
      })
	});
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err, res) => {
	if(err){
		throw err;
	}else{
		console.log('Conexión a mongo correcta');

		app.listen(port, function(){
		console.log("LA API REST FAVORITOS funcionando en: http://local.host:" + port);
		});
	}
});


//connection.end();
