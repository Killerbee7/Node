'use strict';

const express = require('express');
const app=express();

const port = 3000;
const host = 'localhost';

app.get('/', (req,res)=>res.send('<h1>Hello world!</h1>'));

app.listen(port,host, ()=>console.log(`Server ${host}:${port} running`));

