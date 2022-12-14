'use strict';

const persons = require('./persons.json');

function search(key,value){
    if(key && value){
        const found=[];
        for(const person of persons){
            if(person[key] == value){
                found.push(person);
            }
        }
        return found;
    }
    else{
        return persons;
    }
    
}

module.exports={search}