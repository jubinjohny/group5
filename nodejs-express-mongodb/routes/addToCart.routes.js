module.exports = app => {
    const user = require("../controllers/addToCart.controller.js");
    var router = require("express").Router();
    // Retrieve all Users
    router.get("/", addToCart.findOne);
    app.use('/api/addToCart', router);
  };