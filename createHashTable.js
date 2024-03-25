class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.data[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }

    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("apple", 10);
myHashTable.set("banana", 20);

console.log(myHashTable.get("apple"));
console.log(myHashTable.get("banana"));
// create new methods
// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
