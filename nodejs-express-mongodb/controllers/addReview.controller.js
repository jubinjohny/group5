const db = require("../models");
const AddReview = db.review;
// Find a single User with an id
exports.createReview = (req, res) => {
    // Validate request
    if (!req.query.email || !req.query.productId || !req.query.rating) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Review
    const review = new AddReview({
      email: req.query.email,
      productId: req.query.productId,
      rating: req.query.rating,
      text: req.query.text,
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