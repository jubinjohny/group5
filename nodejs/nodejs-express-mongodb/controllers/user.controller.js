const db = require("../models");
const User = db.users;
// Create and Save a new User
exports.create = (req, res) => {
  
};
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  
};
// Find a single User with an id
exports.findOne = (req, res) => {
    const email = req.params.email;
    const password = req.params.password;
    User.findById(email)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with email " + email });
        else
        {
            if(data.password == password)
                res.send(data);
            else
                res.status(404).send({ message: "Not found User with email " + email });
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving User with email=" + email });
      });
};
// Update a User by the id in the request
exports.update = (req, res) => {
  
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Users
exports.findAllPublished = (req, res) => {
  
};