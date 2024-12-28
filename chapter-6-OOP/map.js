let impureStudent = {
  koby: 25,
  sam: 18,
  laina: 24,
};

console.log("koby in impureStudent? ", "koby" in impureStudent); // true
console.log("Saad in impureStudent? ", "Saad" in impureStudent); // false
console.log("toString in impureStudent? ", "toString" in impureStudent); // true: this is because our Student map is not a pure map it still enherits from Object.prototype

let pureStudent = Object.create(null, {
  koby: { value: 25, writable: true, enumerable: true, configurable: true },
  sam: { value: 18, writable: true, enumerable: true, configurable: true },
  laina: { value: 24, writable: true, enumerable: true, configurable: true },
});

console.log("koby in pureStudent? ", "koby" in pureStudent); // true
console.log("Saad in pureStudent? ", "Saad" in pureStudent); // false
console.log("toString in pureStudent? ", "toString" in pureStudent); // false

let myMap = new Map([
  ["laina", 24],
  ["koby", 25],
  ["sam", 18],
]);

let herMap = new Map();
herMap.set("laina", 24);
herMap.set("koby", 25);
herMap.set("sam", 18);

console.log(myMap);
console.log(myMap.get("sam"));
console.log(myMap.set("koby", 26));
console.log(myMap.get("koby"));
console.log("[keys]", myMap.keys());

console.log(herMap);

console.log("koby in myMap? ", myMap.has("koby")); // true
console.log("Saad in myMap? ", "Saad" in myMap); // false
console.log("toString in myMap? ", myMap.has("toString")); // false
