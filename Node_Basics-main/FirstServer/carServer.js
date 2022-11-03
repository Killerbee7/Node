"use strict";

const http = require("http");

const storage = require("./carStorage");

const port = 3000;
const host = "localhost";

const server = http.createServer((request, responce) => {
  responce.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  responce.end(createHtmlPage(storage.getAllCars()));
});

server.listen(port, host, 
    () => console.log(`Server ${host}:${port} is running`))

const createHtmlPage = (cars) => {
  let htmlString = `<!DOCTYPE html>
  <html>
     <head>
     <meta charset="utf-8">
        <title>Car data</title>
            <style>
                 h1{ color:green}
            </style>
    </head>
    <body>
    <h1>Cars</h1>`;
    for(const car of cars){
        htmlString+=`<h2>${car.model}:${car.licence}</h2>`
    }
    htmlString+=`</body>
    </html>`
  return htmlString;
};
