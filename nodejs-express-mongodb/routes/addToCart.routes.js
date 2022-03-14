module.exports = app => {
    const addToCart = require("../controllers/addToCart.controller.js");
    var router = require("express").Router();
    // Retrieve all Users
    router.get("/", addToCart.createCartItems);
    app.use('/api/addToCart', router);
  };