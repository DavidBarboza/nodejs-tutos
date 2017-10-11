const os = require('os');
const fs = require('fs');

const bj = require('./benji.js');// importar archivos propios, funciona sin la extension

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

setTimeout(()=>{
    console.log('i finished');
}, 2000);

/*bj.saludar();
console.log(`${bj.name} ${bj.lastname}`);
console.log(bj.sumar3(50));*/

//ejemplo para generar un archivo
/*let cpu_string = JSON.stringify(cpu);
fs.appendFile('cpu.txt', `Info about cpu: ${cpu_string}` , function(error){ //using string template ${}
    if(error){
        console.log('error al crear el archivo');
    }
});*/