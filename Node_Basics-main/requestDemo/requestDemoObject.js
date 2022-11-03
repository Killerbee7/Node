"use strict";

const http = require("http");
const { port, host } = require("./config.json");

const server = http.createServer((request, responce) => {
  const { pathname, search, searchParams } = new URL(
    `http://${request.headers.host}${request.url}`
  );
  responce.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  responce.write(`<!DOCTYPE html>
   <html>
      <head>
      <meta charset="utf-8">
         <title>Request object</title>
     </head>
     <body>
     <h1>Request info</h1>
     <h2>Headers</h2>
     <pre>${JSON.stringify(request.headers, null, 4)}</pre>
     <h2>Host: ${request.headers.host}</h2>
     <h2>Agent: ${request.headers["user-agent"]}</h2>
     <h2>Method: ${request.method}</h2>
     <h2>Pathname: ${pathname}</h2>
     <h2>searchParams: ${searchParams}</h2>
     <h2>Search: ${search}</h2>
     </body>
     </html>`);
  responce.end();
});
server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is running`)
);
