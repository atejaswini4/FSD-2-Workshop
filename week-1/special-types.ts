// ANY TYPE
// Can store any type of value

let data: any = 100;

console.log("Any Value:", data);


data = "Hello TypeScript";

console.log("Any Value Changed:", data);



// UNKNOWN TYPE
// Safer alternative to any

let value: unknown = "TypeScript";

console.log("Unknown Value:", value);



// VOID TYPE
// Function does not return any value

function displayMessage(): void {

    console.log("Welcome to TypeScript Lab");

}


displayMessage();



// Function with return type

function addNumbers(a: number, b: number): number {

    return a + b;

}


let result: number = addNumbers(10, 20);


console.log("Addition:", result);