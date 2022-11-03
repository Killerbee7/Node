"use strict";

const http = require("http");
const { port, host } = require("./config.json");

const server = http.createServer((req, res) =>{
    const {pathname,searchParams} = new URL(`http://${req.headers.host}${req.url}`)
    let message ="unrecognized"
    const name = searchParams.has("name")?searchParams.get("name"):"";
    if (searchParams.has("name")){
        
        res.writeHead(200,{
            "Content-type":"text/html; charset=utf-8" 
        })
        res.end(`<h1>Hi ${name}</h1>`)
    } else {
        
       
    }
    res.writeHead(200,{
        "Content-type":"text/html; charset=utf-8" 
    })
    res.end(`<h1>${message}</h1>`)
})
server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running`)
);