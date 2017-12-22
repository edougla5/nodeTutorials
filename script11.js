var fs = require('fs');

console.log('Executed Before File Reading');

var data = fs.writeFile('./files/file2','hello there! whats up','utf8', function(error){
  if(error) throw error
});

console.log('file written');

console.log(data);

console.log('Executed After File Reading, probably.');
