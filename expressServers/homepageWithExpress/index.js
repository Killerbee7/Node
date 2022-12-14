'use strict';

const path = require('path');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const homePath = path.join(__dirname,'home.html');
const pageBpath=path.join(__dirname,'pageB.html');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>res.sendFile(homePath));
app.get('/pageb', (req,res)=>res.sendFile(pageBpath));

app.listen(port,host, ()=>console.log(`Server ${host}:${port} listening`));


