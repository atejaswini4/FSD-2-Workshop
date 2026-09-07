import express, { Request, Response } from "express";

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Student Registration",
    college: "SVECW"
  });
});

app.post("/register", (req: Request, res: Response) => {
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