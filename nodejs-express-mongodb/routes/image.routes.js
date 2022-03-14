module.exports = app => {
    const image = require("../controllers/image.controller.js");
    var router = require("express").Router();
    // Retrieve all Product Image
    router.get("/", image.findAll);
    app.use('/api/image', router);
  };