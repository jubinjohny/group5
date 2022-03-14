const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")(mongoose);
db.review = require("./review.model.js")(mongoose);
db.image = require("./image.model.js")(mongoose);
db.cart = require("./addToCart.model.js")(mongoose);
db.order = require("./order.model.js")(mongoose);
db.product = require("./product.model.js")(mongoose);
module.exports = db;