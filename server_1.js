var http = require("http");
var server = http.createServer(function(request, response) {

    if (request.url === "/"){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello from homepage!');
    }
    if (request.url === "/guestbook"){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('Hello from guestbook!');
    }
    else if (request.url === "/newmessage"){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('Hello from new message page!');
    }
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server is running at http://localhost:%d', port);