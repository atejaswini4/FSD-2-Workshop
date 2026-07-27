"use strict";
class Locker {
    contents;
    constructor(initialItem) {
        this.contents = initialItem;
    }
    getItem() {
        console.log("Accessing locker...");
        return this.contents;
    }
    depositItem(newItem) {
        this.contents = newItem;
        console.log("Locker updated successfully.");
    }
}
// Number Locker
const cashLocker = new Locker(5000);
console.log(`Current Balance: ${cashLocker.getItem()}`);
// String Locker
const documentLocker = new Locker("Property Papers");
console.log(documentLocker.getItem());
const goldLocker = new Locker({
    weightGrams: 50,
    purity: "24K"
});
const gold = goldLocker.getItem();
console.log(`Gold Weight: ${gold.weightGrams}g`);
