function outerFn (x) {
    return function innerFn(y) {
        return x + y
    };
};

const inner = outerFn(2);
console.log(inner(1)); // 3
console.log(inner(3)); // 5
console.log(inner(4)); // 6



console.log({} == {});