const NUM = 4936;
let thousands = Math.floor(NUM/1000);
let hundreds = Math.floor((NUM - thousands * 1000) / 100);
let tens = Math.floor((NUM - thousands * 1000 - hundreds * 100) / 10);
let ones = Math.floor((NUM - thousands * 1000 - hundreds * 100 - tens * 10));

console.log(`The individual ditis of ${NUM}:
thousands place is: ${thousands}
hundreds place is: ${hundreds}
tens place is: ${tens}
ones place is ${ones}`)
