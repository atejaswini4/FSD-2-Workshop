"use strict";
class BankBranch {
    static bankName = "HDFC Bank";
    static totalAccountsCreated = 0;
    accountNumber;
    accountHolder;
    constructor(name, accNo) {
        this.accountHolder = name;
        this.accountNumber = accNo;
        BankBranch.totalAccountsCreated++;
    }
    static getBankPolicy() {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
    }
    showAccount() {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Account No: ${this.accountNumber}`);
    }
}
// Static access
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();
// Objects
const user1 = new BankBranch("Suresh Raina", "HDFC000123");
const user2 = new BankBranch("Deepika P", "HDFC000456");
user1.showAccount();
user2.showAccount();
console.log(`Total Accounts: ${BankBranch.totalAccountsCreated}`);
