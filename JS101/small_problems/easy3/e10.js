// input: number `year`
// output: string
// data s: object for suffex
// algo:
//  if `year` 0 - 100 = '1st'

function century(year) {
  let suffixTH = [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let result = 0;

  if (year <= 100) {
    result = 1;
  } else if (String(year).endsWith('0')) {
    result = year / 100;
  } else {
    result = Math.floor(year / 100) + 1;
  }
  result = String(result);

  for (let suffix of suffixTH) {
    if (result.endsWith(suffix)) {
      result += 'th';
      return console.log(result);
    }
  }
  if (result.endsWith('1')) {
    result += 'st';
  } else if (result.endsWith('2')) {
    result += 'nd';
  } else {
    result += 'rd';
  }

  return console.log(result);
}

// tests:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
