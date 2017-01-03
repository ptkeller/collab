var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var server = app.listen(port);
var http = require('http');
var request = require('request');
var io = require('socket.io').listen(server);
var edge = require('edge');

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html')
});

server.listen(port, '0.0.0.0', function(){
  console.log('listening on *:8080');
});
