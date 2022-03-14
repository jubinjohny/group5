module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    // Retrieve all Users
    router.get("/", user.findOne);
    app.use('/api/user', router);
  };