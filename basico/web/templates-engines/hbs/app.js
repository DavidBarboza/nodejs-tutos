const express = require('express');
const app = express();

let personas = [
    {
        id:1,
        nombre: "David"
    },
    {
        id:2,
        nombre: "Lili"
    },
    {
        id:3,
        nombre: "Benji"
    },
]

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('template', {titulo: 'HANDLEBARS', mensaje:'Benji Goenitz', personas:personas});
});

app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000');
})