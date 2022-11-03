const http = require("http");
const cars = require("./cars.json")
const port = 3000;
const host = "localhost"

const server = http.createServer((request, responce)=>{
    responce.writeHead(200,{
        "Content-Type":"application/json;"
    });

    responce.end(JSON.stringify(cars))
})

server.listen(port, host, 
    () => console.log(`Server ${host}:${port} is running`))