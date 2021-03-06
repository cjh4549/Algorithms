var findMedianSortedArrays = function(nums1, nums2) {
    const newNum = nums1.concat(nums2); 
    
    //array.sort(function(a, b){ return a - b) sorts numbers numerically
    newNum.sort(function(a, b){
        return a - b;
    });
    
    const startIndex = 0;
    const endIndex = newNum.length - 1;
    
    //% 2 !== 0 is odd and % 2 === 0 is even 
    if(newNum.length % 2 !== 0 ) {
        const oddMedian = newNum[Math.floor(endIndex / 2)];
        console.log(`merged array = ${newNum} and median is ${oddMedian}`);
        return oddMedian;
    } 
    else if (newNum.length % 2 === 0) {
        const evenMedian = (newNum[Math.floor(endIndex / 2)] + newNum[Math.ceil(endIndex / 2)]) / 2;
        console.log(`merged array = ${newNum} and median is ${evenMedian} `);
        return evenMedian;
    }
};

findMedianSortedArrays([-1, -2], [3,4]); 
