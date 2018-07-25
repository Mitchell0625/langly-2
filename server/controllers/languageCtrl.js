module.exports = {
  getLanguages: (req, res, next) => {
    const db = req.app.get("db");

    db.get_languages()
      .then(languages => res.status(200).json(languages))
      .catch(err => console.log(err));
  }
};
