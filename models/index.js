var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-01");
module.exports.Trail = require("./trail.js");
module.exports.UserComments = require("./userComments.js");
