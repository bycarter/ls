let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// test case 1
const rOdd = (arr) => {
  let nArr = [];
  let r = arr.reduce((accumulator, element) => {
    if (element.length % 2 !== 0) {
      nArr.push(element.length);
    }
  }, '');

  return nArr;
}
console.log(rOdd(arr)); // => [1, 5, 3]

