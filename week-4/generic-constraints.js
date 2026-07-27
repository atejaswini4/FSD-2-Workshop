"use strict";
function printLength(item) {
    return item.length;
}
// String
console.log(printLength("TypeScript"));
// Array
console.log(printLength([1, 2, 3, 4]));
// Object
const student = {
    name: "Ravi",
    length: 5
};
console.log(printLength(student));
