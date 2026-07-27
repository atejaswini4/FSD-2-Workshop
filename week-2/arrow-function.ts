// 1. Traditional Function

function calculateTotalTraditional(price, taxRate) {
    return price + (price * taxRate);
}


// 2. Arrow Function

const calculateTotalArrow = (price, taxRate) => {
    return price + (price * taxRate);
};


// 3. Short Arrow Function

const getWelcomeMessage = (theatre) =>
    `Welcome to ${theatre} Cinemas!`;


// Testing

const ticketPrice = 250;
const gstRate = 0.18;

console.log(getWelcomeMessage("PVR"));

const total1 = calculateTotalTraditional(ticketPrice, gstRate);
console.log(`Total (Traditional): ${total1}`);

const total2 = calculateTotalArrow(ticketPrice, gstRate);
console.log(`Total (Arrow): ${total2}`);