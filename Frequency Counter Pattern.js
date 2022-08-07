Frequency Counter Pattern
- There are two arrays of characters and you have to check if there exist same characters with same frequencies regardless of their order in both arrays  

Example: 
- Write a function that compares two sets of arrays
- If the first set of values are the squared numbers of the second set, then return true or else false (order does not matter)
- [1, 3, 2], [4, 9, 1] <-- true; order doesn't matter 

Naive approach (nested loop)

function same(arr1, arr2) {
  //if the lengths of the two sets don't match, don't even bother comparing. Return false and terminate. 
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for(let i = 0; i < arr1.length; i++) {
    //use indexOf to find out the index of the corresponding value in the second set 
    //use indexOf over includes() in case there are more than one corresponding values in the second set
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    
    //-1 for when you can't find it
    if (correctIndex == -1) {
      return false;
    }
    
    //At the index you found the correspondent (correctIndex), delete that number and keep on searching 
    //you need the splice to keep them unique
    arr2.splice(correctIndex , 1)
  }
  
  return true;
}

same([1, 3, 2, 2], [4, 9, 1, 4])

Refactor
- Adding multiple loops instead of nested loops
- Utilizing empty counter objects and assigning key-value pairs


function same(arr, arr2) {
  //same number of characters in both arrays? 
  if(arr1.length !== arr2.length) {
    return false;
  }
  //Create shallow objects for each arr
  let counterObj1 = {};
  let counterObj2 = {};
  
  //three loops
  
  //check if counterObj1 has that [val], if not, add it into the obj as a property and increment it 
  for(let val of arr1){
    if(counterObj1[val]) {
      counterObj1[val] += 1;
    } else {
      counterObj1[val] = 1; //if that value is not the property in the obj, then 'create' it and assign value 1 to it
    }
  }
  
  for(let val of arr2){
    if(counterObj2[val]) {
      counterObj2[val] += 1;
    } else {
      counterObj2[val] = 1;
    }
  }
  
  //use 'in' operator to check squared arr1 properties are in obj2 properties  
  //I need to check also if the values of occurrences match 
  
  for (let prop in counterObj1) {
    if(!(prop ** 2) in counterObj2) { //checking properties themselves match
      return false
    }
    else if(counterObj1[prop] !== counterObj2[prop ** 2]) { //checking if the values of properties match
      return false
    }
  }
  
  return true //DO NOT include this in else statement because it won't go through all the characters and 
              //just top immediately once the condition that is not false is found 
              //even though there might be more falsey later down the road 
  
}
