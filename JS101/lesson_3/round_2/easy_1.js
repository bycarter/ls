// Q1
// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
// BONUS
numbers[4];  // what will this line return?

/*
No it will not raise an error; on `line 4` the value 5 is assigned to
numbers at index 6.  Since this index did not previously exist, it will be
created and assigned the value stated.
---
The global variable `numbers` is declared on `line 3`, and initialized to
the array `[1, 2, 3]`.  Then, on `line 4`, an element is defined at index 6,
and assigned the value of 5.
---
BONUS: what will this output:
This will return `undefined`.
*/
