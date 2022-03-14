module.exports = app => {
    const addReview = require("../controllers/addReview.controller.js");
    var router = require("express").Router();
    // Retrieve all Users
    router.get("/", addReview.createReview);
    app.use('/api/addReview', router);
  };