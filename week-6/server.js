"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to process JSON data
app.use(express_1.default.json());
// Custom middleware for logging requests
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(logger);
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Week 6 Express Server");
});
// Sample user data
let users = [
    { id: 1, name: "Teju", age: 20 },
    { id: 2, name: "Priya", age: 21 }
];
// GET - Get all users
app.get("/users", (req, res) => {
    res.json(users);
});
// GET - Get one user
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.json(user);
});
// POST - Add a new user
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser);
    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});
// PUT - Update a user
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    user.name = req.body.name;
    user.age = req.body.age;
    res.json({
        message: "User updated successfully",
        user: user
    });
});
// DELETE - Delete a user
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    const deletedUser = users.splice(index, 1);
    res.json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map