const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); // retrieving protected variables from config file
const express = require("express");
const passport = require("passport");

require("./auth");
const app = express();

const PORT = 3000;

console.log(process.env.CLIENT_ID);

app.get("/", (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get("/auth/google", (req, res) => {
    passport.authenticate("google", { scope: ["email", "profile"] });
});

app.get("/protected", (req, res) => {
    res.send("Hello!");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});