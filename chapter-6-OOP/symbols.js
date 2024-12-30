/**
 *  Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.
 */

function Animal(name, numberOfLegs) {
  this.name = name;
  this.numberOfLegs = numberOfLegs
}

let sym = Symbol("name");
console.log(sym == Symbol("name"));

Animal.prototype[sym] = "AnimalName";

const animal = new Animal("Sed", 4);

console.log(animal.name)
console.log(animal[sym])


let it = "OK"[Symbol.iterator]();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

