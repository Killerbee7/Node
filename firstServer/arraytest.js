'uses strict';

const testArray=[1,2,3,4,5];

console.log(testArray, testArray.length);

testArray[10]=12;

console.log(testArray, testArray.length);

testArray.length=3;

console.log(testArray, testArray.length);

testArray.unshift(8);

console.log(testArray, testArray.length);

console.log(testArray.shift());

console.log(testArray, testArray.length);

testArray.push(100);

console.log(testArray, testArray.length);

console.log(testArray.pop());
console.log(testArray, testArray.length);

console.log(testArray.splice(1,1,10,20,30));
console.log(testArray, testArray.length);

console.log(testArray.splice(2,2));
console.log(testArray, testArray.length);
