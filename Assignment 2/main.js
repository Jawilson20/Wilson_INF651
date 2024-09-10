// Variables and Data Types
let Name = "Jakolbi Wilson";
let age = 20;
let isStudent = true;
console.log("Name:", Name, "Type:", typeof Name);
console.log("Age:", age, "Type:", typeof age);
console.log("Is Student:", isStudent, "Type:", typeof isStudent);

// Basic Arithmetic Operations
let num1 = 10;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Working with Strings
let sentence = "Hello, world!";
console.log("Length:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.charAt(sentence.length - 1));

// Math Object
let negativeNum = -25;
console.log("Square root:", Math.sqrt(-negativeNum));
console.log("Number squared:", Math.pow(negativeNum, 2));
console.log("Absolute value:", Math.abs(negativeNum));

// Boolean Logic and Comparison Operators
let numA = 15;
let numB = 20;
console.log("Is numA greater than numB?", numA > numB);
console.log("Is numA less than numB?", numA < numB);
console.log("Is numA equal to numB?", numA === numB);

// Logical Operators
let bool1 = true;
let bool2 = false;
console.log("Logical AND (&&):", bool1 && bool2);
console.log("Logical OR (||):", bool1 || bool2);
console.log("Logical NOT (!):", !bool1);

// Using Template Literals
let firstName = "Jakolbi";
let lastName = "Wilson";
let greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting);
