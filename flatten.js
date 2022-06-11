//Flattening an array without using .flat()

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];

function flatten(arr) {
  arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    
    return acc;
  }, []);  
}

flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]
