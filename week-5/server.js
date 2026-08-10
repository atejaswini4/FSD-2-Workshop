"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Basic routes
app.get("/", (req, res) => {
    res.send("Welcome to Express Server 🚀");
});
app.get("/about", (req, res) => {
    res.send("This is About Page");
});
// Route parameters
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
// Query parameters
app.get("/search", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Name: ${name}, Age: ${age}`);
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map