const db = require("../models");
const Image = db.image;
// Find a single User with an id
exports.findAll = (req, res) => {
    const productId = req.query.productId;
    Image.find({productId: productId})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Image for image with " + productId });
        else
        {
          res.send(data);
        }
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Image for image with " + productId });
      });
};