// input: num
// output: num
// algo:
//  if num is less than zero, return num
//  else, return num * -1

function negative(num) {
  console.log(num < 0 ? num : num * (-1));
}

//  tests:
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
