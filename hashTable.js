let user = {
  age: 54,
  name: "Moises",
  magic: true,
  scream: function () {
    console.log("ahhhhh!");
  },
};

console.log(user.age); // O(1)
user.spell = "abra kadabra"; // O(1)
console.log(user); // O(1)
console.log(user.magic);

// O(n/k) --> O(n)
const a = new Map();
const b = new Set();
