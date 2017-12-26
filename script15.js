var express = require('express');
var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/files'));

app.get('/hellothere', function(request, response){
  response.send('hello there from the sexpress')
});

app.listen(1337, function()
{
  console.log('listening at port 1337');
});
