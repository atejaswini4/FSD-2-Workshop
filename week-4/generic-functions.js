"use strict";
function getFirstPackage(items) {
    return items[0];
}
function wrapInBox(item) {
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
const firstCity = getFirstPackage(cities);
console.log(firstCity);
// Numbers
const pincodes = [
    400001,
    110001,
    560001
];
console.log(getFirstPackage(pincodes));
const phone = {
    brand: "Samsung",
    model: "S24"
};
const packedPhone = wrapInBox(phone);
console.log(packedPhone.parcel.brand);
console.log(packedPhone.timestamp);
