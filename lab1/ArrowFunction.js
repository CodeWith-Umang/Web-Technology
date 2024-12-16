// Arrow function

// 1.With no parameter

const demo = () => console.log("Hello World");

demo();

// 2.With one parameter

const square = (x) => x ** 2;

console.log("Square is: " + square(4));

// 3.With multiple parameter

const add = (a, b) => a + b;

console.log("Addition Of Two Num: " + add(10, 20));

// 4.With block body

const mul = (a, b) => {
    const sum = a * b;
    return sum;
};

console.log("Multiplication Of Two Num: " + mul(10, 20));