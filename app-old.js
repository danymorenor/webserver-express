const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'Dany',
            edad: 44,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //Esto mandaria una pagina web
        //res.write('Hola mundo');
        res.end();


    })
    .listen(8080);

console.log('Escuchando el puerto 8080');