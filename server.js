var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/client/index.html');
});


console.log('Listening...on 8080');
app.listen(8080);




