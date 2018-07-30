const Authentication = require("../controllers/authCtrl");
const requireSignIn = passport.authenticate("local", { session: false });

const passport = require("passport");
const config = require("../config");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

const localOptions = { usernameField: "email" };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  const db = req.app.get("db");
  return db.login_user([email]).then(validUser => {
    bcrypt
      .compare(password, validUser.password)
      .then(validPassword => {
        if (validPassword) {
          return done(null, validUser);
        }
        return done(null, false);
      })
      .catch(err => done(err, false));
  });
});
