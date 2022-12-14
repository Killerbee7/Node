'use strict';

const http = require('http');

const storage=require('./carStorage');

// console.log(storage.getAllCars()); //just for testing

const port=3000;
const host='localhost';

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end(createHtmlPage(storage.getAllCars()));
    // res.end(createHtmlPage(storage.getCar("model", "Fast GT")));
});

server.listen(port,host, 
    ()=>console.log(`Server ${host}:${port} is running...`));

function createHtmlPage(cars){
    let htmlSting=`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Car data</title>
            <style>
                h1{
                    color:green;
                }
            </style>
        </head>
        <body>
            <h1>Cars</h1>`;
    for(const car of cars){
        htmlSting+=`
            <h2>${car.model}: ${car.licence}</h2>`
    }
    htmlSting+=`    </body>
    </html>`

    return htmlSting;
}