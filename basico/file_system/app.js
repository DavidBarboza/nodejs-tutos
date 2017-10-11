const fs = require('fs');

console.log('iniciado');

//asincrono
/*fs.readFile('data.txt', 'utf-8', (error, data)=>{
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data);
    }
});*/

//sincrono
let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

console.log('finalizado');

/*fs.rename('data.txt', 'data_renamed', (error)=>{
    if(error) throw error;
    console.log('Renamed!');
});*/

/*fs.appendFile('data.txt', 'perrón', (error)=>{
    if(error) console.log(`Error ${error}`);
});

fs.unlink('data2.txt', (error)=>{
    if(error) throw error;
    console.log('eliminado');
});*/

