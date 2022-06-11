//Flattening an array without using .flat()

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];

function flatten(arr) {
  const [...newArr] = arr;
  
  return newArr
}

flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]
