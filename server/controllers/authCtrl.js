const jwt = require("jwt-simple");
const jwtStrategy = require("passport-jwt");
const bcrypt = require("bcrypt");
const config = require("../../config");

const generateToken = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

const signin = (req, res, next) => {
  const db = req.app.get("db");
  const { email, password } = req.body;
  db.login_user([email]).then((data) => {
    res.send({ token: generateToken(req.user) })
  }).catch(err => console.log(err))
};

const signup = (req, res, next) => {
  const db = req.app.get("db");
  const { email, password } = req.body;
  const saltRounds = 12;
  console.log(email);
  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      console.log('hit');
      return db
        .create_user([email, hash])
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

module.exports = {
  signin, signup
}
