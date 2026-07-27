import { GST_RATE, CONVENIENCE_FEE } from "./Constants";
export class Ticket {
    passenger;
    baseFare;
    trainNumber;
    constructor(passenger, baseFare, trainNumber) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.trainNumber = trainNumber;
    }
    calculateFinalFare() {
        const taxAmount = this.baseFare * GST_RATE;
        return this.baseFare + taxAmount + CONVENIENCE_FEE;
    }
    printTicket() {
        console.log("--- E-Ticket Confirmed ---");
        console.log(`Passenger: ${this.passenger.name} (${this.passenger.age})`);
        console.log(`Train No: ${this.trainNumber}`);
        console.log(`Total Fare: ${this.calculateFinalFare()}`);
    }
}
