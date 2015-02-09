var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var port = 9999;

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.listen(port);
console.log('listening on port ' + port)