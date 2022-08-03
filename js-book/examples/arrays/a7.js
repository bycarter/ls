let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
let city = 'Barcelona';

let check = (loc, list) => {
  let isIn = false;
  for (let i in list) {
    if (loc === list[i]) {
      isIn = true;
    }
  }
  return isIn;
}

console.log(check(city, destinations));
