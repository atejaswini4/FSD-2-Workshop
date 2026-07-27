class Locker<T> {


    private contents: T;



    constructor(initialItem: T) {

        this.contents = initialItem;

    }



    public getItem(): T {

        console.log("Accessing locker...");

        return this.contents;

    }



    public depositItem(newItem: T): void {


        this.contents = newItem;


        console.log("Locker updated successfully.");

    }

}



// Number Locker

const cashLocker = new Locker<number>(5000);


console.log(
    `Current Balance: ${cashLocker.getItem()}`
);



// String Locker

const documentLocker =
    new Locker<string>("Property Papers");


console.log(
    documentLocker.getItem()
);



// Object Locker

interface Gold {

    weightGrams: number;

    purity: string;

}



const goldLocker =
    new Locker<Gold>({
        weightGrams: 50,
        purity: "24K"
    });



const gold = goldLocker.getItem();


console.log(
    `Gold Weight: ${gold.weightGrams}g`
);