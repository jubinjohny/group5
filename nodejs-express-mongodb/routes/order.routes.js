module.exports = app => {
    const order = require("../controllers/order.controller.js");
    var router = require("express").Router();
    // Retrieve all Users
    router.get("/", order.create);
    app.use('/api/order', router);
  };