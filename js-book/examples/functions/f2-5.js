let age = 13;

let catAge = age => {
  if (age === 0) {
    return 0;
  }else if (age === 1) {
    return 15;
  }else if (age === 2) {
    return 24;
  }else if (age > 2) {
    return 24 + (age - 2) * 4;
  }
}

console.log(catAge(age));
