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

class Mammal extends Animal {}

class Reptile extends Animal {}

// class newCreature extends Reptile, Mammal {} ==> canno't do this class can only inherit a single superclass

console.log([1] instanceof Array); // true

/**
 *  Objects do more than just hold their own properties. They have prototypes,
    which are other objects. They’ll act as if they have properties they don’t have
    as long as their prototype has that property. Simple objects have Object.
    prototype as their prototype.
    Constructors, which are functions whose names usually start with a capital
    letter, can be used with the new operator to create new objects. The new
    object’s prototype will be the object found in the prototype property of the
    constructor. You can make good use of this by putting the properties that all
    values of a given type share into their prototype. There’s a class notation that
    provides a clear way to define a constructor and its prototype.
    You can define getters and setters to secretly call methods every time an
    object’s property is accessed. Static methods are methods stored in a class’s
    constructor rather than its prototype.
 */
