let calcular = (num1, num2)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            let suma = num1 + num2;
            if (suma > 10){
                res(suma);
            }else{
                rej('error, te pasaste de 10');
            }
        }, 2000);
    });
}

module.exports = {
    calcular
}