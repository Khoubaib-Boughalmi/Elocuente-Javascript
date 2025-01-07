// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Macrotask from setTimeout');
//     }, 1000);
//     resolve();
// }).then(() => console.log('Microtask from .then()'));

// console.log('Synchronous code');


async function exampleAwait() {
    console.log('Before exampleAwait');
    await Promise.resolve();
    console.log('After exampleAwait');
}

exampleAwait();
console.log('Outside exampleAwait function');

// these functions are similar one utelizes async and the other promises, which proves that async keyword transforms the function into a promise + everything that comes after the await keyword is pushed to microtask as if it is inside of a .then block (callback)

(function examplePromise() {
    return new Promise((resolve, reject) => {
        console.log('Before examplePromise');
        resolve();
    })
})().then(() => {
    console.log('After examplePromise');
})
console.log('Outside examplePromise function');


const promise = new Promise((res) => {
    console.log("object");
})