require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const bcrypt = require('bcrypt');
const passport = require('passport');
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const port = 4004;

const auth = require(`${__dirname}/authentication`);
//controllers
const lc = require(`${__dirname}/controllers/languageCtrl`);
const uc = require(`${__dirname}/controllers/userCtrl`);
const ac = require(`${__dirname}/controllers/authCtrl`);
const awsC = require(`${__dirname}/controllers/awsCtrl`);

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(console.log);

app.use(json());
passport.use(auth.localLogin);
passport.use(auth.jwtLogin);

//auth middleware
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignIn = passport.authenticate('local', { session: false });

//Sign In routes
app.post('/sign-up', ac.signUp);
app.post('/sign-in', ac.signIn);

//Regular Routes
app.get('/api/getlang', lc.getLanguages);
app.post('/api/createuser', uc.createUser);
app.post('/api/upload', awsC.addDoc);

app.listen(port, () => {
  console.log(`Langly working on port ${port}`);
});
