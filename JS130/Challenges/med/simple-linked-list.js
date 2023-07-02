/*
data structure:
-element
  [2|->{1}] [1|->null]
  `tail` true if `ptr` -> null
  `next` return `ptr`
 */
'use strict';

class Element {
  constructor(datumIn, ptr = null) {
    this.datumIn = datumIn;
    this.ptr = ptr;
  }
  datum() {
    return this.datumIn;
  }
  isTail() {
    return this.ptr === null;
  }
  next() {
    return this.ptr;
  }
}

class SimpleLinkedList {
  constructor() {
    this.currentSize = 0;
    this.lList = [];
  }
  /*
  rules:
  - size starts 0
  - isEmpty -> true if size 0
  - push adds element of datum (arg)
  -- inc `currentSize`
  data structure:
  - size
   */
  _incSize() {
    this.currentSize += 1;
  }
  _decSize() {
    this.currentSize -= 1;
  }
  size() {
    return this.currentSize;
  }
  peek() {
    if (this.size() === 0) {
      return null;
    } else {
      return this.head().datum();
    }
  }
  isEmpty() {
    return this.currentSize === 0;
  }
  push(num) {
    if (this.size() === 0) {
      this.lList.push(new Element(num));
    } else {
      this.lList.push(new Element(num, this.lList[this.size() -1]));
    }
    this._incSize();
  }
  pop() {

    let last = this.lList.pop();
    this._decSize();
    return last.datum();
  }
  head() {
    // LL) 1 -> null
      // datum 1 -> head 1 && isTail === true
    // LL) 2 -> 1 -> null
      // datum 2 -> head 2 && isTail === false

    // fromArray [1, 2]
      // imp ???
      // head -> 1
      // head -> next -> 2
      // Looks like reverse datum input (descending index)

    // fromArray [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      // peek -> 1
      // head -> next^9 -> 10
    return this.lList[this.size() - 1];
  }

  reverse() {
    let reversedList = new SimpleLinkedList();

    for (let elemNum = this.size() - 1; elemNum > 0; elemNum--) {
      let currentElem = this.head();
      if (elemNum === this.size() - 1) {
        reversedList.push(currentElem.datum());
      }
      for (let traversals = 0; traversals <= elemNum - 1; traversals++) {
        currentElem = currentElem.next();
      }
      reversedList.push(currentElem.datum());
    }
    //console.log(reversedList);
    return reversedList;
  }

  static fromArray(arrIn) {
    if (arrIn === null || arrIn.length === 0) {
      return new SimpleLinkedList();
    }
    let lListOut = new SimpleLinkedList();
    for (let idx = arrIn.length - 1; idx >= 0; idx--) {
      lListOut.push(arrIn[idx]);
    }
    this.currentSize = arrIn.length;
    return lListOut;
  }
  toArray() {
    if (this.size() === 0) return [];

    let arrayFromList = [];
    let currentElem = this.head();

    for (let listIdx = 0; listIdx < this.size(); listIdx++) {
      arrayFromList.push(currentElem.datum());
      currentElem = currentElem.next();
    }
    return arrayFromList;
  }

  }
/*

 */

module.exports = {SimpleLinkedList, Element}

let list = SimpleLinkedList.fromArray([1, 2, 3, 4]);
console.log(list.lList);
console.log(list.reverse().toArray());//.toArray());
//console.log(list.reverse().peek());