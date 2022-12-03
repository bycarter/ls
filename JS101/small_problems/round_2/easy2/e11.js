let numMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(numIn) {
  if (numIn === 0) {
    return console.log('0');
  }

  let strOut = [];
  let cpNum = numIn;

  while (cpNum > 0) {
    strOut.unshift(numMap[cpNum % 10]);
    cpNum = Math.floor(cpNum / 10);
  }
  console.log(strOut.join(''));
}
  


integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
