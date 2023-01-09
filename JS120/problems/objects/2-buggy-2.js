let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    let discountPrice = this.price - discount;

    return console.log(discountPrice);
  },
};


item.discount(20)   // should return 40
//  = 40
item.discount(50)   // should return 25
//  = 20
item.discount(25)   // should return 37.5
//  = 15

let obj = {a: 1, b: 2};
console.log(obj.len)