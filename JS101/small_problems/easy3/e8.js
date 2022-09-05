// input: user input number (3x)
// output: char
// data s: variable
// algo:
//  declare `average` and initialize to average of user input 3x numbers
//  compare `average` with conversion table
//    return appropriate letter grade


function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;

  if (average >= 90) {
    console.log('A');
  } else if (average >= 80) {
    console.log('B');
  } else if (average >= 70) {
    console.log('C');
  } else if (average >= 60) {
    console.log('D');
  } else {
      console.log('F');
  }
}

// tests:
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
