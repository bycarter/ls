// time 9m, 43s
/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

in: 3 nums
out: string, type of triangle
rules:
_ Right: One angle is a right angle (exactly 90 degrees).
_ Acute: All three angles are less than 90 degrees.
_ Obtuse: One angle is greater than 90 degrees.
__ the sum of the angles must be exactly 180 degrees
__ every angle must be greater than 0
algo:
_ validate triangle
__ sum all angles, test if equal to 180, if no return 'invalid'
__ test all angles are greater than 0

_ if any angle is 90, return 'right'
_ if all are less than 90, return 'acute'
_ else return 'obtuse'
*/

function triangle(a1, a2, a3) {
  let triArr = [a1, a2, a3];
  if ((a1 + a2 + a3 !== 180) || triArr.some(a => a === 0)) {
    return console.log('invalid');
  }
  if (triArr.some(elem => elem === 90)) {
    return console.log('right');
  } else if (triArr.every(elem => elem < 90)) {
    return console.log('acute');
  } else return console.log('obtuse');
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
