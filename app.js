var http = require('http');

http.createServer(function (req, res) {
  res.write('HHHHello World Master Branchh With Aliass!'); 
  res.end(); 
}).listen(process.argv[3],process.argv[2]);
