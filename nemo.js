const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel"];
const large = new Array(1).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      break;
    }
  }
}

findNemo(everyone); // O(n) --> Linear Time

const boxes = [0, 1, 2, 3, 4, 5];

function compressBoxesTwice(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

compressBoxesTwice(boxes); // O(2) --> O(1) --> Constant Time
