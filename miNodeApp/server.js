var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>Falta Endpoint.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/random") {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
	numero=Math.floor(Math.random() * 1000);
        res.write('{"random": ' + numero + ' }');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(8080); //6 - listen for any incoming requests

console.log('Node.js web server at port 8080 is running..');
console.log('  invoke http://localhost:8080/random para obtener un numero random');
