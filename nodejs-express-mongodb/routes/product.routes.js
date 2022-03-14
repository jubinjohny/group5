module.exports = app => {
    const user = require("../controllers/product.controller.js");
    var router = require("express").Router();
    // Retrieve all Product
    router.get("/", product.findOne);
    app.use('/api/product', router);
  };