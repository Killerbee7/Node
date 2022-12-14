'use strict';

const cars = require('./cars.json');

function getAllCars(){
    return cars;
}

function getAllModels(){
    const models = [];
    for (const car of cars) {
        if (!models.includes(car.model)) {
            models.push(car.model);
        }
    }
    return models;
}

function getCar(key,value){
    const found = [];
    if(key && value){
        for(const car of cars){
            if(car[key]===value){
                found.push(car);
            }
        }
    }
    return found;
}

module.exports = { getAllCars, getAllModels, getCar}
