const obj1 = { name: "John" };
const obj2 = obj1; // obj2 now holds a reference to the same object as obj1

obj1.name = "Jane"; // Changes obj1.name to 'Jane'
console.log(obj2.name); // Outputs: 'Jane' - obj2.name is also 'Jane'
