// ES6 - javascript 2015
// let, const
// arrow function
// template string
// default parameter

const myTest = (a = 2, b = 3) => {
  return a + 2 * b;
};
console.log(myTest());

console.log(mySquare(3));

function mySquare(x) {
  return x * x;
}

// template string
const myName = "Mary";
const age = 20;
const greeting = `Hello, my name is ${myName}. I am ${age + 3} years old.`;
console.log(greeting);