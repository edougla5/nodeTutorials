var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/files'));

app.get('/', function(req, resp){
  resp.sendFile('index.html', {root:path.join(__dirname, './files')});
});

app.get(/^(.+)$/, function(req, resp){
//  console.log(path.join(__dirname, './files/', req.params[0], '.html'));
  try{

  if(fs.statSync(path.join(__dirname, './files/', req.params[0]+ '.html')).isFile()){
  resp.sendFile(req.params[0]+'.html', {root: path.join(__dirname, './files')});
}

} catch(err){
  console.log(err);
  resp.sendFile('404.html', {root: path.join(__dirname, './files')});
}
});

app.listen(1337, function()
{
  console.log('listening at port 1337');
});
