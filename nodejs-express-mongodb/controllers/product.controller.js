const db = require("../models");
const Product = db.product;
// Find a single User with an id
exports.findOne = (req, res) => {
    const productId = req.query.productId;
    Product.findOne({productId: productId})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Product for product with " + productId });
        else
        {
          res.send(data);
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Product for product with " + productId });
      });
};