var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, resp){
  resp.cookie('myFirstCookie', 'looks good');
  resp.end('wow');
});

app.get('/removeCookie', function(req, resp){
  resp.clearCookie('myFirstCookie');
  resp.end('wow');
})

app.listen(1337, function(){
  console.log('Yea?');
})
