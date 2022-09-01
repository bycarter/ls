function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// what does the following code output?
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

//first break down nests and evaluate inner calls
console.log(rps(
  rps(
    rps("rock", "paper"),  // "paper" 
    rps("rock", "scissors") // "rock"
  ), "rock") );

// replace and evaluate
console.log(rps(
  rps("paper",  "rock"), // "paper"
  "rock") );

// replace and evaluate
console.log(rps("paper", "rock")); // 

// => final eval is "paper"
