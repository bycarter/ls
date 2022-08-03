let cmpLen = (s1, s2) => {
  if (s1.length === s2.length) {
    return 0;
  } else if (s1.length > s2.length) {
    return 1;
  } else {
    return -1;
  }
}

console.log(cmpLen('dog', 'turttle'));
