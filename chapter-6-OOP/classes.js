class Animal {
  #type;
  #name;
  constructor(type, name, numberOfLegs) {
    this.#type = type; // Private field
    this.#name = name;
    this.numberOfLegs = numberOfLegs;
  }

  getType() {
    return this.#type;
  }

  getName() {
    return this.#name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog", name, 4);
  }

  bark() {
    console.log(`${this.getName()} says WOOOF`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super("Cat", name, 4);
  }

  meow() {
    console.log(`${this.getName()} says MEOOOOW`);
  }
}

const buddy = new Dog("Buddy");
const loki = new Cat("Loki");

console.log(loki.getName());
loki.meow();


console.log(buddy.getName());
buddy.bark();
