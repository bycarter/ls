let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// strings are a primitive datatype, so str2 is a copy ov str1
// and not a reference to the same object.  therefore output will be
// "hello there"
