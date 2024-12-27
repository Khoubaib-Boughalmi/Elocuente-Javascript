/**
 * function declaration: 3 ways to do this
 */

// console.log(square1(5)); this is NOT possible
const square1 = function (x) {
  let square = x * x;
  return square;
};
console.log(square1(5));

console.log(square2(5)); // this is possible in this function declaration (this kind of function is moved to the top of their scope making them accessible to everyine in that score)
function square2(x) {
  let square = x * x;
  return square;
}

// console.log(square3(5))  // this is NOT possible in arrow function declaration
const square3 = (x) => {
  let square = x * x;
  return square;
};
console.log(square3(5))


console.log(square4(5))
const square4 = x => x * x // same as arrow function
console.log(square4(5))