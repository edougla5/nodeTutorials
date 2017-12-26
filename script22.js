var express = require('express');

var app = express();

app.get('/', function(req, resp){
  resp.end('wow its a party its a partaay');
});

app.listen(1337, function(){
  console.log('Yea?');
})
