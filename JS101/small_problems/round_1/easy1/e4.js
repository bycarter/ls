const FT_M = 10.7639;
let rlSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
let lM = rlSync.prompt();
console.log('Enter the width of the room in meters:');
let wM = rlSync.prompt();

let areaM = (wM * lM).toFixed(2);
let areaF = (areaM * FT_M).toFixed(2);

console.log(`The area of the room is ${areaM} square meters (${areaF} square feet).`);
