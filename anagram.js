function validAnagram(str1, str2){

  if(str1.length !== str2.length) {
    return false;
  }
  
  //Use 'sort' method 
  let changedStr1 = str1.split('').sort().join('');
  let changedStr2 = str2.split('').sort().join('');
  
  if (changedStr1 == changedStr2) {
      return true; 
  } else {
      return false; 
  }
};


function validAnagram(str1, str2){
  if(str1.length !== str2.length) {
    return false;
  }

  const strobj1 = {};
  const strobj2 = {};
  
  for (let letter of str1) {
    if (strobj1[letter]){
      strobj1[letter] += 1;
    } 
    else if (!strobj1[letter]) {
      strobj1[letter] = 1;
    }
  }
  
  for (let letter of str2) {
    if (strobj2[letter]){
      strobj2[letter] += 1;
    } 
    else if (!strobj2[letter]) {
      strobj2[letter] = 1;
    }
  }
  
  for (let prop in strobj1){
    if (strobj1[prop] !== strobj2[prop]) {
      return false;
    }
  }
  
  return true;
  
} 

validAnagram('anagram', 'nagaram');
