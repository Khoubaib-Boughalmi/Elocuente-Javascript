const obj = { a: 1, b: 2, c: 3 };
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
const str = "hello";
const arr = [10, 20, 30];

for (let index in obj) {
  console.log(`index: ${index} value: ${obj[index]}`);
}

Object.keys(obj).forEach((key) => console.log(`[keys] key: ${key}`));
Object.keys(obj).forEach((key) => console.log(`[keys] value: ${obj[key]}`));

Object.entries(obj).forEach(([key, value]) => console.log(`[foreach entries] key: ${key} value: ${value}`));

for (let [key, value] of Object.entries(obj)) {
  console.log(`[for enteries] key: ${key} value: ${value}`)
}

for (let val of arr) {
  console.log(`[for] value: ${val}`);
}

arr.forEach((val) => console.log(`[forEach] value: ${val}`));

// for (let item of obj){} // not possible Object are not iterable in this way


for (let [itemA, itemB] of map) {
  console.log(`itemA: ${itemA} itemB: ${itemB}`)
}