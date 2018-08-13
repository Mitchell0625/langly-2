const jwt = require("jwt-simple");
const jwtStrategy = require("passport-jwt");
const bcrypt = require("bcrypt");
const config = require("../../config");

const generateToken = () => {
  return jwt.sign(payload, config.secret, { expiresInMinutes: 1440 });
};

const signin = (req, res, next) => {
  res.send({ token: generateToken() })
};

const signup = (req, res, next) => {
  const db = req.app.get("db");
  const { email, password } = req.body;
  const saltRounds = 12;
  console.log(email, password);
  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      console.log('hit');
      return db
        .create_user([email, hash])
        .then(newUser => {
          res.json({ token: generateToken() });
        })
        .catch(err => {
          res.json({ error: "There was an error saving to the database" });
        });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  signin, signup
}
