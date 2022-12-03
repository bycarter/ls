//time 16m, 42s
/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

in: 3 nums
out: string, type of triangle or invalid
rules: 
_ test if valid triangle
_ Equilateral: All three sides are of equal length.
_ Isosceles: Two sides are of equal length, while the third is different.
_ Scalene: All three sides are of different lengths.
algo:
_ test if and side is equal to 0, if yes, return 'invalid'
_ test sum of two smallest sides are > longest, if false return 'invalid'
_ create switch
__ if all three sides are equal, return 'equilateral'
__ if 2 sides are equal, return, 'isosceles'
__ if all sides different length, return 'scalene'
*/
function triangle(s1, s2, s3) {
  let sortedSides = [s1, s2, s3].sort((a, b) => a - b);
  if ((sortedSides[0] === 0) || (sortedSides[0] + sortedSides[1] <= sortedSides[2])) {
    return console.log('invalid');
  }
  if (sortedSides.filter(elem => elem === sortedSides[0]).length === 3) {
    return console.log('equilateral');
  } else if ((sortedSides[0] === sortedSides[1])
    || (sortedSides[0] === sortedSides[2])
    || (sortedSides[1] === sortedSides[2])) {
      return console.log('isosceles');
    } else {
      return console.log('scalene')
    }
  }


triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
