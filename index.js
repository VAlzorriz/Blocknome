var http = require('http');
var app = require('connect')();

var serverPort = '8080'
//var serverPort = process.env.PORT;

let serveStatic = require('serve-static');

app.use(serveStatic(__dirname + '/statics'));

http.createServer(app).listen(serverPort, function () {
  console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
});