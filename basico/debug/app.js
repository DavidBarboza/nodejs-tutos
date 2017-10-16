const extra = require('./extra');

extra.saludar();

let curso = "node";
curso = "node.js";
curso = "node.js tutos";

console.log(curso);

x = () => {
    return 1 + 10;
}

debugger;
console.log(x());

//node inspect para correr debugger, repl para checar valores
//list lista las lineas hasta el numero especificado entre parentesis
//comando c va directamente a los breakpoint (debugger;)
//nodemon actualiza en tiempo real el debbuger
//para usar chrome dev tools node --inspect-brk app.js y abrir en chrome chrome://inspect