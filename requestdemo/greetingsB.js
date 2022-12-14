'use strict';

const http = require('http');

const {port,host} = require('./config.json');

const server= http.createServer((req,res)=>{
    const {searchParams} = 
        new URL(`http://${req.headers.host}${req.url}`);

    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    if(searchParams.has('name')){
        const name=searchParams.get('name');
        res.end(`<h1>Hi ${name}!</h1>`);
    }
    else{
        res.end('<h1>Hi stranger!</h1>');
    }
});

server.listen(port,host,
    ()=>console.log(`Server ${host}:${port} is serving...`));