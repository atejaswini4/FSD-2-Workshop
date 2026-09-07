"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index", {
        title: "Student Registration",
        college: "SVECW"
    });
});
app.post("/register", (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.send("All fields are required.");
    }
    if (Number(age) < 18) {
        return res.send("Age must be 18 or above.");
    }
    res.render("result", {
        name: name,
        email: email,
        age: age
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
