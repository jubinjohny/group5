const db = require("../models");
const Review = db.review;
// Find a single User with an id
exports.findAll = (req, res) => {
    const productId = req.query.productId;
    Review.find({productId: productId})
      .then(data => {
        if (!data || data.length==0)
          res.status(404).send({ message: "Not found Review for product with " + productId });
        else
        {
          res.send(data);
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Review for product with " + productId });
      });
};