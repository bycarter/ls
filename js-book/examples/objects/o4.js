let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  console.log(prop);
  if (prop === true) {
    console.log("It's true!");
  }
}
