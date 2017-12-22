var fs = require('fs');

console.log('Executed Before File Reading');

fs.readFile('./files/piles', 'utf8', function(error, data)
{
  console.log(data);
});

console.log('Executed After File Reading, probably.');
