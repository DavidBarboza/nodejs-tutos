const _ = require('lodash');
const argv = require('yargs').argv;

//leer argumentos
if(argv.usuario === 'benjigoenitz'){
    console.log('Es el benji')
}else{
    console.log('no valido alv');
}
//let comando = process.argv;
//console.log(comando);

/*let x = {"nombre" : "David"}
let y = { "apodo" : "Benji"}
let z = [
    {nombre: "David", apellido: "Barboza", edad: 29},
    {nombre: "Benji", apellido: "Goenitz", edad: 29}
]*/

//crea un nuevo json a partir de los enviados por parametro
//let resultado = _.assign(x,y);
//console.log(resultado);

//_.times(3, () => console.log('Holiwi'));

//let resultado = _.find(z, {nombre:"David", apellido: "Barboza"});
//console.log(resultado);