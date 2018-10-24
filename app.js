var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World Master Branch!'); 
  res.end(); 
}).listen(process.argv[3],process.argv[2]);
