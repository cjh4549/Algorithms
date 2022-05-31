//Test Case
testCase = {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, 10]
  }

function isValidSubsequence(array, sequence) {
    // Write your code here.

    let comparisonArr = [];

    sequence.forEach(element => {
      //If they were strings
      // var comparisonArr = [...s];
      // var sequence = [...t];


      if(array.includes(element)) {
        comparisonArr.push(element);
      } else {
        return //terminate the function
      }
    });

    return JSON.stringify(comparisonArr) == JSON.stringify(sequence);
    
  }

console.log(isValidSubsequence(testCase.array, testCase.sequence));

//changing something to test git