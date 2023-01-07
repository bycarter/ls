/*
Create a class Rectangle.

The constructor should take 2 arguments which represent width and length respectively.

Implement the class so that the output from the example below is correct.
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

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
