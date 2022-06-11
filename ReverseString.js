//Solution 1
function reverse(str) {
  return str.split('').reverse().join('');
}

//Solution 2
function reverse(str) {
  let reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  return reversed;
}

!Notice for backwards for loop, you start i at the length of the array minus one

reverse('Hello, world!')
