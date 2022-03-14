const db = require("../models");
const User = db.user;
// Find a single User with an id
exports.findOne = (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    User.findOne({email: email, password: password})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with email " + email });
        else
        {
          res.send(data);
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving User with email=" + email });
      });
};