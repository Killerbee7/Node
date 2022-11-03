"use strict";

const http = require("http");
const { port, host } = require("./config.json");

const server = http.createServer((req, res) =>{
    const {searchParams} = new URL(`http://${request.headers.host}${request.url}`)
    if (searchParams.has("name")){
        const name = searchParams.get("name")
        res.writeHead(200,{
            "Content-type":"text/html; charset=utf-8" 
        })
        res.end(`<h1>Hi ${name}</h1>`)
    } else {
        res.writeHead(200,{
            "Content-type":"text/html; charset=utf-8" 
        })
        res.end(`<h1>Hi stranger</h1>`)
    }
})
server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running`)
);