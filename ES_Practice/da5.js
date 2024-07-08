// Objects
const person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();

// Arrays
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // banana

// Destructuring
const { name, age } = person;
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit); // apple banana
