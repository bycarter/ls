let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i in cities) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i]);
}
