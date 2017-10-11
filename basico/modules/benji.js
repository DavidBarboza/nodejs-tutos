//archivo con ejemplos de exports
/*function saludar(){
    console.log('Holiwi');
}

module.exports.saludar = saludar();

module.exports.saludar2 = function(){
    console.log('Holiwi2');
}
//console.log("hola benji");*/


let name = "Benji";
let lastname = "Goenitz";

module.exports = {
    name : name,
    lastname : lastname,
    saludar : () => {
        console.log('Holiwi 3');
    },
    sumar: (x, y) => {
        return x + y;
    },
    sumar2: (x, y) => x + y,
    sumar3: x => x + 10 //un unico parametro funciona sin parentesis
}
//module.exports.name = name;
//module.exports.name = "Benjito";