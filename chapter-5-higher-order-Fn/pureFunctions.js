const users = [
  { name: "Koby", age: 25, sex: "M" },
  { name: "Adam", age: 62, sex: "M" },
  { name: "Rainie", age: 27, sex: "F" },
];

console.log("----------FILTERING-------------");

const filter = (arr, condition) => {
  newArr = [];
  for (let user of arr) {
    if (condition(user)) {
      newArr.push(user);
    }
  }
  return newArr;
};

filteredUsersManual = filter(users, (u) => u.age > 25);
filteredUsersBuiltIn = users.filter((u) => u.age > 25);
console.log(filteredUsersManual);
console.log(filteredUsersBuiltIn);

console.log("----------TRANSFORMING-------------");

const map = (arr, fn) => {
  newArr = [];
  for (let user of arr) {
    newArr.push(fn(user));
  }
  return newArr;
};

console.log(
  map(users, (u) => {
    return { ...u, yearOfBirth: 2024 - u.age };
  })
);

console.log("----------SUMMARIZING-------------");

let totalAgesBuiltIn = users.reduce((a, b) => a + b.age, 0);
console.log(totalAgesBuiltIn / users.length); // average user age

const reduce = (arr, cb, initialVal) => {
  let prev = initialVal;
  for (let current of arr) {
    prev = cb(prev, current);
  }
  return prev;
};


let totalAgesManual = reduce(users, (acc, user) => acc + user.age , 0) 
console.log(totalAgesManual/users.length);