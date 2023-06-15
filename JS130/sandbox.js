let arr = [1, 2, 3, 4];

// Array.prototype.forEach
arr.forEach(value => console.log(value * value));

// Our forEach function
forEach(arr, value => console.log(value * value));

function forEach(arr, callb, context) {
  for (let elem of arr) {
    callb.call(context, elem);
  }
}

forEach