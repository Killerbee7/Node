const http = require("http");

const port = 3000;
const host = "localhost"

const server = http.createServer((request, responce)=>{
    // responce.writeHead(200,{
    //     "Content-Type":"text/plain; charset=utf-8"
    // });
    responce.writeHead(200,{
        "Content-Type":"text/html; charset=utf-8"
    });
    // responce.write("<h1>hello</h1>");
    // responce.end();
    responce.end("<h1>hello</h1>")
})

server.listen(port, host, 
    () => console.log(`Server ${host}:${port} is running`))