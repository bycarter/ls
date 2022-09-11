let statement = "The Flintstones Rock";

function frq(str) {
  let objOut = {};
  str.split('').forEach( item => {
    objOut.hasOwnProperty(item) ? objOut[item] += 1 : objOut[item] = 1;
  });

  return console.log(objOut);
}

frq(statement);
