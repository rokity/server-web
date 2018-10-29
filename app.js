var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World Master Branch From GitLab Server!'); 
  res.end(); 
}).listen(process.argv[3],process.argv[2]);
