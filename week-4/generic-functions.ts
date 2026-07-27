function getFirstPackage<T>(items: T[]): T {

    return items[0];

}



function wrapInBox<T>(item: T) {


    return {

        parcel: item,

        timestamp: new Date()

    };

}



// Strings

const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore"
];


const firstCity =
    getFirstPackage<string>(cities);


console.log(firstCity);



// Numbers

const pincodes = [
    400001,
    110001,
    560001
];


console.log(
    getFirstPackage<number>(pincodes)
);



// Object


interface Electronic {

    brand: string;

    model: string;

}



const phone: Electronic = {

    brand: "Samsung",

    model: "S24"

};



const packedPhone =
    wrapInBox<Electronic>(phone);



console.log(
    packedPhone.parcel.brand
);


console.log(
    packedPhone.timestamp
);