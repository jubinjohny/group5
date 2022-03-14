const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")(mongoose);
db.review = require("./review.model.js")(mongoose);
db.image = require("./image.model.js")(mongoose);
module.exports = db;