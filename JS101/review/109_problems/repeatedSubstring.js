/*
in: string
out: array
rules:
_ return in array:
__ smallest substring which makes repeats to the total `stringIn`
__ how many repetitions it takes
ds: 
_string
algo:
_ declare `repetitions` init 1
_ declare `qualifyingSubstring` init `stringIn`

_ iterate over all possible substrings
__ declare `testString` init `substring`
__ declare `testRepetitions` init 1

_ loop until `testString` is longer than `stringIn`
__ test IF `stringIn` is equal to `substring`
___ NO, concat `substring` to `testString`,
____ increment `testRepetitions`
___ YES, test IF `substring` is <= `qualifyingSubstring` AND IF `testRepetitions` is >= `repetitions`
____ reassign `repetitions` to `testRepetitions`
____ reassign `qualifyingSubstring` to `substring`

return array [`qualifyingSubstring`, `repetitions`]
*/

function f(stringIn) {
  let repetitions = 1;
  let qualifyingSubstring = stringIn;
  
  for (let outerIndex = 0; outerIndex < stringIn.length; outerIndex++) {
    for (let innerIndex = outerIndex + 1; innerIndex <= stringIn.length; innerIndex++) {
      let substring = stringIn.slice(outerIndex, innerIndex);
      let testString = substring;
      let testRepetitions = 1;
      
      while (testString.length <= stringIn.length) {
        if (testString === stringIn) {
          if ((substring.length <= qualifyingSubstring.length) && (testRepetitions > repetitions))
            repetitions = testRepetitions;
            qualifyingSubstring = substring;
            break;
        } else {
          testString += substring;
          testRepetitions += 1;
        }
      }
    }
  }
  return [qualifyingSubstring, repetitions];
}
