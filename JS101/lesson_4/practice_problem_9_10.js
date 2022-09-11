let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function ageSum(obj) {
  let ages = Object.entries(obj).reduce((curr, prev) => curr + prev[1], 0);
  console.log(ages);
}

function ageMin(obj) {
  return console.log(Math.min(...obj));
}
ageMin(ages);
