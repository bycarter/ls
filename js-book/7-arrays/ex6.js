let oddLen = (arr) => {
  let nArr = arr.map(num => num.length);
  let oLen = nArr.filter(num => num % 2 !== 0);

  return oLen;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLen(arr)); // => [1, 5, 3]
