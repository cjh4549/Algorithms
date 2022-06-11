//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
//The lowest number will not always come first.

//Solution 1: binary search approach
function sumAll(arr) {

  let acc = 0;

  if(arr[0] < arr[1]){
    for (let i = arr[0]; i <= arr[1]; i++) {
      acc += i;
    }
  } else {
    for (let i = arr[1]; i <= arr[0]; i++) {
      acc += i;
    }
  }
  return acc;
}

//Solution 2: Math.max()/.min() spread operator
function sumAll(arr) {
  let acc = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    acc += i;
  }
  
  return acc;
}

sumAll([1, 4]);
sumAll([10, 5]);
