//Given an integer array nums sorted in 'non-decreasing' (meaning it will always be 1, 1, 2, 2...) order, 
//remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//Two pointer approach: searching 'pairs' in a 'sorted' array 
//Examples of this approach: One slow-runner and the other fast-runner. One pointer starts from the beginning while the other pointer starts from the end.

var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length, j++) {
          if (nums[i] === nums[j] {
              continue
            }
        }
    }

};
  
removeDuplicates([1, 1, 2]);
