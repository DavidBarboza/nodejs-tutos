const fetch =  require('node-fetch');

let  promesa = fetch('https://api.github.com/users/davidbarboza');
promesa.then((res)=>{
    //console.log(res);
    return res.json();
}).then((json)=>{
    console.log(json);
});