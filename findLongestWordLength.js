function findLongestWordLength(str) {
    const newArr = str.split(' ');
    const lengths = [];
  
    newArr.forEach(word => {
      lengths.push(word.length);
    })

    return Math.max(...lengths);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
