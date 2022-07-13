var containsDuplicate = function(nums) {
    //Pass the array into a Set() (which removes duplicates) and then compare its size to the original array. 
    return new Set(nums).size !== nums.length;
};

containsDuplicate([1,2,3,1]);
