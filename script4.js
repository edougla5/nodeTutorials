var http = require('http');
var server =http.createServer(engine);

server.listen(1337, function(){
  console.log('server something something darkside');
});

function engine(request, response){

  //console.log(response);

  response.writeHead(200, {'content-type':'text-plain','yodole': 'from urmom.com'});

  response.end('hey ya its dat servr. req from page: ' + request.url);
}
