const http = require('http');

http.createServer( ( req, res ) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let data = {
        nombre: 'ARCYNTRAR',
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify(data));

    res.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');