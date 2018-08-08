const passport = require('passport');
const config = require('../config');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');


//local strategy - for logging in to our server
const localOptions = { usernameField: 'email', passwordField: 'passcode' }

const localLogin = new LocalStrategy(localOptions, (email, passcode, done) => {
  const db = req.app.get('db');
  return db.login_user([email]).then(validUser => {
    bcrypt.compare(passcode, validUser.passcode).then((validPasscode) => {
      if (validPasscode) {
        return done(null, valideUser)
      }
      return done(null, false)
    }).catch(err => done(err, false))
  })
})


//jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.KEY_SECRET
};

const jwtLogin = new jwtStrategy(jwtOptions, (payload, done) => {
  const db = req.app.get('db');
  return db.get_user_by_id(payload.sub).then(foundUser => {
    if (foundUser) {
      return done(null, foundUser);
    }
    return done(null, false)
  })
    .catch(err => done(err, false));
});


module.exports = {
  localLogin, jwtLogin
}
