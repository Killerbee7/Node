'use strict';

const path=require('path');

const express=require('express');
const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'pageTemplates'));

const {port,host}=require('./config.json');

const homePath = path.join(__dirname,'home.html');

app.get('/', (req,res)=>res.sendFile(homePath));

app.post('/login',express.urlencoded({extended:false}),(req,res)=>{
    //console.log(req.body);

    // format of req.body. Uses name attributes from form as fieldnames
    // req.body={
    //     username:'',
    //     password:''
    // }


    // res.render('result',{
    //     title:"Your data",
    //     header1:'You send these',
    //     data:req.body
    // });

    res.render('result', {
        title: "Your data",
        header1: 'You send these',
        data: {
            username:req.body.username,
            password:req.body.password
        }
    });
});


app.listen(port,host, ()=>console.log(`Server ${host}:${port} listening`));