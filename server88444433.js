var http = require('http');
http.createServer(function (req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Redirecting you to casper.estesschools.org \n');
}) .listen(8443, "127.0.0.1");
console.log('Server running at http://172.31.20.140:8443/');
