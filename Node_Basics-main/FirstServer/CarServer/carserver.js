"use strict";

const http = require("http");
const { port, host } = require("./config.json");
const storage = require("./carStorage");

const server = http.createServer((req,res)=>{
    const {pathname, searchParams} = new URL(`http://${req.headers.host}${req.url}}`)
    if (pathname === "/cars"){
        result=createCarsHtml(storage.getAllCars())
    } else{
        res.end();
    }
    res.writeHead(200,{
        "Content-type":"text/html; charset=utf-8" 
    })
    res.end(resultHtml)
})
server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running`)
);