"use strict";
var GovernmentID;
(function (GovernmentID) {
    const aadhaarLength = 12;
    function validateAadhaar(id) {
        const isNumeric = /^\d+$/.test(id);
        return isNumeric && id.length === aadhaarLength;
    }
    GovernmentID.validateAadhaar = validateAadhaar;
    function validatePAN(pan) {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan.toUpperCase());
    }
    GovernmentID.validatePAN = validatePAN;
    let Tax;
    (function (Tax) {
        function calculateGST(amount) {
            return amount * 0.18;
        }
        Tax.calculateGST = calculateGST;
    })(Tax = GovernmentID.Tax || (GovernmentID.Tax = {}));
})(GovernmentID || (GovernmentID = {}));
// Testing
const myAadhaar = "123456789012";
const myPAN = "ABCDE1234F";
console.log(`Aadhaar Valid: ${GovernmentID.validateAadhaar(myAadhaar)}`);
console.log(`PAN Valid: ${GovernmentID.validatePAN(myPAN)}`);
const billAmount = 1000;
const tax = GovernmentID.Tax.calculateGST(billAmount);
console.log(`GST on ${billAmount} is ${tax}`);
