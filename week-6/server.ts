
import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000;

// Middleware to process JSON data
app.use(express.json());

// Custom middleware for logging requests
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

// Home route
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Week 6 Express Server");
});

// Sample user data
let users = [
    { id: 1, name: "Teju", age: 20 },
    { id: 2, name: "Priya", age: 21 }
];

// GET - Get all users
app.get("/users", (req: Request, res: Response) => {
    res.json(users);
});

// GET - Get one user
app.get("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    res.json(user);
});

// POST - Add a new user
app.post("/users", (req: Request, res: Response) => {
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
app.put("/users/:id", (req: Request, res: Response) => {
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
app.delete("/users/:id", (req: Request, res: Response) => {
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

