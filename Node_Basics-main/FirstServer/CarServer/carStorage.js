'use strict';

const cars = require("../cars.json")

const getAllCars = () =>{
    return cars;
}

const getAllModels = () => {
    const models = [];
    for (const car of cars){
        if (!cars.includes(car.model)){
            models.push(car.model)
        }
        return models
    }
}

const getCar = (key, value) =>{
    const found = [];
    if (key && value){
        for (const car of cars){
            if (car[key] === value){
                found.push(car)
            }
        }

    }
    return found;
} 

module.exports = {getAllCars, getAllModels, getCar}