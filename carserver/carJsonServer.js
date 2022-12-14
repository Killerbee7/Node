'use strict';

const http = require('http');

const {port,host}=require('./config.json');

const { getAllCars, getAllModels, getCar } =require('./carStorage');

const server=http.createServer((req,res)=>{
    const {
        pathname,
        searchParams
    }=new URL(`http://${req.headers.host}${req.url}`);

    const route=decodeURIComponent(pathname);
    
    let result=[];

    if(route==='/cars'){
        result=getAllCars();
    }
    else if(route==='/cartypes'){
        result=getAllModels();
    }
    else if(route==='/search/bylicence'){
        result=getCar('licence',searchParams.get('value'));
    }
    else if(route==='/search/bymodel'){
        result=getCar('model',searchParams.get('value'));
    }
    else {
        result={message:'not found'}
    }

    res.writeHead(200, {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
    });

    res.end(JSON.stringify(result,null,2));
    
});

server.listen(port,host,()=>console.log(`${host}:${port} running...`));