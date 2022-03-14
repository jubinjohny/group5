const db = require("../models");
const Order = db.order;
// Find a single User with an id
exports.createOrder = (req, res) => {
    // Validate request
    if (!req.query.email || !req.query.orderTotal) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Review
    const order = new Order({
      email: req.query.email,
      orderTotal: req.query.orderTotal,  
    });
    // Save Tutorial in the database
    order
      .save(order)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
};