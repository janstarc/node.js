//V primeru localhosta nastavitev porta na 8080
if (process.env.PORT){
    process.env.PORT = 8080;
}

var http = require('http');
var steviloUporabnikov = 0;
http.createServer(function(zahteva, odgovor){
    steviloUporabnikov++;
    odgovor.writeHead(200, {'Content-Type': 'text-plain'});
    odgovor.end('Pozdravljeni, '+steviloUporabnikov+'. uporabnik!\n');
}).listen(process.env.PORT);

console.log("Streznik je pognan");