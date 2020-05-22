const express = require('express')
const app = express()
const hbs = require('hbs');

//importando archivo helpers
require('./hbs/heplers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'dany moreno'
    });
});


app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/', (req, res) => {
//     //res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Dany',
//         edad: 44,
//         url: req.url
//     };
//     res.send(salida);
// });


// app.get('/data', (req, res) => {
//     res.send('La peticion llego aqui');
// });

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});