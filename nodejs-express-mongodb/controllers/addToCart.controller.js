const db = require("../models");
const AddToCart = db.cart;
// Find a single User with an id
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Review
    const cart = new AddToCart({
      productId: req.body.productId,
      cartItemQty: req.body.cartItemQty,
      email: req.body.email,
      price: req.body.price,
      totalPrice: req.body.totalPrice,
    });
    // Save Tutorial in the database
    cart
      .save(cart)
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