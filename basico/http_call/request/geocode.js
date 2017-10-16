const fs = require('fs');
const request = require('request');
const argv = require('yargs').argv;

let direccion = argv.direccion;
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${direccion}`;

request({
    url: url,
    json: true,
},(error, response, body)=>{
    if(error){
        console.log("Servicio no disponible");
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('No hay datos a mostrar');
    }else if(body.status === 'OK'){
        //console.log(JSON.stringify(body, undefined, 1));
        console.log(JSON.stringify(`Lugar: ${body.results[0].formatted_address}`));
        console.log(JSON.stringify(`Latitud: ${body.results[0].geometry.location.lat}`));
        console.log(JSON.stringify(`Longitud: ${body.results[0].geometry.location.lng}`));
    }

});

//request test
/*var response = request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    
    /*fs.appendFileSync('index.html', body, (error)=>{
        if(error) console.log(`Error ${error}`);
    });
});*/


