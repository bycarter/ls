function stringToSignedInteger(str) {
  let numMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numOut = 0;
  let sign = str[0] === '-' ? false : true;
  
  for (let [i, l] = [0, str.length - 1]; i < str.length; i++, l--) {
    if (str[i] === '-' || str[i] === '+') {
      continue;
    }
    numOut += numMap.indexOf(str[i]) * (10**l);
  }
  return sign ? numOut : numOut * -1;
}

  
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
