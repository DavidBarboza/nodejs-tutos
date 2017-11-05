var express = require('express');
var router = express.Router();

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

router.get('/', (req, res) => {
  res.render('index', {titulo: 'HANDLEBARS', mensaje:'Benji Goenitz', personas:personas});
});

module.exports = router;
