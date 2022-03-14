module.exports = app => {
    const product = require("../controllers/product.controller.js");
    var router = require("express").Router();
    // Retrieve all Product
    router.get("/", product.findOneProduct);
    app.use('/api/product', router);
  };