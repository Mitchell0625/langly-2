const Authentication = require("../controllers/authCtrl");
const requireSignIn = passport.authenticate("local", { session: false });
