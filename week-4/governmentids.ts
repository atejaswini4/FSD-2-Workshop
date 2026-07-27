namespace GovernmentID {


    const aadhaarLength = 12;



    export function validateAadhaar(id: string): boolean {


        const isNumeric = /^\d+$/.test(id);


        return isNumeric && id.length === aadhaarLength;

    }



    export function validatePAN(pan: string): boolean {


        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;


        return panRegex.test(pan.toUpperCase());

    }



    export namespace Tax {


        export function calculateGST(amount: number): number {


            return amount * 0.18;

        }

    }

}



// Testing


const myAadhaar = "123456789012";

const myPAN = "ABCDE1234F";


console.log(
    `Aadhaar Valid: ${GovernmentID.validateAadhaar(myAadhaar)}`
);


console.log(
    `PAN Valid: ${GovernmentID.validatePAN(myPAN)}`
);



const billAmount = 1000;


const tax =
    GovernmentID.Tax.calculateGST(billAmount);



console.log(
    `GST on ${billAmount} is ${tax}`
);