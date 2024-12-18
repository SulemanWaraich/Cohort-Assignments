
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

const cat = new Animal("Cat", 4);
console.log(cat.describe());
console.log(cat.legCount);

