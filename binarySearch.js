//You must write an algorithm with O(log n) runtime complexity.
//O(log n) is like looking for a person in a phone book (ex. divide-and-conquer)
//Get the middle index (divide) and see if it's greater or smaller than the target value. Depending on the result, you move the search to the right/left (conquer)
//It 'only' works with sorted array

//Solution 1
// var search = function(array, target) {
//     return array.indexOf(target)
// };

//Left and Right pivot approach
var search = function(array, target){
    let startIndex = 0;
    let endIndex = array.length - 1;
    
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) /2); 
        
        if (array[middleIndex] < target) {
            startIndex = middleIndex + 1;
        } else if (array[middleIndex] > target) {
            endIndex = middleIndex - 1;
        } else if (array[middleIndex] === target) {
            return middleIndex; 
        }
    }
}

search([-1,0,3,5,9,12], 9);

