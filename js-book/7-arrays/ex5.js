let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

const findIntegers = (arr) => {
  let nArr = arr.filter(num => Number.isInteger(num) === true)
  
  return nArr;
}

i = findIntegers(things);
console.log(i);
