const RL = require('readline-sync');
const mToFt = 10.7639;

let l = RL.question('Enter the length of the room in meters: ');
let w = RL.question('Enter the width of the room in meters: ');
let mArea = l * w;
let fArea = mArea * mToFt;

console.log(`The area of the room is ${mArea.toFixed(2)} square meters (${fArea.toFixed(2)} square feet).`);
