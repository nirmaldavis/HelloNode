console.log("Hello , Welcome to world of Node...!!");

var http = require("http");

var httpServer = http.createServer(function(request,response){
    
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    
    response.end('Hello World\n');
});

httpServer.listen(8082);

console.log("Server running at http://127.0.0.1:8082");