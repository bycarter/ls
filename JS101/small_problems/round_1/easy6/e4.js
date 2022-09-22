// input: string
// output: string
// algo:
//  if length is odd
//   splice item at floor of length div 2
//  if length is even
//   slice at half -1 to half +1

function centerOf(str) {
  const LEN = str.length;
  const HALF = LEN / 2;

  if (LEN === 1) {
    console.log(str);
  } else if (LEN % 2 !== 0) {
    console.log(str.split('').splice(Math.floor(HALF), 1).join(''));
  } else {
    console.log(str.split('').slice((HALF - 1), (HALF + 1)).join(''));
  }
}
// tests:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
