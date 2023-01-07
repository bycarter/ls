/*
Given the class from the previous problem, Write a class called Square that inherits from Rectangle, and is used like this:
*/

class Rectangle {
  constructor(wid, len) {
    this.len = len;
    this.wid = wid;
  }
  getWidth() {
    return this.wid;
  }
  getLength() {
    return this.len;
  }
  getArea() {
    return this.len * this.wid;
  }
}

class Square extends Rectangle {
  constructor(wid) {
    super(wid, wid);
  }
}


let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
