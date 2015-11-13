/* global require, console, __dirname */

var fs = require('fs');
var path = require('path');
var http = require('http');
var https = require('https');
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/clientSide'));

app.get('/', function (req, res) {
   res.sendFile('index.html');
});

var options = {
   key  : fs.readFileSync('httpskeys/server.key'),
   cert : fs.readFileSync('httpskeys/server.crt')
};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(80);
httpsServer.listen(443);