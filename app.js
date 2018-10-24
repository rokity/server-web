var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World Dev Branch!'); //write a response to the client
  res.end(); //end the response
}).listen(process.argv[3],process.argv[2]);
