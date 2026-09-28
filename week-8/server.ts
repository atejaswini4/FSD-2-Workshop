import express, { Request, Response, NextFunction } from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
declare module "express-session" {
  interface SessionData {
    user?: string;
  }
}
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "week8-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000
    }
  })
);

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.get("/set-cookie", (req: Request, res: Response) => {
  res.cookie("username", "Teju");
  res.send("Cookie created successfully");
});

app.get("/get-cookie", (req: Request, res: Response) => {
  const username = req.cookies.username;

  if (username) {
    res.send(`Cookie value: ${username}`);
  } else {
    res.send("Cookie not found");
  }
});

app.get("/login", (req: Request, res: Response) => {
  res.render("login");
});

app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === "teju" && password === "1234") {
    req.session.user = username;
    res.redirect("/dashboard");
  } else {
    res.send("Invalid username or password");
  }
});

function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

app.get("/dashboard", isAuthenticated, (req: Request, res: Response) => {
  res.render("dashboard", {
    username: req.session.user
  });
});

app.get("/logout", (req: Request, res: Response) => {
  req.session.destroy((error) => {
    if (error) {
      res.send("Logout failed");
    } else {
      res.redirect("/login");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
