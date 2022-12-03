/*
declare boolLeap init `false`
test if `yearIn` % 4 is 0, set `boolLeap` to `true`
_test if `yearIn` % 100 === 0 `false`
__ test if `yearIn` % 400 is 0 `true`
*/
function isLeapYear(yearIn) {
  let boolLeap = false;
  if (yearIn % 4 === 0) {
    boolLeap = true;
    if (yearIn % 100 === 0) {
      boolLeap = false;
      if (yearIn % 400 === 0) {
        boolLeap = true;
      }
    }
  }
  return console.log(boolLeap);
}


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
