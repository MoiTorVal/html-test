class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // underscore means private method
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    // O(1)
    return undefined;
  }

  key() {
    const keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0][0]);
      }
    }
    return keyArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("apple", 10);
myHashTable.set("oranges", 10);
myHashTable.set("grapes", 10);

console.log(myHashTable.key());
