Frequency Counter Pattern
- When you have to first count the frequencies of values and compare them to the frequencies of another set of values 
- Using the right pattern avoides nested loops (n^2)

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
