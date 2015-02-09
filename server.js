var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var port = 9999;

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/interest_rate', function(req, res) {
	var randomNum = Math.floor(Math.random() * 2000) / 100;
	res.json(randomNum);
});

app.listen(port);
console.log('listening on port ' + port)