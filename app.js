var http = require('http');

http.createServer(function (req, res) {
  res.write('Test Deploy Hello World Master Branch!'); 
  res.end(); 
}).listen(process.argv[3],process.argv[2]);
