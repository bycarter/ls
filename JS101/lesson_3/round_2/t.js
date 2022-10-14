function call(arg) {
 return arg.map(arr => {
    return arr.filter(item => {
      if (typeof item === 'number') {    // if it's a number
        return item;
      } else {
        return item.length < 6;
      }
    });
  });
}

console.log(call([[8, 13, 27], ['apple', 'banana', 'cantaloupe']]));
