// input: num
// output: string
// rules:
//  output format "xx:xx"
// algo:
//  declare `sign` init to 1;
//  remove sign from `minIn`
//  convert `minIn` into hours
//  convert hours into days
//  remove highest multiple of days, hours
//  convert into string and log

function timeOfDay(minIn) {
  const MIN_IN_HOURS = 60;
  const HOURS_IN_DAYS = 24;

  let sign = (minIn < 0 ? -1 : 1);
  minIn *= sign  // abs value
  
  let min = minIn % MIN_IN_HOURS;
  let hours = Math.floor(minIn / MIN_IN_HOURS);
  while (hours >= 24) {
    hours -= 24;
  }
  if (sign < 0) {
    hours = HOURS_IN_DAYS - hours - 1;
    min = MIN_IN_HOURS - min;
  }
  return `${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
}


//  tests:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
