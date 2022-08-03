let wt = 70;
let ht = 181;

let calcBmi = (ht1, wt1) => {
  bmi = wt1 / (ht/100)**2;
  return bmi;
}

//let rdBmi =
console.log(calcBmi(ht, wt).toPrecision(4));
