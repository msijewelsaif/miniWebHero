const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6]

const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);
console.log(sum(1, 2, 3)); // 6
