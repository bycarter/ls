/*
 Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.  You may assume the given string consists of lowercase English letters only.

Example 1:
In: 'abab'
Out: true
Explanation, it is a substring of 'ab'
-----------------------------------------
in: str
out: bool
algo:
_ declare `subStrArr` init []
__ iterate over `arrIn`
__ declare `sub` init to each substring in turn
__ declare `testStr` init to `sub`
___ loop while `testStr` len <= `strIn`
___ if (`testStr` === `strIn`), return `true`

_ return false
*/
function repeatedSubstringPAttern(strIn) {
  for (let i = 0; i < strIn.length; i++) {
    for (let j = i + 1; j <= strIn.length; j++) {
      let sub = strIn.slice(i, j);
      if (sub.length === strIn.length) continue;
      
      let testStr = sub;
      while (testStr.length <= strIn.length) {
        if (testStr === strIn) return true;
        testStr += sub;
      }
    }
  }
  return false;
}

console.log(repeatedSubstringPAttern("abab") === true);
console.log(repeatedSubstringPAttern("aba") === false);
console.log(repeatedSubstringPAttern("aabaaba") === false);
console.log(repeatedSubstringPAttern("abaababaab") === true);
console.log(repeatedSubstringPAttern("abcabcabcabc") === true);

