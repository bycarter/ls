/*
null <- elem1 <- elem2

 */
class Element {
  constructor(num, prevElem = null) {
    this.num = num;
    this.prevElem = prevElem;
    this.datum = prevElem ? prevElem.datum() : 1;
    Element.elements.push(this);
  }

  static elements = [null]

  datum() {
    return this.datum;
  }
  isTail() {
    return this.datum === 1;
  }
  next() {
    return Element.elements[this.datum() - 1];
  }
}

class SimpleLinkedList {

}

module.exports = {SimpleLinkedList, Element}