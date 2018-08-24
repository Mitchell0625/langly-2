const jwt = require('jwt-simple');
const jwtStrategy = require('passport-jwt');
const bcrypt = require('bcrypt');
const config = require('../../config');

const generateToken = payload => {
  console.log('hit generate');
  return jwt.sign(payload, config.secret, { expiresInMinutes: 1440 });
};

const signIn = (req, res, next) => {
  res.send({ token: generateToken() });
};

const signUp = (req, res, next) => {
  const db = req.app.get('db');
  const { email, password } = req.body;
  const saltRounds = 12;
  console.log(email, password);
  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      db.create_user([email, hash])
        .then(newUser => {
          console.log(newUser);
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
