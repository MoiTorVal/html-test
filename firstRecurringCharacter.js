// monday

///
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

// function recurringNumber(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] == input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

// console.log(recurringNumber([5, 5, 1, 2]));

function recurringNumber2(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

console.log(recurringNumber2([5, 5, 4, 1]));
