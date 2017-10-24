const express = require('express');
const app = express();

//middleware se ejecuta antes del respond
let isLogged = () => true;

let logger = (req, res, next) =>{
    console.log('Peticion de tipo:', req.method);
    next();
}

let showIP = (req, res, next) =>{
    console.log('IP: 127.0.0.1');
    next();
}

//se ejecuta como interceptor entre las peticiones
app.use((req, res, next) =>{
    if(isLogged()){
        next();
    }else{
        res.send('Not logged in');
    }
}, logger, showIP);

//app.use(logger);

app.get('/:user', (req, res)=>{
    let user = req.params.user;
    res.send(`Hello ${user}!`)
});

app.post('/', (req, res)=>{
    res.send(`Hello World! ${req.method}`)
});

app.put('/', (req, res)=>{
    res.send(`Hello World! ${req.method}`)
});

app.delete('/', (req, res)=>{
    res.send(`Hello World! ${req.method}`)
});


app.listen(3000, ()=>{
    console.log('Example app listening on port 3000')
});