// input: integer
// output: right triangle of astrisks
// data s: loop
// algo:
//  declare and initialize `star` to '*'
//  start loop while star !== arg
//  print to console `star` with padStart(num)
//  increment `star`
//  decrement `pad`

function triangle(num) {
  let star = '*'

  while (star.length <= num) {
    console.log(star.padStart(num));
    star += '*';
  }
}

triangle(1);
triangle(5);
triangle(10);
