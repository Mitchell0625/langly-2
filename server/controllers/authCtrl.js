const jwt = require('jwt-simple');
const jwtStrategy = require('passport-jwt');
const bcrypt = require('bcrypt');
const config = require('../../config');

const generateToken = user => {
  return jwt.encode({ sub: user.id }, process.env.KEY_SECRET);
};

const signIn = (req, res, next) => {
  res.send({ token: generateToken() });
};

const signUp = (req, res, next) => {
  const db = req.app.get('db');
  const { email, password } = req.body;
  const saltRounds = 12;

  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      db.create_user([email, hash])
        .then(newUser => {
          res.status(200).json({ token: generateToken(newUser) });
        })
        .catch(err => {
          res.json({ err: 'There was an error saving to the database' });
        });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  signIn,
  signUp
};
