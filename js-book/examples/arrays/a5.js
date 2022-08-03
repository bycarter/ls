let scores = [96, 47, 113, 89, 100, 102];
let ct = 0;

for (let i in scores) {
  scores[i] >= 100 ? ct += 1: ct = ct;  // not sure how to 'continue'
}

console.log(ct);
