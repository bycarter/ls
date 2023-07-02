'use strict';

class Triangle {
  constructor(...sidesIn) {
    // validate side lengths are all > 0
    Triangle._sideLenValid(...sidesIn);

    // validate Inequality Theorem
    Triangle._testInequalityTheorem(sidesIn);

    this.sides = [...sidesIn];
  }
  /*
   - triangle inequality: sum of any two sides > third
   */
  static _sideLenValid(sideIn) {
    // throw error if `sideIn` is invalid
    if (sideIn <= 0) {
      throw new Error('Side length not valid');
    }
    return true;
  }
  static _testInequalityTheorem(arrSidesIn) {
    // test all sides pass Inequality Theorem
    if (arrSidesIn[0] + arrSidesIn[1] > arrSidesIn[2] &&
        arrSidesIn[1] + arrSidesIn[2] > arrSidesIn[0] &&
        arrSidesIn[2] + arrSidesIn[0] > arrSidesIn[1]) {
      return true;
    } else {
      throw new Error('Side lengths fail Inequality Theorem');
    }

  }
  kind() {
    // STUB
    /*
    rules:
    - all sides same len == 'equilateral'
    - two sides equal len == 'isosceles'
    - all sides diff len == 'scalene'
     */
    if (this.sides.every(side => side === this.sides[0])) {
      return 'equilateral';
    } else if (this.sides[0] === this.sides[1] ||
               this.sides[0] === this.sides[2] ||
               this.sides[1] === this.sides[2]) {
    return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;

let t = new Triangle(2, 2, 2);