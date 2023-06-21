class SumOfMultiples {
  constructor(...nums) {
    this.nums = nums.length !== 0 ? nums : [3, 5];
    //this.nums = nums;
  }

  static to(numIn) {
    return new SumOfMultiples().to(numIn);
  }

  to(natNum) {
    if (natNum === 1) return 0;

    let multiples = [];

    this.nums.forEach(num => {
      for (let i = num; i < natNum; i += num) {
        if (!multiples.includes(i)) {
          multiples.push(i);
        }
      }
    });
    return multiples.reduce((acc, cur) => acc + cur);
  }
}

module.exports = SumOfMultiples;
