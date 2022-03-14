module.exports = app => {
    const user = require("../controllers/addReview.controller.js");
    var router = require("express").Router();
    // Retrieve all Users
    router.get("/", addReview.findOne);
    app.use('/api/addReview', router);
  };