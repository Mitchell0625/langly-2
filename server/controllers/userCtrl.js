module.exports = {
  createUser: (req, res, next) => {
    const db = req.app.get("db");

    db.create_user([email, password])
      .then(resp => res.status(200).json(resp))
      .catch(err => console.log(err));
  },

  loginUser: (req, res, next) => {
    const db = req.app.get("db");

    db.login_user([email, password]);
  }
};
