class DigitalWallet {

    public holderName: string;

    private balance: number;

    private secretPin: number;

    protected loyaltyPoints: number = 0;


    constructor(name: string, initialDeposit: number, pin: number) {

        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }


    public withdrawMoney(amount: number, enteredPin: number): void {

        if (this.verifyPin(enteredPin)) {

            if (this.balance >= amount) {

                this.balance -= amount;

                console.log(
                    `${amount} withdrawn successfully. Remaining balance: ${this.balance}`
                );

            } else {

                console.log("Insufficient funds");

            }

        } else {

            console.log("Incorrect PIN");

        }
    }


    private verifyPin(pin: number): boolean {

        return this.secretPin === pin;
    }
}


// Child class

class PremiumWallet extends DigitalWallet {


    public addBonus(): void {

        this.loyaltyPoints += 100;

        console.log(
            `Bonus added. Points: ${this.loyaltyPoints}`
        );
    }
}


// Execution

const myWallet =
    new DigitalWallet("Arjun Varma", 5000, 1234);


console.log(`Welcome ${myWallet.holderName}`);


myWallet.withdrawMoney(1000, 1234);


const premium =
    new PremiumWallet("Ravi", 10000, 1111);


premium.addBonus();