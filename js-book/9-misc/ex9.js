let lst = [1, 3, 0, -0];

let findNeg = (val) => {
  if (val === 0) {
    let n = 1 / val;
    if (n < 0) {
      return false;
    }
  }
  return true; 
}
// test loop
for (let i in lst) {
  console.log(findNeg(lst[i]));
}
