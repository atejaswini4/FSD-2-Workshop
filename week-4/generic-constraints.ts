interface Lengthwise {

    length: number;

}



function printLength<T extends Lengthwise>(item: T): number {


    return item.length;

}



// String

console.log(
    printLength("TypeScript")
);



// Array

console.log(
    printLength([1,2,3,4])
);



// Object

const student = {

    name: "Ravi",

    length: 5

};


console.log(
    printLength(student)
);