// Merge Two Arrays

function mergeSortedArrays(arrayOne, arrayTwo) {
  let arrayThree = [];

  for (let i = 0; i < arrayOne.length; i++) {
    arrayThree.push(arrayOne[i]);
  }

  for (let j = 0; j < arrayTwo.length; j++) {
    arrayThree.push(arrayTwo[j]);
  }

  arrayThree.sort((a, b) => a - b);

  console.log(arrayThree);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
