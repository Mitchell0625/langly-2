require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const bcrypt = require("bcrypt");
const session = require("express-session");
const passport = require("passport");
const port = 4004;

//controllers
const lc = require(`${__dirname}/controllers/languageCtrl`);
const uc = require(`${__dirname}/controllers/userCtrl`);

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2
    }
  })
);

app.get("/api/getlang", lc.getLanguages);
app.post("/api/createuser", uc.createUser);

app.listen(port, () => {
  console.log(`Langly working on port ${port}`);
});
