let arr = [1, 2, 3, 4, 5];

console.log(arr["1"]);

let myVar = "Cat";

myVar[0] = "B";
console.log(myVar);

myVar = "Sad";
console.log(myVar);

let obj1 = { value: 10 };
const obj2 = obj1;
let obj3 = { value: 42, type: 64 };

obj1.value = 15;

console.log(obj2); // the content of obj2 can change but not what it reference

// obj2 = obj3 // this will throw an error
console.log(Object.keys(obj3)); // the content of obj2 can change but not what it reference