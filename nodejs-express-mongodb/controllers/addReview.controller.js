const db = require("../models");
const AddReview = db.review;
// Find a single User with an id
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Review
    const review = new AddReview({
      email: req.body.email,
      productId: req.body.productId,
      rating: req.body.rating,
      text: req.body.text,
    });
    // Save Tutorial in the database
    review
      .save(review)
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