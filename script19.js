var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/files'));

app.get('/', function(req, resp){
  resp.sendFile('index.html', {root:path.join(__dirname, './files')});
});

app.post('/', function(req, resp){
  resp.sendFile('index.html', {root: path.join(__dirname, './files')});
});

app.listen(1337, function()
{
  console.log('listening at port 1337');
});
