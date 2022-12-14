'use strict';

const http = require('http');

const {port,host}=require('./config.json');

const server = http.createServer((req,res)=>{
    const{pathname,searchParams} = new URL(`http://${req.headers.host}${req.url}`);

    let message='unregonised'; //default
    const name= searchParams.has('name')?searchParams.get('name'):'';

    if(pathname==='/greetings'){
        message=`Greetings ${name}!`
    }
    else if(pathname==='/hi'){
        message = `Hi ${name}!`
    }
   
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end(`<h1>${message}</h1>`);

});

server.listen(port,host, ()=>console.log(`Server ${host}:${port} running...`));