'use strict';

const { 
    getAllFlavors, 
    hasFlavor, 
    getIceCream } = require('./iceCreamStorage/iceCreamFreezer');

// getAllFlavors().then(console.log).catch(console.log);

// hasFlavor('vanilla').then(console.log).catch(console.log);
// hasFlavor('x').then(console.log).catch(console.log);

// getIceCream('vanilla').then(console.log).catch(console.log);
// getIceCream('x').then(console.log).catch(console.log);

async function test(){
    try{
        const result = await getIceCream('vanilla');
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

test();