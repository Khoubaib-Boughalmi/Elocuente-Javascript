const arr = [0, 10, 20, 30];

const newArr = arr.filter(v => v < 20);
console.log("filter: ", newArr)

const keysArray = [...arr.keys()];
const enteriesArray = [...arr.entries()];
console.log(keysArray)
console.log(enteriesArray)

const keysIter = arr.values();
console.log("[Iter]: ", keysIter.next().value)
console.log("[Iter]: ", keysIter.next().value)
console.log("[Iter]: ", keysIter.next().value)