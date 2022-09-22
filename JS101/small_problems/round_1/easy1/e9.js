let testYears = [2016, 2015, 2100, 2400, 2400000, 240001, 2000, 1900, 1752, 1700, 1, 100, 400];

let isLeap = year => {
  let leap = false;
  if (year > 1752) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
      leap = true;
    }
  } else {
    if (year % 4 === 0) {
      leap = true;
    }
  }
  return leap;
}
for (let i in testYears) {
  console.log(isLeap(testYears[i]));
}
