let mensaje = "debugging man";

function saludar(){
    debugger;
    console.log(mensaje);
}

module.exports = {
    saludar: saludar
}