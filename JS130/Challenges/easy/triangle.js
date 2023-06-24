/*
in: triangle (array? of 3 nums?)
out: type of triangle
rules:
- equilateral IF all sides are same len
- isosceles IF any two sides are same len
- scalene IF all three sides are different len
- not a triangle rules??

test cases:
- triangle
-- all sids > 0
-- sum of any two len > third
- equi
-- 3,3,3
-iso
--3, 3, 1
--3, 1, 3
--2, 3, 3
-scal
--(else)
--3,4,5

algo:
.H - `checkIfTriangle`
.. IF any side <=0, return `false`
.. IF s1 + s2 < s3, return `false`
.. IF s1 + s3 < s2, return `false`
.. IF s2 + s3 < s1, return `false`

.IF `checkIfTriangle` === `false`
.. LOG 'NOT A TRIANGLE'

. FILTER `triIn` to s1
.. IF len === 3, return 'equilateral`

. IF s1 === s2 OR s1 === s3 OR s2 === s3
.. RETURN 'isosceles'

. RETURN 'scalene'

 */
'use strict';

class Triangle {
  constructor(...sides) {
    // throws if negative or input not len three
    if (sides.some(side => side <= 0) ||
        sides.length !== 3) {
      throw new Error('Invalid triangle');
    }
    if (sides[0] + sides[1] <= sides[2] ||
        sides[0] + sides[2] <= sides[1] ||
        sides[1] + sides[2] <= sides[0]) {
      throw new Error('Invalid triangle');
    }
  this.sides = sides;
  }

  kind() {
    let [s1, s2, s3] = this.sides;
    if (this.sides.filter(side => side === this.sides[0]).length === 3) {
      return 'equilateral';
    } else if ((s1 === s2) || (s1 === s3) || (s2 === s3)) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}


module.exports = Triangle;