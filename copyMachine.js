//The function is supposed to return a new array made up of num copies of arr

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // If it's two, I need to make another copy of the original array, and then ADD that copied array onto the orignal array
    let copy = [...arr];

    newArr.splice(0, 0, copy);

    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 3));
