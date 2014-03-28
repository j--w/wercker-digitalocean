'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello duudde!');
});

app.get('/stuff.json', function(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(JSON.stringify({stuff: ['a', 'b', 'c']}));
	res.end();
});

app.listen(8000);

module.exports = app;