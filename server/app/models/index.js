const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.vendors = require("./vendor.model.js")(mongoose);
db.products = require("./product.model.js")(mongoose);
db.transactions = require("./transaction.model.js")(mongoose);
db.categorys = require("./category.model.js")(mongoose);
db.emmanuels = require("./emmanuel.model.js")(mongoose);
db.adminUsers = require("./adminUser.model.js")(mongoose);
db.transactionDetailss = require("./transactionDetails.model.js")(mongoose);
module.exports = db;