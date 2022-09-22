let testYears = [2016, 2015, 2100, 2400, 2400000, 240001, 2000, 1900, 1752, 1700, 1, 100, 400];

let isLeap = year => {
  let leap = false;
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
    leap = true;
  }
  console.log(leap);
}
let isL2 = year => {
  // attempt Further Exploration question
}

for (let i in testYears) {
  isLeap(testYears[i]);
}
