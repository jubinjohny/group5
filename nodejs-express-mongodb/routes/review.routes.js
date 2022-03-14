module.exports = app => {
    const review = require("../controllers/review.controller.js");
    var router = require("express").Router();
    // Retrieve all Reviews
    router.get("/", review.findAll);
    app.use('/api/review', router);
  };