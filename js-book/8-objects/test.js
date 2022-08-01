let rlSync = require('readline-sync');
let arr = [];
let size = 10;

// -----------------------FUNCTIONS---------------------
const menu = () => {
  console.log('***MENU***');
  console.log('1. Print Array');
  console.log('2. Fill Array');
  console.log('3. EXIT');
  let choice = rlSync.question('Pick an option: ');
  return choice;
}
const printArr = (arr) => {
  console.log(arr);
}
const fillArr = (arr) => {
  while (arr.length < 10) {
    arr[arr.length] = rlSync.question(`Enter number ${arr.length +1}: `);
  }
}
// -------------------------MAIN-----------------------
const main = () => {
  console.log('Welcome to the array builder...');
  let choice = menu(); 
  while (choice !== 3) {
    if (choice === 1) {
      printArr(arr);  // => not calling correctly
    } else if (choice === 2) {
      fillArr(arr);
    }
  }
}
main();
