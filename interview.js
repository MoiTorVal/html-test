// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// ex
//const arr1 = ['a', 'b']
//const arr2 = ['s', 'd'] return false
//const arr1 = ['a', 'b']
//const arr2 = ['s', 'a'] return true

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "d"];

// time complexity O(n^2), space complexity O(1)
function checkArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(true, arr1[i], arr2[j]);
      }
    }
  }
}

// linear time and space
function checkArray2(array1, array2) {
  const set1 = new Set(array1);

  for (let i = 0; i < array2.length; i++) {
    if (set1.has(array2[i])) {
      return true;
    }
  }

  return false;
}

console.log(checkArray2(array1, array2));
