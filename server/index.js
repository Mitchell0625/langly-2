require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const port = 4004;

//controllers
const lc = require(`${__dirname}/controllers/languageCtrl`);

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);
app.use(json());

app.get("/api/getlang", lc.getLanguages);

app.listen(port, () => {
  console.log(`Langly working on port ${port}`);
});
