//factorialize a number = n!;

//Solution 1
function factorialize(num) {
  let factorial = 1;

  for(let i = 1; i < num + 1; i++) {
    factorial = factorial * i; // This one counts up: 1, 2, 3, 4, 5
  }

  return factorial
}

//Solution 2 using Recursion 
function factorialize(num) {
  // Terminal condition that checks if the recursion ended
  if (num === 0) {
    return 1 
  }
  
  return num * factorialize(num - 1); // This one counts down: 5, 4, 3, 2, 1
}

factorialize(5);
