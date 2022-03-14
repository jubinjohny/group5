module.exports = app => {
    const user = require("../controllers/order.controller.js");
    var router = require("express").Router();
    // Retrieve all Users
    router.get("/", order.findOne);
    app.use('/api/order', router);
  };