const db = require("../models");
const AddToCart = db.cart;
// Find a single User with an id
exports.createCartItems = (req, res) => {
    // Validate request
    if (!req.query.productId || !req.query.cartItemQty || !req.query.email || !req.query.price || !req.query.totalPrice) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create a Review
    const cart = new AddToCart({
      productId: req.query.productId,
      cartItemQty: req.query.cartItemQty,
      email: req.query.email,
      price: req.query.price,
      totalPrice: req.query.totalPrice,
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