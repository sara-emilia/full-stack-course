var http = require("http");
http
  .createServer(function (request, response) {
    //Send the HTTP header. HTTP Status: 200 = OK
    //Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Kukkuu</h1>");
    //Send the response body as "Hello World"
    response.end("Hello world!\n");
  })
  .listen(8081);

//Console will print the message
console.log("Server running at http://127.0.0.1:8081");
