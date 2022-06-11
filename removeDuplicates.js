//Using Set 

const str = 'This is is a test test string is';

function removeDuplicates(str){
  const arr = str.split(' ');
  
  const set = new Set(arr); // set is a data structure that has unique values 
  const newStr = set.join(' '); 
  
  return newStr;
}

removeDuplicates(str); 
