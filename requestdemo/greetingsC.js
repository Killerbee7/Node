'use strict';

const http = require('http');

const {port,host} = require('./config.json');

const server= http.createServer((req,res)=>{
    const {searchParams} = 
        new URL(`http://${req.headers.host}${req.url}`);


    const message = 
        searchParams.has('name') ? searchParams.get('name') : 'stranger';

    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    res.end(`<h1>Hi ${message}!</h1>`)
});

server.listen(port,host,
    ()=>console.log(`Server ${host}:${port} is serving...`));