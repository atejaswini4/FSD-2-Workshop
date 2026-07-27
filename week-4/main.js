import { Ticket } from "./TicketLogic";
const traveler = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};
const myTicket = new Ticket(traveler, 1200, 12626);
myTicket.printTicket();
