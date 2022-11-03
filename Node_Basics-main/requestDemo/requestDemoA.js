const http = require("http")

const {port, host} = require("./config.json")

const server = http.createServer((request, responce)=>{
    const urlData = new URL(`http://${host}:${port}${request.url}`)
    const {pathname} = urlData;
    console.log(pathname)
    responce.writeHead(200, {"Content-Type":"application/json"})
    responce.end(JSON.stringify(urlData))
})

server.listen(port, host, () => console.log(`Server ${host}:${port} is running`))