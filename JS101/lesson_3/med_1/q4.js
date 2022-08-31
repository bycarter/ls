/* I didn't see the difference at first as I was only looking at the changes
 * in the `buffer` array.  As show in the solution, function1 mutates the argument,
 * while function2 does not.  When `buffer` is passed into the functions, a copy
 * of the varialbe holding the reference to the object is made, but it contains the
 * same reference and is therefore an *alias*.  This means any direct modifications
 * of the properties mutate the object passed in by said *alias*.  I call this
 * entanglement.
 *
 * In function2, the *alias* is also created for `buffer`, but the reference is
 * changed to the new object returned from `buffer.concat(newElement)` when
 * `buffer` is reassigned in line 10.  This *untangles* the *alias* `buffer` in
 * the functions scope, but does not alter mutate the original variable `buffer`.
 *
 * While the return values are the same, if the caller doesn't utilize the return
 * value from function2, the outter scoped `buffer` will not change.
