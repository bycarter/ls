## LESSON 1
> Implement the following built-in Functions:
> - `forEach`, `filter`, `map`, `reduce`

> Write a `filter` and `map` function to pass to `Array.prototype.reduce`

> ***Use `reduce` to perform:
> - Convert array to object
> - Make two calculations in one traversal
> - map and filter in one pass
> - Run asynchronous functions in sequence


## LESSON 2
#### The `var` Keyword
> Explain scoping differences between `var` and `let` / `const`
> - What happens when variables are declared at the top-level?

#### Advanced Scope
> Give an example which shows:
> - local vs global scope
> - inner vs outer scope
> - function vs block scope

> What 5 keywords create declared scope? What type of scope for each?

> What are the 3 frames of reference of scope?

#### Hoisting
> What are the two phases of hoisting?

> Compare `function` and `var` hoisting.

> Compare `function` and function expression hoisting.

> Compare `function` and `class` hoisting.

> Compare `var` and `let` hoisting.

> What is the TDZ?
> - Give an example of a variable stuck in the TDZ

> Create an example of a `function` and `var` declaration collision.
> - How do we describe what is happening?
> - Show an example of the converted 'hoisted' code.

> Explain how hoisting really works. **

> Refactor this code to show hoisting
> ```
> Pet.prototype.walk = function() {
> console.log(`${this.name} is walking.`);
> };
> 
> function Pet(name, image) {
> this.name = name;
> this.image =  image;
> }
> 
> class Image {
> constructor(file) {
> this.file = file;
> }
> }
>
> var catImage = new Image("cat.png");
> var pudding = new Pet("Pudding", catImage);
> ```

#### Strict Mode
> 
> 
#### Closures
> Create an example with closure:
> - function & global variable
> - function returning another function
> - two functions closing over the same variable

> Create an example Partial Function Application
> - When would a return function not be PFA?

> Explain why a partial function application is useful?

#### Closures & Private Data
> Show an example of 3 ways to create Private Data
> 
#### Modules ***
> List the 4 main benefits of using modules

> Implement a CommonJS module with these specs:
> - import a function, variable, and class into a `main` file
> - create private data in the module
> - use destructuring assignment

> Compare CommonJS and JS Module syntax
> - outline key syntax differences
> - list benefits of JS modules

#### IIFE
> Create an example of an IIFE:
> - with an Arrow Function
> - with a function expression
> - with a return function

> Give practical example of using an IIFE in a large code base ***

> Give example of using a block to create a private scope
> - When would this be useful?

> Create an example of an IIFE used to define private data **


#### Shorthand / Syntactic Sugar
> Create Example of:
> - Concise Property Initializer
> - Concise Method Syntax
> - Object Destructuring
> - Array Destructuring
> - Spread Syntax
> - - 3 main uses
> - Rest Syntax
> - - Arguments for a function

> Practice Problem 10.