"use strict";
// ANY TYPE
// Can store any type of value
let data = 100;
console.log("Any Value:", data);
data = "Hello TypeScript";
console.log("Any Value Changed:", data);
// UNKNOWN TYPE
// Safer alternative to any
let value = "TypeScript";
console.log("Unknown Value:", value);
// VOID TYPE
// Function does not return any value
function displayMessage() {
    console.log("Welcome to TypeScript Lab");
}
displayMessage();
// Function with return type
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(10, 20);
console.log("Addition:", result);
