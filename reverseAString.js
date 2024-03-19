// Create a funciton that reverses a string

const string = "Hi My name is Moises";

// function reverse(str) {
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "put a string";
//   }

//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverse(12));

// function reverseTwo(str) {
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "put a string";
//   }

//   let backWards = [];

//   for (let i = str.length - 1; i >= 0; i--) {
//     backWards.push(str[i]);
//   }

//   return backWards.join("");
// }

// console.log(reverseTwo(string));

const reverse3 = (str) => [...str].reverse().join("");
console.log(reverse3(string));
