function stringToInteger(str) {
  let numMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numOut = 0;

  for (let [i, l] = [0, str.length - 1]; i < str.length; i++, l--) {
    numOut += numMap.indexOf(str[i]) * (10**l);
  }
  return numOut;
}

  

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
