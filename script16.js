var express = require('express');
var path = require('path')
var app = express();

app.get('/', function(req, resp){
  resp.sendFile('index.html', {root:path.join(__dirname, './files')});
})

app.get(/^(.+)$/, function(req, resp){
  console.log(req.params);
  resp.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './files'))
}});
app.listen(1337, function()
{
  console.log('listening at port 1337');
});
