let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

console.log(`initial array: ${energy}`);
energy = energy.slice(1);
console.log(`rm fossil: ${energy}`);
energy.push('geothermal');
console.log(`add 'geothermal': ${energy}`);

