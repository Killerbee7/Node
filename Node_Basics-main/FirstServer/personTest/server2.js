const http = require("http");
const person = require("./person.json")

const port = 3001;
const host = "localhost"

const server = http.createServer((request, responce)=>{

    responce.writeHead(200,{
        "Content-Type":"application/json"
    });
    
    responce.end(JSON.stringify(person))
})

server.listen(port, host, 
    () => console.log(`Server ${host}:${port} is running`))