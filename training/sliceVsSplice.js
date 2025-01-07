let sliceArr = [1, 2, 3, 4, 5, 6]
let spliceArr = [1, 2, 3, 4, 5, 6]

/**
 * [slice]: Extracts a portion of an array and returns it as a new array without modifying the original array.
 * slice(startIndex: [inclusive], endIndex: [exclusive]): returns the sliced portion
 */

let sliceRes = sliceArr.slice(1, 2)
console.log(sliceRes) // ==> [2]

sliceRes = sliceArr.slice(1, 1)
console.log(sliceRes) // ==> []

sliceRes = sliceArr.slice(1) // === [1...len(arr)] 
console.log(sliceRes) // ==> [2, 3, 4, 5, 6]

sliceRes = sliceArr.slice(-1) // === [arr.length - 1, , arr.length] 
console.log(sliceRes) // ==> [6]

sliceRes = sliceArr.slice(-2) // === [arr.length - 2, arr.length] 
console.log(sliceRes) // ==> [5, 6]


/**
 * [splice]: Removes, replaces, or adds elements to the array in place (modifies the original array).
 * splice(startIndex: [inclusive], numberOfElementsToRemove: [inclusive], ...args: [values to add at the startIndex]): returns an array of the removed elements
 */

let spliceRes = spliceArr.splice(0, 2) // ==> removes 2 elements starting from index 0
console.log(spliceRes) // ==> [1, 2]
console.log(spliceArr) // ==> [3, 4, 5, 6]

spliceArr.splice(0, 0, 1, 2) // ==> adds 1, 2 to spliceArr at index 0
console.log(spliceArr) // ==> [1, 2, 3, 4, 5, 6]
