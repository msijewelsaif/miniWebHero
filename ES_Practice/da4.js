// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const subtract = function (a, b) {
    return a - b;
};

// Arrow Functions
const multiply = (a, b) => a * b;

// Higher-Order Functions
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
