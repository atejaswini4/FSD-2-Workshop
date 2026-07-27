"use strict";
class FixedDeposit {
    customerName;
    principalAmount;
    interestRate;
    tenureYears;
    constructor(name, amount, rate, years) {
        this.customerName = name;
        this.principalAmount = amount;
        this.interestRate = rate ?? 6.5;
        this.tenureYears = years ?? 1;
    }
    calculateMaturity() {
        const interest = (this.principalAmount * this.interestRate * this.tenureYears) / 100;
        return this.principalAmount + interest;
    }
    displayDetails() {
        console.log("--- FD Receipt ---");
        console.log(`Customer: ${this.customerName}`);
        console.log(`Principal: ${this.principalAmount}`);
        console.log(`Rate: ${this.interestRate}%`);
        console.log(`Tenure: ${this.tenureYears} year(s)`);
        console.log(`Maturity Amount: ${this.calculateMaturity()}`);
        console.log("");
    }
}
// Objects
const standardFD = new FixedDeposit("Rajesh Kumar", 50000);
const seniorCitizenFD = new FixedDeposit("Anjali Sharma", 100000, 7.5, 3);
standardFD.displayDetails();
seniorCitizenFD.displayDetails();
seniorCitizenFD.principalAmount = 110000;
console.log(`Updated Maturity: ${seniorCitizenFD.calculateMaturity()}`);
