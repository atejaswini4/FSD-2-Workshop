// 1. Parameter & Return Types

function greet(name: string): string {
    return `Namaste, ${name}!`;
}


// 2. Default Parameter

function getLocation(city: string = "Hyderabad"): string {
    return `Location: ${city}`;
}


// 3. Optional Parameter

function sendAlert(phoneNumber: number, message?: string): void {
    console.log(`Sending SMS to ${phoneNumber}`);

    if (message) {
        console.log(`Content: ${message}`);
    }
}


// 4. REST Parameter

function calculateTotalScores(...scores: number[]): number {
    return scores.reduce((total, current) => total + current, 0);
}


// Testing

console.log(greet("Prabhas"));

console.log(getLocation());
console.log(getLocation("Vijayawada"));

sendAlert(9876543210);
sendAlert(9876543210, "Movie starts now!");

const total = calculateTotalScores(10, 20, 30, 40);
console.log(`Total Score: ${total}`);