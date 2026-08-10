import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Basic routes
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express Server 🚀");
});

app.get("/about", (req: Request, res: Response) => {
    res.send("This is About Page");
});

// Route parameters
app.get("/user/:id", (req: Request, res: Response) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

// Query parameters
app.get("/search", (req: Request, res: Response) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

