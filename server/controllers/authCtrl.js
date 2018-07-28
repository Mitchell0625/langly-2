const jwt = require("jwt-simple");
const jwtStrategy = require("passport-jwt");
const bcrypt = require("bcrypt");
const config = require("../../config");

const generateToken = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

const signin = (req, res, next) => {
  res.send({ token: generateToken(req.user) });
};

const signup = (req, res, next) => {
  const db = req.app.get("db");
  const { email, password } = req.body;
  const saltRounds = 12;

  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      return db
        .createUser(email, hash)
        .then(newUser => {
          res.json({ token: generateToken(newUser) });
        })
        .catch(err => {
          res.json({ error: "There was an error saving to the database" });
        });
    })
    .catch(err => {
      return next(err);
    });
};
