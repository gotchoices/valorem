const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "your secret key",
    resave: false,
    saveUninitialized: true,
  })
);

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  res.send("Welcome to our application!");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.send("User already exists!");
  } else {
    await User.create({ username, password });
    res.send("Registration successful!");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && user.password === password) {
    req.session.user = username;
    res.send("Login successful!");
  } else {
    res.send("Invalid credentials!");
  }
});

app.get("/logout", (req, res) => {
  if (req.session.user) {
    delete req.session.user;
    res.send("Logout successful!");
  } else {
    res.send("No user is currently logged in!");
  }
});
//
// app.listen(3000, () => console.log('App is listening on port 3000!'));
