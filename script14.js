var express = require('express');
var app = express();

app.get('/hellothere', function(request, response){
  response.send('hello there from the express')
});

app.listen(1337, function()
{
  console.log('listening at port 1337');
});
